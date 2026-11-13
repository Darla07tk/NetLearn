const osiQuizData = [

    {
        id: 1,
        question:
            "A student wants a standard framework for understanding how different networking functions work together during communication. Which model provides this seven-layer reference?",
        options: {
            A: "TCP/IP model",
            B: "OSI model",
            C: "Client-server model",
            D: "Peer-to-peer model"
        },
        correctAnswer: "B"
    },

    {
        id: 2,
        question:
            "What is the main purpose of dividing networking functions into separate OSI layers?",
        options: {
            A: "To make all networks use the same hardware",
            B: "To separate complex networking functions into manageable sections",
            C: "To remove the need for networking protocols",
            D: "To ensure every network uses seven physical devices"
        },
        correctAnswer: "B"
    },

    {
        id: 3,
        question:
            "Which organization developed the OSI model as a standard framework for open systems communication?",
        options: {
            A: "Internet Engineering Task Force",
            B: "International Organization for Standardization",
            C: "IEEE",
            D: "Internet Corporation for Assigned Names and Numbers"
        },
        correctAnswer: "B"
    },

    {
        id: 4,
        question:
            "A device sends information downward through the OSI layers, while the receiving device processes the information upward. What does this demonstrate?",
        options: {
            A: "The layered approach to communication",
            B: "Only physical-layer communication",
            C: "Packet switching without protocols",
            D: "Routing-table construction"
        },
        correctAnswer: "A"
    },

    {
        id: 5,
        question:
            "A web browser uses network-related services associated with the OSI layer closest to the end user. Which layer is this?",
        options: {
            A: "Physical",
            B: "Data Link",
            C: "Application",
            D: "Transport"
        },
        correctAnswer: "C"
    },

    {
        id: 6,
        question:
            "A networking function needs to handle data formatting, translation, encryption, and compression. Which OSI layer is most closely associated with these functions?",
        options: {
            A: "Presentation",
            B: "Session",
            C: "Network",
            D: "Data Link"
        },
        correctAnswer: "A"
    },

    {
        id: 7,
        question:
            "An application needs to establish, manage, and control a communication session between systems. Which OSI layer provides these session-related functions?",
        options: {
            A: "Application",
            B: "Presentation",
            C: "Session",
            D: "Transport"
        },
        correctAnswer: "C"
    },

    {
        id: 8,
        question:
            "A network application requires reliable, connection-oriented end-to-end delivery. Which protocol and OSI layer match this requirement?",
        options: {
            A: "UDP at the Network layer",
            B: "TCP at the Transport layer",
            C: "IP at the Data Link layer",
            D: "Ethernet at the Session layer"
        },
        correctAnswer: "B"
    },

    {
        id: 9,
        question:
            "Which statement best describes UDP according to the OSI transport-layer theory?",
        options: {
            A: "It provides connectionless communication with lower overhead",
            B: "It always establishes a reliable connection before transmission",
            C: "It provides logical addressing between networks",
            D: "It creates Ethernet frames"
        },
        correctAnswer: "A"
    },

    {
        id: 10,
        question:
            "A router needs to forward a packet between two different networks. Which OSI layer provides the information mainly used for this function?",
        options: {
            A: "Layer 1 — Physical",
            B: "Layer 2 — Data Link",
            C: "Layer 3 — Network",
            D: "Layer 5 — Session"
        },
        correctAnswer: "C"
    },

    {
        id: 11,
        question:
            "Which combination correctly matches an OSI layer, its PDU, and its main addressing function?",
        options: {
            A: "Network — Packet — Logical addressing",
            B: "Data Link — Segment — Logical addressing",
            C: "Transport — Frame — MAC addressing",
            D: "Physical — Data — IP addressing"
        },
        correctAnswer: "A"
    },

    {
        id: 12,
        question:
            "A device organizes network-layer packets into frames and uses MAC addresses for local communication. Which OSI layer is performing these functions?",
        options: {
            A: "Application",
            B: "Transport",
            C: "Network",
            D: "Data Link"
        },
        correctAnswer: "D"
    },

    {
        id: 13,
        question:
            "A communication medium carries information using light instead of electrical signals. Which Physical-layer medium does this describe?",
        options: {
            A: "Copper",
            B: "Fiber",
            C: "Wi-Fi",
            D: "MAC addressing"
        },
        correctAnswer: "B"
    },

    {
        id: 14,
        question:
            "What is one major structural difference between the OSI model and the commonly represented TCP/IP model?",
        options: {
            A: "OSI has four layers while TCP/IP has seven",
            B: "OSI has seven layers while TCP/IP is commonly represented using four",
            C: "Both models always have exactly seven layers",
            D: "TCP/IP separates Presentation and Session while OSI combines them"
        },
        correctAnswer: "B"
    },

    {
        id: 15,
        question:
            "Which OSI layers are commonly combined into the TCP/IP Application layer?",
        options: {
            A: "Transport, Network, and Data Link",
            B: "Application, Presentation, and Session",
            C: "Network, Data Link, and Physical",
            D: "Session, Transport, and Network"
        },
        correctAnswer: "B"
    },

    {
        id: 16,
        question:
            "In the TCP/IP model, which layer performs functions similar to the OSI Network layer, including logical addressing and routing?",
        options: {
            A: "Application layer",
            B: "Transport layer",
            C: "Internet layer",
            D: "Network Access layer"
        },
        correctAnswer: "C"
    },

    {
        id: 17,
        question:
            "How does the TCP/IP model commonly group the lower functions that are separated into Data Link and Physical layers in the OSI model?",
        options: {
            A: "Into the Application layer",
            B: "Into the Transport layer",
            C: "Into the Internet layer",
            D: "Into the Network Access layer"
        },
        correctAnswer: "D"
    },

    {
        id: 18,
        question:
            "Which statement best describes the development approach of the OSI model compared with TCP/IP?",
        options: {
            A: "OSI was developed as a general reference model, while TCP/IP developed around protocols used in real networks",
            B: "OSI was designed only for wireless networks, while TCP/IP was designed only for wired networks",
            C: "OSI and TCP/IP were developed with exactly the same practical approach",
            D: "TCP/IP was developed only as a classroom reference model"
        },
        correctAnswer: "A"
    },

    {
        id: 19,
        question:
            "Which device-to-layer combination is correctly matched according to the OSI device theory?",
        options: {
            A: "Hub — Data Link layer",
            B: "Repeater — Physical layer",
            C: "Router — Physical layer",
            D: "Switch — Network layer only"
        },
        correctAnswer: "B"
    },

    {
        id: 20,
        question:
            "A networking device distributes traffic among servers and can make decisions using either TCP/UDP information or application-level information. Which statement best matches the OSI device theory?",
        options: {
            A: "A load balancer can operate at Layer 4 or Layer 7",
            B: "A load balancer operates only at Layer 1",
            C: "A load balancer can operate only at Layer 2",
            D: "A load balancer is always a Physical-layer device"
        },
        correctAnswer: "A"
    }

];

export default osiQuizData;