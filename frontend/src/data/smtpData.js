const smtpData = {

    title: "Simple Mail Transfer Protocol",

    intro: [
        "SMTP is an application-layer protocol used to send and transfer email between mail servers.",

        "SMTP uses TCP to provide reliable email transmission, commonly using port 25 for server-to-server communication.",

        "SMTP follows a client-server model where the sender's mail server communicates with the recipient's mail server.",
    ],


    theory: {

        types: [

            {
                title: "End-to-End Delivery",
                points: [
                    "Email is sent directly from the sender's SMTP client to the recipient's SMTP server.",
                ],
            },

            {
                title: "Store-and-Forward",
                points: [
                    "Email can pass through intermediate Mail Transfer Agents before reaching the recipient's server.",
                ],
            },

        ],


        components: [

            {
                title: "Mail User Agent (MUA)",
                points: [
                    "MUA is the email application used to create and send messages.",
                ],
            },

            {
                title: "Mail Submission Agent (MSA)",
                points: [
                    "MSA receives mail from the MUA and passes it to the Mail Transfer Agent.",
                ],
            },

            {
                title: "Mail Transfer Agent (MTA)",
                points: [
                    "MTA transfers email from one mail system to another using SMTP.",
                ],
            },

            {
                title: "Mail Delivery Agent (MDA)",
                points: [
                    "MDA delivers received email to the recipient's local mailbox.",
                ],
            },

        ],


        envelope: [

            {
                title: "Sender Address",
                points: [
                    "The SMTP envelope contains the address from which the email originates.",
                ],
            },

            {
                title: "Recipient Address",
                points: [
                    "The SMTP envelope contains the address where the email should be delivered.",
                ],
            },

            {
                title: "Routing Information",
                points: [
                    "Routing information helps mail servers determine the path for email delivery.",
                ],
            },

        ],


        commands: [

            {
                title: "HELO / EHLO",
                points: [
                    "HELO or EHLO identifies the sending system to the SMTP server.",
                ],
            },

            {
                title: "MAIL FROM",
                points: [
                    "MAIL FROM specifies the sender of the email.",
                ],
            },

            {
                title: "RCPT TO",
                points: [
                    "RCPT TO specifies the recipient of the email.",
                ],
            },

            {
                title: "DATA",
                points: [
                    "DATA indicates the beginning of the email message content.",
                ],
            },

            {
                title: "QUIT",
                points: [
                    "QUIT terminates the SMTP session and closes the connection.",
                ],
            },

        ],


        ports: [

            {
                title: "Port 25",
                points: [
                    "Port 25 is traditionally used for SMTP relay between mail servers.",
                ],
            },

            {
                title: "Port 587",
                points: [
                    "Port 587 is commonly used for secure email submission from clients to mail servers.",
                ],
            },

            {
                title: "Port 465",
                points: [
                    "Port 465 is used by some services for SMTP over implicit TLS.",
                ],
            },

            {
                title: "Port 2525",
                points: [
                    "Port 2525 is an alternative SMTP submission port when standard ports are restricted.",
                ],
            },

        ],


        extendedSMTP: [

            {
                title: "Authentication",
                points: [
                    "ESMTP supports authentication to verify the sender before email submission.",
                ],
            },

            {
                title: "EHLO Command",
                points: [
                    "ESMTP uses EHLO to identify the client and advertise extended SMTP features.",
                ],
            },

            {
                title: "Extended Features",
                points: [
                    "ESMTP provides additional capabilities beyond the basic SMTP commands.",
                ],
            },

        ],


        comparison: [

            {
                title: "SMTP",
                points: [
                    "SMTP is mainly used for sending and transferring email between mail systems.",
                ],
            },

            {
                title: "POP3",
                points: [
                    "POP3 is mainly used by a recipient to retrieve email from a mail server.",
                ],
            },

            {
                title: "IMAP",
                points: [
                    "IMAP is used to access and manage email while keeping messages stored on the mail server.",
                ],
            },

        ],


        advantages: [

            {
                title: "Reliable Delivery",
                points: [
                    "SMTP uses TCP to provide reliable transmission of email messages.",
                ],
            },

            {
                title: "Wide Usage",
                points: [
                    "SMTP is widely used for email delivery between mail servers.",
                ],
            },

            {
                title: "Bulk Mailing",
                points: [
                    "SMTP can support sending large numbers of email messages.",
                ],
            },

        ],


        disadvantages: [

            {
                title: "Security Issues",
                points: [
                    "Basic SMTP does not provide complete email security without additional mechanisms such as TLS and authentication.",
                ],
            },

            {
                title: "Port Blocking",
                points: [
                    "SMTP port 25 may be blocked by ISPs or firewalls to reduce spam and abuse.",
                ],
            },

            {
                title: "Message Limitations",
                points: [
                    "Traditional SMTP has limitations such as its original 7-bit ASCII message format.",
                ],
            },

        ],

    },

};


export default smtpData;