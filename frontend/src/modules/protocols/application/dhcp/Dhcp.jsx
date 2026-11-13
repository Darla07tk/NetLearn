import { useState } from "react";
import { useNavigate } from "react-router-dom";

import dhcpData from "../../../../data/dhcpData";

import "./dhcp.css";


const steps = [
    {
        title: "Device joins the network",
        text: "A new device connects to the network without a valid IP configuration. The DHCP client needs an address and the required network settings.",
        active: ["client"],
        packet: "NO IP CONFIGURATION",
    },

    {
        title: "Client prepares DHCP Discover",
        text: "The DHCP client creates a DHCP Discover message to search for an available DHCP server.",
        active: ["client"],
        packet: "DHCP DISCOVER",
    },

    {
        title: "Discover is broadcast",
        text: "Since the client does not know the DHCP server address, the Discover message is broadcast on the local network using UDP.",
        active: ["client", "switch"],
        packet: "BROADCAST",
    },

    {
        title: "Relay forwards the request",
        text: "When the DHCP server belongs to another subnet, a DHCP relay receives the broadcast and forwards the request toward the server.",
        active: ["client", "switch", "relay"],
        packet: "DHCP RELAY",
    },

    {
        title: "Server receives the Discover",
        text: "The DHCP server receives the request and checks the client information and the available addresses in its configured pool.",
        active: ["server"],
        packet: "DISCOVER RECEIVED",
    },

    {
        title: "Server selects an address",
        text: "The server selects an available IP address and prepares the subnet mask, default gateway, DNS information and lease duration.",
        active: ["server"],
        packet: "IP + NETWORK OPTIONS",
    },

    {
        title: "Server creates the Offer",
        text: "The server prepares a DHCP Offer containing the proposed IP address and the network parameters that can be assigned to the client.",
        active: ["server", "relay", "switch", "client"],
        packet: "DHCP OFFER",
    },

    {
        title: "Client receives the Offer",
        text: "The client examines the available DHCP offers. If multiple servers respond, the client selects one suitable offer.",
        active: ["client"],
        packet: "OFFER SELECTED",
    },

    {
        title: "Client sends DHCP Request",
        text: "The client sends a DHCP Request identifying the selected server and requesting the offered IP address.",
        active: ["client", "switch", "relay", "server"],
        packet: "DHCP REQUEST",
    },

    {
        title: "Server validates the request",
        text: "The selected DHCP server checks the requested address and records the lease for the client if the configuration is valid.",
        active: ["server"],
        packet: "LEASE CHECK",
    },

    {
        title: "Server sends DHCP ACK",
        text: "The server sends a DHCP Acknowledgment confirming the lease and providing the final network configuration.",
        active: ["server", "relay", "switch", "client"],
        packet: "DHCP ACK",
    },

    {
        title: "Client applies the configuration",
        text: "The client configures its IP address, subnet mask, default gateway and DNS server and becomes ready for network communication.",
        active: ["client"],
        packet: "NETWORK CONFIGURED",
    },

    {
        title: "Lease is used",
        text: "The client uses the assigned IP address for the lease period and must renew it before the lease expires.",
        active: ["client", "server"],
        packet: "LEASE ACTIVE",
    },

    {
        title: "Client renews the lease",
        text: "When renewal is required, the client communicates with the DHCP server to continue using the assigned address.",
        active: ["client", "server"],
        packet: "LEASE RENEWAL",
    },
];


const nodes = [
    ["client", "DHCP Client", "client", 130, 250],
    ["switch", "Switch", "switch", 315, 170],
    ["relay", "DHCP Relay", "relay", 500, 170],
    ["server", "DHCP Server", "server", 720, 100],
];


const links = [
    ["client", "switch", 130, 250, 315, 170],
    ["switch", "relay", 315, 170, 500, 170],
    ["relay", "server", 500, 170, 720, 100],
];


function DeviceShape({ type, active }) {

    const className = `dhcp-svg-device dhcp-svg-${type} ${
        active ? "dhcp-svg-active" : ""
    }`;

    if (type === "server") {
        return (
            <rect
                x="-34"
                y="-28"
                width="68"
                height="56"
                rx="11"
                className={className}
            />
        );
    }

    if (type === "switch") {
        return (
            <rect
                x="-26"
                y="-23"
                width="52"
                height="46"
                rx="10"
                className={className}
            />
        );
    }

    if (type === "relay") {
        return (
            <rect
                x="-31"
                y="-25"
                width="62"
                height="50"
                rx="11"
                className={className}
            />
        );
    }

    return (
        <rect
            x="-28"
            y="-24"
            width="56"
            height="48"
            rx="10"
            className={className}
        />
    );
}


