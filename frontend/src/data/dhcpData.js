const dhcpData = {

    title: "Dynamic Host Configuration Protocol",

    intro: [
        "DHCP automatically provides devices with the network configuration required to communicate on an IP network.",

        "It can assign an IP address, subnet mask, default gateway and DNS server information.",

        "DHCP uses a client-server model and provides addresses from a configured pool for a limited lease period.",
    ],


    theory: {

        components: [

            {
                title: "DHCP Client",
                points: [
                    "A DHCP client is a device that requests network configuration from a DHCP server.",
                ],
            },

            {
                title: "DHCP Server",
                points: [
                    "The DHCP server manages the DHCP service and assigns IP addresses and other network configuration to clients.",
                ],
            },

            {
                title: "DHCP Relay",
                points: [
                    "A DHCP relay forwards DHCP messages between clients and servers on different networks.",
                ],
            },

            {
                title: "IP Address Pool",
                points: [
                    "The address pool is the range of IP addresses available for DHCP allocation.",
                ],
            },

            {
                title: "Lease",
                points: [
                    "A lease defines how long a client can use an assigned IP address.",
                ],
            },

            {
                title: "DHCP Options",
                points: [
                    "DHCP options provide additional network configuration such as DNS servers, domain name and NTP servers.",
                ],
            },

            {
                title: "Default Gateway",
                points: [
                    "The default gateway is the router address provided to the client for communication with other networks.",
                ],
            },

            {
                title: "DNS Servers",
                points: [
                    "DHCP can provide DNS server addresses that convert domain names into IP addresses.",
                ],
            },

        ],


        networkSettings: [

            {
                title: "IP Address",
                points: [
                    "The IP address identifies the device on the IP network and can be automatically provided by DHCP.",
                ],
            },

            {
                title: "Subnet Mask",
                points: [
                    "The subnet mask identifies the network and host portions of an IP address.",
                ],
            },

            {
                title: "Default Gateway",
                points: [
                    "The default gateway is normally the IP address of the local router used to reach other networks.",
                ],
            },

            {
                title: "DNS Server",
                points: [
                    "The DNS server resolves domain names into IP addresses and can be provided automatically by DHCP.",
                ],
            },

            {
                title: "Lease Time",
                points: [
                    "Lease time determines how long the client can use the assigned IP address.",
                ],
            },

        ],


        leaseManagement: [

            {
                title: "Lease Renewal",
                points: [
                    "A DHCP client renews its lease before it expires to continue using the same IP configuration.",
                ],
            },

            {
                title: "DHCP Failover",
                points: [
                    "Two DHCP servers can share lease information so that one can continue providing DHCP service if the other fails.",
                ],
            },

            {
                title: "Dynamic DNS Updates",
                points: [
                    "DHCP can update DNS records when a client's IP address is assigned or changed.",
                ],
            },

            {
                title: "Audit Logging",
                points: [
                    "DHCP servers can record lease events to help with troubleshooting, monitoring and network audits.",
                ],
            },

        ],


        otherMessages: [

            {
                title: "DHCP NAK",
                points: [
                    "DHCP NAK is sent by the server when the requested IP configuration cannot be used, causing the client to restart the DHCP process.",
                ],
            },

            {
                title: "DHCP Decline",
                points: [
                    "DHCP Decline is sent by the client when it detects that the offered IP address is already in use.",
                ],
            },

            {
                title: "DHCP Release",
                points: [
                    "DHCP Release allows a client to return its assigned IP address before the lease expires.",
                ],
            },

            {
                title: "DHCP Inform",
                points: [
                    "DHCP Inform allows a client with a manually configured IP address to request additional network parameters.",
                ],
            },

        ],


        security: [

            {
                title: "DHCP Starvation",
                points: [
                    "An attacker sends many DHCP requests using spoofed MAC addresses to consume the available IP addresses.",
                ],
            },

            {
                title: "Rogue DHCP Server",
                points: [
                    "A rogue DHCP server is an unauthorized server that can provide clients with incorrect or malicious IP configuration.",
                ],
            },

            {
                title: "Man-in-the-Middle",
                points: [
                    "A rogue DHCP server can provide an attacker-controlled gateway or DNS server to redirect and intercept network traffic.",
                ],
            },

            {
                title: "DNS Misuse",
                points: [
                    "Malicious DHCP options can provide unauthorized DNS server addresses that redirect users to unwanted or phishing websites.",
                ],
            },

            {
                title: "Protection Against DHCP Attacks",
                points: [
                    "DHCP Snooping, Port Security, rate limiting, filtering and monitoring can help protect against DHCP attacks.",
                ],
            },

        ],


        packetFormat: [

            {
                title: "Hardware Length",
                points: [
                    "This field specifies the length of the client hardware address, normally 6 bytes for Ethernet.",
                ],
            },

            {
                title: "Hop Count",
                points: [
                    "Hop Count indicates the number of network hops a DHCP packet can travel through relay agents.",
                ],
            },

            {
                title: "Transaction ID",
                points: [
                    "The Transaction ID is a 32-bit value used to match DHCP requests with their corresponding replies.",
                ],
            },

            {
                title: "Seconds Elapsed",
                points: [
                    "This field records the time elapsed since the client started the DHCP process.",
                ],
            },

            {
                title: "Flags",
                points: [
                    "The Flags field contains control information and can indicate that the client requires a broadcast reply.",
                ],
            },

            {
                title: "Client IP Address",
                points: [
                    "This field contains the client's current IP address and is normally zero when no address is available.",
                ],
            },

            {
                title: "Your IP Address",
                points: [
                    "This field contains the IP address assigned to the client by the DHCP server.",
                ],
            },

            {
                title: "Server IP Address",
                points: [
                    "This field contains the IP address of the DHCP server involved in the communication.",
                ],
            },

            {
                title: "Gateway / Relay IP",
                points: [
                    "This field contains the IP address of the DHCP relay agent when a relay is involved.",
                ],
            },

            {
                title: "Client Hardware Address",
                points: [
                    "This field contains the hardware address, normally the MAC address, of the DHCP client.",
                ],
            },

            {
                title: "Server Name",
                points: [
                    "This optional field can contain the hostname of the DHCP server.",
                ],
            },

            {
                title: "Boot Filename",
                points: [
                    "This field can contain the pathname of a boot file used by diskless clients during network booting.",
                ],
            },

            {
                title: "DHCP Options",
                points: [
                    "The Options field contains additional configuration such as subnet mask, gateway, DNS server and lease time.",
                ],
            },

        ],

    },

};

export default dhcpData;