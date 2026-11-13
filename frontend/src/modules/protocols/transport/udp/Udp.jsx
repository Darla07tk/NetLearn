import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import udpData from "../../../../data/udpData";
import "./udp.css";


/* =========================================================
   TOPOLOGY NODES
========================================================= */

const nodes = [
    {
        id: "client",
        label: "Client Application",
        icon: "▣",
        x: 100,
        y: 45
    },
    {
        id: "udpSender",
        label: "UDP Sender",
        icon: "U",
        x: 270,
        y: 115
    },
    {
        id: "ipLayer",
        label: "IP Layer",
        icon: "IP",
        x: 440,
        y: 45
    },
    {
        id: "router",
        label: "Router",
        icon: "◇",
        x: 610,
        y: 115
    },
    {
        id: "udpReceiver",
        label: "UDP Receiver",
        icon: "U",
        x: 780,
        y: 45
    },
    {
        id: "server",
        label: "Server Application",
        icon: "▣",
        x: 950,
        y: 115
    }
];


/* =========================================================
   TOPOLOGY LINKS
========================================================= */

const links = [
    {
        id: "client-udpSender",
        x1: 126.8,
        y1: 56,
        x2: 243.2,
        y2: 104
    },
    {
        id: "udpSender-ipLayer",
        x1: 296.8,
        y1: 104,
        x2: 413.2,
        y2: 56
    },
    {
        id: "ipLayer-router",
        x1: 466.8,
        y1: 56,
        x2: 583.2,
        y2: 104
    },
    {
        id: "router-udpReceiver",
        x1: 636.8,
        y1: 104,
        x2: 753.2,
        y2: 56
    },
    {
        id: "udpReceiver-server",
        x1: 806.8,
        y1: 56,
        x2: 923.2,
        y2: 104
    }
];


/* =========================================================
   HELPERS
========================================================= */

const getNodeClass = (nodeId, activeNodes) =>
    activeNodes.includes(nodeId)
        ? "udp-node-active"
        : "";


const getLineClass = (lineId, activeLines) =>
    activeLines.includes(lineId)
        ? "udp-line udp-line-active"
        : "udp-line";


const getArrowPoints = (arrow) => {

    if (!arrow) {
        return null;
    }

    const line = links.find(
        (item) => item.id === arrow.line
    );

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

    const length = Math.sqrt(
        dx * dx + dy * dy
    );

    const ux = dx / length;
    const uy = dy / length;

    const arrowLength = 15;
    const arrowWidth = 7;

    const tipX = endX;
    const tipY = endY;

    const baseX =
        tipX - ux * arrowLength;

    const baseY =
        tipY - uy * arrowLength;

    const leftX =
        baseX - uy * arrowWidth;

    const leftY =
        baseY + ux * arrowWidth;

    const rightX =
        baseX + uy * arrowWidth;

    const rightY =
        baseY - ux * arrowWidth;

    return `${tipX},${tipY} ${leftX},${leftY} ${rightX},${rightY}`;
};


/* =========================================================
   THEORY
========================================================= */

const renderTheory = (section) => {
    return (
        <section
            className="udp-theory-section"
            key={section}
        >
            <div className="udp-section-heading">
                <h2>{section}</h2>
            </div>

            <div className="udp-theory-box">
                <div className="udp-theory-grid">

                    {udpData.theory[section].map(
                        (item, index) => (
                            <div
                                className="udp-theory-card"
                                key={index}
                            >
                                <h3>
                                    {item.heading}
                                </h3>

                                <div className="udp-theory-points">

                                    {item.points.map(
                                        (
                                            point,
                                            pointIndex
                                        ) => (
                                            <p
                                                key={
                                                    pointIndex
                                                }
                                            >
                                                {point}
                                            </p>
                                        )
                                    )}

                                </div>
                            </div>
                        )
                    )}

                </div>
            </div>
        </section>
    );
};


/* =========================================================
   UDP PAGE
========================================================= */

