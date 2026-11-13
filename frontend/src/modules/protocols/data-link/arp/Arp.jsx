import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./arp.css";

const steps = [
    {
        title: "PC1 wants to send data to PC7",
        text: "PC1 has data for PC7. PC7 is on another network, so PC1 must send the packet to its default gateway, Router 1.",
        active: ["pc1"],
        packet: "DATA",
    },
    {
        title: "PC1 checks its ARP cache",
        text: "PC1 checks whether the MAC address of its default gateway is already stored in its ARP cache.",
        active: ["pc1"],
        cache: [["192.168.1.1", "00:11:22:33:44:01"]],
    },
    {
        title: "PC1 identifies the next hop",
        text: "Because PC7 is on another network, PC1 needs the MAC address of Router 1, not the MAC address of PC7.",
        active: ["pc1", "r1"],
    },
    {
        title: "PC1 sends an ARP request",
        text: "PC1 broadcasts an ARP request asking which device owns the gateway IP address 192.168.1.1.",
        active: ["pc1", "s1"],
        packet: "ARP REQUEST",
    },
    {
        title: "Switch 1 forwards the ARP request",
        text: "Switch 1 receives the broadcast and forwards it through the local network.",
        active: ["s1"],
        packet: "ARP REQUEST",
    },
    {
        title: "Router 1 receives the request",
        text: "Router 1 recognizes that the requested IP address belongs to its local interface.",
        active: ["r1"],
        packet: "ARP REQUEST",
    },
    {
        title: "Router 1 sends an ARP reply",
        text: "Router 1 replies with the MAC address associated with its 192.168.1.1 interface.",
        active: ["r1", "s1", "pc1"],
        packet: "ARP REPLY",
    },
    {
        title: "PC1 updates its ARP cache",
        text: "PC1 stores Router 1's IP-to-MAC mapping in its ARP cache.",
        active: ["pc1"],
        cache: [["192.168.1.1", "00:11:22:33:44:01"]],
    },
    {
        title: "PC1 creates the Ethernet frame",
        text: "PC1 uses Router 1's MAC address as the destination MAC address of the Ethernet frame.",
        active: ["pc1", "s1"],
        packet: "DATA FRAME",
    },
    {
        title: "The frame reaches Router 1",
        text: "Switch 1 forwards the Ethernet frame toward Router 1.",
        active: ["pc1", "s1", "r1"],
        packet: "DATA FRAME",
    },
    {
        title: "Router 1 checks the destination IP",
        text: "Router 1 examines the destination IP and determines that PC7 is on the network connected to Router 2.",
        active: ["r1"],
        packet: "IP PACKET",
    },
    {
        title: "Router 1 prepares the next hop",
        text: "Router 1 must forward the packet to Router 2 across the inter-router network.",
        active: ["r1"],
        packet: "NEXT HOP",
    },
    {
        title: "Router 1 checks its ARP cache",
        text: "Router 1 checks whether Router 2's MAC address is already known.",
        active: ["r1"],
        cache: [["10.0.0.2", "00:11:22:33:44:02"]],
    },
    {
        title: "Router 1 sends an ARP request if needed",
        text: "If Router 1 does not know Router 2's MAC address, it sends an ARP request on the inter-router network.",
        active: ["r1"],
        packet: "ARP REQUEST",
    },
    {
        title: "Router 2 sends an ARP reply",
        text: "Router 2 responds with the MAC address of its interface on the inter-router network.",
        active: ["r1", "r2"],
        packet: "ARP REPLY",
    },
    {
        title: "Router 1 forwards the packet to Router 2",
        text: "Router 1 now has the next-hop MAC address and sends the frame to Router 2.",
        active: ["r1", "r2"],
        packet: "DATA FRAME",
    },
    {
        title: "Router 2 receives the packet",
        text: "Router 2 examines the destination IP address of the incoming packet.",
        active: ["r2"],
        packet: "IP PACKET",
    },
    {
        title: "Router 2 determines PC7 is local",
        text: "Router 2 determines that PC7 belongs to the network connected through Switch 4.",
        active: ["r2", "s4"],
    },
    {
        title: "Router 2 checks its ARP cache",
        text: "Router 2 checks whether PC7's MAC address is already stored.",
        active: ["r2"],
        cache: [["192.168.2.7", "AA:BB:CC:DD:EE:07"]],
    },
    {
        title: "Router 2 sends an ARP request if needed",
        text: "If PC7's MAC address is unknown, Router 2 broadcasts an ARP request asking for the MAC address of 192.168.2.7.",
        active: ["r2", "s4"],
        packet: "ARP REQUEST",
    },
    {
        title: "PC7 receives the ARP request",
        text: "The ARP broadcast reaches PC7 and PC7 recognizes its own IP address.",
        active: ["pc7"],
        packet: "ARP REQUEST",
    },
    {
        title: "PC7 sends an ARP reply",
        text: "PC7 replies to Router 2 with its MAC address.",
        active: ["pc7", "s4", "r2"],
        packet: "ARP REPLY",
    },
    {
        title: "Router 2 updates its ARP cache",
        text: "Router 2 stores PC7's IP-to-MAC mapping in its ARP cache.",
        active: ["r2"],
        cache: [["192.168.2.7", "AA:BB:CC:DD:EE:07"]],
    },
    {
        title: "Router 2 sends the data toward PC7",
        text: "Router 2 creates a new Ethernet frame using PC7's MAC address as the destination MAC.",
        active: ["r2", "s4"],
        packet: "DATA FRAME",
    },
    {
        title: "Switch 4 forwards the frame",
        text: "Switch 4 forwards the frame through the port connected to PC7.",
        active: ["s4", "pc7"],
        packet: "DATA FRAME",
    },
    {
        title: "PC7 receives the data",
        text: "PC7 receives the frame and accepts the packet because the destination MAC address belongs to PC7.",
        active: ["pc7"],
        packet: "DELIVERED",
    },
];

