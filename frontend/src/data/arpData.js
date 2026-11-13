export const arpTopology = {
    nodes: [
        {
            id: "router1",
            type: "router",
            name: "Router 1",
            ip: "192.168.1.1",
            x: 570,
            y: 390
        },
        {
            id: "switch1",
            type: "switch",
            name: "Switch 1",
            x: 220,
            y: 80
        },
        {
            id: "pc1",
            type: "pc",
            name: "PC1",
            ip: "192.168.1.10",
            mac: "AA:AA:AA:AA:AA:01",
            x: 40,
            y: 30
        },
        {
            id: "pc2",
            type: "pc",
            name: "PC2",
            ip: "192.168.1.11",
            mac: "AA:AA:AA:AA:AA:02",
            x: 40,
            y: 130
        },
        {
            id: "switch2",
            type: "switch",
            name: "Switch 2",
            x: 220,
            y: 300
        },
        {
            id: "pc3",
            type: "pc",
            name: "PC3",
            ip: "192.168.2.10",
            mac: "AA:AA:AA:AA:AA:03",
            x: 40,
            y: 250
        },
        {
            id: "pc4",
            type: "pc",
            name: "PC4",
            ip: "192.168.2.11",
            mac: "AA:AA:AA:AA:AA:04",
            x: 40,
            y: 350
        },
        {
            id: "switch3",
            type: "switch",
            name: "Switch 3",
            x: 220,
            y: 520
        },
        {
            id: "pc5",
            type: "pc",
            name: "PC5",
            ip: "192.168.3.10",
            mac: "AA:AA:AA:AA:AA:05",
            x: 40,
            y: 470
        },
        {
            id: "pc6",
            type: "pc",
            name: "PC6",
            ip: "192.168.3.11",
            mac: "AA:AA:AA:AA:AA:06",
            x: 40,
            y: 570
        },
        {
            id: "switch4",
            type: "switch",
            name: "Switch 4",
            x: 220,
            y: 740
        },
        {
            id: "pc7",
            type: "pc",
            name: "PC7",
            ip: "192.168.4.20",
            mac: "BB:BB:BB:BB:BB:07",
            x: 40,
            y: 690
        },
        {
            id: "pc8",
            type: "pc",
            name: "PC8",
            ip: "192.168.4.21",
            mac: "BB:BB:BB:BB:BB:08",
            x: 40,
            y: 790
        },
        {
            id: "router2",
            type: "router",
            name: "Router 2",
            ip: "192.168.3.1",
            x: 1050,
            y: 390
        },
        {
            id: "switch5",
            type: "switch",
            name: "Switch 5",
            x: 1350,
            y: 80
        },
        {
            id: "pc9",
            type: "pc",
            name: "PC9",
            ip: "192.168.5.10",
            mac: "CC:CC:CC:CC:CC:09",
            x: 1530,
            y: 30
        },
        {
            id: "pc10",
            type: "pc",
            name: "PC10",
            ip: "192.168.5.11",
            mac: "CC:CC:CC:CC:CC:10",
            x: 1530,
            y: 130
        },
        {
            id: "switch6",
            type: "switch",
            name: "Switch 6",
            x: 1350,
            y: 300
        },
        {
            id: "pc11",
            type: "pc",
            name: "PC11",
            ip: "192.168.6.10",
            mac: "CC:CC:CC:CC:CC:11",
            x: 1530,
            y: 250
        },
        {
            id: "pc12",
            type: "pc",
            name: "PC12",
            ip: "192.168.6.11",
            mac: "CC:CC:CC:CC:CC:12",
            x: 1530,
            y: 350
        },
        {
            id: "switch7",
            type: "switch",
            name: "Switch 7",
            x: 1350,
            y: 520
        },
        {
            id: "pc13",
            type: "pc",
            name: "PC13",
            ip: "192.168.7.10",
            mac: "CC:CC:CC:CC:CC:13",
            x: 1530,
            y: 470
        },
        {
            id: "pc14",
            type: "pc",
            name: "PC14",
            ip: "192.168.7.11",
            mac: "CC:CC:CC:CC:CC:14",
            x: 1530,
            y: 570
        },
        {
            id: "switch8",
            type: "switch",
            name: "Switch 8",
            x: 1350,
            y: 740
        },
        {
            id: "pc15",
            type: "pc",
            name: "PC15",
            ip: "192.168.8.10",
            mac: "CC:CC:CC:CC:CC:15",
            x: 1530,
            y: 690
        },
        {
            id: "pc16",
            type: "pc",
            name: "PC16",
            ip: "192.168.8.11",
            mac: "CC:CC:CC:CC:CC:16",
            x: 1530,
            y: 790
        }
    ],

    edges: [
        ["router1", "switch1"],
        ["router1", "switch2"],
        ["router1", "switch3"],
        ["router1", "switch4"],
        ["switch1", "pc1"],
        ["switch1", "pc2"],
        ["switch2", "pc3"],
        ["switch2", "pc4"],
        ["switch3", "pc5"],
        ["switch3", "pc6"],
        ["switch4", "pc7"],
        ["switch4", "pc8"],
        ["router1", "router2"],
        ["router2", "switch5"],
        ["router2", "switch6"],
        ["router2", "switch7"],
        ["router2", "switch8"],
        ["switch5", "pc9"],
        ["switch5", "pc10"],
        ["switch6", "pc11"],
        ["switch6", "pc12"],
        ["switch7", "pc13"],
        ["switch7", "pc14"],
        ["switch8", "pc15"],
        ["switch8", "pc16"]
    ]
};

