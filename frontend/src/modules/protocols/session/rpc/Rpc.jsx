import React, { useState } from "react";
import "./rpc.css";
import rpcData from "../../../../data/rpcData";

const Rpc = () => {
    const [currentStep, setCurrentStep] = useState(0);

    const step = rpcData.workflow[currentStep];

    const goPrevious = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
        }
    };

    const goNext = () => {
        if (currentStep < rpcData.workflow.length - 1) {
            setCurrentStep(currentStep + 1);
        }
    };

    const getNodeClass = (nodeId) => {
        return step.activeNodes.includes(nodeId)
            ? "rpc-node-active"
            : "";
    };

    const getLineClass = (lineId) => {
        return step.activeLines.includes(lineId)
            ? "rpc-line-active"
            : "rpc-line";
    };

    return (
        <div className="rpc-page">

            <button
                className="rpc-back"
                onClick={() => window.history.back()}
            >
                Back
            </button>

            {/* INTRO */}
            <section className="rpc-intro">
                <h1>Remote Procedure Call</h1>

                <div className="rpc-intro-points">
                    {rpcData.introduction.map((point, index) => (
                        <div className="rpc-info-box" key={index}>
                            <p>{point}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* WORKFLOW */}
            <section className="rpc-workflow-section">

                <div className="rpc-section-heading">
                    <h2>Workflow</h2>

                    <div className="rpc-step-counter">
                        {currentStep + 1} / {rpcData.workflow.length}
                    </div>
                </div>

                <div className="rpc-workflow-layout">

                    <button
                        className="rpc-workflow-arrow rpc-workflow-prev"
                        onClick={goPrevious}
                        disabled={currentStep === 0}
                    >
                        ‹
                    </button>

                    <div className="rpc-workflow">

                        <svg
                            className="rpc-workflow-svg"
                            viewBox="0 0 1000 180"
                            preserveAspectRatio="xMidYMid meet"
                        >

                            {/* CLIENT APPLICATION */}
                            <g
                                className={`rpc-node ${getNodeClass(
                                    "client"
                                )}`}
                            >
                                <rect
                                    className="rpc-device"
                                    x="100"
                                    y="48"
                                    width="58"
                                    height="58"
                                    rx="10"
                                />

                                <text
                                    className="rpc-device-icon"
                                    x="129"
                                    y="84"
                                    textAnchor="middle"
                                >
                                    ▣
                                </text>

                                <text
                                    className="rpc-device-label"
                                    x="129"
                                    y="130"
                                    textAnchor="middle"
                                >
                                    Client
                                </text>
                            </g>

                            {/* CLIENT STUB */}
                            <g
                                className={`rpc-node ${getNodeClass(
                                    "clientStub"
                                )}`}
                            >
                                <rect
                                    className="rpc-device"
                                    x="285"
                                    y="48"
                                    width="58"
                                    height="58"
                                    rx="10"
                                />

                                <text
                                    className="rpc-device-icon"
                                    x="314"
                                    y="84"
                                    textAnchor="middle"
                                >
                                    +
                                </text>

                                <text
                                    className="rpc-device-label"
                                    x="314"
                                    y="130"
                                    textAnchor="middle"
                                >
                                    Client Stub
                                </text>
                            </g>

                            {/* RPC NETWORK */}
                            <g
                                className={`rpc-node ${getNodeClass(
                                    "network"
                                )}`}
                            >
                                <rect
                                    className="rpc-device"
                                    x="471"
                                    y="48"
                                    width="58"
                                    height="58"
                                    rx="10"
                                />

                                <text
                                    className="rpc-device-icon"
                                    x="500"
                                    y="84"
                                    textAnchor="middle"
                                >
                                    ⇄
                                </text>

                                <text
                                    className="rpc-device-label"
                                    x="500"
                                    y="130"
                                    textAnchor="middle"
                                >
                                    Network
                                </text>
                            </g>

                            {/* SERVER STUB */}
                            <g
                                className={`rpc-node ${getNodeClass(
                                    "serverStub"
                                )}`}
                            >
                                <rect
                                    className="rpc-device"
                                    x="657"
                                    y="48"
                                    width="58"
                                    height="58"
                                    rx="10"
                                />

                                <text
                                    className="rpc-device-icon"
                                    x="686"
                                    y="84"
                                    textAnchor="middle"
                                >
                                    ◇
                                </text>

                                <text
                                    className="rpc-device-label"
                                    x="686"
                                    y="130"
                                    textAnchor="middle"
                                >
                                    Server Stub
                                </text>
                            </g>

                            {/* REMOTE PROCEDURE */}
                            <g
                                className={`rpc-node ${getNodeClass(
                                    "server"
                                )}`}
                            >
                                <rect
                                    className="rpc-device"
                                    x="842"
                                    y="48"
                                    width="58"
                                    height="58"
                                    rx="10"
                                />

                                <text
                                    className="rpc-device-icon"
                                    x="871"
                                    y="84"
                                    textAnchor="middle"
                                >
                                    ⚙
                                </text>

                                <text
                                    className="rpc-device-label"
                                    x="871"
                                    y="130"
                                    textAnchor="middle"
                                >
                                    Remote Procedure
                                </text>
                            </g>

                            {/* CLIENT → CLIENT STUB */}
                            <line
                                className={getLineClass("client-clientStub")}
                                x1="158"
                                y1="77"
                                x2="285"
                                y2="77"
                            />

                            {/* CLIENT STUB → NETWORK */}
                            <line
                                className={getLineClass(
                                    "clientStub-network"
                                )}
                                x1="343"
                                y1="77"
                                x2="471"
                                y2="77"
                            />

                            {/* NETWORK → SERVER STUB */}
                            <line
                                className={getLineClass(
                                    "network-serverStub"
                                )}
                                x1="529"
                                y1="77"
                                x2="657"
                                y2="77"
                            />

                            {/* SERVER STUB → SERVER */}
                            <line
                                className={getLineClass(
                                    "serverStub-server"
                                )}
                                x1="715"
                                y1="77"
                                x2="842"
                                y2="77"
                            />

                            {/* DIRECTION ARROW */}
                            {step.activeArrow && (
                                <line
                                    className="rpc-direction-arrow"
                                    x1={step.activeArrow.x1}
                                    y1="77"
                                    x2={step.activeArrow.x2}
                                    y2="77"
                                    markerEnd="url(#rpcArrow)"
                                />
                            )}

                            <defs>
                                <marker
                                    id="rpcArrow"
                                    markerWidth="6"
                                    markerHeight="6"
                                    refX="6"
                                    refY="3"
                                    orient="auto"
                                    markerUnits="strokeWidth"
                                >
                                    <path
                                        className="rpc-arrow-head"
                                        d="M0,0 L6,3 L0,6 Z"
                                    />
                                </marker>
                            </defs>

                        </svg>
                    </div>

                    <button
                        className="rpc-workflow-arrow rpc-workflow-next"
                        onClick={goNext}
                        disabled={
                            currentStep === rpcData.workflow.length - 1
                        }
                    >
                        ›
                    </button>
                </div>

                {/* STEP INFORMATION */}
                <div className="rpc-step-panel">

                    <div className="rpc-progress">
                        <div
                            style={{
                                width: `${
                                    ((currentStep + 1) /
                                        rpcData.workflow.length) *
                                    100
                                }%`,
                            }}
                        />
                    </div>

                    <div className="rpc-step-content">
                        <div className="rpc-step-text">
                            <h3>{step.title}</h3>
                            <p>{step.description}</p>
                        </div>
                    </div>

                </div>

            </section>

            {/* THEORY */}
            {rpcData.theory.map((section, sectionIndex) => (
                <section
                    className="rpc-theory-section"
                    key={sectionIndex}
                >
                    <div className="rpc-section-heading">
                        <h2>{section.heading}</h2>
                    </div>

                    <div className="rpc-theory-box">
                        <div className="rpc-theory-grid">

                            {section.cards.map((card, cardIndex) => (
                                <div
                                    className="rpc-theory-card"
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

export default Rpc;