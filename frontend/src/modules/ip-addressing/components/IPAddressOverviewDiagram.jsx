export default function IPAddressOverviewDiagram({ type }) {
    if (type === "communication") {
        return (
            <div
                className="communication-tree-diagram"
                style={{
                    width: "100%",
                    overflow: "hidden",
                    border: "1px solid #cbd9e8",
                    borderRadius: "10px",
                    background: "#ffffff",
                    padding: "8px",
                }}
            >
                <svg
                    viewBox="0 0 1000 520"
                    width="100%"
                    role="img"
                    aria-label="IP addressing communication from PC1 through Switch 1, Router, and Switch 2 to PC4"
                    style={{
                        display: "block",
                        width: "100%",
                        height: "auto",
                    }}
                >
                    {/* Diagram background */}
                    <rect
                        x="25"
                        y="20"
                        width="950"
                        height="475"
                        rx="14"
                        fill="#f8fbff"
                        stroke="#d4e0ec"
                        strokeWidth="2"
                    />

                    {/* Network containers */}
                    <rect
                        x="55"
                        y="45"
                        width="270"
                        height="420"
                        rx="12"
                        fill="#ffffff"
                        stroke="#c8d9e8"
                        strokeWidth="2"
                    />

                    <rect
                        x="675"
                        y="45"
                        width="270"
                        height="420"
                        rx="12"
                        fill="#ffffff"
                        stroke="#c8d9e8"
                        strokeWidth="2"
                    />

                    {/* Clear network names only */}
                    <text
                        x="80"
                        y="78"
                        fontSize="20"
                        fontWeight="700"
                        fill="#07549a"
                    >
                        NETWORK 1
                    </text>

                    <text
                        x="700"
                        y="78"
                        fontSize="20"
                        fontWeight="700"
                        fill="#07549a"
                    >
                        NETWORK 2
                    </text>

                    {/* Network links */}
                    <line
                        x1="130"
                        y1="375"
                        x2="190"
                        y2="315"
                        stroke="#9bb8d1"
                        strokeWidth="6"
                        strokeLinecap="round"
                    />

                    <line
                        x1="260"
                        y1="375"
                        x2="190"
                        y2="315"
                        stroke="#9bb8d1"
                        strokeWidth="6"
                        strokeLinecap="round"
                    />

                    <line
                        x1="190"
                        y1="245"
                        x2="500"
                        y2="145"
                        stroke="#9bb8d1"
                        strokeWidth="6"
                        strokeLinecap="round"
                    />

                    <line
                        x1="500"
                        y1="145"
                        x2="810"
                        y2="245"
                        stroke="#9bb8d1"
                        strokeWidth="6"
                        strokeLinecap="round"
                    />

                    <line
                        x1="810"
                        y1="315"
                        x2="740"
                        y2="375"
                        stroke="#9bb8d1"
                        strokeWidth="6"
                        strokeLinecap="round"
                    />

                    <line
                        x1="810"
                        y1="315"
                        x2="870"
                        y2="375"
                        stroke="#9bb8d1"
                        strokeWidth="6"
                        strokeLinecap="round"
                    />

                    {/* Router: remove the small explanatory label */}
                    <g>
                        <rect
                            x="440"
                            y="65"
                            width="120"
                            height="80"
                            rx="10"
                            fill="#ffffff"
                            stroke="#0a6ed1"
                            strokeWidth="3"
                        />

                        <text
                            x="500"
                            y="111"
                            textAnchor="middle"
                            fontSize="25"
                            fontWeight="700"
                            fill="#07549a"
                        >
                            R1
                        </text>
                    </g>

                    {/* Switch 1: remove the small explanatory label */}
                    <g>
                        <rect
                            x="135"
                            y="245"
                            width="110"
                            height="70"
                            rx="10"
                            fill="#ffffff"
                            stroke="#0a6ed1"
                            strokeWidth="2.5"
                        />

                        <text
                            x="190"
                            y="287"
                            textAnchor="middle"
                            fontSize="22"
                            fontWeight="700"
                            fill="#07549a"
                        >
                            SW1
                        </text>
                    </g>

                    {/* Switch 2: remove the small explanatory label */}
                    <g>
                        <rect
                            x="755"
                            y="245"
                            width="110"
                            height="70"
                            rx="10"
                            fill="#ffffff"
                            stroke="#0a6ed1"
                            strokeWidth="2.5"
                        />

                        <text
                            x="810"
                            y="287"
                            textAnchor="middle"
                            fontSize="22"
                            fontWeight="700"
                            fill="#07549a"
                        >
                            SW2
                        </text>
                    </g>

                    {/* PC1: retain the device name, remove the IP address */}
                    <g>
                        <rect
                            x="70"
                            y="375"
                            width="120"
                            height="60"
                            rx="9"
                            fill="#ffffff"
                            stroke="#0a6ed1"
                            strokeWidth="2.5"
                        />

                        <text
                            x="130"
                            y="412"
                            textAnchor="middle"
                            fontSize="22"
                            fontWeight="700"
                            fill="#07549a"
                        >
                            PC1
                        </text>
                    </g>

                    {/* PC2: retain the device name, remove the IP address */}
                    <g>
                        <rect
                            x="200"
                            y="375"
                            width="120"
                            height="60"
                            rx="9"
                            fill="#ffffff"
                            stroke="#c6d7e7"
                            strokeWidth="2"
                        />

                        <text
                            x="260"
                            y="412"
                            textAnchor="middle"
                            fontSize="22"
                            fontWeight="700"
                            fill="#07549a"
                        >
                            PC2
                        </text>
                    </g>

                    {/* PC3: retain the device name, remove the IP address */}
                    <g>
                        <rect
                            x="680"
                            y="375"
                            width="120"
                            height="60"
                            rx="9"
                            fill="#ffffff"
                            stroke="#c6d7e7"
                            strokeWidth="2"
                        />

                        <text
                            x="740"
                            y="412"
                            textAnchor="middle"
                            fontSize="22"
                            fontWeight="700"
                            fill="#07549a"
                        >
                            PC3
                        </text>
                    </g>

                    {/* PC4: retain the device name, remove the IP address */}
                    <g>
                        <rect
                            x="810"
                            y="375"
                            width="120"
                            height="60"
                            rx="9"
                            fill="#ffffff"
                            stroke="#0a6ed1"
                            strokeWidth="2.5"
                        />

                        <text
                            x="870"
                            y="412"
                            textAnchor="middle"
                            fontSize="22"
                            fontWeight="700"
                            fill="#07549a"
                        >
                            PC4
                        </text>
                    </g>

                    {/*
                      Animate the dot along the existing PC1 → SW1 → Router
                      → SW2 → PC4 route.

                      Each segment starts and ends inside the link area,
                      with enough clearance from the device-box boundaries
                      so the dot does not enter or overlap any box.
                    */}
                    <circle
                        r="8"
                        fill="#087ee8"
                        stroke="#ffffff"
                        strokeWidth="3"
                        pointerEvents="none"
                    >
                        <animateMotion
                            dur="5s"
                            repeatCount="indefinite"
                            calcMode="linear"
                            path="
                                M139 366 L181 324
                                M202 241 L488 149
                                M512 149 L798 241
                                M822 327 L858 363
                            "
                        />
                    </circle>
                </svg>
            </div>
        );
    }

    if (type === "overview") {
        return (
            <div className="ip-overview-diagram">
                <div className="overview-small-flow">
                    <div className="overview-small-device">
                        <strong>PC1</strong>
                        <span>192.168.1.10</span>
                    </div>

                    <div className="overview-small-line"></div>

                    <div className="overview-small-network">
                        <strong>IP NETWORK</strong>
                        <span>Logical addressing</span>
                    </div>

                    <div className="overview-small-line"></div>

                    <div className="overview-small-device">
                        <strong>PC2</strong>
                        <span>192.168.1.20</span>
                    </div>
                </div>
            </div>
        );
    }

    if (type === "ipv4") {
        return (
            <div className="ip-structure-diagram">
                <div className="ipv4-address-small">
                    <span>192</span>
                    <i>.</i>
                    <span>168</span>
                    <i>.</i>
                    <span>1</span>
                    <i>.</i>
                    <span>25</span>
                </div>

                <div className="ipv4-labels-small">
                    <div>
                        <strong>Network Part</strong>
                        <span>192.168.1</span>
                    </div>

                    <div>
                        <strong>Host Part</strong>
                        <span>25</span>
                    </div>
                </div>
            </div>
        );
    }

    if (type === "network-host") {
        return (
            <div className="network-host-diagram">
                <div className="network-host-box-small">
                    <div>
                        <strong>192.168.1</strong>
                        <span>Network</span>
                    </div>

                    <div>
                        <strong>25</strong>
                        <span>Host</span>
                    </div>
                </div>
            </div>
        );
    }

    if (type === "ipv4-ipv6") {
        return (
            <div className="ip-version-diagram">
                <div className="version-comparison-small">
                    <div>
                        <strong>IPv4</strong>
                        <span>32-bit</span>
                        <small>192.168.1.10</small>
                    </div>

                    <div>
                        <strong>IPv6</strong>
                        <span>128-bit</span>
                        <small>2001:db8::1</small>
                    </div>
                </div>
            </div>
        );
    }

    return null;
}