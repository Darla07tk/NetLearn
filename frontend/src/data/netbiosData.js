const netbiosData = {
    introduction: [
        "NETBIOS stands for Network Basic Input/Output System and provides communication services for computers and devices within a local area network.",
        "NETBIOS operates as a Session Layer interface and provides name service, datagram service, and session service.",
        "NETBIOS over TCP/IP uses the underlying TCP/IP network to carry NETBIOS communication between devices."
    ],

    workflow: [
        {
            title: "The client registers its NETBIOS name",
            description:
                "The client registers its NETBIOS name so that other devices can identify the application or resource by name.",
            activeNodes: ["client", "nameService"],
            activeLines: ["client-nameService"],
            activeArrow: {
                x1: 158,
                x2: 279
            }
        },

        {
            title: "The name service records the name",
            description:
                "The NETBIOS Name Service records the registered name and associates it with the client on the network.",
            activeNodes: ["nameService"],
            activeLines: []
        },

        {
            title: "The client queries a destination name",
            description:
                "Before communicating with another NETBIOS device, the client sends a name query to find the address associated with the destination NETBIOS name.",
            activeNodes: ["client", "nameService"],
            activeLines: ["client-nameService"],
            activeArrow: {
                x1: 158,
                x2: 279
            }
        },

        {
            title: "The name service returns the destination address",
            description:
                "The name service responds with the address information associated with the requested NETBIOS name.",
            activeNodes: ["client", "nameService"],
            activeLines: ["client-nameService"],
            activeArrow: {
                x1: 279,
                x2: 158
            }
        },

        {
            title: "The client requests a NETBIOS session",
            description:
                "After obtaining the destination address, the client starts a connection-oriented NETBIOS session with the server.",
            activeNodes: ["client", "nameService", "network", "server"],
            activeLines: [
                "client-nameService",
                "nameService-network",
                "network-server"
            ],
            activeArrow: {
                x1: 529,
                x2: 657
            }
        },

        {
            title: "The server accepts the session",
            description:
                "The server accepts the incoming session request and establishes the connection for NETBIOS session communication.",
            activeNodes: ["server"],
            activeLines: []
        },

        {
            title: "NETBIOS data is exchanged through the session",
            description:
                "The client sends data through the established NETBIOS session, and the server receives the message over the reliable connection.",
            activeNodes: ["client", "nameService", "network", "server"],
            activeLines: [
                "client-nameService",
                "nameService-network",
                "network-server"
            ],
            activeArrow: {
                x1: 529,
                x2: 657
            }
        },

        {
            title: "The server accesses the shared resource",
            description:
                "The server processes the request and accesses the shared file, printer, or other network resource.",
            activeNodes: ["server", "resource"],
            activeLines: ["server-resource"],
            activeArrow: {
                x1: 715,
                x2: 836
            }
        },

        {
            title: "The response returns to the client",
            description:
                "The server sends the result back through the established NETBIOS session to the client.",
            activeNodes: ["server", "network", "nameService", "client"],
            activeLines: [
                "network-server",
                "nameService-network",
                "client-nameService"
            ],
            activeArrow: {
                x1: 285,
                x2: 158
            }
        },

        {
            title: "The NETBIOS session is closed",
            description:
                "When communication is complete, either participant can close the NETBIOS session and release the established connection.",
            activeNodes: [],
            activeLines: []
        }
    ],

    theory: [
        {
            heading: "NETBIOS Services",
            cards: [
                {
                    title: "Name Service",
                    text:
                        "It registers and finds NETBIOS names so devices can locate network resources."
                },
                {
                    title: "Datagram Service",
                    text:
                        "It sends messages without first creating a dedicated session."
                },
                {
                    title: "Session Service",
                    text:
                        "It creates a session so two NETBIOS applications can communicate reliably."
                }
            ]
        },

        {
            heading: "Purpose of NETBIOS",
            cards: [
                {
                    title: "Name Resolution",
                    text:
                        "NETBIOS names help applications identify network resources without using only IP addresses."
                },
                {
                    title: "Communication",
                    text:
                        "It supports both datagram communication and session-based communication."
                },
                {
                    title: "Resource Sharing",
                    text:
                        "It helped users access shared files, printers, and other resources on a LAN."
                }
            ]
        },

        {
            heading: "NETBIOS over TCP/IP",
            cards: [
                {
                    title: "Name Service",
                    text:
                        "Name Service traffic traditionally uses UDP port 137 over NetBIOS over TCP/IP."
                },
                {
                    title: "Datagram Service",
                    text:
                        "Datagram Service traffic traditionally uses UDP port 138 for connectionless communication."
                },
                {
                    title: "Session Service",
                    text:
                        "Session Service traffic traditionally uses TCP port 139 for connection-oriented communication."
                }
            ]
        },

        {
            heading: "NETBIOS Communication",
            cards: [
                {
                    title: "Name Registration",
                    text:
                        "A device registers a NETBIOS name so applications and resources can be identified."
                },
                {
                    title: "Name Query",
                    text:
                        "A device can query a NETBIOS name to find the address needed for communication."
                },
                {
                    title: "Session Communication",
                    text:
                        "After the destination is found, a NETBIOS session allows reliable two-way communication."
                }
            ]
        },

        {
            heading: "Benefits of NETBIOS",
            cards: [
                {
                    title: "Simplicity",
                    text:
                        "NETBIOS was simple to set up, which made it useful for smaller networks."
                },
                {
                    title: "Name-Based Access",
                    text:
                        "NETBIOS names gave users and applications an easy way to identify network resources."
                },
                {
                    title: "Compatibility",
                    text:
                        "Earlier Microsoft Windows systems and applications widely supported NETBIOS."
                },
                {
                    title: "Resource Sharing",
                    text:
                        "It helped computers share files, printers, and other resources on local networks."
                }
            ]
        },

        {
            heading: "Limitations of NETBIOS",
            cards: [
                {
                    title: "Limited Scalability",
                    text:
                        "NETBIOS works better on smaller networks and becomes less efficient as the network grows."
                },
                {
                    title: "Security Weaknesses",
                    text:
                        "NETBIOS does not provide modern protections such as strong encryption and authentication."
                },
                {
                    title: "Broadcast Dependence",
                    text:
                        "Some NETBIOS operations use broadcasts, which can increase network traffic."
                },
                {
                    title: "Legacy Technology",
                    text:
                        "DNS and newer SMB systems have reduced the need for NETBIOS."
                }
            ]
        },

        {
            heading: "Security Concerns",
            cards: [
                {
                    title: "No Built-In Encryption",
                    text:
                        "NETBIOS does not encrypt the information it sends."
                },
                {
                    title: "Authentication Concerns",
                    text:
                        "NETBIOS has limited built-in authentication, which can increase the risk of unauthorized access and spoofing."
                },
                {
                    title: "Information Leakage",
                    text:
                        "NETBIOS names can reveal information about computers, users, and shared resources."
                }
            ]
        },

        {
            heading: "Historical Attack Examples",
            cards: [
                {
                    title: "Nimda Worm",
                    text:
                        "The Nimda worm used network shares as one way to spread between vulnerable Windows systems."
                },
                {
                    title: "SMBRelay",
                    text:
                        "SMBRelay can exploit weaknesses in older authentication and network-sharing systems."
                },
                {
                    title: "Legacy Risk",
                    text:
                        "These examples show why older NETBIOS-based environments need careful security controls."
                }
            ]
        }
    ]
};

export default netbiosData;