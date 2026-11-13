const pppData = {
    title: "Point-to-Point Protocol (PPP) Suite",

    intro: [
        "PPP is a Data Link Layer protocol used to establish direct communication between two networking nodes over a point-to-point link.",
        "A PPP connection normally has an Initiator that starts the connection and a Responder that accepts the connection and validates the peer.",
        "PPP provides link establishment, authentication, error detection, and support for multiple network layer protocols through LCP, NCP, and authentication protocols.",
    ],

    pdu: "PPP Frame",

    workflow: [
        {
            title: "The point-to-point link is prepared",
            text: "The PPP client and server are directly connected, creating a dedicated point-to-point communication link between the two endpoints.",
            activeNodes: [
                "pppClient",
                "pppServer",
            ],
            activeLines: [],
            activeArrow: null,
        },

        {
            title: "LCP begins link establishment",
            text: "The initiator starts the PPP session, and LCP begins establishing the link by negotiating the parameters required for communication.",
            activeNodes: [
                "pppClient",
                "pppServer",
            ],
            activeLines: [
                "client-server",
            ],
            activeArrow: {
                line: "client-server",
                direction: "forward",
            },
        },

        {
            title: "LCP configures and tests the link",
            text: "LCP configures the link parameters and checks link integrity so that the connection is ready for reliable communication.",
            activeNodes: [
                "pppClient",
                "pppServer",
            ],
            activeLines: [
                "client-server",
            ],
            activeArrow: {
                line: "client-server",
                direction: "reverse",
            },
        },

        {
            title: "The peer is authenticated",
            text: "When authentication is required, PPP uses PAP, CHAP, or EAP to verify the identity of the communicating peer before data transfer begins.",
            activeNodes: [
                "pppClient",
                "pppServer",
            ],
            activeLines: [
                "client-server",
            ],
            activeArrow: {
                line: "client-server",
                direction: "reverse",
            },
        },

        {
            title: "NCP configures the network layer",
            text: "After the link is established, an appropriate NCP configures and enables the required network layer protocol, such as IP through IPCP.",
            activeNodes: [
                "pppClient",
                "pppServer",
            ],
            activeLines: [
                "client-server",
            ],
            activeArrow: {
                line: "client-server",
                direction: "forward",
            },
        },

        {
            title: "User data is transmitted",
            text: "Once the PPP link and network layer protocol are ready, user data can travel between the two endpoints using PPP frames.",
            activeNodes: [
                "pppClient",
                "pppServer",
            ],
            activeLines: [
                "client-server",
            ],
            activeArrow: {
                line: "client-server",
                direction: "forward",
            },
        },

        {
            title: "The PPP link is maintained",
            text: "PPP continues managing the established connection while communication is taking place, allowing the link to remain available between the two endpoints.",
            activeNodes: [
                "pppClient",
                "pppServer",
            ],
            activeLines: [
                "client-server",
            ],
            activeArrow: null,
        },

        {
            title: "LCP terminates the PPP link",
            text: "When communication ends, LCP performs the link termination process and closes the established PPP connection.",
            activeNodes: [],
            activeLines: [],
            activeArrow: null,
        },
    ],

    theory: {
        "PPP Basics": [
            {
                heading: "Data Link Layer Protocol",
                points: [
                    "PPP operates at the Data Link Layer and provides communication across a direct point-to-point link.",
                ],
            },
            {
                heading: "Point-to-Point Connection",
                points: [
                    "PPP is designed for a direct connection between two networking nodes rather than a shared network segment.",
                ],
            },
            {
                heading: "Initiator",
                points: [
                    "The initiator is the endpoint that starts the PPP connection.",
                ],
            },
            {
                heading: "Responder",
                points: [
                    "The responder accepts the connection and validates the communicating peer.",
                ],
            },
        ],

        "Link Control Protocol (LCP)": [
            {
                heading: "Link Establishment",
                points: [
                    "LCP establishes the PPP link between the two endpoints before normal data transfer begins.",
                ],
            },
            {
                heading: "Link Configuration",
                points: [
                    "LCP negotiates and configures the parameters required for the point-to-point connection.",
                ],
            },
            {
                heading: "Link Integrity",
                points: [
                    "LCP can test and monitor the integrity and quality of the established link.",
                ],
            },
            {
                heading: "Link Termination",
                points: [
                    "LCP terminates the connection when the PPP communication session is finished.",
                ],
            },
            {
                heading: "Bandwidth Allocation",
                points: [
                    "BAP and BACP support bandwidth allocation when multiple links are combined into a multilink bundle.",
                ],
            },
            {
                heading: "Link Quality Monitoring",
                points: [
                    "LQM and LQR provide mechanisms for determining and reporting link quality between PPP endpoints.",
                ],
            },
        ],

        "Network Control Protocol (NCP)": [
            {
                heading: "Network Layer Support",
                points: [
                    "PPP uses NCPs to configure and enable the network layer protocols carried across the established link.",
                ],
            },
            {
                heading: "IP Control",
                points: [
                    "IPCP configures and negotiates options for carrying IP over the PPP connection.",
                ],
            },
            {
                heading: "Compression Control",
                points: [
                    "CCP negotiates compression methods between the two PPP peers.",
                ],
            },
            {
                heading: "Bridging Control",
                points: [
                    "BCP configures PPP to support bridging instead of routing.",
                ],
            },
            {
                heading: "Encryption Control",
                points: [
                    "ECP negotiates and manages encryption methods for PPP data transfer.",
                ],
            },
        ],

        "Authentication Protocols": [
            {
                heading: "Authentication Purpose",
                points: [
                    "PPP authentication verifies the identity of a peer before normal data transfer takes place.",
                ],
            },
            {
                heading: "PAP",
                points: [
                    "PAP uses a simple username-and-password mechanism but sends the password in plaintext, making it less secure.",
                ],
            },
            {
                heading: "CHAP",
                points: [
                    "CHAP uses a three-way challenge-response-verification process and avoids sending the password in plaintext.",
                ],
            },
            {
                heading: "EAP",
                points: [
                    "EAP provides a flexible framework that can support mechanisms such as tokens, certificates, and smartcards.",
                ],
            },
        ],

        "Working of PPP Suite": [
            {
                heading: "Link Establishment",
                points: [
                    "LCP first establishes and configures the physical communication link between the two peers.",
                ],
            },
            {
                heading: "Optional Authentication",
                points: [
                    "Authentication is performed when required to validate the identity of the communicating peer.",
                ],
            },
            {
                heading: "Network Configuration",
                points: [
                    "NCP configures and enables the network layer protocol that will operate over the PPP link.",
                ],
            },
            {
                heading: "Data Transmission",
                points: [
                    "User data is transmitted after the link and required network layer protocol have been successfully configured.",
                ],
            },
            {
                heading: "Link Termination",
                points: [
                    "LCP closes the PPP connection when communication is complete.",
                ],
            },
        ],

        "PPP Characteristics": [
            {
                heading: "Encapsulation",
                points: [
                    "PPP encapsulates network layer information for transmission across the point-to-point link.",
                ],
            },
            {
                heading: "Error Detection",
                points: [
                    "PPP provides error detection to help identify problems in transmitted information.",
                ],
            },
            {
                heading: "Multiple Network Protocols",
                points: [
                    "PPP can support different network layer protocols by using separate NCPs for each supported protocol.",
                ],
            },
            {
                heading: "Authentication Support",
                points: [
                    "PPP can authenticate peers before allowing normal data communication.",
                ],
            },
        ],
    },
};

export default pppData;