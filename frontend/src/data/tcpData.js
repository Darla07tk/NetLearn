const tcpData = {
    title: "Transmission Control Protocol (TCP)",

    intro: [
        "TCP is a transport-layer protocol that provides reliable communication between devices.",
        "It establishes a connection before sending data and makes sure data reaches the destination correctly and in order.",
        "TCP uses sequence numbers, acknowledgements, checksums, retransmission, flow control, and congestion control."
    ],

    pdu: "TCP Segment",

    workflow: [
        {
            title: "Application data reaches TCP",
            text: "The application gives its data to TCP. TCP prepares the data for reliable transmission.",
            activeNodes: ["client", "tcpSender"],
            activeLines: ["client-tcpSender"],
            activeArrow: {
                line: "client-tcpSender",
                direction: "forward"
            }
        },

        {
            title: "TCP sends a SYN segment",
            text: "The client TCP sends a SYN segment toward the server to request a TCP connection.",
            activeNodes: [
                "client",
                "tcpSender",
                "router1",
                "router2",
                "tcpReceiver",
                "server"
            ],
            activeLines: [
                "client-tcpSender",
                "tcpSender-router1",
                "router1-router2",
                "router2-tcpReceiver",
                "tcpReceiver-server"
            ],
            activeArrow: {
                line: "tcpReceiver-server",
                direction: "forward"
            }
        },

        {
            title: "Server sends SYN-ACK",
            text: "The server TCP receives the SYN and sends a SYN-ACK back through the IP network to the client.",
            activeNodes: [
                "server",
                "tcpReceiver",
                "router2",
                "router1",
                "tcpSender",
                "client"
            ],
            activeLines: [
                "tcpReceiver-server",
                "router2-tcpReceiver",
                "router1-router2",
                "tcpSender-router1",
                "client-tcpSender"
            ],
            activeArrow: {
                line: "client-tcpSender",
                direction: "reverse"
            }
        },

        {
            title: "Client sends ACK",
            text: "The client sends an ACK to confirm the SYN-ACK. The TCP connection is now established.",
            activeNodes: [
                "client",
                "tcpSender",
                "router1",
                "router2",
                "tcpReceiver",
                "server"
            ],
            activeLines: [
                "client-tcpSender",
                "tcpSender-router1",
                "router1-router2",
                "router2-tcpReceiver",
                "tcpReceiver-server"
            ],
            activeArrow: {
                line: "tcpReceiver-server",
                direction: "forward"
            }
        },

        {
            title: "TCP segments the application data",
            text: "After the connection is established, TCP divides the application data into smaller segments and adds TCP header information.",
            activeNodes: ["client", "tcpSender"],
            activeLines: ["client-tcpSender"],
            activeArrow: null,
            showSegmentationDots: true
        },

        {
            title: "Segments are routed through IP",
            text: "TCP passes the segments to IP, which forwards them through the network using the available routing path.",
            activeNodes: [
                "tcpSender",
                "router1",
                "router2",
                "tcpReceiver"
            ],
            activeLines: [
                "tcpSender-router1",
                "router1-router2",
                "router2-tcpReceiver"
            ],
            activeArrow: {
                line: "router2-tcpReceiver",
                direction: "forward"
            }
        },

        {
            title: "Receiver reassembles the data",
            text: "The TCP receiver uses sequence numbers to arrange the received segments in the correct order and reconstruct the original data.",
            activeNodes: [
                "server",
                "tcpReceiver",
                "router2",
                "router1",
                "tcpSender",
                "client"
            ],
            activeLines: [
                "tcpReceiver-server",
                "router2-tcpReceiver",
                "router1-router2",
                "tcpSender-router1",
                "client-tcpSender"
            ],
            activeArrow: {
                line: "tcpReceiver-server",
                direction: "forward"
            }
        },

        {
            title: "Receiver sends an ACK",
            text: "The receiver sends an acknowledgement to confirm that the expected TCP data has been received successfully.",
            activeNodes: [
                "server",
                "tcpReceiver",
                "router2",
                "router1",
                "tcpSender"
            ],
            activeLines: [
                "tcpReceiver-server",
                "router2-tcpReceiver",
                "router1-router2",
                "tcpSender-router1"
            ],
            activeArrow: {
                line: "tcpSender-router1",
                direction: "reverse"
            }
        },

        {
            title: "Lost segment is retransmitted",
            text: "If a segment is lost or its acknowledgement is not received in time, TCP retransmits the missing segment to maintain reliable delivery.",
            activeNodes: [
                "tcpSender",
                "router1",
                "router2",
                "tcpReceiver",
                "server"
            ],
            activeLines: [
                "tcpSender-router1",
                "router1-router2",
                "router2-tcpReceiver",
                "tcpReceiver-server"
            ],
            activeArrow: {
                line: "tcpReceiver-server",
                direction: "forward"
            }
        },

        {
            title: "TCP begins connection termination",
            text: "When communication is complete, the client sends a FIN segment to begin the TCP connection termination process.",
            activeNodes: [
                "client",
                "tcpSender",
                "router1",
                "router2",
                "tcpReceiver",
                "server"
            ],
            activeLines: [
                "client-tcpSender",
                "tcpSender-router1",
                "router1-router2",
                "router2-tcpReceiver",
                "tcpReceiver-server"
            ],
            activeArrow: {
                line: "tcpReceiver-server",
                direction: "forward"
            }
        },

        {
            title: "TCP connection is closed",
            text: "The server acknowledges the termination and completes the remaining FIN and ACK exchange. The TCP connection is now closed.",
            activeNodes: [],
            activeLines: [],
            activeArrow: null
        }
    ],

    theory: {
        "Connection Establishment": [
            {
                heading: "SYN",
                points: [
                    "The client sends a SYN segment with a starting sequence number to request a TCP connection."
                ]
            },
            {
                heading: "SYN-ACK",
                points: [
                    "The server responds with a SYN-ACK to acknowledge the request and agree to the connection."
                ]
            },
            {
                heading: "ACK",
                points: [
                    "The client sends an ACK, completing the handshake and establishing the TCP connection."
                ]
            }
        ],

        "TCP Working": [
            {
                heading: "Segmenting",
                points: [
                    "TCP divides application data into smaller segments and uses sequence numbers to keep them in order."
                ]
            },
            {
                heading: "Routing via IP",
                points: [
                    "TCP gives its segments to IP, which handles addressing and routing through the network."
                ]
            },
            {
                heading: "Reassembly",
                points: [
                    "The receiver uses sequence numbers to arrange the received segments and rebuild the original data."
                ]
            },
            {
                heading: "Acknowledgements",
                points: [
                    "The receiver sends ACKs to tell the sender that the data was received successfully."
                ]
            },
            {
                heading: "Retransmission",
                points: [
                    "TCP sends a missing segment again when the expected acknowledgement is not received."
                ]
            },
            {
                heading: "Flow & Error Control",
                points: [
                    "TCP controls the data flow and uses checksums and retransmission to handle errors and data loss."
                ]
            }
        ],

        "Applications": [
            {
                heading: "Web Browsing",
                points: [
                    "HTTP and HTTPS use TCP to deliver web data correctly and reliably."
                ]
            },
            {
                heading: "Email",
                points: [
                    "SMTP, IMAP, and POP3 use TCP to deliver email messages and attachments reliably."
                ]
            },
            {
                heading: "File Transfer",
                points: [
                    "FTP and SFTP use TCP to transfer files reliably and retransmit lost segments."
                ]
            },
            {
                heading: "Remote Access",
                points: [
                    "SSH and Telnet use TCP to reliably deliver commands and responses during remote access."
                ]
            }
        ],

        "Advantages": [
            {
                heading: "Reliable Transfer",
                points: [
                    "TCP detects lost data and retransmits it to provide dependable communication."
                ]
            },
            {
                heading: "Ordered Delivery",
                points: [
                    "TCP uses sequence numbers to rebuild segments in the correct order."
                ]
            },
            {
                heading: "Flow Control",
                points: [
                    "TCP controls the amount of data sent so the receiver is not overloaded."
                ]
            },
            {
                heading: "Congestion Control",
                points: [
                    "TCP can reduce its sending rate when the network becomes congested."
                ]
            },
            {
                heading: "Reliable Communication",
                points: [
                    "TCP uses acknowledgements and retransmission to provide complete and correct data delivery."
                ]
            },
            {
                heading: "Wide Support",
                points: [
                    "TCP is widely supported by operating systems and network applications."
                ]
            }
        ],

        "Connection Termination": [
            {
                heading: "FIN",
                points: [
                    "The device that wants to close the connection sends a FIN to show that it has finished sending data."
                ]
            },
            {
                heading: "ACK",
                points: [
                    "The receiving device sends an ACK to confirm that it received the FIN."
                ]
            },
            {
                heading: "Second FIN",
                points: [
                    "The receiving device sends its own FIN after it has finished sending its remaining data."
                ]
            },
            {
                heading: "Final ACK",
                points: [
                    "The original sender sends the final ACK, completing the TCP connection termination."
                ]
            }
        ]
    }
};

export default tcpData;