import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState(() => {
        const savedUser = localStorage.getItem("netlearn_user");

        if (!savedUser) {
            return null;
        }

        try {
            const parsedUser = JSON.parse(savedUser);

            return parsedUser?.id ? parsedUser : null;
        } catch {
            return null;
        }
    });

    const login = (authData) => {
        const authenticatedUser = {
            id: authData.userId,
            name: authData.name,
            email: authData.email
        };

        localStorage.setItem(
            "netlearn_token",
            authData.token
        );

        localStorage.setItem(
            "netlearn_user",
            JSON.stringify(authenticatedUser)
        );

        setUser(authenticatedUser);
    };

    const logout = () => {
        localStorage.removeItem("netlearn_token");
        localStorage.removeItem("netlearn_user");
        setUser(null);
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                login,
                logout,
                isAuthenticated: !!user
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}