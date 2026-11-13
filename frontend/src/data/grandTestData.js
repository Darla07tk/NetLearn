const grandTestData = [

    {
        id: 1,
        question:
            "A company uses a client-server network in which several users depend on a central server for shared resources. If that central server becomes unavailable, what is the most likely effect?",
        options: {
            A: "All devices automatically become routers",
            B: "Services hosted by the server may become unavailable to the clients",
            C: "The network automatically changes to a bus topology",
            D: "Every client becomes a DHCP server"
        },
        correctAnswer: "B"
    },

    {
        id: 2,
        question:
            "A device must connect two different IP networks and make forwarding decisions using logical addresses. Which device is designed for this role?",
        options: {
            A: "Hub",
            B: "Repeater",
            C: "Router",
            D: "NIC"
        },
        correctAnswer: "C"
    },

    {
        id: 3,
        question:
            "Data is received at the destination and must be processed upward through the OSI model. Which direction describes this process?",
        options: {
            A: "Physical to Application",
            B: "Application to Physical",
            C: "Network to Physical only",
            D: "Data Link to Session only"
        },
        correctAnswer: "A"
    },

    {
        id: 4,
        question:
            "A host is sending data to another device on the same local network. Which network configuration is generally not required for that local delivery?",
        options: {
            A: "Source IP address",
            B: "Destination IP address",
            C: "Default gateway",
            D: "Network interface"
        },
        correctAnswer: "C"
    },

    {
        id: 5,
        question:
            "A network contains several routers and its topology changes from time to time. Which routing approach is better suited to automatically adapt to those changes?",
        options: {
            A: "Only static routing",
            B: "Only default routing",
            C: "Only MAC learning",
            D: "Dynamic routing"
        },
        correctAnswer: "D"
    },

    {
        id: 6,
        question:
            "DNS flow: Resolver → Root Server → TLD Server → Authoritative Server. What information does the root server normally provide to the resolver?",
        options: {
            A: "The final IP address of the host",
            B: "The address of the appropriate TLD server",
            C: "The browser's MAC address",
            D: "The client's DHCP lease"
        },
        correctAnswer: "B"
    },

    {
        id: 7,
        question:
            "A service uses the same destination name while allowing a request to be directed to an appropriate nearby instance of that service. Which delivery method matches this concept?",
        options: {
            A: "Multicast",
            B: "Broadcast",
            C: "Anycast",
            D: "Simplex"
        },
        correctAnswer: "C"
    },

    {
        id: 8,
        question:
            "A load balancer checks whether connected servers are still capable of serving requests before continuing to direct traffic toward them. What is this function called?",
        options: {
            A: "Health checking",
            B: "MAC learning",
            C: "Frame flooding",
            D: "ARP resolution"
        },
        correctAnswer: "A"
    },

    {
        id: 9,
        question:
            "Two applications exchange the same information, but the data must be represented in a suitable form before the receiving application can use it. Which OSI layer is primarily associated with this responsibility?",
        options: {
            A: "Transport",
            B: "Data Link",
            C: "Presentation",
            D: "Physical"
        },
        correctAnswer: "C"
    },

    {
        id: 10,
        question:
            "A home network uses private IPv4 addresses internally, while the router allows the devices to communicate with the public Internet. Which mechanism is commonly associated with this arrangement?",
        options: {
            A: "VLAN",
            B: "NAT",
            C: "STP",
            D: "MAC learning"
        },
        correctAnswer: "B"
    },

    {
        id: 11,
        question:
            "A static route points to a path that was manually configured. Later, the network topology changes and the path is no longer suitable. What is a characteristic of static routing in this situation?",
        options: {
            A: "The route automatically changes through neighbor advertisements",
            B: "The route automatically becomes a RIP route",
            C: "The route must be manually updated",
            D: "The route is converted into a VLAN"
        },
        correctAnswer: "C"
    },

    {
        id: 12,
        question:
            "An IMAP user opens a mailbox containing many messages. The client initially receives message information and only later retrieves the full content of a selected email. Which feature is being used?",
        options: {
            A: "Continuous broadcast",
            B: "Selective email retrieval",
            C: "Circuit switching",
            D: "Static address assignment"
        },
        correctAnswer: "B"
    },

    {
        id: 13,
        question:
            "A network link allows a device to send and receive information at the same time. Which communication mode describes this behavior?",
        options: {
            A: "Simplex",
            B: "Half-duplex",
            C: "Full-duplex",
            D: "Broadcast"
        },
        correctAnswer: "C"
    },

    {
        id: 14,
        question:
            "A laptop without a physical Ethernet connection needs wireless access to the local network. Which device can provide the wireless connectivity described in the module?",
        options: {
            A: "Access Point",
            B: "Bridge only",
            C: "Repeater only",
            D: "Firewall only"
        },
        correctAnswer: "A"
    },

    {
        id: 15,
        question:
            "A network-layer packet is passed to the Data Link layer before physical transmission. What is the resulting PDU at the Data Link layer?",
        options: {
            A: "Segment",
            B: "Frame",
            C: "Bits",
            D: "Data"
        },
        correctAnswer: "B"
    },

    {
        id: 16,
        question:
            "A workstation receives its IP address automatically. Along with the IP address, DHCP can also provide which pair of settings?",
        options: {
            A: "MAC address and switch port",
            B: "CPU speed and memory size",
            C: "Router ID and Router Priority",
            D: "Default gateway and DNS server"
        },
        correctAnswer: "D"
    },

    {
        id: 17,
        question:
            "Two switches are connected by a trunk link and need to carry traffic belonging to multiple VLANs. What does the trunk provide that an access port normally does not?",
        options: {
            A: "The ability to carry multiple VLANs across the link",
            B: "A replacement for the routing table",
            C: "Automatic assignment of host IP addresses",
            D: "A separate MAC address for every VLAN"
        },
        correctAnswer: "A"
    },

    {
        id: 18,
        question:
            "A TCP connection has been established and the client has finished sending its data. Which message begins the connection-termination process from the client side?",
        options: {
            A: "SYN",
            B: "ACK",
            C: "FIN",
            D: "DATA"
        },
        correctAnswer: "C"
    },

    {
        id: 19,
        question:
            "A network link has high theoretical bandwidth, but an application still experiences slower-than-expected data transfer because actual delivered data is lower than the available capacity. Which measure describes the actual successful data delivery?",
        options: {
            A: "Throughput",
            B: "Latency",
            C: "Jitter",
            D: "Duplex"
        },
        correctAnswer: "A"
    },

    {
        id: 20,
        question:
            "A firewall examines both the current packet and the state of an existing connection before deciding whether the traffic should be allowed. Which feature is being used?",
        options: {
            A: "Stateless forwarding",
            B: "Stateful inspection",
            C: "MAC aging",
            D: "Packet switching"
        },
        correctAnswer: "B"
    },

    {
        id: 21,
        question:
            "Which protocol-to-layer combination is correct according to the NetLearn protocol mapping?",
        options: {
            A: "TCP — Network Layer",
            B: "DNS — Physical Layer",
            C: "RIP — Network Layer",
            D: "PPP — Application Layer"
        },
        correctAnswer: "C"
    },

    {
        id: 22,
        question:
            "An organization wants a traditional IPv4 address range intended for multicast communication rather than normal host addressing. Which class corresponds to that use?",
        options: {
            A: "Class A",
            B: "Class B",
            C: "Class C",
            D: "Class D"
        },
        correctAnswer: "D"
    },

    {
        id: 23,
        question:
            "A switch has an old MAC address entry that has not been refreshed for a period of time. What process allows stale information to be removed from the MAC table?",
        options: {
            A: "MAC aging",
            B: "Route convergence",
            C: "DHCP renewal",
            D: "DNS caching"
        },
        correctAnswer: "A"
    },

    {
        id: 24,
        question:
            "An SNMP Agent detects an important event and wants to notify the Manager using a notification that requires acknowledgement. Which message should it use?",
        options: {
            A: "InformRequest",
            B: "GetRequest",
            C: "SetRequest",
            D: "GetNextRequest"
        },
        correctAnswer: "A"
    },

    {
        id: 25,
        question:
            "During a live audio application, packets are occasionally missing from the communication. Which network condition is most directly responsible for the missing packets?",
        options: {
            A: "Jitter",
            B: "Packet loss",
            C: "Bandwidth",
            D: "Full-duplex communication"
        },
        correctAnswer: "B"
    },

    {
        id: 26,
        question:
            "A signal becomes weak after traveling a long distance through a network medium. Which device can regenerate the signal so the transmission can continue farther?",
        options: {
            A: "Router",
            B: "Firewall",
            C: "Gateway",
            D: "Repeater"
        },
        correctAnswer: "D"
    },

    {
        id: 27,
        question:
            "A network problem affects the actual transmission of electrical, optical, or radio signals rather than addressing or routing. Which OSI layer should be investigated first?",
        options: {
            A: "Application",
            B: "Transport",
            C: "Physical",
            D: "Session"
        },
        correctAnswer: "C"
    },

    {
        id: 28,
        question:
            "A network administrator wants to represent an IPv4 address using a prefix length that specifies how many bits belong to the network portion. Which concept is being used?",
        options: {
            A: "CIDR",
            B: "NAT",
            C: "ARP",
            D: "Anycast"
        },
        correctAnswer: "A"
    },

    {
        id: 29,
        question:
            "A routing domain needs routers to maintain information about network topology and calculate paths using the SPF algorithm. Which protocol best fits this requirement?",
        options: {
            A: "RIP",
            B: "OSPF",
            C: "POP3",
            D: "SMTP"
        },
        correctAnswer: "B"
    },

    {
        id: 30,
        question:
            "During a TLS connection, the client and server complete the key-exchange process and then compute a common key for protecting the session. What is this key used for?",
        options: {
            A: "Selecting the DNS server",
            B: "Assigning VLAN membership",
            C: "Symmetric encryption of the session data",
            D: "Determining the router's IP address"
        },
        correctAnswer: "C"
    },

    {
        id: 31,
        question:
            "A network carries many independent data transfers that share network resources instead of reserving one complete communication path for each transfer. Which switching method best matches this description?",
        options: {
            A: "Circuit switching",
            B: "Packet switching",
            C: "Simplex switching",
            D: "Analog switching"
        },
        correctAnswer: "B"
    },

    {
        id: 32,
        question:
            "A proxy server is positioned between clients and external services to handle requests on behalf of the clients. Which role does this describe?",
        options: {
            A: "Client-side intermediary",
            B: "Physical signal regenerator",
            C: "Wireless access device",
            D: "MAC learning engine"
        },
        correctAnswer: "A"
    },

    {
        id: 33,
        question:
            "Which statement correctly compares the OSI and TCP/IP models?",
        options: {
            A: "Both models always use exactly seven layers",
            B: "TCP/IP separates Presentation and Session into their own independent layers",
            C: "OSI combines all lower layers into one physical layer",
            D: "TCP/IP commonly combines OSI Application, Presentation, and Session functions into its Application layer"
        },
        correctAnswer: "D"
    },

    {
        id: 34,
        question:
            "A printer should always use the same IP address, even after reboots, and the administrator does not want it to depend on automatic address assignment. Which approach best matches this requirement?",
        options: {
            A: "Static assignment",
            B: "Dynamic assignment",
            C: "Multicast assignment",
            D: "Broadcast assignment"
        },
        correctAnswer: "A"
    },

    {
        id: 35,
        question:
            "A switch receives an Ethernet frame and does not know the destination MAC address. Later, it receives a broadcast frame. What forwarding behavior is common to both situations?",
        options: {
            A: "Both are discarded immediately",
            B: "Both are forwarded only to the incoming port",
            C: "Both can be flooded within the appropriate VLAN",
            D: "Both are sent directly to the router"
        },
        correctAnswer: "C"
    },

    {
        id: 36,
        question:
            "An FTP client must transfer an image file as raw bytes without modification. Which transfer mode is appropriate?",
        options: {
            A: "ASCII mode",
            B: "EBCDIC mode",
            C: "Image (Binary) mode",
            D: "Text-only mode"
        },
        correctAnswer: "C"
    },

    {
        id: 37,
        question:
            "A PPP connection has already established its link parameters using LCP. What does the appropriate NCP then do?",
        options: {
            A: "Discover the remote DNS root server",
            B: "Configure the required network-layer protocol",
            C: "Choose the Ethernet destination MAC",
            D: "Create a Wi-Fi frequency band"
        },
        correctAnswer: "B"
    },

    {
        id: 38,
        question:
            "A user wants a Wi-Fi band that generally offers higher speeds and less interference than 2.4 GHz, while accepting a shorter range. Which band best matches this requirement?",
        options: {
            A: "2.4 GHz",
            B: "5 GHz",
            C: "Only 6 GHz in every situation",
            D: "Telephone copper band"
        },
        correctAnswer: "B"
    },

    {
        id: 39,
        question:
            "Three switches are connected with redundant links. A broadcast frame begins traveling through the LAN and multiple paths are available. Which protocol prevents continuous Layer 2 loops by controlling forwarding and blocking unnecessary paths?",
        options: {
            A: "STP",
            B: "RIP",
            C: "IMAP",
            D: "DHCP"
        },
        correctAnswer: "A"
    },

    {
        id: 40,
        question:
            "During a traceroute-style diagnostic, a packet's TTL reaches zero at a router and the router discards the packet. Which ICMP message can be sent back to the source?",
        options: {
            A: "Echo Reply",
            B: "Time Exceeded",
            C: "Redirect",
            D: "Address Resolution Reply"
        },
        correctAnswer: "B"
    }

];

export default grandTestData;