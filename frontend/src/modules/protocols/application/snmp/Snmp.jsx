import { useState } from "react";
import { useNavigate } from "react-router-dom";
import snmpData from "../../../../data/snmpData";
import "./snmp.css";

function WorkflowDiagram({ step }) {
    const active = (node) => step.activeNodes.includes(node);

    const forward = step.direction === "forward";
    const reverse =
        step.direction === "reverse" ||
        step.direction === "backward";

    /*
        Device positions:
        Manager : 130 - 230
        Network : 380 - 480
        Agent   : 520 - 620
        MIB     : 760 - 860
    */

    return (
        <svg
            className="snmp-topology-svg"
            viewBox="0 0 1000 340"
            preserveAspectRatio="xMidYMid meet"
        >
            <defs>
                <marker
                    id="snmp-small-arrow-forward"
                    markerWidth="9"
                    markerHeight="9"
                    refX="8"
                    refY="4.5"
                    orient="auto"
                    markerUnits="userSpaceOnUse"
                >
                    <path
                        d="M0 0 L9 4.5 L0 9"
                        fill="none"
                        stroke="#3190ed"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </marker>

                <marker
                    id="snmp-small-arrow-reverse"
                    markerWidth="9"
                    markerHeight="9"
                    refX="8"
                    refY="4.5"
                    orient="auto"
                    markerUnits="userSpaceOnUse"
                >
                    <path
                        d="M0 0 L9 4.5 L0 9"
                        fill="none"
                        stroke="#3190ed"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </marker>
            </defs>

            {/* =====================================================
                BASE CONNECTIONS
            ====================================================== */}

            <line
                x1="230"
                y1="170"
                x2="380"
                y2="170"
                className="snmp-svg-line"
            />

            <line
                x1="480"
                y1="170"
                x2="520"
                y2="170"
                className="snmp-svg-line"
            />

            <line
                x1="620"
                y1="170"
                x2="760"
                y2="170"
                className="snmp-svg-line"
            />

            {/* =====================================================
                ACTIVE WORKFLOW LINKS
            ====================================================== */}

            {/* Manager -> Network */}
            {forward &&
                active("manager") &&
                active("network") && (
                    <line
                        x1="230"
                        y1="170"
                        x2="380"
                        y2="170"
                        className="snmp-flow-line"
                    />
                )}

            {/* Network -> Agent */}
            {forward &&
                active("network") &&
                active("agent") && (
                    <line
                        x1="480"
                        y1="170"
                        x2="520"
                        y2="170"
                        className="snmp-flow-line"
                    />
                )}

            {/* Agent -> MIB */}
            {forward &&
                active("agent") &&
                active("mib") && (
                    <line
                        x1="620"
                        y1="170"
                        x2="760"
                        y2="170"
                        className="snmp-flow-line"
                    />
                )}

            {/* Agent -> Network */}
            {reverse &&
                active("agent") &&
                active("network") && (
                    <line
                        x1="520"
                        y1="170"
                        x2="480"
                        y2="170"
                        className="snmp-flow-line"
                    />
                )}

            {/* Network -> Manager */}
            {reverse &&
                active("network") &&
                active("manager") && (
                    <line
                        x1="380"
                        y1="170"
                        x2="230"
                        y2="170"
                        className="snmp-flow-line"
                    />
                )}

            {/* =====================================================
                SINGLE DIRECTION ARROW AT THE END OF EACH FLOW
            ====================================================== */}

            {/* Forward flow ending at Agent */}
            {forward &&
                active("agent") &&
                !active("mib") && (
                    <line
                        x1="480"
                        y1="170"
                        x2="518"
                        y2="170"
                        className="snmp-flow-arrow-line"
                        markerEnd="url(#snmp-small-arrow-forward)"
                    />
                )}

            {/* Forward flow ending at MIB */}
            {forward &&
                active("mib") && (
                    <line
                        x1="620"
                        y1="170"
                        x2="758"
                        y2="170"
                        className="snmp-flow-arrow-line"
                        markerEnd="url(#snmp-small-arrow-forward)"
                    />
                )}

            {/* Reverse flow ending at Manager */}
            {reverse &&
                active("manager") && (
                    <line
                        x1="382"
                        y1="170"
                        x2="232"
                        y2="170"
                        className="snmp-flow-arrow-line"
                        markerEnd="url(#snmp-small-arrow-reverse)"
                    />
                )}

            {/* Agent -> MIB read operation */}
            {forward &&
                active("agent") &&
                active("mib") &&
                step.title !== "GetNextRequest" &&
                step.title !== "SetRequest" && (
                    <line
                        x1="620"
                        y1="170"
                        x2="758"
                        y2="170"
                        className="snmp-flow-arrow-line"
                        markerEnd="url(#snmp-small-arrow-forward)"
                    />
                )}

            {/* =====================================================
                MANAGER
            ====================================================== */}

            <g>
                <rect
                    x="130"
                    y="130"
                    width="100"
                    height="80"
                    rx="14"
                    className={
                        active("manager")
                            ? "snmp-active-device"
                            : "snmp-svg-device"
                    }
                />

                <text
                    x="180"
                    y="170"
                    className={
                        active("manager")
                            ? "snmp-svg-symbol snmp-active-symbol"
                            : "snmp-svg-symbol"
                    }
                >
                    M
                </text>

                <text
                    x="180"
                    y="235"
                    className="snmp-svg-label"
                >
                    Manager
                </text>
            </g>

            {/* =====================================================
                NETWORK DEVICE
            ====================================================== */}

            <g>
                <rect
                    x="380"
                    y="130"
                    width="100"
                    height="80"
                    rx="14"
                    className={
                        active("network")
                            ? "snmp-active-device"
                            : "snmp-svg-router"
                    }
                />

                <text
                    x="430"
                    y="170"
                    className={
                        active("network")
                            ? "snmp-svg-symbol snmp-active-symbol"
                            : "snmp-svg-symbol"
                    }
                >
                    R
                </text>

                <text
                    x="430"
                    y="235"
                    className="snmp-svg-label"
                >
                    Network
                </text>
            </g>

            {/* =====================================================
                SNMP AGENT
            ====================================================== */}

            <g>
                <rect
                    x="520"
                    y="130"
                    width="100"
                    height="80"
                    rx="14"
                    className={
                        active("agent")
                            ? "snmp-active-device"
                            : "snmp-svg-device"
                    }
                />

                <text
                    x="570"
                    y="170"
                    className={
                        active("agent")
                            ? "snmp-svg-symbol snmp-active-symbol"
                            : "snmp-svg-symbol"
                    }
                >
                    A
                </text>

                <text
                    x="570"
                    y="235"
                    className="snmp-svg-label"
                >
                    Agent
                </text>
            </g>

            {/* =====================================================
                MIB
            ====================================================== */}

            <g>
                <rect
                    x="760"
                    y="130"
                    width="100"
                    height="80"
                    rx="14"
                    className={
                        active("mib")
                            ? "snmp-active-device"
                            : "snmp-svg-device"
                    }
                />

                <text
                    x="810"
                    y="170"
                    className={
                        active("mib")
                            ? "snmp-svg-symbol snmp-active-symbol"
                            : "snmp-svg-symbol"
                    }
                >
                    DB
                </text>

                <text
                    x="810"
                    y="235"
                    className="snmp-svg-label"
                >
                    MIB
                </text>
            </g>

            {/* =====================================================
                CURRENT MESSAGE LABEL
            ====================================================== */}

            <g>
                <rect
                    x="430"
                    y="55"
                    width="140"
                    height="34"
                    rx="9"
                    className="snmp-keyword-box"
                />

                <text
                    x="500"
                    y="72"
                    className="snmp-keyword-text"
                >
                    {step.keyword}
                </text>
            </g>
        </svg>
    );
}

