const dslData = {
    title: "Digital Subscriber Line (DSL)",

    intro: [
        "DSL is a communication technology that provides Internet access over existing copper telephone lines.",
        "DSL uses the telephone line for digital data while allowing telephone and Internet services to operate at the same time.",
        "A DSL connection uses equipment such as a splitter, DSL modem, and DSLAM to deliver broadband connectivity through the telephone network.",
    ],

    pdu: "DSL Signal",

    workflow: [
        {
            title: "The home devices are connected",
            text: "The computer and telephone use the same existing telephone infrastructure, with the DSL modem and splitter providing the required connection arrangement.",
            activeNodes: [
                "computer",
                "dslModem",
                "splitter",
                "telephone",
            ],
            activeLines: [
                "computer-modem",
                "modem-splitter",
                "splitter-telephone",
            ],
            activeArrow: null,
        },

        {
            title: "Internet data reaches the DSL modem",
            text: "The computer sends Internet data to the DSL modem, which prepares the data for transmission through the DSL connection.",
            activeNodes: [
                "computer",
                "dslModem",
            ],
            activeLines: [
                "computer-modem",
            ],
            activeArrow: {
                line: "computer-modem",
                direction: "forward",
            },
        },

        {
            title: "The signal reaches the splitter",
            text: "The DSL modem sends the communication toward the splitter, where the telephone-line frequencies are separated for their different services.",
            activeNodes: [
                "dslModem",
                "splitter",
            ],
            activeLines: [
                "modem-splitter",
            ],
            activeArrow: {
                line: "modem-splitter",
                direction: "forward",
            },
        },

        {
            title: "The splitter separates voice and data",
            text: "The splitter separates the voice and digital data frequencies so the telephone service and DSL Internet service can use the same telephone line without interfering with each other.",
            activeNodes: [
                "splitter",
                "telephone",
                "dslModem",
                "dslAM",
            ],
            activeLines: [
                "splitter-telephone",
                "splitter-dslam",
            ],
            activeArrows: [
                {
                    line: "splitter-telephone",
                    direction: "forward",
                },
                {
                    line: "splitter-dslam",
                    direction: "forward",
                },
            ],
        },

        {
            title: "DSL data travels through the copper line",
            text: "The digital DSL signal travels from the splitter through the copper telephone line toward the service provider's DSLAM.",
            activeNodes: [
                "splitter",
                "dslAM",
            ],
            activeLines: [
                "splitter-dslam",
            ],
            activeArrow: {
                line: "splitter-dslam",
                direction: "forward",
            },
        },

        {
            title: "The DSLAM receives the connection",
            text: "The DSLAM at the telephone company's central office receives the DSL connection and provides the link toward the provider's network.",
            activeNodes: [
                "dslAM",
                "ispNetwork",
            ],
            activeLines: [
                "dslam-isp",
            ],
            activeArrow: {
                line: "dslam-isp",
                direction: "forward",
            },
        },

        {
            title: "Internet data returns to the home",
            text: "Data coming back from the provider travels through the DSLAM and copper telephone line toward the home DSL equipment.",
            activeNodes: [
                "ispNetwork",
                "dslAM",
                "splitter",
                "dslModem",
            ],
            activeLines: [
                "dslam-isp",
                "splitter-dslam",
                "modem-splitter",
            ],
            activeArrows: [
                {
                    line: "dslam-isp",
                    direction: "reverse",
                },
                {
                    line: "splitter-dslam",
                    direction: "reverse",
                },
                {
                    line: "modem-splitter",
                    direction: "reverse",
                },
            ],
        },

        {
            title: "Telephone and Internet work simultaneously",
            text: "The splitter keeps the voice and DSL frequencies separate, allowing a telephone call and Internet communication to use the same telephone line at the same time.",
            activeNodes: [
                "telephone",
                "splitter",
                "dslModem",
                "computer",
            ],
            activeLines: [
                "splitter-telephone",
                "modem-splitter",
                "computer-modem",
            ],
            activeArrows: [
                {
                    line: "splitter-telephone",
                    direction: "forward",
                },
                {
                    line: "computer-modem",
                    direction: "reverse",
                },
            ],
        },

        {
            title: "The DSL communication is complete",
            text: "The DSL connection remains available through the existing telephone infrastructure, providing Internet access while the voice and data services remain separated.",
            activeNodes: [],
            activeLines: [],
            activeArrows: [],
            activeArrow: null,
        },
    ],

    theory: {
        "DSL Basics": [
            {
                heading: "Communication Medium",
                points: [
                    "DSL provides digital Internet communication over existing copper telephone lines.",
                ],
            },
            {
                heading: "Broadband Access",
                points: [
                    "DSL is a broadband technology used by Internet service providers to deliver high-speed Internet access.",
                ],
            },
            {
                heading: "Existing Infrastructure",
                points: [
                    "DSL can use an existing telephone line instead of requiring completely new wiring.",
                ],
            },
        ],

        "How DSL Works": [
            {
                heading: "Telephone Line",
                points: [
                    "The copper telephone line carries the signals used by the DSL connection.",
                ],
            },
            {
                heading: "Splitter",
                points: [
                    "The splitter separates voice and digital frequencies so telephone and Internet services can operate together.",
                ],
            },
            {
                heading: "DSL Modem",
                points: [
                    "The DSL modem provides the equipment needed to connect the user's devices to the DSL service.",
                ],
            },
            {
                heading: "DSLAM",
                points: [
                    "The DSLAM is installed at the telephone company's central office and connects DSL subscribers toward the provider's network.",
                ],
            },
            {
                heading: "Simultaneous Services",
                points: [
                    "Voice calls and Internet communication can use the same telephone line at the same time because they use different frequencies.",
                ],
            },
        ],

        "Types of DSL": [
            {
                heading: "Symmetric DSL",
                points: [
                    "SDSL provides approximately equal upstream and downstream speeds and is suitable for uses that need balanced upload and download performance.",
                ],
            },
            {
                heading: "Asymmetric DSL",
                points: [
                    "ADSL provides a wider frequency range for downstream traffic, making downloads faster than uploads.",
                ],
            },
            {
                heading: "VDSL",
                points: [
                    "VDSL is another DSL type designed to provide higher data rates over suitable telephone-line connections.",
                ],
            },
        ],

        "DSL Features": [
            {
                heading: "High Speed",
                points: [
                    "DSL provides broadband speeds that are much faster than traditional dial-up connections.",
                ],
            },
            {
                heading: "Dedicated Connection",
                points: [
                    "DSL provides a dedicated connection that remains available without requiring users to dial in each time.",
                ],
            },
            {
                heading: "Availability",
                points: [
                    "DSL can be available in areas where suitable telephone-line infrastructure already exists.",
                ],
            },
            {
                heading: "Distance Effect",
                points: [
                    "DSL speed and performance decrease as the distance from the service provider's central office increases.",
                ],
            },
            {
                heading: "Multiple Devices",
                points: [
                    "A DSL connection can provide Internet access for multiple connected devices through the user's network equipment.",
                ],
            },
        ],

        "Benefits": [
            {
                heading: "No New Telephone Wiring",
                points: [
                    "DSL can use existing telephone wiring, reducing the need for expensive new cabling.",
                ],
            },
            {
                heading: "Cost-Effective Access",
                points: [
                    "DSL provides a relatively affordable method of obtaining broadband Internet access.",
                ],
            },
            {
                heading: "Simultaneous Use",
                points: [
                    "Users can make telephone calls while using the Internet because voice and data use different frequencies.",
                ],
            },
            {
                heading: "Reliable Connection",
                points: [
                    "DSL provides an always-available connection without requiring manual dial-up access.",
                ],
            },
            {
                heading: "Easy Setup",
                points: [
                    "A basic DSL installation requires a telephone line and DSL modem, making the setup comparatively straightforward.",
                ],
            },
            {
                heading: "Multiple Devices",
                points: [
                    "DSL connectivity can support multiple Internet-connected devices within a user's network.",
                ],
            },
        ],

        "DSL Limitations": [
            {
                heading: "Distance Limitation",
                points: [
                    "DSL service works only within a limited physical distance from the service provider's central office.",
                ],
            },
            {
                heading: "Speed Variation",
                points: [
                    "Connection speed can vary depending on line quality, distance, and network conditions.",
                ],
            },
            {
                heading: "Limited Bandwidth",
                points: [
                    "DSL provides less bandwidth than some newer high-speed Internet technologies, making it less suitable for very heavy traffic.",
                ],
            },
            {
                heading: "Copper Line Dependence",
                points: [
                    "DSL depends on copper telephone lines, which can be affected by interference and infrastructure quality.",
                ],
            },
            {
                heading: "Service Availability",
                points: [
                    "DSL cannot be provided in areas where suitable local telephone infrastructure is unavailable.",
                ],
            },
        ],

        "DSL Security and Reliability": [
            {
                heading: "Always-On Connection",
                points: [
                    "DSL remains connected continuously instead of requiring a dial-up connection for each Internet session.",
                ],
            },
            {
                heading: "Security",
                points: [
                    "DSL can provide a more secure broadband connection than traditional dial-up, but users still need appropriate security measures.",
                ],
            },
            {
                heading: "Connection Stability",
                points: [
                    "DSL can provide stable performance when the telephone line quality and service distance are suitable.",
                ],
            },
        ],

        "Applications": [
            {
                heading: "Home Internet",
                points: [
                    "DSL can provide broadband Internet access for households using computers and other connected devices.",
                ],
            },
            {
                heading: "Small Organizations",
                points: [
                    "DSL can be suitable for small organizations with moderate Internet connectivity requirements.",
                ],
            },
            {
                heading: "Remote Areas",
                points: [
                    "DSL can provide an Internet option in areas where telephone infrastructure exists but newer broadband technologies are unavailable.",
                ],
            },
        ],
    },
};

export default dslData;