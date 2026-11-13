export const osiTopics = [
    {
        id: "what-is-osi",
        title: "What Is OSI?"
    },
    {
        id: "seven-layers",
        title: "7 OSI Layers"
    },
    {
        id: "data-flow",
        title: "Data Flow"
    },
    {
        id: "osi-vs-tcpip",
        title: "OSI vs TCP/IP"
    },
    {
        id: "devices-layers",
        title: "Devices & Layers"
    }
];

export const osiLayers = [
    {
        number: 7,
        name: "Application",
        pdu: "Data"
    },
    {
        number: 6,
        name: "Presentation",
        pdu: "Data"
    },
    {
        number: 5,
        name: "Session",
        pdu: "Data"
    },
    {
        number: 4,
        name: "Transport",
        pdu: "Segment"
    },
    {
        number: 3,
        name: "Network",
        pdu: "Packet"
    },
    {
        number: 2,
        name: "Data Link",
        pdu: "Frame"
    },
    {
        number: 1,
        name: "Physical",
        pdu: "Bits"
    }
];

export const protocolLayers = [
    {
        number: 7,
        name: "Application",
        protocols: [
            "HTTP",
            "HTTPS",
            "DNS",
            "DHCP",
            "FTP",
            "SMTP",
            "SSH"
        ]
    },
    {
        number: 6,
        name: "Presentation",
        protocols: [
            "TLS/SSL",
            "MIME"
        ]
    },
    {
        number: 5,
        name: "Session",
        protocols: [
            "RPC",
            "NetBIOS"
        ]
    },
    {
        number: 4,
        name: "Transport",
        protocols: [
            "TCP",
            "UDP"
        ]
    },
    {
        number: 3,
        name: "Network",
        protocols: [
            "IPv4",
            "IPv6",
            "ICMP",
            "OSPF",
            "RIP"
        ]
    },
    {
        number: 2,
        name: "Data Link",
        protocols: [
            "Ethernet",
            "Wi-Fi",
            "VLAN",
            "PPP",
            "STP"
        ]
    },
    {
        number: 1,
        name: "Physical",
        protocols: [
            "Copper",
            "Fiber",
            "Radio"
        ]
    }
];

