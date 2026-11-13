import React, { useState } from "react";
import "./netbios.css";
import netbiosData from "../../../../data/netbiosData";

const Netbios = () => {
    const [currentStep, setCurrentStep] = useState(0);

    const step = netbiosData.workflow[currentStep];

    const goPrevious = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
        }
    };

    const goNext = () => {
        if (currentStep < netbiosData.workflow.length - 1) {
            setCurrentStep(currentStep + 1);
        }
    };

    const getNodeClass = (nodeId) => {
        return step.activeNodes.includes(nodeId)
            ? "netbios-node-active"
            : "";
    };

    const getLineClass = (lineId) => {
        return step.activeLines.includes(lineId)
            ? "netbios-line-active"
            : "netbios-line";
    };

    return (
        <div className="netbios-page">

            <button
                className="netbios-back"
                onClick={() => window.history.back()}
            >
                Back
            </button>

            {/* INTRO */}
            <section className="netbios-intro">
                <h1>NETBIOS</h1>

                <div className="netbios-intro-points">
                    {netbiosData.introduction.map((point, index) => (
                        <div className="netbios-info-box" key={index}>
                            <p>{point}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* WORKFLOW */}
            <section className="netbios-workflow-section">

                <div className="netbios-section-heading">
                    <h2>Workflow</h2>

                    <div className="netbios-step-counter">
                        {currentStep + 1} / {netbiosData.workflow.length}
                    </div>
                </div>

                <div className="netbios-workflow-layout">

                    <button
                        className="netbios-workflow-arrow netbios-workflow-prev"
                        onClick={goPrevious}
                        disabled={currentStep === 0}
                    >
                        ‹
                    </button>

                    <div className="netbios-workflow">

                        <svg
                            className="netbios-workflow-svg"
                            viewBox="0 0 1000 180"
                            preserveAspectRatio="xMidYMid meet"
                        >

                            {/* CLIENT */}
                            <g
                                className={`netbios-node ${getNodeClass(
                                    "client"
                                )}`}
                            >
                                <rect
                                    className="netbios-device"
                                    x="100"
                                    y="48"
                                    width="58"
                                    height="58"
                                    rx="10"
                                />

                                <text
                                    className="netbios-device-icon"
                                    x="129"
                                    y="84"
                                    textAnchor="middle"
                                >
                                    ▣
                                </text>

                                <text
                                    className="netbios-device-label"
                                    x="129"
                                    y="130"
                                    textAnchor="middle"
                                >
                                    Client
                                </text>
                            </g>

                            {/* NAME SERVICE */}
                            <g
                                className={`netbios-node ${getNodeClass(
                                    "nameService"
                                )}`}
                            >
                                <rect
                                    className="netbios-device"
                                    x="285"
                                    y="48"
                                    width="58"
                                    height="58"
                                    rx="10"
                                />

                                <text
                                    className="netbios-device-icon"
                                    x="314"
                                    y="84"
                                    textAnchor="middle"
                                >
                                    N
                                </text>

                                <text
                                    className="netbios-device-label"
                                    x="314"
                                    y="130"
                                    textAnchor="middle"
                                >
                                    Name Service
                                </text>
                            </g>

                            {/* NETWORK / NBT */}
                            <g
                                className={`netbios-node ${getNodeClass(
                                    "network"
                                )}`}
                            >
                                <rect
                                    className="netbios-device"
                                    x="471"
                                    y="48"
                                    width="58"
                                    height="58"
                                    rx="10"
                                />

                                <text
                                    className="netbios-device-icon"
                                    x="500"
                                    y="84"
                                    textAnchor="middle"
                                >
                                    ⇄
                                </text>

                                <text
                                    className="netbios-device-label"
                                    x="500"
                                    y="130"
                                    textAnchor="middle"
                                >
                                    NBT Network
                                </text>
                            </g>

                            {/* SERVER */}
                            <g
                                className={`netbios-node ${getNodeClass(
                                    "server"
                                )}`}
                            >
                                <rect
                                    className="netbios-device"
                                    x="657"
                                    y="48"
                                    width="58"
                                    height="58"
                                    rx="10"
                                />

                                <text
                                    className="netbios-device-icon"
                                    x="686"
                                    y="84"
                                    textAnchor="middle"
                                >
                                    ◇
                                </text>

                                <text
                                    className="netbios-device-label"
                                    x="686"
                                    y="130"
                                    textAnchor="middle"
                                >
                                    Server
                                </text>
                            </g>

                            {/* SHARED RESOURCE */}
                            <g
                                className={`netbios-node ${getNodeClass(
                                    "resource"
                                )}`}
                            >
                                <rect
                                    className="netbios-device"
                                    x="842"
                                    y="48"
                                    width="58"
                                    height="58"
                                    rx="10"
                                />

                                <text
                                    className="netbios-device-icon"
                                    x="871"
                                    y="84"
                                    textAnchor="middle"
                                >
                                    ▤
                                </text>

                                <text
                                    className="netbios-device-label"
                                    x="871"
                                    y="130"
                                    textAnchor="middle"
                                >
                                    Resource
                                </text>
                            </g>

                            {/* CLIENT → NAME SERVICE */}
                            <line
                                className={getLineClass(
                                    "client-nameService"
                                )}
                                x1="158"
                                y1="77"
                                x2="285"
                                y2="77"
                            />

                            {/* NAME SERVICE → NETWORK */}
                            <line
                                className={getLineClass(
                                    "nameService-network"
                                )}
                                x1="343"
                                y1="77"
                                x2="471"
                                y2="77"
                            />

                            {/* NETWORK → SERVER */}
                            <line
                                className={getLineClass(
                                    "network-server"
                                )}
                                x1="529"
                                y1="77"
                                x2="657"
                                y2="77"
                            />

                            {/* SERVER → RESOURCE */}
                            <line
                                className={getLineClass(
                                    "server-resource"
                                )}
                                x1="715"
                                y1="77"
                                x2="842"
                                y2="77"
                            />

                            {/* DIRECTION ARROW */}
                            {step.activeArrow && (
                                <line
                                    className="netbios-direction-arrow"
                                    x1={step.activeArrow.x1}
                                    y1="77"
                                    x2={step.activeArrow.x2}
                                    y2="77"
                                    markerEnd="url(#netbiosArrow)"
                                />
                            )}

                            <defs>
                                <marker
                                    id="netbiosArrow"
                                    markerWidth="7"
                                    markerHeight="7"
                                    refX="6"
                                    refY="3.5"
                                    orient="auto"
                                    markerUnits="strokeWidth"
                                >
                                    <path
                                        className="netbios-arrow-head"
                                        d="M0,0 L7,3.5 L0,7 Z"
                                    />
                                </marker>
                            </defs>

                        </svg>
                    </div>

                    <button
                        className="netbios-workflow-arrow netbios-workflow-next"
                        onClick={goNext}
                        disabled={
                            currentStep ===
                            netbiosData.workflow.length - 1
                        }
                    >
                        ›
                    </button>
                </div>

                {/* STEP INFORMATION */}
                <div className="netbios-step-panel">

                    <div className="netbios-progress">
                        <div
                            style={{
                                width: `${
                                    ((currentStep + 1) /
                                        netbiosData.workflow.length) *
                                    100
                                }%`,
                            }}
                        />
                    </div>

                    <div className="netbios-step-content">
                        <div className="netbios-step-text">
                            <h3>{step.title}</h3>
                            <p>{step.description}</p>
                        </div>
                    </div>

                </div>
            </section>

            {/* THEORY */}
            {netbiosData.theory.map((section, sectionIndex) => (
                <section
                    className="netbios-theory-section"
                    key={sectionIndex}
                >
                    <div className="netbios-section-heading">
                        <h2>{section.heading}</h2>
                    </div>

                    <div className="netbios-theory-box">
                        <div className="netbios-theory-grid">

                            {section.cards.map((card, cardIndex) => (
                                <div
                                    className="netbios-theory-card"
                                    key={cardIndex}
                                >
                                    <h3>{card.title}</h3>
                                    <p>{card.text}</p>
                                </div>
                            ))}

                        </div>
                    </div>
                </section>
            ))}

        </div>
    );
};

export default Netbios;