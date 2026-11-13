import api from "./api";

const activityService = {
    getUserActivities(userId) {
        return api.get(`/activities/${userId}`);
    },

    createActivity(userId, activityType, description) {
        return api.post(`/activities/${userId}`, {
            activityType,
            description
        });
    }
};

export default activityService;