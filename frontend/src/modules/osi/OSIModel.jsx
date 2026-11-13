
import { useState } from "react";

import {
    osiTopics,
    osiContent
} from "../../data/osiData";

import OSIOverviewDiagram from "./components/OSIOverviewDiagram";
import ProtocolMapDiagram from "./components/ProtocolMapDiagram";
import DataFlowSimulation from "./components/DataFlowSimulation";
import OSITCPIPDiagram from "./components/OSITCPIPDiagram";
import DeviceLayerDiagram from "./components/DeviceLayerDiagram";

import "./osi.css";
import useModuleProgress from "../../hooks/useModuleProgress";

function OSIModel() {
    const [currentTopic, setCurrentTopic] = useState(0);

    const topic = osiTopics[currentTopic];

    useModuleProgress(
        3,
        currentTopic,
        osiTopics.length
    );

    const isDataFlow = topic.id === "data-flow";

    const selectTopic = (index) => {
        setCurrentTopic(index);

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    const goPrevious = () => {
        if (currentTopic > 0) {
            setCurrentTopic(currentTopic - 1);

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        }
    };

    const goNext = () => {
        if (currentTopic < osiTopics.length - 1) {
            setCurrentTopic(currentTopic + 1);

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        }
    };

    return (
        <div className="osi-page">
            <header className="osi-header">
                <div className="osi-header-content">
                    <button
                        className="back-button"
                        onClick={() => {
                            window.location.href = "/dashboard";
                        }}
                    >
                        Back
                    </button>

                    <h1>OSI Model</h1>
                </div>

                <div className="page-counter">
                    Page {currentTopic + 1} / {osiTopics.length}
                </div>
            </header>

            <div className="osi-layout">
                <aside className="osi-sidebar">
                    <h2>Topics</h2>

                    <nav className="topic-list">
                        {osiTopics.map((item, index) => (
                            <button
                                key={item.id}
                                className={
                                    index === currentTopic
                                        ? "topic-active"
                                        : ""
                                }
                                onClick={() => selectTopic(index)}
                            >
                                <span className="topic-number">
                                    {index + 1}
                                </span>

                                <span>{item.title}</span>
                            </button>
                        ))}
                    </nav>
                </aside>

                <main className="osi-main">
                    {isDataFlow ? (
                        <DataFlowSimulation />
                    ) : (
                        <>
                            <section className="topic-title">
                                <h2>{topic.title}</h2>
                            </section>

                            {topic.id === "what-is-osi" && (
                                <>
                                    <OSIOverviewDiagram />

                                    <ContentSections
                                        sections={osiContent.whatIsOSI}
                                    />
                                </>
                            )}

                            {topic.id === "seven-layers" && (
                                <>
                                    <ProtocolMapDiagram />

                                    <ContentSections
                                        sections={osiContent.sevenLayers}
                                    />
                                </>
                            )}

                            {topic.id === "osi-vs-tcpip" && (
                                <>
                                    <OSITCPIPDiagram />

                                    <ContentSections
                                        sections={osiContent.osiVsTcpIp}
                                    />
                                </>
                            )}

                            {topic.id === "devices-layers" && (
                                <>
                                    <DeviceLayerDiagram />

                                    <ContentSections
                                        sections={osiContent.devicesLayers}
                                    />
                                </>
                            )}
                        </>
                    )}

                    {!isDataFlow && (
                        <div className="topic-navigation">
                            <button
                                onClick={goPrevious}
                                disabled={currentTopic === 0}
                            >
                                Previous
                            </button>

                            <span>
                                {currentTopic + 1} / {osiTopics.length}
                            </span>

                            <button
                                onClick={goNext}
                                disabled={
                                    currentTopic === osiTopics.length - 1
                                }
                            >
                                Next
                            </button>
                        </div>
                    )}
                </main>
            </div>
        </div>
    );
}

function ContentSections({ sections }) {
    return (
        <div className="content-sections">
            {sections.map((section, index) => (
                <section
                    key={`${section.heading}-${index}`}
                    className="content-section"
                >
                    <h3>{section.heading}</h3>

                    <ul>
                        {section.points.map((point, pointIndex) => (
                            <li
                                key={`${section.heading}-${pointIndex}`}
                            >
                                {point}
                            </li>
                        ))}
                    </ul>
                </section>
            ))}
        </div>
    );
}

export default OSIModel;
