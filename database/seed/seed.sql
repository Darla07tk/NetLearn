USE netlearn;

-- Default tier required when quiz attempts are saved.
INSERT INTO tiers (
    name,
    tier_number,
    description
)
VALUES (
    'Beginner',
    1,
    'Default tier for saved quiz attempts.'
)
ON DUPLICATE KEY UPDATE
    name = VALUES(name);

INSERT INTO questions (
    question_text,
    optiona,
    optionb,
    optionc,
    optiond,
    correct_answer,
    module_id
)
VALUES
(
    'A device is connected to a network and can send, receive, or process data. What is this device commonly called?',
    'Protocol',
    'Node',
    'Medium',
    'Packet',
    'B',
    1
),
(
    'A college wants several computers to use the same printer and shared storage. Which networking benefit directly supports this requirement?',
    'Signal conversion',
    'Resource sharing',
    'Address translation',
    'Packet switching',
    'B',
    1
),
(
    'A phone sends a message through a wireless network to another phone. In this communication, what does the message represent?',
    'The device that starts communication',
    'The path used for transmission',
    'The information being transferred',
    'The rules controlling communication',
    'C',
    1
),
(
    'During data communication, which component provides the path through which information travels from the sender toward the receiver?',
    'Message',
    'Protocol',
    'Medium',
    'Node',
    'C',
    1
),
(
    'Two devices can communicate successfully only when they follow common rules for formatting information and handling communication. Which concept provides these rules?',
    'Signal',
    'Protocol',
    'Bandwidth',
    'Topology',
    'B',
    1
),
(
    'Which statement correctly distinguishes analog and digital signals?',
    'Analog signals use only 0 and 1, while digital signals change continuously.',
    'Analog signals change continuously, while digital signals use separate values.',
    'Both signals always use identical values.',
    'Digital signals can only be transmitted through fiber-optic cables.',
    'B',
    1
),
(
    'A network administrator sees a speed written as 100 Mbps and a file size written as 100 MB. Why are the units different?',
    'Mbps describes bytes, while MB describes bits.',
    'Mbps describes network speed in bits, while MB describes data size in bytes.',
    'Both units represent exactly the same measurement.',
    'MB can only be used for wireless communication.',
    'B',
    1
),
(
    'A network connection has high bandwidth but applications still respond slowly because packets take a long time to travel. Which measurement is high in this situation?',
    'Throughput',
    'Latency',
    'Bandwidth',
    'Packet size',
    'B',
    1
),
(
    'A connection can carry a maximum of 1 Gbps, but the actual successful transfer is only 600 Mbps because of congestion and protocol overhead. What does 600 Mbps represent?',
    'Bandwidth',
    'Latency',
    'Throughput',
    'Jitter',
    'C',
    1
),
(
    'Two devices use a communication method in which both can transmit data, but only one device can transmit at a time. Which mode is being used?',
    'Simplex',
    'Half-duplex',
    'Full-duplex',
    'Broadcast',
    'B',
    1
),
(
    'A traditional communication system reserves a dedicated communication path before the session begins and keeps that path reserved during the session. Which switching method is this?',
    'Packet switching',
    'Circuit switching',
    'Multicast switching',
    'Broadcast switching',
    'B',
    1
),
(
    'Why is packet switching efficient for shared network communication?',
    'It permanently reserves one complete path for every communication.',
    'It prevents multiple communications from using the same links.',
    'It allows packets from different communications to share network links.',
    'It requires every packet to use a dedicated physical cable.',
    'C',
    1
),
(
    'A teacher sends the same live information to a selected group of students instead of sending separate copies to every device. Which delivery method best matches this situation?',
    'Unicast',
    'Multicast',
    'Broadcast',
    'Simplex',
    'B',
    1
),
(
    'Several servers provide the same service, and the network selects one suitable destination for a request. Which delivery method is being described?',
    'Unicast',
    'Multicast',
    'Broadcast',
    'Anycast',
    'D',
    1
),
(
    'A network connects computers within a college building and provides communication between nearby devices. Which network type most closely matches this coverage?',
    'PAN',
    'LAN',
    'MAN',
    'WAN',
    'B',
    1
),
(
    'In a star topology, one individual cable connecting a computer to the central device fails. What is the most likely effect?',
    'The entire network must stop communicating.',
    'Only the connected computer normally loses its network connection.',
    'Every device automatically changes to a ring topology.',
    'All network addresses are deleted.',
    'B',
    1
),
(
    'In a client-server architecture, which sequence best describes a typical interaction?',
    'Server requests a service from the client and the client provides it.',
    'Client sends a request, the server processes it, and the server sends a response.',
    'Peers exchange resources without any request or response.',
    'The client permanently stores all server resources locally.',
    'B',
    1
),
(
    'When networking information is added to data as it moves down through communication layers before transmission, what process is taking place?',
    'De-encapsulation',
    'Encapsulation',
    'Broadcasting',
    'Retransmission',
    'B',
    1
),
(
    'A switch is forwarding an Ethernet frame inside a local network, while a router is deciding where a packet should go between networks. Which statement best explains the addressing difference?',
    'Both devices use only IP addresses.',
    'The switch commonly uses MAC addresses, while the router uses IP addressing for forwarding decisions.',
    'The switch uses domain names, while the router uses MAC addresses only.',
    'Both devices use only port numbers.',
    'B',
    1
),
(
    'During a video call, packets arrive successfully but their arrival times vary considerably, causing uneven audio and video. Which network problem is most directly responsible?',
    'Packet loss',
    'Jitter',
    'Bandwidth',
    'Topology failure',
    'B',
    1
);