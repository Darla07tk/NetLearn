import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import telnetData from "../../../../data/telnetData";
import "./telnet.css";

function Telnet() {
    const navigate = useNavigate();
    const [currentStep, setCurrentStep] = useState(0);

    const step = telnetData.workflow[currentStep];

    const devices = [
        {
            id: "local-computer",
            x: 120,
            y: 170,
            type: "computer",
            symbol: "PC",
            label: "Local Computer",
        },
        {
            id: "telnet-client",
            x: 350,
            y: 170,
            type: "client",
            symbol: "C",
            label: "TELNET Client",
        },
        {
            id: "network-router",
            x: 575,
            y: 170,
            type: "router",
            symbol: "R",
            label: "Network Router",
        },
        {
            id: "telnet-server",
            x: 800,
            y: 170,
            type: "server",
            symbol: "S",
            label: "TELNET Server",
        },
        {
            id: "remote-system",
            x: 1030,
            y: 170,
            type: "computer",
            symbol: "OS",
            label: "Remote System",
        },
    ];

    const links = [
        ["local-computer", "telnet-client"],
        ["telnet-client", "network-router"],
        ["network-router", "telnet-server"],
        ["telnet-server", "remote-system"],
    ];

    const getDevice = (id) =>
        devices.find((device) => device.id === id);

    const isDeviceActive = (id) =>
        id === step.activeFrom || id === step.activeTo;

    const isLinkActive = (from, to) => {
        return (
            (step.activeFrom === from &&
                step.activeTo === to) ||
            (step.activeFrom === to &&
                step.activeTo === from)
        );
    };

    const getLineClass = (from, to) => {
        return isLinkActive(from, to)
            ? "telnet-flow-line"
            : "telnet-svg-line";
    };

    const getArrowPoints = (from, to) => {
        if (!isLinkActive(from, to)) {
            return null;
        }

        const source = getDevice(from);
        const target = getDevice(to);

        const startOffset =
            source.x < target.x ? 32 : -32;

        const endOffset =
            target.x > source.x ? -32 : 32;

        return {
            x1: source.x + startOffset,
            x2: target.x + endOffset,
        };
    };

    return (
        <div className="telnet-page">

            <button
                className="telnet-back"
                onClick={() => navigate("/protocols")}
            >
                Back
            </button>

            <section className="telnet-intro">

                <h1>{telnetData.title}</h1>

                <div className="telnet-intro-points">

                    {telnetData.intro.map((point, index) => (
                        <div key={index}>
                            <p>{point}</p>
                        </div>
                    ))}

                </div>

            </section>

            <section className="telnet-workflow-section">

                <div className="telnet-section-heading">

                    <h2>Workflow</h2>

                    <span className="telnet-step-counter">
                        {currentStep + 1}/{telnetData.workflow.length}
                    </span>

                </div>

                <div className="telnet-workflow-layout">

                    <button
                        className="telnet-workflow-arrow telnet-workflow-prev"
                        disabled={currentStep === 0}
                        onClick={() =>
                            setCurrentStep((prev) => prev - 1)
                        }
                    >
                        ‹
                    </button>

                    <div className="telnet-topology">

                        <svg
                            className="telnet-topology-svg"
                            viewBox="0 0 1150 340"
                            preserveAspectRatio="xMidYMid meet"
                        >

                            <defs>

                                <marker
                                    id="telnetArrow"
                                    markerWidth="5"
                                    markerHeight="5"
                                    refX="4"
                                    refY="2.5"
                                    orient="auto"
                                    markerUnits="strokeWidth"
                                >
                                    <path
                                        d="M0,0 L5,2.5 L0,5"
                                        className="telnet-arrow-head"
                                    />
                                </marker>

                            </defs>

                            {/* Network connections */}

                            {links.map(([from, to], index) => {

                                const source = getDevice(from);
                                const target = getDevice(to);

                                return (
                                    <line
                                        key={`line-${index}`}
                                        x1={source.x}
                                        y1={source.y}
                                        x2={target.x}
                                        y2={target.y}
                                        className={getLineClass(
                                            from,
                                            to
                                        )}
                                    />
                                );
                            })}

                            {/* Active flow direction */}

                            {links.map(([from, to], index) => {

                                const points =
                                    getArrowPoints(from, to);

                                if (!points) {
                                    return null;
                                }

                                return (
                                    <line
                                        key={`flow-${index}`}
                                        x1={points.x1}
                                        y1="170"
                                        x2={points.x2}
                                        y2="170"
                                        className="telnet-flow-arrow-line"
                                        markerEnd="url(#telnetArrow)"
                                    />
                                );
                            })}

                            {/* Devices */}

                            {devices.map((device) => {

                                const active =
                                    isDeviceActive(device.id);

                                return (
                                    <g key={device.id}>

                                        {device.type === "router" ? (

                                            <polygon
                                                points={`
                                                    ${device.x - 27},${device.y}
                                                    ${device.x},${device.y - 20}
                                                    ${device.x + 27},${device.y}
                                                    ${device.x},${device.y + 20}
                                                `}
                                                className={
                                                    active
                                                        ? "telnet-svg-router telnet-active-device"
                                                        : "telnet-svg-router"
                                                }
                                            />

                                        ) : (

                                            <rect
                                                x={device.x - 31}
                                                y={device.y - 23}
                                                width="62"
                                                height="46"
                                                rx="9"
                                                className={
                                                    active
                                                        ? "telnet-svg-device telnet-active-device"
                                                        : "telnet-svg-device"
                                                }
                                            />

                                        )}

                                        <text
                                            x={device.x}
                                            y={device.y}
                                            className={
                                                active
                                                    ? "telnet-svg-symbol telnet-active-symbol"
                                                    : "telnet-svg-symbol"
                                            }
                                        >
                                            {device.symbol}
                                        </text>

                                        <text
                                            x={device.x}
                                            y={device.y + 48}
                                            className="telnet-svg-label"
                                        >
                                            {device.label}
                                        </text>

                                    </g>
                                );
                            })}

                            {/* Current action */}

                            <rect
                                x="535"
                                y="70"
                                width="80"
                                height="28"
                                rx="7"
                                className="telnet-keyword-box"
                            />

                            <text
                                x="575"
                                y="84"
                                className="telnet-keyword-text"
                            >
                                {step.keyword}
                            </text>

                        </svg>

                    </div>

                    <button
                        className="telnet-workflow-arrow telnet-workflow-next"
                        disabled={
                            currentStep ===
                            telnetData.workflow.length - 1
                        }
                        onClick={() =>
                            setCurrentStep((prev) => prev + 1)
                        }
                    >
                        ›
                    </button>

                </div>

                <div className="telnet-step-panel">

                    <div className="telnet-step-progress">

                        <div
                            style={{
                                width: `${(
                                    ((currentStep + 1) /
                                        telnetData.workflow.length) *
                                    100
                                )}%`,
                            }}
                        />

                    </div>

                    <div className="telnet-step-content">

                        <div className="telnet-step-text">

                            <h3>{step.title}</h3>

                            <p>{step.description}</p>

                        </div>

                    </div>

                </div>

            </section>

            <TheorySection
                title="History of TELNET"
                data={telnetData.theory.history}
            />

            <TheorySection
                title="Logging in TELNET"
                data={telnetData.theory.logging}
            />

            <TheorySection
                title="Network Virtual Terminal (NVT)"
                data={telnetData.theory.nvt}
            />

            <TheorySection
                title="TELNET Commands"
                data={telnetData.theory.commands}
            />

            <TheorySection
                title="Uses of TELNET"
                data={telnetData.theory.uses}
            />

            <TheorySection
                title="Advantages of TELNET"
                data={telnetData.theory.advantages}
            />

            <TheorySection
                title="Disadvantages of TELNET"
                data={telnetData.theory.disadvantages}
            />

            <TheorySection
                title="Modes of Operation"
                data={telnetData.theory.modes}
            />

        </div>
    );
}

function TheorySection({ title, data }) {

    return (
        <section className="telnet-theory-section">

            <div className="telnet-section-heading">

                <h2>{title}</h2>

            </div>

            <div className="telnet-theory-box">

                {data.map((item, index) => (

                    <div
                        className="telnet-theory-card"
                        key={index}
                    >

                        <h3>{item.title}</h3>

                        {item.points.map(
                            (point, pointIndex) => (

                                <div
                                    className="telnet-theory-point"
                                    key={pointIndex}
                                >
                                    <p>{point}</p>
                                </div>

                            )
                        )}

                    </div>

                ))}

            </div>

        </section>
    );
}

export default Telnet;