const fundamentalsData = [
    {
        id: 1,
        title: "Why Networks Matter",
        diagram: "network",
        explanation:
            "A computer network is a group of connected devices that can communicate and share data and resources. Networks are important because they allow computers, phones, servers, printers, and many other devices to work together.",
        sections: [
            {
                title: "What Is a Network?",
                points: [
                    "A network is a connection between two or more devices that allows them to communicate.",
                    "A device connected to a network is commonly called a node.",
                    "A node is any device that can send, receive, or process data on a network.",
                    "A computer, smartphone, printer, router, switch, and server can all act as network devices.",
                    "A network can be very small, such as two computers connected together, or extremely large, such as the Internet."
                ]
            },
            {
                title: "Why Networks Are Important",
                points: [
                    "Networks allow users to send information from one device to another.",
                    "Networks allow devices to share resources such as printers, storage, applications, and Internet connections.",
                    "Networks allow people to communicate using email, messaging, voice calls, and video calls.",
                    "Networks allow organizations to store and access information from shared servers.",
                    "Networks allow computers in different locations to work together.",
                    "Networks make services such as online banking, online shopping, cloud computing, and streaming possible."
                ]
            },
            {
                title: "Common Network Devices",
                points: [
                    "A router connects different networks and forwards data between them.",
                    "A switch connects devices within a local network and forwards data to the appropriate device.",
                    "A server is a computer that provides services or resources to other computers called clients.",
                    "A client is a device or application that requests a service from another system.",
                    "A network interface connects a device to a network."
                ]
            },
            {
                title: "Real-World Examples",
                points: [
                    "A college network connects computers, printers, servers, Wi-Fi access points, and other devices.",
                    "A bank uses networks to connect branches, ATMs, servers, and banking applications.",
                    "A hospital uses networks to connect computers, medical systems, databases, and communication devices.",
                    "A home network can connect phones, laptops, smart televisions, printers, and other devices.",
                    "The Internet connects networks across countries and continents."
                ]
            },
            {
                title: "Key Points",
                points: [
                    "Networks make communication and resource sharing possible.",
                    "A node is a device or endpoint that participates in network communication.",
                    "Routers connect networks, while switches commonly connect devices within a local network.",
                    "The Internet is a huge collection of interconnected networks."
                ]
            }
        ],
        terms: [
            ["Node", "A node is a device or endpoint that participates in network communication."],
            ["Router", "A router connects different networks and forwards data between them."],
            ["Switch", "A switch connects devices in a local network and forwards data to the correct device."],
            ["Server", "A server provides services or resources to other devices."],
            ["Client", "A client requests services or resources from another system."],
            ["Resource", "A resource is something shared through a network, such as a printer, file, application, or Internet connection."]
        ],
        example:
            "When your laptop connects to your home Wi-Fi and opens a website, your laptop communicates through the home router and the Internet to reach the web server."
    },
    {
        id: 2,
        title: "How Data Communication Works",
        diagram: "communication",
        explanation:
            "Data communication is the process of transferring information from one device to another through a communication medium.",
        sections: [
            {
                title: "Main Parts",
                points: [
                    "The sender is the device that starts the communication and sends the information.",
                    "The receiver is the device that receives the information.",
                    "The message is the actual information being transferred.",
                    "The medium is the path through which the information travels.",
                    "A protocol provides rules that allow the sender and receiver to understand each other."
                ]
            },
            {
                title: "How Communication Happens",
                points: [
                    "The sender creates the information that needs to be transmitted.",
                    "The information is converted into a suitable form for transmission.",
                    "The converted information travels through a wired or wireless medium.",
                    "The receiver receives the transmitted signal.",
                    "The receiver converts the signal back into usable information.",
                    "The receiver processes the information according to the required protocol."
                ]
            },
            {
                title: "Types of Medium",
                points: [
                    "Copper cable carries signals using electrical transmission.",
                    "Fiber-optic cable carries information using light signals.",
                    "Wireless communication uses electromagnetic signals through the air."
                ]
            },
            {
                title: "Key Points",
                points: [
                    "Communication requires a sender and a receiver.",
                    "The message contains the information being transferred.",
                    "The medium provides the path for transmission.",
                    "Protocols provide rules for successful communication."
                ]
            }
        ],
        terms: [
            ["Sender", "The sender is the device that starts communication."],
            ["Receiver", "The receiver is the device that receives the transmitted information."],
            ["Message", "A message is the information being transferred."],
            ["Medium", "A medium is the physical or wireless path used to carry data."],
            ["Protocol", "A protocol is a set of rules that controls communication between devices."],
            ["Signal", "A signal is a physical representation used to carry information."]
        ],
        example:
            "When you send a message from your phone, your phone acts as the sender, the other phone acts as the receiver, the text is the message, and the wireless network provides the communication medium."
    },
    {
        id: 3,
        title: "Analog and Digital Signals",
        diagram: "signals",
        explanation:
            "A signal carries information from one place to another. Analog signals change continuously, while digital signals use separate values to represent information.",
        sections: [
            {
                title: "Analog Signal",
                points: [
                    "An analog signal changes continuously over time.",
                    "An analog signal can have many values between its minimum and maximum levels.",
                    "Traditional audio and some radio systems use analog signals.",
                    "Noise can change an analog signal and affect the information it carries."
                ]
            },
            {
                title: "Digital Signal",
                points: [
                    "A digital signal uses separate or discrete values.",
                    "Computers commonly represent digital information using binary values such as 0 and 1.",
                    "Digital signals are easier for computers to store and process.",
                    "Digital communication can use techniques that help detect or correct errors."
                ]
            },
            {
                title: "Main Difference",
                points: [
                    "An analog signal changes continuously, while a digital signal changes between defined levels.",
                    "Analog signals are commonly represented as smooth waves.",
                    "Digital signals are commonly represented using pulses or levels.",
                    "Modern computer networks mainly use digital information."
                ]
            }
        ],
        terms: [
            ["Signal", "A signal is a physical form used to carry information."],
            ["Analog", "Analog means continuously changing values."],
            ["Digital", "Digital means information represented using separate values."],
            ["Binary", "Binary is a number system that uses only 0 and 1."],
            ["Noise", "Noise is unwanted interference that can affect a signal."]
        ],
        example:
            "A microphone can convert your voice into an electrical signal. A computer can then convert that information into digital data for processing and transmission."
    },
    {
        id: 4,
        title: "Bits, Bytes and Data Sizes",
        diagram: "dataunits",
        explanation:
            "Computers store and process information using digital data. Bits and bytes are basic units used to describe the amount of digital information.",
        sections: [
            {
                title: "Bit",
                points: [
                    "A bit is the smallest basic unit of digital information.",
                    "A bit can have a value of 0 or 1.",
                    "The word bit comes from binary digit."
                ]
            },
            {
                title: "Byte",
                points: [
                    "A byte contains 8 bits.",
                    "A byte can represent 256 different combinations of eight binary bits.",
                    "Bytes are commonly used to describe file and storage sizes."
                ]
            },
            {
                title: "Larger Data Units",
                points: [
                    "A kilobyte is a larger unit of digital data commonly abbreviated as KB.",
                    "A megabyte is commonly abbreviated as MB and is larger than a kilobyte.",
                    "A gigabyte is commonly abbreviated as GB and is larger than a megabyte.",
                    "A terabyte is commonly abbreviated as TB and is larger than a gigabyte.",
                    "In networking, speeds are commonly expressed in bits per second.",
                    "Storage capacity is commonly expressed in bytes."
                ]
            },
            {
                title: "Key Points",
                points: [
                    "8 bits make 1 byte.",
                    "A lowercase b commonly represents bits, while an uppercase B commonly represents bytes.",
                    "A speed of 100 Mbps means 100 megabits per second.",
                    "A file size of 100 MB means 100 megabytes."
                ]
            }
        ],
        terms: [
            ["Bit", "A bit is a binary digit with a value of 0 or 1."],
            ["Byte", "A byte contains 8 bits."],
            ["KB", "KB means kilobyte and is used to describe a quantity of digital data."],
            ["MB", "MB means megabyte and represents a larger amount of data than a kilobyte."],
            ["GB", "GB means gigabyte and represents a larger amount of data than a megabyte."],
            ["Mbps", "Mbps means megabits per second and is commonly used to describe network speed."]
        ],
        example:
            "A photo might have a file size of 5 MB, while your Internet connection might have a speed of 100 Mbps."
    },
    {
        id: 5,
        title: "Bandwidth, Throughput and Latency",
        diagram: "performance",
        explanation:
            "Bandwidth, throughput, and latency describe different parts of network performance. They should not be treated as the same measurement.",
        sections: [
            {
                title: "Bandwidth",
                points: [
                    "Bandwidth represents the maximum data-carrying capacity of a network connection.",
                    "Higher bandwidth means the connection can potentially carry more data at the same time.",
                    "Bandwidth is commonly measured in bits per second."
                ]
            },
            {
                title: "Throughput",
                points: [
                    "Throughput is the actual amount of data successfully transferred through a network.",
                    "Throughput is often lower than the available bandwidth.",
                    "Network congestion, interference, device limitations, and protocol overhead can reduce throughput."
                ]
            },
            {
                title: "Latency",
                points: [
                    "Latency is the time taken for data to travel from one point to another.",
                    "Lower latency means a faster response between communicating devices.",
                    "High latency can make online games, calls, and interactive applications feel slow."
                ]
            },
            {
                title: "Key Points",
                points: [
                    "Bandwidth describes capacity.",
                    "Throughput describes actual successful data transfer.",
                    "Latency describes delay.",
                    "A network can have high bandwidth and still have high latency."
                ]
            }
        ],
        terms: [
            ["Bandwidth", "Bandwidth is the maximum data-carrying capacity of a connection."],
            ["Throughput", "Throughput is the actual amount of data successfully transferred."],
            ["Latency", "Latency is the time taken for data to travel between two points."],
            ["Congestion", "Congestion occurs when too much traffic competes for available network resources."],
            ["Protocol Overhead", "Protocol overhead is extra information added by communication protocols to control transmission."]
        ],
        example:
            "A road can represent bandwidth because a wider road can carry more vehicles. Throughput is similar to the number of vehicles that actually reach the destination, while latency is similar to the travel time."
    },
    {
        id: 6,
        title: "Simplex, Half-Duplex and Full-Duplex",
        diagram: "duplex",
        explanation:
            "Communication direction describes how data can travel between two devices.",
        sections: [
            {
                title: "Simplex",
                points: [
                    "Simplex communication allows data to travel in only one direction.",
                    "The receiver does not send data back through the same communication process.",
                    "Simplex communication is useful when information only needs to move from sender to receiver."
                ]
            },
            {
                title: "Half-Duplex",
                points: [
                    "Half-duplex communication allows communication in both directions.",
                    "Only one device can transmit at a time.",
                    "The devices take turns sending information.",
                    "Walkie-talkies are a common example of half-duplex communication."
                ]
            },
            {
                title: "Full-Duplex",
                points: [
                    "Full-duplex communication allows both devices to transmit at the same time.",
                    "Both devices can send and receive information simultaneously.",
                    "Telephone conversations commonly use full-duplex communication."
                ]
            },
            {
                title: "Key Difference",
                points: [
                    "Simplex allows one-way communication.",
                    "Half-duplex allows two-way communication but only one direction at a time.",
                    "Full-duplex allows two-way communication at the same time."
                ]
            }
        ],
        terms: [
            ["Simplex", "Simplex is communication in only one direction."],
            ["Half-Duplex", "Half-duplex allows both directions but not at the same time."],
            ["Full-Duplex", "Full-duplex allows both directions at the same time."],
            ["Transmission", "Transmission is the process of sending data from one point to another."]
        ],
        example:
            "A television broadcast is similar to simplex communication, a walkie-talkie is similar to half-duplex communication, and a telephone call is similar to full-duplex communication."
    },
    {
        id: 7,
        title: "Circuit and Packet Switching",
        diagram: "switching",
        explanation:
            "Switching determines how data travels between communicating devices. Circuit switching reserves a path, while packet switching divides data into packets and uses shared network resources.",
        sections: [
            {
                title: "Circuit Switching",
                points: [
                    "Circuit switching creates a dedicated communication path before communication begins.",
                    "The path remains reserved for the communication session.",
                    "The reserved path provides predictable communication during the session.",
                    "Traditional telephone networks are an example of circuit switching."
                ]
            },
            {
                title: "Packet Switching",
                points: [
                    "Packet switching divides data into smaller units called packets.",
                    "Each packet contains information needed to help deliver it to the destination.",
                    "Packets can share network links with packets from other communications.",
                    "Different packets can sometimes travel through different network paths.",
                    "The Internet primarily uses packet switching."
                ]
            },
            {
                title: "Comparison",
                points: [
                    "Circuit switching reserves a dedicated path, while packet switching shares network resources.",
                    "Circuit switching is suitable for communication that requires a reserved connection.",
                    "Packet switching makes efficient use of shared network resources."
                ]
            }
        ],
        terms: [
            ["Switching", "Switching is the process of selecting or managing paths for data communication."],
            ["Circuit", "A circuit is a communication path established between endpoints."],
            ["Packet", "A packet is a small unit of data prepared for transmission across a packet-switched network."],
            ["Path", "A path is the route through which data travels from source to destination."]
        ],
        example:
            "A traditional telephone call is similar to reserving one private road for the entire journey, while Internet communication is similar to sending many small vehicles through shared roads."
    },
    {
        id: 8,
        title: "Unicast, Multicast, Broadcast and Anycast",
        diagram: "delivery",
        explanation:
            "Data can be delivered to one destination, a selected group, all applicable devices, or one suitable destination from a group.",
        sections: [
            {
                title: "Unicast",
                points: [
                    "Unicast sends data from one sender to one specific receiver.",
                    "Only the intended receiver normally receives the transmission.",
                    "Most direct client-to-server communication can use unicast."
                ]
            },
            {
                title: "Multicast",
                points: [
                    "Multicast sends data from one sender to a selected group of receivers.",
                    "Only devices that belong to the intended multicast group receive the transmission.",
                    "Multicast can reduce unnecessary duplicate traffic when the same information is needed by a group."
                ]
            },
            {
                title: "Broadcast",
                points: [
                    "Broadcast sends data from one sender to all applicable devices in a broadcast domain.",
                    "Broadcast can be useful when the sender does not know which device should respond.",
                    "Broadcast traffic should be controlled because every applicable device processes the transmission."
                ]
            },
            {
                title: "Anycast",
                points: [
                    "Anycast sends data to one suitable destination from a group of possible destinations.",
                    "The network selects a suitable destination according to routing information.",
                    "Anycast is useful when multiple servers provide the same service."
                ]
            }
        ],
        terms: [
            ["Unicast", "One sender communicates with one receiver."],
            ["Multicast", "One sender communicates with a selected group of receivers."],
            ["Broadcast", "One sender communicates with all applicable devices."],
            ["Anycast", "One sender communicates with one suitable destination from a group."],
            ["Broadcast Domain", "A broadcast domain is the set of devices that can receive a particular broadcast."]
        ],
        example:
            "Sending a file to one computer is unicast, sending a live stream to a selected group can use multicast, announcing information to every device in a local network can use broadcast, and reaching one nearby server from several identical servers can use anycast."
    },
    {
        id: 9,
        title: "PAN, LAN, MAN and WAN",
        diagram: "networktypes",
        explanation:
            "Networks can be classified according to the geographical area they cover.",
        sections: [
            {
                title: "PAN",
                points: [
                    "PAN stands for Personal Area Network.",
                    "A PAN covers a very small area around an individual.",
                    "Bluetooth connections between personal devices are common examples."
                ]
            },
            {
                title: "LAN",
                points: [
                    "LAN stands for Local Area Network.",
                    "A LAN normally covers a limited area such as a home, office, laboratory, or college building.",
                    "LANs commonly provide high-speed communication between nearby devices."
                ]
            },
            {
                title: "MAN",
                points: [
                    "MAN stands for Metropolitan Area Network.",
                    "A MAN can connect multiple networks across a city or metropolitan area.",
                    "A MAN is generally larger than a LAN and smaller than a WAN."
                ]
            },
            {
                title: "WAN",
                points: [
                    "WAN stands for Wide Area Network.",
                    "A WAN connects networks across large geographical areas.",
                    "WANs can connect cities, countries, and continents.",
                    "The Internet is an example of a huge interconnected network."
                ]
            }
        ],
        terms: [
            ["PAN", "A Personal Area Network covers a small area around an individual."],
            ["LAN", "A Local Area Network covers a limited local area."],
            ["MAN", "A Metropolitan Area Network connects networks across a city or metropolitan area."],
            ["WAN", "A Wide Area Network connects networks across large geographical distances."],
            ["Geographical Area", "Geographical area refers to the physical region covered by a network."]
        ],
        example:
            "Bluetooth between a phone and wireless earbuds is a PAN, a college computer lab is a LAN, a city-wide network can be a MAN, and a network connecting offices across countries can be a WAN."
    },
    {
        id: 10,
        title: "Network Topologies",
        diagram: "topologies",
        explanation:
            "Network topology describes how devices and communication links are arranged in a network.",
        sections: [
            {
                title: "Star Topology",
                points: [
                    "A star topology connects each device to a central device.",
                    "The central device is commonly a switch or hub.",
                    "If one individual cable fails, the other devices can normally continue communicating.",
                    "If the central device fails, many connected devices can lose communication."
                ]
            },
            {
                title: "Bus Topology",
                points: [
                    "A bus topology connects devices to one shared communication line.",
                    "The main communication line is commonly called the backbone.",
                    "All connected devices share the communication medium.",
                    "A failure in the main communication line can affect the entire network."
                ]
            },
            {
                title: "Ring Topology",
                points: [
                    "A ring topology connects devices in a circular arrangement.",
                    "Each device is connected to other devices around the ring.",
                    "Data travels around the ring according to the communication method being used."
                ]
            },
            {
                title: "Mesh Topology",
                points: [
                    "A mesh topology provides multiple connections between devices.",
                    "A full mesh connects every device directly to every other device.",
                    "Multiple paths can improve network reliability.",
                    "Mesh networks can require more cables, ports, and configuration."
                ]
            },
            {
                title: "Hybrid Topology",
                points: [
                    "A hybrid topology combines two or more different topology types.",
                    "Hybrid designs can be created to satisfy specific network requirements.",
                    "Large networks often use combinations of different topology structures."
                ]
            }
        ],
        terms: [
            ["Topology", "Topology is the arrangement of devices and communication links in a network."],
            ["Hub", "A hub is a basic network device that sends received data to all connected ports."],
            ["Backbone", "A backbone is a main communication path that carries traffic between network sections."],
            ["Mesh", "A mesh is a topology in which devices have multiple communication connections."]
        ],
        example:
            "A college network may use a star arrangement where computers connect to switches, while the switches connect to routers and other network devices."
    },
    {
        id: 11,
        title: "Client-Server and Peer-to-Peer",
        diagram: "architecture",
        explanation:
            "Network architecture describes how devices and services are organized and how responsibilities are distributed.",
        sections: [
            {
                title: "Client-Server",
                points: [
                    "A client-server network uses dedicated servers to provide services or resources.",
                    "A client sends a request to a server when it needs a service.",
                    "The server processes the request and sends a response.",
                    "Centralized management makes it easier to control users, data, and resources.",
                    "Client-server architecture is commonly used in businesses and web applications."
                ]
            },
            {
                title: "Peer-to-Peer",
                points: [
                    "A peer-to-peer network allows participating devices to communicate directly.",
                    "Each peer can request resources from other peers.",
                    "A peer can also provide resources to other peers.",
                    "Peer-to-peer networks can work without a dedicated central server for every service."
                ]
            },
            {
                title: "Comparison",
                points: [
                    "Client-server architecture centralizes important services on servers.",
                    "Peer-to-peer architecture distributes responsibilities among participating devices.",
                    "Client-server architecture is generally easier to manage for larger organizations.",
                    "Peer-to-peer architecture can be simple for small networks."
                ]
            }
        ],
        terms: [
            ["Client", "A client is a device or application that requests a service."],
            ["Server", "A server is a system that provides a service or resource."],
            ["Peer", "A peer is a participating device that can request and provide resources."],
            ["Request", "A request is a message asking another system to perform an operation or provide information."],
            ["Response", "A response is the information returned after processing a request."]
        ],
        example:
            "When a browser asks a web server for a webpage, the browser acts as the client and the web server acts as the server."
    },
    {
        id: 12,
        title: "What Are Network Protocols?",
        diagram: "protocol",
        explanation:
            "A network protocol is a set of rules that defines how devices communicate and understand exchanged information.",
        sections: [
            {
                title: "Why Protocols Are Needed",
                points: [
                    "Protocols allow devices from different manufacturers to communicate using common rules.",
                    "Protocols define how information should be formatted.",
                    "Protocols can define how devices identify each other.",
                    "Protocols can define when data should be sent and how responses should be handled.",
                    "Protocols can define how communication errors are detected or handled."
                ]
            },
            {
                title: "Common Protocols",
                points: [
                    "HTTP is a protocol used for communication between web clients and web servers.",
                    "HTTPS is HTTP communication protected using encryption through TLS.",
                    "TCP provides reliable, ordered delivery of data between applications.",
                    "IP provides addressing and routing functions for network communication.",
                    "DNS translates domain names into IP addresses."
                ]
            },
            {
                title: "Key Points",
                points: [
                    "Protocols act like agreed communication rules.",
                    "Different protocols perform different networking functions.",
                    "Multiple protocols can work together during one communication session."
                ]
            }
        ],
        terms: [
            ["Protocol", "A protocol is a set of rules used for communication."],
            ["HTTP", "HTTP is a protocol used to transfer web resources between clients and servers."],
            ["HTTPS", "HTTPS is HTTP protected using TLS encryption."],
            ["TCP", "TCP provides reliable and ordered transport of data."],
            ["IP", "IP provides addressing and packet forwarding across networks."],
            ["DNS", "DNS translates human-readable domain names into IP addresses."],
            ["TLS", "TLS is a security protocol that protects communication using encryption."]
        ],
        example:
            "When you open a website, your browser can use DNS to find the server address, TCP to provide reliable transport, IP to move packets across networks, and HTTPS to protect the web communication."
    },
    {
        id: 13,
        title: "Encapsulation and De-encapsulation",
        diagram: "encapsulation",
        explanation:
            "Encapsulation is the process of adding control information to data as it moves through networking layers. De-encapsulation is the reverse process at the receiving device.",
        sections: [
            {
                title: "Encapsulation",
                points: [
                    "Application data starts at the application layer.",
                    "The transport layer adds transport information around the application data.",
                    "The network layer adds information used for network delivery.",
                    "The data link layer adds information needed for local network delivery.",
                    "The physical layer converts the resulting information into signals or bits for transmission."
                ]
            },
            {
                title: "De-encapsulation",
                points: [
                    "The receiving device first receives the transmitted bits.",
                    "The data link layer processes the local network information.",
                    "The network layer processes network addressing information.",
                    "The transport layer processes transport information.",
                    "The application finally receives the original data."
                ]
            },
            {
                title: "Important Terms",
                points: [
                    "A header is control information placed before data.",
                    "A trailer is control information placed after data.",
                    "A segment is commonly the transport-layer data unit when TCP is used.",
                    "A packet is commonly the network-layer data unit.",
                    "A frame is commonly the data-link-layer data unit.",
                    "Bits are the binary values transmitted through the physical medium."
                ]
            }
        ],
        terms: [
            ["Encapsulation", "Encapsulation is adding layer-specific information to data before transmission."],
            ["De-encapsulation", "De-encapsulation is removing and processing layer-specific information at the receiver."],
            ["Header", "A header contains control information added before data."],
            ["Trailer", "A trailer contains control information added after data."],
            ["Segment", "A segment is a transport-layer data unit, commonly associated with TCP."],
            ["Packet", "A packet is a network-layer data unit."],
            ["Frame", "A frame is a data-link-layer data unit."],
            ["Bits", "Bits are binary values used to represent and transmit digital information."]
        ],
        example:
            "When you send a message, networking layers add information around the message before transmission. The receiving device removes and processes that information layer by layer."
    },
    {
        id: 14,
        title: "Why Network Addresses Matter",
        diagram: "addressing",
        explanation:
            "Network addresses help identify devices and destinations so that data can be delivered to the correct location.",
        sections: [
            {
                title: "Why Devices Need Addresses",
                points: [
                    "A network needs a way to identify where information comes from and where it should go.",
                    "Addresses help network devices make forwarding and delivery decisions.",
                    "Different layers of networking use different types of addresses."
                ]
            },
            {
                title: "MAC Address",
                points: [
                    "A MAC address is an address associated with a network interface.",
                    "MAC addresses are commonly used for communication within a local network.",
                    "A network interface is the hardware or logical component that connects a device to a network."
                ]
            },
            {
                title: "IP Address",
                points: [
                    "An IP address identifies a network interface for communication using the Internet Protocol.",
                    "IP addresses allow routers to determine where packets should be forwarded.",
                    "IPv4 uses 32-bit addresses, while IPv6 uses 128-bit addresses."
                ]
            },
            {
                title: "Key Points",
                points: [
                    "MAC and IP addresses serve different networking purposes.",
                    "A router uses IP addressing to make forwarding decisions between networks.",
                    "A switch commonly uses MAC addresses when forwarding frames within a local network."
                ]
            }
        ],
        terms: [
            ["Address", "An address is an identifier used to identify a communication endpoint or destination."],
            ["MAC Address", "A MAC address identifies a network interface at the data-link level."],
            ["IP Address", "An IP address identifies a network interface for IP communication."],
            ["Network Interface", "A network interface is the component that allows a device to communicate over a network."],
            ["IPv4", "IPv4 is a version of IP that uses 32-bit addresses."],
            ["IPv6", "IPv6 is a version of IP that uses 128-bit addresses."],
            ["Forwarding", "Forwarding is the process of sending data toward its destination."]
        ],
        example:
            "When a computer sends data to another computer on the Internet, IP addressing helps routers determine where the data should go."
    },
    {
        id: 15,
        title: "Wired and Wireless Transmission",
        diagram: "media",
        explanation:
            "Transmission media provide the path through which network signals travel. Media can be physical cables or wireless communication through space.",
        sections: [
            {
                title: "Wired Media",
                points: [
                    "Wired communication uses a physical cable between communicating devices.",
                    "Copper cables transmit information using electrical signals.",
                    "Fiber-optic cables transmit information using light.",
                    "Wired connections can provide high speed and stable communication."
                ]
            },
            {
                title: "Wireless Media",
                points: [
                    "Wireless communication sends information without requiring a physical cable between devices.",
                    "Wireless communication uses electromagnetic signals.",
                    "Wi-Fi is a common wireless networking technology.",
                    "Wireless networks provide mobility because devices do not need to remain physically connected by cable."
                ]
            },
            {
                title: "Comparison",
                points: [
                    "Wired connections generally provide a physical and stable transmission path.",
                    "Wireless connections provide greater mobility and easier installation in many situations.",
                    "The choice of medium depends on speed, distance, mobility, reliability, cost, and installation requirements."
                ]
            }
        ],
        terms: [
            ["Transmission Medium", "A transmission medium is the path used to carry network signals."],
            ["Copper Cable", "Copper cable carries electrical signals through metal conductors."],
            ["Fiber Optic", "Fiber-optic cable carries information using light through optical fibers."],
            ["Wireless", "Wireless communication transfers information through electromagnetic signals without a physical cable."],
            ["Electromagnetic Signal", "An electromagnetic signal carries information through electromagnetic energy."]
        ],
        example:
            "A desktop computer connected to a switch using Ethernet uses wired transmission, while a smartphone connected to a Wi-Fi access point uses wireless transmission."
    },
    {
        id: 16,
        title: "Jitter and Packet Loss",
        diagram: "metrics",
        explanation:
            "Jitter and packet loss are network performance problems that can affect the quality and reliability of communication.",
        sections: [
            {
                title: "Jitter",
                points: [
                    "Jitter is the variation in packet arrival time.",
                    "Packets should ideally arrive at relatively consistent intervals for real-time applications.",
                    "High jitter can cause audio and video to become uneven or delayed.",
                    "Real-time applications such as voice calls and video conferences are sensitive to jitter."
                ]
            },
            {
                title: "Packet Loss",
                points: [
                    "Packet loss occurs when packets fail to reach their intended destination.",
                    "Lost packets can cause missing information.",
                    "Some protocols can retransmit lost data.",
                    "High packet loss can reduce network performance and communication quality."
                ]
            },
            {
                title: "Causes",
                points: [
                    "Network congestion can increase packet loss.",
                    "Wireless interference can cause communication errors and packet loss.",
                    "Damaged network equipment or cables can affect transmission.",
                    "Unstable network connections can produce inconsistent packet arrival times."
                ]
            }
        ],
        terms: [
            ["Jitter", "Jitter is variation in the arrival time of packets."],
            ["Packet Loss", "Packet loss occurs when transmitted packets do not successfully reach the destination."],
            ["Packet", "A packet is a unit of data transmitted across a packet-switched network."],
            ["Retransmission", "Retransmission is sending data again after it was lost or not successfully received."],
            ["Real-Time Application", "A real-time application requires information to arrive quickly and consistently, such as a voice or video call."]
        ],
        example:
            "During a video call, high jitter can make the audio arrive unevenly, while packet loss can cause parts of the audio or video to disappear."
    },
    {
        id: 17,
        title: "How Network Errors Are Detected",
        diagram: "errors",
        explanation:
            "Error detection techniques help a receiver determine whether data was changed or corrupted during transmission.",
        sections: [
            {
                title: "Parity",
                points: [
                    "Parity adds an extra bit to a group of binary data.",
                    "The extra bit helps the receiver detect certain transmission errors.",
                    "Parity is simple but cannot detect every possible error."
                ]
            },
            {
                title: "Checksum",
                points: [
                    "A checksum is calculated from the transmitted data.",
                    "The calculated value is sent along with the data.",
                    "The receiver calculates a value from the received data and compares it with the transmitted checksum.",
                    "A difference can indicate that the data was corrupted."
                ]
            },
            {
                title: "CRC",
                points: [
                    "CRC stands for Cyclic Redundancy Check.",
                    "CRC uses mathematical calculations to create a value based on the data.",
                    "The receiver performs a similar calculation to detect errors.",
                    "CRC is widely used because it can detect many common transmission errors."
                ]
            },
            {
                title: "Key Points",
                points: [
                    "Error detection identifies whether transmitted data may have been corrupted.",
                    "Parity is simple and lightweight.",
                    "Checksums provide a calculated value for checking data.",
                    "CRC provides strong error detection for many common transmission errors."
                ]
            }
        ],
        terms: [
            ["Error", "An error occurs when received data differs from the intended transmitted data."],
            ["Parity Bit", "A parity bit is an extra binary bit used to detect certain errors."],
            ["Checksum", "A checksum is a calculated value used to help detect corrupted data."],
            ["CRC", "CRC is a mathematical error-detection technique called Cyclic Redundancy Check."],
            ["Corruption", "Data corruption means that information has been changed or damaged."]
        ],
        example:
            "If a group of binary data changes while travelling through a network, an error-detection method can help the receiver identify that the received data may not be correct."
    },
    {
        id: 18,
        title: "Basic Network Security",
        diagram: "security",
        explanation:
            "Network security protects data, devices, applications, and communication from unauthorized access, modification, disruption, and other threats.",
        sections: [
            {
                title: "Confidentiality",
                points: [
                    "Confidentiality means that information should only be accessible to authorized users.",
                    "Authentication helps verify who a user or system is.",
                    "Authorization determines what an authenticated user is allowed to access.",
                    "Encryption can protect information from being understood by unauthorized people."
                ]
            },
            {
                title: "Integrity",
                points: [
                    "Integrity means that information should remain accurate and should not be changed without authorization.",
                    "Integrity mechanisms can help detect unauthorized changes.",
                    "Checksums and cryptographic methods can be used to help verify data integrity."
                ]
            },
            {
                title: "Availability",
                points: [
                    "Availability means that authorized users should be able to access systems and information when required.",
                    "Backups help organizations recover information after failures.",
                    "Redundant systems can help services remain available when one component fails.",
                    "Protection against attacks and failures is important for maintaining availability."
                ]
            },
            {
                title: "CIA Triad",
                points: [
                    "The CIA Triad is a basic security model containing confidentiality, integrity, and availability.",
                    "Confidentiality protects information from unauthorized access.",
                    "Integrity protects information from unauthorized modification.",
                    "Availability keeps systems and information accessible to authorized users."
                ]
            }
        ],
        terms: [
            ["Security", "Security is the protection of systems, data, devices, and communication from threats."],
            ["Confidentiality", "Confidentiality ensures that only authorized parties can access information."],
            ["Integrity", "Integrity ensures that information remains accurate and is not changed without authorization."],
            ["Availability", "Availability ensures that authorized users can access required systems and information."],
            ["Authentication", "Authentication verifies the identity of a user or system."],
            ["Authorization", "Authorization determines what an authenticated user is allowed to do."],
            ["Encryption", "Encryption transforms information into a protected form that unauthorized users cannot easily understand."]
        ],
        example:
            "A banking application uses authentication to verify your identity, authorization to control what you can access, encryption to protect communication, and security controls to keep the service available."
    },
    {
        id: 19,
        title: "History of Computer Networking",
        diagram: "history",
        explanation:
            "Computer networking evolved from early systems designed for communication and resource sharing into today's global Internet and modern connected systems.",
        sections: [
            {
                title: "Early Networking",
                points: [
                    "Early computer systems were often isolated and could not easily communicate with one another.",
                    "Researchers began developing networks to allow computers to exchange information and share resources.",
                    "Early networking research contributed important ideas that influenced modern networks."
                ]
            },
            {
                title: "Packet Switching",
                points: [
                    "Packet switching became an important method for efficiently sharing network communication resources.",
                    "Instead of reserving one complete path, information could be divided into packets and transmitted through shared networks.",
                    "Packet switching became an important foundation for modern computer networking."
                ]
            },
            {
                title: "Growth of the Internet",
                points: [
                    "Different networks were gradually connected to create larger interconnected networks.",
                    "Common protocols helped different computer systems communicate.",
                    "The Internet grew from research and academic networks into a global communication system.",
                    "The World Wide Web made Internet information easier for ordinary users to access."
                ]
            },
            {
                title: "Modern Networking",
                points: [
                    "Modern networks connect computers, smartphones, servers, cloud systems, sensors, vehicles, and many other devices.",
                    "Wireless networking has made network access possible from many mobile devices.",
                    "Cloud computing provides computing and storage resources through networks.",
                    "The Internet of Things connects physical devices to networks so they can exchange information.",
                    "Modern networking continues to develop through technologies such as virtualization, edge computing, and high-speed wireless communication."
                ]
            }
        ],
        terms: [
            ["Computer Network", "A computer network is a group of connected systems that communicate and share resources."],
            ["Packet Switching", "Packet switching divides data into packets that use shared network resources."],
            ["Internet", "The Internet is a global system of interconnected networks."],
            ["World Wide Web", "The World Wide Web is a system of linked information and services accessed through the Internet."],
            ["Cloud Computing", "Cloud computing provides computing resources and services through networks."],
            ["Internet of Things", "The Internet of Things connects physical devices to networks so they can collect and exchange data."],
            ["Edge Computing", "Edge computing processes data closer to where it is produced instead of sending everything to a distant central system."]
        ],
        example:
            "A modern smart home shows how networking has evolved: phones, televisions, cameras, sensors, and other devices can connect through a network and communicate with cloud services."
    }
];

export default fundamentalsData;