const ipData = {
    title: "Internet Protocol (IP)",

    intro: [
        "IP provides logical addressing that identifies devices and helps locate them across local and global networks.",
        "Each IP packet carries source and destination addresses so routers can forward the packet toward the correct network.",
        "IP operates at the Network Layer (Layer 3) and is responsible for packet addressing and routing between networks.",
    ],

    pdu: "IP Packet",

    workflow: [
        {
            title: "Application data is prepared",
            text: "The source PC creates data and prepares it for transmission across the network.",
            activeNodes: ["sourcePC"],
            activeLines: [],
            activeArrow: null,
        },

        {
            title: "The packet is addressed",
            text: "IP prepares the packet with the source IP address and the destination IP address.",
            activeNodes: ["sourcePC"],
            activeLines: [],
            activeArrow: null,
        },

        {
            title: "Packet reaches the source network server",
            text: "The packet moves from the source PC to the server in its local network.",
            activeNodes: [
                "sourcePC",
                "indiaServer",
            ],
            activeLines: [
                "sourcePC-indiaServer",
            ],
            activeArrow: {
                line: "sourcePC-indiaServer",
                direction: "forward",
            },
        },

        {
            title: "The packet enters the wider network",
            text: "The source network forwards the packet toward the router that connects it to the wider network.",
            activeNodes: [
                "indiaServer",
                "internetRouter",
            ],
            activeLines: [
                "indiaServer-internetRouter",
            ],
            activeArrow: {
                line: "indiaServer-internetRouter",
                direction: "forward",
            },
        },

        {
            title: "The router examines the destination IP",
            text: "The router checks the destination IP address and determines the next route toward the destination network.",
            activeNodes: ["internetRouter"],
            activeLines: [],
            activeArrow: null,
        },

        {
            title: "The packet crosses to another country",
            text: "The packet is forwarded through the network toward the router serving the destination country.",
            activeNodes: [
                "internetRouter",
                "japanRouter",
            ],
            activeLines: [
                "internetRouter-japanRouter",
            ],
            activeArrow: {
                line: "internetRouter-japanRouter",
                direction: "forward",
            },
        },

        {
            title: "The destination router forwards the packet",
            text: "The destination router sends the packet toward the server in the destination network.",
            activeNodes: [
                "japanRouter",
                "japanServer",
            ],
            activeLines: [
                "japanRouter-japanServer",
            ],
            activeArrow: {
                line: "japanRouter-japanServer",
                direction: "forward",
            },
        },

        {
            title: "The destination server receives the packet",
            text: "The destination server accepts the packet because the destination IP identifies the intended network and system.",
            activeNodes: ["japanServer"],
            activeLines: [],
            activeArrow: null,
        },

        {
            title: "The packet is delivered to the destination PC",
            text: "The destination server forwards the received data to the destination PC.",
            activeNodes: [
                "japanServer",
                "destinationPC",
            ],
            activeLines: [
                "japanServer-destinationPC",
            ],
            activeArrow: {
                line: "japanServer-destinationPC",
                direction: "forward",
            },
        },

        {
            title: "Data has reached the destination",
            text: "The destination PC receives the data, completing the IP delivery process.",
            activeNodes: ["destinationPC"],
            activeLines: [],
            activeArrow: null,
        },
    ],

    theory: {
        "IP Address Basics": [
            {
                heading: "What is an IP Address?",
                points: [
                    "An IP address is a numerical label assigned to a device on a network using the Internet Protocol.",
                ],
            },
            {
                heading: "Device Identification",
                points: [
                    "The IP address identifies a device so it can be recognized within a network.",
                ],
            },
            {
                heading: "Device Location",
                points: [
                    "The address also helps locate the destination network so data can be forwarded correctly.",
                ],
            },
            {
                heading: "Network Portion",
                points: [
                    "The network portion identifies the network to which the device belongs.",
                ],
            },
            {
                heading: "Host Portion",
                points: [
                    "The host portion identifies the individual device within that network.",
                ],
            },
            {
                heading: "Subnet Mask",
                points: [
                    "For IPv4, the subnet mask defines which part of the address represents the network and which part represents the host.",
                ],
            },
        ],

        "Address Scope & Version": [
            {
                heading: "Public IP",
                points: [
                    "A public IP is used for internet communication and is globally unique, commonly assigned by an Internet Service Provider.",
                ],
            },
            {
                heading: "Private IP",
                points: [
                    "A private IP is used inside private networks and normally requires NAT when communicating with the public internet.",
                ],
            },
            {
                heading: "IPv4",
                points: [
                    "IPv4 uses 32 bits in four decimal octets separated by dots, with each octet ranging from 0 to 255.",
                ],
            },
            {
                heading: "IPv6",
                points: [
                    "IPv6 uses 128 bits and represents addresses as eight groups of hexadecimal values separated by colons.",
                ],
            },
        ],

        "Assignment & Communication": [
            {
                heading: "Static IP",
                points: [
                    "A static IP is permanently assigned and is useful for servers and services that need a consistent address.",
                ],
            },
            {
                heading: "Dynamic IP",
                points: [
                    "A dynamic IP is temporarily assigned from an available address pool, commonly through DHCP.",
                ],
            },
            {
                heading: "Unicast",
                points: [
                    "Unicast sends data from one sender to one specific receiver and is widely used for normal network communication.",
                ],
            },
            {
                heading: "Broadcast",
                points: [
                    "Broadcast sends a message from one device to all devices on the same IPv4 network segment.",
                ],
            },
            {
                heading: "Multicast",
                points: [
                    "Multicast sends data from one source to a selected group of receivers that belong to the multicast group.",
                ],
            },
            {
                heading: "Anycast",
                points: [
                    "Anycast sends traffic toward the nearest available receiver among multiple devices using the same address.",
                ],
            },
        ],

        "Special IP Addresses": [
            {
                heading: "Loopback",
                points: [
                    "127.0.0.1 is the loopback address used to test communication within the same device and is commonly called localhost.",
                ],
            },
            {
                heading: "Broadcast Address",
                points: [
                    "A broadcast address delivers data to all devices on a network segment, such as 192.168.1.255 for a typical 192.168.1.0/24 network.",
                ],
            },
            {
                heading: "Multicast Address",
                points: [
                    "Multicast addresses identify groups of receivers, such as IPv4 addresses in the 224.0.0.0–239.255.255.255 range.",
                ],
            },
        ],

        "Core Networking Functions": [
            {
                heading: "Unique Identification",
                points: [
                    "Every device participating in an IP network uses an IP address to identify the device within its communication scope.",
                ],
            },
            {
                heading: "Source & Destination",
                points: [
                    "An IP packet contains the source IP of the sender and the destination IP of the receiver.",
                ],
            },
            {
                heading: "Data Routing",
                points: [
                    "Routers inspect destination IP addresses and forward packets toward the appropriate next network or next hop.",
                ],
            },
            {
                heading: "LAN Communication",
                points: [
                    "Devices within the same LAN can communicate using private or other locally assigned IP addresses.",
                ],
            },
            {
                heading: "WAN Communication",
                points: [
                    "Communication between different networks can cross multiple routers, with each router independently selecting the next hop.",
                ],
            },
            {
                heading: "Network Address Translation",
                points: [
                    "NAT allows devices using private IP addresses to share a public IP when accessing external networks.",
                ],
            },
        ],

        "IP Address Lookup": [
            {
                heading: "Windows",
                points: [
                    "In Windows, the Command Prompt command ipconfig can be used to view the IP address of the active network connection.",
                ],
            },
            {
                heading: "Mac",
                points: [
                    "On a Mac, the active network connection details in System Preferences or Network settings display the IP address.",
                ],
            },
            {
                heading: "iPhone",
                points: [
                    "On an iPhone, the IP address can be viewed by opening Wi-Fi settings and selecting the information option for the connected network.",
                ],
            },
        ],

        "IP Address Security Threats": [
            {
                heading: "IP Spoofing",
                points: [
                    "An attacker can fake a trusted source IP address to make traffic appear to come from another system.",
                ],
            },
            {
                heading: "DDoS Attacks",
                points: [
                    "Distributed systems can flood a target with traffic, causing performance problems or service disruption.",
                ],
            },
            {
                heading: "Man-in-the-Middle",
                points: [
                    "An attacker positioned between communicating systems may intercept or alter traffic moving between them.",
                ],
            },
            {
                heading: "Port Scanning",
                points: [
                    "Attackers can scan for open ports to identify exposed services and possible weaknesses.",
                ],
            },
        ],

        "Protecting and Hiding IP": [
            {
                heading: "VPN",
                points: [
                    "A VPN routes traffic through a VPN server and can hide the user's visible IP address while encrypting the traffic.",
                ],
            },
            {
                heading: "Proxy Server",
                points: [
                    "A proxy acts as an intermediary so external systems see the proxy's IP address instead of the original client address.",
                ],
            },
            {
                heading: "Tor Browser",
                points: [
                    "Tor routes traffic through multiple relay nodes to make direct tracing of the original IP address more difficult.",
                ],
            },
            {
                heading: "Firewall",
                points: [
                    "A firewall filters incoming and outgoing traffic and can block suspicious or unauthorized connections.",
                ],
            },
        ],
    },

    ranges: [
        {
            className: "Class A",
            privateRange: "10.0.0.0 – 10.255.255.255",
            publicRange: "1.0.0.0 – 126.255.255.255*",
            usedFor: "Very large networks",
        },
        {
            className: "Class B",
            privateRange: "172.16.0.0 – 172.31.255.255",
            publicRange: "128.0.0.0 – 191.255.255.255*",
            usedFor: "Medium-sized networks and large organizations",
        },
        {
            className: "Class C",
            privateRange: "192.168.0.0 – 192.168.255.255",
            publicRange: "192.0.0.0 – 223.255.255.255*",
            usedFor: "Smaller networks such as businesses and homes",
        },
        {
            className: "Class D",
            privateRange: "Not applicable",
            publicRange: "224.0.0.0 – 239.255.255.255",
            usedFor: "Multicast communication",
        },
        {
            className: "Class E",
            privateRange: "Not applicable",
            publicRange: "240.0.0.0 – 255.255.255.255",
            usedFor: "Experimental and research purposes",
        },
    ],
};

export default ipData;