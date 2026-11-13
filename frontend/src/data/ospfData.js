const ospfData = {
    title: "Open Shortest Path First (OSPF)",

    intro: [
        "OSPF is a link-state routing protocol used to find the best path between routers within an Autonomous System.",
        "OSPF routers use Hello packets to discover neighbors and establish the relationships required for routing information exchange.",
        "OSPF state transitions lead from initial neighbor discovery to a fully synchronized adjacency, allowing routers to calculate routes using the SPF algorithm.",
    ],

    pdu: "OSPF Packet",

    workflow: [
        {
            title: "OSPF parameters are checked",
            text: "Before forming an adjacency, the routers must have compatible parameters such as Area ID, authentication, MTU, and timers.",
            activeNodes: [
                "routerA",
                "routerB",
            ],
            activeLines: [],
            activeArrow: null,
        },

        {
            title: "Hello packet is sent",
            text: "Router A sends an OSPF Hello packet onto the shared broadcast LAN to discover neighboring routers.",
            activeNodes: [
                "routerA",
                "broadcastLAN",
            ],
            activeLines: [
                "routerA-lan",
            ],
            activeArrow: {
                line: "routerA-lan",
                direction: "forward",
            },
        },

        {
            title: "Neighbor enters Init state",
            text: "Router B receives the Hello packet from Router A, but Router A is not yet listed in Router B's Hello information.",
            activeNodes: [
                "routerA",
                "routerB",
                "broadcastLAN",
            ],
            activeLines: [
                "routerA-lan",
                "lan-routerB",
            ],
            activeArrow: {
                line: "lan-routerB",
                direction: "forward",
            },
        },

        {
            title: "Two-Way communication is confirmed",
            text: "Router B now includes Router A in its Hello information, confirming bidirectional communication between the neighbors.",
            activeNodes: [
                "routerA",
                "routerB",
                "broadcastLAN",
            ],
            activeLines: [
                "routerA-lan",
                "lan-routerB",
            ],
            activeArrow: {
                line: "lan-routerB",
                direction: "forward",
            },
        },

        {
            title: "DR and BDR are elected",
            text: "On the broadcast network, the routers participate in DR and BDR election using router priority and Router ID.",
            activeNodes: [
                "routerA",
                "routerB",
                "routerC",
                "broadcastLAN",
            ],
            activeLines: [
                "routerA-lan",
                "lan-routerB",
                "lan-routerC",
            ],
            activeArrow: null,
        },

        {
            title: "ExStart establishes the exchange roles",
            text: "Routers A and B begin Database Description exchange and establish a Master/Slave relationship using their Router IDs.",
            activeNodes: [
                "routerA",
                "routerB",
                "broadcastLAN",
            ],
            activeLines: [
                "routerA-lan",
                "lan-routerB",
            ],
            activeArrow: {
                line: "lan-routerB",
                direction: "forward",
            },
        },

        {
            title: "Exchange state compares databases",
            text: "The routers exchange Database Description packets containing LSA information and prepare requests for missing entries.",
            activeNodes: [
                "routerA",
                "routerB",
                "broadcastLAN",
            ],
            activeLines: [
                "routerA-lan",
                "lan-routerB",
            ],
            activeArrow: {
                line: "lan-routerB",
                direction: "forward",
            },
        },

        {
            title: "Loading state requests missing LSAs",
            text: "Router B requests missing Link State Advertisements with LSR packets, and the required updates are returned in LSU packets.",
            activeNodes: [
                "routerA",
                "routerB",
                "broadcastLAN",
            ],
            activeLines: [
                "routerA-lan",
                "lan-routerB",
            ],
            activeArrow: {
                line: "routerA-lan",
                direction: "reverse",
            },
        },

        {
            title: "Full state is reached",
            text: "The adjacency is fully established and the routers have synchronized their Link-State Databases.",
            activeNodes: [
                "routerA",
                "routerB",
            ],
            activeLines: [],
            activeArrow: null,
        },

        {
            title: "SPF calculates the best paths",
            text: "With synchronized link-state information, the routers can use the Shortest Path First algorithm to calculate routing paths.",
            activeNodes: [
                "routerA",
                "routerB",
            ],
            activeLines: [],
            activeArrow: null,
        },
    ],

    theory: {
        "OSPF Basics": [
            {
                heading: "Link-State Routing",
                points: [
                    "OSPF is a link-state routing protocol that helps routers determine suitable paths within an Autonomous System.",
                ],
            },
            {
                heading: "Hello Packets",
                points: [
                    "OSPF Hello packets are used to discover neighboring routers and begin communication between them.",
                ],
            },
            {
                heading: "Neighbor Relationships",
                points: [
                    "Neighbor relationships form the foundation for exchanging OSPF routing information between routers.",
                ],
            },
            {
                heading: "OSPF Adjacency",
                points: [
                    "An OSPF adjacency develops through the protocol states until the routers reach a fully synchronized state.",
                ],
            },
            {
                heading: "Adjacency Requirements",
                points: [
                    "Parameters such as Area ID, authentication, MTU, and timers must match appropriately for an adjacency to form.",
                ],
            },
        ],

        "OSPF Terms": [
            {
                heading: "Router ID",
                points: [
                    "The Router ID is selected from the highest loopback address first; when no loopback is configured, the highest active interface IP address is used.",
                ],
            },
            {
                heading: "Router Priority",
                points: [
                    "Router priority is an 8-bit value used when choosing the Designated Router and Backup Designated Router on broadcast networks.",
                ],
            },
            {
                heading: "Designated Router (DR)",
                points: [
                    "The DR helps reduce the number of OSPF adjacencies and distributes Link State Advertisements to the other routers on the broadcast network.",
                ],
            },
            {
                heading: "Backup Designated Router (BDR)",
                points: [
                    "The BDR acts as a standby for the DR and takes over its role when the current DR fails.",
                ],
            },
            {
                heading: "DR / BDR Election",
                points: [
                    "The router with the highest priority is selected first, and the highest Router ID is used to break a priority tie.",
                ],
            },
        ],

        "OSPF States": [
            {
                heading: "Down State",
                points: [
                    "No Hello packets have been received from the neighbor, so the adjacency process has not yet started.",
                ],
            },
            {
                heading: "Init State",
                points: [
                    "A Hello packet has been received, but the receiving router has not yet seen itself listed in the neighbor's Hello packet.",
                ],
            },
            {
                heading: "Two-Way State",
                points: [
                    "Bidirectional communication is confirmed when each router sees itself in the other's Hello information.",
                ],
            },
            {
                heading: "ExStart State",
                points: [
                    "The routers establish Master/Slave roles and begin the initial Database Description exchange.",
                ],
            },
            {
                heading: "Exchange State",
                points: [
                    "Routers exchange Database Description packets and identify Link State Advertisements that may be missing from their databases.",
                ],
            },
            {
                heading: "Loading State",
                points: [
                    "Routers request missing LSAs using Link State Request packets and receive the required information through Link State Updates.",
                ],
            },
            {
                heading: "Full State",
                points: [
                    "The adjacency is completely established and the routers have synchronized their Link-State Databases.",
                ],
            },
        ],

        "Routing After Adjacency": [
            {
                heading: "Link-State Database",
                points: [
                    "The synchronized Link-State Database provides routers with the information needed to understand the available network paths.",
                ],
            },
            {
                heading: "Shortest Path First",
                points: [
                    "After reaching Full state, routers can run the SPF algorithm to calculate the shortest or best available routing paths.",
                ],
            },
            {
                heading: "Stable Routing",
                points: [
                    "Proper OSPF state management helps maintain stable routing and supports efficient packet forwarding.",
                ],
            },
        ],
    },
};

export default ospfData;