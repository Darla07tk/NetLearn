import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { routingSwitchingTopics } from "../../data/routingSwitchingData";

import StaticRoutingDiagram from "./components/StaticRoutingDiagram";
import DynamicRoutingDiagram from "./components/DynamicRoutingDiagram";
import VLANDiagram from "./components/VLANDiagram";
import MACLearningDiagram from "./components/MACLearningDiagram";
import FrameForwardingDiagram from "./components/FrameForwardingDiagram";

import "./routingSwitching.css";
import useModuleProgress from "../../hooks/useModuleProgress";

function DiagramRenderer({ topicId }) {
    switch (topicId) {
        case "static-routing":
            return <StaticRoutingDiagram />;

        case "dynamic-routing":
            return <DynamicRoutingDiagram />;

        case "vlan":
            return <VLANDiagram />;

        case "mac-learning":
            return <MACLearningDiagram />;

        case "frame-forwarding":
            return <FrameForwardingDiagram />;

        default:
            return null;
    }
}

export default function RoutingSwitching() {
    const navigate = useNavigate();
    const [activeTopic, setActiveTopic] = useState(0);

    const topic = routingSwitchingTopics[activeTopic];

    useModuleProgress(
        5,
        activeTopic,
        routingSwitchingTopics.length
    );

    const changeTopic = (newTopic) => {
        setActiveTopic(newTopic);

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <div className="routing-switching-page">

            <aside className="routing-switching-sidebar">

                <button
                    className="routing-switching-back"
                    onClick={() => navigate("/dashboard")}
                >
                    Back
                </button>

                <h2>Routing & Switching</h2>

                <div className="routing-switching-topic-list">
                    {routingSwitchingTopics.map((item, index) => (
                        <button
                            key={item.id}
                            className={
                                activeTopic === index
                                    ? "routing-switching-topic active"
                                    : "routing-switching-topic"
                            }
                            onClick={() => changeTopic(index)}
                        >
                            <span>{index + 1}</span>
                            <strong>{item.title}</strong>
                        </button>
                    ))}
                </div>

            </aside>

            <main className="routing-switching-content">

                <header className="routing-switching-header">

                    <div>
                        <span>TOPIC {activeTopic + 1}</span>
                        <h1>{topic.title}</h1>
                    </div>

                    <div className="routing-switching-progress">
                        {activeTopic + 1}/{routingSwitchingTopics.length}
                    </div>

                </header>

                <section className="routing-switching-main-diagram">
                    <DiagramRenderer topicId={topic.id} />
                </section>

                <section className="routing-switching-sections">

                    {topic.sections.map((section) => (
                        <article
                            className="routing-switching-theory"
                            key={section.heading}
                        >
                            <h2>{section.heading}</h2>

                            <ul>
                                {section.points.map((point) => (
                                    <li key={point}>{point}</li>
                                ))}
                            </ul>
                        </article>
                    ))}

                </section>

                <div className="routing-switching-navigation">

                    <button
                        disabled={activeTopic === 0}
                        onClick={() =>
                            changeTopic(activeTopic - 1)
                        }
                    >
                        Previous
                    </button>

                    <button
                        disabled={
                            activeTopic ===
                            routingSwitchingTopics.length - 1
                        }
                        onClick={() =>
                            changeTopic(activeTopic + 1)
                        }
                    >
                        Next
                    </button>

                </div>

            </main>

        </div>
    );
}