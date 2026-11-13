import { useNavigate, useParams } from "react-router-dom";
import fundamentalsData from "../data/fundamentalsData";
import "../modules/fundamentals/fundamentals.css";

function Fundamentals() {
    const navigate = useNavigate();
    const { topicId } = useParams();

    return (
        <div className="fundamentals-page">
            <header className="fundamentals-header">
                <div>
                    <button
                        className="back-button"
                        onClick={() => navigate("/dashboard")}
                    >
                        Back
                    </button>

                    <h1>Network Fundamentals</h1>
                    <p>Learn networking step by step.</p>
                </div>

                <div className="topic-counter">
                    {fundamentalsData.length} Topics
                </div>
            </header>

            <div className="fundamentals-content">
                <aside className="fundamentals-topic-list">
                    <h2>Topics</h2>

                    <nav>
                        {fundamentalsData.map((topic, index) => (
                            <button
                                key={topic.id}
                                className={
                                    String(topic.id) === String(topicId)
                                        ? "topic-active"
                                        : ""
                                }
                                onClick={() =>
                                    navigate(`/fundamentals/${topic.id}`)
                                }
                            >
                                <span>{index + 1}</span>
                                <span>{topic.title}</span>
                            </button>
                        ))}
                    </nav>
                </aside>

                <main className="fundamentals-main">
                    {!topicId ? (
                        <div className="topic-heading">
                            <h2>What is Networking?</h2>
                            <p>
                                Select a topic from the left side to begin
                                learning computer networking step by step.
                            </p>
                        </div>
                    ) : null}
                </main>
            </div>
        </div>
    );
}

export default Fundamentals;