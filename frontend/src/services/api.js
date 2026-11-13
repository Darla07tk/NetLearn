const API_BASE_URL = "http://localhost:8080/api";

async function request(endpoint, options = {}) {
    const token = localStorage.getItem("netlearn_token");

    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        ...options,
        headers: {
            "Content-Type": "application/json",
            ...(token ? { Authorization: `Bearer ${token}` } : {}),
            ...(options.headers || {})
        }
    });

    if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText || `Request failed with status ${response.status}`);
    }

    if (response.status === 204) {
        return null;
    }

    return response.json();
}

const api = {
    get(endpoint) {
        return request(endpoint, {
            method: "GET"
        });
    },

    post(endpoint, data) {
        return request(endpoint, {
            method: "POST",
            body: JSON.stringify(data)
        });
    },

    put(endpoint, data) {
        return request(endpoint, {
            method: "PUT",
            body: JSON.stringify(data)
        });
    },

    delete(endpoint) {
        return request(endpoint, {
            method: "DELETE"
        });
    }
};

export default api;