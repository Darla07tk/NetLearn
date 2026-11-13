import api from "./api";

const quizService = {
    getQuizResults(userId) {
        return api.get(`/quizzes/results/${userId}`);
    },

    getGrandTestResults(userId) {
        return api.get(`/grand-test/results/${userId}`);
    },

    submitQuizResult(
        userId,
        moduleNumber,
        score,
        totalQuestions
    ) {
        return api.post(
            `/quizzes/result/${userId}`,
            {
                moduleNumber,
                score,
                totalQuestions
            }
        );
    },

    submitGrandTestResult(
        userId,
        score,
        totalQuestions
    ) {
        return api.post(
            `/grand-test/result/${userId}`,
            {
                score,
                totalQuestions
            }
        );
    }
};

export default quizService;