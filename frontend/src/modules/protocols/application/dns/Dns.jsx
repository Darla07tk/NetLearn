import { useState } from "react";
import { useNavigate } from "react-router-dom";
import dnsData from "../../../../data/dnsData";

import "./dns.css";


function WorkflowDiagram({ step }) {

    const isActive = (id) =>
        step.active.includes(id);


    return (
        <div className="dns-workflow">

            <svg
                className="dns-workflow-svg"
                viewBox="0 0 1100 470"
                preserveAspectRatio="xMidYMid meet"
            >

                {/* Browser → Resolver */}

                <line
                    x1="180"
                    y1="190"
                    x2="370"
                    y2="190"
                    className={
                        isActive("browser") &&
                        isActive("resolver")
                            ? "dns-line dns-line-active"
                            : "dns-line"
                    }
                />


                {/* Resolver → Root */}

                <line
                    x1="500"
                    y1="190"
                    x2="650"
                    y2="100"
                    className={
                        isActive("resolver") &&
                        isActive("root")
                            ? "dns-line dns-line-active"
                            : "dns-line"
                    }
                />


                {/* Root → Resolver */}

                <line
                    x1="650"
                    y1="130"
                    x2="500"
                    y2="220"
                    className={
                        isActive("root") &&
                        isActive("resolver")
                            ? "dns-line dns-line-active"
                            : "dns-line"
                    }
                />


                {/* Resolver → TLD */}

                <line
                    x1="500"
                    y1="190"
                    x2="650"
                    y2="280"
                    className={
                        isActive("resolver") &&
                        isActive("tld")
                            ? "dns-line dns-line-active"
                            : "dns-line"
                    }
                />


                {/* TLD → Resolver */}

                <line
                    x1="650"
                    y1="310"
                    x2="500"
                    y2="220"
                    className={
                        isActive("tld") &&
                        isActive("resolver")
                            ? "dns-line dns-line-active"
                            : "dns-line"
                    }
                />


                {/* Resolver → Authoritative */}

                <line
                    x1="500"
                    y1="190"
                    x2="830"
                    y2="190"
                    className={
                        isActive("resolver") &&
                        isActive("authoritative")
                            ? "dns-line dns-line-active"
                            : "dns-line"
                    }
                />


                {/* Authoritative → Resolver */}

                <line
                    x1="830"
                    y1="220"
                    x2="500"
                    y2="220"
                    className={
                        isActive("authoritative") &&
                        isActive("resolver")
                            ? "dns-line dns-line-active"
                            : "dns-line"
                    }
                />


                {/* Browser → Cache */}

                <line
                    x1="180"
                    y1="220"
                    x2="370"
                    y2="300"
                    className={
                        isActive("browser") &&
                        isActive("cache")
                            ? "dns-line dns-line-active"
                            : "dns-line"
                    }
                />


                {/* Cache */}

                <g
                    className={
                        isActive("cache")
                            ? "dns-node-active"
                            : ""
                    }
                >

                    <rect
                        x="370"
                        y="270"
                        width="130"
                        height="70"
                        rx="13"
                        className="dns-device"
                    />

                    <text
                        x="435"
                        y="300"
                        textAnchor="middle"
                        className="dns-device-icon"
                    >
                        CACHE
                    </text>

                    <text
                        x="435"
                        y="360"
                        textAnchor="middle"
                        className="dns-device-label"
                    >
                        Local Cache
                    </text>

                </g>


                {/* Browser */}

                <g
                    className={
                        isActive("browser")
                            ? "dns-node-active"
                            : ""
                    }
                >

                    <rect
                        x="50"
                        y="140"
                        width="130"
                        height="100"
                        rx="14"
                        className="dns-device"
                    />

                    <text
                        x="115"
                        y="185"
                        textAnchor="middle"
                        className="dns-device-icon"
                    >
                        WEB
                    </text>

                    <text
                        x="115"
                        y="265"
                        textAnchor="middle"
                        className="dns-device-label"
                    >
                        Browser
                    </text>

                </g>


                {/* Resolver */}

                <g
                    className={
                        isActive("resolver")
                            ? "dns-node-active"
                            : ""
                    }
                >

                    <rect
                        x="370"
                        y="140"
                        width="130"
                        height="100"
                        rx="14"
                        className="dns-device"
                    />

                    <text
                        x="435"
                        y="185"
                        textAnchor="middle"
                        className="dns-device-icon"
                    >
                        DNS
                    </text>

                    <text
                        x="435"
                        y="265"
                        textAnchor="middle"
                        className="dns-device-label"
                    >
                        Resolver
                    </text>

                </g>


                {/* Root */}

                <g
                    className={
                        isActive("root")
                            ? "dns-node-active"
                            : ""
                    }
                >

                    <rect
                        x="650"
                        y="50"
                        width="150"
                        height="80"
                        rx="14"
                        className="dns-device"
                    />

                    <text
                        x="725"
                        y="85"
                        textAnchor="middle"
                        className="dns-device-icon"
                    >
                        ROOT
                    </text>

                    <text
                        x="725"
                        y="150"
                        textAnchor="middle"
                        className="dns-device-label"
                    >
                        Root Server
                    </text>

                </g>


                {/* TLD */}

                <g
                    className={
                        isActive("tld")
                            ? "dns-node-active"
                            : ""
                    }
                >

                    <rect
                        x="650"
                        y="270"
                        width="150"
                        height="80"
                        rx="14"
                        className="dns-device"
                    />

                    <text
                        x="725"
                        y="305"
                        textAnchor="middle"
                        className="dns-device-icon"
                    >
                        .COM
                    </text>

                    <text
                        x="725"
                        y="370"
                        textAnchor="middle"
                        className="dns-device-label"
                    >
                        TLD Server
                    </text>

                </g>


                {/* Authoritative */}

                <g
                    className={
                        isActive("authoritative")
                            ? "dns-node-active"
                            : ""
                    }
                >

                    <rect
                        x="830"
                        y="140"
                        width="190"
                        height="100"
                        rx="14"
                        className="dns-device"
                    />

                    <text
                        x="925"
                        y="185"
                        textAnchor="middle"
                        className="dns-device-icon"
                    >
                        DNS
                    </text>

                    <text
                        x="925"
                        y="265"
                        textAnchor="middle"
                        className="dns-device-label"
                    >
                        Authoritative Server
                    </text>

                </g>


                {/* Packet */}

                {step.packet && (
                    <g>

                        <rect
                            x="450"
                            y="395"
                            width="200"
                            height="30"
                            rx="15"
                            className="dns-packet"
                        />

                        <text
                            x="550"
                            y="415"
                            textAnchor="middle"
                            className="dns-packet-text"
                        >
                            {step.packet}
                        </text>

                    </g>
                )}

            </svg>

        </div>
    );
}


