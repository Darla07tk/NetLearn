
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import httpsData from "../../../../data/httpsData";
import "./https.css";

function WorkflowDiagram({ step }) {
    const isActive = (id) => step.active.includes(id);

    const packet = step.packet;

    const browserToDns = packet === "DNS QUERY";

    const browserToServer = [
        "CONNECTION",
        "TLS HANDSHAKE",
        "SECURE KEYS",
        "ENCRYPTED REQUEST",
    ].includes(packet);

    const serverToBrowser = [
        "CERTIFICATE",
        "ENCRYPTED RESPONSE",
    ].includes(packet);

    const activeColor = "#3190ed";

    const lineClass = (active) =>
        active ? "https-line https-line-active" : "https-line";

    return (
        <div className="https-workflow">
            <svg
                className="https-workflow-svg"
                viewBox="0 0 1000 400"
                preserveAspectRatio="xMidYMid meet"
                role="img"
                aria-label={`HTTPS workflow: ${step.title}`}
            >
                <defs>
                    <marker
                        id="https-direction-arrow"
                        markerWidth="14"
                        markerHeight="14"
                        refX="12"
                        refY="7"
                        orient="auto"
                        markerUnits="userSpaceOnUse"
                    >
                        <path
                            d="M1 1 L12 7 L1 13 Z"
                            fill={activeColor}
                            stroke="none"
                        />
                    </marker>
                </defs>

                {/* Browser-to-DNS link */}
                <line
                    x1="210"
                    y1="190"
                    x2="390"
                    y2="190"
                    className={lineClass(browserToDns)}
                    markerEnd={
                        browserToDns
                            ? "url(#https-direction-arrow)"
                            : undefined
                    }
                />

                {/* DNS-to-web-server connection */}
                <line
                    x1="610"
                    y1="190"
                    x2="790"
                    y2="190"
                    className="https-line"
                />

                {/* Browser-to-server curved path */}
                <path
                    d="M210 220 Q500 340 790 220"
                    className={lineClass(browserToServer)}
                    markerEnd={
                        browserToServer
                            ? "url(#https-direction-arrow)"
                            : undefined
                    }
                />

                {/* Server-to-browser curved return path */}
                {serverToBrowser && (
                    <path
                        d="M790 220 Q500 340 210 220"
                        className="https-line https-line-active"
                        markerEnd="url(#https-direction-arrow)"
                    />
                )}

                {/* Browser */}
                <g
                    className={
                        isActive("browser") ? "https-node-active" : ""
                    }
                >
                    <rect
                        x="80"
                        y="140"
                        width="130"
                        height="100"
                        rx="14"
                        className="https-device"
                    />

                    <text
                        x="145"
                        y="185"
                        textAnchor="middle"
                        className="https-device-icon"
                    >
                        WEB
                    </text>

                    <text
                        x="145"
                        y="265"
                        textAnchor="middle"
                        className="https-device-label"
                    >
                        Browser
                    </text>
                </g>

                {/* DNS server */}
                <g
                    className={
                        isActive("dns") ? "https-node-active" : ""
                    }
                >
                    <rect
                        x="390"
                        y="140"
                        width="220"
                        height="100"
                        rx="14"
                        className="https-device"
                    />

                    <text
                        x="500"
                        y="185"
                        textAnchor="middle"
                        className="https-device-icon"
                    >
                        DNS
                    </text>

                    <text
                        x="500"
                        y="265"
                        textAnchor="middle"
                        className="https-device-label"
                    >
                        DNS Server
                    </text>
                </g>

                {/* Web server */}
                <g
                    className={
                        isActive("server") ? "https-node-active" : ""
                    }
                >
                    <rect
                        x="790"
                        y="140"
                        width="130"
                        height="100"
                        rx="14"
                        className="https-device"
                    />

                    <text
                        x="855"
                        y="185"
                        textAnchor="middle"
                        className="https-device-icon"
                    >
                        WWW
                    </text>

                    <text
                        x="855"
                        y="265"
                        textAnchor="middle"
                        className="https-device-label"
                    >
                        Web Server
                    </text>
                </g>

                {/* Current packet */}
                {packet && (
                    <g>
                        <rect
                            x="410"
                            y="65"
                            width="180"
                            height="30"
                            rx="15"
                            className="https-packet"
                        />

                        <text
                            x="500"
                            y="85"
                            textAnchor="middle"
                            className="https-packet-text"
                        >
                            {packet}
                        </text>
                    </g>
                )}
            </svg>
        </div>
    );
}

