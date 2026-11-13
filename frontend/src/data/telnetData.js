const telnetData = {
    title: "TELNET (Teletype Network)",

    intro: [
        "TELNET is an application-layer client/server protocol used to access virtual terminals of remote systems.",
        "It allows a local computer to connect to and operate a remote computer through a TCP/IP network.",
        "TELNET uses Network Virtual Terminal (NVT) characters to support communication between different terminal systems.",
    ],

    workflow: [
        {
            title: "Local Input",
            description:
                "When the user types on the local computer, the local operating system accepts the characters.",
            activeFrom: "local-computer",
            activeTo: "telnet-client",
            direction: "forward",
            keyword: "Input",
        },
        {
            title: "Client Handoff",
            description:
                "The local computer passes the entered characters to the TELNET client for processing.",
            activeFrom: "local-computer",
            activeTo: "telnet-client",
            direction: "forward",
            keyword: "Forward",
        },
        {
            title: "NVT Conversion",
            description:
                "The TELNET client converts the characters into the universal Network Virtual Terminal format.",
            activeFrom: "telnet-client",
            activeTo: "network-router",
            direction: "forward",
            keyword: "NVT",
        },
        {
            title: "Network Transfer",
            description:
                "The NVT characters are passed through the TCP/IP stack and travel across the network.",
            activeFrom: "network-router",
            activeTo: "telnet-server",
            direction: "forward",
            keyword: "Transmit",
        },
        {
            title: "Remote Reception",
            description:
                "The remote TCP/IP stack receives the NVT characters and passes them toward the remote system.",
            activeFrom: "telnet-server",
            activeTo: "remote-system",
            direction: "forward",
            keyword: "Receive",
        },
        {
            title: "Server Processing",
            description:
                "The TELNET server receives the characters and converts them into a form understood by the remote computer.",
            activeFrom: "telnet-server",
            activeTo: "remote-system",
            direction: "forward",
            keyword: "Convert",
        },
        {
            title: "Terminal Handling",
            description:
                "The remote operating system receives the characters through a pseudo-terminal driver.",
            activeFrom: "remote-system",
            activeTo: "telnet-server",
            direction: "backward",
            keyword: "Terminal",
        },
        {
            title: "Application Access",
            description:
                "The remote operating system passes the characters to the appropriate application program.",
            activeFrom: "telnet-server",
            activeTo: "remote-system",
            direction: "forward",
            keyword: "Execute",
        },
    ],

    theory: {
        history: [
            {
                title: "Origin",
                points: [
                    "TELNET originated in the late 1960s to provide remote terminal access to mainframes and minicomputers.",
                ],
            },
            {
                title: "Remote Access",
                points: [
                    "It allowed users to operate remote systems through a terminal or command-line interface.",
                ],
            },
            {
                title: "Security Concerns",
                points: [
                    "TELNET usage has decreased because it sends data as plain text, while SSH is preferred for secure remote management.",
                ],
            },
        ],

        logging: [
            {
                title: "Local Login",
                points: [
                    "A local login occurs when the user logs into the local system.",
                ],
            },
            {
                title: "Remote Login",
                points: [
                    "A remote login allows a user to connect to another computer and use services available on that remote system.",
                ],
            },
            {
                title: "Terminal Driver",
                points: [
                    "During local login, the terminal driver accepts keystrokes, passes them to the operating system, and the OS validates them.",
                ],
            },
        ],

        nvt: [
            {
                title: "Network Virtual Terminal",
                points: [
                    "NVT provides a common virtual terminal structure for communication between different types of real terminals.",
                ],
            },
            {
                title: "Character Conversion",
                points: [
                    "The TELNET client converts local characters into NVT characters before network transmission.",
                ],
            },
            {
                title: "Compatibility",
                points: [
                    "NVT helps different terminals and operating systems communicate using a common format.",
                ],
            },
        ],

        commands: [
            {
                title: "IAC",
                points: [
                    "TELNET commands use the Interpret As Command (IAC) prefix with decimal code 255.",
                ],
            },
            {
                title: "WILL / WON'T",
                points: [
                    "WILL offers or accepts enabling an option, while WON'T rejects or disables an option.",
                ],
            },
            {
                title: "DO / DON'T",
                points: [
                    "DO requests or approves enabling an option, while DON'T rejects or requests disabling it.",
                ],
            },
            {
                title: "Common Options",
                points: [
                    "TELNET options include Binary, Echo, Suppress Go Ahead, Status, Timing Mark, Line Width, Page Size, Terminal Type, Terminal Speed, and Line Mode.",
                ],
            },
        ],

        uses: [
            {
                title: "Remote Administration",
                points: [
                    "TELNET can be used for remote administration and management of systems.",
                ],
            },
            {
                title: "Network Diagnostics",
                points: [
                    "It can assist with network diagnostics and testing.",
                ],
            },
            {
                title: "Command-Line Access",
                points: [
                    "TELNET provides access to command-line interfaces on remote systems.",
                ],
            },
            {
                title: "Legacy Systems",
                points: [
                    "It can be used to interact with older or legacy systems.",
                ],
            },
            {
                title: "Automation",
                points: [
                    "TELNET can be used for automation and scripting tasks.",
                ],
            },
        ],

        advantages: [
            {
                title: "Remote Access",
                points: [
                    "TELNET provides access to a remote computer system.",
                ],
            },
            {
                title: "Simple Transmission",
                points: [
                    "It allows remote commands and data to be transmitted with relatively few complications.",
                ],
            },
            {
                title: "Time Saving",
                points: [
                    "Remote access can save time by allowing users to work with systems without being physically present.",
                ],
            },
            {
                title: "System Compatibility",
                points: [
                    "Different operating systems can communicate with older systems through TELNET.",
                ],
            },
        ],

        disadvantages: [
            {
                title: "Plain Text",
                points: [
                    "TELNET sends information in plain text, making communication insecure.",
                ],
            },
            {
                title: "Learning Difficulty",
                points: [
                    "Some aspects of TELNET can be difficult for beginners to understand.",
                ],
            },
            {
                title: "Limited Capabilities",
                points: [
                    "Some capabilities may not work properly when local and remote systems are not correctly interconnected.",
                ],
            },
        ],

        modes: [
            {
                title: "Default Mode",
                points: [
                    "The client echoes typed characters locally and sends the completed line to the server.",
                ],
            },
            {
                title: "Character Mode",
                points: [
                    "Each character typed by the user is immediately sent from the client to the server.",
                ],
            },
            {
                title: "Line Mode",
                points: [
                    "Line editing is handled by the client, which sends the completed line to the server.",
                ],
            },
        ],
    },
};

export default telnetData;