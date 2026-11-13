const rpcData = {
    introduction: [
        "RPC stands for Remote Procedure Call and allows a program to execute a procedure in a different address space.",
        "RPC makes a remote procedure call appear similar to a normal local procedure call.",
        "RPC commonly uses a request-response message-passing mechanism between a client and a server."
    ],

    workflow: [
        {
            title: "Client application makes an RPC call",
            description:
                "The client application thread makes a remote procedure call to the client stub.",
            activeNodes: ["client", "clientStub"],
            activeLines: ["client-clientStub"],
            activeArrow: {
                x1: 158,
                x2: 285
            }
        },

        {
            title: "Client stub receives the call",
            description:
                "The client stub accepts the procedure arguments and prepares them for transmission to the remote server.",
            activeNodes: ["clientStub"],
            activeLines: []
        },

        {
            title: "Arguments are packaged into a request",
            description:
                "The RPC stub packages the procedure arguments into a request message for transmission across the network.",
            activeNodes: ["clientStub"],
            activeLines: []
        },

        {
            title: "The request travels to the server",
            description:
                "The RPC request is transmitted through the network toward the server process.",
            activeNodes: ["clientStub", "network", "serverStub"],
            activeLines: ["clientStub-network", "network-serverStub"],
            activeArrow: {
                x1: 529,
                x2: 657
            }
        },

        {
            title: "Server stub receives the request",
            description:
                "The server stub receives the request and translates the packaged arguments back into the form required by the remote procedure.",
            activeNodes: ["serverStub"],
            activeLines: []
        },

        {
            title: "Remote procedure is executed",
            description:
                "The server calling thread executes the requested remote operation.",
            activeNodes: ["server"],
            activeLines: []
        },

        {
            title: "Server sends the reply",
            description:
                "After completing the operation, the server sends a reply message containing the result back toward the client.",
            activeNodes: ["server", "serverStub"],
            activeLines: ["serverStub-server"],
            activeArrow: {
                x1: 842,
                x2: 715
            }
        },

        {
            title: "Reply travels back to the client",
            description:
                "The RPC reply travels across the network and reaches the client-side RPC stub.",
            activeNodes: ["serverStub", "network", "clientStub"],
            activeLines: ["network-serverStub", "clientStub-network"],
            activeArrow: {
                x1: 471,
                x2: 343
            }
        },

        {
            title: "Client receives the result",
            description:
                "The result reaches the client application thread and the RPC call returns its result to the application.",
            activeNodes: ["client"],
            activeLines: []
        }
    ],

    theory: [
        {
            heading: "Communication Methods",
            cards: [
                {
                    title: "Interprocess Communication",
                    text:
                        "It is a low-level communication paradigm. Distributed shared memory such as a mailbox is an example."
                },
                {
                    title: "Remote Invocation",
                    text:
                        "It is a high-level and direct communication paradigm. RPC and RMI are examples."
                },
                {
                    title: "Indirect Communication",
                    text:
                        "It is a high-level indirect communication paradigm. Group communication and Publish/Subscribe are examples."
                }
            ]
        },

        {
            heading: "RPC Characteristics",
            cards: [
                {
                    title: "Remote Execution",
                    text:
                        "A computer program can cause a procedure to operate in a different address space."
                },
                {
                    title: "Local Call Semantics",
                    text:
                        "The programmer can write the call essentially the same way whether the procedure is local or remote."
                },
                {
                    title: "Request-Response",
                    text:
                        "RPC generally uses a request-response message-passing mechanism for client-server interaction."
                }
            ]
        },

        {
            heading: "RPC Mechanism",
            cards: [
                {
                    title: "Message Protocol",
                    text:
                        "A protocol controls messages delivered between client and server processes and deals with unfavorable network characteristics."
                },
                {
                    title: "Argument Packaging",
                    text:
                        "Arguments are packaged into a request message on the client and translated back into arguments on the server."
                },
                {
                    title: "Stub Compiler",
                    text:
                        "The stub compiler is the part of the RPC system responsible for packaging arguments and translating return values."
                }
            ]
        },

        {
            heading: "RPC Thread Execution",
            cards: [
                {
                    title: "Client Thread",
                    text:
                        "The RPC thread starts in the client process when a client application thread makes an RPC to its stub."
                },
                {
                    title: "Server Calling Thread",
                    text:
                        "The RPC thread becomes a calling thread that executes the remote procedure in the server context."
                },
                {
                    title: "Return to Client",
                    text:
                        "After the call completes, the RPC thread returns through the network and delivers the result to the client application thread."
                }
            ]
        },

        {
            heading: "Network Limitations",
            cards: [
                {
                    title: "Message Delivery",
                    text:
                        "RPC protocols may perform additional functions to deliver messages in a timely manner."
                },
                {
                    title: "Fragmentation",
                    text:
                        "Fragmentation can be used to support messages that are larger than the network can handle directly."
                },
                {
                    title: "Reassembly",
                    text:
                        "The fragmented message is reassembled so that the original large message can be processed."
                }
            ]
        },

        {
            heading: "Benefits of RPC",
            cards: [
                {
                    title: "Architecture Support",
                    text:
                        "Remote procedure calls support both process-oriented and thread-oriented architectures."
                },
                {
                    title: "Local and Distributed Use",
                    text:
                        "RPC can be utilized in both distributed and local contexts."
                },
                {
                    title: "Simplified Programming",
                    text:
                        "The user does not need to be aware of the underlying message transmission method."
                },
                {
                    title: "Performance",
                    text:
                        "RPC can skip several protocol layers to enhance performance."
                },
                {
                    title: "Less Code Rewriting",
                    text:
                        "Remote procedure calls require minimal work to rewrite and develop code."
                }
            ]
        },

        {
            heading: "Drawbacks of RPC",
            cards: [
                {
                    title: "Implementation Variations",
                    text:
                        "The notion of a remote procedure call can be implemented in a variety of ways and is not a single fixed set of rules."
                },
                {
                    title: "Hardware Architecture",
                    text:
                        "RPC does not provide hardware architectural flexibility and depends on interaction between the systems."
                },
                {
                    title: "Additional Cost",
                    text:
                        "The use of remote procedure calls can increase costs."
                }
            ]
        },

        {
            heading: "RPC Applications",
            cards: [
                {
                    title: "Protobufs",
                    text:
                        "Protobufs from Google are listed as an example of technology using RPC concepts."
                },
                {
                    title: "Thrift",
                    text:
                        "Thrift on Facebook is listed as an example of RPC usage."
                },
                {
                    title: "Finagle",
                    text:
                        "Finagle on Twitter is listed as an example of RPC usage."
                }
            ]
        }
    ]
};

export default rpcData;