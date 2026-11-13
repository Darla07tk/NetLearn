const protocolsQuizData = [

    {
        id: 1,
        question:
            "A user enters www.example.com in the browser. The browser checks its local DNS cache and finds a valid entry. What happens next in the DNS process described in the module?",
        options: {
            A: "The browser sends the query to the root DNS server",
            B: "The browser sends the query to the TLD server",
            C: "The lookup can finish without contacting external DNS servers",
            D: "The browser contacts the authoritative DNS server directly"
        },
        correctAnswer: "C"
    },

    {
        id: 2,
        question:
            "DNS flow: Browser → Resolver → Root → TLD → Authoritative Server. If the resolver does not already know the answer, which server provides the DNS record containing the required IP address?",
        options: {
            A: "Root server",
            B: "TLD server",
            C: "Authoritative server",
            D: "Browser cache"
        },
        correctAnswer: "C"
    },

    {
        id: 3,
        question:
            "A new device joins a network without a valid IP configuration. The DHCP server is located on another subnet. Which component allows the DHCP messages to reach that server?",
        options: {
            A: "DNS resolver",
            B: "DHCP relay",
            C: "SMTP server",
            D: "SNMP manager"
        },
        correctAnswer: "B"
    },

    {
        id: 4,
        question:
            "DHCP flow: Client sends DHCP Discover → Server prepares an available IP address and network options → Server sends DHCP Offer. What does the client send next to identify the selected server and request the offered address?",
        options: {
            A: "DHCP ACK",
            B: "DHCP Request",
            C: "DHCP Relay",
            D: "DNS Query"
        },
        correctAnswer: "B"
    },

    {
        id: 5,
        question:
            "A browser has already obtained the destination IP address for a website. According to the HTTP workflow, what does the browser send to the web server to request the required resource?",
        options: {
            A: "HTTP Request",
            B: "DNS Response",
            C: "TLS Certificate",
            D: "ICMP Echo Reply"
        },
        correctAnswer: "A"
    },

    {
        id: 6,
        question:
            "HTTPS flow: DNS Lookup → Connect to Web Server → TLS Handshake Begins → Server Provides Certificate. What is the main purpose of the certificate step described in the module?",
        options: {
            A: "To assign the browser an IP address",
            B: "To verify the identity of the website",
            C: "To replace HTTP with DNS",
            D: "To determine the DNS resolver"
        },
        correctAnswer: "B"
    },

    {
        id: 7,
        question:
            "An email system is using SMTP. Which sequence correctly represents part of the SMTP command flow for sending a message?",
        options: {
            A: "MAIL FROM → HELO/EHLO → RCPT TO → DATA",
            B: "HELO/EHLO → MAIL FROM → RCPT TO → DATA",
            C: "DATA → MAIL FROM → QUIT → RCPT TO",
            D: "RCPT TO → DATA → HELO/EHLO → MAIL FROM"
        },
        correctAnswer: "B"
    },

    {
        id: 8,
        question:
            "A user checks email from a laptop and phone. The emails remain stored on the mail server, and actions such as reading, deleting, and organizing messages are synchronized. Which protocol best matches this behavior?",
        options: {
            A: "POP3",
            B: "SMTP",
            C: "IMAP",
            D: "FTP"
        },
        correctAnswer: "C"
    },

    {
        id: 9,
        question:
            "An FTP client sends commands over its control connection while the actual file transfer uses a separate data connection. What does this tell you about FTP?",
        options: {
            A: "FTP is an out-of-band protocol",
            B: "FTP uses only one connection for all communication",
            C: "FTP is a connectionless transport protocol",
            D: "FTP uses DNS for file transfer"
        },
        correctAnswer: "A"
    },

    {
        id: 10,
        question:
            "TCP flow: Client sends SYN → Server sends SYN-ACK → Client sends ACK. At which point does the module state that the TCP connection is established?",
        options: {
            A: "Immediately after SYN",
            B: "After SYN-ACK",
            C: "After the client's ACK",
            D: "After the first application segment"
        },
        correctAnswer: "C"
    },

    {
        id: 11,
        question:
            "A TCP segment is lost during transmission and the expected acknowledgement is not received. What does TCP do according to the supplied module?",
        options: {
            A: "It permanently discards the missing data",
            B: "It retransmits the missing segment",
            C: "It changes the segment into a UDP datagram",
            D: "It asks DNS to resend the segment"
        },
        correctAnswer: "B"
    },

    {
        id: 12,
        question:
            "A UDP sender calculates a checksum using the datagram and additional IP-related information. Which statement correctly describes that additional information?",
        options: {
            A: "The pseudo header is transmitted as part of the UDP datagram",
            B: "The pseudo header is used during checksum calculation but is not transmitted",
            C: "The pseudo header replaces the UDP header",
            D: "The pseudo header contains the complete application data"
        },
        correctAnswer: "B"
    },

    {
        id: 13,
        question:
            "A router receives an IP packet whose destination is on another network. Which information does the router use to determine the next route?",
        options: {
            A: "The destination IP address",
            B: "Only the source MAC address",
            C: "The SMTP envelope",
            D: "The TCP checksum only"
        },
        correctAnswer: "A"
    },

    {
        id: 14,
        question:
            "A user runs ping to check connectivity. Flow: Source creates Echo Request → request travels through the IP network → destination receives it. What message does the destination generate in response?",
        options: {
            A: "ICMP Destination Unreachable",
            B: "ICMP Echo Reply",
            C: "ICMP Redirect",
            D: "TCP SYN-ACK"
        },
        correctAnswer: "B"
    },

    {
        id: 15,
        question:
            "OSPF flow: Hello packet is exchanged → Init state → Two-Way state → adjacency continues through later states. What does the Two-Way state confirm?",
        options: {
            A: "The routers have already calculated the final shortest paths",
            B: "Bidirectional communication between the neighbors",
            C: "The routing table is permanently fixed",
            D: "The network no longer needs Hello packets"
        },
        correctAnswer: "B"
    },

    {
        id: 16,
        question:
            "RIP learns two paths to the same destination. One path has fewer hops than the other. Which path should RIP prefer?",
        options: {
            A: "The path with the greater hop count",
            B: "The first path learned regardless of hop count",
            C: "The path with the lower hop count",
            D: "The path with a hop count of 16"
        },
        correctAnswer: "C"
    },

    {
        id: 17,
        question:
            "A host needs to send an IPv4 packet on its local Ethernet network but does not know the MAC address associated with the required IP address. Which protocol resolves this mapping?",
        options: {
            A: "ARP",
            B: "RIP",
            C: "ICMP",
            D: "PPP"
        },
        correctAnswer: "A"
    },

    {
        id: 18,
        question:
            "An Ethernet frame arrives at a switch. The switch checks the destination MAC address and finds it in the MAC table. What should happen?",
        options: {
            A: "The frame is flooded to all ports in the VLAN",
            B: "The frame is forwarded through the identified destination port",
            C: "The frame is sent only to the router",
            D: "The frame is converted into an ICMP message"
        },
        correctAnswer: "B"
    },

    {
        id: 19,
        question:
            "A PPP link connects two endpoints directly. Before network-layer communication can begin, PPP uses LCP to establish the link and an appropriate NCP to configure the network-layer protocol. What is the purpose of this sequence?",
        options: {
            A: "To create a DNS hierarchy",
            B: "To establish the point-to-point link and configure the required network layer",
            C: "To select a Wi-Fi frequency band",
            D: "To transfer email attachments"
        },
        correctAnswer: "B"
    },

    {
        id: 20,
        question:
            "A LAN has redundant links between switches. A broadcast frame begins to travel through the available paths. Which protocol prevents continuous Layer 2 loops by placing some switch ports into blocking states?",
        options: {
            A: "STP",
            B: "SMTP",
            C: "IMAP",
            D: "SNMP"
        },
        correctAnswer: "A"
    }

];

export default protocolsQuizData;