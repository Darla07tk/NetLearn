const ethernetData = {
    title: "Ethernet Protocol",

    intro: [
        "Ethernet is a widely used LAN technology standardized by IEEE 802.3 for communication over wired networks.",
        "Ethernet operates across the Physical and Data Link layers, with the Data Link layer divided into Logical Link Control (LLC) and Media Access Control (MAC).",
        "Ethernet delivers data using frames that contain addressing information, payload data, and error-checking information.",
    ],

    pdu: "Ethernet Frame",

    workflow: [
        {
            title: "Data reaches the Ethernet interface",
            text: "The source device has data to send through the Ethernet network, and the network interface prepares it for Ethernet communication.",
            activeNodes: [
                "sourcePC",
            ],
            activeLines: [],
            activeArrow: null,
        },

        {
            title: "LLC prepares the data link information",
            text: "The LLC sublayer connects the upper network functions with the lower Ethernet functions and adds the control information needed for communication.",
            activeNodes: [
                "sourcePC",
            ],
            activeLines: [],
            activeArrow: null,
        },

        {
            title: "MAC creates the Ethernet frame",
            text: "The MAC sublayer prepares the frame with the destination MAC address, source MAC address, payload, and error-checking information.",
            activeNodes: [
                "sourcePC",
            ],
            activeLines: [],
            activeArrow: null,
        },

        {
            title: "The sender checks the medium",
            text: "Before transmission, Ethernet uses its medium access method to check whether the shared communication medium is available for sending.",
            activeNodes: [
                "sourcePC",
            ],
            activeLines: [],
            activeArrow: null,
        },

        {
            title: "The Ethernet frame is transmitted",
            text: "The completed frame is converted into signals and transmitted through the physical Ethernet connection toward the destination side of the LAN.",
            activeNodes: [
                "sourcePC",
                "ethernetSwitch",
            ],
            activeLines: [
                "source-switch",
            ],
            activeArrow: {
                line: "source-switch",
                direction: "forward",
            },
        },

        {
            title: "The switch forwards the frame",
            text: "The Ethernet switch passes the frame toward the connected destination device through the appropriate Ethernet connection.",
            activeNodes: [
                "sourcePC",
                "ethernetSwitch",
                "destinationPC",
            ],
            activeLines: [
                "source-switch",
                "switch-destination",
            ],
            activeArrow: {
                line: "switch-destination",
                direction: "forward",
            },
        },

        {
            title: "The destination checks the frame",
            text: "The destination device checks the destination MAC address and accepts the frame when the address matches the device.",
            activeNodes: [
                "destinationPC",
            ],
            activeLines: [
                "switch-destination",
            ],
            activeArrow: {
                line: "switch-destination",
                direction: "forward",
            },
        },

        {
            title: "CRC detects transmission errors",
            text: "The destination uses the frame's CRC information to check whether the received data has been corrupted during transmission.",
            activeNodes: [
                "destinationPC",
            ],
            activeLines: [],
            activeArrow: null,
        },

        {
            title: "The payload is delivered",
            text: "After the frame is accepted, the Ethernet data is passed upward through the network interface so the destination system can use the received information.",
            activeNodes: [
                "destinationPC",
            ],
            activeLines: [],
            activeArrow: null,
        },
    ],

    theory: {
        "Ethernet Basics": [
            {
                heading: "LAN Technology",
                points: [
                    "Ethernet is a widely used technology for connecting devices within Local Area Networks.",
                ],
            },
            {
                heading: "IEEE 802.3",
                points: [
                    "The present Ethernet standard is defined through the IEEE 802.3 family of specifications.",
                ],
            },
            {
                heading: "Common Topologies",
                points: [
                    "Ethernet networks can use star or linear bus topologies depending on the network design.",
                ],
            },
            {
                heading: "Common Network Environments",
                points: [
                    "Ethernet is commonly used in homes, offices, schools, enterprises, hospitals, and other organizations.",
                ],
            },
        ],

        "Ethernet Architecture": [
            {
                heading: "Physical Layer",
                points: [
                    "The Physical layer handles the cables, network interface hardware, signals, and physical transmission of bits.",
                ],
            },
            {
                heading: "Data Link Layer",
                points: [
                    "The Data Link layer manages frame-based communication between connected network nodes.",
                ],
            },
            {
                heading: "Logical Link Control",
                points: [
                    "LLC provides the connection between upper-layer network functions and the lower Ethernet functions.",
                ],
            },
            {
                heading: "Media Access Control",
                points: [
                    "MAC manages Ethernet access to the communication medium and organizes data for transmission.",
                ],
            },
            {
                heading: "CSMA/CD",
                points: [
                    "The source describes Ethernet's traditional shared-medium access method as Carrier Sense Multiple Access with Collision Detection.",
                ],
            },
        ],

        "Ethernet Frame Structure": [
            {
                heading: "Preamble",
                points: [
                    "The 7-byte preamble provides a repeating bit pattern that helps the sender and receiver achieve bit-level synchronization.",
                ],
            },
            {
                heading: "Start Frame Delimiter",
                points: [
                    "The 1-byte SFD marks the point where the actual Ethernet frame begins.",
                ],
            },
            {
                heading: "Destination MAC Address",
                points: [
                    "The destination field identifies the device or group that should receive the Ethernet frame.",
                ],
            },
            {
                heading: "Source MAC Address",
                points: [
                    "The source field identifies the device that transmitted the Ethernet frame.",
                ],
            },
            {
                heading: "Length",
                points: [
                    "The length field indicates the size information associated with the Ethernet frame.",
                ],
            },
            {
                heading: "Data / Payload",
                points: [
                    "The payload carries the actual data being transmitted and can contain a network-layer packet such as IP data.",
                ],
            },
            {
                heading: "CRC / FCS",
                points: [
                    "The final error-checking field is used to detect corruption in the received Ethernet frame.",
                ],
            },
        ],

        "How Ethernet Works": [
            {
                heading: "Data Preparation",
                points: [
                    "Upper-layer data is passed toward the Ethernet Data Link functions for frame-based transmission.",
                ],
            },
            {
                heading: "Frame Creation",
                points: [
                    "Ethernet places addressing information, payload data, and error-checking information into a frame.",
                ],
            },
            {
                heading: "Physical Transmission",
                points: [
                    "The Physical layer converts the frame into signals or bitstreams that travel across the selected Ethernet medium.",
                ],
            },
            {
                heading: "Frame Delivery",
                points: [
                    "Ethernet network devices carry the frame between connected segments until it reaches the intended destination.",
                ],
            },
            {
                heading: "Error Detection",
                points: [
                    "The receiver uses the frame's CRC information to identify possible transmission corruption.",
                ],
            },
        ],

        "Ethernet Standards": [
            {
                heading: "Standard Ethernet",
                points: [
                    "10 Mbps Ethernet is referred to as Standard Ethernet.",
                ],
            },
            {
                heading: "Fast Ethernet",
                points: [
                    "100 Mbps Ethernet is commonly known as Fast Ethernet.",
                ],
            },
            {
                heading: "Gigabit Ethernet",
                points: [
                    "1000 Mbps Ethernet is known as Gigabit Ethernet and provides much higher transmission speed.",
                ],
            },
            {
                heading: "10 Gigabit Ethernet",
                points: [
                    "10 Gigabit Ethernet standards support transmission rates of 10 Gbps over suitable media.",
                ],
            },
        ],

        "Ethernet Protocol Analyzer": [
            {
                heading: "Traffic Capture",
                points: [
                    "An Ethernet protocol analyzer captures network traffic from LAN or wireless adapters for inspection.",
                ],
            },
            {
                heading: "Packet Analysis",
                points: [
                    "The analyzer examines captured packets and allows network traffic to be studied in detail.",
                ],
            },
            {
                heading: "Filtering",
                points: [
                    "Filtering helps users focus on specific traffic or packet types during network analysis.",
                ],
            },
            {
                heading: "Error Monitoring",
                points: [
                    "Protocol analyzers can display network error information and generate alerts for selected conditions.",
                ],
            },
        ],

        "Advantages": [
            {
                heading: "High Speed",
                points: [
                    "Ethernet supports high transmission speeds, including Fast Ethernet, Gigabit Ethernet, and faster standards.",
                ],
            },
            {
                heading: "Low Cost",
                points: [
                    "Ethernet can provide network connectivity with relatively low implementation cost.",
                ],
            },
            {
                heading: "Simple Maintenance",
                points: [
                    "Ethernet networks are relatively simple to implement and maintain.",
                ],
            },
            {
                heading: "Reliability",
                points: [
                    "Ethernet provides dependable data transfer across suitable network media.",
                ],
            },
            {
                heading: "Noise Resistance",
                points: [
                    "Ethernet is described in the source as having strong resistance to network noise.",
                ],
            },
            {
                heading: "Data Quality",
                points: [
                    "Ethernet provides good quality data transfer across the network.",
                ],
            },
        ],

        "Disadvantages": [
            {
                heading: "Nondeterministic Service",
                points: [
                    "Ethernet does not guarantee a fixed transmission time for every communication.",
                ],
            },
            {
                heading: "Difficult Fault Isolation",
                points: [
                    "A physical Ethernet problem can make it difficult to identify the exact faulty node or cable.",
                ],
            },
            {
                heading: "Frame Size Limitation",
                points: [
                    "Ethernet uses defined frame-size limits, which can restrict how much data is carried in a single frame.",
                ],
            },
            {
                heading: "Traffic Effects",
                points: [
                    "Network efficiency can decrease as Ethernet traffic becomes heavier.",
                ],
            },
            {
                heading: "Not Ideal for Traffic-Intensive Use",
                points: [
                    "The source identifies Ethernet as less suitable for applications with very intensive traffic requirements.",
                ],
            },
        ],

        "Applications": [
            {
                heading: "Device Connectivity",
                points: [
                    "Ethernet connects multiple devices together within a network.",
                ],
            },
            {
                heading: "Home Networks",
                points: [
                    "Ethernet is used to provide wired network connectivity for computers, routers, televisions, and other devices.",
                ],
            },
            {
                heading: "Organizations",
                points: [
                    "Ethernet is widely used in organizations such as schools, companies, and hospitals.",
                ],
            },
            {
                heading: "Enterprise LANs",
                points: [
                    "Ethernet provides dependable wired connectivity for enterprise local networks.",
                ],
            },
            {
                heading: "Internet Access",
                points: [
                    "Ethernet can connect network equipment such as routers to wired network entry points for Internet connectivity.",
                ],
            },
        ],
    },
};

export default ethernetData;