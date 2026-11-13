import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import quizService from "../services/quizService";

export default function useAssessmentPersistence({
    assessmentType,
    moduleNumber,
    score,
    totalQuestions,
    answeredCount,
    onSubmitted
}) {
    const { user } = useAuth();
    const navigate = useNavigate();

    const [saving, setSaving] = useState(false);
    const savingRef = useRef(false);

    const handleSubmit = async () => {
        if (
            answeredCount !== totalQuestions
            || savingRef.current
        ) {
            return;
        }

        if (!user?.id) {
            navigate("/login");
            return;
        }

        savingRef.current = true;
        setSaving(true);

        try {
            if (assessmentType === "quiz") {
                await quizService.submitQuizResult(
                    user.id,
                    moduleNumber,
                    score,
                    totalQuestions
                );
            } else {
                await quizService.submitGrandTestResult(
                    user.id,
                    score,
                    totalQuestions
                );
            }

            onSubmitted();
        } catch (error) {
            console.error(
                "Unable to save assessment result:",
                error
            );

            window.alert(
                "The result could not be saved. Please make sure the backend and database are running and try again."
            );
        } finally {
            savingRef.current = false;
            setSaving(false);
        }
    };

    return {
        handleSubmit,
        saving
    };
}