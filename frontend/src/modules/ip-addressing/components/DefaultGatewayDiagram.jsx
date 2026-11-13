export default function DefaultGatewayDiagram({ type }) {
    if (type !== "gateway-main") {
        return null;
    }

    return (
        <div
            className="gateway-tree-diagram"
            style={{
                width: "100%",
                overflow: "hidden",
                border: "1px solid #cbd9e8",
                borderRadius: "10px",
                background: "#ffffff",
                padding: "10px"
            }}
        >
            <svg
                viewBox="0 0 1000 540"
                width="100%"
                style={{
                    display: "block",
                    width: "100%",
                    height: "auto"
                }}
            >
                <rect
                    x="25"
                    y="20"
                    width="950"
                    height="500"
                    rx="14"
                    fill="#f8fbff"
                    stroke="#d4e0ec"
                    strokeWidth="2"
                />

                <rect
                    x="55"
                    y="55"
                    width="300"
                    height="425"
                    rx="12"
                    fill="#ffffff"
                    stroke="#c8d9e8"
                    strokeWidth="2"
                />

                <rect
                    x="645"
                    y="55"
                    width="300"
                    height="425"
                    rx="12"
                    fill="#ffffff"
                    stroke="#c8d9e8"
                    strokeWidth="2"
                />

                <text
                    x="80"
                    y="88"
                    fontSize="16"
                    fontWeight="700"
                    fill="#07549a"
                >
                    192.168.1.0/24
                </text>

                <text
                    x="675"
                    y="88"
                    fontSize="16"
                    fontWeight="700"
                    fill="#07549a"
                >
                    192.168.2.0/24
                </text>

                <text
                    x="500"
                    y="48"
                    textAnchor="middle"
                    fontSize="13"
                    fontWeight="600"
                    fill="#587087"
                >
                    DEFAULT GATEWAY
                </text>

                <line
                    x1="155"
                    y1="390"
                    x2="205"
                    y2="315"
                    stroke="#9bb8d1"
                    strokeWidth="5"
                    strokeLinecap="round"
                />

                <line
                    x1="285"
                    y1="390"
                    x2="205"
                    y2="315"
                    stroke="#9bb8d1"
                    strokeWidth="5"
                    strokeLinecap="round"
                />

                <line
                    x1="205"
                    y1="245"
                    x2="500"
                    y2="155"
                    stroke="#9bb8d1"
                    strokeWidth="5"
                    strokeLinecap="round"
                />

                <line
                    x1="500"
                    y1="155"
                    x2="795"
                    y2="245"
                    stroke="#9bb8d1"
                    strokeWidth="5"
                    strokeLinecap="round"
                />

                <line
                    x1="795"
                    y1="315"
                    x2="725"
                    y2="390"
                    stroke="#9bb8d1"
                    strokeWidth="5"
                    strokeLinecap="round"
                />

                <line
                    x1="795"
                    y1="315"
                    x2="855"
                    y2="390"
                    stroke="#9bb8d1"
                    strokeWidth="5"
                    strokeLinecap="round"
                />

                <path
                    d="M155 390 L205 315 L205 245 L500 155 L795 245 L795 315 L855 390"
                    fill="none"
                    stroke="transparent"
                />

                <g>
                    <rect
                        x="440"
                        y="75"
                        width="120"
                        height="80"
                        rx="10"
                        fill="#ffffff"
                        stroke="#0a6ed1"
                        strokeWidth="3"
                    />

                    <text
                        x="500"
                        y="106"
                        textAnchor="middle"
                        fontSize="18"
                        fontWeight="700"
                        fill="#07549a"
                    >
                        R1
                    </text>

                    <text
                        x="500"
                        y="127"
                        textAnchor="middle"
                        fontSize="11"
                        fill="#587087"
                    >
                        192.168.1.1
                    </text>

                    <text
                        x="500"
                        y="143"
                        textAnchor="middle"
                        fontSize="10"
                        fill="#587087"
                    >
                        Gateway
                    </text>
                </g>

                <g>
                    <rect
                        x="150"
                        y="245"
                        width="110"
                        height="70"
                        rx="10"
                        fill="#ffffff"
                        stroke="#0a6ed1"
                        strokeWidth="2.5"
                    />

                    <text
                        x="205"
                        y="274"
                        textAnchor="middle"
                        fontSize="17"
                        fontWeight="700"
                        fill="#07549a"
                    >
                        SW1
                    </text>

                    <text
                        x="205"
                        y="296"
                        textAnchor="middle"
                        fontSize="11"
                        fill="#587087"
                    >
                        Switch 1
                    </text>
                </g>

                <g>
                    <rect
                        x="740"
                        y="245"
                        width="110"
                        height="70"
                        rx="10"
                        fill="#ffffff"
                        stroke="#0a6ed1"
                        strokeWidth="2.5"
                    />

                    <text
                        x="795"
                        y="274"
                        textAnchor="middle"
                        fontSize="17"
                        fontWeight="700"
                        fill="#07549a"
                    >
                        SW2
                    </text>

                    <text
                        x="795"
                        y="296"
                        textAnchor="middle"
                        fontSize="11"
                        fill="#587087"
                    >
                        Switch 2
                    </text>
                </g>

                <g>
                    <rect
                        x="95"
                        y="390"
                        width="120"
                        height="60"
                        rx="9"
                        fill="#ffffff"
                        stroke="#0a6ed1"
                        strokeWidth="2"
                    />

                    <text
                        x="155"
                        y="416"
                        textAnchor="middle"
                        fontSize="16"
                        fontWeight="700"
                        fill="#07549a"
                    >
                        PC1
                    </text>

                    <text
                        x="155"
                        y="435"
                        textAnchor="middle"
                        fontSize="10"
                        fill="#587087"
                    >
                        192.168.1.10
                    </text>
                </g>

                <g>
                    <rect
                        x="225"
                        y="390"
                        width="120"
                        height="60"
                        rx="9"
                        fill="#ffffff"
                        stroke="#c6d7e7"
                        strokeWidth="2"
                    />

                    <text
                        x="285"
                        y="416"
                        textAnchor="middle"
                        fontSize="16"
                        fontWeight="700"
                        fill="#07549a"
                    >
                        PC2
                    </text>

                    <text
                        x="285"
                        y="435"
                        textAnchor="middle"
                        fontSize="10"
                        fill="#587087"
                    >
                        192.168.1.11
                    </text>
                </g>

                <g>
                    <rect
                        x="665"
                        y="390"
                        width="120"
                        height="60"
                        rx="9"
                        fill="#ffffff"
                        stroke="#c6d7e7"
                        strokeWidth="2"
                    />

                    <text
                        x="725"
                        y="416"
                        textAnchor="middle"
                        fontSize="16"
                        fontWeight="700"
                        fill="#07549a"
                    >
                        PC3
                    </text>

                    <text
                        x="725"
                        y="435"
                        textAnchor="middle"
                        fontSize="10"
                        fill="#587087"
                    >
                        192.168.2.10
                    </text>
                </g>

                <g>
                    <rect
                        x="795"
                        y="390"
                        width="120"
                        height="60"
                        rx="9"
                        fill="#ffffff"
                        stroke="#0a6ed1"
                        strokeWidth="2.5"
                    />

                    <text
                        x="855"
                        y="416"
                        textAnchor="middle"
                        fontSize="16"
                        fontWeight="700"
                        fill="#07549a"
                    >
                        PC4
                    </text>

                    <text
                        x="855"
                        y="435"
                        textAnchor="middle"
                        fontSize="10"
                        fill="#587087"
                    >
                        192.168.2.20
                    </text>
                </g>

                <circle
                    r="10"
                    fill="#087ee8"
                    stroke="#ffffff"
                    strokeWidth="4"
                >
                    <animateMotion
                        dur="5.5s"
                        repeatCount="indefinite"
                        calcMode="linear"
                        path="
                            M155 390 L205 315
                            M205 245 L500 155
                            M500 155 L795 245
                            M795 315 L855 390
                        "
                    />
                </circle>
            </svg>
        </div>
    );
}