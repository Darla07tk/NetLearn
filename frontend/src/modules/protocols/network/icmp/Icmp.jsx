import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import icmpData from "../../../../data/icmpData";

import "./icmp.css";


/* =========================================================
   NODE CONFIGURATION
========================================================= */

const NODE_SIZE = 58;
const NODE_HALF = NODE_SIZE / 2;

const nodes = [
    {
        id: "sourcePC",
        label: "Source PC",
        icon: "▣",
        x: 95,
        y: 255,
    },
    {
        id: "routerA",
        label: "Router 1",
        icon: "◇",
        x: 285,
        y: 115,
    },
    {
        id: "routerB",
        label: "Router 2",
        icon: "◇",
        x: 465,
        y: 255,
    },
    {
        id: "routerC",
        label: "Router 3",
        icon: "◇",
        x: 650,
        y: 115,
    },
    {
        id: "destinationHost",
        label: "Destination Host",
        icon: "▣",
        x: 835,
        y: 255,
    },
];


/* =========================================================
   LINK CONFIGURATION
========================================================= */

const links = [
    {
        id: "source-routerA",
        from: "sourcePC",
        to: "routerA",
    },
    {
        id: "routerA-routerB",
        from: "routerA",
        to: "routerB",
    },
    {
        id: "routerB-routerC",
        from: "routerB",
        to: "routerC",
    },
    {
        id: "routerC-destination",
        from: "routerC",
        to: "destinationHost",
    },
];


/* =========================================================
   NODE / LINK HELPERS
========================================================= */

const findNode = (id) =>
    nodes.find((node) => node.id === id);


const getLinkPoints = (link) => {
    const fromNode = findNode(link.from);
    const toNode = findNode(link.to);

    if (!fromNode || !toNode) {
        return null;
    }

    const dx = toNode.x - fromNode.x;
    const dy = toNode.y - fromNode.y;

    const scaleX =
        Math.abs(dx) > 0
            ? NODE_HALF / Math.abs(dx)
            : Infinity;

    const scaleY =
        Math.abs(dy) > 0
            ? NODE_HALF / Math.abs(dy)
            : Infinity;

    const scale = Math.min(scaleX, scaleY);

    return {
        x1: fromNode.x + dx * scale,
        y1: fromNode.y + dy * scale,
        x2: toNode.x - dx * scale,
        y2: toNode.y - dy * scale,
    };
};


const getArrowPoints = (arrow) => {
    if (!arrow) {
        return null;
    }

    const link = links.find(
        (item) => item.id === arrow.line
    );

    if (!link) {
        return null;
    }

    const points = getLinkPoints(link);

    if (!points) {
        return null;
    }

    let startX = points.x1;
    let startY = points.y1;
    let endX = points.x2;
    let endY = points.y2;

    if (arrow.direction === "reverse") {
        startX = points.x2;
        startY = points.y2;
        endX = points.x1;
        endY = points.y1;
    }

    const dx = endX - startX;
    const dy = endY - startY;

    const length = Math.sqrt(
        dx * dx + dy * dy
    );

    if (!length) {
        return null;
    }

    const ux = dx / length;
    const uy = dy / length;

    const arrowLength = 17;
    const arrowWidth = 8;

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

    return `
        ${tipX},${tipY}
        ${leftX},${leftY}
        ${rightX},${rightY}
    `;
};


/* =========================================================
   THEORY SECTION
========================================================= */

function TheorySection({ title, items }) {
    return (
        <section className="icmp-theory-section">

            <div className="icmp-section-heading">
                <h2>{title}</h2>
            </div>

            <div className="icmp-theory-box">

                <div className="icmp-theory-grid">

                    {items.map((item, index) => (
                        <article
                            className="icmp-theory-card"
                            key={`${item.heading}-${index}`}
                        >

                            <h3>
                                {item.heading}
                            </h3>

                            <div className="icmp-theory-points">

                                {item.points.map(
                                    (point, pointIndex) => (
                                        <p
                                            key={pointIndex}
                                        >
                                            {point}
                                        </p>
                                    )
                                )}

                            </div>

                        </article>
                    ))}

                </div>

            </div>

        </section>
    );
}


/* =========================================================
   WORKFLOW DIAGRAM
========================================================= */

