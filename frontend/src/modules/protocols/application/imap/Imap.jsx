import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import imapData from "../../../../data/imapData";
import "./imap.css";

function Imap() {
    const navigate = useNavigate();
    const [currentStep, setCurrentStep] = useState(0);

    const step = imapData.workflow[currentStep];

    const devices = [
        {
            id: "imap-client",
            x: 150,
            y: 170,
            type: "client",
            symbol: "PC",
            label: "Email Client",
        },
        {
            id: "router",
            x: 495,
            y: 170,
            type: "router",
            symbol: "R",
            label: "Network Router",
        },
        {
            id: "imap-server",
            x: 840,
            y: 170,
            type: "server",
            symbol: "S",
            label: "IMAP Server",
        },
    ];

    const links = [
        ["imap-client", "router"],
        ["router", "imap-server"],
    ];

    const getDevice = (id) =>
        devices.find((device) => device.id === id);

    const isDeviceActive = (id) =>
        id === step.activeFrom || id === step.activeTo;

    const isLinkActive = (from, to) => {
        return (
            step.activeFrom &&
            step.activeTo &&
            (
                (step.activeFrom === from &&
                    step.activeTo === to) ||
                (step.activeFrom === to &&
                    step.activeTo === from)
            )
        );
    };

    const getLineClass = (from, to) => {
        if (isLinkActive(from, to)) {
            return "imap-flow-line";
        }

        return "imap-svg-line";
    };

    const getArrowPoints = (from, to) => {
        if (!isLinkActive(from, to)) {
            return null;
        }

        const source = getDevice(from);
        const target = getDevice(to);

        const distance = 34;

        const sourceX =
            source.x < target.x
                ? source.x + distance
                : source.x - distance;

        const targetX =
            target.x > source.x
                ? target.x - distance
                : target.x + distance;

        if (
            step.activeFrom === from &&
            step.activeTo === to
        ) {
            return {
                x1: sourceX,
                x2: targetX,
            };
        }

        return {
            x1: targetX,
            x2: sourceX,
        };
    };

    const renderArrow = (from, to, index) => {
        const points = getArrowPoints(from, to);

        if (!points) {
            return null;
        }

        return (
            <line
                key={`arrow-${index}`}
                x1={points.x1}
                y1="170"
                x2={points.x2}
                y2="170"
                className="imap-flow-arrow-line"
                markerEnd="url(#imapArrow)"
            />
        );
    };

    return (
        <div className="imap-page">

            <button
                className="imap-back"
                onClick={() => navigate("/protocols")}
            >
                Back
            </button>

            <section className="imap-intro">

                <h1>{imapData.title}</h1>

                <div className="imap-intro-points">
                    {imapData.intro.map((point, index) => (
                        <div key={index}>
                            <p>{point}</p>
                        </div>
                    ))}
                </div>

            </section>

            <section className="imap-workflow-section">

                <div className="imap-section-heading">

                    <h2>Workflow</h2>

                    <span className="imap-step-counter">
                        {currentStep + 1}/{imapData.workflow.length}
                    </span>

                </div>

                <div className="imap-workflow-layout">

                    <button
                        className="imap-workflow-arrow imap-workflow-prev"
                        disabled={currentStep === 0}
                        onClick={() =>
                            setCurrentStep((prev) => prev - 1)
                        }
                    >
                        ‹
                    </button>

                    <div className="imap-topology">

                        <svg
                            className="imap-topology-svg"
                            viewBox="0 0 990 340"
                            preserveAspectRatio="xMidYMid meet"
                        >

                            <defs>

                                <marker
                                    id="imapArrow"
                                    markerWidth="5"
                                    markerHeight="5"
                                    refX="4"
                                    refY="2.5"
                                    orient="auto"
                                    markerUnits="strokeWidth"
                                >
                                    <path
                                        d="M0,0 L5,2.5 L0,5"
                                        className="imap-arrow-head"
                                    />
                                </marker>

                            </defs>

                            {/* Network connections */}

                            {links.map(([from, to], index) => {

                                const source = getDevice(from);
                                const target = getDevice(to);

                                return (
                                    <line
                                        key={`line-${index}`}
                                        x1={source.x}
                                        y1={source.y}
                                        x2={target.x}
                                        y2={target.y}
                                        className={getLineClass(
                                            from,
                                            to
                                        )}
                                    />
                                );

                            })}

                            {/* Active direction arrow */}

                            {links.map(([from, to], index) =>
                                renderArrow(from, to, index)
                            )}

                            {/* Devices */}

                            {devices.map((device) => (

                                <g
                                    key={device.id}
                                    className={
                                        isDeviceActive(device.id)
                                            ? "imap-device-group imap-active-device-group"
                                            : "imap-device-group"
                                    }
                                >

                                    {device.type === "router" ? (

                                        <polygon
                                            points={`
                                                ${device.x - 27},${device.y}
                                                ${device.x},${device.y - 20}
                                                ${device.x + 27},${device.y}
                                                ${device.x},${device.y + 20}
                                            `}
                                            className={
                                                isDeviceActive(device.id)
                                                    ? "imap-svg-router imap-active-device"
                                                    : "imap-svg-router"
                                            }
                                        />

                                    ) : (

                                        <rect
                                            x={device.x - 30}
                                            y={device.y - 23}
                                            width="60"
                                            height="46"
                                            rx="9"
                                            className={
                                                isDeviceActive(device.id)
                                                    ? "imap-svg-device imap-active-device"
                                                    : "imap-svg-device"
                                            }
                                        />

                                    )}

                                    <text
                                        x={device.x}
                                        y={device.y}
                                        className={
                                            isDeviceActive(device.id)
                                                ? "imap-svg-symbol imap-active-symbol"
                                                : "imap-svg-symbol"
                                        }
                                    >
                                        {device.symbol}
                                    </text>

                                    <text
                                        x={device.x}
                                        y={device.y + 48}
                                        className="imap-svg-label"
                                    >
                                        {device.label}
                                    </text>

                                </g>

                            ))}

                            {/* Current action keyword */}

                            <rect
                                x="455"
                                y="70"
                                width="80"
                                height="28"
                                rx="7"
                                className="imap-keyword-box"
                            />

                            <text
                                x="495"
                                y="84"
                                className="imap-keyword-text"
                            >
                                {step.keyword}
                            </text>

                        </svg>

                    </div>

                    <button
                        className="imap-workflow-arrow imap-workflow-next"
                        disabled={
                            currentStep ===
                            imapData.workflow.length - 1
                        }
                        onClick={() =>
                            setCurrentStep((prev) => prev + 1)
                        }
                    >
                        ›
                    </button>

                </div>

                <div className="imap-step-panel">

                    <div className="imap-step-progress">

                        <div
                            style={{
                                width: `${(
                                    ((currentStep + 1) /
                                        imapData.workflow.length) *
                                    100
                                )}%`,
                            }}
                        />

                    </div>

                    <div className="imap-step-content">

                        <div className="imap-step-text">

                            <h3>{step.title}</h3>

                            <p>{step.description}</p>

                        </div>

                    </div>

                </div>

            </section>

            <section className="imap-theory-section">

                <div className="imap-section-heading">
                    <h2>Features of IMAP</h2>
                </div>

                <div className="imap-theory-box">

                    {imapData.theory.features.map(
                        (item, index) => (

                            <div
                                className="imap-theory-card"
                                key={index}
                            >

                                <h3>{item.title}</h3>

                                {item.points.map(
                                    (point, pointIndex) => (

                                        <div
                                            className="imap-theory-point"
                                            key={pointIndex}
                                        >
                                            <p>{point}</p>
                                        </div>

                                    )
                                )}

                            </div>

                        )
                    )}

                </div>

            </section>

            <section className="imap-theory-section">

                <div className="imap-section-heading">
                    <h2>IMAP Ports</h2>
                </div>

                <div className="imap-theory-box">

                    {imapData.theory.ports.map(
                        (item, index) => (

                            <div
                                className="imap-theory-card"
                                key={index}
                            >

                                <h3>{item.title}</h3>

                                {item.points.map(
                                    (point, pointIndex) => (

                                        <div
                                            className="imap-theory-point"
                                            key={pointIndex}
                                        >
                                            <p>{point}</p>
                                        </div>

                                    )
                                )}

                            </div>

                        )
                    )}

                </div>

            </section>

            <section className="imap-theory-section">

                <div className="imap-section-heading">
                    <h2>Architecture of IMAP</h2>
                </div>

                <div className="imap-theory-box">

                    {imapData.theory.architecture.map(
                        (item, index) => (

                            <div
                                className="imap-theory-card"
                                key={index}
                            >

                                <h3>{item.title}</h3>

                                {item.points.map(
                                    (point, pointIndex) => (

                                        <div
                                            className="imap-theory-point"
                                            key={pointIndex}
                                        >
                                            <p>{point}</p>
                                        </div>

                                    )
                                )}

                            </div>

                        )
                    )}

                </div>

            </section>

            <section className="imap-theory-section">

                <div className="imap-section-heading">
                    <h2>Steps Involved in IMAP Operation</h2>
                </div>

                <div className="imap-theory-box">

                    {imapData.theory.operation.map(
                        (item, index) => (

                            <div
                                className="imap-theory-card"
                                key={index}
                            >

                                <h3>{item.title}</h3>

                                {item.points.map(
                                    (point, pointIndex) => (

                                        <div
                                            className="imap-theory-point"
                                            key={pointIndex}
                                        >
                                            <p>{point}</p>
                                        </div>

                                    )
                                )}

                            </div>

                        )
                    )}

                </div>

            </section>

        </div>
    );
}

export default Imap;