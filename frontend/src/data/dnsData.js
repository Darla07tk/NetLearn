const dnsData = {
    title: "Domain Name System",

    intro: [
        "DNS translates human-readable domain names into IP addresses so devices can locate servers on a network.",
        "It uses a hierarchical and distributed system containing root, TLD, and authoritative DNS servers.",
        "DNS caching stores previously resolved information and helps reduce lookup time and repeated queries.",
    ],

    steps: [
        {
            title: "Enter Domain Name",
            text: "The user enters a domain name such as www.example.com in the web browser. The browser needs the corresponding IP address before it can contact the destination server.",
            active: ["browser"],
            packet: "www.example.com",
        },

        {
            title: "Check Local DNS Cache",
            text: "The browser checks its own DNS cache for a recently stored IP address. If a valid entry exists, the lookup can finish without contacting external DNS servers.",
            active: ["browser", "cache"],
            packet: "CACHE CHECK",
        },

        {
            title: "Send Query to DNS Resolver",
            text: "If the address is not available locally, the browser or operating system sends a DNS query to a DNS resolver. The resolver acts as an intermediary and performs the lookup.",
            active: ["browser", "resolver"],
            packet: "DNS QUERY",
        },

        {
            title: "Resolver Queries Root Server",
            text: "If the resolver does not already know the answer, it queries a root DNS server. The root server does not normally provide the final IP address. Instead, it directs the resolver toward the appropriate Top-Level Domain server.",
            active: ["resolver", "root"],
            packet: "ROOT QUERY",
        },

        {
            title: "Root Server Gives TLD Referral",
            text: "The root server identifies the relevant Top-Level Domain, such as .com, and provides the address of the TLD server responsible for that domain extension.",
            active: ["root", "resolver"],
            packet: "TLD REFERRAL",
        },

        {
            title: "Query the TLD Server",
            text: "The resolver contacts the TLD server for the requested domain. The TLD server identifies which authoritative DNS server contains the actual DNS records for the domain.",
            active: ["resolver", "tld"],
            packet: "TLD QUERY",
        },

        {
            title: "Authoritative Server Provides IP",
            text: "The resolver queries the authoritative DNS server. The authoritative server returns the DNS record containing the required IP address, such as an A record for an IPv4 address.",
            active: ["resolver", "authoritative"],
            packet: "IP ADDRESS",
        },

        {
            title: "Return Result to Browser",
            text: "The resolver sends the resolved IP address back to the browser. The result can also be stored in the DNS cache according to its TTL value.",
            active: ["resolver", "browser", "cache"],
            packet: "DNS RESPONSE",
        },

        {
            title: "Browser Connects to Server",
            text: "The browser now has the destination IP address and can use it to establish communication with the required web server.",
            active: ["browser", "server"],
            packet: "SERVER CONNECTION",
        },
    ],

    theory: {
        structure: [
            "DNS follows a hierarchical structure that makes domain name resolution scalable.",
            "The Root is the top level of the DNS hierarchy and is represented by a dot.",
            "Top-Level Domains include extensions such as .com, .org, .net, and country codes such as .in.",
            "Second-level domains are the main registered domain names, such as example in example.com.",
            "Subdomains such as www, mail, and blog can organize different services under a domain.",
        ],

        server: [
            "A DNS server stores DNS records and responds to DNS queries.",
            "DNS servers can perform recursive or authoritative functions.",
            "A recursive resolver obtains the required answer on behalf of the client.",
            "An authoritative server provides the DNS information for domains it is responsible for.",
        ],

        lookup: [
            "DNS lookup is the process of finding the IP address associated with a domain name.",
            "A DNS resolver starts the lookup and communicates with other DNS servers when required.",
            "A recursive query asks the resolver to obtain the complete answer for the client.",
            "An iterative query allows the resolver to receive referrals and continue the lookup step by step.",
            "A non-recursive query can be answered immediately when the information is already available.",
        ],

        caching: [
            "DNS caching temporarily stores previously resolved DNS information.",
            "Cached records reduce the time required for repeated lookups.",
            "Caching also reduces the number of queries sent to external DNS servers.",
            "The validity of a cached record is controlled by its TTL value.",
        ],

        ttl: [
            "TTL stands for Time-to-Live and specifies how long a DNS record can remain in a cache.",
            "The TTL value is defined by the authoritative DNS server.",
            "TTL is measured in seconds.",
            "When the TTL expires, the cached record must be refreshed through a new lookup.",
        ],

        records: [
            "A records map domain names to IPv4 addresses.",
            "CNAME records create aliases that point to another domain name.",
            "MX records identify the mail servers responsible for receiving email.",
            "TXT records store text information used for verification and email authentication.",
        ],

        reverse: [
            "Reverse DNS performs the opposite operation of normal DNS resolution.",
            "It maps an IP address back to a domain name.",
            "IPv4 reverse lookups use the in-addr.arpa domain.",
            "IPv6 reverse lookups use the ip6.arpa domain.",
            "PTR records are used to store reverse DNS mappings.",
        ],

        domainTypes: [
            "Generic Top-Level Domains include extensions such as .com, .org, and .net.",
            "Country Code Top-Level Domains represent countries or regions, such as .in, .us, .uk, and .jp.",
            "Reverse DNS provides IP-address-to-domain-name resolution.",
        ],
    },
};

export default dnsData;