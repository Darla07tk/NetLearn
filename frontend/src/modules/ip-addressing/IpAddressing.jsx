import { useState } from "react";
import {
    ipAddressingTopics,
    ipAddressingContent
} from "../../data/ipAddressingData";

import IPAddressOverviewDiagram from "./components/IPAddressOverviewDiagram";
import IPClassesDiagram from "./components/IPClassesDiagram";
import SubnetMaskDiagram from "./components/SubnetMaskDiagram";
import DefaultGatewayDiagram from "./components/DefaultGatewayDiagram";
import PublicPrivateDiagram from "./components/PublicPrivateDiagram";
import StaticDynamicDiagram from "./components/StaticDynamicDiagram";

import "./ipAddressing.css";
import useModuleProgress from "../../hooks/useModuleProgress";
function DiagramRenderer({ type }) {
    switch (type) {
        case "overview":
        case "ipv4":
        case "network-host":
        case "communication":
        case "ipv4-ipv6":
            return <IPAddressOverviewDiagram type={type} />;

        case "class-overview":
        case "class-a":
        case "class-b":
        case "class-c":
        case "class-d":
        case "class-e":
            return <IPClassesDiagram type={type} />;

        case "mask-definition":
        case "mask-bits":
        case "cidr":
        case "network-address":
        case "subnetting":
        case "host-calculation":
            return <SubnetMaskDiagram type={type} />;

        case "gateway-main":
            return <DefaultGatewayDiagram type={type} />;

        case "public-private-table":
            return <PublicPrivateDiagram type={type} />;

        case "static-dynamic-main":
            return <StaticDynamicDiagram type={type} />;

        default:
            return null;
    }
}

export default function IpAddressing() {
    const [activeTopicIndex, setActiveTopicIndex] = useState(0);

    const activeTopic = ipAddressingTopics[activeTopicIndex];
    const sections = ipAddressingContent[activeTopic.id] || [];
    useModuleProgress(
    4,
    activeTopicIndex,
    ipAddressingTopics.length
    );
    const mainDiagram =
        activeTopicIndex === 3
            ? "gateway-main"
            : activeTopicIndex === 4
            ? "public-private-table"
            : activeTopicIndex === 5
            ? "static-dynamic-main"
            : null;

    const goToTopic = (index) => {
        setActiveTopicIndex(index);

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    const previousTopic = () => {
        if (activeTopicIndex > 0) {
            goToTopic(activeTopicIndex - 1);
        }
    };

    const nextTopic = () => {
        if (activeTopicIndex < ipAddressingTopics.length - 1) {
            goToTopic(activeTopicIndex + 1);
        }
    };

    return (
        <div className="ip-addressing-page">
            <aside className="ip-sidebar">
                <button
                    className="ip-back-button"
                    onClick={() => {
                        window.location.href = "/dashboard";
                    }}
                >
                    Back
                </button>

                <h1>IP Addressing</h1>

                <div className="ip-topic-list">
                    {ipAddressingTopics.map((topic, index) => (
                        <button
                            key={topic.id}
                            className={`ip-topic-button ${
                                index === activeTopicIndex ? "active" : ""
                            }`}
                            onClick={() => goToTopic(index)}
                        >
                            <span>{index + 1}</span>
                            {topic.title}
                        </button>
                    ))}
                </div>
            </aside>

            <main className="ip-main-content">
                <header className="ip-topic-header">
                    <div>
                        <h1>{activeTopic.title}</h1>
                    </div>

                    <div className="ip-topic-progress">
                        {activeTopicIndex + 1}/{ipAddressingTopics.length}
                    </div>
                </header>

                {mainDiagram && (
                    <div className="topic-main-diagram">
                        <DiagramRenderer type={mainDiagram} />
                    </div>
                )}

                {activeTopicIndex >= 3 ? (
                    <div className="theory-only-sections">
                        {sections.map((section, index) => (
                            <section
                                className="learning-section theory-section"
                                key={`${activeTopic.id}-${index}`}
                            >
                                <div className="learning-content full-width">
                                    <h2>{section.heading}</h2>

                                    <ul>
                                        {section.points.map(
                                            (point, pointIndex) => (
                                                <li key={pointIndex}>
                                                    {point}
                                                </li>
                                            )
                                        )}
                                    </ul>
                                </div>
                            </section>
                        ))}
                    </div>
                ) : (
                    <div className="standard-topic-sections">
                        {sections.map((section, index) => {
                            const hideClassOverview =
                                activeTopicIndex === 1 &&
                                section.diagram === "class-overview";

                            const showDiagram =
                                Boolean(section.diagram) &&
                                !hideClassOverview;

                            const visibleDiagramIndex = sections
                                .slice(0, index)
                                .filter(
                                    (item) =>
                                        Boolean(item.diagram) &&
                                        !(
                                            activeTopicIndex === 1 &&
                                            item.diagram === "class-overview"
                                        )
                                ).length;

                            const reverse =
                                showDiagram &&
                                visibleDiagramIndex % 2 !== 0;

                            return (
                                <section
                                    className={`learning-section ${
                                        reverse ? "reverse" : ""
                                    } ${
                                        !showDiagram ? "no-diagram" : ""
                                    }`}
                                    key={`${activeTopic.id}-${index}`}
                                >
                                    <div className="learning-content">
                                        <h2>{section.heading}</h2>

                                        <ul>
                                            {section.points.map(
                                                (point, pointIndex) => (
                                                    <li key={pointIndex}>
                                                        {point}
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    </div>

                                    {showDiagram && (
                                        <div className="learning-diagram">
                                            <DiagramRenderer
                                                type={section.diagram}
                                            />
                                        </div>
                                    )}
                                </section>
                            );
                        })}
                    </div>
                )}

                <div className="ip-navigation">
                    <button
                        onClick={previousTopic}
                        disabled={activeTopicIndex === 0}
                    >
                        Previous
                    </button>

                    <button
                        onClick={nextTopic}
                        disabled={
                            activeTopicIndex ===
                            ipAddressingTopics.length - 1
                        }
                    >
                        Next
                    </button>
                </div>
            </main>
        </div>
    );
}