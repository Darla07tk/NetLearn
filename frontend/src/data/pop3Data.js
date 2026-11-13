const pop3Data = {

    title: "Post Office Protocol Version 3 (POP3)",

    intro: [
        "POP3 is an application-layer protocol used to retrieve email messages from a mail server to a local email client.",

        "POP3 allows users to download emails and read them locally, even when they are offline.",

        "POP3 is simple and widely supported, but it does not provide real-time synchronization across multiple devices.",
    ],


    theory: {


        introduction: [

            {
                title: "Post Office Protocol",
                points: [
                    "POP stands for Post Office Protocol and is used to access email from a mail server.",
                ],
            },

            {
                title: "Application Layer",
                points: [
                    "POP3 works at the application layer of the network model.",
                ],
            },

            {
                title: "Offline Access",
                points: [
                    "POP3 is useful when users want to download and access emails without a continuous internet connection.",
                ],
            },

        ],


        ports: [

            {
                title: "Port 110",
                points: [
                    "Port 110 is the default TCP port used by POP3 without encrypted communication.",
                ],
            },

            {
                title: "Port 995",
                points: [
                    "Port 995 is used for POP3 over SSL/TLS to provide secure communication.",
                ],
            },

            {
                title: "TCP",
                points: [
                    "POP3 uses TCP to establish a reliable connection between the email client and mail server.",
                ],
            },

        ],


        history: [

            {
                title: "POP",
                points: [
                    "The original Post Office Protocol was published in 1984 through RFC 918.",
                ],
            },

            {
                title: "POP2",
                points: [
                    "RFC 937 introduced POP version 2 as an updated version of the original protocol.",
                ],
            },

            {
                title: "POP3",
                points: [
                    "RFC 1081 introduced POP version 3 in 1988, and the protocol was further revised before its later release.",
                ],
            },

        ],


        advantages: [

            {
                title: "Offline Reading",
                points: [
                    "Downloaded messages can be read locally even when the user is offline.",
                ],
            },

            {
                title: "Less Server Storage",
                points: [
                    "Keeping emails locally can reduce the storage required on the mail server.",
                ],
            },

            {
                title: "Easy Configuration",
                points: [
                    "POP3 is simple to configure and is supported by many email applications.",
                ],
            },

            {
                title: "Fast Local Access",
                points: [
                    "Locally stored emails can be accessed quickly.",
                ],
            },

            {
                title: "Wide Support",
                points: [
                    "POP3 is supported by many email programs and services.",
                ],
            },

        ],


        disadvantages: [

            {
                title: "No Real-Time Sync",
                points: [
                    "POP3 does not provide real-time synchronization of email changes across devices.",
                ],
            },

            {
                title: "Single Device",
                points: [
                    "POP3 is mainly designed for downloading mail to one local device.",
                ],
            },

            {
                title: "Local Storage Risk",
                points: [
                    "Downloaded emails may be lost if the local email storage is damaged or deleted.",
                ],
            },

            {
                title: "Security Risk",
                points: [
                    "Locally stored emails can be accessed by other users of the same computer.",
                ],
            },

            {
                title: "Folder Loss",
                points: [
                    "A downloaded email folder can be lost or corrupted on the local system.",
                ],
            },

        ],


        comparison: [

            {
                title: "POP3",
                points: [
                    "POP3 mainly downloads messages from the mail server to the local device.",
                ],
            },

            {
                title: "IMAP",
                points: [
                    "IMAP keeps messages on the mail server and synchronizes them across devices.",
                ],
            },

            {
                title: "POP3 Ports",
                points: [
                    "POP3 commonly uses port 110 or secure port 995.",
                ],
            },

            {
                title: "IMAP Ports",
                points: [
                    "IMAP commonly uses port 143 or secure port 993.",
                ],
            },

            {
                title: "Message Access",
                points: [
                    "POP3 normally requires messages to be downloaded before they are read locally.",
                ],
            },

            {
                title: "Server Management",
                points: [
                    "IMAP allows users to manage mail directly on the mail server.",
                ],
            },

        ],

    },

};

export default pop3Data;