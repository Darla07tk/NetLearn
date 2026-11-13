const fundamentalsQuizData = [
    {
        id: 1,
        question:
            "A college network connects computers, printers, servers, and other devices. What is each participating device commonly called?",
        options: {
            A: "Medium",
            B: "Node",
            C: "Protocol",
            D: "Packet"
        },
        correctAnswer: "B"
    },
    {
        id: 2,
        question:
            "A student sends a message from a phone to another phone. Which combination correctly identifies the sender, message, and medium?",
        options: {
            A: "Other phone, wireless signal, student",
            B: "Wireless network, student, text",
            C: "Student's phone, text message, wireless communication",
            D: "Text message, other phone, protocol"
        },
        correctAnswer: "C"
    },
    {
        id: 3,
        question:
            "Which characteristic best distinguishes a digital signal from an analog signal?",
        options: {
            A: "A digital signal changes continuously",
            B: "A digital signal uses separate or discrete values",
            C: "A digital signal can only travel through fiber",
            D: "A digital signal cannot be affected by noise"
        },
        correctAnswer: "B"
    },
    {
        id: 4,
        question:
            "A file is described as 100 MB while a network connection is described as 100 Mbps. What is the important distinction?",
        options: {
            A: "MB represents bits and Mbps represents bytes",
            B: "Both values represent the same type of measurement",
            C: "MB represents bytes while Mbps represents megabits per second",
            D: "MB represents network speed while Mbps represents storage"
        },
        correctAnswer: "C"
    },
    {
        id: 5,
        question:
            "A network connection has high bandwidth, but an interactive application still feels slow because the response takes a long time to arrive. Which measurement best explains the problem?",
        options: {
            A: "Latency",
            B: "Throughput",
            C: "Bandwidth",
            D: "Storage capacity"
        },
        correctAnswer: "A"
    },
    {
        id: 6,
        question:
            "Two users communicate using walkie-talkies, where both can transmit but only one can speak at a time. Which communication mode is being used?",
        options: {
            A: "Simplex",
            B: "Full-duplex",
            C: "Half-duplex",
            D: "Broadcast"
        },
        correctAnswer: "C"
    },
    {
        id: 7,
        question:
            "Which statement correctly compares circuit switching and packet switching?",
        options: {
            A: "Circuit switching shares packets, while packet switching reserves a dedicated path",
            B: "Circuit switching reserves a path, while packet switching shares network resources",
            C: "Both always reserve a dedicated path before communication",
            D: "Packet switching can only be used for telephone networks"
        },
        correctAnswer: "B"
    },
    {
        id: 8,
        question:
            "A video stream needs to be delivered from one sender to a selected group of receivers that belong to a particular group. Which delivery method is most appropriate?",
        options: {
            A: "Unicast",
            B: "Broadcast",
            C: "Anycast",
            D: "Multicast"
        },
        correctAnswer: "D"
    },
    {
        id: 9,
        question:
            "A network connects several networks across a city but does not cover multiple countries or continents. Which network classification best fits this description?",
        options: {
            A: "PAN",
            B: "LAN",
            C: "MAN",
            D: "WAN"
        },
        correctAnswer: "C"
    },
    {
        id: 10,
        question:
            "In a star topology, several devices are connected to one central device. What is a major consequence if the central device fails?",
        options: {
            A: "Only one individual cable is affected",
            B: "Many connected devices can lose communication",
            C: "The network automatically becomes a mesh",
            D: "Only wireless devices are disconnected"
        },
        correctAnswer: "B"
    },
    {
        id: 11,
        question:
            "Which statement best describes the main difference between client-server and peer-to-peer architecture?",
        options: {
            A: "Client-server distributes all services equally among peers",
            B: "Peer-to-peer requires a dedicated central server for every service",
            C: "Client-server centralizes important services, while peer-to-peer distributes responsibilities",
            D: "Both architectures always use dedicated servers"
        },
        correctAnswer: "C"
    },
    {
        id: 12,
        question:
            "A user enters a domain name, and the system needs to determine the corresponding IP address. Which protocol performs this function?",
        options: {
            A: "DNS",
            B: "HTTP",
            C: "TCP",
            D: "IP"
        },
        correctAnswer: "A"
    },
    {
        id: 13,
        question:
            "During encapsulation, which sequence correctly shows how information is handled as it moves downward through the networking layers?",
        options: {
            A: "Application → Transport → Network → Data Link → Physical",
            B: "Physical → Data Link → Network → Transport → Application",
            C: "Transport → Application → Network → Physical → Data Link",
            D: "Application → Network → Transport → Physical → Data Link"
        },
        correctAnswer: "A"
    },
    {
        id: 14,
        question:
            "Which statement correctly describes the difference between a MAC address and an IP address?",
        options: {
            A: "MAC addresses are used only for Internet routing",
            B: "IP addresses are used only inside a single local network",
            C: "MAC addresses are commonly used for local communication, while IP addressing supports routing between networks",
            D: "MAC and IP addresses serve exactly the same purpose"
        },
        correctAnswer: "C"
    },
    {
        id: 15,
        question:
            "Which statement correctly compares wired and wireless network transmission?",
        options: {
            A: "Wired communication always uses electromagnetic signals through the air",
            B: "Fiber uses light, while wireless communication uses electromagnetic signals",
            C: "Wireless communication requires a physical cable",
            D: "Copper cables transmit information using light"
        },
        correctAnswer: "B"
    },
    {
        id: 16,
        question:
            "During a video conference, packets arrive at noticeably different intervals, causing the audio and video to become uneven. Which problem is being observed?",
        options: {
            A: "Latency",
            B: "Jitter",
            C: "Bandwidth",
            D: "Parity"
        },
        correctAnswer: "B"
    },
    {
        id: 17,
        question:
            "A receiver calculates a checksum from received data and compares it with the checksum sent with the original data. What is this comparison mainly used for?",
        options: {
            A: "Increasing bandwidth",
            B: "Selecting a routing path",
            C: "Detecting possible data corruption",
            D: "Converting analog signals into digital signals"
        },
        correctAnswer: "C"
    },
    {
        id: 18,
        question:
            "A security system ensures that information can only be accessed by authorized users. Which part of the CIA Triad does this describe?",
        options: {
            A: "Availability",
            B: "Integrity",
            C: "Confidentiality",
            D: "Routing"
        },
        correctAnswer: "C"
    },
    {
        id: 19,
        question:
            "Why did packet switching become an important foundation for modern computer networking?",
        options: {
            A: "It requires every communication to reserve one complete path",
            B: "It allows data to be divided into packets and shared across network resources",
            C: "It prevents multiple communications from using the same network",
            D: "It can only be used for traditional telephone systems"
        },
        correctAnswer: "B"
    },
    {
        id: 20,
        question:
            "A network can have high bandwidth while still providing poor performance for an interactive application. Which combination from the Fundamentals topics best explains this situation?",
        options: {
            A: "High bandwidth and high latency",
            B: "Low bandwidth and zero latency",
            C: "High throughput and no packet transmission",
            D: "High storage capacity and simplex communication"
        },
        correctAnswer: "A"
    }
];

export default fundamentalsQuizData;