const protocolLayers = [
    {
        id: "layer-7",
        layer: "Layer 7",
        name: "Application",
        folder: "application",
        protocols: [
            {
                id: "http",
                name: "HTTP",
            },
            {
                id: "https",
                name: "HTTPS",
            },
            {
                id: "dns",
                name: "DNS",
            },
            {
                id: "dhcp",
                name: "DHCP",
            },
            {
                id: "smtp",
                name: "SMTP",
            },
            {
                id: "ftp",
                name: "FTP",
            },
            {
                id: "pop3",
                name: "POP3",
            },
            {
                id: "imap",
                name: "IMAP",
            },
            {
                id: "telnet",
                name: "Telnet",
            },
            {
                id: "snmp",
                name: "SNMP",
            },
        ],
    },

    {
        id: "layer-6",
        layer: "Layer 6",
        name: "Presentation",
        folder: "presentation",
        protocols: [
            {
                id: "tls",
                name: "TLS",
            },
            {
                id: "mime",
                name: "MIME",
            },
        ],
    },

    {
        id: "layer-5",
        layer: "Layer 5",
        name: "Session",
        folder: "session",
        protocols: [
            {
                id: "rpc",
                name: "RPC",
            },
            {
                id: "netbios",
                name: "NetBIOS",
            },
        ],
    },

    {
        id: "layer-4",
        layer: "Layer 4",
        name: "Transport",
        folder: "transport",
        protocols: [
            {
                id: "tcp",
                name: "TCP",
            },
            {
                id: "udp",
                name: "UDP",
            },
        ],
    },

    {
        id: "layer-3",
        layer: "Layer 3",
        name: "Network",
        folder: "network",
        protocols: [
            {
                id: "ip",
                name: "IP",
            },
            {
                id: "icmp",
                name: "ICMP",
            },
            {
                id: "ospf",
                name: "OSPF",
            },
            {
                id: "rip",
                name: "RIP",
            },
        ],
    },

    {
        id: "layer-2",
        layer: "Layer 2",
        name: "Data Link",
        folder: "data-link",
        protocols: [
            {
                id: "ethernet",
                name: "Ethernet",
            },
            {
                id: "arp",
                name: "ARP",
            },
            {
                id: "ppp",
                name: "PPP",
            },
            {
                id: "stp",
                name: "STP",
            },
        ],
    },

    {
        id: "layer-1",
        layer: "Layer 1",
        name: "Physical",
        folder: "physical",
        protocols: [
            {
                id: "wifi",
                name: "Wi-Fi",
            },
            {
                id: "dsl",
                name: "DSL",
            },
             {
                id: "bluetooth",
                name: "Bluetooth",
            },
        ],
    },
];

export default protocolLayers;