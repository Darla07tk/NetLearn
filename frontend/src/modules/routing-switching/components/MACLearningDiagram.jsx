export default function MACLearningDiagram() {
    return (
        <div className="mac-learning-diagram">
            <svg
                viewBox="0 0 1200 680"
                width="100%"
                height="100%"
                preserveAspectRatio="xMidYMid meet"
            >
                {/* Main canvas */}
                <rect
                    x="20"
                    y="20"
                    width="1160"
                    height="655"
                    rx="20"
                    fill="#f8fbff"
                    stroke="#c7d9eb"
                    strokeWidth="2"
                />

                {/* Title */}
                <text
                    x="600"
                    y="58"
                    textAnchor="middle"
                    fontSize="21"
                    fontWeight="700"
                    fill="#07518f"
                >
                    MAC ADDRESS LEARNING
                </text>

                {/* PC1 → Switch */}
                <line
                    x1="245"
                    y1="190"
                    x2="470"
                    y2="300"
                    stroke="#9bb8d1"
                    strokeWidth="6"
                    strokeLinecap="round"
                />

                {/* PC2 → Switch */}
                <line
                    x1="245"
                    y1="455"
                    x2="470"
                    y2="340"
                    stroke="#9bb8d1"
                    strokeWidth="6"
                    strokeLinecap="round"
                />

                {/* Switch → PC3 */}
                <line
                    x1="730"
                    y1="300"
                    x2="955"
                    y2="190"
                    stroke="#9bb8d1"
                    strokeWidth="6"
                    strokeLinecap="round"
                />

                {/* Switch → PC4 */}
                <line
                    x1="730"
                    y1="340"
                    x2="955"
                    y2="455"
                    stroke="#9bb8d1"
                    strokeWidth="6"
                    strokeLinecap="round"
                />

                {/* PC1 */}
                <rect
                    x="95"
                    y="150"
                    width="150"
                    height="80"
                    rx="12"
                    fill="#ffffff"
                    stroke="#087ee8"
                    strokeWidth="3"
                />

                <text
                    x="170"
                    y="184"
                    textAnchor="middle"
                    fontSize="17"
                    fontWeight="700"
                    fill="#07518f"
                >
                    PC1
                </text>

                <text
                    x="170"
                    y="208"
                    textAnchor="middle"
                    fontSize="13"
                    fill="#496579"
                >
                    AA:AA:AA:AA
                </text>

                {/* PC2 */}
                <rect
                    x="95"
                    y="415"
                    width="150"
                    height="80"
                    rx="12"
                    fill="#ffffff"
                    stroke="#087ee8"
                    strokeWidth="2"
                />

                <text
                    x="170"
                    y="449"
                    textAnchor="middle"
                    fontSize="17"
                    fontWeight="700"
                    fill="#07518f"
                >
                    PC2
                </text>

                <text
                    x="170"
                    y="473"
                    textAnchor="middle"
                    fontSize="13"
                    fill="#496579"
                >
                    BB:BB:BB:BB
                </text>

                {/* PC3 */}
                <rect
                    x="955"
                    y="150"
                    width="150"
                    height="80"
                    rx="12"
                    fill="#ffffff"
                    stroke="#087ee8"
                    strokeWidth="2"
                />

                <text
                    x="1030"
                    y="184"
                    textAnchor="middle"
                    fontSize="17"
                    fontWeight="700"
                    fill="#07518f"
                >
                    PC3
                </text>

                <text
                    x="1030"
                    y="208"
                    textAnchor="middle"
                    fontSize="13"
                    fill="#496579"
                >
                    CC:CC:CC:CC
                </text>

                {/* PC4 */}
                <rect
                    x="955"
                    y="415"
                    width="150"
                    height="80"
                    rx="12"
                    fill="#ffffff"
                    stroke="#087ee8"
                    strokeWidth="3"
                />

                <text
                    x="1030"
                    y="449"
                    textAnchor="middle"
                    fontSize="17"
                    fontWeight="700"
                    fill="#07518f"
                >
                    PC4
                </text>

                <text
                    x="1030"
                    y="473"
                    textAnchor="middle"
                    fontSize="13"
                    fill="#496579"
                >
                    DD:DD:DD:DD
                </text>

                {/* Switch */}
                <rect
                    x="470"
                    y="270"
                    width="260"
                    height="100"
                    rx="15"
                    fill="#ffffff"
                    stroke="#087ee8"
                    strokeWidth="3"
                />

                <text
                    x="600"
                    y="312"
                    textAnchor="middle"
                    fontSize="20"
                    fontWeight="700"
                    fill="#07518f"
                >
                    SWITCH
                </text>

                <text
                    x="600"
                    y="338"
                    textAnchor="middle"
                    fontSize="13"
                    fill="#496579"
                >
                    MAC Learning
                </text>

                {/* Switch ports */}
                <circle
                    cx="470"
                    cy="300"
                    r="6"
                    fill="#087ee8"
                />

                <circle
                    cx="470"
                    cy="340"
                    r="6"
                    fill="#087ee8"
                />

                <circle
                    cx="730"
                    cy="300"
                    r="6"
                    fill="#087ee8"
                />

                <circle
                    cx="730"
                    cy="340"
                    r="6"
                    fill="#087ee8"
                />

                {/* MAC Address Table */}
                <rect
                    x="390"
                    y="490"
                    width="420"
                    height="170"
                    rx="14"
                    fill="#ffffff"
                    stroke="#c7d9eb"
                    strokeWidth="2"
                />

                <text
                    x="600"
                    y="516"
                    textAnchor="middle"
                    fontSize="15"
                    fontWeight="700"
                    fill="#07518f"
                >
                    MAC ADDRESS TABLE
                </text>

                {/* Header */}
                <rect
                    x="410"
                    y="528"
                    width="380"
                    height="25"
                    fill="#eef6fd"
                />

                <text
                    x="450"
                    y="545"
                    fontSize="11"
                    fontWeight="700"
                    fill="#496579"
                >
                    TYPE
                </text>

                <text
                    x="575"
                    y="545"
                    fontSize="11"
                    fontWeight="700"
                    fill="#496579"
                >
                    PORT
                </text>

                <text
                    x="665"
                    y="545"
                    fontSize="11"
                    fontWeight="700"
                    fill="#496579"
                >
                    MAC ADDRESS
                </text>

                {/* Row 1 */}
                <text
                    x="450"
                    y="570"
                    fontSize="12"
                    fill="#07518f"
                >
                    Dynamic
                </text>

                <text
                    x="580"
                    y="570"
                    fontSize="12"
                    fontWeight="700"
                    fill="#07518f"
                >
                    Fa0/1
                </text>

                <text
                    x="665"
                    y="570"
                    fontSize="12"
                    fill="#07518f"
                >
                    AA:AA:AA:AA
                </text>

                {/* Row 2 */}
                <text
                    x="450"
                    y="595"
                    fontSize="12"
                    fill="#07518f"
                >
                    Dynamic
                </text>

                <text
                    x="580"
                    y="595"
                    fontSize="12"
                    fontWeight="700"
                    fill="#07518f"
                >
                    Fa0/2
                </text>

                <text
                    x="665"
                    y="595"
                    fontSize="12"
                    fill="#07518f"
                >
                    BB:BB:BB:BB
                </text>

                {/* Row 3 */}
                <text
                    x="450"
                    y="620"
                    fontSize="12"
                    fill="#07518f"
                >
                    Dynamic
                </text>

                <text
                    x="580"
                    y="620"
                    fontSize="12"
                    fontWeight="700"
                    fill="#07518f"
                >
                    Fa0/3
                </text>

                <text
                    x="665"
                    y="620"
                    fontSize="12"
                    fill="#07518f"
                >
                    CC:CC:CC:CC
                </text>

                {/* Row 4 */}
                <text
                    x="450"
                    y="645"
                    fontSize="12"
                    fill="#07518f"
                >
                    Dynamic
                </text>

                <text
                    x="580"
                    y="645"
                    fontSize="12"
                    fontWeight="700"
                    fill="#07518f"
                >
                    Fa0/4
                </text>

                <text
                    x="665"
                    y="645"
                    fontSize="12"
                    fill="#07518f"
                >
                    DD:DD:DD:DD
                </text>

                {/* PC1 → SWITCH → PC4 */}
                <circle
                    r="9"
                    fill="#087ee8"
                    stroke="#ffffff"
                    strokeWidth="3"
                >
                    <animateMotion
                        dur="4s"
                        repeatCount="indefinite"
                        calcMode="linear"
                        path="
                            M245 190
                            L470 300
                            M730 340
                            L955 455
                        "
                    />

                    <animate
                        attributeName="opacity"
                        values="1;0;1"
                        keyTimes="0;0.50;0.51"
                        dur="4s"
                        repeatCount="indefinite"
                        calcMode="discrete"
                    />
                </circle>
            </svg>
        </div>
    );
}