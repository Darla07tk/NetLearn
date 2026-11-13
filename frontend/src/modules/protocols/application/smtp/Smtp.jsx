import { useState } from "react";
import { useNavigate } from "react-router-dom";

import smtpData from "../../../../data/smtpData";

import "./smtp.css";


const steps = [
    {
        title: "User composes the email",
        text: "The sender creates an email using a Mail User Agent such as a mail application or webmail.",
        active: ["sender", "mua"],
        packet: "EMAIL CREATED",
    },

    {
        title: "MUA sends the email",
        text: "The Mail User Agent passes the outgoing email to the mail system for transmission.",
        active: ["sender", "mua", "msa"],
        packet: "MAIL SUBMISSION",
    },

    {
        title: "MSA accepts the email",
        text: "The Mail Submission Agent receives the message from the sender and passes it to the Mail Transfer Agent.",
        active: ["msa", "mta"],
        packet: "MESSAGE ACCEPTED",
    },

    {
        title: "MTA prepares delivery",
        text: "The sending Mail Transfer Agent prepares the email for delivery to the recipient's mail server.",
        active: ["mta"],
        packet: "SMTP DELIVERY",
    },

    {
        title: "TCP connection is established",
        text: "The sending MTA establishes a TCP connection with the receiving SMTP server.",
        active: ["mta", "network", "receiver"],
        packet: "TCP CONNECTION",
    },

    {
        title: "SMTP session begins",
        text: "The SMTP client identifies itself to the receiving server using the HELO or EHLO command.",
        active: ["mta", "receiver"],
        packet: "HELO / EHLO",
    },

    {
        title: "Sender is specified",
        text: "The MAIL FROM command specifies the sender address for the email transaction.",
        active: ["mta", "receiver"],
        packet: "MAIL FROM",
    },

    {
        title: "Recipient is specified",
        text: "The RCPT TO command specifies the recipient address for the email.",
        active: ["mta", "receiver"],
        packet: "RCPT TO",
    },

    {
        title: "Email data is transferred",
        text: "The DATA command begins the transfer of the actual email message content.",
        active: ["mta", "receiver"],
        packet: "DATA",
    },

    {
        title: "Email reaches the receiver",
        text: "The receiving MTA accepts the email and places it into the recipient's mailbox.",
        active: ["receiver", "mailbox"],
        packet: "EMAIL DELIVERED",
    },

    {
        title: "Connection is closed",
        text: "The SMTP session is ended using the QUIT command and the TCP connection is closed.",
        active: ["mta", "receiver"],
        packet: "QUIT",
    },

    {
        title: "Recipient accesses the email",
        text: "The recipient's mail application accesses the received email from the mailbox using a mail retrieval protocol.",
        active: ["mailbox", "mua"],
        packet: "EMAIL ACCESSED",
    },
];


const nodes = [
    ["sender", "Sender", "sender", 80, 150],
    ["mua", "MUA", "mua", 220, 150],
    ["msa", "MSA", "msa", 360, 150],
    ["mta", "SMTP MTA", "mta", 500, 150],
    ["network", "Network", "network", 640, 150],
    ["receiver", "Receiver MTA", "receiver", 780, 150],
    ["mailbox", "Mailbox", "mailbox", 780, 255],
];


const links = [
    ["sender", "mua", 80, 150, 220, 150],
    ["mua", "msa", 220, 150, 360, 150],
    ["msa", "mta", 360, 150, 500, 150],
    ["mta", "network", 500, 150, 640, 150],
    ["network", "receiver", 640, 150, 780, 150],
    ["receiver", "mailbox", 780, 150, 780, 255],
];


function DeviceShape({ type, active }) {

    const className = `smtp-svg-device smtp-svg-${type} ${
        active ? "smtp-svg-active" : ""
    }`;

    if (type === "network") {
        return (
            <circle
                cx="0"
                cy="0"
                r="27"
                className={className}
            />
        );
    }

    if (type === "sender" || type === "mua") {
        return (
            <rect
                x="-30"
                y="-24"
                width="60"
                height="48"
                rx="10"
                className={className}
            />
        );
    }

    if (type === "mailbox") {
        return (
            <rect
                x="-35"
                y="-24"
                width="70"
                height="48"
                rx="10"
                className={className}
            />
        );
    }

    return (
        <rect
            x="-34"
            y="-26"
            width="68"
            height="52"
            rx="11"
            className={className}
        />
    );
}


