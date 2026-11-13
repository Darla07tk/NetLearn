
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import httpData from "../../../../data/httpData";
import "./http.css";

function WorkflowDiagram({ step }) {
    const isActive = (id) => step.active.includes(id);

    const packet = step.packet;

    const browserToDns = packet === "DNS QUERY";
    const dnsToBrowser = packet === "DNS RESPONSE";
    const browserToServer = packet === "HTTP REQUEST";
    const serverToBrowser = packet === "HTTP RESPONSE";

    const activeColor = "#3190ed";

    const lineClass = (active) =>
        active ? "http-line http-line-active" : "http-line";

    return (
        <div className="http-workflow">
            <svg
                className="http-workflow-svg"
                viewBox="0 0 1000 400"
                preserveAspectRatio="xMidYMid meet"
                role="img"
                aria-label={`HTTP workflow: ${step.title}`}
            >
                <defs>
                    <marker
                        id="http-direction-arrow"
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
                            ? "url(#http-direction-arrow)"
                            : undefined
                    }
                />

                {/* DNS-to-browser return link */}
                {dnsToBrowser && (
                    <line
                        x1="390"
                        y1="202"
                        x2="210"
                        y2="202"
                        className="http-line http-line-active"
                        markerEnd="url(#http-direction-arrow)"
                    />
                )}

                {/* DNS-to-web-server link */}
                <line
                    x1="610"
                    y1="190"
                    x2="790"
                    y2="190"
                    className="http-line"
                />

                {/* Browser-to-server request */}
                <path
                    d="M210 220 Q500 340 790 220"
                    className={lineClass(browserToServer)}
                    markerEnd={
                        browserToServer
                            ? "url(#http-direction-arrow)"
                            : undefined
                    }
                />

                {/* Server-to-browser response */}
                {serverToBrowser && (
                    <path
                        d="M790 220 Q500 340 210 220"
                        className="http-line http-line-active"
                        markerEnd="url(#http-direction-arrow)"
                    />
                )}

                {/* Browser */}
                <g
                    className={
                        isActive("browser") ? "http-node-active" : ""
                    }
                >
                    <rect
                        x="80"
                        y="140"
                        width="130"
                        height="100"
                        rx="14"
                        className="http-device"
                    />

                    <text
                        x="145"
                        y="185"
                        textAnchor="middle"
                        className="http-device-icon"
                    >
                        WEB
                    </text>

                    <text
                        x="145"
                        y="265"
                        textAnchor="middle"
                        className="http-device-label"
                    >
                        Browser
                    </text>
                </g>

                {/* DNS server */}
                <g
                    className={
                        isActive("dns") ? "http-node-active" : ""
                    }
                >
                    <rect
                        x="390"
                        y="140"
                        width="220"
                        height="100"
                        rx="14"
                        className="http-device"
                    />

                    <text
                        x="500"
                        y="185"
                        textAnchor="middle"
                        className="http-device-icon"
                    >
                        DNS
                    </text>

                    <text
                        x="500"
                        y="265"
                        textAnchor="middle"
                        className="http-device-label"
                    >
                        DNS Server
                    </text>
                </g>

                {/* Web server */}
                <g
                    className={
                        isActive("server") ? "http-node-active" : ""
                    }
                >
                    <rect
                        x="790"
                        y="140"
                        width="130"
                        height="100"
                        rx="14"
                        className="http-device"
                    />

                    <text
                        x="855"
                        y="185"
                        textAnchor="middle"
                        className="http-device-icon"
                    >
                        WWW
                    </text>

                    <text
                        x="855"
                        y="265"
                        textAnchor="middle"
                        className="http-device-label"
                    >
                        Web Server
                    </text>
                </g>

                {/* Current packet label */}
                {packet && (
                    <g>
                        <rect
                            x="410"
                            y="65"
                            width="180"
                            height="30"
                            rx="15"
                            className="http-packet"
                        />

                        <text
                            x="500"
                            y="85"
                            textAnchor="middle"
                            className="http-packet-text"
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
        <div className="http-theory-box">
            <div className="http-theory-points">
                {points.map((point, index) => (
                    <p key={index}>{point}</p>
                ))}
            </div>
        </div>
    );
}

export default function Http() {
    const navigate = useNavigate();
    const [currentStep, setCurrentStep] = useState(0);

    const totalSteps = httpData.steps.length;
    const step = httpData.steps[currentStep];

    const previousStep = () => {
        setCurrentStep((value) => Math.max(value - 1, 0));
    };

    const nextStep = () => {
        setCurrentStep((value) =>
            Math.min(value + 1, totalSteps - 1)
        );
    };

    return (
        <main className="http-page">
            <button
                className="http-back"
                onClick={() => navigate("/protocols")}
            >
                Back
            </button>

            <section className="http-intro">
                <h1>{httpData.title}</h1>

                <div className="http-intro-points">
                    {httpData.intro.map((point, index) => (
                        <div className="http-info-box" key={index}>
                            <p>{point}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="http-workflow-section">
                <div className="http-section-heading">
                    <h2>Workflow</h2>
                    <p>
                        Step {currentStep + 1} / {totalSteps}
                    </p>
                </div>

                <div className="http-workflow-layout">
                    <button
                        className="http-workflow-arrow http-workflow-prev"
                        onClick={previousStep}
                        disabled={currentStep === 0}
                        aria-label="Previous workflow step"
                    >
                        &lt;
                    </button>

                    <WorkflowDiagram step={step} />

                    <button
                        className="http-workflow-arrow http-workflow-next"
                        onClick={nextStep}
                        disabled={currentStep === totalSteps - 1}
                        aria-label="Next workflow step"
                    >
                        &gt;
                    </button>
                </div>

                <div className="http-step-panel">
                    <div className="http-step-content">
                        <div className="http-step-text">
                            <h3>{step.title}</h3>
                            <p>{step.text}</p>
                        </div>
                    </div>
                </div>
            </section>

            {Object.values(httpData.theory).map((section) => (
                <section
                    className="http-theory-section"
                    key={section.title}
                >
                    <div className="http-section-heading">
                        <h2>{section.title}</h2>
                    </div>

                    <TheoryBox points={section.points} />
                </section>
            ))}
        </main>
    );
}
