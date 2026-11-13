const ripData = {
    title: "Routing Information Protocol (RIP)",

    intro: [
        "RIP is a Network Layer routing protocol that helps routers determine paths to destination networks using hop count as its routing metric.",
        "Routers periodically exchange their complete routing tables with neighboring routers so that each router can learn and update routes.",
        "RIP selects the route with the lowest hop count, supports a maximum reachable metric of 15, and treats a hop count of 16 as unreachable.",
    ],

    pdu: "RIP Message",

    workflow: [
        {
            title: "Routers learn their directly connected networks",
            text: "Each router begins with routes for the networks directly connected to it before learning additional destination routes from neighboring routers.",
            activeNodes: [
                "routerA",
                "routerB",
                "routerC",
                "routerD",
            ],
            activeLines: [],
            activeArrow: null,
        },

        {
            title: "Router 3 advertises the destination route",
            text: "Router 3 sends a RIP update to Router 1, telling it that the destination network can be reached through Router 3.",
            activeNodes: [
                "routerA",
                "routerC",
            ],
            activeLines: [
                "routerA-routerC",
            ],
            activeArrow: {
                line: "routerA-routerC",
                direction: "reverse",
            },
        },

        {
            title: "Router 4 advertises the alternate route",
            text: "Router 4 sends its routing information to Router 2, allowing Router 2 to learn another path toward the destination.",
            activeNodes: [
                "routerB",
                "routerD",
            ],
            activeLines: [
                "routerB-routerD",
            ],
            activeArrow: {
                line: "routerB-routerD",
                direction: "reverse",
            },
        },

        {
            title: "Router 2 passes the route to Router 1",
            text: "Router 2 advertises the destination route to Router 1, so Router 1 learns an alternate path through Router 2 and Router 4.",
            activeNodes: [
                "routerA",
                "routerB",
            ],
            activeLines: [
                "routerA-routerB",
            ],
            activeArrow: {
                line: "routerA-routerB",
                direction: "reverse",
            },
        },

        {
            title: "Router 1 chooses the lower-hop route",
            text: "Router 1 compares the route through Router 3 with the alternate route through Router 2 and Router 4, then chooses the path with fewer hops.",
            activeNodes: [
                "routerA",
                "routerC",
                "routerB",
                "routerD",
            ],
            activeLines: [
                "routerA-routerC",
                "routerA-routerB",
                "routerB-routerD",
            ],
            activeArrow: null,
        },

        {
            title: "Routing information converges",
            text: "After the RIP updates are exchanged, Router 1 keeps the lower-hop route as its preferred path while the alternate route remains available.",
            activeNodes: [
                "routerA",
                "routerB",
                "routerC",
                "routerD",
            ],
            activeLines: [],
            activeArrow: null,
        },

        {
            title: "The packet follows Router 3",
            text: "The source sends data through Router 1, and Router 1 forwards it through Router 3 because that route currently has the lowest hop count.",
            activeNodes: [
                "sourcePC",
                "routerA",
                "routerC",
                "destinationHost",
            ],
            activeLines: [
                "source-routerA",
                "routerA-routerC",
                "routerC-destination",
            ],
            activeArrow: {
                line: "routerC-destination",
                direction: "forward",
            },
        },

        {
            title: "Router 3 becomes unavailable",
            text: "Router 1 stops receiving a valid route through Router 3, so that preferred path becomes unavailable and RIP can treat it as unreachable.",
            activeNodes: [
                "routerA",
                "routerC",
            ],
            activeLines: [],
            activeArrow: null,
        },

        {
            title: "Router 1 switches to the alternate route",
            text: "Router 1 now selects the available path through Router 2 and Router 4, which still provides a route to the destination.",
            activeNodes: [
                "routerA",
                "routerB",
                "routerD",
                "destinationHost",
            ],
            activeLines: [
                "routerA-routerB",
                "routerB-routerD",
                "routerD-destination",
            ],
            activeArrow: null,
        },

        {
            title: "Data is forwarded through the new route",
            text: "The next packet travels from the source through Router 1, Router 2, and Router 4 before reaching the destination on the available alternate path.",
            activeNodes: [
                "sourcePC",
                "routerA",
                "routerB",
                "routerD",
                "destinationHost",
            ],
            activeLines: [
                "source-routerA",
                "routerA-routerB",
                "routerB-routerD",
                "routerD-destination",
            ],
            activeArrow: {
                line: "routerD-destination",
                direction: "forward",
            },
        },
    ],

    theory: {
        "RIP Basics": [
            {
                heading: "Network Layer Protocol",
                points: [
                    "RIP operates at Layer 3 and maintains routing information on each router.",
                ],
            },
            {
                heading: "Distance-Vector Routing",
                points: [
                    "RIP learns routes from neighboring routers instead of maintaining a complete map of the network.",
                ],
            },
            {
                heading: "Periodic Updates",
                points: [
                    "Routers exchange their complete routing tables with neighbors every 30 seconds.",
                ],
            },
            {
                heading: "Routing by Rumour",
                points: [
                    "A router depends on routing information learned from its neighbors and uses that information to build its own routes.",
                ],
            },
        ],

        "Hop Count": [
            {
                heading: "Hop Count Meaning",
                points: [
                    "Hop count is the number of routers a packet must pass through to reach a destination network.",
                ],
            },
            {
                heading: "Best Route",
                points: [
                    "RIP prefers the route with the lowest hop count when multiple routes to the same destination are available.",
                ],
            },
            {
                heading: "Maximum Reachable Metric",
                points: [
                    "A maximum hop count of 15 limits how far a RIP route can reach.",
                ],
            },
            {
                heading: "Metric 16",
                points: [
                    "A hop count of 16 represents an unreachable destination in RIP.",
                ],
            },
        ],

        "How RIP Works": [
            {
                heading: "Routing Table Learning",
                points: [
                    "Each router stores known destination networks and their current hop-count distances in a routing table.",
                ],
            },
            {
                heading: "Neighbor Exchange",
                points: [
                    "Routers periodically send their complete routing tables to neighboring routers using RIP updates.",
                ],
            },
            {
                heading: "Hop Count Update",
                points: [
                    "When a route is learned from a neighbor, the receiving router adds one hop to the learned distance.",
                ],
            },
            {
                heading: "Route Selection",
                points: [
                    "A newly learned route replaces the current route when it provides a shorter hop-count path.",
                ],
            },
            {
                heading: "Route Invalidity",
                points: [
                    "A route that is not refreshed within 180 seconds is marked invalid.",
                ],
            },
            {
                heading: "Route Removal",
                points: [
                    "An invalid route is removed from the routing table after 240 seconds.",
                ],
            },
        ],

        "RIP Loop Prevention": [
            {
                heading: "Split Horizon",
                points: [
                    "Split horizon prevents a router from advertising a route back through the interface from which that route was learned.",
                ],
            },
            {
                heading: "Route Poisoning",
                points: [
                    "A failed route can be advertised with metric 16 so neighboring routers treat it as unreachable.",
                ],
            },
            {
                heading: "Hold-down Timer",
                points: [
                    "The hold-down timer temporarily suppresses unstable route changes to reduce routing loops and rapid oscillation.",
                ],
            },
            {
                heading: "Loop Limitation",
                points: [
                    "The maximum metric of 15 also limits how far a looping RIP route can continue to propagate.",
                ],
            },
        ],

        "RIP Versions": [
            {
                heading: "RIPv1",
                points: [
                    "RIPv1 uses broadcast updates, classful addressing, IPv4, and does not support authentication.",
                ],
            },
            {
                heading: "RIPv2",
                points: [
                    "RIPv2 uses multicast updates, supports classless addressing and authentication, and works with IPv4.",
                ],
            },
            {
                heading: "RIPng",
                points: [
                    "RIPng is the IPv6 version of RIP and uses multicast updates with classless IPv6 routing.",
                ],
            },
        ],

        "RIP Timers": [
            {
                heading: "Update Timer",
                points: [
                    "The update timer sends a normal RIP routing update every 30 seconds.",
                ],
            },
            {
                heading: "Invalid Timer",
                points: [
                    "The invalid timer marks a route invalid after 180 seconds without a valid update.",
                ],
            },
            {
                heading: "Hold-down Timer",
                points: [
                    "The hold-down timer uses 180 seconds to suppress unstable route information.",
                ],
            },
            {
                heading: "Flush Timer",
                points: [
                    "The flush timer removes an invalid route after 240 seconds.",
                ],
            },
        ],

        "Where RIP Is Used": [
            {
                heading: "Small to Medium Networks",
                points: [
                    "RIP fits networks with simple routing requirements because its hop-count method is easy to understand and manage.",
                ],
            },
            {
                heading: "Legacy Networks",
                points: [
                    "RIP can still be found in older network environments that were built before more advanced routing protocols became common.",
                ],
            },
            {
                heading: "Educational Labs",
                points: [
                    "RIP is useful for learning distance-vector routing, hop counts, routing tables, timers, and route selection.",
                ],
            },
            {
                heading: "Backup Routing",
                points: [
                    "RIP can be used as a backup routing protocol when another routing method is unavailable or fails.",
                ],
            },
        ],
    },
};

export default ripData;