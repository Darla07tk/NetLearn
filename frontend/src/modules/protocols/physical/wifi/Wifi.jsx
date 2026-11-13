import { useState } from "react";
import { useNavigate } from "react-router-dom";

import wifiData from "../../../../data/wifiData";

import "./wifi.css";


/* =========================================================
   NODE CONFIGURATION
========================================================= */

const NODE_SIZE = 58;
const NODE_HALF = NODE_SIZE / 2;

const nodes = [
    {
        id: "sourceLaptop",
        label: "Laptop",
        icon: "▣",
        x: 135,
        y: 205,
    },
    {
        id: "wifiRouter",
        label: "Wi-Fi Router",
        icon: "◆",
        x: 465,
        y: 205,
    },
    {
        id: "destinationTV",
        label: "Smart TV",
        icon: "▣",
        x: 795,
        y: 205,
    },
];


/* =========================================================
   LINK CONFIGURATION
========================================================= */

const links = [
    {
        id: "source-router",
        from: "sourceLaptop",
        to: "wifiRouter",
    },
    {
        id: "router-destination",
        from: "wifiRouter",
        to: "destinationTV",
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
        <section className="wifi-theory-section">

            <div className="wifi-section-heading">
                <h2>{title}</h2>
            </div>

            <div className="wifi-theory-box">

                <div className="wifi-theory-grid">

                    {items.map((item, index) => (
                        <article
                            className="wifi-theory-card"
                            key={`${item.heading}-${index}`}
                        >

                            <h3>
                                {item.heading}
                            </h3>

                            <div className="wifi-theory-points">

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
        <div className="wifi-workflow">

            <svg
                className="wifi-workflow-svg"
                viewBox="0 0 930 390"
                preserveAspectRatio="xMidYMid meet"
                role="img"
                aria-label={`Wi-Fi workflow step: ${step.title}`}
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
                                    ? "wifi-line wifi-line-active"
                                    : "wifi-line"
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
                        className="wifi-arrow-head"
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
                                    ? "wifi-node wifi-node-active"
                                    : "wifi-node"
                            }
                        >

                            <rect
                                className="wifi-device"
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
                                className="wifi-device-icon"
                                x={node.x}
                                y={node.y + 5}
                                textAnchor="middle"
                            >
                                {node.icon}
                            </text>

                            <text
                                className="wifi-device-label"
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

export default function Wifi() {
    const navigate = useNavigate();

    const [
        currentStep,
        setCurrentStep,
    ] = useState(0);

    const step =
        wifiData.workflow[currentStep];


    const nextStep = () => {
        setCurrentStep((prev) =>
            Math.min(
                prev + 1,
                wifiData.workflow.length - 1
            )
        );
    };


    const previousStep = () => {
        setCurrentStep((prev) =>
            Math.max(prev - 1, 0)
        );
    };


    return (
        <main className="wifi-page">

            {/* BACK */}

            <button
                className="wifi-back"
                onClick={() =>
                    navigate("/protocols")
                }
            >
                Back
            </button>


            {/* INTRO */}

            <section className="wifi-intro">

                <h1>
                    {wifiData.title}
                </h1>

                <div className="wifi-intro-points">

                    {wifiData.intro.map(
                        (point, index) => (
                            <div
                                className="wifi-info-box"
                                key={index}
                            >
                                <p>{point}</p>
                            </div>
                        )
                    )}

                    <div className="wifi-info-box">

                        <p>
                            <strong>PDU:</strong>{" "}
                            {wifiData.pdu}
                        </p>

                    </div>

                </div>

            </section>


            {/* WORKFLOW */}

            <section className="wifi-workflow-section">

                <div className="wifi-section-heading">

                    <h2>Workflow</h2>

                    <div className="wifi-step-counter">
                        {currentStep + 1} /{" "}
                        {wifiData.workflow.length}
                    </div>

                </div>


                <div className="wifi-workflow-layout">

                    <button
                        type="button"
                        className="wifi-workflow-arrow wifi-workflow-prev"
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
                        className="wifi-workflow-arrow wifi-workflow-next"
                        onClick={nextStep}
                        disabled={
                            currentStep ===
                            wifiData.workflow.length - 1
                        }
                        aria-label="Next step"
                    >
                        ›
                    </button>

                </div>


                {/* STEP INFORMATION */}

                <div className="wifi-step-panel">

                    <div className="wifi-progress">

                        <div
                            style={{
                                width: `${
                                    ((currentStep + 1) /
                                        wifiData.workflow.length) *
                                    100
                                }%`,
                            }}
                        />

                    </div>


                    <div className="wifi-step-content">

                        <div className="wifi-step-text">

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
                wifiData.theory
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