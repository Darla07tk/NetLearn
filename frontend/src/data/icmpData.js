const icmpData = {
    title: "Internet Control Message Protocol (ICMP)",

    intro: [
        "ICMP is a Network Layer protocol used by hosts, routers, and gateways to report network errors and exchange operational information.",
        "It supports diagnostics such as ping and traceroute by sending messages such as Echo Request, Echo Reply, Destination Unreachable, and Time Exceeded.",
        "ICMP works with IP rather than providing reliable data delivery itself; ICMP messages are carried inside IP packets.",
    ],

    pdu: "ICMP Message",

    workflow: [
        {
            title: "ICMP Echo Request is created",
            text: "The source PC creates an ICMP Echo Request to check whether the destination host is reachable.",
            activeNodes: ["sourcePC"],
            activeLines: [],
            activeArrow: null,
        },

        {
            title: "The Echo Request enters the IP network",
            text: "The ICMP message is carried inside an IP packet and prepared for transmission toward the destination.",
            activeNodes: ["sourcePC"],
            activeLines: [],
            activeArrow: null,
        },

        {
            title: "The request travels to the destination",
            text: "The IP packet carrying the ICMP Echo Request is forwarded through the routers toward the destination host.",
            activeNodes: [
                "sourcePC",
                "routerA",
                "routerB",
                "routerC",
                "destinationHost",
            ],
            activeLines: [
                "source-routerA",
                "routerA-routerB",
                "routerB-routerC",
                "routerC-destination",
            ],
            activeArrow: {
                line: "routerC-destination",
                direction: "forward",
            },
        },

        {
            title: "Echo Reply is generated",
            text: "The destination host receives the Echo Request and sends an ICMP Echo Reply back to the source.",
            activeNodes: [
                "destinationHost",
                "routerC",
                "routerB",
                "routerA",
                "sourcePC",
            ],
            activeLines: [
                "routerC-destination",
                "routerB-routerC",
                "routerA-routerB",
                "source-routerA",
            ],
            activeArrow: {
                line: "source-routerA",
                direction: "reverse",
            },
        },

        {
            title: "Round-trip time is measured",
            text: "The source receives the Echo Reply and uses the request and reply timing to assess reachability and round-trip time.",
            activeNodes: ["sourcePC"],
            activeLines: [],
            activeArrow: null,
        },

        {
            title: "A routing failure is detected",
            text: "If a packet cannot reach its destination, a router can discard the packet and generate an ICMP Destination Unreachable message.",
            activeNodes: ["routerB"],
            activeLines: [],
            activeArrow: null,
        },

        {
            title: "Destination Unreachable reaches the source",
            text: "The router sends the ICMP error message back through the network so the source knows that delivery failed.",
            activeNodes: [
                "routerB",
                "routerA",
                "sourcePC",
            ],
            activeLines: [
                "routerA-routerB",
                "source-routerA",
            ],
            activeArrow: {
                line: "source-routerA",
                direction: "reverse",
            },
        },

        {
            title: "ICMP Redirect can update routing",
            text: "A router can send a Redirect message to tell a host that a better route is available, allowing the host to update its routing information.",
            activeNodes: [
                "routerA",
                "sourcePC",
            ],
            activeLines: [
                "source-routerA",
            ],
            activeArrow: {
                line: "source-routerA",
                direction: "reverse",
            },
        },

        {
            title: "TTL expires during traceroute",
            text: "When a packet's TTL reaches zero at a router, the router discards it and sends an ICMP Time Exceeded message to the source.",
            activeNodes: [
                "routerB",
                "routerA",
                "sourcePC",
            ],
            activeLines: [
                "routerA-routerB",
                "source-routerA",
            ],
            activeArrow: {
                line: "source-routerA",
                direction: "reverse",
            },
        },

        {
            title: "ICMP completes the diagnostic process",
            text: "The source uses the returned ICMP information to understand reachability, routing, or errors on the network.",
            activeNodes: [],
            activeLines: [],
            activeArrow: null,
        },
    ],

    theory: {
        "ICMP Basics": [
            {
                heading: "What is ICMP?",
                points: [
                    "ICMP is a Network Layer protocol used by hosts and network devices to report errors and exchange operational information.",
                ],
            },
            {
                heading: "Error Reporting",
                points: [
                    "ICMP informs the source when packets cannot be delivered because of problems such as unreachable destinations or timeouts.",
                ],
            },
            {
                heading: "Operational Queries",
                points: [
                    "ICMP supports diagnostic operations such as Echo Request and Echo Reply, which are used by tools like ping.",
                ],
            },
            {
                heading: "Connectionless",
                points: [
                    "ICMP does not establish a connection or perform a handshake like TCP.",
                ],
            },
            {
                heading: "Works with IP",
                points: [
                    "ICMP messages are carried inside IP datagrams, with the IP header followed by the ICMP header and message data.",
                ],
            },
        ],

        "ICMP Message Types": [
            {
                heading: "Echo Request & Reply",
                points: [
                    "Echo Request checks reachability and Echo Reply is returned by the receiving host when the request is received.",
                ],
            },
            {
                heading: "Destination Unreachable",
                points: [
                    "This message informs the source that a destination or required network service could not be reached.",
                ],
            },
            {
                heading: "Redirect",
                points: [
                    "A router can send a Redirect message to tell a host about a better route and update its routing information.",
                ],
            },
            {
                heading: "Router Solicitation & Advertisement",
                points: [
                    "These messages help a host discover operational routers and receive routing-related information on the local network.",
                ],
            },
            {
                heading: "Time Exceeded",
                points: [
                    "This message is generated when a packet's TTL expires or a required fragment reassembly takes too long.",
                ],
            },
            {
                heading: "Parameter Problem",
                points: [
                    "This message reports an error in an IP packet header parameter or an incorrectly formed datagram field.",
                ],
            },
            {
                heading: "Timestamp Request & Reply",
                points: [
                    "These messages can be used to determine round-trip time and support clock synchronization between hosts.",
                ],
            },
            {
                heading: "Source Quench",
                points: [
                    "The source is asked to reduce its transmission rate when a receiving device reports traffic arriving too quickly.",
                ],
            },
        ],

        "ICMP Packet Format": [
            {
                heading: "Type",
                points: [
                    "The 8-bit Type field identifies the kind of ICMP message being transmitted.",
                ],
            },
            {
                heading: "Code",
                points: [
                    "The 8-bit Code field provides additional information about the message type or error condition.",
                ],
            },
            {
                heading: "Checksum",
                points: [
                    "The 16-bit Checksum field is used to check the integrity of the ICMP message.",
                ],
            },
            {
                heading: "Extended Header",
                points: [
                    "The extended header information can point to the part of an IP message where a problem was detected.",
                ],
            },
            {
                heading: "Data / Payload",
                points: [
                    "The final part of the ICMP packet contains variable-length data associated with the message.",
                ],
            },
        ],

        "Network Diagnostics": [
            {
                heading: "Ping",
                points: [
                    "Ping uses ICMP Echo Request and Echo Reply messages to test connectivity and measure round-trip time.",
                ],
            },
            {
                heading: "Traceroute",
                points: [
                    "Traceroute uses ICMP responses such as Time Exceeded to discover the path packets take through routers.",
                ],
            },
            {
                heading: "Network Performance",
                points: [
                    "ICMP information can help identify delays, unreachable destinations, routing problems, and other network conditions.",
                ],
            },
        ],

        "ICMP Error Handling": [
            {
                heading: "Packet Delivery Failure",
                points: [
                    "When a packet cannot be delivered, a network device can generate an ICMP error message and inform the original source.",
                ],
            },
            {
                heading: "Header Error",
                points: [
                    "If a packet contains an incorrect header parameter, ICMP can report the problem so the source can identify the error.",
                ],
            },
            {
                heading: "TTL Expiration",
                points: [
                    "When TTL reaches zero at a router, the packet is discarded and an ICMP Time Exceeded message can be sent to the source.",
                ],
            },
        ],

        "ICMP in DDoS Attacks": [
            {
                heading: "Ping of Death",
                points: [
                    "An oversized ping packet can create problems on vulnerable systems when fragmented data is reassembled beyond supported limits.",
                ],
            },
            {
                heading: "ICMP Flood",
                points: [
                    "A large volume of ICMP Echo Requests can consume target resources and cause a denial of service.",
                ],
            },
            {
                heading: "Smurf Attack",
                points: [
                    "A Smurf attack uses ICMP traffic with a spoofed source IP so responses from many systems can be directed toward a target.",
                ],
            },
        ],
    },
};

export default icmpData;