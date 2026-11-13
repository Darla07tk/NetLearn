const imapData = {
    title: "Internet Message Access Protocol (IMAP)",

    intro: [
        "IMAP is an application-layer protocol used to access and manage emails stored on a mail server.",
        "It keeps emails on the server and synchronizes changes such as reading, deleting, and organizing messages across devices.",
        "The current version of IMAP is IMAP4, and it commonly uses TCP port 143 or secure port 993.",
    ],

    workflow: [
        {
            title: "Client Connection",
            description:
                "The email client connects to the IMAP server when the user signs in to the email account.",
            activeFrom: "imap-client",
            activeTo: "router",
            direction: "forward",
            keyword: "Connect",
        },
        {
            title: "Port Selection",
            description:
                "The connection uses port 143 for normal IMAP communication or port 993 for secure SSL/TLS communication.",
            activeFrom: "router",
            activeTo: "imap-server",
            direction: "forward",
            keyword: "Port",
        },
        {
            title: "Header Retrieval",
            description:
                "The IMAP server provides the email headers first, allowing the client to display message information without downloading the full content.",
            activeFrom: "imap-server",
            activeTo: "router",
            direction: "backward",
            keyword: "Headers",
        },
        {
            title: "On-Demand Download",
            description:
                "When the user selects an email or attachment, the required message content is retrieved from the IMAP server.",
            activeFrom: "imap-server",
            activeTo: "router",
            direction: "backward",
            keyword: "Retrieve",
        },
        {
            title: "Server Storage",
            description:
                "The emails remain stored on the server until the user explicitly deletes them.",
            activeFrom: "imap-server",
            activeTo: null,
            direction: null,
            keyword: "Store",
        },
    ],

    theory: {
        features: [
            {
                title: "Multi-Mailbox Management",
                points: [
                    "IMAP lets users arrange emails into different mailboxes and folders.",
                ],
            },
            {
                title: "Message Flags",
                points: [
                    "Message flags help identify states such as read and unread emails.",
                ],
            },
            {
                title: "Selective Email Retrieval",
                points: [
                    "The client can retrieve headers first and download the complete message only when needed.",
                ],
            },
            {
                title: "Efficient Media Management",
                points: [
                    "Attachments and other media can be retrieved when the user chooses to open them.",
                ],
            },
        ],

        ports: [
            {
                title: "Port 143",
                points: [
                    "Port 143 is the default port for regular IMAP communication without encryption.",
                ],
            },
            {
                title: "Port 993",
                points: [
                    "Port 993 provides encrypted IMAP communication using SSL/TLS.",
                ],
            },
            {
                title: "TCP/IP",
                points: [
                    "IMAP operates over TCP/IP networks to provide reliable client-server communication.",
                ],
            },
        ],

        architecture: [
            {
                title: "IMAP Client",
                points: [
                    "The IMAP client is an email application used to access and manage messages from the server.",
                ],
            },
            {
                title: "IMAP Server",
                points: [
                    "The IMAP server stores emails and manages the user's mailboxes, folders, and messages.",
                ],
            },
            {
                title: "Network Protocols",
                points: [
                    "TCP/IP provides the network communication between the email client and remote IMAP server.",
                ],
            },
        ],

        operation: [
            {
                title: "Server Connection",
                points: [
                    "The email client connects to the IMAP server through the appropriate port when the user signs in.",
                ],
            },
            {
                title: "Header Display",
                points: [
                    "The client initially receives email headers instead of downloading every complete message.",
                ],
            },
            {
                title: "On-Demand Download",
                points: [
                    "The selected email content and attachments are retrieved only when the user requests them.",
                ],
            },
            {
                title: "Server Storage",
                points: [
                    "Emails stay on the IMAP server until the user specifically chooses to delete them.",
                ],
            },
        ],
    },
};

export default imapData;