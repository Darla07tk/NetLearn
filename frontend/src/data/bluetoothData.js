const bluetoothData = {
    title: "Bluetooth",

    intro: [
        "Bluetooth is a short-range wireless communication technology that allows electronic devices to exchange data using radio waves without physical cables.",
        "Bluetooth is designed for simple, low-power personal connectivity between nearby devices such as phones, laptops, headphones, and sensors.",
        "Bluetooth operates in the 2.4 GHz Industrial, Scientific and Medical (ISM) frequency band and supports wireless communication over short distances.",
    ],

    pdu: "Radio Signal",

    workflow: [
        {
            title: "Nearby Bluetooth devices are ready",
            text: "Nearby Bluetooth-enabled devices are within short-range communication distance and can participate in a personal wireless network.",
            activeNodes: [
                "smartphone",
                "headphones",
                "smartwatch",
            ],
            activeLines: [],
            activeArrows: [],
            activeArrow: null,
        },

        {
            title: "The smartphone forms a piconet",
            text: "The smartphone takes the master role and establishes a small Bluetooth piconet with the nearby headphones and smartwatch as slave devices.",
            activeNodes: [
                "smartphone",
                "headphones",
                "smartwatch",
            ],
            activeLines: [
                "phone-headphones",
                "phone-watch",
            ],
            activeArrows: [
                {
                    line: "phone-headphones",
                    direction: "forward",
                },
                {
                    line: "phone-watch",
                    direction: "forward",
                },
            ],
            activeArrow: null,
        },

        {
            title: "The master controls communication",
            text: "The master coordinates communication timing and controls when the connected slave devices can communicate within the piconet.",
            activeNodes: [
                "smartphone",
                "headphones",
                "smartwatch",
            ],
            activeLines: [
                "phone-headphones",
                "phone-watch",
            ],
            activeArrows: [
                {
                    line: "phone-headphones",
                    direction: "forward",
                },
                {
                    line: "phone-watch",
                    direction: "forward",
                },
            ],
            activeArrow: null,
        },

        {
            title: "Data is converted into a radio signal",
            text: "At the Bluetooth Radio layer, digital data is modulated into radio-frequency signals before being transmitted through the air.",
            activeNodes: [
                "smartphone",
            ],
            activeLines: [],
            activeArrows: [],
            activeArrow: null,
        },

        {
            title: "The signal travels over the 2.4 GHz band",
            text: "The Bluetooth radio signal travels wirelessly through the 2.4 GHz ISM frequency band toward the selected receiving device.",
            activeNodes: [
                "smartphone",
                "headphones",
            ],
            activeLines: [
                "phone-headphones",
            ],
            activeArrows: [
                {
                    line: "phone-headphones",
                    direction: "forward",
                },
            ],
            activeArrow: null,
        },

        {
            title: "Frequency hopping continues during communication",
            text: "Bluetooth uses frequency hopping to change communication frequencies and help reduce the effect of interference while the devices exchange information.",
            activeNodes: [
                "smartphone",
                "headphones",
            ],
            activeLines: [
                "phone-headphones",
            ],
            activeArrows: [
                {
                    line: "phone-headphones",
                    direction: "forward",
                },
                {
                    line: "phone-headphones",
                    direction: "reverse",
                },
            ],
            activeArrow: null,
        },

        {
            title: "The receiving device demodulates the signal",
            text: "The receiving Bluetooth radio converts the received radio-frequency signal back into digital information that the device can process.",
            activeNodes: [
                "headphones",
            ],
            activeLines: [
                "phone-headphones",
            ],
            activeArrows: [
                {
                    line: "phone-headphones",
                    direction: "forward",
                },
            ],
            activeArrow: null,
        },

        {
            title: "The slave responds when permitted",
            text: "The connected slave device can communicate back when the master allows it, providing controlled two-way communication within the piconet.",
            activeNodes: [
                "smartphone",
                "headphones",
            ],
            activeLines: [
                "phone-headphones",
            ],
            activeArrows: [
                {
                    line: "phone-headphones",
                    direction: "reverse",
                },
            ],
            activeArrow: null,
        },

        {
            title: "The Bluetooth communication is complete",
            text: "The devices have exchanged the required information through the short-range Bluetooth wireless link.",
            activeNodes: [],
            activeLines: [],
            activeArrows: [],
            activeArrow: null,
        },
    ],

    theory: {
        "Bluetooth Basics": [
            {
                heading: "Short-Range Wireless Communication",
                points: [
                    "Bluetooth allows nearby electronic devices to exchange data using radio waves without physical cables.",
                ],
            },
            {
                heading: "Personal Connectivity",
                points: [
                    "Bluetooth is designed for simple, low-power connections between nearby personal devices.",
                ],
            },
            {
                heading: "2.4 GHz ISM Band",
                points: [
                    "Bluetooth operates in the 2.4 GHz Industrial, Scientific and Medical frequency band.",
                ],
            },
        ],

        "Bluetooth Versions and Types": [
            {
                heading: "Bluetooth Classic",
                points: [
                    "Bluetooth Classic (BR/EDR) is designed for continuous and reliable data and audio communication between short-range devices.",
                ],
            },
            {
                heading: "Bluetooth Low Energy",
                points: [
                    "BLE is optimized for low-power devices that exchange small amounts of data intermittently.",
                ],
            },
            {
                heading: "Bluetooth Classic Uses",
                points: [
                    "Bluetooth Classic is commonly used for headphones, speakers, keyboards, and computers.",
                ],
            },
            {
                heading: "BLE Uses",
                points: [
                    "BLE is widely used in wearables, sensors, IoT devices, and smart-home equipment.",
                ],
            },
        ],

        "Bluetooth Architecture": [
            {
                heading: "Piconet",
                points: [
                    "A piconet is a basic Bluetooth network in which one device acts as master and up to seven devices can act as active slaves.",
                ],
            },
            {
                heading: "Master Coordination",
                points: [
                    "The master controls communication timing and coordinates data transmission within the piconet.",
                ],
            },
            {
                heading: "Slave Communication",
                points: [
                    "Slave devices communicate within the piconet when permitted by the master.",
                ],
            },
            {
                heading: "Frequency Hopping",
                points: [
                    "Bluetooth piconets use frequency hopping to reduce the effects of interference.",
                ],
            },
            {
                heading: "Scatternet",
                points: [
                    "A scatternet connects multiple piconets through devices that participate in more than one piconet.",
                ],
            },
        ],

        "Bluetooth Protocol Stack": [
            {
                heading: "Radio Layer",
                points: [
                    "The Radio layer defines the Bluetooth air interface, frequency operation, frequency hopping, transmit power, and radio modulation and demodulation.",
                ],
            },
            {
                heading: "Baseband Link Layer",
                points: [
                    "The Baseband Link layer manages device addressing, packet formats, timing, power control, and connection establishment within a piconet.",
                ],
            },
            {
                heading: "Link Manager Protocol",
                points: [
                    "LMP manages established Bluetooth links and handles functions such as authentication, encryption, and link control.",
                ],
            },
            {
                heading: "L2CAP",
                points: [
                    "L2CAP provides communication between upper and lower layers while supporting segmentation, reassembly, and multiplexing of logical connections.",
                ],
            },
            {
                heading: "Service Discovery Protocol",
                points: [
                    "SDP allows a Bluetooth device to discover the services and capabilities available on another device.",
                ],
            },
            {
                heading: "RFCOMM",
                points: [
                    "RFCOMM provides serial-style communication over Bluetooth and acts as a cable-replacement protocol.",
                ],
            },
            {
                heading: "OBEX",
                points: [
                    "OBEX is used to exchange objects such as files, images, and contacts between Bluetooth devices.",
                ],
            },
            {
                heading: "WAP",
                points: [
                    "WAP supports Internet and web-based services over Bluetooth, mainly in older mobile and embedded systems.",
                ],
            },
            {
                heading: "TCP",
                points: [
                    "The Bluetooth TCP layer described in the source supports telephony services such as call setup and call release.",
                ],
            },
        ],

        "Bluetooth Devices": [
            {
                heading: "In-Car Headset",
                points: [
                    "An in-car Bluetooth headset provides hands-free calling through the vehicle audio system.",
                ],
            },
            {
                heading: "Stereo Headset",
                points: [
                    "A Bluetooth stereo headset provides wireless audio streaming from devices such as smartphones and computers.",
                ],
            },
            {
                heading: "Bluetooth Webcam",
                points: [
                    "A Bluetooth-enabled webcam can connect wirelessly to a computer or smartphone for video communication.",
                ],
            },
            {
                heading: "Bluetooth Printer",
                points: [
                    "A Bluetooth printer can receive print data wirelessly from a phone or laptop without a physical cable.",
                ],
            },
            {
                heading: "Bluetooth GPS",
                points: [
                    "A Bluetooth GPS device can provide location and navigation information to a connected smartphone or vehicle system.",
                ],
            },
        ],

        "Applications": [
            {
                heading: "Wireless Peripherals",
                points: [
                    "Bluetooth connects wireless headsets, speakers, keyboards, and other peripherals.",
                ],
            },
            {
                heading: "Personal Area Networks",
                points: [
                    "Bluetooth supports Wireless Personal Area Networks for communication between nearby devices.",
                ],
            },
            {
                heading: "Photo and File Transfer",
                points: [
                    "Bluetooth can transfer photographs, music, videos, documents, and other information between supported devices.",
                ],
            },
            {
                heading: "Healthcare",
                points: [
                    "Bluetooth is used in healthcare for patient-monitoring devices and wearable sensors.",
                ],
            },
            {
                heading: "Sports and Fitness",
                points: [
                    "Bluetooth connects devices such as smartwatches, fitness trackers, and heart-rate monitors.",
                ],
            },
            {
                heading: "Military and Defense",
                points: [
                    "Bluetooth can be applied to short-range communication and equipment interconnection in military and defense environments.",
                ],
            },
        ],

        "Advantages": [
            {
                heading: "Low Cost",
                points: [
                    "Bluetooth provides an inexpensive method of short-range wireless communication.",
                ],
            },
            {
                heading: "Cable-Free Connectivity",
                points: [
                    "Bluetooth creates quick wireless links without requiring physical cables between nearby devices.",
                ],
            },
            {
                heading: "Obstacle Penetration",
                points: [
                    "Bluetooth radio signals can penetrate walls and other obstacles to a limited extent.",
                ],
            },
            {
                heading: "Voice and Data",
                points: [
                    "Bluetooth supports both voice communication and data transmission.",
                ],
            },
            {
                heading: "Low Power",
                points: [
                    "Bluetooth can consume low power, especially when Bluetooth Low Energy is used.",
                ],
            },
            {
                heading: "Wide Device Support",
                points: [
                    "Bluetooth is widely supported by smartphones, laptops, and IoT devices.",
                ],
            },
        ],

        "Disadvantages": [
            {
                heading: "Security Risks",
                points: [
                    "Bluetooth connections can be vulnerable when proper pairing and encryption are not used.",
                ],
            },
            {
                heading: "Lower Data Rates",
                points: [
                    "Bluetooth provides lower data transfer speeds than Wi-Fi for many applications.",
                ],
            },
            {
                heading: "Limited Range",
                points: [
                    "Bluetooth is designed for short-range communication and therefore covers less distance than many other wireless technologies.",
                ],
            },
            {
                heading: "2.4 GHz Interference",
                points: [
                    "Bluetooth communication can experience interference because it operates in the 2.4 GHz ISM band.",
                ],
            },
            {
                heading: "No Traditional Piconet Routing",
                points: [
                    "Traditional Bluetooth piconets do not provide routing between devices, although Bluetooth Mesh can support multi-hop routing in modern implementations.",
                ],
            },
        ],
    },
};

export default bluetoothData;