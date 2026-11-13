const snmpData = {
    title: "Simple Network Management Protocol (SNMP)",

    intro: [
        "SNMP is an application-layer protocol used to monitor and manage network devices over IP networks.",
        "It allows a management system to collect device information, detect faults, and perform remote configuration.",
        "SNMP commonly uses UDP port 161 for requests and port 162 for notifications such as traps.",
    ],

    workflow: [
        {
            title: "GetRequest",
            text: "The SNMP Manager sends a GetRequest through the network to the Agent to obtain a specific value from the managed device.",
            keyword: "GetRequest",
            direction: "forward",
            activeNodes: ["manager", "network", "agent"],
        },
        {
            title: "Read MIB Value",
            text: "The Agent accesses the required information from the Management Information Base (MIB) maintained for the managed device.",
            keyword: "MIB Read",
            direction: "forward",
            activeNodes: ["agent", "mib"],
        },
        {
            title: "GetNextRequest",
            text: "The Manager sends a GetNextRequest through the Agent to retrieve the next available variable, commonly while moving through MIB table entries.",
            keyword: "GetNextRequest",
            direction: "forward",
            activeNodes: ["manager", "network", "agent", "mib"],
        },
        {
            title: "SetRequest",
            text: "The Manager sends a SetRequest through the network asking the Agent to change the value of a managed object.",
            keyword: "SetRequest",
            direction: "forward",
            activeNodes: ["manager", "network", "agent", "mib"],
        },
        {
            title: "Response",
            text: "The Agent returns a Response to the Manager containing the requested value or confirming that the SetRequest was successfully completed.",
            keyword: "Response",
            direction: "reverse",
            activeNodes: ["agent", "network", "manager"],
        },
        {
            title: "Trap",
            text: "When a network fault or important event occurs, the Agent independently sends a Trap through the network to notify the Manager.",
            keyword: "Trap",
            direction: "reverse",
            activeNodes: ["agent", "network", "manager"],
        },
        {
            title: "InformRequest",
            text: "The Agent sends an InformRequest to the Manager as a notification that also requires acknowledgement from the receiving Manager.",
            keyword: "InformRequest",
            direction: "reverse",
            activeNodes: ["agent", "network", "manager"],
        },
    ],

    theory: {
        architecture: [
            {
                title: "SNMP Manager",
                points: [
                    "The SNMP Manager is the central system used to monitor and manage network devices.",
                ],
            },
            {
                title: "SNMP Agent",
                points: [
                    "The SNMP Agent is software running on a managed device that maintains its management information.",
                ],
            },
            {
                title: "Management Information Base",
                points: [
                    "The MIB stores information about managed resources in a structured hierarchical form.",
                ],
            },
        ],

        messages: [
            {
                title: "GetRequest",
                points: [
                    "The Manager uses GetRequest to obtain a particular value from an SNMP Agent.",
                ],
            },
            {
                title: "GetNextRequest",
                points: [
                    "GetNextRequest is used to retrieve the next value, especially while navigating table entries.",
                ],
            },
            {
                title: "SetRequest",
                points: [
                    "SetRequest allows the Manager to change the value of an object maintained by the Agent.",
                ],
            },
            {
                title: "Response",
                points: [
                    "A Response message returns the requested value or confirms a successful Set operation.",
                ],
            },
            {
                title: "Trap",
                points: [
                    "A Trap is sent by an Agent without a prior request when a network fault or event occurs.",
                ],
            },
            {
                title: "InformRequest",
                points: [
                    "InformRequest provides a notification similar to a Trap while also supporting acknowledgement.",
                ],
            },
        ],

        security: [
            {
                title: "noAuthNoPriv",
                points: [
                    "This level uses a community string for authentication and provides no privacy encryption.",
                ],
            },
            {
                title: "authNoPriv",
                points: [
                    "This level provides authentication while communication remains without privacy encryption.",
                ],
            },
            {
                title: "authPriv",
                points: [
                    "This level provides authentication together with privacy protection for SNMP communication.",
                ],
            },
        ],

        versions: [
            {
                title: "SNMPv1",
                points: [
                    "SNMPv1 is the original version and uses community strings for authentication over UDP.",
                ],
            },
            {
                title: "SNMPv2c",
                points: [
                    "SNMPv2c improves SNMP operations while continuing to use the community-based security model.",
                ],
            },
            {
                title: "SNMPv3",
                points: [
                    "SNMPv3 provides stronger authentication and privacy features for secure network management.",
                ],
            },
        ],

        characteristics: [
            {
                title: "Network Monitoring",
                points: [
                    "SNMP is used to observe the status and performance of network devices.",
                ],
            },
            {
                title: "Fault Detection",
                points: [
                    "SNMP can help identify network faults and important device events.",
                ],
            },
            {
                title: "Remote Configuration",
                points: [
                    "SNMP can be used to modify supported settings on remote network devices.",
                ],
            },
            {
                title: "Standardized Management",
                points: [
                    "SNMP provides a common method for collecting information from devices from different manufacturers.",
                ],
            },
        ],

        advantages: [
            {
                title: "Easy Implementation",
                points: [
                    "SNMP is relatively simple to deploy and configure in network environments.",
                ],
            },
            {
                title: "Wide Agent Support",
                points: [
                    "SNMP agents are available for many types of network devices.",
                ],
            },
            {
                title: "Low Agent Overhead",
                points: [
                    "The processing requirements of an SNMP agent are generally small.",
                ],
            },
            {
                title: "Extensible",
                points: [
                    "SNMP can be extended through additional management information and MIB definitions.",
                ],
            },
        ],

        limitations: [
            {
                title: "Scalability",
                points: [
                    "Large networks can become difficult to manage efficiently using extensive polling.",
                ],
            },
            {
                title: "Limited Data Model",
                points: [
                    "SNMP does not provide an object-oriented representation of managed information.",
                ],
            },
            {
                title: "Control Definition",
                points: [
                    "SNMP does not provide a universal standard for every device control operation.",
                ],
            },
            {
                title: "Communication Overhead",
                points: [
                    "Frequent polling can generate additional communication traffic.",
                ],
            },
        ],
    },
};

export default snmpData;