const nodes = [
    ["r1", "Router 1", "router", 250, 65],
    ["r2", "Router 2", "router", 650, 65],

    ["s1", "Switch 1", "switch", 170, 165],
    ["s2", "Switch 2", "switch", 330, 165],
    ["s3", "Switch 3", "switch", 570, 165],
    ["s4", "Switch 4", "switch", 730, 165],

    ["pc1", "PC1", "pc", 130, 270],
    ["pc2", "PC2", "pc", 210, 270],
    ["pc3", "PC3", "pc", 290, 270],
    ["pc4", "PC4", "pc", 370, 270],

    ["pc5", "PC5", "pc", 530, 270],
    ["pc6", "PC6", "pc", 610, 270],
    ["pc7", "PC7", "pc", 690, 270],
    ["pc8", "PC8", "pc", 770, 270],
];

const links = [
    ["r1", "r2", 250, 65, 650, 65],

    ["r1", "s1", 250, 65, 170, 165],
    ["r1", "s2", 250, 65, 330, 165],

    ["s1", "pc1", 170, 165, 130, 270],
    ["s1", "pc2", 170, 165, 210, 270],

    ["s2", "pc3", 330, 165, 290, 270],
    ["s2", "pc4", 330, 165, 370, 270],

    ["r2", "s3", 650, 65, 570, 165],
    ["r2", "s4", 650, 65, 730, 165],

    ["s3", "pc5", 570, 165, 530, 270],
    ["s3", "pc6", 570, 165, 610, 270],

    ["s4", "pc7", 730, 165, 690, 270],
    ["s4", "pc8", 730, 165, 770, 270],
];

function DeviceShape({ type, active }) {
    if (type === "router") {
        return (
            <rect
                x="-23"
                y="-23"
                width="46"
                height="46"
                rx="11"
                className={`arp-svg-device arp-svg-router ${
                    active ? "arp-svg-active" : ""
                }`}
            />
        );
    }

    if (type === "switch") {
        return (
            <rect
                x="-20"
                y="-20"
                width="40"
                height="40"
                rx="9"
                className={`arp-svg-device arp-svg-switch ${
                    active ? "arp-svg-active" : ""
                }`}
            />
        );
    }

    return (
        <rect
            x="-18"
            y="-18"
            width="36"
            height="36"
            rx="8"
            className={`arp-svg-device arp-svg-pc ${
                active ? "arp-svg-active" : ""
            }`}
        />
    );
}

function DeviceSymbol({ type }) {
    if (type === "router") {
        return <text className="arp-svg-symbol">↔</text>;
    }

    if (type === "switch") {
        return <text className="arp-svg-symbol">▦</text>;
    }

    return <text className="arp-svg-symbol">▣</text>;
}

