import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import tcpData from "../../../../data/tcpData";
import "./tcp.css";

const nodes = [
    {
        id: "client",
        label: "Client",
        icon: "▣",
        x: 100,
        y: 45
    },
    {
        id: "tcpSender",
        label: "TCP Sender",
        icon: "T",
        x: 270,
        y: 115
    },
    {
        id: "router1",
        label: "Router 1",
        icon: "◇",
        x: 440,
        y: 45
    },
    {
        id: "router2",
        label: "Router 2",
        icon: "◇",
        x: 610,
        y: 115
    },
    {
        id: "tcpReceiver",
        label: "TCP Receiver",
        icon: "T",
        x: 780,
        y: 45
    },
    {
        id: "server",
        label: "Server",
        icon: "▣",
        x: 950,
        y: 115
    }
];

const links = [
    {
        id: "client-tcpSender",
        x1: 126.8,
        y1: 56,
        x2: 243.2,
        y2: 104
    },
    {
        id: "tcpSender-router1",
        x1: 296.8,
        y1: 104,
        x2: 413.2,
        y2: 56
    },
    {
        id: "router1-router2",
        x1: 466.8,
        y1: 56,
        x2: 583.2,
        y2: 104
    },
    {
        id: "router2-tcpReceiver",
        x1: 636.8,
        y1: 104,
        x2: 753.2,
        y2: 56
    },
    {
        id: "tcpReceiver-server",
        x1: 806.8,
        y1: 56,
        x2: 923.2,
        y2: 104
    }
];

const getNodeClass = (nodeId, activeNodes) =>
    activeNodes.includes(nodeId)
        ? "tcp-node-active"
        : "";

const getLineClass = (lineId, activeLines) =>
    activeLines.includes(lineId)
        ? "tcp-line tcp-line-active"
        : "tcp-line";

const getArrowPoints = (arrow) => {
    if (!arrow) {
        return null;
    }

    const line = links.find((item) => item.id === arrow.line);

    if (!line) {
        return null;
    }

    let startX = line.x1;
    let startY = line.y1;
    let endX = line.x2;
    let endY = line.y2;

    if (arrow.direction === "reverse") {
        startX = line.x2;
        startY = line.y2;
        endX = line.x1;
        endY = line.y1;
    }

    const dx = endX - startX;
    const dy = endY - startY;
    const length = Math.sqrt(dx * dx + dy * dy);

    const ux = dx / length;
    const uy = dy / length;

    const arrowLength = 18;
    const arrowWidth = 9;

    const tipX = endX;
    const tipY = endY;

    const baseX = tipX - ux * arrowLength;
    const baseY = tipY - uy * arrowLength;

    const leftX = baseX - uy * arrowWidth;
    const leftY = baseY + ux * arrowWidth;

    const rightX = baseX + uy * arrowWidth;
    const rightY = baseY - ux * arrowWidth;

    return `${tipX},${tipY} ${leftX},${leftY} ${rightX},${rightY}`;
};

