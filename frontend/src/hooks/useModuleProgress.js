import { useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import progressService from "../services/progressService";
import activityService from "../services/activityService";

const SYNC_INTERVAL_SECONDS = 10;
const SECONDS_FOR_FULL_PROGRESS = 100 * 60;

export default function useModuleProgress(
    moduleNumber,
    estimatedSeconds,
    legacyTotalItems
) {
    const { user } = useAuth();
    const isTimeBasedCall = legacyTotalItems === undefined;

    useEffect(() => {
        if (
            !isTimeBasedCall ||
            !user?.id ||
            !moduleNumber
        ) {
            return undefined;
        }

        const userId = user.id;
        const storageKey =
            `netlearn:module-time:${userId}:${moduleNumber}`;

        const readLocalSeconds = () => {
            try {
                const value = Number.parseInt(
                    localStorage.getItem(storageKey) || "0",
                    10
                );

                return Number.isFinite(value) && value > 0
                    ? Math.min(SECONDS_FOR_FULL_PROGRESS, value)
                    : 0;
            } catch {
                return 0;
            }
        };

        let elapsedSeconds = readLocalSeconds();
        let lastPersistedSeconds = 0;
        let lastAttemptedSeconds = 0;
        let initialized = false;
        let disposed = false;
        let syncing = false;
        let forceSyncQueued = false;

        const saveLocalSeconds = () => {
            try {
                const safeSeconds = Math.min(
                    SECONDS_FOR_FULL_PROGRESS,
                    Math.max(0, Math.floor(elapsedSeconds))
                );

                localStorage.setItem(
                    storageKey,
                    String(safeSeconds)
                );
            } catch (error) {
                console.warn(
                    "Unable to save local progress backup:",
                    error
                );
            }
        };

        const pageIsActive = () =>
            document.visibilityState === "visible" &&
            document.hasFocus();

        const syncProgress = async (force = false) => {
            const snapshot = Math.min(
                SECONDS_FOR_FULL_PROGRESS,
                Math.max(0, Math.floor(elapsedSeconds))
            );

            if (
                !initialized ||
                snapshot <= lastPersistedSeconds
            ) {
                return;
            }

            if (
                !force &&
                snapshot - lastAttemptedSeconds <
                    SYNC_INTERVAL_SECONDS
            ) {
                return;
            }

            if (syncing) {
                forceSyncQueued = forceSyncQueued || force;
                return;
            }

            syncing = true;
            lastAttemptedSeconds = snapshot;

            try {
                const saved =
                    await progressService.updateTimeProgress(
                        userId,
                        moduleNumber,
                        snapshot
                    );

                const serverSeconds = Math.min(
                    SECONDS_FOR_FULL_PROGRESS,
                    Math.max(
                        0,
                        Number(
                            saved?.timeSpentSeconds ?? snapshot
                        )
                    )
                );

                lastPersistedSeconds = Math.max(
                    lastPersistedSeconds,
                    serverSeconds
                );

                elapsedSeconds = Math.min(
                    SECONDS_FOR_FULL_PROGRESS,
                    Math.max(
                        elapsedSeconds,
                        lastPersistedSeconds
                    )
                );

                saveLocalSeconds();

                window.dispatchEvent(
                    new CustomEvent("netlearn:progress-updated", {
                        detail: { userId, moduleNumber }
                    })
                );
            } catch (error) {
                // Keep the local backup.
                // A later sync will retry it.
                console.error(
                    "Unable to save module study time:",
                    error
                );
            } finally {
                syncing = false;

                const shouldSyncAgain =
                    forceSyncQueued ||
                    Math.floor(elapsedSeconds) -
                        lastAttemptedSeconds >=
                        SYNC_INTERVAL_SECONDS;

                const nextForce = forceSyncQueued;
                forceSyncQueued = false;

                if (shouldSyncAgain && !disposed) {
                    void syncProgress(nextForce);
                }
            }
        };

        const initialize = async () => {
            try {
                const records =
                    await progressService.getUserProgress(userId);

                if (disposed) return;

                const record = (records || []).find(
                    (item) =>
                        Number(item?.module?.moduleNumber) ===
                        Number(moduleNumber)
                );

                const databaseSeconds = Math.min(
                    SECONDS_FOR_FULL_PROGRESS,
                    Math.max(
                        0,
                        Number(record?.timeSpentSeconds ?? 0)
                    )
                );

                lastPersistedSeconds = databaseSeconds;
                lastAttemptedSeconds = databaseSeconds;

                elapsedSeconds = Math.min(
                    SECONDS_FOR_FULL_PROGRESS,
                    Math.max(elapsedSeconds, databaseSeconds)
                );
            } catch (error) {
                console.error(
                    "Unable to load saved module study time:",
                    error
                );
                // The local backup remains available if
                // the API is temporarily unavailable.
            }

            if (disposed) return;

            initialized = true;
            saveLocalSeconds();

            // Record entering a module once per browser-tab session.
            const activityKey =
                `netlearn:module-started:${userId}:${moduleNumber}`;

            try {
                if (!sessionStorage.getItem(activityKey)) {
                    const moduleNames = {
                        1: "Network Fundamentals",
                        2: "Network Devices",
                        3: "OSI Model",
                        4: "IP Addressing",
                        5: "Routing & Switching",
                        6: "Network Protocols"
                    };

                    await activityService.createActivity(
                        userId,
                        "Module Learning",
                        `Started learning ${
                            moduleNames[moduleNumber] || "a module"
                        }`
                    );

                    sessionStorage.setItem(activityKey, "1");

                    window.dispatchEvent(
                        new CustomEvent("netlearn:activity-updated", {
                            detail: { userId }
                        })
                    );
                }
            } catch (error) {
                console.error(
                    "Unable to record module learning activity:",
                    error
                );
            }

            if (elapsedSeconds > lastPersistedSeconds) {
                void syncProgress(true);
            }
        };

        const timerId = window.setInterval(() => {
            if (
                !initialized ||
                !pageIsActive() ||
                elapsedSeconds >= SECONDS_FOR_FULL_PROGRESS
            ) {
                return;
            }

            elapsedSeconds = Math.min(
                SECONDS_FOR_FULL_PROGRESS,
                elapsedSeconds + 1
            );

            saveLocalSeconds();

            if (
                Math.floor(elapsedSeconds) -
                    lastAttemptedSeconds >=
                SYNC_INTERVAL_SECONDS
            ) {
                void syncProgress(false);
            }
        }, 1000);

        const flushProgress = () => {
            saveLocalSeconds();
            void syncProgress(true);
        };

        const handleVisibilityChange = () => {
            if (document.visibilityState === "hidden") {
                flushProgress();
            }
        };

        window.addEventListener("blur", flushProgress);
        window.addEventListener("pagehide", flushProgress);

        document.addEventListener(
            "visibilitychange",
            handleVisibilityChange
        );

        void initialize();

        return () => {
            disposed = true;
            window.clearInterval(timerId);

            window.removeEventListener("blur", flushProgress);
            window.removeEventListener("pagehide", flushProgress);

            document.removeEventListener(
                "visibilitychange",
                handleVisibilityChange
            );

            saveLocalSeconds();
            void syncProgress(true);
        };
    }, [
        isTimeBasedCall,
        user?.id,
        moduleNumber,
        estimatedSeconds
    ]);
}