function Topology({ active, packet }) {
    const activeSet = new Set(active || []);

    return (
        <div className="arp-topology">

            <svg
                className="arp-topology-svg"
                viewBox="0 0 900 330"
                preserveAspectRatio="xMidYMid meet"
            >

                {links.map(([from, to, x1, y1, x2, y2]) => {
                    const highlighted =
                        activeSet.has(from) &&
                        activeSet.has(to);

                    return (
                        <line
                            key={`${from}-${to}`}
                            x1={x1}
                            y1={y1}
                            x2={x2}
                            y2={y2}
                            className={
                                highlighted
                                    ? "arp-svg-line arp-svg-line-active"
                                    : "arp-svg-line"
                            }
                        />
                    );
                })}

                {packet && (
                    <g>
                        <rect
                            x="410"
                            y="45"
                            width="80"
                            height="22"
                            rx="11"
                            className="arp-packet-label"
                        />

                        <text
                            x="450"
                            y="60"
                            textAnchor="middle"
                            className="arp-packet-text"
                        >
                            {packet}
                        </text>
                    </g>
                )}

                {nodes.map(([id, label, type, x, y]) => {
                    const activeNode = activeSet.has(id);

                    return (
                        <g
                            key={id}
                            transform={`translate(${x}, ${y})`}
                            className="arp-svg-node"
                        >
                            <DeviceShape
                                type={type}
                                active={activeNode}
                            />

                            <DeviceSymbol type={type} />

                            <text
                                y={type === "router" ? 42 : 35}
                                textAnchor="middle"
                                className="arp-svg-label"
                            >
                                {label}
                            </text>
                        </g>
                    );
                })}

            </svg>
        </div>
    );
}

function Cache({ rows }) {
    if (!rows) {
        return null;
    }

    return (
        <div className="arp-cache">

            <h3>ARP Cache</h3>

            <div className="arp-cache-head">
                <span>IP Address</span>
                <span>MAC Address</span>
            </div>

            {rows.map(([ip, mac]) => (
                <div className="arp-cache-row" key={ip}>
                    <span>{ip}</span>
                    <span>{mac}</span>
                </div>
            ))}

        </div>
    );
}

