export default function DynamicRoutingDiagram() {
    return (
        <div className="routing-simulation">

            <svg
                viewBox="0 0 1200 650"
                width="100%"
                height="100%"
                preserveAspectRatio="xMidYMid meet"
            >

                {/* MAIN DIAGRAM AREA */}

                <rect
                    x="20"
                    y="20"
                    width="1160"
                    height="610"
                    rx="16"
                    fill="#f8fbff"
                    stroke="#d4e0ec"
                    strokeWidth="2"
                />

                <text
                    x="600"
                    y="52"
                    textAnchor="middle"
                    fill="#164c78"
                    fontSize="18"
                    fontWeight="700"
                >
                    DYNAMIC ROUTING
                </text>

                <text
                    x="600"
                    y="75"
                    textAnchor="middle"
                    fill="#587087"
                    fontSize="12"
                >
                    Automatic route discovery and calculation
                </text>


                {/* =========================
                    ROUTER CONNECTION LINES
                   ========================= */}

                <line
                    x1="300"
                    y1="260"
                    x2="480"
                    y2="165"
                    stroke="#9bb8d1"
                    strokeWidth="5"
                    strokeLinecap="round"
                />

                <line
                    x1="600"
                    y1="165"
                    x2="780"
                    y2="260"
                    stroke="#9bb8d1"
                    strokeWidth="5"
                    strokeLinecap="round"
                />

                <line
                    x1="300"
                    y1="330"
                    x2="480"
                    y2="425"
                    stroke="#9bb8d1"
                    strokeWidth="5"
                    strokeLinecap="round"
                />

                <line
                    x1="600"
                    y1="425"
                    x2="780"
                    y2="330"
                    stroke="#9bb8d1"
                    strokeWidth="5"
                    strokeLinecap="round"
                />


                {/* =========================
                    R1
                   ========================= */}

                <rect
                    x="180"
                    y="260"
                    width="120"
                    height="70"
                    rx="10"
                    fill="#ffffff"
                    stroke="#087ee8"
                    strokeWidth="2"
                />

                <text
                    x="240"
                    y="290"
                    textAnchor="middle"
                    fill="#164c78"
                    fontSize="15"
                    fontWeight="700"
                >
                    R1
                </text>

                <text
                    x="240"
                    y="312"
                    textAnchor="middle"
                    fill="#587087"
                    fontSize="10"
                >
                    10.0.0.1
                </text>


                {/* =========================
                    R2
                   ========================= */}

                <rect
                    x="480"
                    y="130"
                    width="120"
                    height="70"
                    rx="10"
                    fill="#ffffff"
                    stroke="#087ee8"
                    strokeWidth="2"
                />

                <text
                    x="540"
                    y="160"
                    textAnchor="middle"
                    fill="#164c78"
                    fontSize="15"
                    fontWeight="700"
                >
                    R2
                </text>

                <text
                    x="540"
                    y="182"
                    textAnchor="middle"
                    fill="#587087"
                    fontSize="10"
                >
                    20.0.0.2
                </text>


                {/* =========================
                    R3
                   ========================= */}

                <rect
                    x="780"
                    y="260"
                    width="120"
                    height="70"
                    rx="10"
                    fill="#ffffff"
                    stroke="#087ee8"
                    strokeWidth="2"
                />

                <text
                    x="840"
                    y="290"
                    textAnchor="middle"
                    fill="#164c78"
                    fontSize="15"
                    fontWeight="700"
                >
                    R3
                </text>

                <text
                    x="840"
                    y="312"
                    textAnchor="middle"
                    fill="#587087"
                    fontSize="10"
                >
                    30.0.0.3
                </text>


                {/* =========================
                    R4
                   ========================= */}

                <rect
                    x="480"
                    y="390"
                    width="120"
                    height="70"
                    rx="10"
                    fill="#ffffff"
                    stroke="#087ee8"
                    strokeWidth="2"
                />

                <text
                    x="540"
                    y="420"
                    textAnchor="middle"
                    fill="#164c78"
                    fontSize="15"
                    fontWeight="700"
                >
                    R4
                </text>

                <text
                    x="540"
                    y="442"
                    textAnchor="middle"
                    fill="#587087"
                    fontSize="10"
                >
                    40.0.0.4
                </text>


                {/* =========================
                    MOVING DATA PATH
                   ========================= */}

                <circle
                    r="8"
                    fill="#087ee8"
                    stroke="#ffffff"
                    strokeWidth="3"
                >

                    <animateMotion
                        dur="5s"
                        repeatCount="indefinite"
                        calcMode="linear"
                        path="
                            M300 260
                            L480 165
                            L600 165
                            L780 260
                        "
                    />

                    <animate
                        attributeName="opacity"
                        values="1;1;0;0;1;1;0"
                        keyTimes="
                            0;
                            0.386;
                            0.386;
                            0.614;
                            0.614;
                            0.999;
                            1
                        "
                        dur="5s"
                        repeatCount="indefinite"
                        calcMode="discrete"
                    />

                </circle>


                {/* =========================
                    ROUTING TABLE
                   ========================= */}

                <rect
                    x="930"
                    y="125"
                    width="220"
                    height="300"
                    rx="12"
                    fill="#ffffff"
                    stroke="#c8d9e8"
                    strokeWidth="2"
                />

                <text
                    x="952"
                    y="157"
                    fill="#164c78"
                    fontSize="15"
                    fontWeight="700"
                >
                    R3 ROUTING TABLE
                </text>


                {/* TABLE HEADER */}

                <rect
                    x="950"
                    y="175"
                    width="180"
                    height="36"
                    fill="#edf6fd"
                    stroke="#c8d9e8"
                />

                <text
                    x="958"
                    y="198"
                    fill="#35546f"
                    fontSize="9"
                    fontWeight="700"
                >
                    NETWORK
                </text>

                <text
                    x="1030"
                    y="198"
                    fill="#35546f"
                    fontSize="9"
                    fontWeight="700"
                >
                    NEXT HOP
                </text>

                <text
                    x="1098"
                    y="198"
                    fill="#35546f"
                    fontSize="9"
                    fontWeight="700"
                >
                    METRIC
                </text>


                {/* 10.0.0.0/8 */}

                <text
                    x="958"
                    y="234"
                    fill="#35546f"
                    fontSize="9"
                >
                    10.0.0.0/8
                </text>

                <text
                    x="1030"
                    y="234"
                    fill="#35546f"
                    fontSize="9"
                >
                    21.0.0.2
                </text>

                <text
                    x="1098"
                    y="234"
                    fill="#35546f"
                    fontSize="9"
                >
                    2
                </text>

                <line
                    x1="950"
                    y1="248"
                    x2="1130"
                    y2="248"
                    stroke="#d5e0ea"
                />


                {/* 20.0.0.0/8 */}

                <text
                    x="958"
                    y="272"
                    fill="#35546f"
                    fontSize="9"
                >
                    20.0.0.0/8
                </text>

                <text
                    x="1030"
                    y="272"
                    fill="#35546f"
                    fontSize="9"
                >
                    21.0.0.2
                </text>

                <text
                    x="1098"
                    y="272"
                    fill="#35546f"
                    fontSize="9"
                >
                    1
                </text>

                <line
                    x1="950"
                    y1="286"
                    x2="1130"
                    y2="286"
                    stroke="#d5e0ea"
                />


                {/* 30.0.0.0/8 */}

                <text
                    x="958"
                    y="310"
                    fill="#35546f"
                    fontSize="9"
                >
                    30.0.0.0/8
                </text>

                <text
                    x="1030"
                    y="310"
                    fill="#35546f"
                    fontSize="9"
                >
                    Direct
                </text>

                <text
                    x="1098"
                    y="310"
                    fill="#35546f"
                    fontSize="9"
                >
                    0
                </text>

                <line
                    x1="950"
                    y1="324"
                    x2="1130"
                    y2="324"
                    stroke="#d5e0ea"
                />


                {/* 40.0.0.0/8 */}

                <text
                    x="958"
                    y="348"
                    fill="#35546f"
                    fontSize="9"
                >
                    40.0.0.0/8
                </text>

                <text
                    x="1030"
                    y="348"
                    fill="#35546f"
                    fontSize="9"
                >
                    31.0.0.4
                </text>

                <text
                    x="1098"
                    y="348"
                    fill="#35546f"
                    fontSize="9"
                >
                    1
                </text>


                <text
                    x="952"
                    y="390"
                    fill="#087ee8"
                    fontSize="10"
                    fontWeight="700"
                >
                    Protocol: OSPF
                </text>


                {/* =========================
                    ROUTE LEARNING PROCESS
                   ========================= */}

                <rect
                    x="55"
                    y="490"
                    width="1095"
                    height="110"
                    rx="12"
                    fill="#ffffff"
                    stroke="#c8d9e8"
                    strokeWidth="2"
                />

                <text
                    x="80"
                    y="518"
                    fill="#164c78"
                    fontSize="14"
                    fontWeight="700"
                >
                    ROUTE LEARNING PROCESS
                </text>


                <text
                    x="80"
                    y="545"
                    fill="#35546f"
                    fontSize="11"
                >
                    1. Neighbor Discovery
                </text>

                <text
                    x="80"
                    y="570"
                    fill="#35546f"
                    fontSize="11"
                >
                    2. Route Advertisement
                </text>

                <text
                    x="80"
                    y="595"
                    fill="#35546f"
                    fontSize="11"
                >
                    3. Network Information Exchange
                </text>


                <text
                    x="390"
                    y="545"
                    fill="#35546f"
                    fontSize="11"
                >
                    4. Metric Calculation
                </text>

                <text
                    x="390"
                    y="570"
                    fill="#35546f"
                    fontSize="11"
                >
                    5. Best Path Selection
                </text>

                <text
                    x="390"
                    y="595"
                    fill="#35546f"
                    fontSize="11"
                >
                    6. Routing Table Update
                </text>


                <text
                    x="720"
                    y="545"
                    fill="#164c78"
                    fontSize="11"
                    fontWeight="700"
                >
                    SELECTED PATH
                </text>

                <text
                    x="720"
                    y="570"
                    fill="#087ee8"
                    fontSize="13"
                    fontWeight="700"
                >
                    R1 → R2 → R3
                </text>

                <text
                    x="720"
                    y="592"
                    fill="#587087"
                    fontSize="11"
                >
                    Protocol: OSPF
                </text>

            </svg>

        </div>
    );
}