function TheoryBox({ points }) {
    return (
        <div className="https-theory-box">
            <div className="https-theory-points">
                {points.map((point, index) => (
                    <p key={index}>{point}</p>
                ))}
            </div>
        </div>
    );
}

export default function Https() {
    const navigate = useNavigate();
    const [currentStep, setCurrentStep] = useState(0);

    const totalSteps = httpsData.steps.length;
    const step = httpsData.steps[currentStep];

    const previousStep = () => {
        setCurrentStep((value) => Math.max(value - 1, 0));
    };

    const nextStep = () => {
        setCurrentStep((value) =>
            Math.min(value + 1, totalSteps - 1)
        );
    };

    return (
        <main className="https-page">
            <button
                className="https-back"
                onClick={() => navigate("/protocols")}
            >
                Back
            </button>

            <section className="https-intro">
                <h1>{httpsData.title}</h1>

                <div className="https-intro-points">
                    {httpsData.intro.map((point, index) => (
                        <div className="https-info-box" key={index}>
                            <p>{point}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="https-workflow-section">
                <div className="https-section-heading">
                    <h2>Workflow</h2>
                    <p>
                        Step {currentStep + 1}/{totalSteps}
                    </p>
                </div>

                <div className="https-workflow-layout">
                    <button
                        className="https-workflow-arrow https-workflow-prev"
                        onClick={previousStep}
                        disabled={currentStep === 0}
                        aria-label="Previous workflow step"
                    >
                        &lt;
                    </button>

                    <WorkflowDiagram step={step} />

                    <button
                        className="https-workflow-arrow https-workflow-next"
                        onClick={nextStep}
                        disabled={currentStep === totalSteps - 1}
                        aria-label="Next workflow step"
                    >
                        &gt;
                    </button>
                </div>

                <div className="https-step-panel">
                    <div className="https-step-content">
                        <div className="https-step-text">
                            <h3>{step.title}</h3>
                            <p>{step.text}</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="https-theory-section">
                <div className="https-section-heading">
                    <h2>Why HTTPS Matters</h2>
                </div>
                <TheoryBox points={httpsData.theory.importance} />
            </section>

            <section className="https-theory-section">
                <div className="https-section-heading">
                    <h2>Transport Layer Security</h2>
                </div>
                <TheoryBox points={httpsData.theory.tls} />
            </section>

            <section className="https-theory-section">
                <div className="https-section-heading">
                    <h2>Digital Certificate</h2>
                </div>
                <TheoryBox points={httpsData.theory.certificate} />
            </section>

            <section className="https-theory-section">
                <div className="https-section-heading">
                    <h2>Encryption in HTTPS</h2>
                </div>
                <TheoryBox points={httpsData.theory.encryption} />
            </section>

            <section className="https-theory-section">
                <div className="https-section-heading">
                    <h2>Encryption Keys</h2>
                </div>
                <TheoryBox points={httpsData.theory.keys} />
            </section>

            <section className="https-theory-section">
                <div className="https-section-heading">
                    <h2>Cryptographic Algorithms</h2>
                </div>
                <TheoryBox points={httpsData.theory.algorithms} />
            </section>

            <section className="https-theory-section">
                <div className="https-section-heading">
                    <h2>HTTP and HTTPS</h2>
                </div>
                <TheoryBox points={httpsData.theory.comparison} />
            </section>
        </main>
    );
}
