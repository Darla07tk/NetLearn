export default function StaticRoutingDiagram() {
    return (
        <div className="routing-simulation static-routing-diagram">

            <svg
                viewBox="0 0 1200 620"
                width="100%"
                height="100%"
                preserveAspectRatio="xMidYMid meet"
            >

                <rect
                    x="20"
                    y="20"
                    width="1160"
                    height="580"
                    rx="16"
                    fill="#f8fbff"
                    stroke="#d4e0ec"
                    strokeWidth="2"
                />

                <text
                    x="600"
                    y="55"
                    textAnchor="middle"
                    fill="#164c78"
                    fontSize="19"
                    fontWeight="700"
                >
                    STATIC ROUTING
                </text>


                {/* LEFT NETWORK */}

                <rect
                    x="55"
                    y="105"
                    width="330"
                    height="430"
                    rx="14"
                    fill="#ffffff"
                    stroke="#bfd4e6"
                    strokeWidth="2"
                />

                <text
                    x="80"
                    y="138"
                    fill="#164c78"
                    fontSize="15"
                    fontWeight="700"
                >
                    NETWORK 1
                </text>

                <text
                    x="80"
                    y="158"
                    fill="#587087"
                    fontSize="11"
                >
                    192.168.1.0/24
                </text>


                {/* RIGHT NETWORK */}

                <rect
                    x="815"
                    y="105"
                    width="330"
                    height="430"
                    rx="14"
                    fill="#ffffff"
                    stroke="#bfd4e6"
                    strokeWidth="2"
                />

                <text
                    x="840"
                    y="138"
                    fill="#164c78"
                    fontSize="15"
                    fontWeight="700"
                >
                    NETWORK 2
                </text>

                <text
                    x="840"
                    y="158"
                    fill="#587087"
                    fontSize="11"
                >
                    192.168.2.0/24
                </text>


                {/* CONNECTION LINES */}

                <line
                    x1="165"
                    y1="455"
                    x2="220"
                    y2="345"
                    stroke="#9bb8d1"
                    strokeWidth="5"
                    strokeLinecap="round"
                />

                <line
                    x1="305"
                    y1="455"
                    x2="220"
                    y2="345"
                    stroke="#9bb8d1"
                    strokeWidth="5"
                    strokeLinecap="round"
                />

                <line
                    x1="220"
                    y1="285"
                    x2="465"
                    y2="160"
                    stroke="#9bb8d1"
                    strokeWidth="5"
                    strokeLinecap="round"
                />

                <line
                    x1="585"
                    y1="160"
                    x2="615"
                    y2="160"
                    stroke="#9bb8d1"
                    strokeWidth="5"
                    strokeLinecap="round"
                />

                <line
                    x1="735"
                    y1="160"
                    x2="975"
                    y2="285"
                    stroke="#9bb8d1"
                    strokeWidth="5"
                    strokeLinecap="round"
                />

                <line
                    x1="975"
                    y1="345"
                    x2="895"
                    y2="455"
                    stroke="#9bb8d1"
                    strokeWidth="5"
                    strokeLinecap="round"
                />

                <line
                    x1="975"
                    y1="345"
                    x2="1060"
                    y2="455"
                    stroke="#9bb8d1"
                    strokeWidth="5"
                    strokeLinecap="round"
                />


                {/* ROUTING PATH */}

                <path
                    d="M165 455
                       L220 345
                       L220 285
                       L465 160
                       L585 160
                       L615 160
                       L735 160
                       L975 285
                       L975 345
                       L1060 455"
                    fill="none"
                    stroke="transparent"
                />


                {/* SINGLE DATA DOT */}

                <circle
                    r="8"
                    fill="#087ee8"
                    stroke="#ffffff"
                    strokeWidth="3"
                >
                    <animateMotion
                        dur="6s"
                        repeatCount="indefinite"
                        calcMode="linear"
                        path="M165 455
                              L220 345
                              L220 285
                              L465 160
                              L585 160
                              L615 160
                              L735 160
                              L975 285
                              L975 345
                              L1060 455"
                    />
                </circle>


                {/* DEVICES */}

                <rect
                    x="170"
                    y="285"
                    width="100"
                    height="60"
                    rx="9"
                    fill="#ffffff"
                    stroke="#087ee8"
                    strokeWidth="2"
                />

                <text
                    x="220"
                    y="311"
                    textAnchor="middle"
                    fill="#07549a"
                    fontSize="14"
                    fontWeight="700"
                >
                    SW1
                </text>

                <text
                    x="220"
                    y="331"
                    textAnchor="middle"
                    fill="#587087"
                    fontSize="10"
                >
                    Switch
                </text>


                <rect
                    x="105"
                    y="455"
                    width="120"
                    height="65"
                    rx="9"
                    fill="#ffffff"
                    stroke="#087ee8"
                    strokeWidth="2"
                />

                <text
                    x="165"
                    y="482"
                    textAnchor="middle"
                    fill="#07549a"
                    fontSize="14"
                    fontWeight="700"
                >
                    PC1
                </text>

                <text
                    x="165"
                    y="502"
                    textAnchor="middle"
                    fill="#587087"
                    fontSize="10"
                >
                    192.168.1.10
                </text>


                <rect
                    x="265"
                    y="455"
                    width="80"
                    height="65"
                    rx="9"
                    fill="#ffffff"
                    stroke="#c5d7e7"
                    strokeWidth="2"
                />

                <text
                    x="305"
                    y="482"
                    textAnchor="middle"
                    fill="#07549a"
                    fontSize="13"
                    fontWeight="700"
                >
                    PC2
                </text>

                <text
                    x="305"
                    y="502"
                    textAnchor="middle"
                    fill="#587087"
                    fontSize="9"
                >
                    192.168.1.11
                </text>


                <rect
                    x="465"
                    y="125"
                    width="120"
                    height="70"
                    rx="10"
                    fill="#ffffff"
                    stroke="#087ee8"
                    strokeWidth="2"
                />

                <text
                    x="525"
                    y="153"
                    textAnchor="middle"
                    fill="#07549a"
                    fontSize="15"
                    fontWeight="700"
                >
                    R1
                </text>

                <text
                    x="525"
                    y="173"
                    textAnchor="middle"
                    fill="#587087"
                    fontSize="10"
                >
                    192.168.1.1
                </text>

                <text
                    x="525"
                    y="188"
                    textAnchor="middle"
                    fill="#587087"
                    fontSize="9"
                >
                    Static Route
                </text>


                <rect
                    x="615"
                    y="125"
                    width="120"
                    height="70"
                    rx="10"
                    fill="#ffffff"
                    stroke="#087ee8"
                    strokeWidth="2"
                />

                <text
                    x="675"
                    y="153"
                    textAnchor="middle"
                    fill="#07549a"
                    fontSize="15"
                    fontWeight="700"
                >
                    R2
                </text>

                <text
                    x="675"
                    y="173"
                    textAnchor="middle"
                    fill="#587087"
                    fontSize="10"
                >
                    192.168.2.1
                </text>

                <text
                    x="675"
                    y="188"
                    textAnchor="middle"
                    fill="#587087"
                    fontSize="9"
                >
                    Static Route
                </text>


                <rect
                    x="925"
                    y="285"
                    width="100"
                    height="60"
                    rx="9"
                    fill="#ffffff"
                    stroke="#087ee8"
                    strokeWidth="2"
                />

                <text
                    x="975"
                    y="311"
                    textAnchor="middle"
                    fill="#07549a"
                    fontSize="14"
                    fontWeight="700"
                >
                    SW2
                </text>

                <text
                    x="975"
                    y="331"
                    textAnchor="middle"
                    fill="#587087"
                    fontSize="10"
                >
                    Switch
                </text>


                <rect
                    x="855"
                    y="455"
                    width="80"
                    height="65"
                    rx="9"
                    fill="#ffffff"
                    stroke="#c5d7e7"
                    strokeWidth="2"
                />

                <text
                    x="895"
                    y="482"
                    textAnchor="middle"
                    fill="#07549a"
                    fontSize="13"
                    fontWeight="700"
                >
                    PC3
                </text>

                <text
                    x="895"
                    y="502"
                    textAnchor="middle"
                    fill="#587087"
                    fontSize="9"
                >
                    192.168.2.10
                </text>


                <rect
                    x="1000"
                    y="455"
                    width="120"
                    height="65"
                    rx="9"
                    fill="#ffffff"
                    stroke="#087ee8"
                    strokeWidth="2"
                />

                <text
                    x="1060"
                    y="482"
                    textAnchor="middle"
                    fill="#07549a"
                    fontSize="14"
                    fontWeight="700"
                >
                    PC4
                </text>

                <text
                    x="1060"
                    y="502"
                    textAnchor="middle"
                    fill="#587087"
                    fontSize="10"
                >
                    192.168.2.20
                </text>


                {/* MANUAL CONFIGURATION */}

                <rect
                    x="55"
                    y="540"
                    width="1090"
                    height="70"
                    rx="10"
                    fill="#ffffff"
                    stroke="#c8d9e8"
                    strokeWidth="2"
                />

                <text
                    x="80"
                    y="558"
                    fill="#164c78"
                    fontSize="15"
                    fontWeight="700"
                >
                    To Configure Manually
                </text>

                <text
                    x="80"
                    y="580"
                    fill="#07549a"
                    fontSize="13"
                    fontFamily="monospace"
                >
                    Example:
                </text>

                <text
                    x="165"
                    y="580"
                    fill="#07549a"
                    fontSize="13"
                    fontFamily="monospace"
                >
                    R1(config)# ip route 192.168.2.0 255.255.255.0 10.0.0.2
                </text>

                <text
                    x="165"
                    y="600"
                    fill="#07549a"
                    fontSize="13"
                    fontFamily="monospace"
                >
                    R2(config)# ip route 192.168.1.0 255.255.255.0 10.0.0.1
                </text>

            </svg>

        </div>
    );
}