export default function Udp() {

    const navigate = useNavigate();

    const [
        currentStep,
        setCurrentStep
    ] = useState(0);

    const step =
        udpData.workflow[currentStep];


    const nextStep = () => {
        setCurrentStep((prev) =>
            Math.min(
                prev + 1,
                udpData.workflow.length - 1
            )
        );
    };


    const previousStep = () => {
        setCurrentStep((prev) =>
            Math.max(prev - 1, 0)
        );
    };


    return (
        <div className="udp-page">

            {/* BACK */}

            <button
                className="udp-back"
                onClick={() =>
                    navigate("/protocols")
                }
            >
                Back
            </button>


            {/* INTRO */}

            <section className="udp-intro">

                <h1>{udpData.title}</h1>

                <div className="udp-intro-points">

                    {udpData.intro.map(
                        (point, index) => (
                            <div
                                className="udp-info-box"
                                key={index}
                            >
                                <p>{point}</p>
                            </div>
                        )
                    )}

                    <div className="udp-info-box">

                        <p>
                            <strong>PDU:</strong>{" "}
                            {udpData.pdu}
                        </p>

                    </div>

                </div>

            </section>


            {/* WORKFLOW */}

            <section className="udp-workflow-section">

                <div className="udp-section-heading">

                    <h2>Workflow</h2>

                    <div className="udp-step-counter">
                        {currentStep + 1} /{" "}
                        {udpData.workflow.length}
                    </div>

                </div>


                <div className="udp-workflow-layout">

                    <button
                        className="udp-workflow-arrow udp-workflow-prev"
                        onClick={previousStep}
                        disabled={
                            currentStep === 0
                        }
                    >
                        ‹
                    </button>


                    <div className="udp-workflow">

                        <svg
                            className="udp-workflow-svg"
                            viewBox="0 0 1060 180"
                            preserveAspectRatio="xMidYMid meet"
                        >

                            {/* LINKS */}

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


                            {/* DIRECTION ARROW */}

                            {step.activeArrow && (

                                <polygon
                                    className="udp-arrow-head"
                                    points={getArrowPoints(
                                        step.activeArrow
                                    )}
                                />

                            )}


                            {/* NODES */}

                            {nodes.map((node) => (

                                <g
                                    key={node.id}
                                    className={getNodeClass(
                                        node.id,
                                        step.activeNodes
                                    )}
                                >

                                    <rect
                                        className="udp-device"
                                        x={
                                            node.x - 29
                                        }
                                        y={
                                            node.y - 29
                                        }
                                        width="58"
                                        height="58"
                                        rx="11"
                                    />

                                    <text
                                        className="udp-device-icon"
                                        x={node.x}
                                        y={
                                            node.y + 5
                                        }
                                        textAnchor="middle"
                                    >
                                        {node.icon}
                                    </text>

                                    <text
                                        className="udp-device-label"
                                        x={node.x}
                                        y={
                                            node.y + 54
                                        }
                                        textAnchor="middle"
                                    >
                                        {node.label}
                                    </text>

                                </g>

                            ))}

                        </svg>

                    </div>


                    <button
                        className="udp-workflow-arrow udp-workflow-next"
                        onClick={nextStep}
                        disabled={
                            currentStep ===
                            udpData.workflow.length - 1
                        }
                    >
                        ›
                    </button>

                </div>


                {/* STEP INFORMATION */}

                <div className="udp-step-panel">

                    <div className="udp-progress">

                        <div
                            style={{
                                width: `${
                                    (
                                        (currentStep + 1) /
                                        udpData.workflow.length
                                    ) * 100
                                }%`
                            }}
                        />

                    </div>


                    <div className="udp-step-content">

                        <div className="udp-step-text">

                            <h3>
                                {step.title}
                            </h3>

                            <p>
                                {step.text}
                            </p>

                        </div>

                    </div>

                </div>

            </section>


            {/* THEORY */}

            {Object.keys(udpData.theory).map(
                (section) =>
                    renderTheory(section)
            )}

        </div>
    );
}