export const osiContent = {
    whatIsOSI: [
        {
            heading: "Definition",
            points: [
                "The OSI model is a conceptual framework used to understand network communication.",
                "It divides networking functions into seven separate layers.",
                "Each layer performs a specific group of communication-related tasks.",
                "The layers work together to move data between communicating devices.",
                "The model provides a common way to describe how network communication works."
            ]
        },
        {
            heading: "History",
            points: [
                "The OSI model was developed by the International Organization for Standardization.",
                "It was introduced as a standard framework for open systems communication.",
                "The model became widely used for explaining network architecture.",
                "Its seven-layer structure became an important part of networking education.",
                "The model continues to be used as a reference for understanding protocols and devices."
            ]
        },
        {
            heading: "Purpose",
            points: [
                "The model separates complex networking functions into manageable sections.",
                "It provides a standard reference for describing communication processes.",
                "It helps different technologies and systems be discussed using common terminology.",
                "It makes network communication easier to design, study and troubleshoot.",
                "It helps engineers identify which part of communication is responsible for a problem."
            ]
        },
        {
            heading: "Seven-Layer Structure",
            points: [
                "Application is Layer 7 and is closest to the applications used by users.",
                "Presentation is Layer 6 and handles data representation-related functions.",
                "Session is Layer 5 and manages communication sessions.",
                "Transport, Network, Data Link and Physical handle progressively lower-level communication functions.",
                "Together, the seven layers describe communication from applications down to physical transmission."
            ]
        },
        {
            heading: "How the Layers Work Together",
            points: [
                "Data moves downward through the layers at the sending device.",
                "Each layer performs its required networking function before passing data downward.",
                "The receiving device processes the information upward through its layers.",
                "Each layer works with the corresponding layer on the other device conceptually.",
                "This layered approach keeps different networking responsibilities organized."
            ]
        },
        {
            heading: "Real-World Analogy",
            points: [
                "The OSI model can be compared to an organized postal delivery system.",
                "Different stages are responsible for different parts of delivering information.",
                "A higher stage deals with the message while lower stages deal with transportation.",
                "Each stage passes the required information to the next stage.",
                "The complete process allows a message to reach its destination systematically."
            ]
        },
        {
            heading: "Key Benefit",
            points: [
                "The model reduces the complexity of learning computer networking.",
                "It provides a standard vocabulary for network communication.",
                "It makes troubleshooting easier by allowing engineers to isolate layers.",
                "It helps compare different networking technologies.",
                "It provides a clear foundation for understanding real networking protocols."
            ]
        }
    ],

    sevenLayers: [
        {
            heading: "Layer 7 — Application",
            points: [
                "Provides network-related services used directly by application software.",
                "It is the closest OSI layer to the end user.",
                "Web browsing, email and file transfer use services associated with this layer.",
                "Common protocols include HTTP, HTTPS, DNS, DHCP, FTP, SMTP and SSH.",
                "The PDU at this level is generally referred to as Data."
            ]
        },
        {
            heading: "Layer 6 — Presentation",
            points: [
                "Handles the representation and formatting of data.",
                "It can perform data translation between different formats.",
                "Encryption and decryption can be associated with presentation functions.",
                "Compression can reduce the amount of data that needs to be transmitted.",
                "TLS/SSL and MIME are commonly discussed with presentation-related functions."
            ]
        },
        {
            heading: "Layer 5 — Session",
            points: [
                "Establishes and manages communication sessions between applications.",
                "It helps control when a communication session begins and ends.",
                "Session-related mechanisms can maintain communication between systems.",
                "Synchronization can help manage long communication processes.",
                "RPC and NetBIOS are examples commonly associated with session functions."
            ]
        },
        {
            heading: "Layer 4 — Transport",
            points: [
                "Provides end-to-end communication between applications.",
                "It divides larger application data into smaller units for transmission.",
                "TCP provides reliable, connection-oriented delivery.",
                "UDP provides connectionless communication with lower overhead.",
                "The PDU at this layer is commonly called a Segment for TCP."
            ]
        },
        {
            heading: "Layer 3 — Network",
            points: [
                "Provides logical addressing between different networks.",
                "IP addresses identify source and destination devices logically.",
                "Routers use Layer 3 information to forward packets.",
                "IPv4 and IPv6 provide network-layer addressing and delivery.",
                "ICMP, OSPF and RIP are also commonly associated with Layer 3."
            ]
        },
        {
            heading: "Layer 2 — Data Link",
            points: [
                "Provides communication between directly connected nodes.",
                "It organizes network-layer packets into frames.",
                "MAC addresses are used for local network communication.",
                "Ethernet and Wi-Fi are common Layer 2 technologies.",
                "VLAN, PPP and STP are also commonly associated with Data Link functions."
            ]
        },
        {
            heading: "Layer 1 — Physical",
            points: [
                "Transmits raw bits through a physical communication medium.",
                "It deals with electrical, optical or radio signals.",
                "Copper cables can carry electrical signals.",
                "Fiber-optic cables carry information using light.",
                "Wireless communication uses radio signals as the physical medium."
            ]
        }
    ],

    osiVsTcpIp: [
        {
            heading: "Layer Count",
            points: [
                "The OSI model contains seven layers.",
                "The TCP/IP model is commonly represented using four layers.",
                "OSI separates Application, Presentation and Session functions.",
                "TCP/IP combines these higher-level functions into its Application layer.",
                "The difference in layer count comes mainly from how functions are grouped."
            ]
        },
        {
            heading: "Application Layer",
            points: [
                "OSI has separate Application, Presentation and Session layers.",
                "TCP/IP combines these functions into its Application layer.",
                "Application protocols operate at the upper portion of the TCP/IP model.",
                "Examples include HTTP, DNS, FTP and SMTP.",
                "The combined approach makes the TCP/IP model more compact."
            ]
        },
        {
            heading: "Transport Layer",
            points: [
                "Both models contain a Transport layer.",
                "The Transport layer provides end-to-end communication.",
                "TCP provides reliable connection-oriented communication.",
                "UDP provides connectionless communication.",
                "The main transport responsibilities are similar in both models."
            ]
        },
        {
            heading: "Network and Internet Functions",
            points: [
                "OSI uses the Network layer for logical addressing and routing.",
                "TCP/IP uses the Internet layer for similar functions.",
                "IP is the main protocol associated with the TCP/IP Internet layer.",
                "Routers operate mainly using information associated with this layer.",
                "Both models explain how packets can move between different networks."
            ]
        },
        {
            heading: "Lower Layers",
            points: [
                "OSI separates Data Link and Physical into two layers.",
                "TCP/IP commonly combines these functions into the Network Access layer.",
                "Ethernet is associated with local network communication.",
                "Physical media carry the actual signals.",
                "The TCP/IP model therefore uses fewer layers at the bottom as well."
            ]
        },
        {
            heading: "Development Approach",
            points: [
                "OSI was developed as a general reference model for networking.",
                "TCP/IP developed around protocols that were implemented and used in real networks.",
                "OSI provides a more detailed separation of networking functions.",
                "TCP/IP focuses on a practical protocol architecture.",
                "The Internet is based on the TCP/IP protocol suite."
            ]
        },
        {
            heading: "Why Both Models Matter",
            points: [
                "OSI is useful for learning and explaining networking concepts.",
                "TCP/IP is important for understanding real Internet communication.",
                "OSI helps identify functions at individual layers.",
                "TCP/IP helps understand how actual Internet protocols are organized.",
                "Knowing both models makes protocol and network troubleshooting easier."
            ]
        }
    ],

    devicesLayers: [
        {
            heading: "Physical Layer Devices",
            points: [
                "Hubs operate mainly at the Physical layer.",
                "Repeaters regenerate and retransmit physical signals.",
                "Cables provide the physical path for signal transmission.",
                "Copper, fiber and wireless media are examples of physical transmission mediums.",
                "These components do not normally make routing decisions using IP addresses."
            ]
        },
        {
            heading: "Data Link Devices",
            points: [
                "Switches primarily operate at the Data Link layer.",
                "Bridges connect and filter traffic between network segments.",
                "Switches use MAC addresses to make forwarding decisions.",
                "Layer 2 communication is based on frames.",
                "Wireless access points also perform important Data Link functions."
            ]
        },
        {
            heading: "Network Layer Devices",
            points: [
                "Routers primarily operate at the Network layer.",
                "Routers use IP addresses to forward packets between networks.",
                "Layer 3 switches can perform routing functions as well as switching.",
                "Routing decisions are based on network-layer information.",
                "The main PDU handled at this level is the packet."
            ]
        },
        {
            heading: "Transport and Higher Layers",
            points: [
                "Some modern devices inspect Transport-layer information.",
                "Firewalls can filter traffic using TCP or UDP port information.",
                "Load balancers can operate at Layer 4 or higher.",
                "Application-aware devices can inspect information at Layer 7.",
                "The exact layer depends on the device's functions and configuration."
            ]
        },
        {
            heading: "Firewalls",
            points: [
                "Firewalls control network traffic according to security rules.",
                "They can inspect source and destination information.",
                "Some firewalls inspect TCP and UDP ports.",
                "Modern firewalls can also inspect application-level traffic.",
                "Their operation can therefore involve multiple OSI layers."
            ]
        },
        {
            heading: "Load Balancers",
            points: [
                "Load balancers distribute traffic across multiple servers.",
                "Layer 4 load balancing uses transport-level information.",
                "Layer 7 load balancing can inspect application-level information.",
                "They help improve availability and resource utilization.",
                "Their OSI layer depends on the type of traffic inspection being performed."
            ]
        },
        {
            heading: "Why Device Layers Matter",
            points: [
                "Knowing the typical layer of a device helps understand its function.",
                "It helps identify which information the device can inspect.",
                "It makes network troubleshooting more systematic.",
                "It helps engineers choose suitable devices for network designs.",
                "Modern devices can sometimes operate across multiple layers."
            ]
        }
    ]
};

export const deviceLayerGroups = [
    {
        layer: "Layer 7",
        description: "Application",
        devices: [
            "Application Gateway",
            "Proxy Server",
            "Application Firewall",
            "Load Balancer"
        ]
    },
    {
        layer: "Layer 4",
        description: "Transport",
        devices: [
            "Load Balancer",
            "Firewall"
        ]
    },
    {
        layer: "Layer 3",
        description: "Network",
        devices: [
            "Router",
            "Layer 3 Switch",
            "Firewall"
        ]
    },
    {
        layer: "Layer 2",
        description: "Data Link",
        devices: [
            "Switch",
            "Bridge",
            "Access Point"
        ]
    },
    {
        layer: "Layer 1",
        description: "Physical",
        devices: [
            "Hub",
            "Repeater",
            "Cable"
        ]
    }
];