function DeviceSymbol({ type }) {

    if (type === "server") {
        return <text className="dhcp-svg-symbol">▤</text>;
    }

    if (type === "switch") {
        return <text className="dhcp-svg-symbol">▦</text>;
    }

    if (type === "relay") {
        return <text className="dhcp-svg-symbol">↔</text>;
    }

    return <text className="dhcp-svg-symbol">▣</text>;
}


function Topology({ active, packet }) {

    const activeSet = new Set(active || []);

    return (
        <div className="dhcp-topology">

            <svg
                className="dhcp-topology-svg"
                viewBox="0 0 900 330"
                preserveAspectRatio="xMidYMid meet"
            >

                {links.map(
                    ([from, to, x1, y1, x2, y2]) => {

                        const highlighted =
                            activeSet.has(from) &&
                            activeSet.has(to);

                        return (
                            <line
                                key={`${from}-${to}`}
                                x1={x1}
                                y1={y1}
                                x2={x2}
                                y2={y2}
                                className={
                                    highlighted
                                        ? "dhcp-svg-line dhcp-svg-line-active"
                                        : "dhcp-svg-line"
                                }
                            />
                        );
                    }
                )}


                {packet && (
                    <g>

                        <rect
                            x="395"
                            y="35"
                            width="110"
                            height="24"
                            rx="12"
                            className="dhcp-packet-label"
                        />

                        <text
                            x="450"
                            y="51"
                            textAnchor="middle"
                            className="dhcp-packet-text"
                        >
                            {packet}
                        </text>

                    </g>
                )}


                {nodes.map(
                    ([id, label, type, x, y]) => {

                        const isActive =
                            activeSet.has(id);

                        return (
                            <g
                                key={id}
                                className="dhcp-svg-node"
                                transform={`translate(${x} ${y})`}
                            >

                                <DeviceShape
                                    type={type}
                                    active={isActive}
                                />

                                <DeviceSymbol
                                    type={type}
                                />

                                <text
                                    y="48"
                                    className="dhcp-svg-label"
                                >
                                    {label}
                                </text>

                            </g>
                        );
                    }
                )}

            </svg>

        </div>
    );
}