export default function ArpSimulation() {
    const [currentStep, setCurrentStep] = useState(0);
    const navigate = useNavigate();

    const step = steps[currentStep];

    const progress = useMemo(
        () => ((currentStep + 1) / steps.length) * 100,
        [currentStep]
    );

    return (
        <main className="arp-page">

            <button
                type="button"
                onClick={() => navigate("/protocols")}
                style={{
                    display: "block",
                    marginBottom: "28px",
                    padding: "8px 15px",
                    border: "1px solid #cfe2f2",
                    borderRadius: "8px",
                    background: "#e8f4fd",
                    color: "#3278c8",
                    fontSize: "13px",
                    fontWeight: 700,
                    cursor: "pointer",
                }}
            >
                Back
            </button>

            <section className="arp-intro">

                <h1>Address Resolution Protocol</h1>

                <div className="arp-intro-points">

                    <div>
                        <p>
                            ARP maps an IPv4 address to the MAC address needed
                            for local Ethernet delivery.
                        </p>
                    </div>

                    <div>
                        <p>
                            ARP uses requests and replies to discover the MAC
                            address associated with an IP address.
                        </p>
                    </div>

                    <div>
                        <p>
                            When the destination is on another network, ARP resolves the
                            MAC address of the local default gateway for the first hop.
                        </p>
                    </div>

                </div>

            </section>


            <section className="arp-topology-section">

                <div className="arp-section-heading">

                    <div>
                        <h2>Workflow</h2>

                        <p className="arp-workflow-subtitle">
                            PC1 → PC7
                        </p>
                    </div>

                    <div className="arp-step-counter">
                        Step {currentStep + 1}/{steps.length}
                    </div>

                </div>


                <div className="arp-workflow-layout">

                    <button
                        className="arp-workflow-arrow arp-workflow-prev"
                        onClick={() =>
                            setCurrentStep((value) =>
                                Math.max(value - 1, 0)
                            )
                        }
                        disabled={currentStep === 0}
                        aria-label="Previous step"
                    >
                        ‹
                    </button>


                    <Topology
                        active={step.active}
                        packet={step.packet}
                    />


                    <button
                        className="arp-workflow-arrow arp-workflow-next"
                        onClick={() =>
                            setCurrentStep((value) =>
                                Math.min(
                                    value + 1,
                                    steps.length - 1
                                )
                            )
                        }
                        disabled={currentStep === steps.length - 1}
                        aria-label="Next step"
                    >
                        ›
                    </button>

                </div>


                <div className="arp-step-panel">

                    <div className="arp-step-progress">
                        <div style={{ width: `${progress}%` }} />
                    </div>


                    <div className="arp-step-content">


                        <div className="arp-step-text">

                            <h3>{step.title}</h3>

                            <p>{step.text}</p>

                        </div>


                        <Cache rows={step.cache} />

                    </div>

                </div>

            </section>


            <section className="arp-terms">

                <div className="arp-section-heading">

                    <div>
                        <h2>ARP Building Blocks</h2>
                    </div>

                </div>


                <div className="arp-term-grid">

                    <article>
                        <h3>ARP Cache</h3>
                        <p>
                            The ARP cache is a temporary table containing IP address and
                            MAC address mappings learned by a device.
                        </p>
                    </article>

                    <article>
                        <h3>ARP Request</h3>
                        <p>
                            An ARP request is a broadcast message asking which device owns
                            a particular IPv4 address.
                        </p>
                    </article>

                    <article>
                        <h3>ARP Reply</h3>
                        <p>
                            An ARP reply is a response containing the MAC address associated
                            with the requested IPv4 address.
                        </p>
                    </article>

                    <article>
                        <h3>Broadcast</h3>
                        <p>
                            A broadcast is an Ethernet transmission sent to devices within
                            the local broadcast domain.
                        </p>
                    </article>

                    <article>
                        <h3>Default Gateway</h3>
                        <p>
                            The default gateway is the router interface used when a host needs
                            to reach another IP network.
                        </p>
                    </article>

                    <article>
                        <h3>MAC Address</h3>
                        <p>
                            A MAC address is a Layer 2 address used for Ethernet frame delivery
                            on a local network.
                        </p>
                    </article>

                </div>

            </section>


            <section className="arp-working">

                <h2>How ARP works</h2>

                <div className="arp-working-list">

                    <p>
                        <strong>1.</strong>
                        A host determines that it needs the MAC address
                        associated with an IPv4 address.
                    </p>

                    <p>
                        <strong>2.</strong>
                        The host checks its ARP cache.
                    </p>

                    <p>
                        <strong>3.</strong>
                        If no valid mapping exists, the host broadcasts an
                        ARP request.
                    </p>

                    <p>
                        <strong>4.</strong>
                        The device owning the requested IP address sends an
                        ARP reply.
                    </p>

                    <p>
                        <strong>5.</strong>
                        The sender stores the mapping and uses the MAC
                        address for Ethernet delivery.
                    </p>

                </div>

            </section>


            <section className="arp-types">

                <div className="arp-section-heading">

                    <div>
                        <h2>Types of ARP</h2>
                    </div>

                </div>


                <div className="arp-type-grid">

                    <article>
                        <h3>Normal ARP</h3>

                        <p>
                            Normal ARP resolves an IPv4 address into a MAC address on a
                            local network by using an ARP request and reply when the mapping
                            is unknown.
                        </p>
                    </article>


                    <article>
                        <h3>Gratuitous ARP</h3>

                        <p>
                            Gratuitous ARP announces a device's own IP-to-MAC mapping and
                            can update neighboring ARP caches or help detect duplicate IP addresses.
                        </p>
                    </article>


                    <article>
                        <h3>Proxy ARP</h3>

                        <p>
                            Proxy ARP allows a router to answer an ARP request on behalf of
                            another device or network so devices on different segments can appear
                            reachable through the router.
                        </p>
                    </article>


                    <article>
                        <h3>Reverse ARP</h3>

                        <p>
                            Reverse ARP was designed to discover an IP address from a known
                            MAC address and has largely been replaced by BOOTP and DHCP.
                        </p>
                    </article>


                    <article>
                        <h3>Inverse ARP</h3>

                        <p>
                            Inverse ARP discovers a Layer 3 address associated with a known
                            Layer 2 circuit identifier and was mainly associated with Frame Relay.
                        </p>
                    </article>

                </div>

            </section>

        </main>
    );
}