const devicesQuizData = [

    {
        id: 1,
        question:
            "A device needs to forward packets between two different IP networks. Which device is designed primarily for this role?",
        options: {
            A: "Switch",
            B: "Router",
            C: "Hub",
            D: "Repeater"
        },
        correctAnswer: "B"
    },

    {
        id: 2,
        question:
            "A router receives a packet and must decide which path to use. Which information does it examine and compare with its routing table?",
        options: {
            A: "Destination IP address",
            B: "Source MAC address only",
            C: "SSID",
            D: "File name"
        },
        correctAnswer: "A"
    },

    {
        id: 3,
        question:
            "An administrator manually configures a fixed route because the network is small and the path should not change automatically. What type of routing is this?",
        options: {
            A: "Dynamic routing",
            B: "Default routing",
            C: "Static routing",
            D: "Broadcast routing"
        },
        correctAnswer: "C"
    },

    {
        id: 4,
        question:
            "A router learns network paths automatically by exchanging routing information with other routers. Which type of routing is being used?",
        options: {
            A: "Static routing",
            B: "Dynamic routing",
            C: "Local switching",
            D: "Frame filtering"
        },
        correctAnswer: "B"
    },

    {
        id: 5,
        question:
            "A switch receives a frame for a destination whose MAC address is already known. What will the switch normally do?",
        options: {
            A: "Forward the frame through the corresponding port",
            B: "Send the frame to the router first",
            C: "Convert the frame into a signal for every port",
            D: "Drop the frame because switches do not use MAC addresses"
        },
        correctAnswer: "A"
    },

    {
        id: 6,
        question:
            "A switch does not know the destination MAC address of an incoming frame. According to the device theory, what can it do?",
        options: {
            A: "Route the frame using the destination IP address",
            B: "Flood the frame through the other appropriate ports",
            C: "Regenerate the signal and stop forwarding",
            D: "Translate the protocol before forwarding"
        },
        correctAnswer: "B"
    },

    {
        id: 7,
        question:
            "A managed switch is configured so that two groups of devices remain logically separated while using the same physical switching infrastructure. Which feature is being used?",
        options: {
            A: "NAT",
            B: "VLAN",
            C: "VPN",
            D: "PoE"
        },
        correctAnswer: "B"
    },

    {
        id: 8,
        question:
            "Several devices are connected to a traditional hub. Two devices transmit at the same time and their signals interfere with each other. Which characteristic explains this behavior?",
        options: {
            A: "Separate collision domains",
            B: "Full-duplex switching",
            C: "Shared collision domain",
            D: "Dynamic routing"
        },
        correctAnswer: "C"
    },

    {
        id: 9,
        question:
            "A traditional network bridge receives a frame and determines that the destination is on the same segment as the source. What can the bridge do?",
        options: {
            A: "Filter the frame instead of forwarding it across the bridge",
            B: "Send the frame to every network segment",
            C: "Convert it into an IP packet",
            D: "Regenerate the signal because it operates at Layer 1"
        },
        correctAnswer: "A"
    },

    {
        id: 10,
        question:
            "A signal becomes weaker while travelling through a transmission medium, making longer-distance communication difficult. Which device is intended to help with this problem?",
        options: {
            A: "Repeater",
            B: "Firewall",
            C: "Gateway",
            D: "Proxy Server"
        },
        correctAnswer: "A"
    },

    {
        id: 11,
        question:
            "A modem prepares information for transmission through a particular communication medium and converts received signals back into usable information. Which pair of functions describes this process?",
        options: {
            A: "Routing and switching",
            B: "Filtering and caching",
            C: "Modulation and demodulation",
            D: "Authentication and association"
        },
        correctAnswer: "C"
    },

    {
        id: 12,
        question:
            "A laptop searches for a wireless network, selects it, and then performs authentication and association before exchanging traffic. Which device provides this wireless communication point?",
        options: {
            A: "Access point",
            B: "Bridge",
            C: "Load balancer",
            D: "Firewall"
        },
        correctAnswer: "A"
    },

    {
        id: 13,
        question:
            "A computer has network hardware that handles Ethernet framing, MAC addressing, and physical transmission. Which component performs these functions?",
        options: {
            A: "NIC",
            B: "Modem",
            C: "Gateway",
            D: "Hub"
        },
        correctAnswer: "A"
    },

    {
        id: 14,
        question:
            "A security device tracks active network connections and uses the connection state when evaluating later packets. Which firewall capability is being used?",
        options: {
            A: "Packet filtering",
            B: "Stateful inspection",
            C: "VLAN support",
            D: "Protocol translation"
        },
        correctAnswer: "B"
    },

    {
        id: 15,
        question:
            "A system must allow communication between environments that use different protocols or data formats. Which gateway function is most relevant?",
        options: {
            A: "Protocol translation",
            B: "MAC address learning",
            C: "Signal regeneration",
            D: "Health checking"
        },
        correctAnswer: "A"
    },

    {
        id: 16,
        question:
            "An organization places an intermediary in front of its users so that Internet requests can be filtered, logged, and controlled before reaching external servers. What type of proxy is this?",
        options: {
            A: "Reverse proxy",
            B: "Forward proxy",
            C: "Transparent bridge",
            D: "Layer 4 load balancer"
        },
        correctAnswer: "B"
    },

    {
        id: 17,
        question:
            "Several servers provide the same application service. A networking system distributes incoming client requests among them and stops sending new traffic to a server that fails its health check. What system is this?",
        options: {
            A: "Proxy server",
            B: "Repeater",
            C: "Load balancer",
            D: "NIC"
        },
        correctAnswer: "C"
    },

    {
        id: 18,
        question:
            "A load balancer routes HTTP requests according to information such as URLs or hostnames. Which type of load balancing is being described?",
        options: {
            A: "Layer 1 load balancing",
            B: "Layer 2 load balancing",
            C: "Layer 4 load balancing",
            D: "Layer 7 load balancing"
        },
        correctAnswer: "D"
    },

    {
        id: 19,
        question:
            "An employee connects from another location to resources inside the organization through a protected logical connection across the Internet. Which VPN type best matches this use?",
        options: {
            A: "Site-to-site VPN",
            B: "Remote access VPN",
            C: "Transparent proxy",
            D: "Wireless IDPS"
        },
        correctAnswer: "B"
    },

    {
        id: 20,
        question:
            "A security system identifies suspicious activity by comparing observed traffic with known attack patterns and can also take configured action to block or disrupt threats. Which device or system matches this description?",
        options: {
            A: "IDPS",
            B: "Hub",
            C: "Access point",
            D: "Modem"
        },
        correctAnswer: "A"
    }

];

export default devicesQuizData;