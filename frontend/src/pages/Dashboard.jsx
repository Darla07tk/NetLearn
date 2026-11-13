
import { useCallback, useEffect, useMemo, useState } from "react";
import {
    Link,
    Navigate,
    useLocation,
    useNavigate
} from "react-router-dom";

import { useAuth } from "../context/AuthContext";
import progressService from "../services/progressService";
import quizService from "../services/quizService";
import activityService from "../services/activityService";
import "./Dashboard.css";

const SECONDS_PER_PERCENT = 60;
const MAX_STUDY_SECONDS = 6000;

const MODULES = [
    { id: 1, name: "Network Fundamentals", path: "/fundamentals" },
    { id: 2, name: "Network Devices", path: "/devices" },
    { id: 3, name: "OSI Model", path: "/osi-model" },
    { id: 4, name: "IP Addressing", path: "/ip-addressing" },
    { id: 5, name: "Routing & Switching", path: "/routing-switching" },
    { id: 6, name: "Network Protocols", path: "/protocols" }
];

function safeNumber(value, fallback = 0) {
    const number = Number(value);
    return Number.isFinite(number) ? number : fallback;
}

function clampPercentage(value) {
    return Math.min(100, Math.max(0, Math.floor(safeNumber(value))));
}

function getLocalStudySeconds(userId, moduleNumber) {
    try {
        const key = `netlearn:module-time:${userId}:${moduleNumber}`;
        const value = Number.parseInt(localStorage.getItem(key) || "0", 10);

        return Number.isFinite(value)
            ? Math.min(MAX_STUDY_SECONDS, Math.max(0, value))
            : 0;
    } catch {
        return 0;
    }
}

function getRecordModuleNumber(record) {
    const number =
        record?.module?.moduleNumber ??
        record?.moduleNumber;

    if (number !== undefined && number !== null) {
        return safeNumber(number, -1);
    }

    const moduleId = record?.module?.id ?? record?.moduleId;

    if (moduleId !== undefined && moduleId !== null) {
        return safeNumber(moduleId, -1);
    }

    return -1;
}

function getRecordPercentage(record) {
    return clampPercentage(record?.completionPercentage);
}

function formatActivityDate(value) {
    if (!value) return "";

    const date = new Date(value);

    if (Number.isNaN(date.getTime())) return "";

    return date.toLocaleString([], {
        day: "2-digit",
        month: "short",
        hour: "2-digit",
        minute: "2-digit"
    });
}

