const wifiData = {
    title: "Wi-Fi Standards",

    intro: [
        "Wi-Fi is a wireless networking technology that allows devices to communicate without physical cables.",
        "Wi-Fi is standardized by the IEEE under the 802.11 family, which defines how wireless devices transmit and receive data.",
        "Wi-Fi generations differ mainly in their maximum data rate and the frequency bands they use, including 2.4 GHz, 5 GHz, and 6 GHz.",
        "It operates at Layer 1 (Physical) and Layer 2 (Data Link) of the OSI networking model.",
    ],

    pdu: "Wireless Signal",

    workflow: [
        {
            title: "The source device has data to transmit",
            text: "The source device has information that needs to be sent to another device through the wireless Wi-Fi network.",
            activeNodes: [
                "sourceLaptop",
            ],
            activeLines: [],
            activeArrow: null,
        },

        {
            title: "The Wi-Fi router provides the wireless link",
            text: "The Wi-Fi router provides wireless connectivity so nearby devices can communicate without using a physical network cable.",
            activeNodes: [
                "wifiRouter",
            ],
            activeLines: [],
            activeArrow: null,
        },

        {
            title: "The source transmits wirelessly",
            text: "The source device sends the data using a wireless radio signal over the selected Wi-Fi frequency band.",
            activeNodes: [
                "sourceLaptop",
                "wifiRouter",
            ],
            activeLines: [
                "source-router",
            ],
            activeArrow: {
                line: "source-router",
                direction: "forward",
            },
        },

        {
            title: "The router receives the wireless signal",
            text: "The Wi-Fi router receives the transmitted wireless signal and handles the communication toward the connected destination device.",
            activeNodes: [
                "sourceLaptop",
                "wifiRouter",
            ],
            activeLines: [
                "source-router",
            ],
            activeArrow: {
                line: "source-router",
                direction: "forward",
            },
        },

        {
            title: "The router transmits toward the destination",
            text: "The router sends the wireless communication onward through its Wi-Fi connection so the destination device can receive the information.",
            activeNodes: [
                "wifiRouter",
                "destinationTV",
            ],
            activeLines: [
                "router-destination",
            ],
            activeArrow: {
                line: "router-destination",
                direction: "forward",
            },
        },

        {
            title: "The destination receives the wireless signal",
            text: "The destination device receives the wireless transmission over the Wi-Fi link and obtains the information sent by the source.",
            activeNodes: [
                "destinationTV",
            ],
            activeLines: [
                "router-destination",
            ],
            activeArrow: {
                line: "router-destination",
                direction: "forward",
            },
        },

        {
            title: "The wireless communication is complete",
            text: "The information has reached the destination through the Wi-Fi network and the wireless transfer is complete.",
            activeNodes: [],
            activeLines: [],
            activeArrow: null,
        },
    ],

    theory: {
        "Wi-Fi Basics": [
            {
                heading: "Wireless Networking",
                points: [
                    "Wi-Fi allows devices to communicate over a network without requiring physical cables.",
                ],
            },
            {
                heading: "IEEE 802.11",
                points: [
                    "The IEEE 802.11 family defines standards for wireless device transmission and reception.",
                ],
            },
            {
                heading: "Data Rate",
                points: [
                    "Wi-Fi performance is commonly described using data rates measured in Mbps or Gbps.",
                ],
            },
            {
                heading: "Frequency Band",
                points: [
                    "The frequency band used by Wi-Fi affects transmission speed, range, interference, and available channels.",
                ],
            },
        ],

        "Wi-Fi Frequency Bands": [
            {
                heading: "2.4 GHz",
                points: [
                    "The 2.4 GHz band provides longer range and lower speeds but is more affected by interference.",
                ],
            },
            {
                heading: "5 GHz",
                points: [
                    "The 5 GHz band provides higher speeds and lower interference but has a shorter range than 2.4 GHz.",
                ],
            },
            {
                heading: "6 GHz",
                points: [
                    "The 6 GHz band used by Wi-Fi 6E and newer technologies provides very high speeds, very low latency, and more available channels.",
                ],
            },
            {
                heading: "Band Selection",
                points: [
                    "Different frequency bands can be used depending on the required speed, range, interference level, and network demand.",
                ],
            },
        ],

        "Wi-Fi Router Types": [
            {
                heading: "Single-Band Router",
                points: [
                    "A single-band router supports one Wi-Fi frequency band such as 2.4 GHz or 5 GHz.",
                ],
            },
            {
                heading: "Dual-Band Router",
                points: [
                    "A dual-band router supports both 2.4 GHz and 5 GHz for better flexibility in speed and interference conditions.",
                ],
            },
            {
                heading: "Tri-Band Router",
                points: [
                    "A tri-band router adds the 6 GHz band to provide more channels and support high-demand wireless devices.",
                ],
            },
        ],

        "Wi-Fi Standards": [
            {
                heading: "IEEE 802.11",
                points: [
                    "The original IEEE 802.11 standard was introduced in 1997 and used the 2.4 GHz band.",
                ],
            },
            {
                heading: "IEEE 802.11n",
                points: [
                    "IEEE 802.11n introduced support for both 2.4 GHz and 5 GHz and provided higher speeds than earlier standards.",
                ],
            },
            {
                heading: "IEEE 802.11ac",
                points: [
                    "IEEE 802.11ac operates on the 5 GHz band and provides significantly higher maximum data rates.",
                ],
            },
            {
                heading: "Wi-Fi 6",
                points: [
                    "IEEE 802.11ax, commonly called Wi-Fi 6, supports 2.4 GHz and 5 GHz with improved performance for modern networks.",
                ],
            },
            {
                heading: "Wi-Fi 6E",
                points: [
                    "Wi-Fi 6E extends Wi-Fi 6 into the 6 GHz band while continuing to support the newer high-speed wireless environment.",
                ],
            },
            {
                heading: "Wi-Fi 7",
                points: [
                    "IEEE 802.11be, known as Wi-Fi 7, supports 2.4 GHz, 5 GHz, and 6 GHz with higher maximum data rates.",
                ],
            },
        ],

        "New Naming Standards": [
            {
                heading: "Wi-Fi 4",
                points: [
                    "IEEE 802.11n is identified using the simpler consumer name Wi-Fi 4.",
                ],
            },
            {
                heading: "Wi-Fi 5",
                points: [
                    "IEEE 802.11ac is identified as Wi-Fi 5.",
                ],
            },
            {
                heading: "Wi-Fi 6",
                points: [
                    "IEEE 802.11ax is identified as Wi-Fi 6.",
                ],
            },
            {
                heading: "Wi-Fi 6E",
                points: [
                    "The 6 GHz extension of IEEE 802.11ax is identified as Wi-Fi 6E.",
                ],
            },
            {
                heading: "Wi-Fi 7",
                points: [
                    "IEEE 802.11be is identified as Wi-Fi 7.",
                ],
            },
        ],

        "Wi-Fi Performance": [
            {
                heading: "Speed",
                points: [
                    "Newer Wi-Fi generations provide higher maximum data rates for faster network performance.",
                ],
            },
            {
                heading: "Range",
                points: [
                    "Wi-Fi bands differ in coverage, with 2.4 GHz generally providing greater range than 5 GHz and 6 GHz.",
                ],
            },
            {
                heading: "Interference",
                points: [
                    "Different Wi-Fi bands experience different levels of interference, affecting wireless reliability and performance.",
                ],
            },
            {
                heading: "Channel Availability",
                points: [
                    "Higher-frequency bands such as 6 GHz provide more available channels for networks with many connected devices.",
                ],
            },
        ],

        "Applications": [
            {
                heading: "Web Browsing",
                points: [
                    "Wi-Fi supports everyday activities such as web browsing over a wireless network.",
                ],
            },
            {
                heading: "Streaming",
                points: [
                    "Higher-speed Wi-Fi bands support streaming and high-definition video applications.",
                ],
            },
            {
                heading: "Gaming",
                points: [
                    "Lower-latency Wi-Fi environments are suitable for gaming applications.",
                ],
            },
            {
                heading: "IoT Devices",
                points: [
                    "Wi-Fi can provide wireless connectivity for devices such as IoT equipment.",
                ],
            },
            {
                heading: "AR and VR",
                points: [
                    "The 6 GHz band is suited to high-demand applications such as AR and VR.",
                ],
            },
        ],
    },
};

export default wifiData;