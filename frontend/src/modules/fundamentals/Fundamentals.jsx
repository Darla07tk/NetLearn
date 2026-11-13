import { useState } from "react";
import { Link } from "react-router-dom";
import fundamentalsData from "../../data/fundamentalsData";
import TopicDiagram from "./TopicDiagram";
import "./fundamentals.css";
import useModuleProgress from "../../hooks/useModuleProgress";
function Fundamentals() {
    const [currentTopic, setCurrentTopic] = useState(0);

    const topic = fundamentalsData[currentTopic];
    const totalTopics = fundamentalsData.length;
    useModuleProgress(
    1,
    currentTopic,
    totalTopics
    );
    const goNext = () => {
        if (currentTopic < totalTopics - 1) {
            setCurrentTopic(currentTopic + 1);
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };

    const goPrevious = () => {
        if (currentTopic > 0) {
            setCurrentTopic(currentTopic - 1);
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };

    return (
        <div className="fundamentals-page">
            <header className="fundamentals-header">
                <div>
                    <Link
                        to="/dashboard"
                        className="back-button"
                    >
                        Back
                    </Link>

                    <h1>Network Fundamentals</h1>
                    <p>Learn the foundations of computer networking.</p>
                </div>

                <div className="topic-counter">
                    Page {currentTopic + 1} / {totalTopics}
                </div>
            </header>

            <div className="fundamentals-content">
                <aside className="fundamentals-topic-list">
                    <h2>Topics</h2>

                    {fundamentalsData.map((item, index) => (
                        <button
                            key={item.id}
                            className={index === currentTopic ? "topic-active" : ""}
                            onClick={() => {
                                setCurrentTopic(index);
                                window.scrollTo({ top: 0, behavior: "smooth" });
                            }}
                        >
                            <span>{index + 1}</span>
                            <span>{item.title}</span>
                        </button>
                    ))}
                </aside>

                <main className="fundamentals-main">
                    <section className="topic-heading">
                        <span className="topic-number">
                            Topic {topic.id}
                        </span>

                        <h2>{topic.title}</h2>

                        <h3>{topic.subtitle}</h3>
                    </section>

                    <section className="topic-diagram-section">
                        <TopicDiagram type={topic.diagram} />
                    </section>

                    <section className="topic-explanation">
                        <h3>What Is It?</h3>
                        <p>{topic.explanation}</p>
                    </section>

                    <section className="topic-sections">
                        {topic.sections.map((section) => (
                            <div className="topic-section" key={section.title}>
                                <h3>{section.title}</h3>

                                <ul>
                                    {section.points.map((point) => (
                                        <li key={point}>{point}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </section>

                    <div className="topic-navigation">
                        <button
                            onClick={goPrevious}
                            disabled={currentTopic === 0}
                        >
                            Previous
                        </button>

                        <span>
                            {currentTopic + 1} / {totalTopics}
                        </span>

                        <button
                            onClick={goNext}
                            disabled={currentTopic === totalTopics - 1}
                        >
                            Next
                        </button>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default Fundamentals;