export default function FrameForwardingDiagram() {
    return (
        <div className="frame-forwarding-diagram">
            <svg
                viewBox="0 0 1200 760"
                width="100%"
                height="100%"
                preserveAspectRatio="xMidYMid meet"
            >
                {/* =====================================================
                    MAIN CANVAS
                ====================================================== */}

                <rect
                    x="20"
                    y="20"
                    width="1160"
                    height="720"
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
                    fontSize="22"
                    fontWeight="700"
                    fill="#07518f"
                >
                    FRAME FORWARDING
                </text>

                {/* =====================================================
                    NETWORK
                ====================================================== */}

                {/* PC1 → SWITCH */}
                <line
                    x1="250"
                    y1="180"
                    x2="470"
                    y2="285"
                    stroke="#9bb8d1"
                    strokeWidth="6"
                    strokeLinecap="round"
                />

                {/* SWITCH → PC2 */}
                <line
                    x1="730"
                    y1="285"
                    x2="950"
                    y2="180"
                    stroke="#9bb8d1"
                    strokeWidth="6"
                    strokeLinecap="round"
                />

                {/* PC1 */}
                <rect
                    x="100"
                    y="140"
                    width="150"
                    height="80"
                    rx="12"
                    fill="#ffffff"
                    stroke="#087ee8"
                    strokeWidth="3"
                />

                <text
                    x="175"
                    y="174"
                    textAnchor="middle"
                    fontSize="17"
                    fontWeight="700"
                    fill="#07518f"
                >
                    PC1
                </text>

                <text
                    x="175"
                    y="198"
                    textAnchor="middle"
                    fontSize="12"
                    fill="#496579"
                >
                    Source
                </text>

                {/* PC2 */}
                <rect
                    x="950"
                    y="140"
                    width="150"
                    height="80"
                    rx="12"
                    fill="#ffffff"
                    stroke="#087ee8"
                    strokeWidth="3"
                />

                <text
                    x="1025"
                    y="174"
                    textAnchor="middle"
                    fontSize="17"
                    fontWeight="700"
                    fill="#07518f"
                >
                    PC2
                </text>

                <text
                    x="1025"
                    y="198"
                    textAnchor="middle"
                    fontSize="12"
                    fill="#496579"
                >
                    Destination
                </text>

                {/* SWITCH */}
                <rect
                    x="470"
                    y="235"
                    width="260"
                    height="100"
                    rx="15"
                    fill="#ffffff"
                    stroke="#087ee8"
                    strokeWidth="3"
                />

                <text
                    x="600"
                    y="276"
                    textAnchor="middle"
                    fontSize="20"
                    fontWeight="700"
                    fill="#07518f"
                >
                    SWITCH
                </text>

                <text
                    x="600"
                    y="302"
                    textAnchor="middle"
                    fontSize="13"
                    fill="#496579"
                >
                    Store-and-Forward
                </text>

                {/* Switch ports */}
                <circle
                    cx="470"
                    cy="285"
                    r="6"
                    fill="#087ee8"
                />

                <circle
                    cx="730"
                    cy="285"
                    r="6"
                    fill="#087ee8"
                />

                {/* =====================================================
                    ETHERNET FRAME
                ====================================================== */}

                <rect
                    x="285"
                    y="365"
                    width="630"
                    height="80"
                    rx="14"
                    fill="#ffffff"
                    stroke="#c7d9eb"
                    strokeWidth="2"
                />

                <text
                    x="600"
                    y="389"
                    textAnchor="middle"
                    fontSize="14"
                    fontWeight="700"
                    fill="#07518f"
                >
                    ETHERNET FRAME
                </text>

                {/* Header */}
                <rect
                    x="330"
                    y="402"
                    width="125"
                    height="27"
                    rx="5"
                    fill="#eef6fd"
                    stroke="#087ee8"
                    strokeWidth="1.5"
                />

                <text
                    x="392"
                    y="420"
                    textAnchor="middle"
                    fontSize="10"
                    fontWeight="700"
                    fill="#07518f"
                >
                    HEADER
                </text>

                {/* Data */}
                <rect
                    x="465"
                    y="402"
                    width="125"
                    height="27"
                    rx="5"
                    fill="#eef6fd"
                    stroke="#087ee8"
                    strokeWidth="1.5"
                />

                <text
                    x="527"
                    y="420"
                    textAnchor="middle"
                    fontSize="10"
                    fontWeight="700"
                    fill="#07518f"
                >
                    DATA
                </text>

                {/* Payload */}
                <rect
                    x="600"
                    y="402"
                    width="125"
                    height="27"
                    rx="5"
                    fill="#eef6fd"
                    stroke="#087ee8"
                    strokeWidth="1.5"
                />

                <text
                    x="662"
                    y="420"
                    textAnchor="middle"
                    fontSize="10"
                    fontWeight="700"
                    fill="#07518f"
                >
                    PAYLOAD
                </text>

                {/* FCS */}
                <rect
                    x="735"
                    y="402"
                    width="125"
                    height="27"
                    rx="5"
                    fill="#eef6fd"
                    stroke="#087ee8"
                    strokeWidth="1.5"
                />

                <text
                    x="797"
                    y="420"
                    textAnchor="middle"
                    fontSize="10"
                    fontWeight="700"
                    fill="#07518f"
                >
                    FCS
                </text>

                {/* =====================================================
                    VALID FRAME PROCESS
                ====================================================== */}

                <rect
                    x="95"
                    y="480"
                    width="500"
                    height="175"
                    rx="15"
                    fill="#ffffff"
                    stroke="#c7d9eb"
                    strokeWidth="2"
                />

                <text
                    x="345"
                    y="510"
                    textAnchor="middle"
                    fontSize="15"
                    fontWeight="700"
                    fill="#07518f"
                >
                    VALID FRAME
                </text>

                {/* CRC 1 */}
                <rect
                    x="125"
                    y="535"
                    width="155"
                    height="50"
                    rx="8"
                    fill="#eef6fd"
                    stroke="#087ee8"
                    strokeWidth="1.5"
                />

                <text
                    x="202"
                    y="556"
                    textAnchor="middle"
                    fontSize="10"
                    fill="#496579"
                >
                    RECEIVED
                </text>

                <text
                    x="202"
                    y="574"
                    textAnchor="middle"
                    fontSize="13"
                    fontWeight="700"
                    fill="#07518f"
                >
                    123456789
                </text>

                {/* Equal */}
                <text
                    x="300"
                    y="566"
                    textAnchor="middle"
                    fontSize="22"
                    fontWeight="700"
                    fill="#07518f"
                >
                    =
                </text>

                {/* CRC 2 */}
                <rect
                    x="320"
                    y="535"
                    width="155"
                    height="50"
                    rx="8"
                    fill="#eef6fd"
                    stroke="#087ee8"
                    strokeWidth="1.5"
                />

                <text
                    x="397"
                    y="556"
                    textAnchor="middle"
                    fontSize="10"
                    fill="#496579"
                >
                    CALCULATED
                </text>

                <text
                    x="397"
                    y="574"
                    textAnchor="middle"
                    fontSize="13"
                    fontWeight="700"
                    fill="#07518f"
                >
                    123456789
                </text>

                {/* Forwarded */}
                <rect
                    x="145"
                    y="605"
                    width="400"
                    height="30"
                    rx="7"
                    fill="#ffffff"
                    stroke="#087ee8"
                    strokeWidth="1.5"
                />

                <text
                    x="345"
                    y="625"
                    textAnchor="middle"
                    fontSize="12"
                    fontWeight="700"
                    fill="#07518f"
                >
                    FORWARDED TO PC2
                </text>

                {/* =====================================================
                    INVALID FRAME PROCESS
                ====================================================== */}

                <rect
                    x="605"
                    y="480"
                    width="500"
                    height="175"
                    rx="15"
                    fill="#ffffff"
                    stroke="#c7d9eb"
                    strokeWidth="2"
                />

                <text
                    x="855"
                    y="510"
                    textAnchor="middle"
                    fontSize="15"
                    fontWeight="700"
                    fill="#07518f"
                >
                    CORRUPTED FRAME
                </text>

                {/* CRC 1 */}
                <rect
                    x="635"
                    y="535"
                    width="155"
                    height="50"
                    rx="8"
                    fill="#eef6fd"
                    stroke="#087ee8"
                    strokeWidth="1.5"
                />

                <text
                    x="712"
                    y="556"
                    textAnchor="middle"
                    fontSize="10"
                    fill="#496579"
                >
                    RECEIVED
                </text>

                <text
                    x="712"
                    y="574"
                    textAnchor="middle"
                    fontSize="13"
                    fontWeight="700"
                    fill="#07518f"
                >
                    123456789
                </text>

                {/* Not Equal */}
                <text
                    x="810"
                    y="566"
                    textAnchor="middle"
                    fontSize="22"
                    fontWeight="700"
                    fill="#07518f"
                >
                    ≠
                </text>

                {/* CRC 2 */}
                <rect
                    x="830"
                    y="535"
                    width="155"
                    height="50"
                    rx="8"
                    fill="#eef6fd"
                    stroke="#087ee8"
                    strokeWidth="1.5"
                />

                <text
                    x="907"
                    y="556"
                    textAnchor="middle"
                    fontSize="10"
                    fill="#496579"
                >
                    CALCULATED
                </text>

                <text
                    x="907"
                    y="574"
                    textAnchor="middle"
                    fontSize="13"
                    fontWeight="700"
                    fill="#07518f"
                >
                    987654321
                </text>

                {/* Discarded */}
                <rect
                    x="655"
                    y="605"
                    width="400"
                    height="30"
                    rx="7"
                    fill="#ffffff"
                    stroke="#c7d9eb"
                    strokeWidth="1.5"
                />

                <text
                    x="855"
                    y="625"
                    textAnchor="middle"
                    fontSize="12"
                    fontWeight="700"
                    fill="#07518f"
                >
                    FRAME DISCARDED
                </text>

                {/* =====================================================
                    SINGLE DATA DOT
                    PC1 EDGE → SWITCH LEFT EDGE
                    SWITCH RIGHT EDGE → PC2 EDGE

                    IMPORTANT:
                    The dot NEVER travels through the switch.
                    At the switch it instantly changes from
                    (470,285) to (730,285).
                ====================================================== */}

                <circle
                    cx="250"
                    cy="180"
                    r="10"
                    fill="#087ee8"
                    stroke="#ffffff"
                    strokeWidth="3"
                >
                    {/* Horizontal position */}
                    <animate
                        attributeName="cx"
                        values="250;470;730;950"
                        keyTimes="0;0.45;0.45;1"
                        dur="8s"
                        repeatCount="indefinite"
                        calcMode="linear"
                    />

                    {/* Vertical position */}
                    <animate
                        attributeName="cy"
                        values="180;285;285;180"
                        keyTimes="0;0.45;0.45;1"
                        dur="8s"
                        repeatCount="indefinite"
                        calcMode="linear"
                    />
                </circle>

                {/* =====================================================
                    PROCESS LABEL
                ====================================================== */}

                <text
                    x="600"
                    y="350"
                    textAnchor="middle"
                    fontSize="11"
                    fill="#496579"
                >
                    COMPLETE FRAME RECEIVED
                </text>
            </svg>
        </div>
    );
}