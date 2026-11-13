import api from "./api";

const progressService = {
    getUserProgress(userId) {
        return api.get(
            `/progress/user/${userId}`
        );
    },

    updateTimeProgress(
        userId,
        moduleNumber,
        timeSpentSeconds
    ) {
        return api.put(
            `/progress/${userId}/module-number/${moduleNumber}/time` +
                `?timeSpentSeconds=${encodeURIComponent(
                    timeSpentSeconds
                )}`,
            {}
        );
    },

    // Retained for compatibility with the original API.
    updateProgress(
        userId,
        moduleNumber,
        completionPercentage
    ) {
        return api.put(
            `/progress/${userId}/module-number/${moduleNumber}` +
                `?completionPercentage=${encodeURIComponent(
                    completionPercentage
                )}`,
            {}
        );
    }
};

export default progressService;