function DeviceSymbol({ type }) {

    if (type === "sender") {
        return <text className="smtp-svg-symbol">▣</text>;
    }

    if (type === "mua") {
        return <text className="smtp-svg-symbol">✉</text>;
    }

    if (type === "msa") {
        return <text className="smtp-svg-symbol">↥</text>;
    }

    if (type === "mta") {
        return <text className="smtp-svg-symbol">▤</text>;
    }

    if (type === "network") {
        return <text className="smtp-svg-symbol">☁</text>;
    }

    if (type === "receiver") {
        return <text className="smtp-svg-symbol">▤</text>;
    }

    return <text className="smtp-svg-symbol">▰</text>;
}


function Topology({ active, packet }) {

    const activeSet = new Set(active || []);

    return (
        <div className="smtp-topology">

            <svg
                className="smtp-topology-svg"
                viewBox="0 0 860 330"
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
                                        ? "smtp-svg-line smtp-svg-line-active"
                                        : "smtp-svg-line"
                                }
                            />
                        );
                    }
                )}


                {packet && (
                    <g>

                        <rect
                            x="350"
                            y="35"
                            width="160"
                            height="26"
                            rx="13"
                            className="smtp-packet-label"
                        />

                        <text
                            x="430"
                            y="52"
                            textAnchor="middle"
                            className="smtp-packet-text"
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
                                className="smtp-svg-node"
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
                                    className="smtp-svg-label"
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


function TheorySection({ title, data }) {

    return (
        <section className="smtp-theory-section">

            <div className="smtp-section-heading">
                <h2>{title}</h2>
            </div>

            <div className="smtp-theory-box">

                {data.map((section) => (

                    <article
                        className="smtp-theory-card"
                        key={section.title}
                    >

                        <h3>
                            {section.title}
                        </h3>

                        <div className="smtp-theory-point">
                            {section.points[0]}
                        </div>

                    </article>

                ))}

            </div>

        </section>
    );
}


export default function Smtp() {

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
        <main className="smtp-page">

            {/* BACK */}

            <button
                className="smtp-back"
                onClick={() => navigate("/protocols")}
            >
                Back
            </button>


            {/* INTRODUCTION */}

            <section className="smtp-intro">

                <h1>
                    {smtpData.title}
                </h1>

                <div className="smtp-intro-points">

                    {smtpData.intro.map(
                        (point, index) => (
                            <div key={index}>
                                <p>{point}</p>
                            </div>
                        )
                    )}

                </div>

            </section>


            {/* WORKFLOW */}

            <section className="smtp-workflow-section">

                <div className="smtp-section-heading">

                    <div>
                        <h2>
                            Workflow
                        </h2>
                    </div>

                    <span className="smtp-step-counter">
                        {currentStep + 1} / {steps.length}
                    </span>

                </div>


                <div className="smtp-workflow-layout">

                    <button
                        className="smtp-workflow-arrow smtp-workflow-prev"
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
                        className="smtp-workflow-arrow smtp-workflow-next"
                        onClick={nextStep}
                        disabled={
                            currentStep ===
                            steps.length - 1
                        }
                    >
                        ›
                    </button>

                </div>


                <div className="smtp-step-panel">

                    <div className="smtp-step-progress">

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


                    <div className="smtp-step-content">

                        <div className="smtp-step-text">

                            <h3>
                                {step.title}
                            </h3>

                            <p>
                                {step.text}
                            </p>

                        </div>

                    </div>


                    <div className="smtp-controls">

                        <div className="smtp-dots">

                            {steps.map(
                                (_, index) => (
                                    <button
                                        key={index}
                                        className={
                                            index ===
                                            currentStep
                                                ? "smtp-dot-active"
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


            {/* SMTP TYPES */}

            <TheorySection
                title="SMTP Types"
                data={smtpData.theory.types}
            />


            {/* COMPONENTS */}

            <TheorySection
                title="SMTP Components"
                data={smtpData.theory.components}
            />


            {/* SMTP ENVELOPE */}

            <TheorySection
                title="SMTP Envelope"
                data={smtpData.theory.envelope}
            />


            {/* SMTP COMMANDS */}

            <TheorySection
                title="SMTP Commands"
                data={smtpData.theory.commands}
            />


            {/* SMTP PORTS */}

            <TheorySection
                title="SMTP Ports"
                data={smtpData.theory.ports}
            />


            {/* EXTENDED SMTP */}

            <TheorySection
                title="Extended SMTP"
                data={smtpData.theory.extendedSMTP}
            />


            {/* SMTP VS POP VS IMAP */}

            <TheorySection
                title="SMTP vs POP3 vs IMAP"
                data={smtpData.theory.comparison}
            />


            {/* ADVANTAGES */}

            <TheorySection
                title="Advantages of SMTP"
                data={smtpData.theory.advantages}
            />


            {/* DISADVANTAGES */}

            <TheorySection
                title="Disadvantages of SMTP"
                data={smtpData.theory.disadvantages}
            />

        </main>
    );
}