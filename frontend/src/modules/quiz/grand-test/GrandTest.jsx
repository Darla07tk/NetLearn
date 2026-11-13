import { useState } from "react";
import { useNavigate } from "react-router-dom";
import grandTestData from "../../../data/grandTestData";
import "./grandTest.css";
import useAssessmentPersistence
    from "../../../hooks/useAssessmentPersistence";
function GrandTest() {
    const navigate = useNavigate();

    const totalQuestions = grandTestData.length;

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const question = grandTestData[currentQuestion];

    const answeredCount = Object.keys(answers).length;

    const score = grandTestData.reduce(
        (total, item) => {
            return (
                total +
                (
                    answers[item.id] === item.correctAnswer
                        ? 1
                        : 0
                )
            );
        },
        0
    );

    const progress =
        totalQuestions === 0
            ? 0
            : (answeredCount / totalQuestions) * 100;

    const selectAnswer = (letter) => {
        if (submitted) {
            return;
        }

        setAnswers((previous) => ({
            ...previous,
            [question.id]: letter
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
        assessmentType: "grand-test",
        score,
        totalQuestions,
        answeredCount,
        onSubmitted: () => setSubmitted(true)
    });

    const handleRetake = () => {
        setCurrentQuestion(0);
        setAnswers({});
        setSubmitted(false);
    };

    if (submitted) {
        return (
            <div className="grand-test-page">

                <header className="grand-test-header">

                    <button
                        type="button"
                        className="grand-test-back"
                        onClick={() => navigate("/quiz")}
                    >
                        Back
                    </button>

                    <div className="grand-test-title">
                        <h1>Grand Test</h1>
                        <p>Quiz</p>
                    </div>

                    <div className="grand-test-counter">
                        {totalQuestions} Questions
                    </div>

                </header>

                <main className="grand-test-result-page">

                    <section className="grand-test-result-heading">

                        <span className="result-label">
                            QUIZ RESULT
                        </span>

                        <h2>Grand Test</h2>

                        <div className="result-mark-box">

                            <span className="result-mark-label">
                                MARKS
                            </span>

                            <span className="result-mark">
                                {score}
                                <small>
                                    {" "} / {totalQuestions}
                                </small>
                            </span>

                        </div>

                    </section>

                    <section className="result-question-list">

                        {grandTestData.map(
                            (item, index) => {

                                const selectedAnswer =
                                    answers[item.id];

                                return (
                                    <article
                                        key={item.id}
                                        className="result-question-card"
                                    >

                                        <div className="result-question-header">

                                            <span className="result-question-number">
                                                Q
                                                {String(
                                                    index + 1
                                                ).padStart(2, "0")}
                                            </span>

                                            <h3>
                                                {item.question}
                                            </h3>

                                        </div>

                                        <div className="result-answer-list">

                                            {Object.entries(
                                                item.options
                                            ).map(
                                                ([
                                                    letter,
                                                    optionText
                                                ]) => {

                                                    const isCorrect =
                                                        letter ===
                                                        item.correctAnswer;

                                                    const isWrongSelected =
                                                        letter ===
                                                            selectedAnswer &&
                                                        letter !==
                                                            item.correctAnswer;

                                                    let answerClass =
                                                        "result-answer";

                                                    if (
                                                        isCorrect
                                                    ) {
                                                        answerClass +=
                                                            " result-answer-correct";
                                                    }

                                                    if (
                                                        isWrongSelected
                                                    ) {
                                                        answerClass +=
                                                            " result-answer-wrong";
                                                    }

                                                    return (
                                                        <div
                                                            key={letter}
                                                            className={
                                                                answerClass
                                                            }
                                                        >

                                                            <span className="result-option-letter">
                                                                {letter}
                                                            </span>

                                                            <span className="result-option-text">
                                                                {
                                                                    optionText
                                                                }
                                                            </span>

                                                            {isCorrect && (
                                                                <span className="result-answer-mark result-check">
                                                                    ✓
                                                                </span>
                                                            )}

                                                            {isWrongSelected && (
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
                            }
                        )}

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
        <div className="grand-test-page">

            <header className="grand-test-header">

                <button
                    type="button"
                    className="grand-test-back"
                    onClick={() => navigate("/quiz")}
                >
                    Back
                </button>

                <div className="grand-test-title">
                    <h1>Grand Test</h1>
                    <p>Quiz</p>
                </div>

                <div className="grand-test-counter">
                    {answeredCount} / {totalQuestions} Answered
                </div>

            </header>

            <main className="grand-test-content">

                <aside className="grand-test-question-index">

                    <h2>Questions</h2>

                    <div className="grand-test-question-number-grid">

                        {grandTestData.map(
                            (item, index) => {

                                const isActive =
                                    currentQuestion === index;

                                const isAnswered =
                                    Boolean(answers[item.id]);

                                let numberClass =
                                    "grand-test-question-number";

                                if (isActive) {
                                    numberClass +=
                                        " grand-test-question-number-active";
                                } else if (isAnswered) {
                                    numberClass +=
                                        " grand-test-question-number-answered";
                                }

                                return (
                                    <button
                                        key={item.id}
                                        type="button"
                                        className={numberClass}
                                        onClick={() =>
                                            goToQuestion(index)
                                        }
                                    >
                                        {String(
                                            index + 1
                                        ).padStart(2, "0")}
                                    </button>
                                );
                            }
                        )}

                    </div>

                    <div className="grand-test-question-progress">

                        <div className="grand-test-question-progress-header">

                            <span>Progress</span>

                            <span>
                                {answeredCount}/{totalQuestions}
                            </span>

                        </div>

                        <div className="grand-test-question-progress-track">

                            <div
                                className="grand-test-question-progress-fill"
                                style={{
                                    width: `${progress}%`
                                }}
                            />

                        </div>

                    </div>

                </aside>

                <section className="grand-test-question-area">

                    <div className="grand-test-question-card">

                        <div className="grand-test-question-card-header">

                            <span className="grand-test-question-card-number">
                                Question{" "}
                                {String(
                                    currentQuestion + 1
                                ).padStart(2, "0")}
                            </span>

                            <span className="grand-test-question-card-total">
                                {totalQuestions} Questions
                            </span>

                        </div>

                        <h2>
                            {question.question}
                        </h2>

                        <div className="grand-test-question-options">

                            {Object.entries(
                                question.options
                            ).map(
                                ([letter, optionText]) => {

                                    const isSelected =
                                        answers[question.id] ===
                                        letter;

                                    return (
                                        <button
                                            key={letter}
                                            type="button"
                                            className={`grand-test-question-option ${
                                                isSelected
                                                    ? "grand-test-question-option-selected"
                                                    : ""
                                            }`}
                                            onClick={() =>
                                                selectAnswer(
                                                    letter
                                                )
                                            }
                                        >

                                            <span className="grand-test-option-letter">
                                                {letter}
                                            </span>

                                            <span className="grand-test-option-text">
                                                {optionText}
                                            </span>

                                        </button>
                                    );
                                }
                            )}

                        </div>

                    </div>

                    <div className="grand-test-quiz-navigation">

                        <button
                            type="button"
                            className="grand-test-navigation-button secondary"
                            onClick={goPrevious}
                            disabled={currentQuestion === 0}
                        >
                            Previous
                        </button>

                        <span className="grand-test-navigation-position">
                            {currentQuestion + 1} /{" "}
                            {totalQuestions}
                        </span>

                        {currentQuestion ===
                        totalQuestions - 1 ? (
                            <button
                                type="button"
                                className="grand-test-navigation-button submit"
                                onClick={handleSubmit}
                                disabled={
                                    answeredCount !==
                                    totalQuestions
                                }
                            >
                                Submit
                            </button>
                        ) : (
                            <button
                                type="button"
                                className="grand-test-navigation-button primary"
                                onClick={goNext}
                            >
                                Next
                            </button>
                        )}

                    </div>

                    {answeredCount !== totalQuestions &&
                        currentQuestion ===
                            totalQuestions - 1 && (
                            <p className="grand-test-submit-message">
                                Answer all questions before submitting.
                            </p>
                        )}

                </section>

            </main>

        </div>
    );
}

export default GrandTest;