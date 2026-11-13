const stpData = {
    title: "Spanning Tree Protocol (STP)",

    intro: [
        "STP is a Data Link Layer protocol used in LANs to prevent frames from looping when redundant links exist between switches.",
        "Redundant links improve network availability, but they can cause repeated frame forwarding and continuous loops in the LAN.",
        "STP prevents these loops by placing switch ports in forwarding or blocking states so that unnecessary paths do not continue forwarding frames.",
    ],

    pdu: "STP Message",

    workflow: [
        {
            title: "The redundant LAN is connected",
            text: "Three switches are connected with redundant links, and each switch has a user device attached to it, creating multiple possible paths through the LAN.",
            activeNodes: [
                "pc1",
                "switch1",
                "switch2",
                "switch3",
            ],
            activeLines: [
                "pc1-switch1",
                "switch1-switch2",
                "switch1-switch3",
                "switch2-switch3",
            ],
            activeArrows: [],
            blockedLines: [],
        },

        {
            title: "PC1 sends a broadcast frame",
            text: "PC1 sends a broadcast frame into the LAN, and the frame reaches Switch 1 through its connected port.",
            activeNodes: [
                "pc1",
                "switch1",
            ],
            activeLines: [
                "pc1-switch1",
            ],
            activeArrows: [
                {
                    line: "pc1-switch1",
                    direction: "forward",
                },
            ],
            blockedLines: [],
        },

        {
            title: "Switch 1 forwards the broadcast",
            text: "Because the frame is a broadcast, Switch 1 sends copies through both of its other connected switch links.",
            activeNodes: [
                "switch1",
                "switch2",
                "switch3",
            ],
            activeLines: [
                "switch1-switch2",
                "switch1-switch3",
            ],
            activeArrows: [
                {
                    line: "switch1-switch2",
                    direction: "forward",
                },
                {
                    line: "switch1-switch3",
                    direction: "forward",
                },
            ],
            blockedLines: [],
        },

        {
            title: "The frame reaches the other switches",
            text: "Switch 2 and Switch 3 receive copies of the broadcast and continue forwarding them across the available redundant links.",
            activeNodes: [
                "switch1",
                "switch2",
                "switch3",
                "pc2",
                "pc3",
            ],
            activeLines: [
                "switch1-switch2",
                "switch1-switch3",
                "switch2-switch3",
                "switch2-pc2",
                "switch3-pc3",
            ],
            activeArrows: [
                {
                    line: "switch1-switch2",
                    direction: "forward",
                },
                {
                    line: "switch1-switch3",
                    direction: "forward",
                },
                {
                    line: "switch2-switch3",
                    direction: "forward",
                },
                {
                    line: "switch2-pc2",
                    direction: "forward",
                },
                {
                    line: "switch3-pc3",
                    direction: "forward",
                },
            ],
            blockedLines: [],
        },

        {
            title: "The redundant path creates a loop",
            text: "The broadcast can travel from Switch 1 to Switch 2, continue to Switch 3, and return toward Switch 1 through the redundant link, causing continuous frame circulation.",
            activeNodes: [
                "switch1",
                "switch2",
                "switch3",
            ],
            activeLines: [
                "switch1-switch2",
                "switch2-switch3",
                "switch1-switch3",
            ],
            activeArrows: [
                {
                    line: "switch1-switch2",
                    direction: "forward",
                },
                {
                    line: "switch2-switch3",
                    direction: "forward",
                },
                {
                    line: "switch1-switch3",
                    direction: "reverse",
                },
            ],
            blockedLines: [],
        },

        {
            title: "STP places one port in blocking state",
            text: "STP blocks the redundant Switch 1 to Switch 3 path so frames cannot continue forwarding through that extra connection.",
            activeNodes: [
                "switch1",
                "switch2",
                "switch3",
            ],
            activeLines: [
                "switch1-switch2",
                "switch2-switch3",
            ],
            activeArrows: [
                {
                    line: "switch1-switch2",
                    direction: "forward",
                },
                {
                    line: "switch2-switch3",
                    direction: "forward",
                },
            ],
            blockedLines: [
                "switch1-switch3",
            ],
        },

        {
            title: "The broadcast uses only forwarding links",
            text: "With the redundant Switch 1 to Switch 3 path blocked, the broadcast continues from Switch 1 through Switch 2 and then to Switch 3 using the forwarding path.",
            activeNodes: [
                "switch1",
                "switch2",
                "switch3",
            ],
            activeLines: [
                "switch1-switch2",
                "switch2-switch3",
            ],
            activeArrows: [
                {
                    line: "switch1-switch2",
                    direction: "forward",
                },
                {
                    line: "switch2-switch3",
                    direction: "forward",
                },
            ],
            blockedLines: [
                "switch1-switch3",
            ],
        },

        {
            title: "The blocked port ignores the repeated frame",
            text: "When the broadcast reaches the blocked path, that interface does not process or forward the normal frame, so the frame cannot return through that redundant link.",
            activeNodes: [
                "switch1",
                "switch2",
                "switch3",
            ],
            activeLines: [
                "switch1-switch2",
                "switch2-switch3",
            ],
            activeArrows: [
                {
                    line: "switch1-switch2",
                    direction: "forward",
                },
                {
                    line: "switch2-switch3",
                    direction: "forward",
                },
            ],
            blockedLines: [
                "switch1-switch3",
            ],
        },

        {
            title: "The LAN continues without a frame loop",
            text: "The forwarding path remains active for normal communication while the blocked redundant link prevents the broadcast from circulating back and creating a loop.",
            activeNodes: [
                "pc1",
                "switch1",
                "switch2",
                "switch3",
                "pc2",
                "pc3",
            ],
            activeLines: [
                "pc1-switch1",
                "switch1-switch2",
                "switch2-switch3",
                "switch2-pc2",
                "switch3-pc3",
            ],
            activeArrows: [
                {
                    line: "pc1-switch1",
                    direction: "forward",
                },
                {
                    line: "switch1-switch2",
                    direction: "forward",
                },
                {
                    line: "switch2-switch3",
                    direction: "forward",
                },
                {
                    line: "switch2-pc2",
                    direction: "forward",
                },
                {
                    line: "switch3-pc3",
                    direction: "forward",
                },
            ],
            blockedLines: [
                "switch1-switch3",
            ],
        },
    ],

    theory: {
        "STP Basics": [
            {
                heading: "Purpose of STP",
                points: [
                    "STP prevents frame loops in LANs that contain redundant links between switches.",
                ],
            },
            {
                heading: "Redundant Links",
                points: [
                    "Redundant links improve LAN availability but can also create multiple forwarding paths for the same frame.",
                ],
            },
            {
                heading: "Data Link Layer",
                points: [
                    "STP works at the Data Link Layer to control how switch ports handle frames.",
                ],
            },
        ],

        "Need for Spanning Tree": [
            {
                heading: "Frame Looping",
                points: [
                    "A broadcast frame can travel through multiple redundant switch paths and continue circulating around the LAN.",
                ],
            },
            {
                heading: "Broadcast Storm",
                points: [
                    "Continuous forwarding of broadcast frames can create a broadcast storm that wastes network resources.",
                ],
            },
            {
                heading: "MAC Table Instability",
                points: [
                    "Repeated frame looping can frequently change switch MAC-table entries and cause incorrect frame delivery.",
                ],
            },
            {
                heading: "Multiple Frame Transmission",
                points: [
                    "Looping can cause multiple copies of the same frame to reach a host, creating confusion at the destination.",
                ],
            },
        ],

        "STP Port States": [
            {
                heading: "Forwarding State",
                points: [
                    "A forwarding port operates normally and continues processing and forwarding network frames.",
                ],
            },
            {
                heading: "Blocking State",
                points: [
                    "A blocking port does not process or forward normal frames and only handles STP-related messages and required overhead.",
                ],
            },
            {
                heading: "MAC Learning",
                points: [
                    "A blocked interface does not learn MAC addresses while it remains in the blocking state.",
                ],
            },
        ],

        "How STP Prevents Loops": [
            {
                heading: "Loop Detection",
                points: [
                    "STP identifies redundant forwarding paths that could allow frames to circulate repeatedly through the LAN.",
                ],
            },
            {
                heading: "Redundant Port Blocking",
                points: [
                    "STP places a selected redundant switch interface into blocking state to remove the extra forwarding path.",
                ],
            },
            {
                heading: "Forwarding Path",
                points: [
                    "Frames continue through the remaining forwarding links instead of circulating across every redundant connection.",
                ],
            },
            {
                heading: "Blocked Frame Handling",
                points: [
                    "A frame arriving at a blocked interface is ignored instead of being forwarded again through the redundant path.",
                ],
            },
        ],

        "Effects of Frame Loops": [
            {
                heading: "Network Inefficiency",
                points: [
                    "Repeated forwarding consumes network links unnecessarily and reduces efficient use of the LAN.",
                ],
            },
            {
                heading: "Incorrect MAC Entries",
                points: [
                    "Continuous frame movement can cause switches to learn changing and incorrect MAC-address locations.",
                ],
            },
            {
                heading: "Duplicate Frames",
                points: [
                    "Hosts may receive multiple copies of the same frame because the frame continues circulating through the network.",
                ],
            },
        ],

        "STP Operation": [
            {
                heading: "Broadcast Transmission",
                points: [
                    "A broadcast frame entering a switch is forwarded through the other forwarding ports connected to the LAN.",
                ],
            },
            {
                heading: "Redundant Path Control",
                points: [
                    "STP prevents a redundant path from also forwarding the same frame when that path would create a loop.",
                ],
            },
            {
                heading: "Controlled Forwarding",
                points: [
                    "The LAN continues forwarding traffic through the active links while the unnecessary path remains blocked.",
                ],
            },
        ],

        "Applications": [
            {
                heading: "Redundant LANs",
                points: [
                    "STP is used in LANs where redundant switch links are added to improve network availability.",
                ],
            },
            {
                heading: "Enterprise Networks",
                points: [
                    "STP helps prevent switching loops in larger local networks that contain multiple interconnected switches.",
                ],
            },
            {
                heading: "Campus Networks",
                points: [
                    "STP can be used in campus-style LAN environments where alternate switch connections are required for availability.",
                ],
            },
        ],
    },
};

export default stpData;