function TheorySection({ title, items }) {
    return (
        <section className="snmp-theory-section">
            <div className="snmp-section-heading">
                <h2>{title}</h2>
            </div>

            <div className="snmp-theory-box">
                {items.map((item, index) => (
                    <div
                        className="snmp-theory-card"
                        key={`${item.title}-${index}`}
                    >
                        <h3>{item.title}</h3>

                        <div className="snmp-theory-point">
                            {item.points.map((point, pointIndex) => (
                                <p key={pointIndex}>{point}</p>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default function Snmp() {
    const navigate = useNavigate();
    const [currentStep, setCurrentStep] = useState(0);

    const step = snmpData.workflow[currentStep];

    const previousStep = () => {
        setCurrentStep((value) => Math.max(0, value - 1));
    };

    const nextStep = () => {
        setCurrentStep((value) =>
            Math.min(snmpData.workflow.length - 1, value + 1)
        );
    };

    return (
        <div className="snmp-page">
            <button
                className="snmp-back"
                onClick={() => navigate("/protocols")}
            >
                Back
            </button>

            <section className="snmp-intro">
                <h1>{snmpData.title}</h1>

                <div className="snmp-intro-points">
                    {snmpData.intro.map((point, index) => (
                        <div key={index}>
                            <p>{point}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="snmp-workflow-section">
                <div className="snmp-section-heading">
                    <h2>Workflow</h2>

                    <span className="snmp-step-counter">
                        Step {currentStep + 1} / {snmpData.workflow.length}
                    </span>
                </div>

                <div className="snmp-workflow-layout">
                    <button
                        className="snmp-workflow-arrow snmp-workflow-prev"
                        onClick={previousStep}
                        disabled={currentStep === 0}
                        aria-label="Previous step"
                    >
                        ‹
                    </button>

                    <div className="snmp-topology">
                        <WorkflowDiagram step={step} />
                    </div>

                    <button
                        className="snmp-workflow-arrow snmp-workflow-next"
                        onClick={nextStep}
                        disabled={
                            currentStep ===
                            snmpData.workflow.length - 1
                        }
                        aria-label="Next step"
                    >
                        ›
                    </button>
                </div>

                <div className="snmp-step-panel">
                    <div className="snmp-step-progress">
                        <div
                            style={{
                                width: `${
                                    ((currentStep + 1) /
                                        snmpData.workflow.length) *
                                    100
                                }%`,
                            }}
                        />
                    </div>

                    <div className="snmp-step-content">
                        <div className="snmp-step-text">
                            <h3>{step.title}</h3>
                            <p>{step.text}</p>
                        </div>
                    </div>
                </div>
            </section>

            <TheorySection
                title="Architecture"
                items={snmpData.theory.architecture}
            />

            <TheorySection
                title="SNMP Messages"
                items={snmpData.theory.messages}
            />

            <TheorySection
                title="SNMP Security Levels"
                items={snmpData.theory.security}
            />

            <TheorySection
                title="Versions of SNMP"
                items={snmpData.theory.versions}
            />

            <TheorySection
                title="Characteristics of SNMP"
                items={snmpData.theory.characteristics}
            />

            <TheorySection
                title="Advantages of SNMP"
                items={snmpData.theory.advantages}
            />

            <TheorySection
                title="Limitation of SNMP"
                items={snmpData.theory.limitations}
            />
        </div>
    );
}