export const initialPc1Cache = [];

export const pc1GatewayCache = [
    {
        ip: "192.168.1.1",
        mac: "11:11:11:11:11:01"
    }
];

export const initialRouter2Cache = [];

export const router2Pc7Cache = [
    {
        ip: "192.168.4.20",
        mac: "BB:BB:BB:BB:BB:07"
    }
];

export const arpImportantTerms = [
    {
        term: "ARP",
        description:
            "Address Resolution Protocol. It is used to discover the MAC address associated with an IPv4 address on a local network."
    },

    {
        term: "ARP Cache",
        description:
            "A table containing recently learned IP-address-to-MAC-address mappings."
    },

    {
        term: "ARP Request",
        description:
            "A broadcast message asking which device owns a particular IPv4 address."
    },

    {
        term: "ARP Reply",
        description:
            "A response containing the MAC address associated with the requested IPv4 address."
    },

    {
        term: "MAC Address",
        description:
            "A Layer 2 hardware address used for delivery within a local Ethernet network."
    },

    {
        term: "IP Address",
        description:
            "A Layer 3 logical address used to identify a network interface."
    },

    {
        term: "Default Gateway",
        description:
            "The router a host sends packets to when the destination is outside its local network."
    },

    {
        term: "Broadcast",
        description:
            "A transmission intended for all devices within the local broadcast domain."
    }
];

export const arpRequestFields = [
    {
        name: "Hardware Type",
        value: "Ethernet",
        explanation:
            "Identifies the type of Layer 2 network being used."
    },

    {
        name: "Protocol Type",
        value: "IPv4",
        explanation:
            "Identifies the network-layer protocol whose address is being resolved."
    },

    {
        name: "Operation",
        value: "ARP Request",
        explanation:
            "Indicates that the sender is requesting an IP-to-MAC mapping."
    },

    {
        name: "Sender MAC",
        value: "AA:AA:AA:AA:AA:01",
        explanation:
            "The MAC address of the device sending the request."
    },

    {
        name: "Sender IP",
        value: "192.168.1.10",
        explanation:
            "The IPv4 address of the device sending the request."
    },

    {
        name: "Target MAC",
        value: "00:00:00:00:00:00",
        explanation:
            "The target MAC is unknown when the ARP Request is created."
    },

    {
        name: "Target IP",
        value: "192.168.1.1",
        explanation:
            "The IPv4 address whose MAC address the sender wants to discover."
    }
];

export const arpTypes = [
    {
        title: "Proxy ARP",
        points: [
            "A router answers an ARP Request on behalf of another device.",
            "It can allow communication when the requesting device believes the destination is local."
        ]
    },

    {
        title: "Gratuitous ARP",
        shortName: "GARP",
        points: [
            "A device announces its own IP-to-MAC mapping without first receiving an ARP Request.",
            "It can update ARP caches and help detect duplicate IP addresses."
        ]
    },

    {
        title: "Reverse ARP",
        shortName: "RARP",
        points: [
            "A device uses its MAC address to request its IP address from a server.",
            "It was historically used by diskless hosts and was largely replaced by BOOTP and DHCP."
        ]
    },

    {
        title: "Inverse ARP",
        shortName: "InARP",
        points: [
            "A device uses a known Layer 2 address to discover the corresponding Layer 3 address.",
            "It was mainly associated with technologies such as Frame Relay."
        ]
    }
];

