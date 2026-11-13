import { useState } from "react";
import { useNavigate } from "react-router-dom";

import mimeData from "../../../../data/mimeData";

import "./mime.css";

/* =========================================================
   WORKFLOW
========================================================= */

const workflowSteps = mimeData.steps;


/* =========================================================
   NODE CONFIGURATION
========================================================= */

const nodes = [
    {
        id: "client",
        label: "Email Client",
        icon: "✉",
        x: 95,
    },
    {
        id: "encoder",
        label: "MIME Processor",
        icon: "+",
        x: 285,
    },
    {
        id: "smtp",
        label: "SMTP Server",
        icon: "⇄",
        x: 475,
    },
    {
        id: "decoder",
        label: "MIME Decoder",
        icon: "◈",
        x: 665,
    },
    {
        id: "receiver",
        label: "Recipient Client",
        icon: "✉",
        x: 855,
    },
];


/* =========================================================
   LINK CONFIGURATION
========================================================= */

const links = [
    {
        id: "client-processor",
        x1: 120,
        x2: 260,
    },
    {
        id: "encoder-smtp",
        x1: 310,
        x2: 450,
    },
    {
        id: "smtp-decoder",
        x1: 500,
        x2: 640,
    },
    {
        id: "decoder-receiver",
        x1: 690,
        x2: 830,
    },
];


/* =========================================================
   WORKFLOW DIAGRAM
========================================================= */

function WorkflowDiagram({ step, currentStep }) {
    const isFirstStep = currentStep === 0;
    const isLastStep = currentStep === workflowSteps.length - 1;

    /*
       First step:
       Only Email Client is highlighted and the path to MIME Processor is active.

       Last step:
       Only Recipient Client is highlighted.

       Middle steps:
       Use the existing activeNodes from mimeData.
    */
    const activeNodes = isLastStep
        ? ["receiver"]
        : isFirstStep
            ? ["client"]
            : step.activeNodes || [];

    const activeLinks = isFirstStep
        ? ["client-processor"]
        : step.activeLinks || [];

    return (
        <div className="mime-workflow">
            <svg
                viewBox="0 140 950 150"
                className="mime-workflow-svg"
                role="img"
                aria-label={`MIME workflow step: ${step.title}`}
            >
                <defs>
                    <marker
                        id="mimeArrowBlue"
                        markerWidth="6"
                        markerHeight="6"
                        refX="5.5"
                        refY="3"
                        orient="auto"
                    >
                        <path
                            d="M0,0 L6,3 L0,6 Z"
                            className="mime-arrow-head"
                        />
                    </marker>
                </defs>

                {/* CONNECTIONS */}

                {links.map((link) => {
                    const active = activeLinks.includes(link.id);

                    return (
                        <g key={link.id}>
                            <line
                                x1={link.x1}
                                y1="205"
                                x2={link.x2}
                                y2="205"
                                className={
                                    active
                                        ? "mime-line mime-line-active"
                                        : "mime-line"
                                }
                            />

                            {active && (
                                <line
                                    x1={link.x1}
                                    y1="205"
                                    x2={link.x2}
                                    y2="205"
                                    className="mime-direction-arrow"
                                    markerEnd="url(#mimeArrowBlue)"
                                />
                            )}
                        </g>
                    );
                })}


                {/* DEVICES */}

                {nodes.map((node) => {
                    const active = activeNodes.includes(node.id);

                    return (
                        <g
                            key={node.id}
                            className={
                                active
                                    ? "mime-node mime-node-active"
                                    : "mime-node"
                            }
                        >
                            <rect
                                x={node.x - 25}
                                y="180"
                                width="50"
                                height="50"
                                rx="9"
                                className="mime-device"
                            />

                            <text
                                x={node.x}
                                y="212"
                                textAnchor="middle"
                                className="mime-device-icon"
                            >
                                {node.icon}
                            </text>

                            <text
                                x={node.x}
                                y="252"
                                textAnchor="middle"
                                className="mime-device-label"
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
   THEORY SECTION
========================================================= */

function TheorySection({ title, items }) {
    return (
        <section className="mime-theory-section">
            <div className="mime-section-heading">
                <h2>{title}</h2>
            </div>

            <div className="mime-theory-box">
                <div className="mime-theory-grid">
                    {items.map((item, index) => (
                        <article
                            className="mime-theory-card"
                            key={`${item.title}-${index}`}
                        >
                            <h3>{item.title}</h3>
                            <p>{item.text}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}


/* =========================================================
   MIME PAGE
========================================================= */

export default function Mime() {
    const navigate = useNavigate();

    const [currentStep, setCurrentStep] = useState(0);
    const step = workflowSteps[currentStep];


    const previousStep = () => {
        setCurrentStep((value) =>
            Math.max(value - 1, 0)
        );
    };


    const nextStep = () => {
        setCurrentStep((value) =>
            Math.min(
                value + 1,
                workflowSteps.length - 1
            )
        );
    };


    return (
        <main className="mime-page">

            {/* BACK */}

            <button
                className="mime-back"
                onClick={() => navigate("/protocols")}
            >
                Back
            </button>


            {/* INTRO */}

            <section className="mime-intro">
                <h1>{mimeData.title}</h1>

                <div className="mime-intro-points">
                    {mimeData.intro.map((point, index) => (
                        <div
                            className="mime-info-box"
                            key={index}
                        >
                            <p>{point}</p>
                        </div>
                    ))}
                </div>
            </section>


            {/* WORKFLOW */}

            <section className="mime-workflow-section">

                <div className="mime-section-heading">
                    <h2>Workflow</h2>

                    <span className="mime-step-counter">
                        {currentStep + 1} / {workflowSteps.length}
                    </span>
                </div>


                <div className="mime-workflow-layout">

                    <button
                        type="button"
                        className="mime-workflow-arrow mime-workflow-prev"
                        onClick={previousStep}
                        disabled={currentStep === 0}
                        aria-label="Previous step"
                    >
                        ‹
                    </button>


                    <WorkflowDiagram
                        step={step}
                        currentStep={currentStep}
                    />


                    <button
                        type="button"
                        className="mime-workflow-arrow mime-workflow-next"
                        onClick={nextStep}
                        disabled={
                            currentStep === workflowSteps.length - 1
                        }
                        aria-label="Next step"
                    >
                        ›
                    </button>

                </div>


                {/* STEP INFORMATION */}

                <div className="mime-step-panel">

                    <div className="mime-progress">
                        <div
                            style={{
                                width: `${
                                    ((currentStep + 1) /
                                        workflowSteps.length) *
                                    100
                                }%`,
                            }}
                        />
                    </div>


                    <div className="mime-step-content">

                        <div className="mime-step-text">
                            <h3>{step.title}</h3>
                            <p>{step.text}</p>
                        </div>

                    </div>

                </div>

            </section>


            {/* THEORY */}

            <TheorySection
                title="Characteristics of MIME"
                items={mimeData.theory.characteristics}
            />

            <TheorySection
                title="MIME Structure"
                items={mimeData.theory.structure}
            />

            <TheorySection
                title="Pros of MIME"
                items={mimeData.theory.pros}
            />

            <TheorySection
                title="Cons of MIME"
                items={mimeData.theory.cons}
            />

        </main>
    );
}