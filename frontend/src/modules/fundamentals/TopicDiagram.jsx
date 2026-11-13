import React from "react";

const blue = "#1769aa";
const lightBlue = "#9bbbd3";
const dark = "#24445c";

function Node({ x, y, label }) {
    return (
        <>
            <circle cx={x} cy={y} r="20" fill="white" stroke={blue} strokeWidth="2" />
            <text x={x} y={y + 5} textAnchor="middle" fill={dark} fontSize="12">
                {label}
            </text>
        </>
    );
}

function MovingDot({ pathId, begin = "0s", dur = "5s" }) {
    return (
        <circle r="7" fill={blue}>
            <animateMotion dur={dur} begin={begin} repeatCount="indefinite">
                <mpath href={`#${pathId}`} />
            </animateMotion>
        </circle>
    );
}

function TopicDiagram({ type }) {
    if (type === "network") {
        return (
            <div className="topic-svg-container">
                <svg viewBox="0 0 800 300" width="100%" height="300">
                    <line x1="400" y1="150" x2="140" y2="70" stroke={lightBlue} strokeWidth="3" />
                    <line x1="400" y1="150" x2="140" y2="230" stroke={lightBlue} strokeWidth="3" />
                    <line x1="400" y1="150" x2="660" y2="70" stroke={lightBlue} strokeWidth="3" />
                    <line x1="400" y1="150" x2="660" y2="230" stroke={lightBlue} strokeWidth="3" />

                    <Node x="140" y="70" label="PC 1" />
                    <Node x="140" y="230" label="PC 2" />
                    <Node x="660" y="70" label="PC 3" />
                    <Node x="660" y="230" label="PC 4" />

                    <rect x="340" y="120" width="120" height="60" rx="6" fill="white" stroke={blue} strokeWidth="2" />
                    <text x="400" y="156" textAnchor="middle" fill={dark} fontSize="16">
                        Network
                    </text>
                </svg>
            </div>
        );
    }

    if (type === "communication") {
        return (
            <div className="topic-svg-container">
                <svg viewBox="0 0 800 240" width="100%" height="240">
                    <rect x="90" y="85" width="140" height="60" fill="white" stroke={blue} strokeWidth="2" />
                    <text x="160" y="122" textAnchor="middle" fill={dark} fontSize="16">
                        Sender
                    </text>

                    <line x1="230" y1="115" x2="570" y2="115" stroke={lightBlue} strokeWidth="4" />

                    <rect x="570" y="85" width="140" height="60" fill="white" stroke={blue} strokeWidth="2" />
                    <text x="640" y="122" textAnchor="middle" fill={dark} fontSize="16">
                        Receiver
                    </text>

                    <circle r="7" fill={blue}>
                        <animate attributeName="cx" from="230" to="570" dur="2.5s" repeatCount="indefinite" />
                        <animate attributeName="cy" from="115" to="115" dur="2.5s" repeatCount="indefinite" />
                    </circle>

                    <text x="400" y="180" textAnchor="middle" fill="#667788" fontSize="14">
                        Data travels through a communication medium
                    </text>
                </svg>
            </div>
        );
    }

    if (type === "signals") {
        return (
            <div className="topic-svg-container">
                <svg viewBox="0 0 800 280" width="100%" height="280">
                    <text x="200" y="35" textAnchor="middle" fill={dark} fontSize="18">
                        Analog Signal
                    </text>

                    <path
                        d="M50 100 C100 40 150 160 200 100 S300 40 350 100"
                        fill="none"
                        stroke={blue}
                        strokeWidth="3"
                    />

                    <text x="600" y="35" textAnchor="middle" fill={dark} fontSize="18">
                        Digital Signal
                    </text>

                    <path
                        d="M450 130 H510 V70 H570 V130 H630 V70 H690 V130 H750"
                        fill="none"
                        stroke={blue}
                        strokeWidth="3"
                    />
                </svg>
            </div>
        );
    }

    if (type === "dataunits") {
        const units = ["Bit", "Byte", "KB", "MB", "GB", "TB"];

        return (
            <div className="topic-svg-container">
                <svg viewBox="0 0 900 220" width="100%" height="220">
                    {units.map((unit, index) => {
                        const x = 35 + index * 145;

                        return (
                            <React.Fragment key={unit}>
                                <rect
                                    x={x}
                                    y="75"
                                    width="90"
                                    height="55"
                                    fill="white"
                                    stroke={blue}
                                    strokeWidth="2"
                                />

                                <text
                                    x={x + 45}
                                    y="108"
                                    textAnchor="middle"
                                    fill={dark}
                                    fontSize="15"
                                >
                                    {unit}
                                </text>

                                {index < units.length - 1 && (
                                    <text
                                        x={x + 115}
                                        y="110"
                                        textAnchor="middle"
                                        fill={blue}
                                        fontSize="22"
                                    >
                                        →
                                    </text>
                                )}
                            </React.Fragment>
                        );
                    })}
                </svg>
            </div>
        );
    }

    if (type === "performance") {
        return (
            <div className="topic-svg-container">
                <svg viewBox="0 0 800 380" width="100%" height="380">
                    <text x="400" y="35" textAnchor="middle" fill={dark} fontSize="19">
                        Network Performance
                    </text>

                    <text x="80" y="80" fill={dark} fontSize="17">
                        Bandwidth
                    </text>

                    <rect x="80" y="100" width="640" height="32" rx="5" fill="#e8f0f5" stroke={lightBlue} strokeWidth="2" />

                    <rect x="80" y="100" width="500" height="32" rx="5" fill={blue} />

                    <text x="600" y="121" textAnchor="middle" fill="white" fontSize="13">
                        Maximum Capacity
                    </text>

                    <text x="80" y="175" fill={dark} fontSize="17">
                        Throughput
                    </text>

                    <rect x="80" y="195" width="640" height="32" rx="5" fill="#e8f0f5" stroke={lightBlue} strokeWidth="2" />

                    <rect x="80" y="195" width="370" height="32" rx="5" fill={blue} />

                    <text x="265" y="216" textAnchor="middle" fill="white" fontSize="13">
                        Actual Transfer
                    </text>

                    <text x="80" y="270" fill={dark} fontSize="17">
                        Latency
                    </text>

                    <line x1="80" y1="300" x2="720" y2="300" stroke={lightBlue} strokeWidth="4" />

                    <circle cx="80" cy="300" r="8" fill={blue} />
                    <circle cx="720" cy="300" r="8" fill={blue} />

                    <text x="80" y="330" textAnchor="middle" fill={dark} fontSize="13">
                        Sent
                    </text>

                    <text x="720" y="330" textAnchor="middle" fill={dark} fontSize="13">
                        Received
                    </text>
                </svg>
            </div>
        );
    }

    if (type === "duplex") {
        return (
            <div className="topic-svg-container">
                <svg viewBox="0 0 800 300" width="100%" height="300">
                    <text x="100" y="55" fill={dark} fontSize="16">
                        Simplex
                    </text>

                    <line x1="220" y1="50" x2="650" y2="50" stroke={lightBlue} strokeWidth="4" />

                    <circle r="7" fill={blue}>
                        <animate
                            attributeName="cx"
                            values="220;650;650;220"
                            keyTimes="0;0.55;0.80;1"
                            dur="4s"
                            repeatCount="indefinite"
                        />
                        <animate
                            attributeName="cy"
                            values="50;50;50;50;50"
                            dur="4s"
                            repeatCount="indefinite"
                        />
                        <animate
                            attributeName="opacity"
                            values="1;1;0;0"
                            keyTimes="0;0.55;0.80;1"
                            dur="4s"
                            repeatCount="indefinite"
                        />
                    </circle>

                    <text x="100" y="145" fill={dark} fontSize="16">
                        Half-Duplex
                    </text>

                    <line x1="220" y1="140" x2="650" y2="140" stroke={lightBlue} strokeWidth="4" />

                    <circle r="7" fill={blue}>
                        <animate
                            attributeName="cx"
                            values="220;650;220"
                            keyTimes="0;0.5;1"
                            dur="4s"
                            repeatCount="indefinite"
                        />
                        <animate
                            attributeName="cy"
                            values="140;140;140"
                            dur="4s"
                            repeatCount="indefinite"
                        />
                    </circle>

                    <text x="100" y="235" fill={dark} fontSize="16">
                        Full-Duplex
                    </text>

                    <line x1="220" y1="230" x2="650" y2="230" stroke={lightBlue} strokeWidth="4" />

                    <circle r="7" fill={blue}>
                        <animate attributeName="cx" from="220" to="650" dur="2s" repeatCount="indefinite" />
                        <animate attributeName="cy" from="230" to="230" dur="2s" repeatCount="indefinite" />
                    </circle>

                    <circle r="7" fill={blue}>
                        <animate attributeName="cx" from="650" to="220" dur="2s" repeatCount="indefinite" />
                        <animate attributeName="cy" from="230" to="230" dur="2s" repeatCount="indefinite" />
                    </circle>
                </svg>
            </div>
        );
    }

    if (type === "switching") {
        return (
            <div className="topic-svg-container">
                <svg viewBox="0 0 900 300" width="100%" height="300">
                    <text x="225" y="35" textAnchor="middle" fill={dark} fontSize="18">
                        Circuit Switching
                    </text>

                    <circle cx="100" cy="150" r="25" fill="white" stroke={blue} strokeWidth="2" />
                    <text x="100" y="156" textAnchor="middle" fill={dark}>
                        A
                    </text>

                    <line x1="125" y1="150" x2="325" y2="150" stroke={lightBlue} strokeWidth="3" />

                    <circle cx="132" cy="150" r="7" fill={blue}>
                        <animate
                            attributeName="cx"
                            values="132;318;132"
                            dur="3s"
                            repeatCount="indefinite"
                        />
                        <animate
                            attributeName="cy"
                            values="150;150;150"
                            dur="3s"
                            repeatCount="indefinite"
                        />
                    </circle>

                    <circle cx="350" cy="150" r="25" fill="white" stroke={blue} strokeWidth="2" />
                    <text x="350" y="156" textAnchor="middle" fill={dark}>
                        B
                    </text>

                    <text x="675" y="35" textAnchor="middle" fill={dark} fontSize="18">
                        Packet Switching
                    </text>

                    <circle cx="525" cy="150" r="25" fill="white" stroke={blue} strokeWidth="2" />
                    <text x="525" y="156" textAnchor="middle" fill={dark}>
                        A
                    </text>

                    <line x1="550" y1="150" x2="700" y2="90" stroke={lightBlue} strokeWidth="3" />
                    <line x1="550" y1="150" x2="700" y2="150" stroke={lightBlue} strokeWidth="3" />
                    <line x1="550" y1="150" x2="700" y2="210" stroke={lightBlue} strokeWidth="3" />

                    <circle cx="725" cy="90" r="25" fill="white" stroke={blue} strokeWidth="2" />
                    <text x="725" y="96" textAnchor="middle" fill={dark}>
                        N1
                    </text>

                    <circle cx="725" cy="150" r="25" fill="white" stroke={blue} strokeWidth="2" />
                    <text x="725" y="156" textAnchor="middle" fill={dark}>
                        N2
                    </text>

                    <circle cx="725" cy="210" r="25" fill="white" stroke={blue} strokeWidth="2" />
                    <text x="725" y="216" textAnchor="middle" fill={dark}>
                        N3
                    </text>

                    <line x1="750" y1="90" x2="800" y2="150" stroke={lightBlue} strokeWidth="3" />
                    <line x1="750" y1="150" x2="800" y2="150" stroke={lightBlue} strokeWidth="3" />
                    <line x1="750" y1="210" x2="800" y2="150" stroke={lightBlue} strokeWidth="3" />

                    <circle cx="825" cy="150" r="25" fill="white" stroke={blue} strokeWidth="2" />
                    <text x="825" y="156" textAnchor="middle" fill={dark}>
                        B
                    </text>

                    <circle r="7" fill={blue}>
                        <animateMotion dur="4s" repeatCount="indefinite">
                            <mpath href="#packetRoute" />
                        </animateMotion>
                        <animate
                            attributeName="opacity"
                            values="1;1;0;0;1;1;0;0"
                            keyTimes="0;0.51;0.515;0.73;0.74;0.99;0.995;1"
                            dur="4s"
                            repeatCount="indefinite"
                        />
                    </circle>

                    <path
                        id="packetRoute"
                        d="M558 147 L693 93 L757 93 L793 142"
                        fill="none"
                        stroke="none"
                    />
                </svg>
            </div>
        );
    }

    if (type === "delivery") {
        return (
            <div className="topic-svg-container">
                <svg viewBox="0 0 900 300" width="100%" height="300">
                    <text x="150" y="30" textAnchor="middle" fill={dark} fontSize="17">
                        Unicast
                    </text>

                    <circle cx="60" cy="150" r="22" fill="white" stroke={blue} strokeWidth="2" />
                    <text x="60" y="156" textAnchor="middle" fill={dark}>
                        A
                    </text>

                    <line x1="82" y1="150" x2="223" y2="150" stroke={lightBlue} strokeWidth="3" />

                    <circle cx="245" cy="150" r="22" fill="white" stroke={blue} strokeWidth="2" />
                    <text x="245" y="156" textAnchor="middle" fill={dark}>
                        B
                    </text>

                    <circle r="7" fill={blue}>
                        <animate attributeName="cx" from="89" to="216" dur="2s" repeatCount="indefinite" />
                        <animate attributeName="cy" from="150" to="150" dur="2s" repeatCount="indefinite" />
                    </circle>

                    <text x="450" y="30" textAnchor="middle" fill={dark} fontSize="17">
                        Multicast
                    </text>

                    <circle cx="355" cy="150" r="22" fill="white" stroke={blue} strokeWidth="2" />
                    <text x="355" y="156" textAnchor="middle" fill={dark}>
                        PC1
                    </text>

                    <line x1="376.1" y1="143.8" x2="503.9" y2="106.2" stroke={lightBlue} strokeWidth="3" />
                    <line x1="376.1" y1="156.2" x2="503.9" y2="193.8" stroke={lightBlue} strokeWidth="3" />

                    <circle cx="525" cy="100" r="22" fill="white" stroke={blue} strokeWidth="2" />
                    <text x="525" y="106" textAnchor="middle" fill={dark}>
                        PC2
                    </text>

                    <circle cx="525" cy="200" r="22" fill="white" stroke={blue} strokeWidth="2" />
                    <text x="525" y="206" textAnchor="middle" fill={dark}>
                        PC3
                    </text>

                    <circle r="7" fill={blue}>
                        <animateMotion dur="3s" begin="0s" repeatCount="indefinite">
                            <mpath href="#multicastRoute1" />
                        </animateMotion>
                    </circle>

                    <circle r="7" fill={blue}>
                        <animateMotion dur="3s" begin="0s" repeatCount="indefinite">
                            <mpath href="#multicastRoute2" />
                        </animateMotion>
                    </circle>

                    <path id="multicastRoute1" d="M382.8 141.8 L497.2 108.2" fill="none" stroke="none" />
                    <path id="multicastRoute2" d="M382.8 158.2 L497.2 191.8" fill="none" stroke="none" />

                    <text x="750" y="30" textAnchor="middle" fill={dark} fontSize="17">
                        Broadcast
                    </text>

                    <circle cx="650" cy="150" r="22" fill="white" stroke={blue} strokeWidth="2" />
                    <text x="650" y="156" textAnchor="middle" fill={dark}>
                        PC1
                    </text>

                    <line x1="669.2" y1="139.3" x2="755.8" y2="90.7" stroke={lightBlue} strokeWidth="3" />
                    <line x1="672" y1="150" x2="753" y2="150" stroke={lightBlue} strokeWidth="3" />
                    <line x1="669.2" y1="160.7" x2="755.8" y2="209.3" stroke={lightBlue} strokeWidth="3" />

                    <circle cx="775" cy="80" r="22" fill="white" stroke={blue} strokeWidth="2" />
                    <text x="775" y="86" textAnchor="middle" fill={dark}>
                        PC2
                    </text>

                    <circle cx="775" cy="150" r="22" fill="white" stroke={blue} strokeWidth="2" />
                    <text x="775" y="156" textAnchor="middle" fill={dark}>
                        PC3
                    </text>

                    <circle cx="775" cy="220" r="22" fill="white" stroke={blue} strokeWidth="2" />
                    <text x="775" y="226" textAnchor="middle" fill={dark}>
                        PC4
                    </text>

                    <circle r="7" fill={blue}>
                        <animateMotion dur="3s" begin="0s" repeatCount="indefinite">
                            <mpath href="#broadcastRoute1" />
                        </animateMotion>
                    </circle>

                    <circle r="7" fill={blue}>
                        <animateMotion dur="3s" begin="0s" repeatCount="indefinite">
                            <mpath href="#broadcastRoute2" />
                        </animateMotion>
                    </circle>

                    <circle r="7" fill={blue}>
                        <animateMotion dur="3s" begin="0s" repeatCount="indefinite">
                            <mpath href="#broadcastRoute3" />
                        </animateMotion>
                    </circle>

                    <path id="broadcastRoute1" d="M675.3 135.8 L749.7 94.2" fill="none" stroke="none" />
                    <path id="broadcastRoute2" d="M679 150 L746 150" fill="none" stroke="none" />
                    <path id="broadcastRoute3" d="M675.3 164.2 L749.7 205.8" fill="none" stroke="none" />
                </svg>
            </div>
        );
    }

    if (type === "networktypes") {
        return (
            <div className="topic-svg-container">
                <svg viewBox="0 0 800 300" width="100%" height="300">
                    <rect x="80" y="40" width="640" height="210" rx="20" fill="white" stroke={blue} strokeWidth="2" />
                    <text x="400" y="70" textAnchor="middle" fill={dark} fontSize="18">
                        WAN
                    </text>

                    <rect x="180" y="85" width="440" height="140" rx="18" fill="white" stroke={blue} strokeWidth="2" />
                    <text x="400" y="112" textAnchor="middle" fill={dark} fontSize="17">
                        MAN
                    </text>

                    <rect x="270" y="125" width="260" height="90" rx="15" fill="white" stroke={blue} strokeWidth="2" />
                    <text x="400" y="150" textAnchor="middle" fill={dark} fontSize="16">
                        LAN
                    </text>

                    <rect x="350" y="165" width="100" height="45" rx="12" fill="white" stroke={blue} strokeWidth="2" />
                    <text x="400" y="193" textAnchor="middle" fill={dark} fontSize="14">
                        PAN
                    </text>
                </svg>
            </div>
        );
    }

    if (type === "topologies") {
        return (
            <div className="topic-svg-container">
                <svg viewBox="0 0 1000 650" width="100%" height="650">
                    <text x="500" y="35" textAnchor="middle" fill={dark} fontSize="20">
                        Network Topologies
                    </text>

                    <text x="165" y="75" textAnchor="middle" fill={dark} fontSize="17">
                        Star Topology
                    </text>

                    <line x1="165" y1="155" x2="95" y2="110" stroke={lightBlue} strokeWidth="4" />
                    <line x1="165" y1="155" x2="235" y2="110" stroke={lightBlue} strokeWidth="4" />
                    <line x1="165" y1="155" x2="95" y2="200" stroke={lightBlue} strokeWidth="4" />
                    <line x1="165" y1="155" x2="235" y2="200" stroke={lightBlue} strokeWidth="4" />

                    <Node x="165" y="155" label="Switch" />
                    <Node x="95" y="110" label="PC1" />
                    <Node x="235" y="110" label="PC2" />
                    <Node x="95" y="200" label="PC3" />
                    <Node x="235" y="200" label="PC4" />

                    <path
                        id="starTopologyRoute"
                        d="M95 110 L165 155 L235 110 L165 155 L235 200 L165 155 L95 200 L165 155 L95 110"
                        fill="none"
                        stroke="none"
                    />
                    <MovingDot pathId="starTopologyRoute" dur="7s" />

                    <text x="500" y="75" textAnchor="middle" fill={dark} fontSize="17">
                        Bus Topology
                    </text>

                    <line x1="365" y1="155" x2="635" y2="155" stroke={lightBlue} strokeWidth="5" />

                    <line x1="410" y1="155" x2="410" y2="120" stroke={lightBlue} strokeWidth="3" />
                    <line x1="500" y1="155" x2="500" y2="190" stroke={lightBlue} strokeWidth="3" />
                    <line x1="590" y1="155" x2="590" y2="120" stroke={lightBlue} strokeWidth="3" />

                    <circle cx="410" cy="100" r="20" fill="white" stroke={blue} strokeWidth="2" />
                    <circle cx="500" cy="210" r="20" fill="white" stroke={blue} strokeWidth="2" />
                    <circle cx="590" cy="100" r="20" fill="white" stroke={blue} strokeWidth="2" />

                    <path
                        id="busTopologyRoute"
                        d="M365 155 L410 155 L410 120 L410 155 L500 155 L500 190 L500 155 L590 155 L590 120 L590 155 L635 155 L590 155 L590 120 L590 155 L500 155 L500 190 L500 155 L410 155 L410 120 L410 155 L365 155"
                        fill="none"
                        stroke="none"
                    />
                    <MovingDot pathId="busTopologyRoute" dur="6s" begin="0.5s" />

                    <text x="835" y="75" textAnchor="middle" fill={dark} fontSize="17">
                        Ring Topology
                    </text>

                    <line x1="835" y1="100" x2="895" y2="155" stroke={lightBlue} strokeWidth="4" />
                    <line x1="895" y1="155" x2="835" y2="210" stroke={lightBlue} strokeWidth="4" />
                    <line x1="835" y1="210" x2="775" y2="155" stroke={lightBlue} strokeWidth="4" />
                    <line x1="775" y1="155" x2="835" y2="100" stroke={lightBlue} strokeWidth="4" />

                    <Node x="835" y="100" label="PC1" />
                    <Node x="895" y="155" label="PC2" />
                    <Node x="835" y="210" label="PC3" />
                    <Node x="775" y="155" label="PC4" />

                    <path
                        id="ringTopologyRoute"
                        d="M835 100 L895 155 L835 210 L775 155 L835 100"
                        fill="none"
                        stroke="none"
                    />
                    <MovingDot pathId="ringTopologyRoute" dur="5s" begin="1s" />

                    <text x="300" y="340" textAnchor="middle" fill={dark} fontSize="17">
                        Mesh Topology
                    </text>

                    <line x1="220" y1="390" x2="380" y2="390" stroke={lightBlue} strokeWidth="3" />
                    <line x1="220" y1="490" x2="380" y2="490" stroke={lightBlue} strokeWidth="3" />
                    <line x1="220" y1="390" x2="220" y2="490" stroke={lightBlue} strokeWidth="3" />
                    <line x1="380" y1="390" x2="380" y2="490" stroke={lightBlue} strokeWidth="3" />
                    <line x1="220" y1="390" x2="380" y2="490" stroke={lightBlue} strokeWidth="3" />
                    <line x1="380" y1="390" x2="220" y2="490" stroke={lightBlue} strokeWidth="3" />

                    <Node x="220" y="390" label="PC1" />
                    <Node x="380" y="390" label="PC2" />
                    <Node x="220" y="490" label="PC3" />
                    <Node x="380" y="490" label="PC4" />

                    <path
                        id="meshTopologyRoute"
                        d="M220 390 L380 390 L380 490 L220 490 L220 390 L380 490 L220 490 L380 390 L220 390"
                        fill="none"
                        stroke="none"
                    />
                    <MovingDot pathId="meshTopologyRoute" dur="7s" begin="0.5s" />

                    <text x="700" y="340" textAnchor="middle" fill={dark} fontSize="17">
                        Hybrid Topology
                    </text>

                    <line x1="700" y1="390" x2="620" y2="450" stroke={lightBlue} strokeWidth="3" />
                    <line x1="700" y1="390" x2="780" y2="450" stroke={lightBlue} strokeWidth="3" />
                    <line x1="620" y1="450" x2="780" y2="450" stroke={lightBlue} strokeWidth="3" />

                    <line x1="700" y1="390" x2="700" y2="500" stroke={lightBlue} strokeWidth="3" />
                    <line x1="700" y1="500" x2="620" y2="550" stroke={lightBlue} strokeWidth="3" />
                    <line x1="700" y1="500" x2="780" y2="550" stroke={lightBlue} strokeWidth="3" />
                    <line x1="620" y1="550" x2="780" y2="550" stroke={lightBlue} strokeWidth="3" />

                    <Node x="700" y="390" label="Switch" />
                    <Node x="620" y="450" label="PC1" />
                    <Node x="780" y="450" label="PC2" />
                    <Node x="700" y="500" label="Switch" />
                    <Node x="620" y="550" label="PC3" />
                    <Node x="780" y="550" label="PC4" />

                    <path
                        id="hybridTopologyRoute"
                        d="M620 450 L700 390 L780 450 L620 450 L700 390 L700 500 L620 550 L780 550"
                        fill="none"
                        stroke="none"
                    />
                    <MovingDot pathId="hybridTopologyRoute" dur="8s" begin="1s" />
                </svg>
            </div>
        );
    }

    if (type === "architecture") {
        return (
            <div className="topic-svg-container">
                <svg viewBox="0 0 800 280" width="100%" height="280">
                    <text x="200" y="35" textAnchor="middle" fill={dark} fontSize="18">
                        Client-Server
                    </text>

                    <rect x="150" y="60" width="100" height="50" fill="white" stroke={blue} strokeWidth="2" />
                    <text x="200" y="91" textAnchor="middle" fill={dark}>
                        Server
                    </text>

                    <line x1="200" y1="110" x2="114.5" y2="191.2" stroke={lightBlue} strokeWidth="3" />
                    <line x1="200" y1="110" x2="200" y2="185" stroke={lightBlue} strokeWidth="3" />
                    <line x1="200" y1="110" x2="285.5" y2="191.2" stroke={lightBlue} strokeWidth="3" />

                    <Node x="100" y="205" label="Client" />
                    <Node x="200" y="205" label="Client" />
                    <Node x="300" y="205" label="Client" />

                    <text x="600" y="35" textAnchor="middle" fill={dark} fontSize="18">
                        Peer-to-Peer
                    </text>

                    <line x1="520" y1="100" x2="680" y2="100" stroke={lightBlue} strokeWidth="3" />
                    <line x1="680" y1="100" x2="680" y2="190" stroke={lightBlue} strokeWidth="3" />
                    <line x1="680" y1="190" x2="520" y2="190" stroke={lightBlue} strokeWidth="3" />
                    <line x1="520" y1="190" x2="520" y2="100" stroke={lightBlue} strokeWidth="3" />

                    <Node x="520" y="100" label="Peer" />
                    <Node x="680" y="100" label="Peer" />
                    <Node x="680" y="190" label="Peer" />
                    <Node x="520" y="190" label="Peer" />
                </svg>
            </div>
        );
    }

    if (type === "protocol") {
        return (
            <div className="topic-svg-container">
                <svg viewBox="0 0 800 260" width="100%" height="260">
                    <rect x="70" y="90" width="130" height="60" fill="white" stroke={blue} strokeWidth="2" />
                    <text x="135" y="126" textAnchor="middle" fill={dark}>
                        Device A
                    </text>

                    <line x1="200" y1="120" x2="600" y2="120" stroke={lightBlue} strokeWidth="4" />

                    <rect x="600" y="90" width="130" height="60" fill="white" stroke={blue} strokeWidth="2" />
                    <text x="665" y="126" textAnchor="middle" fill={dark}>
                        Device B
                    </text>

                    <circle r="7" fill={blue}>
                        <animate attributeName="cx" from="200" to="600" dur="3s" repeatCount="indefinite" />
                        <animate attributeName="cy" from="120" to="120" dur="3s" repeatCount="indefinite" />
                    </circle>

                    <text x="400" y="70" textAnchor="middle" fill={dark} fontSize="15">
                        Rules: Format • Timing • Addressing • Error Handling
                    </text>
                </svg>
            </div>
        );
    }

    if (type === "encapsulation") {
        return (
            <div className="topic-svg-container">
                <svg viewBox="0 0 800 350" width="100%" height="350">
                    <rect x="300" y="30" width="200" height="45" fill="white" stroke={blue} strokeWidth="2" />
                    <text x="400" y="58" textAnchor="middle" fill={dark}>
                        Application Data
                    </text>

                    <rect x="260" y="85" width="280" height="45" fill="white" stroke={blue} strokeWidth="2" />
                    <text x="400" y="113" textAnchor="middle" fill={dark}>
                        Transport Header + Data
                    </text>

                    <rect x="220" y="140" width="360" height="45" fill="white" stroke={blue} strokeWidth="2" />
                    <text x="400" y="168" textAnchor="middle" fill={dark}>
                        Network Header + Data
                    </text>

                    <rect x="180" y="195" width="440" height="45" fill="white" stroke={blue} strokeWidth="2" />
                    <text x="400" y="223" textAnchor="middle" fill={dark}>
                        Frame Header + Packet + Trailer
                    </text>

                    <rect x="140" y="250" width="520" height="45" fill="white" stroke={blue} strokeWidth="2" />
                    <text x="400" y="278" textAnchor="middle" fill={dark}>
                        Bits on the Medium
                    </text>

                    <text x="680" y="55" fill={blue} fontSize="15">
                        Add headers
                    </text>

                    <text x="680" y="275" fill={blue} fontSize="15">
                        Transmit
                    </text>
                </svg>
            </div>
        );
    }

    if (type === "addressing") {
        return (
            <div className="topic-svg-container">
                <svg viewBox="0 0 800 260" width="100%" height="260">
                    <Node x="100" y="130" label="Device" />

                    <line x1="120" y1="130" x2="180" y2="130" stroke={lightBlue} strokeWidth="3" />
                    <line x1="180" y1="100" x2="180" y2="160" stroke={lightBlue} strokeWidth="3" />
                    <line x1="180" y1="100" x2="240" y2="100" stroke={lightBlue} strokeWidth="3" />
                    <line x1="180" y1="160" x2="240" y2="160" stroke={lightBlue} strokeWidth="3" />

                    <rect x="240" y="78" width="190" height="45" fill="white" stroke={blue} strokeWidth="2" />
                    <text x="335" y="106" textAnchor="middle" fill={dark}>
                        IP Address
                    </text>

                    <rect x="240" y="138" width="190" height="45" fill="white" stroke={blue} strokeWidth="2" />
                    <text x="335" y="166" textAnchor="middle" fill={dark}>
                        MAC Address
                    </text>

                    <line x1="430" y1="100" x2="565" y2="100" stroke={lightBlue} strokeWidth="3" />
                    <line x1="430" y1="160" x2="565" y2="160" stroke={lightBlue} strokeWidth="3" />

                    <text x="585" y="106" fill={dark} fontSize="14">
                        Logical identity
                    </text>

                    <text x="585" y="166" fill={dark} fontSize="14">
                        Interface identity
                    </text>
                </svg>
            </div>
        );
    }

    if (type === "media") {
        return (
            <div className="topic-svg-container">
                <svg viewBox="0 0 800 380" width="100%" height="380">
                    <text x="400" y="35" textAnchor="middle" fill={dark} fontSize="20">
                        Transmission Media
                    </text>

                    <text x="220" y="80" textAnchor="middle" fill={dark} fontSize="18">
                        Wired Transmission
                    </text>

                    <rect x="80" y="125" width="130" height="60" rx="8" fill="white" stroke={blue} strokeWidth="2" />
                    <text x="145" y="161" textAnchor="middle" fill={dark} fontSize="15">
                        PC1
                    </text>

                    <line x1="210" y1="155" x2="590" y2="155" stroke={blue} strokeWidth="5" />

                    <rect x="335" y="125" width="130" height="60" rx="8" fill="white" stroke={blue} strokeWidth="2" />
                    <text x="400" y="161" textAnchor="middle" fill={dark} fontSize="15">
                        Switch
                    </text>

                    <rect x="590" y="125" width="130" height="60" rx="8" fill="white" stroke={blue} strokeWidth="2" />
                    <text x="655" y="161" textAnchor="middle" fill={dark} fontSize="15">
                        PC2
                    </text>

                    <text x="400" y="215" textAnchor="middle" fill={dark} fontSize="14">
                        Ethernet Cable
                    </text>

                    <text x="400" y="260" textAnchor="middle" fill={dark} fontSize="18">
                        Wireless Transmission
                    </text>

                    <circle cx="240" cy="320" r="35" fill="white" stroke={blue} strokeWidth="2" />
                    <text x="240" y="326" textAnchor="middle" fill={dark} fontSize="15">
                        AP
                    </text>

                    <rect x="660" y="285" width="120" height="70" rx="8" fill="white" stroke={blue} strokeWidth="2" />
                    <text x="720" y="326" textAnchor="middle" fill={dark} fontSize="15">
                        Laptop
                    </text>

                    <path
                        d="M285 320 Q450 250 660 320"
                        fill="none"
                        stroke={blue}
                        strokeWidth="3"
                        strokeDasharray="7 7"
                    />

                    <path
                        d="M425 325 Q450 305 475 325"
                        fill="none"
                        stroke={blue}
                        strokeWidth="3"
                    />

                    <path
                        d="M433 340 Q450 326 467 340"
                        fill="none"
                        stroke={blue}
                        strokeWidth="3"
                    />

                    <path
                        d="M441 354 Q450 347 459 354"
                        fill="none"
                        stroke={blue}
                        strokeWidth="3"
                    />

                    <circle cx="450" cy="365" r="5" fill={blue} />
                </svg>
            </div>
        );
    }

    if (type === "metrics") {
        return (
            <div className="topic-svg-container">
                <svg viewBox="0 0 800 280" width="100%" height="280">
                    <text x="200" y="45" textAnchor="middle" fill={dark} fontSize="18">
                        Packet Loss
                    </text>

                    {[80, 130, 180, 230, 280].map((x, index) => (
                        <circle
                            key={x}
                            cx={x}
                            cy="100"
                            r="12"
                            fill={index === 2 ? "white" : blue}
                            stroke={blue}
                            strokeWidth="2"
                        />
                    ))}

                    <text x="600" y="45" textAnchor="middle" fill={dark} fontSize="18">
                        Jitter
                    </text>

                    <line x1="470" y1="100" x2="730" y2="100" stroke={lightBlue} strokeWidth="3" />

                    {[490, 540, 600, 670, 720].map((x, index) => (
                        <circle
                            key={x}
                            cx={x}
                            cy={index % 2 === 0 ? 100 : 135}
                            r="9"
                            fill={blue}
                        />
                    ))}
                </svg>
            </div>
        );
    }

    if (type === "errors") {
        return (
            <div className="topic-svg-container">
                <svg viewBox="0 0 800 280" width="100%" height="280">
                    <text x="130" y="45" textAnchor="middle" fill={dark} fontSize="18">
                        Parity
                    </text>

                    {[1, 0, 1, 1].map((bit, index) => (
                        <g key={index}>
                            <rect
                                x={70 + index * 35}
                                y="80"
                                width="28"
                                height="40"
                                fill="white"
                                stroke={blue}
                                strokeWidth="2"
                            />

                            <text
                                x={84 + index * 35}
                                y="107"
                                textAnchor="middle"
                                fill={dark}
                            >
                                {bit}
                            </text>
                        </g>
                    ))}

                    <text x="400" y="45" textAnchor="middle" fill={dark} fontSize="18">
                        Checksum
                    </text>

                    <rect x="310" y="80" width="180" height="50" fill="white" stroke={blue} strokeWidth="2" />

                    <text x="400" y="112" textAnchor="middle" fill={dark}>
                        Data + Check Value
                    </text>

                    <text x="650" y="45" textAnchor="middle" fill={dark} fontSize="18">
                        CRC
                    </text>

                    <rect x="560" y="80" width="180" height="50" fill="white" stroke={blue} strokeWidth="2" />

                    <text x="650" y="112" textAnchor="middle" fill={dark}>
                        Data ÷ Generator
                    </text>
                </svg>
            </div>
        );
    }

    if (type === "security") {
        return (
            <div className="topic-svg-container">
                <svg viewBox="0 0 800 300" width="100%" height="300">
                    <circle cx="280" cy="140" r="75" fill="white" stroke={blue} strokeWidth="3" />
                    <circle cx="400" cy="140" r="75" fill="white" stroke={blue} strokeWidth="3" />
                    <circle cx="520" cy="140" r="75" fill="white" stroke={blue} strokeWidth="3" />

                    <text x="280" y="150" textAnchor="middle" fill={dark} fontSize="22">
                        C
                    </text>

                    <text x="400" y="150" textAnchor="middle" fill={dark} fontSize="22">
                        I
                    </text>

                    <text x="520" y="150" textAnchor="middle" fill={dark} fontSize="22">
                        A
                    </text>

                    <text x="280" y="250" textAnchor="middle" fill={dark} fontSize="14">
                        Confidentiality
                    </text>

                    <text x="400" y="250" textAnchor="middle" fill={dark} fontSize="14">
                        Integrity
                    </text>

                    <text x="520" y="250" textAnchor="middle" fill={dark} fontSize="14">
                        Availability
                    </text>
                </svg>
            </div>
        );
    }

    if (type === "history") {
        return (
            <div className="topic-svg-container">
                <svg viewBox="0 0 800 280" width="100%" height="280">
                    <line x1="80" y1="130" x2="720" y2="130" stroke={blue} strokeWidth="4" />

                    <circle cx="100" cy="130" r="12" fill="white" stroke={blue} strokeWidth="3" />
                    <circle cx="300" cy="130" r="12" fill="white" stroke={blue} strokeWidth="3" />
                    <circle cx="500" cy="130" r="12" fill="white" stroke={blue} strokeWidth="3" />
                    <circle cx="700" cy="130" r="12" fill="white" stroke={blue} strokeWidth="3" />

                    <text x="100" y="180" textAnchor="middle" fill={dark} fontSize="13">
                        ARPANET
                    </text>

                    <text x="300" y="180" textAnchor="middle" fill={dark} fontSize="13">
                        Internet Protocols
                    </text>

                    <text x="500" y="180" textAnchor="middle" fill={dark} fontSize="13">
                        World Wide Web
                    </text>

                    <text x="700" y="180" textAnchor="middle" fill={dark} fontSize="13">
                        Modern Internet
                    </text>

                    <circle r="7" fill={blue}>
                        <animate attributeName="cx" from="100" to="700" dur="5s" repeatCount="indefinite" />
                        <animate attributeName="cy" from="130" to="130" dur="5s" repeatCount="indefinite" />
                    </circle>
                </svg>
            </div>
        );
    }

    return (
        <div className="topic-svg-container">
            <svg viewBox="0 0 600 220" width="100%" height="220">
                <rect x="220" y="80" width="160" height="60" fill="white" stroke={blue} strokeWidth="2" />
                <text x="300" y="117" textAnchor="middle" fill={dark}>
                    Network
                </text>
            </svg>
        </div>
    );
}

export default TopicDiagram;