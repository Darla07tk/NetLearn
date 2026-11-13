export const routingSwitchingTopics = [
    {
        id: "static-routing",
        title: "Static Routing",
        sections: [
            {
                heading: "Definition",
                points: [
                    "Static routing uses manually configured routes.",
                    "The administrator specifies the destination network.",
                    "A next-hop address or outgoing interface is configured.",
                    "The route remains in the routing table until it is changed or removed."
                ]
            },
            {
                heading: "Route Configuration",
                points: [
                    "A static route identifies a destination network.",
                    "The route contains a subnet mask or prefix length.",
                    "The next hop identifies where the packet should be sent.",
                    "The router installs the configured route in its routing table."
                ]
            },
            {
                heading: "Packet Forwarding",
                points: [
                    "The router receives a packet.",
                    "It examines the destination IP address.",
                    "It searches the routing table for the best matching route.",
                    "The packet is forwarded through the configured next hop."
                ]
            },
            {
                heading: "Default Route",
                points: [
                    "A default route is used when no more specific route matches.",
                    "It is commonly represented as 0.0.0.0/0 in IPv4.",
                    "It provides a path toward an upstream router.",
                    "It is useful when many unknown destinations share one exit path."
                ]
            },
            {
                heading: "Advantages",
                points: [
                    "Simple for small networks.",
                    "Predictable forwarding paths.",
                    "No routing protocol traffic is required.",
                    "Provides direct administrative control over routes."
                ]
            },
            {
                heading: "Limitations",
                points: [
                    "Routes must be configured manually.",
                    "Large networks require significant administration.",
                    "Topology changes require manual updates.",
                    "Alternative paths are not automatically discovered."
                ]
            }
        ]
    },

    {
        id: "dynamic-routing",
        title: "Dynamic Routing",
        sections: [
            {
                heading: "Definition",
                points: [
                    "Dynamic routing allows routers to learn routes automatically.",
                    "Routers exchange routing information using routing protocols.",
                    "Routes can change when the network topology changes.",
                    "The routing table is continuously maintained."
                ]
            },
            {
                heading: "Neighbor Discovery",
                points: [
                    "Routers identify neighboring routers according to the routing protocol.",
                    "Neighbor relationships allow routing information to be exchanged.",
                    "The routers maintain information about reachable networks.",
                    "Changes in neighboring relationships can affect routes."
                ]
            },
            {
                heading: "Route Calculation",
                points: [
                    "A routing protocol evaluates available paths.",
                    "The protocol uses its defined metric or calculation method.",
                    "The best available route is selected.",
                    "The selected route is installed in the routing table."
                ]
            },
            {
                heading: "Convergence",
                points: [
                    "Convergence occurs when routers update their routing information after a change.",
                    "Affected routes are recalculated.",
                    "Updated information propagates through the routing domain.",
                    "Routers eventually reach a consistent routing state."
                ]
            },
            {
                heading: "Common Protocols",
                points: [
                    "RIP uses hop count as its routing metric.",
                    "OSPF uses link-state information and cost.",
                    "EIGRP uses a composite metric.",
                    "BGP exchanges routing information between autonomous systems."
                ]
            },
            {
                heading: "Advantages and Limitations",
                points: [
                    "Routes can adapt to topology changes.",
                    "Large networks can be managed more efficiently.",
                    "Alternative paths can be discovered automatically.",
                    "Routing protocols require processing, memory, and control traffic."
                ]
            },

            {
                heading: "Route Advertisement",
                points: [
                    "Routers advertise networks they can reach.",
                    "Routing protocols distribute route information to neighboring routers.",
                    "Advertised routes contain information used for path selection.",
                    "Other routers use the received information to build their routing tables."
                ]
            },
            {
                heading: "Network Information Exchange",
                points: [
                    "Routers exchange information about reachable networks.",
                    "Neighboring routers share routing information through the protocol.",
                    "Received information is added to the router's routing knowledge.",
                    "The exchange allows routers to learn paths beyond directly connected networks."
                ]
            },
            {
                heading: "Metric Calculation",
                points: [
                    "Routing protocols evaluate available paths using metrics.",
                    "The metric represents the cost or preference of a route.",
                    "Different protocols use different metric calculation methods.",
                    "The calculated metric helps determine the preferred path."
                ]
            },
            {
                heading: "Best Path Selection",
                points: [
                    "The router compares available routes to the destination.",
                    "The routing protocol evaluates their metrics.",
                    "The preferred route is selected according to protocol rules.",
                    "The selected route is used for packet forwarding."
                ]
            },
            {
                heading: "Routing Table Update",
                points: [
                    "The selected route is installed or updated in the routing table.",
                    "Unusable routes can be removed or replaced.",
                    "Topology changes can trigger new routing calculations.",
                    "The routing table reflects the current learned network paths."
                ]
            }
        ]
    },

    {
        id: "vlan",
        title: "VLAN",
        sections: [
            {
                heading: "Definition",
                points: [
                    "A VLAN is a logical network created within a physical switched network.",
                    "Devices can be separated into logical groups.",
                    "Each VLAN forms a separate broadcast domain.",
                    "VLANs are identified by VLAN IDs."
                ]
            },
            {
                heading: "VLAN Membership",
                points: [
                    "Switch ports can be assigned to VLANs.",
                    "An access port normally belongs to one VLAN.",
                    "Devices connected to the port become members of that VLAN.",
                    "VLAN membership can logically separate users on the same switch."
                ]
            },
            {
                heading: "Access Ports",
                points: [
                    "Access ports connect end devices to a VLAN.",
                    "Frames received through an access port are associated with that VLAN.",
                    "A typical PC connection uses an access port.",
                    "The connected end device normally does not handle VLAN tagging."
                ]
            },
            {
                heading: "Trunk Links",
                points: [
                    "A trunk can carry multiple VLANs.",
                    "Trunks are commonly used between switches.",
                    "802.1Q tagging identifies VLAN membership across the trunk.",
                    "Only permitted VLANs should be carried across a trunk."
                ]
            },
            {
                heading: "Inter-VLAN Routing",
                points: [
                    "Different VLANs are separate broadcast domains.",
                    "Layer 2 switching alone does not route between VLANs.",
                    "A router or Layer 3 switch can provide inter-VLAN routing.",
                    "Routing allows devices in different VLANs to communicate."
                ]
            },
            {
                heading: "Benefits",
                points: [
                    "Reduces broadcast-domain size.",
                    "Provides logical network segmentation.",
                    "Allows flexible grouping of devices.",
                    "Can improve network organization and traffic isolation."
                ]
            }
        ]
    },

    {
        id: "mac-learning",
        title: "MAC Learning",
        sections: [
            {
                heading: "Definition",
                points: [
                    "MAC learning is the process by which a switch learns source MAC addresses.",
                    "The switch associates a MAC address with an incoming port.",
                    "The information is stored in the MAC address table.",
                    "The learned information helps future frame forwarding."
                ]
            },
            {
                heading: "Source MAC",
                points: [
                    "Every Ethernet frame contains a source MAC address.",
                    "The switch examines this address when the frame arrives.",
                    "The source address is associated with the incoming port.",
                    "Existing entries can be updated when the source is seen on another port."
                ]
            },
            {
                heading: "MAC Address Table",
                points: [
                    "The table maps MAC addresses to switch ports.",
                    "Entries identify where learned devices can be reached.",
                    "The table is used when making forwarding decisions.",
                    "Dynamically learned entries can age out."
                ]
            },
            {
                heading: "Unknown Destination",
                points: [
                    "A destination MAC may not yet exist in the table.",
                    "The switch then treats the frame as an unknown unicast.",
                    "The frame is flooded within the appropriate VLAN.",
                    "The destination can later become known through learned traffic."
                ]
            },
            {
                heading: "Aging",
                points: [
                    "Dynamic MAC entries are not kept indefinitely.",
                    "An unused entry can expire after its aging timer.",
                    "The switch can learn the address again when traffic returns.",
                    "Aging helps keep the MAC table current."
                ]
            },
            {
                heading: "Learning Cycle",
                points: [
                    "Frame arrives.",
                    "Source MAC is read.",
                    "Incoming port is recorded.",
                    "Destination MAC is checked.",
                    "The frame is forwarded or flooded.",
                    "The MAC table is continuously updated."
                ]
            }
        ]
    },

    {
        id: "frame-forwarding",
        title: "Frame Forwarding",
        sections: [
            {
                heading: "Definition",
                points: [
                    "Frame forwarding is the process of moving Ethernet frames through a switch.",
                    "The switch examines the destination MAC address.",
                    "The MAC address table is consulted.",
                    "The forwarding decision determines where the frame goes."
                ]
            },
            {
                heading: "Known Unicast",
                points: [
                    "The destination MAC address exists in the MAC table.",
                    "The switch identifies the destination port.",
                    "The frame is forwarded only through that port.",
                    "Unnecessary ports do not receive the frame."
                ]
            },
            {
                heading: "Unknown Unicast",
                points: [
                    "The destination MAC address is not in the MAC table.",
                    "The switch floods the frame within the VLAN.",
                    "The incoming port is excluded from the flooded copies.",
                    "The destination can become learned after responding."
                ]
            },
            {
                heading: "Broadcast",
                points: [
                    "A broadcast frame is addressed to all devices in the broadcast domain.",
                    "The switch floods it within the VLAN.",
                    "The incoming port is excluded.",
                    "Routers separate broadcast domains."
                ]
            },
            {
                heading: "Filtering",
                points: [
                    "A switch can prevent a frame from being forwarded to unnecessary ports.",
                    "A frame may be filtered when its destination is on the same incoming port.",
                    "VLAN membership also affects where frames can be forwarded.",
                    "Filtering reduces unnecessary traffic."
                ]
            },
            {
                heading: "Forwarding Decision",
                points: [
                    "Receive the frame.",
                    "Learn the source MAC address.",
                    "Read the destination MAC address.",
                    "Search the MAC table.",
                    "Forward, filter, or flood the frame."
                ]
            }
        ]
    }
];