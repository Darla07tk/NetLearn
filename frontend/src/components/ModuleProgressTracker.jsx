import { useLocation } from "react-router-dom";
import useModuleProgress from "../hooks/useModuleProgress";

// Every module uses the same progress rule:
// 60 seconds = 1%, capped at 100%.
const SECONDS_FOR_FULL_PROGRESS = 100 * 60;

const PROTOCOL_PATHS = new Set([
    "/arp", "/http", "/https", "/dns", "/dhcp", "/smtp",
    "/ftp", "/pop3", "/imap", "/telnet", "/snmp", "/tls",
    "/mime", "/rpc", "/netbios", "/tcp", "/udp", "/ip",
    "/icmp", "/ospf", "/rip", "/ethernet", "/ppp", "/stp",
    "/wifi", "/dsl", "/bluetooth"
]);

function getModuleNumber(pathname) {
    const path =
        pathname.toLowerCase().replace(/\/+$/, "") || "/";

    if (
        path === "/fundamentals" ||
        path.startsWith("/fundamentals/")
    ) {
        return 1;
    }

    if (path === "/devices") return 2;
    if (path === "/osi-model") return 3;
    if (path === "/ip-addressing") return 4;
    if (path === "/routing-switching") return 5;

    if (
        path === "/protocols" ||
        PROTOCOL_PATHS.has(path)
    ) {
        return 6;
    }

    // Dashboard, quizzes, login and other pages
    // must not accumulate module study time.
    return null;
}

export default function ModuleProgressTracker() {
    const location = useLocation();
    const moduleNumber = getModuleNumber(location.pathname);

    useModuleProgress(
        moduleNumber,
        moduleNumber ? SECONDS_FOR_FULL_PROGRESS : null
    );

    return null;
}