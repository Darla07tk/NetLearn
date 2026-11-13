import { useState } from "react";
import { useNavigate } from "react-router-dom";

import ftpData from "../../../../data/ftpData";

import "./ftp.css";


/* =========================================================
   FTP WORKFLOW STEPS
========================================================= */

const workflowSteps = [

    {
        title: "FTP client starts the connection",
        text: "The FTP client starts a TCP connection with the FTP server.",
        keyword: "Connection Start",
        direction: "forward",
        activeNodes: ["client", "switch", "router", "server"],
    },

    {
        title: "FTP server accepts the connection",
        text: "The FTP server accepts the connection and sends a welcome response.",
        keyword: "Server Response",
        direction: "reverse",
        activeNodes: ["server", "router", "switch", "client"],
    },

    {
        title: "Client sends USER command",
        text: "The client sends the USER command to provide the username.",
        keyword: "Send Username",
        direction: "forward",
        activeNodes: ["client", "switch", "router", "server"],
    },

    {
        title: "Server requests the password",
        text: "The server responds with 331 and asks the client for the password.",
        keyword: "Password Request",
        direction: "reverse",
        activeNodes: ["server", "router", "switch", "client"],
    },

    {
        title: "Client sends PASS command",
        text: "The client sends the PASS command containing the password.",
        keyword: "Send Password",
        direction: "forward",
        activeNodes: ["client", "switch", "router", "server"],
    },

    {
        title: "Server authenticates the client",
        text: "The server verifies the credentials and sends a successful login response.",
        keyword: "User Authentication",
        direction: "reverse",
        activeNodes: ["server", "router", "switch", "client"],
    },

    {
        title: "Client requests a data connection",
        text: "The client sends a command to establish the FTP data connection.",
        keyword: "Data Connection",
        direction: "forward",
        activeNodes: ["client", "switch", "router", "server"],
    },

    {
        title: "Server prepares the data connection",
        text: "The server prepares the separate data connection for file transfer.",
        keyword: "Prepare Transfer",
        direction: "reverse",
        activeNodes: ["server", "router", "switch", "client"],
    },

    {
        title: "Client requests a file",
        text: "The client sends the RETR command to request a file from the server.",
        keyword: "File Request",
        direction: "forward",
        activeNodes: ["client", "switch", "router", "server"],
    },

    {
        title: "Server sends the file",
        text: "The server sends the requested file through the FTP data connection.",
        keyword: "File Transfer",
        direction: "reverse",
        activeNodes: ["server", "router", "switch", "client"],
    },

    {
        title: "File transfer completes",
        text: "The complete file reaches the client and the server confirms the transfer.",
        keyword: "Transfer Complete",
        direction: "reverse",
        activeNodes: ["server", "router", "switch", "client"],
    },

    {
        title: "Client closes the FTP session",
        text: "The client sends QUIT and the FTP session is closed.",
        keyword: "Close Session",
        direction: "none",
        activeNodes: [],
    },

];


/* =========================================================
   WORKFLOW DIAGRAM
========================================================= */

