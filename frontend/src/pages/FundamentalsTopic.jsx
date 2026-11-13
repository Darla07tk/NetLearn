
import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import fundamentalsData from "../data/fundamentalsData";
import TopicDiagram from "../modules/fundamentals/TopicDiagram";
import "../modules/fundamentals/fundamentals.css";

function FundamentalsTopic() {
    const { topicId } = useParams();

    useEffect(() => {
        document.querySelector(".fundamentals-main")?.scrollTo(0, 0);
    }, [topicId]);

    const topic = fundamentalsData.find(
        item => String(item.id) === String(topicId)
    );

    if (!topic) {
        return (
            <div className="fundamentals-page">
                <h1>Topic not found</h1>
                <Link to="/fundamentals">Back to Fundamentals</Link>
            </div>
        );
    }

    return (
        <div className="fundamentals-page">
            <header className="fundamentals-header">
                <div>
                    <Link to="/dashboard" className="back-button">
                        Back
                    </Link>

                    <h1>Network Fundamentals</h1>
                    <p>Learn networking step by step.</p>
                </div>

                <div className="topic-counter">
                    Page {topic.id} / {fundamentalsData.length}
                </div>
            </header>

            <div className="fundamentals-content">
                <aside className="fundamentals-topic-list">
                    <h2>Topics</h2>

                    {fundamentalsData.map(item => (
                        <Link
                            key={item.id}
                            to={`/fundamentals/${item.id}`}
                            className={
                                item.id === topic.id
                                    ? "topic-active"
                                    : ""
                            }
                        >
                            <span>{item.id}</span>
                            <span>{item.title}</span>
                        </Link>
                    ))}
                </aside>

                <main className="fundamentals-main">
                    <section className="topic-heading">
                        <h2>{topic.title}</h2>
                    </section>

                    <section className="topic-diagram-section">
                        <TopicDiagram type={topic.diagram} />
                    </section>

                    <section className="topic-explanation">
                        <h3>What Is It?</h3>
                        <p>{topic.explanation}</p>
                    </section>

                    <section className="topic-sections">
                        {topic.sections.map(section => (
                            <div
                                className="topic-section"
                                key={section.title}
                            >
                                <h3>{section.title}</h3>

                                <ul>
                                    {section.points.map(point => (
                                        <li key={point}>{point}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </section>

                    <section className="topic-terms">
                        <h3>Important Terms</h3>

                        {topic.terms.map(term => (
                            <div className="topic-term" key={term[0]}>
                                <strong>{term[0]}</strong>
                                <p>{term[1]}</p>
                            </div>
                        ))}
                    </section>

                    <section className="topic-example">
                        <h3>Example</h3>
                        <p>{topic.example}</p>
                    </section>

                    <div className="topic-navigation">
                        {topic.id > 1 ? (
                            <Link to={`/fundamentals/${topic.id - 1}`}>
                                Previous
                            </Link>
                        ) : (
                            <span></span>
                        )}

                        <span>
                            {topic.id} / {fundamentalsData.length}
                        </span>

                        {topic.id < fundamentalsData.length ? (
                            <Link to={`/fundamentals/${topic.id + 1}`}>
                                Next
                            </Link>
                        ) : (
                            <span></span>
                        )}
                    </div>
                </main>
            </div>
        </div>
    );
}

export default FundamentalsTopic;
