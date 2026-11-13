import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import ospfData from "../../../../data/ospfData";

import "./ospf.css";


/* =========================================================
   NODE CONFIGURATION
========================================================= */

const NODE_SIZE = 58;
const NODE_HALF = NODE_SIZE / 2;

const nodes = [
    {
        id: "routerA",
        label: "Router A",
        icon: "◇",
        x: 145,
        y: 105,
    },
    {
        id: "routerB",
        label: "Router B",
        icon: "◇",
        x: 555,
        y: 105,
    },
    {
        id: "broadcastLAN",
        label: "Broadcast LAN",
        icon: "LAN",
        x: 350,
        y: 220,
    },
    {
        id: "routerC",
        label: "Router C",
        icon: "◇",
        x: 350,
        y: 365,
    },
];


/* =========================================================
   LINK CONFIGURATION
========================================================= */

const links = [
    {
        id: "routerA-lan",
        from: "routerA",
        to: "broadcastLAN",
    },
    {
        id: "lan-routerB",
        from: "broadcastLAN",
        to: "routerB",
    },
    {
        id: "lan-routerC",
        from: "broadcastLAN",
        to: "routerC",
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
        <section className="ospf-theory-section">

            <div className="ospf-section-heading">
                <h2>{title}</h2>
            </div>

            <div className="ospf-theory-box">

                <div className="ospf-theory-grid">

                    {items.map((item, index) => (
                        <article
                            className="ospf-theory-card"
                            key={`${item.heading}-${index}`}
                        >

                            <h3>
                                {item.heading}
                            </h3>

                            <div className="ospf-theory-points">

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
        <div className="ospf-workflow">

            <svg
                className="ospf-workflow-svg"
                viewBox="0 0 700 430"
                preserveAspectRatio="xMidYMid meet"
                role="img"
                aria-label={`OSPF workflow step: ${step.title}`}
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
                                    ? "ospf-line ospf-line-active"
                                    : "ospf-line"
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
                        className="ospf-arrow-head"
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
                                    ? "ospf-node ospf-node-active"
                                    : "ospf-node"
                            }
                        >

                            <rect
                                className="ospf-device"
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
                                className="ospf-device-icon"
                                x={node.x}
                                y={node.y + 5}
                                textAnchor="middle"
                            >
                                {node.icon}
                            </text>

                            <text
                                className="ospf-device-label"
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

export default function Ospf() {
    const navigate = useNavigate();

    const [
        currentStep,
        setCurrentStep,
    ] = useState(0);

    const step =
        ospfData.workflow[currentStep];


    const nextStep = () => {
        setCurrentStep((prev) =>
            Math.min(
                prev + 1,
                ospfData.workflow.length - 1
            )
        );
    };


    const previousStep = () => {
        setCurrentStep((prev) =>
            Math.max(prev - 1, 0)
        );
    };


    return (
        <main className="ospf-page">

            {/* BACK */}

            <button
                className="ospf-back"
                onClick={() =>
                    navigate("/protocols")
                }
            >
                Back
            </button>


            {/* INTRO */}

            <section className="ospf-intro">

                <h1>{ospfData.title}</h1>

                <div className="ospf-intro-points">

                    {ospfData.intro.map(
                        (point, index) => (
                            <div
                                className="ospf-info-box"
                                key={index}
                            >
                                <p>{point}</p>
                            </div>
                        )
                    )}

                    <div className="ospf-info-box">

                        <p>
                            <strong>PDU:</strong>{" "}
                            {ospfData.pdu}
                        </p>

                    </div>

                </div>

            </section>


            {/* WORKFLOW */}

            <section className="ospf-workflow-section">

                <div className="ospf-section-heading">

                    <h2>Workflow</h2>

                    <div className="ospf-step-counter">
                        {currentStep + 1} /{" "}
                        {ospfData.workflow.length}
                    </div>

                </div>


                <div className="ospf-workflow-layout">

                    <button
                        type="button"
                        className="ospf-workflow-arrow ospf-workflow-prev"
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
                        className="ospf-workflow-arrow ospf-workflow-next"
                        onClick={nextStep}
                        disabled={
                            currentStep ===
                            ospfData.workflow.length - 1
                        }
                        aria-label="Next step"
                    >
                        ›
                    </button>

                </div>


                {/* STEP INFORMATION */}

                <div className="ospf-step-panel">

                    <div className="ospf-progress">

                        <div
                            style={{
                                width: `${
                                    ((currentStep + 1) /
                                        ospfData.workflow.length) *
                                    100
                                }%`,
                            }}
                        />

                    </div>


                    <div className="ospf-step-content">

                        <div className="ospf-step-text">

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
                title="OSPF Basics"
                items={
                    ospfData.theory[
                        "OSPF Basics"
                    ]
                }
            />

            <TheorySection
                title="OSPF Terms"
                items={
                    ospfData.theory[
                        "OSPF Terms"
                    ]
                }
            />

            <TheorySection
                title="OSPF States"
                items={
                    ospfData.theory[
                        "OSPF States"
                    ]
                }
            />

            <TheorySection
                title="Routing After Adjacency"
                items={
                    ospfData.theory[
                        "Routing After Adjacency"
                    ]
                }
            />

        </main>
    );
}