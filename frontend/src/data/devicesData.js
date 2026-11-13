const devicesData = [
    {
        id: 1,
        name: "Router",
        image: "/images/devices/router.jpg",

        sections: [
            {
                heading: "What Is a Router?",
                content: [
                    "A router is a networking device that connects two or more different networks and forwards packets between them.",
                    "It allows devices on one network to communicate with devices on another network.",
                    "For example, a home router connects a local home network to an Internet service provider network."
                ]
            },
            {
                heading: "Main Role of a Router",
                content: [
                    "The main role of a router is to determine where packets should go and forward them toward their destination.",
                    "Unlike a switch, which mainly connects devices within the same LAN, a router connects different IP networks."
                ]
            },
            {
                heading: "How a Router Works",
                content: [
                    "When a router receives a packet, it examines the destination IP address in the packet header.",
                    "The router compares the destination address with entries in its routing table.",
                    "It selects the most appropriate route and identifies the outgoing interface or next hop.",
                    "The router then forwards the packet toward the destination network."
                ]
            },
            {
                heading: "Which Layer Does It Work At?",
                content: [
                    "A router primarily operates at Layer 3, the Network Layer, of the OSI model.",
                    "It uses logical addresses such as IPv4 and IPv6 addresses when making forwarding decisions."
                ]
            },
            {
                heading: "The Routing Table",
                content: [
                    "A routing table contains information about networks that the router knows how to reach.",
                    "Each route can contain information such as the destination network, next hop, outgoing interface and routing metric.",
                    "The router uses this information to select a path for forwarding packets."
                ]
            },
            {
                heading: "Static Routing",
                content: [
                    "A static route is manually configured by a network administrator.",
                    "Static routing is useful when the network is small or when a specific fixed path is required.",
                    "Static routes do not automatically adapt when the network topology changes."
                ]
            },
            {
                heading: "Dynamic Routing",
                content: [
                    "Dynamic routing allows routers to learn network paths automatically.",
                    "Routers exchange routing information using routing protocols.",
                    "Dynamic routing is especially useful in larger networks where paths can change."
                ]
            },
            {
                heading: "Routing Protocols",
                content: [
                    "RIP - A distance-vector routing protocol that uses hop count as its primary routing metric.",
                    "OSPF - A link-state routing protocol that calculates paths using network topology and cost.",
                    "EIGRP - A routing protocol that uses multiple factors to calculate suitable routes.",
                    "BGP - A path-vector routing protocol used mainly to exchange routing information between autonomous systems."
                ]
            },
            {
                heading: "Choosing Between Multiple Routes",
                content: [
                    "A router may know several possible paths to the same destination.",
                    "It uses routing information and metrics to determine which route should be preferred.",
                    "The selected route is then used for packet forwarding."
                ]
            },
            {
                heading: "Router Interfaces",
                content: [
                    "Router interfaces provide connections to different networks.",
                    "Depending on the router, interfaces can include Ethernet, fiber, serial or wireless interfaces.",
                    "A router normally requires connectivity to multiple networks to perform its primary routing function."
                ]
            },
            {
                heading: "Default Gateway",
                content: [
                    "A default gateway is the router or other Layer 3 device that a host uses when communicating outside its local network.",
                    "For example, a computer on a home network may send Internet-bound traffic to the LAN interface of its router."
                ]
            },
            {
                heading: "NAT on Routers",
                content: [
                    "Many consumer routers provide Network Address Translation.",
                    "NAT allows multiple devices using private IP addresses to communicate with external networks using a public IP address.",
                    "This is commonly used in home and small-office networks."
                ]
            },
            {
                heading: "Types of Routers",
                content: [
                    "Home Router - Designed for residential networks and usually combines routing, NAT, switching and wireless functions.",
                    "Enterprise Router - Designed to connect larger organizational networks and support advanced routing features.",
                    "Core Router - Designed to handle large volumes of traffic within the central part of a network infrastructure.",
                    "Edge Router - Positioned at the boundary between an organization's internal network and an external network.",
                    "Virtual Router - Provides routing functionality through software rather than a dedicated physical routing appliance."
                ]
            },
            {
                heading: "Router and Switch Together",
                content: [
                    "A switch normally provides connectivity between devices inside a LAN.",
                    "A router provides connectivity between different IP networks.",
                    "A typical network therefore uses switches for local connectivity and routers for communication between networks."
                ]
            }
        ]
    },

    {
        id: 2,
        name: "Switch",
        image: "/images/devices/switch.jpg",

        sections: [
            {
                heading: "What Is a Switch?",
                content: [
                    "A switch is a networking device used to connect multiple devices within a local area network.",
                    "Computers, servers, printers, access points and other Ethernet devices can connect to switch ports.",
                    "A switch forwards Ethernet frames toward the appropriate destination."
                ]
            },
            {
                heading: "Main Role of a Switch",
                content: [
                    "The main role of a switch is to provide efficient communication between devices within a LAN.",
                    "It learns where devices are connected and uses that information when forwarding frames."
                ]
            },
            {
                heading: "How a Switch Works",
                content: [
                    "When a frame enters a switch, the switch examines the source MAC address and learns which port the device is connected to.",
                    "The switch then examines the destination MAC address.",
                    "If the destination is known, the frame is forwarded through the corresponding port.",
                    "If the destination is unknown, the switch floods the frame through the appropriate ports."
                ]
            },
            {
                heading: "Which Layer Does It Work At?",
                content: [
                    "A traditional Ethernet switch primarily operates at Layer 2, the Data Link Layer, of the OSI model.",
                    "It uses MAC addresses when making forwarding decisions.",
                    "Layer 3 switches can additionally perform routing functions using IP addresses."
                ]
            },
            {
                heading: "MAC Address Table",
                content: [
                    "A switch maintains a MAC address table containing learned MAC addresses and their associated ports.",
                    "The table allows the switch to determine where known devices are connected.",
                    "Learned entries can eventually expire if they are not used."
                ]
            },
            {
                heading: "Unknown Unicast Traffic",
                content: [
                    "If a switch does not know the destination MAC address, it can flood the frame through the other appropriate ports.",
                    "When the destination device responds, the switch can learn its MAC address from the source address of the response."
                ]
            },
            {
                heading: "Broadcast Traffic",
                content: [
                    "Broadcast frames are normally forwarded to all ports within the same broadcast domain except the port on which the frame was received.",
                    "Protocols such as ARP use broadcast communication in IPv4 networks."
                ]
            },
            {
                heading: "Types of Switches",
                content: [
                    "Unmanaged Switch - Provides basic plug-and-play network connectivity with little or no configuration.",
                    "Managed Switch - Allows administrators to configure, monitor and control switching features.",
                    "Layer 2 Switch - Primarily forwards Ethernet frames using MAC addresses.",
                    "Layer 3 Switch - Performs Layer 2 switching while also providing IP routing capabilities.",
                    "PoE Switch - Can provide electrical power to compatible devices through Ethernet cables along with network connectivity."
                ]
            },
            {
                heading: "VLAN Support",
                content: [
                    "Managed switches can divide a physical network into multiple logical VLANs.",
                    "VLANs allow different groups of devices to be logically separated even when they use the same physical switching infrastructure.",
                    "Communication between different VLANs requires a Layer 3 routing function."
                ]
            },
            {
                heading: "Full-Duplex Communication",
                content: [
                    "Modern switched Ethernet normally supports full-duplex communication.",
                    "A connected device can transmit and receive simultaneously.",
                    "This avoids the shared collision behavior associated with traditional hub-based Ethernet."
                ]
            },
            {
                heading: "Switch vs Hub",
                content: [
                    "A hub repeats incoming signals to its other ports without learning destination addresses.",
                    "A switch learns MAC addresses and forwards frames more selectively.",
                    "Switches therefore provide more efficient LAN communication than traditional hubs."
                ]
            }
        ]
    },

    {
        id: 3,
        name: "Hub",
        image: "/images/devices/hub.jpg",

        sections: [
            {
                heading: "What Is a Hub?",
                content: [
                    "A hub is a basic networking device that connects multiple devices to a shared network segment.",
                    "It does not make intelligent forwarding decisions based on MAC addresses.",
                    "Traditional Ethernet hubs have largely been replaced by switches."
                ]
            },
            {
                heading: "Main Role of a Hub",
                content: [
                    "The main role of a hub is to repeat an incoming physical signal to its other ports.",
                    "It provides basic connectivity between devices on the same shared network segment."
                ]
            },
            {
                heading: "How a Hub Works",
                content: [
                    "When a signal arrives at one port, the hub repeats it through its other ports.",
                    "All connected devices can therefore receive the signal.",
                    "The receiving devices determine whether the transmitted frame is intended for them."
                ]
            },
            {
                heading: "Which Layer Does It Work At?",
                content: [
                    "A traditional hub operates at Layer 1, the Physical Layer, of the OSI model.",
                    "It works with physical signals and does not examine MAC addresses or IP addresses."
                ]
            },
            {
                heading: "Shared Collision Domain",
                content: [
                    "All devices connected through a traditional hub share the same collision domain.",
                    "If multiple devices transmit at the same time, their signals can collide.",
                    "Older Ethernet networks used CSMA/CD to handle collisions in shared Ethernet environments."
                ]
            },
            {
                heading: "Half-Duplex Communication",
                content: [
                    "Traditional hub-based Ethernet uses half-duplex communication.",
                    "Devices cannot use the link for simultaneous transmission and reception in the same way as modern full-duplex switched Ethernet."
                ]
            },
            {
                heading: "Types of Hubs",
                content: [
                    "Passive Hub - Simply distributes incoming signals without actively regenerating them.",
                    "Active Hub - Regenerates or strengthens signals before repeating them.",
                    "Intelligent Hub - Historically provided additional monitoring or management capabilities beyond basic signal repetition."
                ]
            },
            {
                heading: "Why Hubs Became Obsolete",
                content: [
                    "Hubs repeat traffic to multiple devices, which wastes available network capacity.",
                    "All connected devices also share the same collision domain.",
                    "Switches provide better bandwidth efficiency, separate collision domains and full-duplex communication."
                ]
            }
        ]
    },

    {
        id: 4,
        name: "Bridge",
        image: "/images/devices/bridge.jpg",

        sections: [
            {
                heading: "What Is a Bridge?",
                content: [
                    "A bridge is a networking device that connects two or more network segments and controls which frames are forwarded between them.",
                    "It was designed to reduce unnecessary traffic between connected segments."
                ]
            },
            {
                heading: "Main Role of a Bridge",
                content: [
                    "The main role of a bridge is to connect network segments while filtering traffic based on MAC addresses.",
                    "It allows devices on different segments to communicate when necessary while preventing some unnecessary traffic from crossing between segments."
                ]
            },
            {
                heading: "How a Bridge Works",
                content: [
                    "A bridge examines incoming Ethernet frames.",
                    "It learns the source MAC address and associates it with the interface where the frame arrived.",
                    "It examines the destination MAC address to determine whether the frame should be forwarded or filtered."
                ]
            },
            {
                heading: "Which Layer Does It Work At?",
                content: [
                    "A traditional network bridge operates at Layer 2, the Data Link Layer, of the OSI model.",
                    "It uses MAC addresses to make forwarding and filtering decisions."
                ]
            },
            {
                heading: "MAC Address Learning",
                content: [
                    "A bridge learns the location of devices by examining source MAC addresses.",
                    "The learned information allows it to determine which network segment contains a particular device."
                ]
            },
            {
                heading: "Frame Filtering",
                content: [
                    "If the destination device is known to be on the same segment as the source, the bridge can filter the frame instead of forwarding it across the bridge.",
                    "This reduces unnecessary traffic on the other segment."
                ]
            },
            {
                heading: "Types of Bridges",
                content: [
                    "Transparent Bridge - Learns MAC addresses automatically and forwards frames without requiring hosts to know that the bridge exists.",
                    "Wireless Bridge - Connects network segments using a wireless link.",
                    "Source-Route Bridge - Uses source-route information to determine how frames should travel between network segments."
                ]
            },
            {
                heading: "Bridge and Modern Switches",
                content: [
                    "A modern Ethernet switch performs the fundamental Layer 2 bridging function across multiple ports.",
                    "A switch can therefore be considered a multi-port evolution of the traditional bridge."
                ]
            }
        ]
    },

    {
        id: 5,
        name: "Repeater",
        image: "/images/devices/repeater.jpg",

        sections: [
            {
                heading: "What Is a Repeater?",
                content: [
                    "A repeater is a networking device used to extend the distance over which a signal can travel.",
                    "It receives a signal, regenerates it and sends it onward."
                ]
            },
            {
                heading: "Why Is a Repeater Needed?",
                content: [
                    "Signals become weaker as they travel through a transmission medium.",
                    "This loss of signal strength is called attenuation.",
                    "A repeater helps restore the signal so that communication can continue over a longer distance."
                ]
            },
            {
                heading: "How a Repeater Works",
                content: [
                    "The repeater receives the incoming physical signal.",
                    "It regenerates or reconstructs the signal to an appropriate level.",
                    "The regenerated signal is then transmitted into the next network segment."
                ]
            },
            {
                heading: "Which Layer Does It Work At?",
                content: [
                    "A traditional repeater operates at Layer 1, the Physical Layer, of the OSI model.",
                    "It works with physical signals rather than MAC addresses, IP addresses or routing information."
                ]
            },
            {
                heading: "Types of Repeaters",
                content: [
                    "Wired Repeater - Regenerates signals travelling through a wired transmission medium.",
                    "Wireless Repeater - Receives wireless signals and retransmits them to extend wireless coverage.",
                    "Optical Repeater - Regenerates or restores optical signals in long-distance fiber communication systems."
                ]
            },
            {
                heading: "Wireless Repeaters",
                content: [
                    "A wireless repeater receives a wireless transmission and retransmits it.",
                    "It can extend wireless coverage into areas where the original access point signal is weak.",
                    "Its effectiveness depends on placement, interference, signal quality and wireless technology."
                ]
            },
            {
                heading: "Limitations of a Repeater",
                content: [
                    "A repeater does not understand the destination of network data.",
                    "It does not make routing decisions.",
                    "It cannot control traffic based on MAC or IP addresses."
                ]
            }
        ]
    },

    {
        id: 6,
        name: "Modem",
        image: "/images/devices/modem.jpg",

        sections: [
            {
                heading: "What Is a Modem?",
                content: [
                    "A modem is a device that enables digital communication over a particular telecommunications transmission system.",
                    "The term modem comes from modulation and demodulation.",
                    "The exact operation depends on the access technology used by the service provider."
                ]
            },
            {
                heading: "Main Role of a Modem",
                content: [
                    "A modem provides the communication link between customer equipment and a service-provider network.",
                    "It converts information into signals suitable for the transmission medium and converts received signals back into usable information."
                ]
            },
            {
                heading: "Modulation and Demodulation",
                content: [
                    "Modulation prepares information for transmission through a particular communication medium.",
                    "Demodulation converts the received signal back into information that the receiving equipment can process."
                ]
            },
            {
                heading: "Which Layer Does It Work At?",
                content: [
                    "A modem does not map perfectly to one OSI layer in every implementation.",
                    "Its primary function is closely associated with the Physical Layer because it deals with transmission signals.",
                    "Some modem technologies also implement functions beyond the Physical Layer."
                ]
            },
            {
                heading: "Types of Modems",
                content: [
                    "DSL Modem - Provides broadband connectivity using digital subscriber-line technology over suitable telephone infrastructure.",
                    "Cable Modem - Provides broadband connectivity through a cable television network infrastructure.",
                    "Cellular Modem - Uses a cellular mobile network to provide data connectivity.",
                    "Fiber ONT/ONU - Converts optical signals from a fiber access network into interfaces usable by customer equipment."
                ]
            },
            {
                heading: "DSL Modems",
                content: [
                    "DSL modems use digital subscriber-line technology over suitable copper telephone infrastructure.",
                    "Different DSL technologies provide different transmission capabilities."
                ]
            },
            {
                heading: "Cable Modems",
                content: [
                    "Cable modems communicate with equipment in a cable service provider's access network.",
                    "They provide broadband Internet connectivity through coaxial cable infrastructure."
                ]
            },
            {
                heading: "Cellular Modems",
                content: [
                    "Cellular modems communicate through mobile networks.",
                    "They are commonly used in computers, routers, industrial equipment and other connected devices."
                ]
            },
            {
                heading: "Modem and Router",
                content: [
                    "A modem primarily provides the connection to the service-provider access network.",
                    "A router manages communication between different IP networks.",
                    "Many consumer devices combine modem, router, switch and wireless access point functions into one device."
                ]
            }
        ]
    },

    {
        id: 7,
        name: "Access Point",
        image: "/images/devices/access-point.jpg",

        sections: [
            {
                heading: "What Is an Access Point?",
                content: [
                    "A wireless access point is a networking device that allows wireless devices to connect to a network.",
                    "It provides a communication point between Wi-Fi clients and the network infrastructure.",
                    "An access point commonly bridges wireless traffic to a wired LAN."
                ]
            },
            {
                heading: "Main Role of an Access Point",
                content: [
                    "The main role of an access point is to provide wireless network connectivity.",
                    "It allows devices such as laptops, smartphones and tablets to communicate with network resources without requiring an Ethernet cable."
                ]
            },
            {
                heading: "How an Access Point Works",
                content: [
                    "The access point transmits wireless network information so nearby clients can discover the wireless network.",
                    "A client performs authentication and association with the access point.",
                    "After connection, the access point forwards traffic between wireless clients and the connected network."
                ]
            },
            {
                heading: "Which Layer Does It Work At?",
                content: [
                    "An access point primarily operates at Layer 2, the Data Link Layer, while also performing Layer 1 wireless transmission functions.",
                    "It bridges wireless clients to the wired network using data-link communication."
                ]
            },
            {
                heading: "SSID",
                content: [
                    "An SSID identifies a wireless network.",
                    "An access point can advertise an SSID so nearby wireless clients can discover the network."
                ]
            },
            {
                heading: "Wireless Association",
                content: [
                    "A wireless client searches for available wireless networks.",
                    "The client selects a suitable network and performs the required authentication and association procedures.",
                    "After successful association, the client can exchange network traffic through the access point."
                ]
            },
            {
                heading: "Types of Access Points",
                content: [
                    "Standalone Access Point - Is configured and managed individually and is commonly suitable for small networks.",
                    "Controller-Managed Access Point - Is centrally managed by a wireless controller that can configure and monitor multiple access points.",
                    "Cloud-Managed Access Point - Is administered through a cloud-based management platform."
                ]
            },
            {
                heading: "Wireless Coverage",
                content: [
                    "Wireless coverage depends on transmit power, antennas, frequency, interference, building materials and access point placement.",
                    "Large buildings may require multiple access points to provide continuous coverage."
                ]
            },
            {
                heading: "Power over Ethernet",
                content: [
                    "Many access points support Power over Ethernet.",
                    "PoE allows electrical power and network data to travel through the same Ethernet cable."
                ]
            },
            {
                heading: "Wireless Security",
                content: [
                    "Wireless networks use authentication and encryption mechanisms to protect access and communication.",
                    "Enterprise wireless networks can integrate authentication with centralized identity systems."
                ]
            },
            {
                heading: "Roaming",
                content: [
                    "Multiple access points can provide overlapping wireless coverage.",
                    "A client moving through a building can transition between access points while remaining connected to the network."
                ]
            }
        ]
    },

    {
        id: 8,
        name: "NIC",
        image: "/images/devices/nic.jpg",

        sections: [
            {
                heading: "What Is a NIC?",
                content: [
                    "A Network Interface Card, commonly called a NIC, is a hardware interface that allows a computer or other device to connect to a network.",
                    "NICs can provide wired Ethernet or wireless connectivity."
                ]
            },
            {
                heading: "Main Role of a NIC",
                content: [
                    "The main role of a NIC is to provide the interface between a device and the network.",
                    "It handles the transmission and reception of network data through the supported networking technology."
                ]
            },
            {
                heading: "How a NIC Works",
                content: [
                    "When a device sends data, the operating system's networking stack prepares the information for transmission.",
                    "The NIC handles the appropriate data-link and physical transmission functions.",
                    "When data is received, the NIC processes the incoming network information and passes it to the operating system."
                ]
            },
            {
                heading: "Which Layer Does It Work At?",
                content: [
                    "A NIC operates across Layer 1, the Physical Layer, and Layer 2, the Data Link Layer.",
                    "It handles physical transmission while also participating in data-link communication such as Ethernet framing and MAC addressing."
                ]
            },
            {
                heading: "MAC Address",
                content: [
                    "A network interface normally has a MAC address used for Data Link Layer communication.",
                    "Ethernet switches use MAC addresses to learn where network devices are connected."
                ]
            },
            {
                heading: "Types of NICs",
                content: [
                    "Ethernet NIC - Provides wired network connectivity through an Ethernet connection.",
                    "Wireless NIC - Provides wireless network connectivity using radio communication such as Wi-Fi.",
                    "Integrated NIC - Is built directly into the computer's motherboard or system hardware.",
                    "External NIC - Is added separately through interfaces such as USB or an expansion slot."
                ]
            },
            {
                heading: "Ethernet NIC",
                content: [
                    "An Ethernet NIC provides wired network connectivity.",
                    "It commonly uses an RJ-45 Ethernet port.",
                    "Different NICs support different Ethernet speeds and standards."
                ]
            },
            {
                heading: "Wireless NIC",
                content: [
                    "A wireless NIC communicates using radio signals.",
                    "It allows devices to connect to Wi-Fi networks without a physical Ethernet cable."
                ]
            },
            {
                heading: "NIC Drivers",
                content: [
                    "A device driver allows the operating system to communicate with the NIC hardware.",
                    "A missing or incompatible driver can prevent the operating system from using the network interface correctly."
                ]
            },
            {
                heading: "Multiple NICs",
                content: [
                    "Servers may contain multiple NICs for connecting to separate networks.",
                    "Multiple interfaces can also be used for redundancy, traffic separation or specialized network configurations."
                ]
            }
        ]
    },

    {
        id: 9,
        name: "Firewall",
        image: "/images/devices/firewall.jpg",

        sections: [
            {
                heading: "What Is a Firewall?",
                content: [
                    "A firewall is a security system that controls network traffic according to a defined security policy.",
                    "It can allow legitimate traffic and block traffic that violates configured security rules.",
                    "Firewalls can protect individual devices, networks or cloud environments."
                ]
            },
            {
                heading: "Main Role of a Firewall",
                content: [
                    "The main role of a firewall is to control communication between different security zones.",
                    "It can protect an internal network from unwanted external traffic and can also restrict traffic between internal networks."
                ]
            },
            {
                heading: "How a Firewall Works",
                content: [
                    "A firewall receives or observes network traffic.",
                    "It examines characteristics of the traffic according to its capabilities and configured rules.",
                    "The firewall then allows, blocks, logs or otherwise handles the traffic according to the security policy."
                ]
            },
            {
                heading: "Which Layer Does It Work At?",
                content: [
                    "A firewall can operate across multiple OSI layers depending on its design.",
                    "Traditional packet-filtering firewalls commonly inspect Layer 3 and Layer 4 information.",
                    "Modern application-aware firewalls can also inspect Layer 7 application information."
                ]
            },
            {
                heading: "Packet Filtering",
                content: [
                    "Packet-filtering firewalls can examine source address, destination address, protocol and port information.",
                    "Rules determine whether matching traffic should be allowed or blocked."
                ]
            },
            {
                heading: "Stateful Inspection",
                content: [
                    "A stateful firewall keeps track of active network connections.",
                    "It uses connection state when evaluating subsequent packets.",
                    "This gives the firewall more context than treating every packet as completely independent."
                ]
            },
            {
                heading: "Application-Aware Inspection",
                content: [
                    "Modern firewalls can inspect information beyond basic IP addresses and port numbers.",
                    "Depending on the firewall, it may identify applications, protocols or other application-level characteristics."
                ]
            },
            {
                heading: "Types of Firewalls",
                content: [
                    "Packet-Filtering Firewall - Filters traffic using information such as IP addresses, protocols and port numbers.",
                    "Stateful Firewall - Tracks active connections and uses connection state when making traffic decisions.",
                    "Proxy Firewall - Acts as an intermediary between clients and external services while inspecting application traffic.",
                    "Next-Generation Firewall - Combines traditional firewall functions with deeper inspection and additional security capabilities.",
                    "Host-Based Firewall - Runs directly on an individual computer or server and controls its network traffic.",
                    "Network Firewall - Protects multiple devices by controlling traffic at a network boundary."
                ]
            },
            {
                heading: "Network Segmentation",
                content: [
                    "Firewalls can control communication between different internal security zones.",
                    "For example, a firewall can regulate traffic between employee networks, server networks and guest networks."
                ]
            },
            {
                heading: "Firewall Rules",
                content: [
                    "Firewall rules define which types of traffic are permitted and which are denied.",
                    "The order and configuration of rules can affect the final traffic decision.",
                    "Incorrect rules can either block legitimate communication or expose systems unnecessarily."
                ]
            }
        ]
    },

    {
        id: 10,
        name: "Gateway",
        image: "/images/devices/gateway.jpg",

        sections: [
            {
                heading: "What Is a Gateway?",
                content: [
                    "A gateway is a device or system that provides a path between different network environments.",
                    "The exact meaning of gateway depends on what systems, networks or protocols are being connected.",
                    "A gateway can perform routing, translation or application-level functions."
                ]
            },
            {
                heading: "Main Role of a Gateway",
                content: [
                    "The main role of a gateway is to provide a point through which communication can move between different environments.",
                    "It can also translate between different protocols or communication formats when required."
                ]
            },
            {
                heading: "How a Gateway Works",
                content: [
                    "A gateway receives communication from one environment.",
                    "It processes or forwards the communication according to the type of gateway.",
                    "It then delivers the communication toward the destination environment."
                ]
            },
            {
                heading: "Which Layer Does It Work At?",
                content: [
                    "A gateway does not have one fixed OSI layer because gateway functionality can exist at different layers.",
                    "A default gateway commonly performs Layer 3 routing functions.",
                    "An application gateway can operate at higher layers and understand application protocols."
                ]
            },
            {
                heading: "Default Gateway",
                content: [
                    "A default gateway is the device a host uses when it needs to communicate outside its local subnet.",
                    "In many networks, a router interface serves as the default gateway."
                ]
            },
            {
                heading: "Protocol Translation",
                content: [
                    "Some gateways translate between different communication protocols or data formats.",
                    "This allows systems that do not directly use the same protocol to communicate through the gateway."
                ]
            },
            {
                heading: "Types of Gateways",
                content: [
                    "Default Gateway - Provides the next-hop path for hosts communicating outside their local IP subnet.",
                    "Application Gateway - Processes and translates communication at the application level.",
                    "Protocol Gateway - Converts communication between different protocols or protocol formats.",
                    "Secure Web Gateway - Inspects and controls web traffic according to organizational security policies."
                ]
            },
            {
                heading: "Gateway vs Router",
                content: [
                    "A router primarily forwards IP packets between networks.",
                    "A gateway is a broader concept that can include routing as well as protocol translation and application-specific functions.",
                    "A router can therefore serve as a gateway in many common network environments."
                ]
            }
        ]
    },

    {
        id: 11,
        name: "Proxy Server",
        image: "/images/devices/proxyServer.jpg",

        sections: [
            {
                heading: "What Is a Proxy Server?",
                content: [
                    "A proxy server is an intermediary that receives requests from a client and communicates with another server on the client's behalf.",
                    "The client therefore communicates through the proxy instead of directly communicating with the destination in the usual way."
                ]
            },
            {
                heading: "Main Role of a Proxy",
                content: [
                    "A proxy can provide traffic control, filtering, caching, logging, security inspection and intermediary communication.",
                    "The exact role depends on whether the proxy is positioned in front of clients or servers."
                ]
            },
            {
                heading: "How a Proxy Works",
                content: [
                    "The client sends a request to the proxy.",
                    "The proxy evaluates the request according to its configuration and security policies.",
                    "If the request is permitted, the proxy communicates with the destination server.",
                    "The destination response is then returned through the proxy to the client."
                ]
            },
            {
                heading: "Which Layer Does It Work At?",
                content: [
                    "A proxy generally operates at higher OSI layers because it understands and processes particular protocols or application requests.",
                    "Web and application proxies commonly operate at Layer 7, the Application Layer."
                ]
            },
            {
                heading: "Forward Proxy",
                content: [
                    "A forward proxy represents clients when they communicate with external servers.",
                    "Organizations can use forward proxies for Internet access control, filtering, logging and policy enforcement."
                ]
            },
            {
                heading: "Reverse Proxy",
                content: [
                    "A reverse proxy is positioned in front of backend servers.",
                    "Clients communicate with the reverse proxy, which forwards requests to suitable backend servers.",
                    "Reverse proxies can provide caching, TLS termination, security controls and traffic distribution."
                ]
            },
            {
                heading: "Types of Proxies",
                content: [
                    "Forward Proxy - Acts on behalf of clients when they communicate with external servers.",
                    "Reverse Proxy - Acts on behalf of backend servers and receives client requests before forwarding them internally.",
                    "Transparent Proxy - Intermediates traffic with little or no explicit proxy configuration required on the client.",
                    "Caching Proxy - Stores frequently requested content so suitable future requests can be served from the cache.",
                    "Web Filtering Proxy - Inspects web requests and applies browsing or security policies."
                ]
            },
            {
                heading: "Web Filtering",
                content: [
                    "A proxy can inspect web requests and enforce browsing policies.",
                    "Organizations can restrict access to selected websites, categories or types of content."
                ]
            },
            {
                heading: "Caching",
                content: [
                    "A proxy can store frequently requested content.",
                    "If a valid cached copy is available, a later request may be served from the cache instead of contacting the original server again."
                ]
            },
            {
                heading: "Proxy and Privacy",
                content: [
                    "A proxy acts as an intermediary, so the destination server may communicate with the proxy instead of directly with the original client.",
                    "However, using a proxy does not automatically provide complete anonymity or privacy."
                ]
            }
        ]
    },

    {
        id: 12,
        name: "Load Balancer",
        image: "/images/devices/loadBalancer.jpg",

        sections: [
            {
                heading: "What Is a Load Balancer?",
                content: [
                    "A load balancer is a networking system that distributes incoming client traffic across multiple backend servers.",
                    "It prevents a single server from receiving all requests when several servers can provide the same service."
                ]
            },
            {
                heading: "Main Role of a Load Balancer",
                content: [
                    "The main role of a load balancer is to distribute traffic efficiently and improve application availability.",
                    "It can also remove unhealthy servers from service and direct new traffic toward healthy servers."
                ]
            },
            {
                heading: "How a Load Balancer Works",
                content: [
                    "A client sends a request toward the service address.",
                    "The load balancer receives the request.",
                    "It selects a suitable backend server according to its configured balancing method.",
                    "The request is then forwarded to that backend server."
                ]
            },
            {
                heading: "Which Layer Does It Work At?",
                content: [
                    "A load balancer can operate at different OSI layers depending on its design.",
                    "A Layer 4 load balancer uses transport information such as TCP or UDP connections and ports.",
                    "A Layer 7 load balancer can use application-level information such as HTTP requests, URLs or headers."
                ]
            },
            {
                heading: "Backend Servers",
                content: [
                    "Backend servers process the actual application requests.",
                    "Several servers can provide the same service behind a single load balancer.",
                    "The client normally does not need to know which individual backend server processed the request."
                ]
            },
            {
                heading: "Health Checks",
                content: [
                    "A load balancer can periodically check whether backend servers are available and healthy.",
                    "If a server fails its health check, the load balancer can stop sending new traffic to it.",
                    "Traffic can then continue toward healthy servers."
                ]
            },
            {
                heading: "Types of Load Balancing",
                content: [
                    "Round Robin - Distributes requests sequentially across the available backend servers.",
                    "Weighted Round Robin - Gives servers different weights so higher-capacity servers can receive more traffic.",
                    "Least Connections - Sends new connections toward the server currently handling fewer active connections.",
                    "IP Hash - Uses information derived from the client's IP address to select a backend server."
                ]
            },
            {
                heading: "Layer 4 Load Balancing",
                content: [
                    "Layer 4 load balancing makes decisions using transport-layer information such as TCP or UDP connections and port numbers.",
                    "It generally does not need to understand the full application request."
                ]
            },
            {
                heading: "Layer 7 Load Balancing",
                content: [
                    "Layer 7 load balancing can examine application-level information.",
                    "For example, an HTTP load balancer can route requests according to URLs, hostnames or other HTTP characteristics."
                ]
            },
            {
                heading: "Improving Availability",
                content: [
                    "A load balancer can help maintain service availability when multiple backend servers are available.",
                    "If one server becomes unavailable, healthy servers can continue handling incoming traffic."
                ]
            },
            {
                heading: "Horizontal Scaling",
                content: [
                    "Applications can be scaled horizontally by adding more backend server instances.",
                    "The load balancer distributes incoming traffic across the expanded server group."
                ]
            },
            {
                heading: "Types of Load Balancers",
                content: [
                    "Hardware Load Balancer - Uses dedicated physical equipment to distribute network or application traffic.",
                    "Software Load Balancer - Runs as software on a server or virtual machine.",
                    "Cloud Load Balancer - Is provided as a managed service by a cloud platform."
                ]
            }
        ]
    },

    {
        id: 13,
        name: "VPN",
        image: "/images/devices/vpn.jpg",

        sections: [
            {
                heading: "What Is a VPN?",
                content: [
                    "A Virtual Private Network creates a logical connection across an existing network such as the Internet.",
                    "It can provide protected communication between users, devices or private networks."
                ]
            },
            {
                heading: "Main Role of a VPN",
                content: [
                    "The main role of a VPN is to create a protected communication path between VPN endpoints.",
                    "Depending on the technology, the VPN can provide confidentiality, integrity, authentication and secure access to private resources."
                ]
            },
            {
                heading: "How a VPN Works",
                content: [
                    "The VPN endpoint establishes a secure connection with another VPN endpoint.",
                    "Traffic is encapsulated and protected according to the VPN technology.",
                    "The receiving endpoint processes the protected traffic and forwards it toward the intended destination."
                ]
            },
            {
                heading: "Which Layer Does It Work At?",
                content: [
                    "A VPN does not have one fixed OSI-layer placement because different VPN technologies operate differently.",
                    "IPsec VPNs primarily protect IP communication around the Network Layer.",
                    "Other VPN technologies can provide protection at higher layers."
                ]
            },
            {
                heading: "VPN Tunnel",
                content: [
                    "A VPN tunnel is a logical path through which protected traffic travels.",
                    "The original traffic can be encapsulated inside another protocol before being transported across the underlying network."
                ]
            },
            {
                heading: "Encryption",
                content: [
                    "VPN technologies commonly use encryption to protect information while it travels through an untrusted network.",
                    "The exact encryption and authentication mechanisms depend on the VPN technology."
                ]
            },
            {
                heading: "Types of VPNs",
                content: [
                    "Remote Access VPN - Allows an individual user or device to securely connect to resources in a private network.",
                    "Site-to-Site VPN - Connects two private networks through a protected tunnel across an external network.",
                    "IPsec VPN - Uses IPsec technologies to provide security for IP communication.",
                    "SSL/TLS VPN - Uses TLS-based secure communication to provide protected remote access or application connectivity."
                ]
            },
            {
                heading: "Remote Access VPN",
                content: [
                    "A remote-access VPN allows a user to connect to an organization's private network from another location.",
                    "After authentication, the user can access resources permitted by the organization's security policies."
                ]
            },
            {
                heading: "Site-to-Site VPN",
                content: [
                    "A site-to-site VPN connects two private networks across an external network.",
                    "VPN gateways at both locations establish the protected communication path."
                ]
            },
            {
                heading: "Authentication",
                content: [
                    "VPN systems can require users or devices to authenticate before access is granted.",
                    "Organizations can combine VPN authentication with centralized identity systems and multi-factor authentication."
                ]
            },
            {
                heading: "Full Tunnel and Split Tunnel",
                content: [
                    "Full Tunnel - Sends the configured traffic through the VPN connection rather than using the normal Internet path.",
                    "Split Tunnel - Sends selected traffic through the VPN while other traffic continues through the normal network connection."
                ]
            },
            {
                heading: "VPN and Proxy",
                content: [
                    "A VPN creates a protected logical connection between endpoints.",
                    "A proxy generally acts as an intermediary for particular requests or applications.",
                    "Although both can influence how traffic reaches a destination, they are different technologies."
                ]
            }
        ]
    },

    {
        id: 14,
        name: "IDPS",
        image: "/images/devices/idps.jpg",

        sections: [
            {
                heading: "What Is an IDPS?",
                content: [
                    "An Intrusion Detection and Prevention System monitors network or system activity for potentially malicious or suspicious behavior.",
                    "It can detect security events and, depending on its configuration, take action to prevent or disrupt them."
                ]
            },
            {
                heading: "Main Role of an IDPS",
                content: [
                    "The main role of an IDPS is to identify suspicious activity and help protect systems and networks from attacks.",
                    "It can generate alerts for security teams and, in prevention mode, take automated action against detected threats."
                ]
            },
            {
                heading: "How an IDPS Works",
                content: [
                    "An IDPS observes network traffic or activity on a host.",
                    "It analyzes the observed activity using detection techniques and security rules.",
                    "When suspicious behavior is identified, the system can generate an alert or take a configured prevention action."
                ]
            },
            {
                heading: "Which Layer Does It Work At?",
                content: [
                    "An IDPS can inspect activity across multiple OSI layers depending on its implementation.",
                    "Network-based systems can inspect information from lower network layers through application-level traffic.",
                    "Host-based systems can also monitor operating-system and application activity."
                ]
            },
            {
                heading: "IDS and IPS",
                content: [
                    "An IDS primarily detects suspicious activity and generates alerts.",
                    "An IPS can detect suspicious activity and actively take action to block or disrupt it.",
                    "An IDPS can combine both detection and prevention capabilities."
                ]
            },
            {
                heading: "Types of IDPS",
                content: [
                    "Network-Based IDPS - Monitors network traffic at selected points in the network to detect suspicious activity.",
                    "Host-Based IDPS - Monitors activity on an individual computer or server.",
                    "Wireless IDPS - Monitors wireless network activity for suspicious or unauthorized behavior.",
                    "Network Behavior Analysis System - Examines network behavior and traffic patterns to identify abnormal activity."
                ]
            },
            {
                heading: "Signature-Based Detection",
                content: [
                    "Signature-based detection compares observed activity with known patterns associated with attacks.",
                    "It is particularly effective for identifying known threats.",
                    "Detection signatures need to be updated as new threats are discovered."
                ]
            },
            {
                heading: "Anomaly Detection",
                content: [
                    "Anomaly detection looks for activity that differs significantly from established normal behavior.",
                    "Unusual behavior may indicate an attack or compromised system.",
                    "Legitimate unusual activity can also generate alerts, so appropriate tuning is important."
                ]
            },
            {
                heading: "Generating Alerts",
                content: [
                    "When suspicious activity is detected, an IDPS can generate a security alert.",
                    "The alert can contain information such as the source, destination, event type and reason for detection."
                ]
            },
            {
                heading: "Prevention Actions",
                content: [
                    "An IPS can actively respond to detected threats.",
                    "Depending on the system, actions can include dropping traffic, blocking sources or terminating connections."
                ]
            },
            {
                heading: "Security Operations",
                content: [
                    "IDPS alerts can be sent to centralized security monitoring systems.",
                    "Security analysts can correlate IDPS alerts with logs and other security information.",
                    "This information can support investigation and incident response."
                ]
            },
            {
                heading: "IDPS and Firewall",
                content: [
                    "A firewall primarily controls whether traffic is permitted according to configured rules.",
                    "An IDPS focuses on identifying suspicious or malicious behavior.",
                    "Using both provides complementary security controls."
                ]
            }
        ]
    }
];

export default devicesData;