function Dashboard() {
    const { user, logout } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const [progressRecords, setProgressRecords] = useState([]);
    const [quizResults, setQuizResults] = useState([]);
    const [grandTestResults, setGrandTestResults] = useState([]);
    const [activities, setActivities] = useState([]);

    const [loading, setLoading] = useState(true);
    const [loadError, setLoadError] = useState("");

    const loadDashboard = useCallback(async (showLoading = false) => {
        if (!user?.id) {
            setProgressRecords([]);
            setQuizResults([]);
            setGrandTestResults([]);
            setActivities([]);
            setLoading(false);
            return;
        }

        if (showLoading) setLoading(true);
        setLoadError("");

        const results = await Promise.allSettled([
            progressService.getUserProgress(user.id),
            quizService.getQuizResults(user.id),
            quizService.getGrandTestResults(user.id),
            activityService.getUserActivities(user.id)
        ]);

        const [
            progressResult,
            quizResult,
            grandTestResult,
            activityResult
        ] = results;

        if (progressResult.status === "fulfilled") {
            setProgressRecords(
                Array.isArray(progressResult.value)
                    ? progressResult.value
                    : []
            );
        } else {
            setLoadError(
                "Unable to load saved progress from the server. Local study-time backups are still available."
            );
        }

        if (quizResult.status === "fulfilled") {
            setQuizResults(
                Array.isArray(quizResult.value)
                    ? quizResult.value
                    : []
            );
        }

        if (grandTestResult.status === "fulfilled") {
            setGrandTestResults(
                Array.isArray(grandTestResult.value)
                    ? grandTestResult.value
                    : []
            );
        }

        if (activityResult.status === "fulfilled") {
            setActivities(
                Array.isArray(activityResult.value)
                    ? activityResult.value
                    : []
            );
        }

        setLoading(false);
    }, [user?.id]);

    useEffect(() => {
        void loadDashboard(true);
    }, [loadDashboard, location.key]);

    useEffect(() => {
        if (!user?.id) return undefined;

        const refreshForCurrentUser = (event) => {
            const eventUserId = event?.detail?.userId;

            if (
                eventUserId === undefined ||
                String(eventUserId) === String(user.id)
            ) {
                void loadDashboard(false);
            }
        };

        window.addEventListener(
            "netlearn:progress-updated",
            refreshForCurrentUser
        );

        window.addEventListener(
            "netlearn:activity-updated",
            refreshForCurrentUser
        );

        return () => {
            window.removeEventListener(
                "netlearn:progress-updated",
                refreshForCurrentUser
            );

            window.removeEventListener(
                "netlearn:activity-updated",
                refreshForCurrentUser
            );
        };
    }, [user?.id, loadDashboard]);

    const moduleProgress = useMemo(() => {
        return MODULES.map((module) => {
            const record = progressRecords.find(
                (item) =>
                    getRecordModuleNumber(item) === module.id
            );

            const serverPercentage = getRecordPercentage(record);

            const localSeconds = getLocalStudySeconds(
                user?.id,
                module.id
            );

            const localPercentage = Math.floor(
                localSeconds / SECONDS_PER_PERCENT
            );

            const percentage = clampPercentage(
                Math.max(serverPercentage, localPercentage)
            );

            return {
                ...module,
                percentage
            };
        });
    }, [progressRecords, user?.id]);

    const overallProgress = useMemo(() => {
        const total = moduleProgress.reduce(
            (sum, module) => sum + module.percentage,
            0
        );

        return Math.round(total / MODULES.length);
    }, [moduleProgress]);

    const completedModules = useMemo(() => {
        return moduleProgress.filter(
            (module) => module.percentage >= 100
        ).length;
    }, [moduleProgress]);

    const totalAssessments =
        quizResults.length + grandTestResults.length;

    const recentActivities = useMemo(() => {
        return [...activities]
            .sort((a, b) => {
                return (
                    new Date(b?.createdAt || 0).getTime() -
                    new Date(a?.createdAt || 0).getTime()
                );
            })
            .slice(0, 5);
    }, [activities]);

    const handleLogout = () => {
        logout();
        navigate("/login");
    };

    if (!user) {
        return <Navigate to="/login" replace />;
    }

    return (
        <div className="dashboard-page">
            <aside className="dashboard-sidebar">
                <div className="dashboard-brand">NetLearn</div>

                <nav className="dashboard-nav">
                    <Link
                        to="/dashboard"
                        className="dashboard-nav-link active"
                    >
                        Dashboard
                    </Link>

                    <Link to="/fundamentals" className="dashboard-nav-link">
                        Network Fundamentals
                    </Link>

                    <Link to="/devices" className="dashboard-nav-link">
                        Network Devices
                    </Link>

                    <Link to="/osi-model" className="dashboard-nav-link">
                        OSI Model
                    </Link>

                    <Link to="/ip-addressing" className="dashboard-nav-link">
                        IP Addressing
                    </Link>

                    <Link
                        to="/routing-switching"
                        className="dashboard-nav-link"
                    >
                        Routing &amp; Switching
                    </Link>

                    <Link to="/protocols" className="dashboard-nav-link">
                        Network Protocols
                    </Link>

                    <Link to="/quiz" className="dashboard-nav-link">
                        Quiz
                    </Link>
                </nav>

                <button
                    className="dashboard-logout"
                    onClick={handleLogout}
                >
                    Logout
                </button>
            </aside>

            <main className="dashboard-main">
                <header className="dashboard-topbar">
                    <div>
                        <p className="dashboard-kicker">Dashboard</p>
                        <h1>Welcome, {user.name}</h1>
                    </div>

                    <div className="dashboard-user">{user.email}</div>
                </header>

                {loading ? (
                    <div className="dashboard-state">
                        Loading dashboard...
                    </div>
                ) : (
                    <>
                        {loadError && (
                            <div className="dashboard-error">
                                {loadError}
                            </div>
                        )}

                        <section className="dashboard-stats">
                            <div className="stat-card">
                                <span className="stat-label">
                                    Overall Progress
                                </span>
                                <strong>{overallProgress}%</strong>
                            </div>

                            <div className="stat-card">
                                <span className="stat-label">
                                    Modules Completed
                                </span>
                                <strong>{completedModules} / 6</strong>
                            </div>

                            <div className="stat-card">
                                <span className="stat-label">
                                    Quizzes Taken
                                </span>
                                <strong>{quizResults.length}</strong>
                            </div>

                            <div className="stat-card grand-test-card">
                                <span className="stat-label">
                                    Grand Test
                                </span>

                                <strong
                                    className={`grand-test-status ${
                                        grandTestResults.length > 0
                                            ? "completed"
                                            : "not-completed"
                                    }`}
                                    role="img"
                                    aria-label={
                                        grandTestResults.length > 0
                                            ? "Grand Test completed"
                                            : "Grand Test not completed"
                                    }
                                >
                                    {grandTestResults.length > 0 ? "✓" : "✗"}
                                </strong>
                            </div>
                        </section>

                        <section className="dashboard-content-grid">
                            <div className="progress-panel">
                                <div className="panel-heading">
                                    <h2>Module Progress</h2>
                                    <span>
                                        {completedModules} of 6 completed
                                    </span>
                                </div>

                                <div className="module-progress-grid">
                                    {moduleProgress.map((module) => (
                                        <Link
                                            to={module.path}
                                            key={module.id}
                                            className="module-progress-card"
                                        >
                                            <div className="module-card-top">
                                                <h3>{module.name}</h3>
                                                <strong>
                                                    {module.percentage}%
                                                </strong>
                                            </div>

                                            <div
                                                className="progress-track"
                                                role="progressbar"
                                                aria-label={`${module.name} progress`}
                                                aria-valuemin={0}
                                                aria-valuemax={100}
                                                aria-valuenow={module.percentage}
                                            >
                                                <div
                                                    className="progress-fill"
                                                    style={{
                                                        width: `${module.percentage}%`
                                                    }}
                                                />
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            <div className="activity-panel">
                                <div className="panel-heading">
                                    <h2>Recent Activity</h2>
                                    <span>
                                        {totalAssessments} assessments
                                    </span>
                                </div>

                                {recentActivities.length === 0 ? (
                                    <div className="empty-state">
                                        No activity recorded yet.
                                    </div>
                                ) : (
                                    <div className="activity-list">
                                        {recentActivities.map(
                                            (activity, index) => (
                                                <div
                                                    className="activity-item"
                                                    key={
                                                        activity.id ??
                                                        `${activity.activityType}-${activity.createdAt}-${index}`
                                                    }
                                                >
                                                    <div>
                                                        <strong>
                                                            {activity.activityType}
                                                        </strong>
                                                        <p>
                                                            {activity.description}
                                                        </p>
                                                    </div>

                                                    <span>
                                                        {formatActivityDate(
                                                            activity.createdAt
                                                        )}
                                                    </span>
                                                </div>
                                            )
                                        )}
                                    </div>
                                )}
                            </div>
                        </section>
                    </>
                )}
            </main>
        </div>
    );
}

export default Dashboard;
