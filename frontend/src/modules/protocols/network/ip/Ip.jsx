import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import ipData from "../../../../data/ipData";

import "./ip.css";


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
        x: 110,
        y: 50,
    },
    {
        id: "indiaServer",
        label: "India Server",
        icon: "✉",
        x: 250,
        y: 125,
    },
    {
        id: "internetRouter",
        label: "Internet Router",
        icon: "◇",
        x: 390,
        y: 200,
    },
    {
        id: "japanRouter",
        label: "Japan Router",
        icon: "◇",
        x: 530,
        y: 275,
    },
    {
        id: "japanServer",
        label: "Japan Server",
        icon: "✉",
        x: 390,
        y: 350,
    },
    {
        id: "destinationPC",
        label: "Destination PC",
        icon: "▣",
        x: 250,
        y: 425,
    },
];


/* =========================================================
   LINK CONFIGURATION
========================================================= */

const links = [
    {
        id: "sourcePC-indiaServer",
        from: "sourcePC",
        to: "indiaServer",
    },
    {
        id: "indiaServer-internetRouter",
        from: "indiaServer",
        to: "internetRouter",
    },
    {
        id: "internetRouter-japanRouter",
        from: "internetRouter",
        to: "japanRouter",
    },
    {
        id: "japanRouter-japanServer",
        from: "japanRouter",
        to: "japanServer",
    },
    {
        id: "japanServer-destinationPC",
        from: "japanServer",
        to: "destinationPC",
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
        <section className="ip-theory-section">

            <div className="ip-section-heading">
                <h2>{title}</h2>
            </div>

            <div className="ip-theory-box">

                <div className="ip-theory-grid">

                    {items.map((item, index) => (
                        <article
                            className="ip-theory-card"
                            key={`${item.heading}-${index}`}
                        >
                            <h3>
                                {item.heading}
                            </h3>

                            <div className="ip-theory-points">

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
   RANGE TABLE
========================================================= */

function RangeTable() {
    return (
        <section className="ip-theory-section">

            <div className="ip-section-heading">
                <h2>IPv4 Class Private & Public Ranges</h2>
            </div>

            <div className="ip-range-box">

                <div className="ip-range-table-wrap">

                    <table className="ip-range-table">

                        <thead>
                            <tr>
                                <th>Class</th>
                                <th>Private Range</th>
                                <th>Public Range</th>
                                <th>Used For</th>
                            </tr>
                        </thead>

                        <tbody>

                            {ipData.ranges.map(
                                (item, index) => (
                                    <tr key={index}>

                                        <td>
                                            {item.className}
                                        </td>

                                        <td>
                                            {item.privateRange}
                                        </td>

                                        <td>
                                            {item.publicRange}
                                        </td>

                                        <td>
                                            {item.usedFor}
                                        </td>

                                    </tr>
                                )
                            )}

                        </tbody>

                    </table>

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
        <div className="ip-workflow">

            <svg
                className="ip-workflow-svg"
                viewBox="0 0 700 490"
                preserveAspectRatio="xMidYMid meet"
                role="img"
                aria-label={`IP workflow step: ${step.title}`}
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
                                    ? "ip-line ip-line-active"
                                    : "ip-line"
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
                        className="ip-arrow-head"
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
                                    ? "ip-node ip-node-active"
                                    : "ip-node"
                            }
                        >

                            <rect
                                className="ip-device"
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
                                className="ip-device-icon"
                                x={node.x}
                                y={node.y + 5}
                                textAnchor="middle"
                            >
                                {node.icon}
                            </text>

                            <text
                                className="ip-device-label"
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

export default function Ip() {
    const navigate = useNavigate();

    const [
        currentStep,
        setCurrentStep,
    ] = useState(0);

    const step =
        ipData.workflow[currentStep];


    const nextStep = () => {
        setCurrentStep((prev) =>
            Math.min(
                prev + 1,
                ipData.workflow.length - 1
            )
        );
    };


    const previousStep = () => {
        setCurrentStep((prev) =>
            Math.max(prev - 1, 0)
        );
    };


    return (
        <main className="ip-page">

            {/* BACK */}

            <button
                className="ip-back"
                onClick={() =>
                    navigate("/protocols")
                }
            >
                Back
            </button>


            {/* INTRO */}

            <section className="ip-intro">

                <h1>{ipData.title}</h1>

                <div className="ip-intro-points">

                    {ipData.intro.map(
                        (point, index) => (
                            <div
                                className="ip-info-box"
                                key={index}
                            >
                                <p>{point}</p>
                            </div>
                        )
                    )}

                    <div className="ip-info-box">

                        <p>
                            <strong>PDU:</strong>{" "}
                            {ipData.pdu}
                        </p>

                    </div>

                </div>

            </section>


            {/* WORKFLOW */}

            <section className="ip-workflow-section">

                <div className="ip-section-heading">

                    <h2>Workflow</h2>

                    <div className="ip-step-counter">
                        {currentStep + 1} /{" "}
                        {ipData.workflow.length}
                    </div>

                </div>


                <div className="ip-workflow-layout">

                    <button
                        type="button"
                        className="ip-workflow-arrow ip-workflow-prev"
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
                        className="ip-workflow-arrow ip-workflow-next"
                        onClick={nextStep}
                        disabled={
                            currentStep ===
                            ipData.workflow.length - 1
                        }
                        aria-label="Next step"
                    >
                        ›
                    </button>

                </div>


                {/* STEP INFORMATION */}

                <div className="ip-step-panel">

                    <div className="ip-progress">

                        <div
                            style={{
                                width: `${
                                    ((currentStep + 1) /
                                        ipData.workflow.length) *
                                    100
                                }%`,
                            }}
                        />

                    </div>


                    <div className="ip-step-content">

                        <div className="ip-step-text">

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
                title="IP Address Basics"
                items={
                    ipData.theory[
                        "IP Address Basics"
                    ]
                }
            />

            <TheorySection
                title="Address Scope & Version"
                items={
                    ipData.theory[
                        "Address Scope & Version"
                    ]
                }
            />

            <TheorySection
                title="Assignment & Communication"
                items={
                    ipData.theory[
                        "Assignment & Communication"
                    ]
                }
            />

            {/* EXTRA RANGE TABLE */}

            <RangeTable />

            <TheorySection
                title="Special IP Addresses"
                items={
                    ipData.theory[
                        "Special IP Addresses"
                    ]
                }
            />

            <TheorySection
                title="Core Networking Functions"
                items={
                    ipData.theory[
                        "Core Networking Functions"
                    ]
                }
            />

            <TheorySection
                title="IP Address Lookup"
                items={
                    ipData.theory[
                        "IP Address Lookup"
                    ]
                }
            />

            <TheorySection
                title="IP Address Security Threats"
                items={
                    ipData.theory[
                        "IP Address Security Threats"
                    ]
                }
            />

            <TheorySection
                title="Protecting and Hiding IP"
                items={
                    ipData.theory[
                        "Protecting and Hiding IP"
                    ]
                }
            />

        </main>
    );
}