export default function Dhcp() {

    const navigate = useNavigate();

    const [currentStep, setCurrentStep] =
        useState(0);

    const step = steps[currentStep];


    const previousStep = () => {

        setCurrentStep(
            (value) => Math.max(value - 1, 0)
        );
    };


    const nextStep = () => {

        setCurrentStep(
            (value) =>
                Math.min(
                    value + 1,
                    steps.length - 1
                )
        );
    };


    return (
        <main className="dhcp-page">

            {/* BACK */}

            <button
                className="dhcp-back"
                onClick={() => navigate("/protocols")}
            >
                Back
            </button>


            {/* INTRODUCTION */}

            <section className="dhcp-intro">

                <h1>
                    {dhcpData.title}
                </h1>

                <div className="dhcp-intro-points">

                    {dhcpData.intro.map(
                        (point, index) => (
                            <div key={index}>
                                <p>{point}</p>
                            </div>
                        )
                    )}

                </div>

            </section>


            {/* WORKFLOW */}

            <section className="dhcp-workflow-section">

                <div className="dhcp-section-heading">

                    <div>

                        <h2>
                            Workflow
                        </h2>

                    </div>

                    <span className="dhcp-step-counter">
                        {currentStep + 1} / {steps.length}
                    </span>

                </div>


                <div className="dhcp-workflow-layout">

                    {/* KEEP THE LARGE SIDE BUTTONS */}

                    <button
                        className="dhcp-workflow-arrow dhcp-workflow-prev"
                        onClick={previousStep}
                        disabled={currentStep === 0}
                    >
                        ‹
                    </button>


                    <Topology
                        active={step.active}
                        packet={step.packet}
                    />


                    <button
                        className="dhcp-workflow-arrow dhcp-workflow-next"
                        onClick={nextStep}
                        disabled={
                            currentStep ===
                            steps.length - 1
                        }
                    >
                        ›
                    </button>

                </div>


                <div className="dhcp-step-panel">

                    <div className="dhcp-step-progress">

                        <div
                            style={{
                                width: `${
                                    ((currentStep + 1) /
                                        steps.length) *
                                    100
                                }%`,
                            }}
                        />

                    </div>


                    <div className="dhcp-step-content">

                        <div className="dhcp-step-text">

                            <h3>
                                {step.title}
                            </h3>

                            <p>
                                {step.text}
                            </p>

                        </div>

                    </div>


                    {/* ONLY DOTS REMAIN HERE */}

                    <div className="dhcp-controls">

                        <div className="dhcp-dots">

                            {steps.map(
                                (_, index) => (
                                    <button
                                        key={index}
                                        className={
                                            index ===
                                            currentStep
                                                ? "dhcp-dot-active"
                                                : ""
                                        }
                                        onClick={() =>
                                            setCurrentStep(
                                                index
                                            )
                                        }
                                        aria-label={`Go to step ${
                                            index + 1
                                        }`}
                                    />
                                )
                            )}

                        </div>

                    </div>

                </div>

            </section>


            {/* DHCP COMPONENTS */}

            <section className="dhcp-components">

                <div className="dhcp-section-heading">

                    <div>
                        <h2>
                            DHCP Components
                        </h2>
                    </div>

                </div>


                <div className="dhcp-theory-box">

                    {dhcpData.theory.components.map(
                        (section) => (

                            <div
                                className="dhcp-theory-section"
                                key={section.title}
                            >

                                <h3>
                                    {section.title}
                                </h3>

                                <div className="dhcp-theory-points">

                                    {section.points.map(
                                        (point, index) => (
                                            <div
                                                key={index}
                                            >
                                                {point}
                                            </div>
                                        )
                                    )}

                                </div>

                            </div>

                        )
                    )}

                </div>

            </section>


            {/* DHCP CONFIGURATION */}

            <section className="dhcp-settings">

                <div className="dhcp-section-heading">

                    <div>
                        <h2>
                            DHCP Network Settings
                        </h2>
                    </div>

                </div>


                <div className="dhcp-theory-box">

                    {dhcpData.theory.networkSettings.map(
                        (section) => (

                            <div
                                className="dhcp-theory-section"
                                key={section.title}
                            >

                                <h3>
                                    {section.title}
                                </h3>

                                <div className="dhcp-theory-points">

                                    {section.points.map(
                                        (point, index) => (
                                            <div
                                                key={index}
                                            >
                                                {point}
                                            </div>
                                        )
                                    )}

                                </div>

                            </div>

                        )
                    )}

                </div>

            </section>


            {/* DHCP LEASE AND SERVICES */}

            <section className="dhcp-messages">

                <div className="dhcp-section-heading">

                    <div>
                        <h2>
                            DHCP Lease Management
                        </h2>
                    </div>

                </div>


                <div className="dhcp-theory-box">

                    {dhcpData.theory.leaseManagement.map(
                        (section) => (

                            <div
                                className="dhcp-theory-section"
                                key={section.title}
                            >

                                <h3>
                                    {section.title}
                                </h3>

                                <div className="dhcp-theory-points">

                                    {section.points.map(
                                        (point, index) => (
                                            <div
                                                key={index}
                                            >
                                                {point}
                                            </div>
                                        )
                                    )}

                                </div>

                            </div>

                        )
                    )}

                </div>

            </section>


            {/* DHCP OTHER MESSAGES */}

            <section className="dhcp-messages">

                <div className="dhcp-section-heading">

                    <div>
                        <h2>
                            Other DHCP Messages
                        </h2>
                    </div>

                </div>


                <div className="dhcp-theory-box">

                    {dhcpData.theory.otherMessages.map(
                        (section) => (

                            <div
                                className="dhcp-theory-section"
                                key={section.title}
                            >

                                <h3>
                                    {section.title}
                                </h3>

                                <div className="dhcp-theory-points">

                                    {section.points.map(
                                        (point, index) => (
                                            <div
                                                key={index}
                                            >
                                                {point}
                                            </div>
                                        )
                                    )}

                                </div>

                            </div>

                        )
                    )}

                </div>

            </section>


            {/* SECURITY */}

            <section className="dhcp-security">

                <div className="dhcp-section-heading">

                    <div>
                        <h2>
                            DHCP Security
                        </h2>
                    </div>

                </div>


                <div className="dhcp-theory-box">

                    {dhcpData.theory.security.map(
                        (section) => (

                            <div
                                className="dhcp-theory-section"
                                key={section.title}
                            >

                                <h3>
                                    {section.title}
                                </h3>

                                <div className="dhcp-theory-points">

                                    {section.points.map(
                                        (point, index) => (
                                            <div
                                                key={index}
                                            >
                                                {point}
                                            </div>
                                        )
                                    )}

                                </div>

                            </div>

                        )
                    )}

                </div>

            </section>


            {/* PACKET FORMAT */}

            <section className="dhcp-packet">

                <div className="dhcp-section-heading">

                    <div>
                        <h2>
                            DHCP Packet Format
                        </h2>
                    </div>

                </div>


                <div className="dhcp-theory-box">

                    {dhcpData.theory.packetFormat.map(
                        (section) => (

                            <div
                                className="dhcp-theory-section"
                                key={section.title}
                            >

                                <h3>
                                    {section.title}
                                </h3>

                                <div className="dhcp-theory-points">

                                    {section.points.map(
                                        (point, index) => (
                                            <div
                                                key={index}
                                            >
                                                {point}
                                            </div>
                                        )
                                    )}

                                </div>

                            </div>

                        )
                    )}

                </div>

            </section>

        </main>
    );
}