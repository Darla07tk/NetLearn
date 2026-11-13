import { useState } from "react";
import { useNavigate } from "react-router-dom";

import dslData from "../../../../data/dslData";

import "./dsl.css";


/* =========================================================
   NODE CONFIGURATION
========================================================= */

const NODE_SIZE = 58;
const NODE_HALF = NODE_SIZE / 2;

const nodes = [
    {
        id: "computer",
        label: "Computer",
        icon: "▣",
        x: 95,
        y: 285,
    },
    {
        id: "dslModem",
        label: "DSL Modem",
        icon: "◆",
        x: 270,
        y: 285,
    },
    {
        id: "splitter",
        label: "DSL Splitter",
        icon: "◇",
        x: 445,
        y: 195,
    },
    {
        id: "telephone",
        label: "Telephone",
        icon: "▣",
        x: 445,
        y: 75,
    },
    {
        id: "dslAM",
        label: "DSLAM",
        icon: "◆",
        x: 665,
        y: 195,
    },
    {
        id: "ispNetwork",
        label: "ISP Network",
        icon: "◆",
        x: 850,
        y: 195,
    },
];


/* =========================================================
   LINK CONFIGURATION
========================================================= */

const links = [
    {
        id: "computer-modem",
        from: "computer",
        to: "dslModem",
    },
    {
        id: "modem-splitter",
        from: "dslModem",
        to: "splitter",
    },
    {
        id: "splitter-telephone",
        from: "splitter",
        to: "telephone",
    },
    {
        id: "splitter-dslam",
        from: "splitter",
        to: "dslAM",
    },
    {
        id: "dslam-isp",
        from: "dslAM",
        to: "ispNetwork",
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


/* =========================================================
   THEORY SECTION
========================================================= */

function TheorySection({ title, items }) {
    return (
        <section className="dsl-theory-section">

            <div className="dsl-section-heading">
                <h2>{title}</h2>
            </div>

            <div className="dsl-theory-box">

                <div className="dsl-theory-grid">

                    {items.map((item, index) => (
                        <article
                            className="dsl-theory-card"
                            key={`${item.heading}-${index}`}
                        >

                            <h3>
                                {item.heading}
                            </h3>

                            <div className="dsl-theory-points">

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
    const activeArrows =
        step.activeArrows ??
        (step.activeArrow
            ? [step.activeArrow]
            : []);

    return (
        <div className="dsl-workflow">

            <svg
                className="dsl-workflow-svg"
                viewBox="0 0 930 390"
                preserveAspectRatio="xMidYMid meet"
                role="img"
                aria-label={`DSL workflow step: ${step.title}`}
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
                                    ? "dsl-line dsl-line-active"
                                    : "dsl-line"
                            }
                            x1={points.x1}
                            y1={points.y1}
                            x2={points.x2}
                            y2={points.y2}
                        />
                    );
                })}


                {/* ACTIVE ARROWS */}

                {activeArrows.map(
                    (arrow, index) => (
                        <polygon
                            key={`arrow-${index}`}
                            className="dsl-arrow-head"
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
                                    ? "dsl-node dsl-node-active"
                                    : "dsl-node"
                            }
                        >

                            <rect
                                className="dsl-device"
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
                                className="dsl-device-icon"
                                x={node.x}
                                y={node.y + 5}
                                textAnchor="middle"
                            >
                                {node.icon}
                            </text>

                            <text
                                className="dsl-device-label"
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

export default function Dsl() {
    const navigate = useNavigate();

    const [
        currentStep,
        setCurrentStep,
    ] = useState(0);

    const step =
        dslData.workflow[currentStep];


    const nextStep = () => {
        setCurrentStep((prev) =>
            Math.min(
                prev + 1,
                dslData.workflow.length - 1
            )
        );
    };


    const previousStep = () => {
        setCurrentStep((prev) =>
            Math.max(prev - 1, 0)
        );
    };


    return (
        <main className="dsl-page">

            {/* BACK */}

            <button
                className="dsl-back"
                onClick={() =>
                    navigate("/protocols")
                }
            >
                Back
            </button>


            {/* INTRO */}

            <section className="dsl-intro">

                <h1>
                    {dslData.title}
                </h1>

                <div className="dsl-intro-points">

                    {dslData.intro.map(
                        (point, index) => (
                            <div
                                className="dsl-info-box"
                                key={index}
                            >
                                <p>{point}</p>
                            </div>
                        )
                    )}

                    <div className="dsl-info-box">

                        <p>
                            <strong>PDU:</strong>{" "}
                            {dslData.pdu}
                        </p>

                    </div>

                </div>

            </section>


            {/* WORKFLOW */}

            <section className="dsl-workflow-section">

                <div className="dsl-section-heading">

                    <h2>Workflow</h2>

                    <div className="dsl-step-counter">
                        {currentStep + 1} /{" "}
                        {dslData.workflow.length}
                    </div>

                </div>


                <div className="dsl-workflow-layout">

                    <button
                        type="button"
                        className="dsl-workflow-arrow dsl-workflow-prev"
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
                        className="dsl-workflow-arrow dsl-workflow-next"
                        onClick={nextStep}
                        disabled={
                            currentStep ===
                            dslData.workflow.length - 1
                        }
                        aria-label="Next step"
                    >
                        ›
                    </button>

                </div>


                {/* STEP INFORMATION */}

                <div className="dsl-step-panel">

                    <div className="dsl-progress">

                        <div
                            style={{
                                width: `${
                                    ((currentStep + 1) /
                                        dslData.workflow.length) *
                                    100
                                }%`,
                            }}
                        />

                    </div>


                    <div className="dsl-step-content">

                        <div className="dsl-step-text">

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
                dslData.theory
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