function WorkflowDiagram({ step }) {
    return (
        <div className="icmp-workflow">

            <svg
                className="icmp-workflow-svg"
                viewBox="0 0 930 390"
                preserveAspectRatio="xMidYMid meet"
                role="img"
                aria-label={`ICMP workflow step: ${step.title}`}
            >

                {/* CONNECTIONS */}

                {links.map((link) => {
                    const points =
                        getLinkPoints(link);

                    if (!points) {
                        return null;
                    }

                    const active =
                        step.activeLines.includes(
                            link.id
                        );

                    return (
                        <line
                            key={link.id}
                            className={
                                active
                                    ? "icmp-line icmp-line-active"
                                    : "icmp-line"
                            }
                            x1={points.x1}
                            y1={points.y1}
                            x2={points.x2}
                            y2={points.y2}
                        />
                    );
                })}


                {/* ACTIVE ARROW */}

                {step.activeArrow && (
                    <polygon
                        className="icmp-arrow-head"
                        points={getArrowPoints(
                            step.activeArrow
                        )}
                    />
                )}


                {/* DEVICES */}

                {nodes.map((node) => {

                    const active =
                        step.activeNodes.includes(
                            node.id
                        );

                    return (
                        <g
                            key={node.id}
                            className={
                                active
                                    ? "icmp-node icmp-node-active"
                                    : "icmp-node"
                            }
                        >

                            <rect
                                className="icmp-device"
                                x={
                                    node.x -
                                    NODE_HALF
                                }
                                y={
                                    node.y -
                                    NODE_HALF
                                }
                                width={NODE_SIZE}
                                height={NODE_SIZE}
                                rx="11"
                            />

                            <text
                                className="icmp-device-icon"
                                x={node.x}
                                y={node.y + 5}
                                textAnchor="middle"
                            >
                                {node.icon}
                            </text>

                            <text
                                className="icmp-device-label"
                                x={node.x}
                                y={node.y + 45}
                                textAnchor="middle"
                            >
                                {node.label}
                            </text>

                        </g>
                    );
                })}

            </svg>

        </div>
    );
}


/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function Icmp() {
    const navigate = useNavigate();

    const [
        currentStep,
        setCurrentStep,
    ] = useState(0);

    const step =
        icmpData.workflow[currentStep];


    const nextStep = () => {
        setCurrentStep((prev) =>
            Math.min(
                prev + 1,
                icmpData.workflow.length - 1
            )
        );
    };


    const previousStep = () => {
        setCurrentStep((prev) =>
            Math.max(prev - 1, 0)
        );
    };


    return (
        <main className="icmp-page">

            {/* BACK */}

            <button
                className="icmp-back"
                onClick={() =>
                    navigate("/protocols")
                }
            >
                Back
            </button>


            {/* INTRO */}

            <section className="icmp-intro">

                <h1>{icmpData.title}</h1>

                <div className="icmp-intro-points">

                    {icmpData.intro.map(
                        (point, index) => (
                            <div
                                className="icmp-info-box"
                                key={index}
                            >
                                <p>{point}</p>
                            </div>
                        )
                    )}

                    <div className="icmp-info-box">

                        <p>
                            <strong>PDU:</strong>{" "}
                            {icmpData.pdu}
                        </p>

                    </div>

                </div>

            </section>


            {/* WORKFLOW */}

            <section className="icmp-workflow-section">

                <div className="icmp-section-heading">

                    <h2>Workflow</h2>

                    <div className="icmp-step-counter">
                        {currentStep + 1} /{" "}
                        {icmpData.workflow.length}
                    </div>

                </div>


                <div className="icmp-workflow-layout">

                    <button
                        type="button"
                        className="icmp-workflow-arrow icmp-workflow-prev"
                        onClick={previousStep}
                        disabled={
                            currentStep === 0
                        }
                        aria-label="Previous step"
                    >
                        ‹
                    </button>


                    <WorkflowDiagram
                        step={step}
                    />


                    <button
                        type="button"
                        className="icmp-workflow-arrow icmp-workflow-next"
                        onClick={nextStep}
                        disabled={
                            currentStep ===
                            icmpData.workflow.length - 1
                        }
                        aria-label="Next step"
                    >
                        ›
                    </button>

                </div>


                {/* STEP INFORMATION */}

                <div className="icmp-step-panel">

                    <div className="icmp-progress">

                        <div
                            style={{
                                width: `${
                                    ((currentStep + 1) /
                                        icmpData.workflow.length) *
                                    100
                                }%`,
                            }}
                        />

                    </div>


                    <div className="icmp-step-content">

                        <div className="icmp-step-text">

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

            <TheorySection
                title="ICMP Basics"
                items={
                    icmpData.theory[
                        "ICMP Basics"
                    ]
                }
            />

            <TheorySection
                title="ICMP Message Types"
                items={
                    icmpData.theory[
                        "ICMP Message Types"
                    ]
                }
            />

            <TheorySection
                title="ICMP Packet Format"
                items={
                    icmpData.theory[
                        "ICMP Packet Format"
                    ]
                }
            />

            <TheorySection
                title="Network Diagnostics"
                items={
                    icmpData.theory[
                        "Network Diagnostics"
                    ]
                }
            />

            <TheorySection
                title="ICMP Error Handling"
                items={
                    icmpData.theory[
                        "ICMP Error Handling"
                    ]
                }
            />

            <TheorySection
                title="ICMP in DDoS Attacks"
                items={
                    icmpData.theory[
                        "ICMP in DDoS Attacks"
                    ]
                }
            />

        </main>
    );
}