function WorkflowDiagram({ step }) {

    const isActiveNode = (node) =>
        step.activeNodes.includes(node);


    return (
        <div className="ftp-topology">

            <svg
                className="ftp-topology-svg"
                viewBox="0 0 1000 340"
                preserveAspectRatio="xMidYMid meet"
            >

                {/* =================================================
                    NORMAL NETWORK LINKS
                ================================================= */}

                <line
                    x1="190"
                    y1="175"
                    x2="365"
                    y2="175"
                    className="ftp-network-line"
                />

                <line
                    x1="455"
                    y1="175"
                    x2="545"
                    y2="175"
                    className="ftp-network-line"
                />

                <line
                    x1="635"
                    y1="175"
                    x2="810"
                    y2="175"
                    className="ftp-network-line"
                />


                {/* =================================================
                    ACTIVE BLUE FLOW
                ================================================= */}

                {step.direction === "forward" && (
                    <>
                        <line
                            x1="190"
                            y1="175"
                            x2="365"
                            y2="175"
                            className="ftp-flow-line"
                            markerEnd="url(#ftp-small-arrow-forward)"
                        />

                        <line
                            x1="455"
                            y1="175"
                            x2="545"
                            y2="175"
                            className="ftp-flow-line"
                            markerEnd="url(#ftp-small-arrow-forward)"
                        />

                        <line
                            x1="635"
                            y1="175"
                            x2="810"
                            y2="175"
                            className="ftp-flow-line"
                            markerEnd="url(#ftp-small-arrow-forward)"
                        />
                    </>
                )}


                {step.direction === "reverse" && (
                    <>
                        <line
                            x1="810"
                            y1="175"
                            x2="635"
                            y2="175"
                            className="ftp-flow-line"
                            markerEnd="url(#ftp-small-arrow-reverse)"
                        />

                        <line
                            x1="545"
                            y1="175"
                            x2="455"
                            y2="175"
                            className="ftp-flow-line"
                            markerEnd="url(#ftp-small-arrow-reverse)"
                        />

                        <line
                            x1="365"
                            y1="175"
                            x2="190"
                            y2="175"
                            className="ftp-flow-line"
                            markerEnd="url(#ftp-small-arrow-reverse)"
                        />
                    </>
                )}


                {/* =================================================
                    SMALL ARROW MARKERS
                ================================================= */}

                <defs>

                    <marker
                        id="ftp-small-arrow-forward"
                        markerWidth="5"
                        markerHeight="5"
                        refX="4"
                        refY="2.5"
                        orient="auto"
                        markerUnits="strokeWidth"
                    >
                        <path
                            d="M0,0 L5,2.5 L0,5 Z"
                            className="ftp-arrow-head"
                        />
                    </marker>


                    <marker
                        id="ftp-small-arrow-reverse"
                        markerWidth="5"
                        markerHeight="5"
                        refX="4"
                        refY="2.5"
                        orient="auto"
                        markerUnits="strokeWidth"
                    >
                        <path
                            d="M0,0 L5,2.5 L0,5 Z"
                            className="ftp-arrow-head"
                        />
                    </marker>

                </defs>


                {/* =================================================
                    FTP CLIENT
                ================================================= */}

                <g
                    className={
                        isActiveNode("client")
                            ? "ftp-node ftp-node-active"
                            : "ftp-node"
                    }
                >

                    <rect
                        x="70"
                        y="130"
                        width="120"
                        height="90"
                        rx="12"
                        className="ftp-device"
                    />

                    <text
                        x="130"
                        y="168"
                        textAnchor="middle"
                        className="ftp-device-symbol"
                    >
                        ▣
                    </text>

                    <text
                        x="130"
                        y="197"
                        textAnchor="middle"
                        className="ftp-device-label"
                    >
                        FTP Client
                    </text>

                </g>


                {/* =================================================
                    SWITCH
                ================================================= */}

                <g
                    className={
                        isActiveNode("switch")
                            ? "ftp-node ftp-node-active"
                            : "ftp-node"
                    }
                >

                    <rect
                        x="365"
                        y="130"
                        width="90"
                        height="90"
                        rx="12"
                        className="ftp-device"
                    />

                    <text
                        x="410"
                        y="168"
                        textAnchor="middle"
                        className="ftp-device-symbol"
                    >
                        ▦
                    </text>

                    <text
                        x="410"
                        y="197"
                        textAnchor="middle"
                        className="ftp-device-label"
                    >
                        Switch
                    </text>

                </g>


                {/* =================================================
                    ROUTER
                ================================================= */}

                <g
                    className={
                        isActiveNode("router")
                            ? "ftp-node ftp-node-active"
                            : "ftp-node"
                    }
                >

                    <circle
                        cx="590"
                        cy="175"
                        r="45"
                        className="ftp-router"
                    />

                    <text
                        x="590"
                        y="180"
                        textAnchor="middle"
                        className="ftp-router-symbol"
                    >
                        ↔
                    </text>

                    <text
                        x="590"
                        y="245"
                        textAnchor="middle"
                        className="ftp-device-label"
                    >
                        Router
                    </text>

                </g>


                {/* =================================================
                    FTP SERVER
                ================================================= */}

                <g
                    className={
                        isActiveNode("server")
                            ? "ftp-node ftp-node-active"
                            : "ftp-node"
                    }
                >

                    <rect
                        x="810"
                        y="130"
                        width="120"
                        height="90"
                        rx="12"
                        className="ftp-device"
                    />

                    <text
                        x="870"
                        y="168"
                        textAnchor="middle"
                        className="ftp-device-symbol"
                    >
                        ▤
                    </text>

                    <text
                        x="870"
                        y="197"
                        textAnchor="middle"
                        className="ftp-device-label"
                    >
                        FTP Server
                    </text>

                </g>


                {/* =================================================
                    CURRENT STEP KEYWORD - TOP
                ================================================= */}

                <rect
                    x="435"
                    y="45"
                    width="130"
                    height="30"
                    rx="15"
                    className="ftp-keyword-box"
                />

                <text
                    x="500"
                    y="60"
                    className="ftp-keyword-text"
                >
                    {step.keyword}
                </text>


                {/* =================================================
                    CURRENT STEP KEYWORD - BOTTOM
                ================================================= */}

                <text
                    x="500"
                    y="295"
                    textAnchor="middle"
                    className="ftp-flow-keyword"
                >
                    {step.keyword}
                </text>

            </svg>

        </div>
    );
}


