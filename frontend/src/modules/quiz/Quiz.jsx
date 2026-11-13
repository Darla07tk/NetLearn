import { useNavigate } from "react-router-dom";
import quizData from "../../data/quizData";
import "./quiz.css";

function Quiz() {
    const navigate = useNavigate();

    return (
        <div className="quiz-page">

            <header className="quiz-header">

                <div className="quiz-header-left">

                    <button
                        type="button"
                        className="quiz-back-button"
                        onClick={() => navigate("/dashboard")}
                    >
                        Back
                    </button>

                    <h1>Quiz</h1>

                </div>

            </header>

            <main className="quiz-content">

                <div className="quiz-index">

                    {quizData.map((quiz) => (
                        <button
                            key={quiz.id}
                            type="button"
                            className={`quiz-index-item ${
                                quiz.grandTest
                                    ? "quiz-grand-test"
                                    : ""
                            }`}
                            onClick={() => navigate(quiz.path)}
                        >

                            <div className="quiz-index-number">
                                {quiz.number}
                            </div>

                            <div className="quiz-index-name">
                                {quiz.name}
                            </div>

                            <div className="quiz-index-questions">
                                {quiz.questions} Questions
                            </div>

                            <div className="quiz-index-arrow">
                                →
                            </div>

                        </button>
                    ))}

                </div>

            </main>

        </div>
    );
}

export default Quiz;