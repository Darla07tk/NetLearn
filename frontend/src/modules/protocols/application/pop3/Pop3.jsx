import { useState } from "react";
import { useNavigate } from "react-router-dom";

import pop3Data from "../../../../data/pop3Data";

import "./pop3.css";


const steps = [

    {
        title: "Client connects to POP3 server",
        text: "The POP3 client establishes a TCP connection with the POP3 mail server.",
        keyword: "CONNECT SERVER",
        direction: "forward",
    },

    {
        title: "Client requests available mail",
        text: "After the connection is established, the client requests the available email messages.",
        keyword: "REQUEST MAIL",
        direction: "forward",
    },

    {
        title: "Server lists available messages",
        text: "The server sends the available messages along with their size and unique identifier information.",
        keyword: "MAIL LIST",
        direction: "reverse",
    },

    {
        title: "Client requests downloads",
        text: "The client selects messages and sends a request to download them from the server.",
        keyword: "DOWNLOAD MAIL",
        direction: "forward",
    },

    {
        title: "Server sends selected messages",
        text: "The POP3 server sends the messages selected by the client for local storage.",
        keyword: "SEND MESSAGES",
        direction: "reverse",
    },

    {
        title: "Client requests message deletion",
        text: "The client can request the server to delete messages after they have been downloaded.",
        keyword: "DELETE MAIL",
        direction: "forward",
    },

    {
        title: "Server acknowledges request",
        text: "The server processes the request and sends an acknowledgment to the client.",
        keyword: "SEND ACK",
        direction: "reverse",
    },

    {
        title: "POP3 connection closes",
        text: "The client requests the connection to close, and the server acknowledges and closes the session.",
        keyword: "CLOSE SESSION",
        direction: "none",
    },

];


function Topology({ step }) {

    const isForward = step.direction === "forward";
    const isReverse = step.direction === "reverse";
    const showConnection = step.direction !== "none";

    return (
        <div className="pop3-topology">

            <svg
                className="pop3-topology-svg"
                viewBox="0 0 920 340"
                preserveAspectRatio="xMidYMid meet"
            >

                {/* KEYWORD */}

                <rect
                    x="360"
                    y="32"
                    width="200"
                    height="32"
                    rx="16"
                    className="pop3-keyword-box"
                />

                <text
                    x="460"
                    y="49"
                    className="pop3-keyword-text"
                >
                    {step.keyword}
                </text>


                {/* MAIN CONNECTION */}

                {showConnection && (
                    <line
                        x1="300"
                        y1="175"
                        x2="620"
                        y2="175"
                        className="pop3-svg-line"
                    />
                )}


                {/* ACTIVE FLOW */}

                {isForward && (
                    <line
                        x1="300"
                        y1="175"
                        x2="620"
                        y2="175"
                        className="pop3-flow-line"
                        markerEnd="url(#pop3-arrow-forward)"
                    />
                )}

                {isReverse && (
                    <line
                        x1="620"
                        y1="175"
                        x2="300"
                        y2="175"
                        className="pop3-flow-line"
                        markerEnd="url(#pop3-arrow-reverse)"
                    />
                )}


                {/* ARROW MARKERS */}

                <defs>

                    <marker
                        id="pop3-arrow-forward"
                        markerWidth="7"
                        markerHeight="7"
                        refX="5.5"
                        refY="3.5"
                        orient="auto"
                    >
                        <path
                            d="M0,0 L7,3.5 L0,7 Z"
                            className="pop3-flow-arrow"
                        />
                    </marker>

                    <marker
                        id="pop3-arrow-reverse"
                        markerWidth="7"
                        markerHeight="7"
                        refX="5.5"
                        refY="3.5"
                        orient="auto"
                    >
                        <path
                            d="M0,0 L7,3.5 L0,7 Z"
                            className="pop3-flow-arrow"
                        />
                    </marker>

                </defs>


                {/* CLIENT */}

                <g>

                    <rect
                        x="210"
                        y="130"
                        width="90"
                        height="90"
                        rx="14"
                        className="pop3-svg-device"
                    />

                    <text
                        x="255"
                        y="175"
                        className="pop3-svg-symbol"
                    >
                        ▣
                    </text>

                    <text
                        x="255"
                        y="248"
                        className="pop3-svg-label"
                    >
                        POP3 Client
                    </text>

                </g>


                {/* SERVER */}

                <g>

                    <rect
                        x="620"
                        y="130"
                        width="90"
                        height="90"
                        rx="14"
                        className="pop3-svg-device"
                    />

                    <text
                        x="665"
                        y="175"
                        className="pop3-svg-symbol"
                    >
                        ▤
                    </text>

                    <text
                        x="665"
                        y="248"
                        className="pop3-svg-label"
                    >
                        POP3 Server
                    </text>

                </g>

            </svg>

        </div>
    );
}