/* =========================================================
   THEORY
========================================================= */

function TheoryBox({ items = [] }) {

    return (
        <div className="ftp-theory-box">

            {items.map((item, index) => (

                <div
                    className="ftp-theory-card"
                    key={`${item.title}-${index}`}
                >

                    <h3>
                        {item.title}
                    </h3>

                    <div className="ftp-theory-point">

                        {item.points?.map(
                            (point, pointIndex) => (
                                <p key={pointIndex}>
                                    {point}
                                </p>
                            )
                        )}

                    </div>

                </div>

            ))}

        </div>
    );
}


/* =========================================================
   FTP PAGE
========================================================= */

export default function Ftp() {

    const navigate = useNavigate();

    const [currentStep, setCurrentStep] = useState(0);

    const step = workflowSteps[currentStep];


    /* =====================================================
       NAVIGATION
    ===================================================== */

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


    const goToStep = (index) => {

        setCurrentStep(index);

    };


    return (

        <main className="ftp-page">

            {/* =================================================
                BACK
            ================================================= */}

            <button
                className="ftp-back"
                onClick={() => navigate("/protocols")}
            >
                Back
            </button>


            {/* =================================================
                INTRO
            ================================================= */}

            <section className="ftp-intro">

                <h1>
                    {ftpData.title}
                </h1>

                <div className="ftp-intro-points">

                    {ftpData.intro?.map(
                        (point, index) => (

                            <div
                                className="ftp-info-box"
                                key={index}
                            >
                                <p>
                                    {point}
                                </p>
                            </div>

                        )
                    )}

                </div>

            </section>


            {/* =================================================
                WORKFLOW
            ================================================= */}

            <section className="ftp-workflow-section">

                <div className="ftp-section-heading">

                    <h2>
                        Workflow
                    </h2>

                    <span className="ftp-step-counter">
                        {currentStep + 1} / {workflowSteps.length}
                    </span>

                </div>


                <div className="ftp-workflow-layout">

                    <button
                        className="ftp-workflow-arrow ftp-workflow-prev"
                        onClick={previousStep}
                        disabled={currentStep === 0}
                        aria-label="Previous step"
                    >
                        ‹
                    </button>


                    <WorkflowDiagram
                        step={step}
                    />


                    <button
                        className="ftp-workflow-arrow ftp-workflow-next"
                        onClick={nextStep}
                        disabled={
                            currentStep ===
                            workflowSteps.length - 1
                        }
                        aria-label="Next step"
                    >
                        ›
                    </button>

                </div>


                {/* =================================================
                    STEP INFORMATION
                ================================================= */}

                <div className="ftp-step-panel">

                    <div className="ftp-step-progress">

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


                    <div className="ftp-step-content">

                        <div className="ftp-step-text">

                            <h3>
                                {step.title}
                            </h3>

                            <p>
                                {step.text}
                            </p>

                        </div>

                    </div>

                </div>


                {/* =================================================
                    STEP DOTS
                ================================================= */}

                <div className="ftp-controls">

                    <div className="ftp-dots">

                        {workflowSteps.map(
                            (_, index) => (

                                <button
                                    key={index}
                                    className={
                                        index === currentStep
                                            ? "ftp-dot-active"
                                            : ""
                                    }
                                    onClick={() =>
                                        goToStep(index)
                                    }
                                    aria-label={`Go to step ${index + 1}`}
                                />

                            )
                        )}

                    </div>

                </div>

            </section>


            {/* =================================================
                THEORY
            ================================================= */}

            <section className="ftp-theory-section">

                <div className="ftp-section-heading">
                    <h2>Connection Types</h2>
                </div>

                <TheoryBox
                    items={
                        ftpData.theory?.connectionTypes
                    }
                />

            </section>


            <section className="ftp-theory-section">

                <div className="ftp-section-heading">
                    <h2>FTP Data Types</h2>
                </div>

                <TheoryBox
                    items={
                        ftpData.theory?.dataTypes
                    }
                />

            </section>


            <section className="ftp-theory-section">

                <div className="ftp-section-heading">
                    <h2>FTP Clients</h2>
                </div>

                <TheoryBox
                    items={
                        ftpData.theory?.clients
                    }
                />

            </section>


            <section className="ftp-theory-section">

                <div className="ftp-section-heading">
                    <h2>FTP Commands</h2>
                </div>

                <TheoryBox
                    items={
                        ftpData.theory?.commands
                    }
                />

            </section>


            <section className="ftp-theory-section">

                <div className="ftp-section-heading">
                    <h2>FTP Reply Codes</h2>
                </div>

                <TheoryBox
                    items={
                        ftpData.theory?.replies
                    }
                />

            </section>


            <section className="ftp-theory-section">

                <div className="ftp-section-heading">
                    <h2>Characteristics of FTP</h2>
                </div>

                <TheoryBox
                    items={
                        ftpData.theory?.characteristics
                    }
                />

            </section>


            <section className="ftp-theory-section">

                <div className="ftp-section-heading">
                    <h2>Types of FTP</h2>
                </div>

                <TheoryBox
                    items={
                        ftpData.theory?.ftpTypes
                    }
                />

            </section>


            <section className="ftp-theory-section">

                <div className="ftp-section-heading">
                    <h2>FTP Security</h2>
                </div>

                <TheoryBox
                    items={
                        ftpData.theory?.security
                    }
                />

            </section>


            <section className="ftp-theory-section">

                <div className="ftp-section-heading">
                    <h2>Security Weaknesses</h2>
                </div>

                <TheoryBox
                    items={
                        ftpData.theory?.securityWeakness
                    }
                />

            </section>


            <section className="ftp-theory-section">

                <div className="ftp-section-heading">
                    <h2>Port Configuration</h2>
                </div>

                <TheoryBox
                    items={
                        ftpData.theory?.portConfiguration
                    }
                />

            </section>


            <section className="ftp-theory-section">

                <div className="ftp-section-heading">
                    <h2>FTP vs SFTP</h2>
                </div>

                <TheoryBox
                    items={
                        ftpData.theory?.comparison
                    }
                />

            </section>

        </main>
    );
}