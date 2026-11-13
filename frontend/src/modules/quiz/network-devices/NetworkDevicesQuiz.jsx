import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import devicesQuizData from "../../../data/devicesQuizData";
import "./networkDevicesQuiz.css";
import useAssessmentPersistence
    from "../../../hooks/useAssessmentPersistence";
function NetworkDevicesQuiz() {
    const navigate = useNavigate();

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const totalQuestions = devicesQuizData.length;
    const question = devicesQuizData[currentQuestion];

    const answeredCount = Object.keys(answers).length;

    const score = useMemo(() => {
        return devicesQuizData.reduce((total, item) => {
            return total + (
                answers[item.id] === item.correctAnswer
                    ? 1
                    : 0
            );
        }, 0);
    }, [answers]);

    const selectAnswer = (option) => {
        if (submitted) {
            return;
        }

        setAnswers((previous) => ({
            ...previous,
            [question.id]: option
        }));
    };

    const goToQuestion = (index) => {
        if (submitted) {
            return;
        }

        setCurrentQuestion(index);
    };

    const goPrevious = () => {
        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1);
        }
    };

    const goNext = () => {
        if (currentQuestion < totalQuestions - 1) {
            setCurrentQuestion(currentQuestion + 1);
        }
    };

    const { handleSubmit } =
    useAssessmentPersistence({
        assessmentType: "quiz",
        moduleNumber: 2,
        score,
        totalQuestions,
        answeredCount,
        onSubmitted: () => setSubmitted(true)
    });

    const handleRetake = () => {
        setAnswers({});
        setCurrentQuestion(0);
        setSubmitted(false);
    };

    if (submitted) {
        return (
            <div className="devices-quiz-page">

                <header className="devices-quiz-header">

                    <button
                        type="button"
                        className="devices-quiz-back"
                        onClick={() => navigate("/quiz")}
                    >
                        Back
                    </button>

                    <div className="devices-quiz-title">
                        <h1>Network Devices</h1>
                        <p>Quiz Result</p>
                    </div>

                    <div className="devices-quiz-counter">
                        {totalQuestions} / {totalQuestions}
                    </div>

                </header>

                <main className="devices-result-page">

                    <section className="devices-result-heading">

                        <span className="result-label">
                            QUIZ RESULT
                        </span>

                        <h2>
                            Network Devices
                        </h2>

                        <div className="result-mark-box">
                            <span className="result-mark-label">
                                MARKS
                            </span>

                            <strong className="result-mark">
                                {score}
                                <small> / {totalQuestions}</small>
                            </strong>
                        </div>

                    </section>

                    <section className="result-question-list">

                        {devicesQuizData.map((item) => {

                            const selectedAnswer =
                                answers[item.id];

                            return (
                                <article
                                    key={item.id}
                                    className="result-question-card"
                                >

                                    <div className="result-question-header">

                                        <span className="result-question-number">
                                            Q{String(item.id).padStart(2, "0")}
                                        </span>

                                        <h3>
                                            {item.question}
                                        </h3>

                                    </div>

                                    <div className="result-answer-list">

                                        {Object.entries(item.options).map(
                                            ([letter, optionText]) => {

                                                const isSelected =
                                                    selectedAnswer === letter;

                                                const isCorrectOption =
                                                    item.correctAnswer === letter;

                                                let answerClass =
                                                    "result-answer";

                                                if (isCorrectOption) {
                                                    answerClass +=
                                                        " result-answer-correct";
                                                }

                                                if (
                                                    isSelected &&
                                                    !isCorrectOption
                                                ) {
                                                    answerClass +=
                                                        " result-answer-wrong";
                                                }

                                                return (
                                                    <div
                                                        key={letter}
                                                        className={answerClass}
                                                    >

                                                        <span className="result-option-letter">
                                                            {letter}
                                                        </span>

                                                        <span className="result-option-text">
                                                            {optionText}
                                                        </span>

                                                        {isCorrectOption && (
                                                            <span className="result-answer-mark result-check">
                                                                ✓
                                                            </span>
                                                        )}

                                                        {isSelected &&
                                                            !isCorrectOption && (
                                                                <span className="result-answer-mark result-cross">
                                                                    ✕
                                                                </span>
                                                            )}

                                                    </div>
                                                );
                                            }
                                        )}

                                    </div>

                                </article>
                            );
                        })}

                    </section>

                    <div className="result-actions">

                        <button
                            type="button"
                            className="result-secondary-button"
                            onClick={handleRetake}
                        >
                            Retake
                        </button>

                        <button
                            type="button"
                            className="result-primary-button"
                            onClick={() => navigate("/quiz")}
                        >
                            Back to Quizzes
                        </button>

                    </div>

                </main>

            </div>
        );
    }

    return (
        <div className="devices-quiz-page">

            <header className="devices-quiz-header">

                <button
                    type="button"
                    className="devices-quiz-back"
                    onClick={() => navigate("/quiz")}
                >
                    Back
                </button>

                <div className="devices-quiz-title">
                    <h1>Network Devices</h1>
                    <p>Quiz</p>
                </div>

                <div className="devices-quiz-counter">
                    Question {currentQuestion + 1} / {totalQuestions}
                </div>

            </header>

            <main className="devices-quiz-content">

                <aside className="devices-question-index">

                    <h2>Questions</h2>

                    <div className="question-number-grid">

                        {devicesQuizData.map((item, index) => (
                            <button
                                key={item.id}
                                type="button"
                                className={`
                                    question-number
                                    ${
                                        index === currentQuestion
                                            ? "question-number-active"
                                            : ""
                                    }
                                    ${
                                        answers[item.id]
                                            ? "question-number-answered"
                                            : ""
                                    }
                                `}
                                onClick={() => goToQuestion(index)}
                            >
                                {String(item.id).padStart(2, "0")}
                            </button>
                        ))}

                    </div>

                    <div className="question-progress">

                        <div className="question-progress-header">
                            <span>Progress</span>

                            <span>
                                {answeredCount}/{totalQuestions}
                            </span>
                        </div>

                        <div className="question-progress-track">

                            <div
                                className="question-progress-fill"
                                style={{
                                    width: `${
                                        (answeredCount /
                                            totalQuestions) *
                                        100
                                    }%`
                                }}
                            />

                        </div>

                    </div>

                </aside>

                <section className="devices-question-area">

                    <div className="question-card">

                        <div className="question-card-header">

                            <span className="question-card-number">
                                Question {question.id}
                            </span>

                            <span className="question-card-total">
                                {answeredCount} answered
                            </span>

                        </div>

                        <h2>
                            {question.question}
                        </h2>

                        <div className="question-options">

                            {Object.entries(question.options).map(
                                ([letter, optionText]) => (
                                    <button
                                        key={letter}
                                        type="button"
                                        className={`question-option ${
                                            answers[question.id] === letter
                                                ? "question-option-selected"
                                                : ""
                                        }`}
                                        onClick={() =>
                                            selectAnswer(letter)
                                        }
                                    >
                                        <span className="option-letter">
                                            {letter}
                                        </span>

                                        <span className="option-text">
                                            {optionText}
                                        </span>
                                    </button>
                                )
                            )}

                        </div>

                    </div>

                    <div className="quiz-navigation">

                        <button
                            type="button"
                            className="quiz-navigation-button secondary"
                            onClick={goPrevious}
                            disabled={currentQuestion === 0}
                        >
                            Previous
                        </button>

                        <span className="quiz-navigation-position">
                            {currentQuestion + 1} / {totalQuestions}
                        </span>

                        {currentQuestion === totalQuestions - 1 ? (
                            <button
                                type="button"
                                className="quiz-navigation-button submit"
                                onClick={handleSubmit}
                                disabled={
                                    answeredCount !== totalQuestions
                                }
                            >
                                Submit
                            </button>
                        ) : (
                            <button
                                type="button"
                                className="quiz-navigation-button primary"
                                onClick={goNext}
                            >
                                Next
                            </button>
                        )}

                    </div>

                    {answeredCount !== totalQuestions &&
                        currentQuestion === totalQuestions - 1 && (
                            <p className="quiz-submit-message">
                                Answer all questions before submitting.
                            </p>
                        )}

                </section>

            </main>

        </div>
    );
}

export default NetworkDevicesQuiz;