const renderTheory = (section) => {
    return (
        <section className="tcp-theory-section" key={section}>
            <div className="tcp-section-heading">
                <h2>{section}</h2>
            </div>

            <div className="tcp-theory-box">
                <div className="tcp-theory-grid">
                    {tcpData.theory[section].map((item, index) => (
                        <div
                            className="tcp-theory-card"
                            key={index}
                        >
                            <h3>{item.heading}</h3>

                            <div className="tcp-theory-points">
                                {item.points.map(
                                    (point, pointIndex) => (
                                        <p key={pointIndex}>
                                            {point}
                                        </p>
                                    )
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default function Tcp() {
    const navigate = useNavigate();
    const [currentStep, setCurrentStep] = useState(0);

    const step = tcpData.workflow[currentStep];

    const nextStep = () => {
        setCurrentStep((prev) =>
            Math.min(
                prev + 1,
                tcpData.workflow.length - 1
            )
        );
    };

    const previousStep = () => {
        setCurrentStep((prev) =>
            Math.max(prev - 1, 0)
        );
    };

    const resetWorkflow = () => {
        setCurrentStep(0);
    };

    return (
        <div className="tcp-page">
            <button
                className="tcp-back"
                onClick={() => navigate("/protocols")}
            >
                Back
            </button>

            <section className="tcp-intro">
                <h1>{tcpData.title}</h1>

                <div className="tcp-intro-points">
                    {tcpData.intro.map((point, index) => (
                        <div
                            className="tcp-info-box"
                            key={index}
                        >
                            <p>{point}</p>
                        </div>
                    ))}

                    <div className="tcp-info-box">
                        <p>
                            <strong>PDU:</strong>{" "}
                            {tcpData.pdu}
                        </p>
                    </div>
                </div>
            </section>

            <section className="tcp-workflow-section">
                <div className="tcp-section-heading">
                    <h2>Workflow</h2>

                    <div className="tcp-step-counter">
                        {currentStep + 1} /{" "}
                        {tcpData.workflow.length}
                    </div>
                </div>

                <div className="tcp-workflow-layout">
                    <button
                        className="tcp-workflow-arrow tcp-workflow-prev"
                        onClick={previousStep}
                        disabled={currentStep === 0}
                    >
                        ‹
                    </button>

                    <div className="tcp-workflow">
                        <svg
                            className="tcp-workflow-svg"
                            viewBox="0 0 1060 180"
                            preserveAspectRatio="xMidYMid meet"
                        >
                            {links.map((link) => (
                                <line
                                    key={link.id}
                                    className={getLineClass(
                                        link.id,
                                        step.activeLines
                                    )}
                                    x1={link.x1}
                                    y1={link.y1}
                                    x2={link.x2}
                                    y2={link.y2}
                                />
                            ))}

                            {step.showSegmentationDots && (
                                <>
                                    <circle
                                        cx="176"
                                        cy="66"
                                        r="3"
                                        fill="#3190ed"
                                    />
                                    <circle
                                        cx="185"
                                        cy="66"
                                        r="3"
                                        fill="#3190ed"
                                    />
                                    <circle
                                        cx="194"
                                        cy="66"
                                        r="3"
                                        fill="#3190ed"
                                    />
                                </>
                            )}

                            {step.activeArrow && (
                                <polygon
                                    className="tcp-arrow-head"
                                    points={getArrowPoints(
                                        step.activeArrow
                                    )}
                                />
                            )}

                            {nodes.map((node) => (
                                <g
                                    key={node.id}
                                    className={getNodeClass(
                                        node.id,
                                        step.activeNodes
                                    )}
                                >
                                    <rect
                                        className="tcp-device"
                                        x={node.x - 29}
                                        y={node.y - 29}
                                        width="58"
                                        height="58"
                                        rx="11"
                                    />

                                    <text
                                        className="tcp-device-icon"
                                        x={node.x}
                                        y={node.y + 5}
                                        textAnchor="middle"
                                    >
                                        {node.icon}
                                    </text>

                                    <text
                                        className="tcp-device-label"
                                        x={node.x}
                                        y={node.y + 54}
                                        textAnchor="middle"
                                    >
                                        {node.label}
                                    </text>
                                </g>
                            ))}
                        </svg>
                    </div>

                    <button
                        className="tcp-workflow-arrow tcp-workflow-next"
                        onClick={nextStep}
                        disabled={
                            currentStep ===
                            tcpData.workflow.length - 1
                        }
                    >
                        ›
                    </button>
                </div>

                <div className="tcp-step-panel">
                    <div className="tcp-progress">
                        <div
                            style={{
                                width: `${
                                    ((currentStep + 1) /
                                        tcpData.workflow
                                            .length) *
                                    100
                                }%`
                            }}
                        />
                    </div>

                    <div className="tcp-step-content">
                        <div className="tcp-step-text">
                            <h3>{step.title}</h3>
                            <p>{step.text}</p>
                        </div>
                    </div>
                </div>
            </section>

            {Object.keys(tcpData.theory).map((section) =>
                renderTheory(section)
            )}
        </div>
    );
}