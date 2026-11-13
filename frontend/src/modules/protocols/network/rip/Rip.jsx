import { useState } from "react";
import { useNavigate } from "react-router-dom";

import ripData from "../../../../data/ripData";

import "./rip.css";


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
        x: 80,
        y: 205,
    },
    {
        id: "routerA",
        label: "Router 1",
        icon: "◇",
        x: 250,
        y: 205,
    },
    {
        id: "routerC",
        label: "Router 3",
        icon: "◇",
        x: 465,
        y: 95,
    },
    {
        id: "routerB",
        label: "Router 2",
        icon: "◇",
        x: 465,
        y: 305,
    },
    {
        id: "routerD",
        label: "Router 4",
        icon: "◇",
        x: 690,
        y: 305,
    },
    {
        id: "destinationHost",
        label: "Destination Host",
        icon: "▣",
        x: 855,
        y: 205,
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
        id: "routerA-routerC",
        from: "routerA",
        to: "routerC",
    },
    {
        id: "routerC-destination",
        from: "routerC",
        to: "destinationHost",
    },
    {
        id: "routerA-routerB",
        from: "routerA",
        to: "routerB",
    },
    {
        id: "routerB-routerD",
        from: "routerB",
        to: "routerD",
    },
    {
        id: "routerD-destination",
        from: "routerD",
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
        <section className="rip-theory-section">

            <div className="rip-section-heading">
                <h2>{title}</h2>
            </div>

            <div className="rip-theory-box">

                <div className="rip-theory-grid">

                    {items.map((item, index) => (
                        <article
                            className="rip-theory-card"
                            key={`${item.heading}-${index}`}
                        >

                            <h3>
                                {item.heading}
                            </h3>

                            <div className="rip-theory-points">

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
        <div className="rip-workflow">

            <svg
                className="rip-workflow-svg"
                viewBox="0 0 930 390"
                preserveAspectRatio="xMidYMid meet"
                role="img"
                aria-label={`RIP workflow step: ${step.title}`}
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
                                    ? "rip-line rip-line-active"
                                    : "rip-line"
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
                        className="rip-arrow-head"
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
                                    ? "rip-node rip-node-active"
                                    : "rip-node"
                            }
                        >

                            <rect
                                className="rip-device"
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
                                className="rip-device-icon"
                                x={node.x}
                                y={node.y + 5}
                                textAnchor="middle"
                            >
                                {node.icon}
                            </text>

                            <text
                                className="rip-device-label"
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

export default function Rip() {
    const navigate = useNavigate();

    const [
        currentStep,
        setCurrentStep,
    ] = useState(0);

    const step =
        ripData.workflow[currentStep];


    const nextStep = () => {
        setCurrentStep((prev) =>
            Math.min(
                prev + 1,
                ripData.workflow.length - 1
            )
        );
    };


    const previousStep = () => {
        setCurrentStep((prev) =>
            Math.max(prev - 1, 0)
        );
    };


    return (
        <main className="rip-page">

            {/* BACK */}

            <button
                className="rip-back"
                onClick={() =>
                    navigate("/protocols")
                }
            >
                Back
            </button>


            {/* INTRO */}

            <section className="rip-intro">

                <h1>{ripData.title}</h1>

                <div className="rip-intro-points">

                    {ripData.intro.map(
                        (point, index) => (
                            <div
                                className="rip-info-box"
                                key={index}
                            >
                                <p>{point}</p>
                            </div>
                        )
                    )}

                    <div className="rip-info-box">

                        <p>
                            <strong>PDU:</strong>{" "}
                            {ripData.pdu}
                        </p>

                    </div>

                </div>

            </section>


            {/* WORKFLOW */}

            <section className="rip-workflow-section">

                <div className="rip-section-heading">

                    <h2>Workflow</h2>

                    <div className="rip-step-counter">
                        {currentStep + 1} /{" "}
                        {ripData.workflow.length}
                    </div>

                </div>


                <div className="rip-workflow-layout">

                    <button
                        type="button"
                        className="rip-workflow-arrow rip-workflow-prev"
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
                        className="rip-workflow-arrow rip-workflow-next"
                        onClick={nextStep}
                        disabled={
                            currentStep ===
                            ripData.workflow.length - 1
                        }
                        aria-label="Next step"
                    >
                        ›
                    </button>

                </div>


                {/* STEP INFORMATION */}

                <div className="rip-step-panel">

                    <div className="rip-progress">

                        <div
                            style={{
                                width: `${
                                    ((currentStep + 1) /
                                        ripData.workflow.length) *
                                    100
                                }%`,
                            }}
                        />

                    </div>


                    <div className="rip-step-content">

                        <div className="rip-step-text">

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

            {Object.entries(ripData.theory).map(
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