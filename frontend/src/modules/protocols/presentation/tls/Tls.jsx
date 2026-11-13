import { useState } from "react";
import { useNavigate } from "react-router-dom";
import tlsData from "../../../../data/tlsData";
import "./tls.css";

export default function Tls() {
    const navigate = useNavigate();
    const [currentStep, setCurrentStep] = useState(0);

    const step = tlsData.workflow[currentStep];
    const totalSteps = tlsData.workflow.length;

    const isActive = (node) =>
        step.activeNodes?.includes(node);

    const isLinkActive = (link) =>
        step.activeLinks?.includes(link);

    const nextStep = () => {
        setCurrentStep((prev) =>
            Math.min(prev + 1, totalSteps - 1)
        );
    };

    const previousStep = () => {
        setCurrentStep((prev) =>
            Math.max(prev - 1, 0)
        );
    };

    return (
        <div className="tls-page">

            {/* BACK */}
            <button
                className="tls-back"
                onClick={() => navigate(-1)}
            >
                Back
            </button>


            {/* INTRO */}
            <section className="tls-intro">

                <h1>{tlsData.title}</h1>

                <div className="tls-intro-points">

                    {tlsData.intro.map((point, index) => (
                        <div
                            className="tls-info-box"
                            key={index}
                        >
                            <p>{point}</p>
                        </div>
                    ))}

                </div>

            </section>


            {/* WORKFLOW */}
            <section className="tls-workflow-section">

                <div className="tls-section-heading">

                    <h2>Workflow</h2>

                    <span className="tls-step-counter">
                        {currentStep + 1} / {totalSteps}
                    </span>

                </div>


                <div className="tls-workflow-layout">

                    {/* PREVIOUS */}
                    <button
                        type="button"
                        className="tls-workflow-arrow tls-workflow-prev"
                        onClick={previousStep}
                        disabled={currentStep === 0}
                        aria-label="Previous step"
                    >
                        ‹
                    </button>


                    {/* DIAGRAM */}
                    <div className="tls-workflow">

                        <svg
                            className="tls-workflow-svg"
                            viewBox="0 0 920 400"
                            preserveAspectRatio="xMidYMid meet"
                            role="img"
                            aria-label={`TLS workflow step ${currentStep + 1}: ${step.title}`}
                        >

                            <defs>

                                {/* RIGHT ARROW */}
                                <marker
                                    id="tls-arrow-right"
                                    markerWidth="10"
                                    markerHeight="10"
                                    refX="8"
                                    refY="5"
                                    orient="auto"
                                    markerUnits="userSpaceOnUse"
                                >
                                    <path
                                        d="M 0 0 L 10 5 L 0 10 Z"
                                        fill="#3190ed"
                                    />
                                </marker>

                                {/* LEFT ARROW */}
                                <marker
                                    id="tls-arrow-left"
                                    markerWidth="10"
                                    markerHeight="10"
                                    refX="2"
                                    refY="5"
                                    orient="auto"
                                    markerUnits="userSpaceOnUse"
                                >
                                    <path
                                        d="M 10 0 L 0 5 L 10 10 Z"
                                        fill="#3190ed"
                                    />
                                </marker>

                            </defs>


                            {/* =====================================================
                                CLIENT → ROUTER
                            ===================================================== */}

                            <line
                                x1="185"
                                y1="205"
                                x2="425"
                                y2="205"
                                className={`tls-line ${
                                    isLinkActive("client-router")
                                        ? "tls-line-active"
                                        : ""
                                }`}
                                markerEnd={
                                    isLinkActive("client-router")
                                        ? "url(#tls-arrow-right)"
                                        : undefined
                                }
                            />


                            {/* =====================================================
                                ROUTER → SERVER
                            ===================================================== */}

                            <line
                                x1="495"
                                y1="205"
                                x2="735"
                                y2="205"
                                className={`tls-line ${
                                    isLinkActive("router-server")
                                        ? "tls-line-active"
                                        : ""
                                }`}
                                markerEnd={
                                    isLinkActive("router-server")
                                        ? "url(#tls-arrow-right)"
                                        : undefined
                                }
                            />


                            {/* =====================================================
                                KEY EXCHANGE
                                Both directions use the SAME existing links.
                                No additional duplicate flow links.
                            ===================================================== */}

                            {currentStep === 3 && (
                                <>
                                    <line
                                        x1="185"
                                        y1="205"
                                        x2="425"
                                        y2="205"
                                        className="tls-line tls-line-active"
                                        markerStart="url(#tls-arrow-left)"
                                        markerEnd="url(#tls-arrow-right)"
                                    />

                                    <line
                                        x1="495"
                                        y1="205"
                                        x2="735"
                                        y2="205"
                                        className="tls-line tls-line-active"
                                        markerStart="url(#tls-arrow-left)"
                                        markerEnd="url(#tls-arrow-right)"
                                    />
                                </>
                            )}


                            {/* =====================================================
                                CLIENT → CA
                                Straight existing link.
                                No curved path and no additional flow link.
                            ===================================================== */}

                            <line
                                x1="185"
                                y1="188"
                                x2="420"
                                y2="108"
                                className={`tls-ca-link ${
                                    isLinkActive("client-ca")
                                        ? "tls-ca-link-active"
                                        : ""
                                }`}
                                markerEnd={
                                    isLinkActive("client-ca")
                                        ? "url(#tls-arrow-right)"
                                        : undefined
                                }
                            />


                            {/* =====================================================
                                CLIENT
                            ===================================================== */}

                            <g
                                className={`tls-node ${
                                    isActive("client")
                                        ? "tls-node-active"
                                        : ""
                                }`}
                            >

                                <rect
                                    x="105"
                                    y="168"
                                    width="80"
                                    height="74"
                                    rx="12"
                                    className="tls-device"
                                />

                                <text
                                    x="145"
                                    y="201"
                                    textAnchor="middle"
                                    className="tls-device-icon"
                                >
                                    PC
                                </text>

                                <text
                                    x="145"
                                    y="266"
                                    textAnchor="middle"
                                    className="tls-device-label"
                                >
                                    Client
                                </text>

                            </g>


                            {/* =====================================================
                                ROUTER
                            ===================================================== */}

                            <g
                                className={`tls-node ${
                                    isActive("router")
                                        ? "tls-node-active"
                                        : ""
                                }`}
                            >

                                <rect
                                    x="425"
                                    y="168"
                                    width="70"
                                    height="74"
                                    rx="12"
                                    className="tls-device"
                                />

                                <text
                                    x="460"
                                    y="202"
                                    textAnchor="middle"
                                    className="tls-device-icon"
                                >
                                    ↔
                                </text>

                                <text
                                    x="460"
                                    y="266"
                                    textAnchor="middle"
                                    className="tls-device-label"
                                >
                                    Router
                                </text>

                            </g>


                            {/* =====================================================
                                SERVER
                            ===================================================== */}

                            <g
                                className={`tls-node ${
                                    isActive("server")
                                        ? "tls-node-active"
                                        : ""
                                }`}
                            >

                                <rect
                                    x="735"
                                    y="168"
                                    width="80"
                                    height="74"
                                    rx="12"
                                    className="tls-device"
                                />

                                <text
                                    x="775"
                                    y="201"
                                    textAnchor="middle"
                                    className="tls-device-icon"
                                >
                                    S
                                </text>

                                <text
                                    x="775"
                                    y="266"
                                    textAnchor="middle"
                                    className="tls-device-label"
                                >
                                    TLS Server
                                </text>

                            </g>


                            {/* =====================================================
                                TRUSTED CA
                            ===================================================== */}

                            <g
                                className={`tls-node tls-ca-node ${
                                    isActive("ca")
                                        ? "tls-node-active"
                                        : ""
                                }`}
                            >

                                <rect
                                    x="420"
                                    y="52"
                                    width="80"
                                    height="56"
                                    rx="12"
                                    className="tls-device"
                                />

                                <text
                                    x="460"
                                    y="78"
                                    textAnchor="middle"
                                    className="tls-device-icon"
                                >
                                    CA
                                </text>

                                <text
                                    x="460"
                                    y="96"
                                    textAnchor="middle"
                                    className="tls-device-label tls-ca-label"
                                >
                                    Trusted CA
                                </text>

                            </g>


                            {/* =====================================================
                                STEP LABEL
                            ===================================================== */}

                            <g>

                                <rect
                                    x="393"
                                    y="315"
                                    width="134"
                                    height="32"
                                    rx="16"
                                    className="tls-packet"
                                />

                                <text
                                    x="460"
                                    y="336"
                                    textAnchor="middle"
                                    className="tls-packet-text"
                                >
                                    {step.keyword}
                                </text>

                            </g>

                        </svg>

                    </div>


                    {/* NEXT */}
                    <button
                        type="button"
                        className="tls-workflow-arrow tls-workflow-next"
                        onClick={nextStep}
                        disabled={currentStep === totalSteps - 1}
                        aria-label="Next step"
                    >
                        ›
                    </button>

                </div>


                {/* STEP INFORMATION */}
                <div className="tls-step-panel">

                    <div className="tls-step-progress">

                        <div
                            style={{
                                width: `${((currentStep + 1) / totalSteps) * 100}%`
                            }}
                        />

                    </div>


                    <div className="tls-step-content">

                        <div className="tls-step-text">

                            <h3>{step.title}</h3>

                            <p>{step.text}</p>

                        </div>

                    </div>


                    {/* STEP DOTS */}
                    <div className="tls-step-dots">

                        {tlsData.workflow.map((_, index) => (

                            <button
                                key={index}
                                type="button"
                                aria-label={`Go to step ${index + 1}`}
                                className={
                                    index === currentStep
                                        ? "tls-dot tls-dot-active"
                                        : "tls-dot"
                                }
                                onClick={() => setCurrentStep(index)}
                            />

                        ))}

                    </div>

                </div>

            </section>


            {/* THEORY */}
            <section className="tls-theory-section">

                <TheoryGroup
                    title="Enhanced Security Features"
                    cards={tlsData.theory.security}
                />

                <TheoryGroup
                    title="Certificate-Based Authentication"
                    cards={tlsData.theory.certificate}
                />

                <TheoryGroup
                    title="Forward Secrecy"
                    cards={tlsData.theory.forwardSecrecy}
                />

                <TheoryGroup
                    title="TLS Handshake Protocol"
                    cards={tlsData.theory.handshake}
                />

                <TheoryGroup
                    title="Perfect Forward Secrecy (PFS)"
                    cards={tlsData.theory.pfs}
                />

                <TheoryGroup
                    title="TLS Deployment Best Practices"
                    cards={tlsData.theory.deployment}
                />

                <TheoryGroup
                    title="Continual Evolution"
                    cards={tlsData.theory.evolution}
                />

            </section>

        </div>
    );
}


/* =============================================================
   THEORY GROUP
============================================================= */

function TheoryGroup({ title, cards }) {

    return (
        <div className="tls-theory-group">

            <h2 className="tls-theory-group-title">
                {title}
            </h2>

            <div className="tls-theory-box">

                {cards.map((card, index) => (

                    <div
                        className="tls-theory-card"
                        key={`${title}-${index}`}
                    >

                        <h4>{card.title}</h4>

                        <div className="tls-theory-point">

                            <p>{card.text}</p>

                        </div>

                    </div>

                ))}

            </div>

        </div>
    );
}