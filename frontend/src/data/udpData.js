const udpData = {
    title: "User Datagram Protocol (UDP)",

    intro: [
        "UDP is a transport-layer protocol that provides fast, connectionless, and lightweight communication between processes.",
        "It sends data without establishing a connection or waiting for acknowledgements, making it useful when low delay is more important than guaranteed delivery.",
        "UDP is commonly used for time-sensitive applications such as DNS, video streaming, VoIP, online gaming, DHCP, RIP, and NTP."
    ],

    pdu: "UDP Datagram",

    workflow: [
        {
            title: "Application sends data to UDP",
            text: "The application gives UDP the data and destination details. UDP prepares the data for transmission.",
            activeNodes: ["client", "udpSender"],
            activeLines: ["client-udpSender"],
            activeArrow: {
                line: "client-udpSender",
                direction: "forward"
            }
        },

        {
            title: "UDP adds its header",
            text: "UDP adds the source port, destination port, length, and checksum fields to the application data.",
            activeNodes: ["udpSender"],
            activeLines: [],
            activeArrow: null
        },

        {
            title: "UDP calculates the checksum",
            text: "UDP calculates the checksum using the datagram and a pseudo header containing IP-related information; the pseudo header itself is not transmitted.",
            activeNodes: ["udpSender", "ipLayer"],
            activeLines: ["udpSender-ipLayer"],
            activeArrow: null
        },

        {
            title: "UDP passes the datagram to IP",
            text: "The completed UDP datagram is handed to IP, which adds its own information for network delivery.",
            activeNodes: ["udpSender", "ipLayer"],
            activeLines: ["udpSender-ipLayer"],
            activeArrow: {
                line: "udpSender-ipLayer",
                direction: "forward"
            }
        },

        {
            title: "IP routes the datagram through the network",
            text: "IP uses addressing and routing to forward the packet through the router toward the receiving device.",
            activeNodes: ["ipLayer", "router", "udpReceiver"],
            activeLines: [
                "ipLayer-router",
                "router-udpReceiver"
            ],
            activeArrow: {
                line: "router-udpReceiver",
                direction: "forward"
            }
        },

        {
            title: "UDP receives and checks the datagram",
            text: "The receiving UDP layer checks the datagram and uses the destination port to identify the correct application.",
            activeNodes: ["udpReceiver"],
            activeLines: [],
            activeArrow: null
        },

        {
            title: "UDP delivers the payload",
            text: "UDP removes its header and passes the original application data to the target application.",
            activeNodes: ["udpReceiver", "server"],
            activeLines: ["udpReceiver-server"],
            activeArrow: {
                line: "udpReceiver-server",
                direction: "forward"
            }
        },

        {
            title: "No acknowledgement or retransmission",
            text: "UDP does not wait for an acknowledgement or resend a lost datagram, so the application can continue without TCP-style delivery control.",
            activeNodes: ["udpSender"],
            activeLines: [],
            activeArrow: null
        }
    ],

    theory: {
        "UDP Header": [
            {
                heading: "Source Port",
                points: [
                    "Identifies the port used by the sending application."
                ]
            },
            {
                heading: "Destination Port",
                points: [
                    "Identifies the port of the receiving application."
                ]
            },
            {
                heading: "Length",
                points: [
                    "Shows the total size of the UDP header and its data."
                ]
            },
            {
                heading: "Checksum",
                points: [
                    "Helps detect errors in the UDP datagram and is optional in IPv4 but required in IPv6."
                ]
            }
        ],

        "UDP Pseudo Header": [
            {
                heading: "Source and Destination IP",
                points: [
                    "The pseudo header uses the source and destination IP addresses during checksum calculation."
                ]
            },
            {
                heading: "Zero Field",
                points: [
                    "A zero-valued padding field is included in the checksum calculation."
                ]
            },
            {
                heading: "Protocol Number",
                points: [
                    "The protocol field identifies UDP as the transport protocol being checked."
                ]
            },
            {
                heading: "UDP Length",
                points: [
                    "The UDP length value is included so the checksum also checks the datagram size."
                ]
            }
        ],

        "Use of UDP in DDoS Attacks": [
            {
                heading: "Spoofed Packets",
                points: [
                    "An attacker may send large numbers of UDP packets using fake source IP addresses."
                ]
            },
            {
                heading: "Target Ports",
                points: [
                    "The target checks the destination ports for active applications."
                ]
            },
            {
                heading: "ICMP Responses",
                points: [
                    "Unused ports may cause the target to generate ICMP Destination Unreachable messages."
                ]
            },
            {
                heading: "Mitigation",
                points: [
                    "Rate limiting, firewalls, IPS tools, traffic monitoring, and DDoS protection can reduce UDP flood impact."
                ]
            }
        ],

        "Applications of UDP": [
            {
                heading: "DNS",
                points: [
                    "UDP supports fast DNS queries and responses with small amounts of data."
                ]
            },
            {
                heading: "DHCP",
                points: [
                    "DHCP uses UDP for exchanging small messages while assigning network settings."
                ]
            },
            {
                heading: "VoIP",
                points: [
                    "VoIP uses UDP because low delay is more important than retransmitting every lost packet."
                ]
            },
            {
                heading: "RIP",
                points: [
                    "RIP uses UDP to send periodic routing updates between routers."
                ]
            },
            {
                heading: "NTP",
                points: [
                    "NTP uses UDP to synchronize system clocks with low communication overhead."
                ]
            }
        ]
    }
};

export default udpData;