const routingSwitchingQuizData = [

    {
        id: 1,
        question:
            "Which statement best describes static routing?",
        options: {
            A: "Routes are learned automatically using routing protocols",
            B: "Routes are manually configured by an administrator",
            C: "Routes are learned from a switch's MAC table",
            D: "Routes are created automatically when a frame arrives"
        },
        correctAnswer: "B"
    },

    {
        id: 2,
        question:
            "Which information is included in a static route configuration?",
        options: {
            A: "Destination network, subnet mask or prefix length, and next hop",
            B: "Source MAC address, VLAN ID, and aging timer",
            C: "Frame size, switch port, and broadcast address",
            D: "Only the destination host name"
        },
        correctAnswer: "A"
    },

    {
        id: 3,
        question:
            "What does a router examine when it receives a packet that needs to be forwarded?",
        options: {
            A: "The destination IP address",
            B: "Only the source MAC address",
            C: "The VLAN name",
            D: "The MAC aging timer"
        },
        correctAnswer: "A"
    },

    {
        id: 4,
        question:
            "Flow: A router receives a packet → examines the destination IP address → searches its routing table. What should happen next according to the static packet-forwarding process?",
        options: {
            A: "The packet is forwarded through the configured next hop",
            B: "The router floods the packet through every interface",
            C: "The router creates a new VLAN",
            D: "The router replaces the packet with a routing advertisement"
        },
        correctAnswer: "A"
    },

    {
        id: 5,
        question:
            "When is a default route used?",
        options: {
            A: "When a more specific route already matches",
            B: "When no more specific route matches",
            C: "Only for communication inside the same network",
            D: "Only when the MAC table is empty"
        },
        correctAnswer: "B"
    },

    {
        id: 6,
        question:
            "Which IPv4 notation commonly represents the default route?",
        options: {
            A: "192.168.1.0/24",
            B: "255.255.255.255/32",
            C: "0.0.0.0/0",
            D: "224.0.0.0/4"
        },
        correctAnswer: "C"
    },

    {
        id: 7,
        question:
            "Which is a limitation of static routing?",
        options: {
            A: "Alternative paths are automatically discovered",
            B: "Topology changes require manual updates",
            C: "Routers cannot store static routes",
            D: "Static routing always generates routing protocol traffic"
        },
        correctAnswer: "B"
    },

    {
        id: 8,
        question:
            "Which statement correctly describes dynamic routing?",
        options: {
            A: "Routers learn routes automatically using routing protocols",
            B: "Every route must be manually entered",
            C: "Routes cannot change when the topology changes",
            D: "Routers do not exchange routing information"
        },
        correctAnswer: "A"
    },

    {
        id: 9,
        question:
            "Flow: Router A learns about multiple paths to a destination → evaluates those paths using a routing metric → chooses a preferred path. Which stage is being described?",
        options: {
            A: "Best path selection",
            B: "VLAN membership",
            C: "MAC aging",
            D: "Frame filtering"
        },
        correctAnswer: "A"
    },

    {
        id: 10,
        question:
            "What is convergence in dynamic routing?",
        options: {
            A: "The process of assigning VLAN membership to access ports",
            B: "The process in which routers eventually reach a consistent routing state after a change",
            C: "The process of learning source MAC addresses",
            D: "The process of flooding an Ethernet frame"
        },
        correctAnswer: "B"
    },

    {
        id: 11,
        question:
            "Which routing protocol uses hop count as its routing metric?",
        options: {
            A: "OSPF",
            B: "EIGRP",
            C: "RIP",
            D: "BGP"
        },
        correctAnswer: "C"
    },

    {
        id: 12,
        question:
            "Why do routers advertise networks they can reach?",
        options: {
            A: "To distribute route information to neighboring routers",
            B: "To assign MAC addresses to switches",
            C: "To create access ports automatically",
            D: "To replace the VLAN ID"
        },
        correctAnswer: "A"
    },

    {
        id: 13,
        question:
            "What is the main purpose of a VLAN?",
        options: {
            A: "To create a logical network within a physical switched network",
            B: "To replace the routing table",
            C: "To provide a physical cable between routers",
            D: "To automatically assign IP addresses"
        },
        correctAnswer: "A"
    },

    {
        id: 14,
        question:
            "Flow: PC1 connects to an access port → traffic belongs to a VLAN → the traffic crosses a trunk between switches. What identifies VLAN membership across the trunk?",
        options: {
            A: "802.1Q tagging",
            B: "RIP hop count",
            C: "The routing table",
            D: "MAC aging"
        },
        correctAnswer: "A"
    },

    {
        id: 15,
        question:
            "Which statement about an access port is correct?",
        options: {
            A: "It normally belongs to one VLAN and connects an end device",
            B: "It must carry every VLAN",
            C: "It is used only between routers",
            D: "It stores the MAC address table"
        },
        correctAnswer: "A"
    },

    {
        id: 16,
        question:
            "Two devices belong to different VLANs. Why is Layer 2 switching alone not sufficient for communication between them?",
        options: {
            A: "Different VLANs are separate broadcast domains",
            B: "MAC addresses cannot exist in different VLANs",
            C: "Access ports cannot connect end devices",
            D: "VLANs do not use switches"
        },
        correctAnswer: "A"
    },

    {
        id: 17,
        question:
            "A frame arrives at Switch S through Port 3 with source MAC address MAC-A. What should the switch associate in its MAC table?",
        options: {
            A: "MAC-A with Port 3",
            B: "MAC-A with every port",
            C: "MAC-A with the router's routing table",
            D: "MAC-A with a VLAN ID"
        },
        correctAnswer: "A"
    },

    {
        id: 18,
        question:
            "Flow: A frame arrives → the switch reads the source MAC → records the incoming port → checks the destination MAC. What process does this sequence describe?",
        options: {
            A: "The MAC learning cycle",
            B: "Dynamic route convergence",
            C: "Inter-VLAN routing",
            D: "Static route configuration"
        },
        correctAnswer: "A"
    },

    {
        id: 19,
        question:
            "A switch receives a frame whose destination MAC address is not present in its MAC address table. What happens?",
        options: {
            A: "The frame is flooded within the appropriate VLAN",
            B: "The frame is discarded immediately",
            C: "The frame is sent only to the router",
            D: "The frame is forwarded only through the incoming port"
        },
        correctAnswer: "A"
    },

    {
        id: 20,
        question:
            "Flow: PC-A sends a frame → the switch learns the source MAC → checks the destination MAC → finds the destination MAC mapped to Port 5. What should the switch do?",
        options: {
            A: "Flood the frame to every port in the VLAN",
            B: "Forward the frame through Port 5",
            C: "Send the frame to every VLAN",
            D: "Drop the frame because the destination is known"
        },
        correctAnswer: "B"
    }

];

export default routingSwitchingQuizData;