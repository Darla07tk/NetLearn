const httpsData = {
    title: "HyperText Transfer Protocol Secure",

    intro: [
        "HTTPS is the secure version of HTTP used to exchange information between a web browser and a web server.",
        "It uses TLS to protect data during transmission by providing encryption and secure communication.",
    ],

    steps: [
        {
            title: "Open Secure Website",
            text: "The user enters an HTTPS website address such as https://www.example.com in the browser.",
            active: ["browser"],
            packet: "HTTPS URL",
        },

        {
            title: "DNS Lookup",
            text: "The browser finds the IP address associated with the requested domain through the DNS system.",
            active: ["browser", "dns"],
            packet: "DNS QUERY",
        },

        {
            title: "Connect to Web Server",
            text: "The browser establishes a network connection with the server identified by the resolved IP address.",
            active: ["browser", "server"],
            packet: "CONNECTION",
        },

        {
            title: "TLS Handshake Begins",
            text: "The browser and server begin establishing a secure TLS connection before protected application data is exchanged.",
            active: ["browser", "server"],
            packet: "TLS HANDSHAKE",
        },

        {
            title: "Server Provides Certificate",
            text: "The server provides its digital certificate so the browser can verify the identity of the website.",
            active: ["server", "browser"],
            packet: "CERTIFICATE",
        },

        {
            title: "Secure Keys Established",
            text: "The browser and server establish the cryptographic information required to protect their communication.",
            active: ["browser", "server"],
            packet: "SECURE KEYS",
        },

        {
            title: "Encrypt HTTP Request",
            text: "The browser sends the HTTP request through the established secure connection so the transmitted information is protected.",
            active: ["browser", "server"],
            packet: "ENCRYPTED REQUEST",
        },

        {
            title: "Server Decrypts Request",
            text: "The server receives the protected request and decrypts it so the requested resource can be processed.",
            active: ["server"],
            packet: "DECRYPT",
        },

        {
            title: "Server Sends Secure Response",
            text: "The server prepares the HTTP response and sends it back through the protected TLS connection.",
            active: ["server", "browser"],
            packet: "ENCRYPTED RESPONSE",
        },

        {
            title: "Browser Decrypts Response",
            text: "The browser receives the encrypted response and processes the protected data.",
            active: ["browser"],
            packet: "DECRYPT",
        },

        {
            title: "Render the Web Page",
            text: "The browser uses the received content to display the requested secure webpage to the user.",
            active: ["browser"],
            packet: "SECURE WEB PAGE",
        },
    ],

    theory: {
        working: [
            "HTTPS combines normal HTTP communication with TLS protection.",
            "The browser and web server communicate through a secured connection instead of exchanging application data openly.",
            "TLS provides the encryption and decryption mechanisms used to protect information during transmission.",
        ],

        importance: [
            "HTTPS helps prevent transmitted information from being easily read when network traffic is intercepted.",
            "It is especially important when websites handle sensitive information such as login credentials.",
            "Encrypted communication makes intercepted data difficult to understand without the required cryptographic information.",
        ],

        tls: [
            "TLS is the security technology used to protect HTTPS communication.",
            "It helps establish a trusted and protected communication channel between the browser and the server.",
            "TLS replaced the older SSL technology and is the modern security layer used with HTTPS.",
        ],

        certificate: [
            "A digital certificate is provided by the server during secure connection establishment.",
            "The certificate helps the browser verify that it is communicating with the intended website.",
            "This verification helps prevent an attacker from pretending to be the legitimate server.",
        ],

        encryption: [
            "HTTPS protects information by encrypting data before it travels across the network.",
            "Encrypted information cannot be easily understood if the transmitted data is intercepted.",
            "The secure connection protects data while it travels between the browser and the web server.",
        ],

        keys: [
            "A public key can be shared with users communicating with the server.",
            "A private key is kept securely by the server and is not publicly shared.",
            "Cryptographic keys are used as part of establishing and protecting secure communication.",
        ],

        algorithms: [
            "RSA is an asymmetric cryptographic algorithm that can be involved in secure key exchange and authentication mechanisms.",
            "SHA-256 is a hashing algorithm used for integrity-related operations such as digital signatures and certificates.",
            "Hashing and encryption serve different purposes within secure communication.",
        ],

        comparison: [
            "HTTP sends application data without the TLS protection provided by HTTPS.",
            "HTTPS uses TLS to encrypt and protect the communication between the browser and server.",
            "Both are used at the application layer, but HTTPS adds a security layer around HTTP communication.",
            "HTTPS provides protection for confidentiality, authentication, and data integrity.",
        ],
    },
};

export default httpsData;