function TheoryBox({ points }) {

    return (
        <div className="dns-theory-box">

            {points.map((point, index) => (
                <p key={index}>
                    {point}
                </p>
            ))}

        </div>
    );
}


export default function Dns() {

    const navigate = useNavigate();

    const [currentStep, setCurrentStep] = useState(0);

    const step = dnsData.steps[currentStep];


    const previousStep = () => {

        setCurrentStep((value) =>
            Math.max(value - 1, 0)
        );

    };


    const nextStep = () => {

        setCurrentStep((value) =>
            Math.min(
                value + 1,
                dnsData.steps.length - 1
            )
        );

    };


    return (
        <main className="dns-page">

            <button
                className="dns-back"
                onClick={() => navigate("/protocols")}
            >
                Back
            </button>


            {/* INTRO */}

            <section className="dns-intro">

                <h1>
                    {dnsData.title}
                </h1>

                <div className="dns-intro-points">

                    {dnsData.intro.map((point, index) => (

                        <div
                            className="dns-info-box"
                            key={index}
                        >

                            <p>
                                {point}
                            </p>

                        </div>

                    ))}

                </div>

            </section>


            {/* WORKFLOW */}

            <section className="dns-workflow-section">

                <div className="dns-section-heading">

                    <h2>
                        Workflow
                    </h2>

                    <span>
                        Step {currentStep + 1}/{dnsData.steps.length}
                    </span>

                </div>


                <div className="dns-workflow-layout">

                    <button
                        className="dns-workflow-arrow dns-workflow-prev"
                        onClick={previousStep}
                        disabled={currentStep === 0}
                    >
                        &lt;
                    </button>


                    <WorkflowDiagram step={step} />


                    <button
                        className="dns-workflow-arrow dns-workflow-next"
                        onClick={nextStep}
                        disabled={
                            currentStep ===
                            dnsData.steps.length - 1
                        }
                    >
                        &gt;
                    </button>

                </div>


                <div className="dns-step-panel">

                    <div className="dns-progress">

                        <div
                            style={{
                                width: `${
                                    ((currentStep + 1) /
                                        dnsData.steps.length) *
                                    100
                                }%`,
                            }}
                        />

                    </div>


                    <div className="dns-step-content">

                        <div className="dns-step-number">
                            {String(
                                currentStep + 1
                            ).padStart(2, "0")}
                        </div>

                        <div className="dns-step-text">

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


            {/* DNS STRUCTURE */}

            <section className="dns-theory-section">

                <div className="dns-section-heading">
                    <h2>DNS Structure</h2>
                </div>

                <TheoryBox
                    points={dnsData.theory.structure}
                />

            </section>


            {/* DNS SERVER */}

            <section className="dns-theory-section">

                <div className="dns-section-heading">
                    <h2>DNS Server</h2>
                </div>

                <TheoryBox
                    points={dnsData.theory.server}
                />

            </section>


            {/* DNS LOOKUP */}

            <section className="dns-theory-section">

                <div className="dns-section-heading">
                    <h2>DNS Lookup</h2>
                </div>

                <TheoryBox
                    points={dnsData.theory.lookup}
                />

            </section>


            {/* DNS CACHING */}

            <section className="dns-theory-section">

                <div className="dns-section-heading">
                    <h2>DNS Caching</h2>
                </div>

                <TheoryBox
                    points={dnsData.theory.caching}
                />

            </section>


            {/* TTL */}

            <section className="dns-theory-section">

                <div className="dns-section-heading">
                    <h2>Time-to-Live</h2>
                </div>

                <TheoryBox
                    points={dnsData.theory.ttl}
                />

            </section>


            {/* DNS RECORDS */}

            <section className="dns-theory-section">

                <div className="dns-section-heading">
                    <h2>DNS Records</h2>
                </div>

                <TheoryBox
                    points={dnsData.theory.records}
                />

            </section>


            {/* DOMAIN TYPES */}

            <section className="dns-theory-section">

                <div className="dns-section-heading">
                    <h2>Domain Types</h2>
                </div>

                <TheoryBox
                    points={dnsData.theory.domainTypes}
                />

            </section>


            {/* REVERSE DNS */}

            <section className="dns-theory-section">

                <div className="dns-section-heading">
                    <h2>Reverse DNS</h2>
                </div>

                <TheoryBox
                    points={dnsData.theory.reverse}
                />

            </section>

        </main>
    );
}