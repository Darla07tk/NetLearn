import { useState } from "react";
import { useNavigate } from "react-router-dom";

import stpData from "../../../../data/stpData";

import "./stp.css";


/* =========================================================
   NODE CONFIGURATION
========================================================= */

const NODE_SIZE = 58;
const NODE_HALF = NODE_SIZE / 2;

const nodes = [
    {
        id: "pc1",
        label: "PC 1",
        icon: "▣",
        x: 465,
        y: 55,
    },
    {
        id: "switch1",
        label: "Switch 1",
        icon: "◆",
        x: 465,
        y: 175,
    },
    {
        id: "switch2",
        label: "Switch 2",
        icon: "◆",
        x: 285,
        y: 305,
    },
    {
        id: "switch3",
        label: "Switch 3",
        icon: "◆",
        x: 645,
        y: 305,
    },
    {
        id: "pc2",
        label: "PC 2",
        icon: "▣",
        x: 155,
        y: 345,
    },
    {
        id: "pc3",
        label: "PC 3",
        icon: "▣",
        x: 775,
        y: 345,
    },
];


/* =========================================================
   LINK CONFIGURATION
========================================================= */

const links = [
    {
        id: "pc1-switch1",
        from: "pc1",
        to: "switch1",
    },
    {
        id: "switch1-switch2",
        from: "switch1",
        to: "switch2",
    },
    {
        id: "switch1-switch3",
        from: "switch1",
        to: "switch3",
    },
    {
        id: "switch2-switch3",
        from: "switch2",
        to: "switch3",
    },
    {
        id: "switch2-pc2",
        from: "switch2",
        to: "pc2",
    },
    {
        id: "switch3-pc3",
        from: "switch3",
        to: "pc3",
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

    const scale = Math.min(
        scaleX,
        scaleY
    );

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

    const points =
        getLinkPoints(link);

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


const getBlockMarker = (lineId) => {
    const link = links.find(
        (item) => item.id === lineId
    );

    if (!link) {
        return null;
    }

    const points =
        getLinkPoints(link);

    if (!points) {
        return null;
    }

    const midX =
        (points.x1 + points.x2) / 2;

    const midY =
        (points.y1 + points.y2) / 2;

    const dx = points.x2 - points.x1;
    const dy = points.y2 - points.y1;

    const length = Math.sqrt(
        dx * dx + dy * dy
    );

    if (!length) {
        return null;
    }

    const normalX = -dy / length;
    const normalY = dx / length;

    const offset = 0;

    return {
        x: midX + normalX * offset,
        y: midY + normalY * offset,
    };
};


/* =========================================================
   THEORY SECTION
========================================================= */

function TheorySection({ title, items }) {
    return (
        <section className="stp-theory-section">

            <div className="stp-section-heading">
                <h2>{title}</h2>
            </div>

            <div className="stp-theory-box">

                <div className="stp-theory-grid">

                    {items.map((item, index) => (
                        <article
                            className="stp-theory-card"
                            key={`${item.heading}-${index}`}
                        >

                            <h3>
                                {item.heading}
                            </h3>

                            <div className="stp-theory-points">

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
        <div className="stp-workflow">

            <svg
                className="stp-workflow-svg"
                viewBox="0 0 930 390"
                preserveAspectRatio="xMidYMid meet"
                role="img"
                aria-label={`STP workflow step: ${step.title}`}
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
                                    ? "stp-line stp-line-active"
                                    : "stp-line"
                            }
                            x1={points.x1}
                            y1={points.y1}
                            x2={points.x2}
                            y2={points.y2}
                        />
                    );
                })}


                {/* BLOCK MARKERS */}

                {step.blockedLines?.map(
                    (lineId) => {
                        const marker =
                            getBlockMarker(
                                lineId
                            );

                        if (!marker) {
                            return null;
                        }

                        return (
                            <g
                                key={`block-${lineId}`}
                                className="stp-block-marker"
                            >
                                <line
                                    x1={
                                        marker.x - 7
                                    }
                                    y1={
                                        marker.y - 7
                                    }
                                    x2={
                                        marker.x + 7
                                    }
                                    y2={
                                        marker.y + 7
                                    }
                                />

                                <line
                                    x1={
                                        marker.x + 7
                                    }
                                    y1={
                                        marker.y - 7
                                    }
                                    x2={
                                        marker.x - 7
                                    }
                                    y2={
                                        marker.y + 7
                                    }
                                />
                            </g>
                        );
                    }
                )}


                {/* ACTIVE ARROWS */}

                {step.activeArrows?.map(
                    (arrow, index) => (
                        <polygon
                            key={`arrow-${index}`}
                            className="stp-arrow-head"
                            points={getArrowPoints(
                                arrow
                            )}
                        />
                    )
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
                                    ? "stp-node stp-node-active"
                                    : "stp-node"
                            }
                        >

                            <rect
                                className="stp-device"
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
                                className="stp-device-icon"
                                x={node.x}
                                y={node.y + 5}
                                textAnchor="middle"
                            >
                                {node.icon}
                            </text>

                            <text
                                className="stp-device-label"
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

export default function Stp() {
    const navigate = useNavigate();

    const [
        currentStep,
        setCurrentStep,
    ] = useState(0);

    const step =
        stpData.workflow[currentStep];


    const nextStep = () => {
        setCurrentStep((prev) =>
            Math.min(
                prev + 1,
                stpData.workflow.length - 1
            )
        );
    };


    const previousStep = () => {
        setCurrentStep((prev) =>
            Math.max(prev - 1, 0)
        );
    };


    return (
        <main className="stp-page">

            {/* BACK */}

            <button
                className="stp-back"
                onClick={() =>
                    navigate("/protocols")
                }
            >
                Back
            </button>


            {/* INTRO */}

            <section className="stp-intro">

                <h1>
                    {stpData.title}
                </h1>

                <div className="stp-intro-points">

                    {stpData.intro.map(
                        (point, index) => (
                            <div
                                className="stp-info-box"
                                key={index}
                            >
                                <p>{point}</p>
                            </div>
                        )
                    )}

                    <div className="stp-info-box">

                        <p>
                            <strong>PDU:</strong>{" "}
                            {stpData.pdu}
                        </p>

                    </div>

                </div>

            </section>


            {/* WORKFLOW */}

            <section className="stp-workflow-section">

                <div className="stp-section-heading">

                    <h2>Workflow</h2>

                    <div className="stp-step-counter">
                        {currentStep + 1} /{" "}
                        {stpData.workflow.length}
                    </div>

                </div>


                <div className="stp-workflow-layout">

                    <button
                        type="button"
                        className="stp-workflow-arrow stp-workflow-prev"
                        onClick={
                            previousStep
                        }
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
                        className="stp-workflow-arrow stp-workflow-next"
                        onClick={nextStep}
                        disabled={
                            currentStep ===
                            stpData.workflow.length - 1
                        }
                        aria-label="Next step"
                    >
                        ›
                    </button>

                </div>


                {/* STEP INFORMATION */}

                <div className="stp-step-panel">

                    <div className="stp-progress">

                        <div
                            style={{
                                width: `${
                                    ((currentStep + 1) /
                                        stpData.workflow.length) *
                                    100
                                }%`,
                            }}
                        />

                    </div>


                    <div className="stp-step-content">

                        <div className="stp-step-text">

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

            {Object.entries(
                stpData.theory
            ).map(
                ([title, items]) => (
                    <TheorySection
                        key={title}
                        title={title}
                        items={items}
                    />
                )
            )}

        </main>
    );
}