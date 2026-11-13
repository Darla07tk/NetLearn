
const tlsData = {
    title: "Transport Layer Security (TLS)",

    intro: [
        "TLS is a security protocol that protects data exchanged between a client and a server.",
        "It uses encryption to keep transmitted information confidential and authentication to help verify the server's identity.",
        "TLS establishes secure communication through a handshake before encrypted application data is exchanged."
    ],

    pdu: "TLS Record",

    workflow: [
        {
            title: "Client Requests a Secure Connection",
            text: "The client opens a secure website and sends a ClientHello message containing supported TLS versions, cipher suites, and other connection parameters.",
            keyword: "CLIENT HELLO",
            activeNodes: ["client", "router"],
            activeLinks: ["client-router"]
        },
        {
            title: "Server Responds to the Client",
            text: "The server responds with a ServerHello message and selects the TLS version and cryptographic settings for the secure connection.",
            keyword: "SERVER HELLO",
            activeNodes: ["client", "router", "server"],
            activeLinks: ["client-router", "router-server"]
        },
        {
            title: "Server Sends Its Certificate",
            text: "The server sends its digital certificate so the client can check the server's identity and determine whether the certificate can be trusted.",
            keyword: "CERTIFICATE",
            activeNodes: ["client", "router", "server"],
            activeLinks: ["router-server"]
        },
        {
            title: "Client Verifies the Certificate",
            text: "The client checks the certificate's validity, hostname, expiration, and trust chain. A trusted certificate authority helps establish confidence in the server's identity.",
            keyword: "VERIFY CERT",
            activeNodes: ["client", "ca"],
            activeLinks: ["client-ca"]
        },
        {
            title: "Client and Server Establish Keys",
            text: "The client and server perform the required key exchange or key agreement steps and derive shared session keys. The exact messages depend on the TLS version and selected cipher suite.",
            keyword: "KEY EXCHANGE",
            activeNodes: ["client", "router", "server"],
            activeLinks: ["client-router", "router-server"]
        },
        {
            title: "Secure Connection Is Established",
            text: "Both sides finish the handshake and confirm the negotiated security settings. They can now exchange protected application data.",
            keyword: "SECURE KEYS",
            activeNodes: ["client", "router", "server"],
            activeLinks: ["client-router", "router-server"]
        },
        {
            title: "Client Sends Encrypted Data",
            text: "The client encrypts application data using the negotiated traffic keys and sends the protected TLS records toward the server.",
            keyword: "ENCRYPTED DATA",
            activeNodes: ["client", "router", "server"],
            activeLinks: ["client-router", "router-server"]
        },
        {
            title: "Server Receives and Decrypts Data",
            text: "The server uses the appropriate traffic keys to authenticate and decrypt the received TLS records, then processes the application request.",
            keyword: "DECRYPT DATA",
            activeNodes: ["server", "router"],
            activeLinks: ["router-server"]
        },
        {
            title: "Server Sends an Encrypted Response",
            text: "The server encrypts its response using the negotiated traffic keys and sends the protected TLS records back toward the client.",
            keyword: "TLS RESPONSE",
            activeNodes: ["server", "router", "client"],
            activeLinks: ["router-server", "client-router"]
        },
        {
            title: "Client Decrypts the Response",
            text: "The client authenticates and decrypts the received TLS records and passes the recovered application data to the browser or application.",
            keyword: "SECURE DATA",
            activeNodes: ["client", "router"],
            activeLinks: ["client-router"]
        }
    ],

    theory: {
        security: [
            {
                title: "Encryption",
                text: "TLS encrypts application data so unauthorized parties cannot easily read it while it travels across the network."
            },
            {
                title: "Data Integrity",
                text: "TLS protects records against undetected modification by using authenticated encryption or the appropriate integrity mechanism."
            },
            {
                title: "Authentication",
                text: "TLS commonly uses server certificates to help clients verify that they are communicating with the intended server."
            },
            {
                title: "Secure Communication",
                text: "TLS protects application protocols such as HTTPS when they communicate over a properly configured TLS connection."
            }
        ],

        certificate: [
            {
                title: "Digital Certificate",
                text: "A digital certificate binds a server's identity to a public key and contains information used during certificate validation."
            },
            {
                title: "Certificate Authority",
                text: "A certificate authority signs certificates, helping clients determine whether the certificate chain leads to a trusted authority."
            },
            {
                title: "Certificate Validation",
                text: "The client checks items such as the hostname, validity period, signatures, and trust chain before accepting the certificate."
            },
            {
                title: "Public Key",
                text: "The certificate contains the server's public key, which is used according to the selected TLS authentication and key-exchange method."
            }
        ],

        forwardSecrecy: [
            {
                title: "Temporary Keys",
                text: "Modern TLS configurations can use ephemeral key agreement to establish fresh session secrets for a connection."
            },
            {
                title: "Session Protection",
                text: "With forward secrecy, later exposure of a server's long-term private key should not reveal previously recorded session traffic."
            },
            {
                title: "Key Agreement",
                text: "Ephemeral Diffie-Hellman methods allow the client and server to derive shared secrets without sending those secrets directly."
            }
        ],

        handshake: [
            {
                title: "ClientHello",
                text: "The client proposes supported TLS versions, cryptographic options, and other parameters needed to begin negotiation."
            },
            {
                title: "ServerHello",
                text: "The server selects the connection parameters and sends its response to continue the handshake."
            },
            {
                title: "Certificate Verification",
                text: "When certificate authentication is used, the client validates the server's certificate and identity."
            },
            {
                title: "Handshake Completion",
                text: "Both sides derive the required secrets and verify handshake messages before protected application data is exchanged."
            }
        ],

        pfs: [
            {
                title: "Meaning of PFS",
                text: "Perfect Forward Secrecy means that compromising a long-term private key does not expose past session keys established using a suitable ephemeral key exchange."
            },
            {
                title: "Ephemeral Key Exchange",
                text: "TLS 1.3 uses ephemeral key agreement in its standard handshake mechanisms; TLS 1.2 can also provide forward secrecy with suitable cipher suites."
            },
            {
                title: "Why It Matters",
                text: "Forward secrecy reduces the risk that previously captured encrypted traffic can be decrypted after a long-term key is compromised."
            }
        ],

        deployment: [
            {
                title: "Use Modern TLS",
                text: "Prefer TLS 1.3 or a securely configured TLS 1.2 connection and disable obsolete SSL and insecure TLS versions."
            },
            {
                title: "Valid Certificates",
                text: "Use certificates issued by trusted authorities, with the correct hostname and a valid expiration period."
            },
            {
                title: "Strong Configuration",
                text: "Choose secure cipher suites, maintain current server software, and avoid weak cryptographic settings."
            },
            {
                title: "Renew and Monitor",
                text: "Monitor certificate expiration, renew certificates on time, and review security configuration regularly."
            }
        ],

        evolution: [
            {
                title: "SSL Predecessor",
                text: "SSL was an earlier protocol family that preceded TLS, but SSL versions are obsolete and should not be used."
            },
            {
                title: "TLS 1.2",
                text: "TLS 1.2 improved secure communication and remains supported when configured with modern cryptographic settings."
            },
            {
                title: "TLS 1.3",
                text: "TLS 1.3 simplifies the handshake, removes several outdated cryptographic options, and improves connection security and performance."
            },
            {
                title: "Ongoing Improvements",
                text: "TLS implementations should be kept updated to benefit from security fixes and current cryptographic recommendations."
            }
        ]
    }
};

export default tlsData;
