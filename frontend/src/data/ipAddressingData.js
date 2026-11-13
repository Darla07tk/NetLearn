export const ipAddressingTopics = [
    {
        id: "ip-address",
        title: "What is an IP Address?"
    },
    {
        id: "ip-classes",
        title: "IP Address Classes (A, B, C, D and E)"
    },
    {
        id: "subnet-masks",
        title: "Subnet Masks"
    },
    {
        id: "default-gateway",
        title: "The Default Gateway"
    },
    {
        id: "public-private",
        title: "Public vs. Private IP Addresses"
    },
    {
        id: "static-dynamic",
        title: "Static vs. Dynamic Assignment"
    }
];

export const ipAddressingContent = {
    "ip-address": [
        {
            heading: "Definition of IP",
            diagram: "overview",
            points: [
                "An IP address is a logical address assigned to a device on a network.",
                "It identifies a device and allows data to be delivered to the correct destination.",
                "IPv4 addresses contain 32 bits and are written as four decimal octets.",
                "Each device communicating through IP uses a source address and a destination address."
            ]
        },
        {
            heading: "IPv4 Address Structure",
            diagram: "ipv4",
            points: [
                "An IPv4 address contains four octets separated by dots.",
                "Each octet contains 8 bits and can have a value from 0 to 255.",
                "The complete address contains 32 bits.",
                "For example, 192.168.1.25 contains four octets."
            ]
        },
        {
            heading: "Network Part and Host Part",
            diagram: "network-host",
            points: [
                "The network part identifies the network to which a device belongs.",
                "The host part identifies a particular device inside that network.",
                "The subnet mask determines where the network part ends and the host part begins.",
                "Devices in the same network share the same network portion."
            ]
        },
        {
            heading: "How IP Addressing Enables Communication",
            diagram: "communication",
            points: [
                "The source IP identifies the device sending the packet.",
                "The destination IP identifies the device that should receive the packet.",
                "The sender uses the subnet mask to determine whether the destination is local or remote.",
                "Remote traffic is sent to the default gateway.",
                "Routers forward the packet toward the destination network."
            ]
        },
        {
            heading: "IPv4 Addressing and IPv6",
            diagram: "ipv4-ipv6",
            points: [
                "IPv4 uses 32-bit addresses and is written in dotted-decimal notation.",
                "IPv6 uses 128-bit addresses and provides a much larger address space.",
                "IPv6 addresses are written using hexadecimal notation.",
                "IPv6 was introduced to address the limitations of IPv4 address availability."
            ]
        }
    ],

    "ip-classes": [
        {
            heading: "What Are IPv4 Address Classes?",
            diagram: "class-overview",
            points: [
                "Traditional IPv4 addressing divided addresses into Classes A, B, C, D and E.",
                "Classes A, B and C were mainly associated with different network and host sizes.",
                "Class D is used for multicast communication.",
                "Class E is reserved for experimental purposes."
            ]
        },
        {
            heading: "Class A",
            diagram: "class-a",
            points: [
                "Class A addresses use the range 1.0.0.0 to 126.255.255.255.",
                "The first octet identifies the network.",
                "The remaining three octets identify hosts.",
                "Class A was designed for very large networks."
            ]
        },
        {
            heading: "Class B",
            diagram: "class-b",
            points: [
                "Class B addresses use the range 128.0.0.0 to 191.255.255.255.",
                "The first two octets identify the network.",
                "The remaining two octets identify hosts.",
                "Class B was designed for medium-sized networks."
            ]
        },
        {
            heading: "Class C",
            diagram: "class-c",
            points: [
                "Class C addresses use the range 192.0.0.0 to 223.255.255.255.",
                "The first three octets identify the network.",
                "The last octet identifies hosts.",
                "Class C was designed for smaller networks."
            ]
        },
        {
            heading: "Class D",
            diagram: "class-d",
            points: [
                "Class D addresses range from 224.0.0.0 to 239.255.255.255.",
                "Class D is used for multicast communication.",
                "Multicast allows one packet to be delivered to multiple interested receivers.",
                "Class D does not use the normal network-and-host structure of Classes A, B and C."
            ]
        },
        {
            heading: "Class E",
            diagram: "class-e",
            points: [
                "Class E addresses range from 240.0.0.0 to 255.255.255.255.",
                "Class E is reserved for experimental and research purposes.",
                "These addresses are not normally assigned to ordinary hosts.",
                "Class E is different from the normal unicast classes."
            ]
        }
    ],

    "subnet-masks": [
        {
            heading: "What Is a Subnet Mask?",
            diagram: "mask-definition",
            points: [
                "A subnet mask identifies which part of an IPv4 address represents the network.",
                "The remaining portion represents the host.",
                "255 in a subnet mask normally represents network bits.",
                "0 normally represents host bits."
            ]
        },
        {
            heading: "Network Bits and Host Bits",
            diagram: "mask-bits",
            points: [
                "Network bits identify the subnet.",
                "Host bits identify devices within that subnet.",
                "The number of host bits determines how many addresses are available.",
                "The subnet mask separates the network and host portions."
            ]
        },
        {
            heading: "CIDR Prefix Notation",
            diagram: "cidr",
            points: [
                "CIDR represents the number of network bits using a slash notation.",
                "For example, /24 means that 24 bits are used for the network.",
                "A /24 IPv4 network leaves 8 bits for hosts.",
                "CIDR allows networks to be represented more flexibly."
            ]
        },
        {
            heading: "Finding the Network Address",
            diagram: "network-address",
            points: [
                "The network address identifies the entire subnet.",
                "It is calculated by applying the subnet mask to the IP address.",
                "All host bits become zero in the network address.",
                "The network address itself cannot normally be assigned to a host."
            ]
        },
        {
            heading: "Subnetting",
            diagram: "subnetting",
            points: [
                "Subnetting divides one larger network into smaller networks.",
                "It improves address organization and network management.",
                "Subnetting borrows host bits to create additional network portions.",
                "Each subnet has its own network and broadcast address."
            ]
        },
        {
            heading: "Usable Host Addresses",
            diagram: "host-calculation",
            points: [
                "The number of host addresses depends on the number of host bits.",
                "For a normal IPv4 subnet, the network address is reserved.",
                "The broadcast address is also reserved.",
                "Usable hosts are calculated using 2ⁿ − 2.",
                "For a /24 network, 8 host bits provide 254 usable host addresses."
            ]
        }
    ],

    "default-gateway": [
        {
            heading: "What Is a Default Gateway?",
            points: [
                "A default gateway is the device that forwards traffic from a local network to another network.",
                "In most networks, the default gateway is a router interface.",
                "A host sends remote traffic to the gateway when the destination is outside its local subnet.",
                "The gateway provides the path from the local network toward remote destinations."
            ]
        },
        {
            heading: "Local Network vs Remote Network",
            points: [
                "A destination in the same subnet can usually be reached directly through the local network.",
                "A destination in another subnet requires a router.",
                "The source device compares the destination IP with its own network using the subnet mask.",
                "If the destination is remote, the packet is sent to the default gateway."
            ]
        },
        {
            heading: "Example of a Default Gateway",
            points: [
                "A PC may have the address 192.168.1.10/24.",
                "Its default gateway may be 192.168.1.1.",
                "When the PC communicates with a remote network, it forwards the packet toward 192.168.1.1.",
                "The router then examines the destination and forwards the packet."
            ]
        },
        {
            heading: "What Happens Without a Correct Gateway?",
            points: [
                "A device may still communicate with devices on its own local network.",
                "Communication with remote networks may fail.",
                "An incorrect gateway can send packets toward the wrong router.",
                "A missing gateway prevents normal remote-network communication."
            ]
        }
    ],

    "public-private": [
        {
            heading: "Public IP Addresses",
            points: [
                "A public IP address is used for communication across the Internet.",
                "It must be globally unique within the Internet addressing system.",
                "Public addresses can be assigned by an Internet service provider or organization.",
                "Servers and Internet-facing services may use public IP addresses."
            ]
        },
        {
            heading: "Private IP Addresses",
            points: [
                "Private IP addresses are used inside local networks.",
                "They are not directly routable across the public Internet.",
                "Devices in homes, offices and organizations commonly use private addresses.",
                "Private addresses can be reused in different private networks."
            ]
        },
        {
            heading: "Private IPv4 Ranges",
            points: [
                "10.0.0.0/8 is the private Class A range.",
                "172.16.0.0/12 is the private Class B range.",
                "192.168.0.0/16 is the private Class C range.",
                "These ranges are defined for private network use."
            ]
        },
        {
            heading: "Network Address Translation",
            points: [
                "NAT translates private addresses into public addresses when devices access the Internet.",
                "A router can maintain translations between internal and external connections.",
                "NAT allows many private devices to share a public IPv4 address.",
                "It helps conserve the limited IPv4 address space."
            ]
        },
        {
            heading: "Public vs Private: Key Difference",
            points: [
                "Public IP addresses are used for Internet-level communication.",
                "Private IP addresses are intended for internal networks.",
                "Private addresses normally require NAT or another mechanism to communicate with the public Internet.",
                "Public and private addressing work together in many modern networks."
            ]
        }
    ],

    "static-dynamic": [
        {
            heading: "Static IP Assignment",
            points: [
                "A static IP address is manually configured on a device.",
                "The address normally remains unchanged until an administrator changes it.",
                "Static assignment is useful for servers, printers, routers and other devices that need predictable addresses.",
                "The administrator must configure the IP address, subnet mask and gateway correctly."
            ]
        },
        {
            heading: "Dynamic IP Assignment",
            points: [
                "Dynamic IP assignment automatically provides an address to a device.",
                "DHCP is the most common protocol used for dynamic IPv4 assignment.",
                "The DHCP server can provide the IP address, subnet mask, gateway and other settings.",
                "The assigned address is normally provided for a lease period."
            ]
        },
        {
            heading: "DHCP Address Assignment",
            points: [
                "The DHCP process commonly follows Discover, Offer, Request and Acknowledge.",
                "The client first searches for an available DHCP server.",
                "The server offers an available configuration.",
                "The client requests the offered configuration and the server confirms it."
            ]
        },
        {
            heading: "Static and Dynamic: When They Are Used",
            points: [
                "Static addressing is useful when a device must always be reachable at a known address.",
                "Dynamic addressing is useful for ordinary client devices.",
                "Servers and network infrastructure often use static or reserved addresses.",
                "Laptops, phones and temporary devices commonly receive addresses through DHCP."
            ]
        },
        {
            heading: "Static vs Dynamic: Advantages and Limitations",
            points: [
                "Static addressing provides predictable addresses but requires manual configuration.",
                "Dynamic addressing reduces manual work and simplifies large networks.",
                "Static configuration can cause errors if settings are entered incorrectly.",
                "Dynamic addressing depends on the availability and correct operation of DHCP."
            ]
        }
    ]
};