export const arpSteps = [
    {
        number: 1,
        title: "PC1 wants to communicate with PC7",
        explanation:
            "PC1 wants to send data to PC7. PC1 knows that PC7's IP address is 192.168.4.20.",
        activeNodes: ["pc1", "pc7"],
        packet: null,
        cache: null
    },

    {
        number: 2,
        title: "PC1 compares the destination network",
        explanation:
            "PC1 has the address 192.168.1.10, while PC7 has 192.168.4.20. They belong to different IP networks.",
        activeNodes: ["pc1", "pc7"],
        packet: null,
        cache: null
    },

    {
        number: 3,
        title: "PC1 realizes that PC7 is on another network",
        explanation:
            "Because PC7 is on another network, PC1 cannot directly ARP for PC7's MAC address. PC1 must send the frame to its default gateway.",
        activeNodes: ["pc1", "router1"],
        packet: null,
        cache: null
    },

    {
        number: 4,
        title: "PC1 identifies its default gateway",
        explanation:
            "PC1's default gateway is Router 1 at IP address 192.168.1.1.",
        activeNodes: ["pc1", "router1"],
        packet: null,
        cache: null
    },

    {
        number: 5,
        title: "PC1 checks its ARP cache",
        explanation:
            "Before sending an ARP Request, PC1 checks whether it already knows the MAC address of 192.168.1.1.",
        activeNodes: ["pc1"],
        packet: null,
        cache: {
            device: "PC1",
            entries: initialPc1Cache
        }
    },

    {
        number: 6,
        title: "The gateway MAC address is not in the cache",
        explanation:
            "The ARP cache does not contain an entry for 192.168.1.1. PC1 therefore needs to discover Router 1's MAC address.",
        activeNodes: ["pc1"],
        packet: null,
        cache: {
            device: "PC1",
            entries: initialPc1Cache
        }
    },

    {
        number: 7,
        title: "PC1 creates an ARP Request",
        explanation:
            'PC1 creates an ARP Request asking: "Who has 192.168.1.1? Tell 192.168.1.10."',
        activeNodes: ["pc1"],
        packet: {
            type: "ARP Request",
            from: "pc1",
            to: "switch1",
            label: "Who has 192.168.1.1?"
        },
        cache: null
    },

    {
        number: 8,
        title: "The ARP Request is broadcast",
        explanation:
            "An ARP Request is sent as a broadcast. Its Ethernet destination MAC is FF:FF:FF:FF:FF:FF, so devices in the local broadcast domain can receive it.",
        activeNodes: ["pc1", "switch1"],
        packet: {
            type: "Broadcast",
            from: "pc1",
            to: "switch1",
            label: "FF:FF:FF:FF:FF:FF"
        },
        cache: null
    },

    {
        number: 9,
        title: "Switch 1 receives the broadcast",
        explanation:
            "Switch 1 receives the Ethernet frame and floods the broadcast toward the other ports in the same broadcast domain.",
        activeNodes: ["switch1"],
        packet: {
            type: "Broadcast",
            from: "switch1",
            to: "router1",
            label: "ARP Request"
        },
        cache: null
    },

    {
        number: 10,
        title: "Router 1 receives the ARP Request",
        explanation:
            "Router 1 receives the ARP Request and checks the target IP. The target IP is 192.168.1.1, which belongs to Router 1.",
        activeNodes: ["router1"],
        packet: {
            type: "ARP Request",
            from: "switch1",
            to: "router1",
            label: "Target IP: 192.168.1.1"
        },
        cache: null
    },

    {
        number: 11,
        title: "Router 1 recognizes its own IP address",
        explanation:
            "Router 1 knows that 192.168.1.1 is its own interface address, so it can answer the ARP Request.",
        activeNodes: ["router1"],
        packet: null,
        cache: null
    },

    {
        number: 12,
        title: "Router 1 creates an ARP Reply",
        explanation:
            "Router 1 creates an ARP Reply containing its MAC address: 11:11:11:11:11:01.",
        activeNodes: ["router1"],
        packet: {
            type: "ARP Reply",
            from: "router1",
            to: "pc1",
            label: "192.168.1.1 → 11:11:11:11:11:01"
        },
        cache: null
    },

    {
        number: 13,
        title: "The ARP Reply travels back to PC1",
        explanation:
            "The ARP Reply is sent back toward PC1. Unlike the original broadcast, the reply is addressed to PC1's MAC address.",
        activeNodes: ["router1", "switch1", "pc1"],
        packet: {
            type: "ARP Reply",
            from: "router1",
            to: "pc1",
            label: "Reply → PC1"
        },
        cache: null
    },

    {
        number: 14,
        title: "PC1 receives the ARP Reply",
        explanation:
            "PC1 receives Router 1's MAC address and can now use Router 1 as the Layer 2 destination for the first hop.",
        activeNodes: ["pc1"],
        packet: null,
        cache: {
            device: "PC1",
            entries: pc1GatewayCache
        }
    },

    {
        number: 15,
        title: "PC1 stores the mapping in its ARP cache",
        explanation:
            "PC1 stores the mapping 192.168.1.1 → 11:11:11:11:11:01 in its ARP cache.",
        activeNodes: ["pc1"],
        packet: null,
        cache: {
            device: "PC1",
            entries: pc1GatewayCache
        }
    },

    {
        number: 16,
        title: "PC1 prepares the actual data frame",
        explanation:
            "PC1 can now build an Ethernet frame. The destination MAC is Router 1's MAC, while the IP destination remains PC7's IP address 192.168.4.20.",
        activeNodes: ["pc1"],
        packet: {
            type: "Data Frame",
            from: "pc1",
            to: "switch1",
            label: "Dst MAC: Router 1"
        },
        cache: {
            device: "PC1",
            entries: pc1GatewayCache
        }
    },

    {
        number: 17,
        title: "The frame reaches Switch 1",
        explanation:
            "Switch 1 receives the Ethernet frame and forwards it toward Router 1.",
        activeNodes: ["pc1", "switch1"],
        packet: {
            type: "Ethernet Frame",
            from: "switch1",
            to: "router1",
            label: "Dst MAC: 11:11:11:11:11:01"
        },
        cache: null
    },

    {
        number: 18,
        title: "Router 1 receives the frame",
        explanation:
            "Router 1 receives the Ethernet frame because its MAC address is the frame's destination MAC.",
        activeNodes: ["router1"],
        packet: null,
        cache: null
    },

    {
        number: 19,
        title: "Router 1 examines the destination IP",
        explanation:
            "Router 1 looks at the IP destination 192.168.4.20 and determines that the packet must be forwarded toward Router 2.",
        activeNodes: ["router1"],
        packet: null,
        cache: null
    },

    {
        number: 20,
        title: "Router 1 forwards the IP packet",
        explanation:
            "Router 1 forwards the packet toward Router 2. The Layer 2 frame for this hop is rebuilt, but the IP destination remains 192.168.4.20.",
        activeNodes: ["router1", "router2"],
        packet: {
            type: "IP Packet",
            from: "router1",
            to: "router2",
            label: "Destination IP: 192.168.4.20"
        },
        cache: null
    },

    {
        number: 21,
        title: "Router 2 receives the packet",
        explanation:
            "Router 2 receives the packet and examines the destination IP address.",
        activeNodes: ["router2"],
        packet: null,
        cache: null
    },

    {
        number: 22,
        title: "Router 2 identifies PC7's network",
        explanation:
            "Router 2 determines that 192.168.4.20 belongs to a network reachable through its interface connected toward Switch 4.",
        activeNodes: ["router2", "switch4"],
        packet: null,
        cache: null
    },

    {
        number: 23,
        title: "Router 2 checks its ARP cache",
        explanation:
            "Router 2 checks whether it already knows the MAC address corresponding to PC7's IP address 192.168.4.20.",
        activeNodes: ["router2"],
        packet: null,
        cache: {
            device: "Router 2",
            entries: initialRouter2Cache
        }
    },

    {
        number: 24,
        title: "PC7's MAC address is not in Router 2's cache",
        explanation:
            "Router 2 does not currently have a mapping for 192.168.4.20, so Router 2 must perform ARP on PC7's local network.",
        activeNodes: ["router2"],
        packet: null,
        cache: {
            device: "Router 2",
            entries: initialRouter2Cache
        }
    },

    {
        number: 25,
        title: "Router 2 creates a new ARP Request",
        explanation:
            'Router 2 broadcasts a new ARP Request asking: "Who has 192.168.4.20?"',
        activeNodes: ["router2"],
        packet: {
            type: "ARP Request",
            from: "router2",
            to: "switch4",
            label: "Who has 192.168.4.20?"
        },
        cache: null
    },

    {
        number: 26,
        title: "The second ARP Request is broadcast",
        explanation:
            "The ARP Request is broadcast on PC7's local network. Switch 4 receives the broadcast.",
        activeNodes: ["router2", "switch4"],
        packet: {
            type: "Broadcast",
            from: "router2",
            to: "switch4",
            label: "FF:FF:FF:FF:FF:FF"
        },
        cache: null
    },

    {
        number: 27,
        title: "Switch 4 floods the ARP Request",
        explanation:
            "Switch 4 forwards the broadcast to devices connected to that local network, including PC7.",
        activeNodes: ["switch4", "pc7", "pc8"],
        packet: {
            type: "Broadcast",
            from: "switch4",
            to: "pc7",
            label: "ARP Request"
        },
        cache: null
    },

    {
        number: 28,
        title: "PC7 receives the ARP Request",
        explanation:
            "PC7 receives the request and sees that the target IP address 192.168.4.20 matches its own IP address.",
        activeNodes: ["pc7"],
        packet: null,
        cache: null
    },

    {
        number: 29,
        title: "PC7 creates an ARP Reply",
        explanation:
            "PC7 prepares an ARP Reply containing its own MAC address: BB:BB:BB:BB:BB:07.",
        activeNodes: ["pc7"],
        packet: {
            type: "ARP Reply",
            from: "pc7",
            to: "router2",
            label: "192.168.4.20 → BB:BB:BB:BB:BB:07"
        },
        cache: null
    },

    {
        number: 30,
        title: "PC7 sends the ARP Reply to Router 2",
        explanation:
            "The ARP Reply travels through Switch 4 back to Router 2. The reply is addressed specifically to Router 2 rather than broadcast.",
        activeNodes: ["pc7", "switch4", "router2"],
        packet: {
            type: "ARP Reply",
            from: "pc7",
            to: "router2",
            label: "ARP Reply → Router 2"
        },
        cache: null
    },

    {
        number: 31,
        title: "Router 2 receives PC7's MAC address",
        explanation:
            "Router 2 now knows that 192.168.4.20 corresponds to BB:BB:BB:BB:BB:07.",
        activeNodes: ["router2"],
        packet: null,
        cache: {
            device: "Router 2",
            entries: router2Pc7Cache
        }
    },

    {
        number: 32,
        title: "Router 2 updates its ARP cache",
        explanation:
            "Router 2 stores the newly learned IP-to-MAC mapping in its ARP cache.",
        activeNodes: ["router2"],
        packet: null,
        cache: {
            device: "Router 2",
            entries: router2Pc7Cache
        }
    },

    {
        number: 33,
        title: "Router 2 rebuilds the Ethernet frame",
        explanation:
            "Router 2 can now create the final local Ethernet frame. The destination MAC is PC7's MAC address.",
        activeNodes: ["router2"],
        packet: {
            type: "Ethernet Frame",
            from: "router2",
            to: "switch4",
            label: "Dst MAC: PC7"
        },
        cache: {
            device: "Router 2",
            entries: router2Pc7Cache
        }
    },

    {
        number: 34,
        title: "The frame reaches Switch 4",
        explanation:
            "Switch 4 receives the frame and forwards it toward the port where PC7 is connected.",
        activeNodes: ["router2", "switch4"],
        packet: {
            type: "Ethernet Frame",
            from: "switch4",
            to: "pc7",
            label: "Dst MAC: BB:BB:BB:BB:BB:07"
        },
        cache: null
    },

    {
        number: 35,
        title: "PC7 receives the Ethernet frame",
        explanation:
            "PC7 sees that the destination MAC address matches its own MAC address and accepts the frame.",
        activeNodes: ["pc7"],
        packet: null,
        cache: null
    },

    {
        number: 36,
        title: "PC7 receives the IP packet",
        explanation:
            "The IP destination is 192.168.4.20, which is PC7's own IP address. The packet has reached its destination.",
        activeNodes: ["pc7"],
        packet: {
            type: "Data Delivered",
            from: "switch4",
            to: "pc7",
            label: "DATA DELIVERED"
        },
        cache: null
    },

    {
        number: 37,
        title: "ARP has completed its job",
        explanation:
            "ARP resolved the required IP-to-MAC mappings: first PC1 discovered Router 1's MAC address, then Router 2 discovered PC7's MAC address.",
        activeNodes: ["pc1", "router1", "router2", "pc7"],
        packet: null,
        cache: {
            device: "Final ARP State",
            entries: [
                {
                    ip: "PC1 → 192.168.1.1",
                    mac: "11:11:11:11:11:01"
                },
                {
                    ip: "Router 2 → 192.168.4.20",
                    mac: "BB:BB:BB:BB:BB:07"
                }
            ]
        }
    }
];