function TheorySection({ title, data }) {

    return (
        <section className="pop3-theory-section">

            <div className="pop3-section-heading">
                <h2>{title}</h2>
            </div>

            <div className="pop3-theory-box">

                {data.map((section) => (

                    <article
                        className="pop3-theory-card"
                        key={section.title}
                    >

                        <h3>
                            {section.title}
                        </h3>

                        <div className="pop3-theory-point">

                            {section.points.map(
                                (point, index) => (
                                    <p key={index}>
                                        {point}
                                    </p>
                                )
                            )}

                        </div>

                    </article>

                ))}

            </div>

        </section>
    );
}


export default function Pop3() {

    const navigate = useNavigate();

    const [currentStep, setCurrentStep] =
        useState(0);

    const step = steps[currentStep];


    const previousStep = () => {

        setCurrentStep(
            (value) => Math.max(value - 1, 0)
        );

    };


    const nextStep = () => {

        setCurrentStep(
            (value) =>
                Math.min(
                    value + 1,
                    steps.length - 1
                )
        );

    };


    return (
        <main className="pop3-page">

            {/* BACK */}

            <button
                className="pop3-back"
                onClick={() => navigate("/protocols")}
            >
                Back
            </button>


            {/* INTRODUCTION */}

            <section className="pop3-intro">

                <h1>
                    {pop3Data.title}
                </h1>

                <div className="pop3-intro-points">

                    {pop3Data.intro.map(
                        (point, index) => (
                            <div key={index}>
                                <p>{point}</p>
                            </div>
                        )
                    )}

                </div>

            </section>


            {/* WORKFLOW */}

            <section className="pop3-workflow-section">

                <div className="pop3-section-heading">

                    <h2>
                        Workflow
                    </h2>

                    <span className="pop3-step-counter">
                        {currentStep + 1} / {steps.length}
                    </span>

                </div>


                <div className="pop3-workflow-layout">

                    <button
                        className="pop3-workflow-arrow pop3-workflow-prev"
                        onClick={previousStep}
                        disabled={currentStep === 0}
                        aria-label="Previous step"
                    >
                        ‹
                    </button>


                    <Topology
                        step={step}
                    />


                    <button
                        className="pop3-workflow-arrow pop3-workflow-next"
                        onClick={nextStep}
                        disabled={
                            currentStep ===
                            steps.length - 1
                        }
                        aria-label="Next step"
                    >
                        ›
                    </button>

                </div>


                <div className="pop3-step-panel">

                    <div className="pop3-step-progress">

                        <div
                            style={{
                                width: `${
                                    ((currentStep + 1) /
                                        steps.length) *
                                    100
                                }%`,
                            }}
                        />

                    </div>


                    <div className="pop3-step-content">

                        <div className="pop3-step-text">

                            <h3>
                                {step.title}
                            </h3>

                            <p>
                                {step.text}
                            </p>

                        </div>

                    </div>


                    <div className="pop3-controls">

                        <div className="pop3-dots">

                            {steps.map(
                                (_, index) => (
                                    <button
                                        key={index}
                                        className={
                                            index ===
                                            currentStep
                                                ? "pop3-dot-active"
                                                : ""
                                        }
                                        onClick={() =>
                                            setCurrentStep(
                                                index
                                            )
                                        }
                                        aria-label={`Go to step ${
                                            index + 1
                                        }`}
                                    />
                                )
                            )}

                        </div>

                    </div>

                </div>

            </section>


            {/* THEORY */}

            <TheorySection
                title="Introduction to POP"
                data={pop3Data.theory.introduction}
            />

            <TheorySection
                title="POP3 Ports"
                data={pop3Data.theory.ports}
            />

            <TheorySection
                title="History of POP3"
                data={pop3Data.theory.history}
            />

            <TheorySection
                title="Advantages of POP3"
                data={pop3Data.theory.advantages}
            />

            <TheorySection
                title="Disadvantages of POP3"
                data={pop3Data.theory.disadvantages}
            />

            <TheorySection
                title="POP3 vs IMAP"
                data={pop3Data.theory.comparison}
            />

        </main>
    );
}