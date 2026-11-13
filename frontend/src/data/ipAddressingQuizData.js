const ipAddressingQuizData = [

    {
        id: 1,
        question:
            "A device needs a logical address so that data can identify the correct source and destination on a network. What is this address called?",
        options: {
            A: "MAC address",
            B: "IP address",
            C: "Port number",
            D: "SSID"
        },
        correctAnswer: "B"
    },

    {
        id: 2,
        question:
            "Which statement correctly describes the structure of an IPv4 address?",
        options: {
            A: "It contains 64 bits and four hexadecimal groups",
            B: "It contains 32 bits and four decimal octets",
            C: "It contains 128 bits and four decimal octets",
            D: "It contains 16 bits and two decimal octets"
        },
        correctAnswer: "B"
    },

    {
        id: 3,
        question:
            "A network administrator needs to determine which part of an IPv4 address identifies the network and which part identifies the host. What determines this boundary?",
        options: {
            A: "Default gateway",
            B: "Subnet mask",
            C: "MAC address",
            D: "DHCP lease"
        },
        correctAnswer: "B"
    },

    {
        id: 4,
        question:
            "A computer compares a destination IP address with its own network information and determines that the destination is outside its local subnet. What does the computer normally do?",
        options: {
            A: "Sends the packet to the default gateway",
            B: "Changes the destination IP to a MAC address",
            C: "Sends the packet directly to the remote host",
            D: "Broadcasts the packet across the Internet"
        },
        correctAnswer: "A"
    },

    {
        id: 5,
        question:
            "Which statement correctly compares IPv4 and IPv6 addressing?",
        options: {
            A: "IPv4 uses 128 bits while IPv6 uses 32 bits",
            B: "IPv4 uses hexadecimal notation while IPv6 uses dotted decimal",
            C: "IPv4 uses 32-bit addresses while IPv6 uses 128-bit addresses",
            D: "Both use exactly the same address size and notation"
        },
        correctAnswer: "C"
    },

    {
        id: 6,
        question:
            "In traditional IPv4 address classification, which class is specifically used for multicast communication?",
        options: {
            A: "Class A",
            B: "Class B",
            C: "Class C",
            D: "Class D"
        },
        correctAnswer: "D"
    },

    {
        id: 7,
        question:
            "A network uses an IPv4 address whose first octet is 150. According to the traditional address-class ranges, which class does it belong to?",
        options: {
            A: "Class A",
            B: "Class B",
            C: "Class C",
            D: "Class E"
        },
        correctAnswer: "B"
    },

    {
        id: 8,
        question:
            "A networking system uses addresses in the range 240.0.0.0 to 255.255.255.255. Which traditional IPv4 class does this range belong to?",
        options: {
            A: "Class C",
            B: "Class D",
            C: "Class E",
            D: "Class B"
        },
        correctAnswer: "C"
    },

    {
        id: 9,
        question:
            "What does a 255 value in the normal dotted-decimal representation of an IPv4 subnet mask indicate?",
        options: {
            A: "Host bits",
            B: "Network bits",
            C: "Broadcast address",
            D: "Default gateway"
        },
        correctAnswer: "B"
    },

    {
        id: 10,
        question:
            "A network uses the CIDR prefix /24. How many bits remain available for the host portion of the IPv4 address?",
        options: {
            A: "8 bits",
            B: "16 bits",
            C: "24 bits",
            D: "32 bits"
        },
        correctAnswer: "A"
    },

    {
        id: 11,
        question:
            "When calculating an IPv4 network address using a subnet mask, what happens to all host bits?",
        options: {
            A: "They become one",
            B: "They become zero",
            C: "They are converted into hexadecimal",
            D: "They are replaced by the gateway address"
        },
        correctAnswer: "B"
    },

    {
        id: 12,
        question:
            "An administrator divides one larger IPv4 network into several smaller networks by borrowing bits from the host portion. What process is being performed?",
        options: {
            A: "NAT",
            B: "Subnetting",
            C: "Routing",
            D: "Encapsulation"
        },
        correctAnswer: "B"
    },

    {
        id: 13,
        question:
            "A normal IPv4 subnet has 6 host bits. Using the standard formula for usable host addresses, how many host addresses are available?",
        options: {
            A: "64",
            B: "62",
            C: "32",
            D: "30"
        },
        correctAnswer: "B"
    },

    {
        id: 14,
        question:
            "A PC with address 192.168.1.10/24 wants to communicate with a device on another subnet. Why does it need its default gateway?",
        options: {
            A: "The gateway provides a path toward remote networks",
            B: "The gateway converts the IP address into a subnet mask",
            C: "The gateway assigns the PC a MAC address",
            D: "The gateway replaces DHCP"
        },
        correctAnswer: "A"
    },

    {
        id: 15,
        question:
            "A computer can communicate with devices on its own subnet but cannot communicate with remote networks. Its IP address and subnet mask are correct, but the configured gateway is missing. What is the most likely result?",
        options: {
            A: "Local communication may work while remote communication fails",
            B: "All local communication immediately stops",
            C: "The computer automatically becomes a DHCP server",
            D: "The computer changes to an IPv6 address"
        },
        correctAnswer: "A"
    },

    {
        id: 16,
        question:
            "Which statement correctly distinguishes public and private IPv4 addresses?",
        options: {
            A: "Private IP addresses are directly routable across the public Internet",
            B: "Public IP addresses are intended only for internal local networks",
            C: "Private IP addresses are commonly used inside local networks",
            D: "Public and private IP addresses have exactly the same purpose"
        },
        correctAnswer: "C"
    },

    {
        id: 17,
        question:
            "Which address belongs to one of the private IPv4 ranges specified for internal network use?",
        options: {
            A: "10.20.30.40",
            B: "126.10.10.10",
            C: "224.10.10.10",
            D: "240.10.10.10"
        },
        correctAnswer: "A"
    },

    {
        id: 18,
        question:
            "A home router allows many devices with private IPv4 addresses to access the Internet using a public IPv4 address. Which technology makes this possible?",
        options: {
            A: "CIDR",
            B: "NAT",
            C: "ARP",
            D: "VLAN"
        },
        correctAnswer: "B"
    },

    {
        id: 19,
        question:
            "A server must keep the same predictable IP address until an administrator changes its configuration. Which type of IP assignment is most suitable?",
        options: {
            A: "Dynamic assignment",
            B: "Static assignment",
            C: "Broadcast assignment",
            D: "Multicast assignment"
        },
        correctAnswer: "B"
    },

    {
        id: 20,
        question:
            "A laptop receives its IP address, subnet mask, gateway, and other network settings automatically. Which process is most closely associated with this configuration?",
        options: {
            A: "Static assignment",
            B: "DHCP-based dynamic assignment",
            C: "Manual subnetting",
            D: "NAT translation"
        },
        correctAnswer: "B"
    }

];

export default ipAddressingQuizData;