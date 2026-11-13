const mimeData = {
    title: "Multipurpose Internet Mail Extensions",

    intro: [
        "MIME extends email messages beyond plain ASCII text by allowing multimedia content and attachments.",
        "MIME encodes different types of email content so they can safely travel through traditional email systems.",
        "MIME provides headers and metadata that help the receiving client identify and process each part of the message.",
    ],

    steps: [
        {
            title: "Email message is composed",
            text: "The sender creates an email containing text and a multimedia attachment such as an image.",
            packet: "TEXT + IMAGE",
            keyword: "Original Message",
            direction: "forward",
            activeNodes: ["client", "encoder"],
            activeLinks: ["client-encoder"],
            message: ["Hello!", "image.jpg"],
        },

        {
            title: "MIME headers are added",
            text: "The MIME processor adds MIME-Version and Content-Type information to describe how the email content should be handled.",
            packet: "MIME HEADERS",
            keyword: "MIME Header",
            direction: "forward",
            activeNodes: ["encoder"],
            activeLinks: [],
            message: ["MIME-Version: 1.0", "Content-Type: multipart/mixed"],
        },

        {
            title: "Message is divided into MIME parts",
            text: "The message is separated into individual MIME parts using boundaries so that text and attachments can be identified separately.",
            packet: "MIME PARTS",
            keyword: "Multipart Body",
            direction: "forward",
            activeNodes: ["encoder"],
            activeLinks: [],
            message: ["--boundary", "text/plain", "image/jpeg"],
        },

        {
            title: "Content is encoded",
            text: "Binary attachment data is encoded into a form that can safely pass through email systems, such as Base64 encoding.",
            packet: "BASE64 DATA",
            keyword: "Content Encoding",
            direction: "forward",
            activeNodes: ["encoder"],
            activeLinks: [],
            message: ["Content-Transfer-Encoding:", "base64", "encoded data..."],
        },

        {
            title: "MIME message is transmitted",
            text: "The encoded MIME message is passed to the SMTP server and transmitted through the email system.",
            packet: "MIME MESSAGE",
            keyword: "SMTP Transfer",
            direction: "forward",
            activeNodes: ["encoder", "smtp"],
            activeLinks: ["encoder-smtp"],
            message: ["MIME-Version: 1.0", "Encoded multipart message"],
        },

        {
            title: "Receiving system receives the message",
            text: "The receiving mail system obtains the MIME message containing its headers, boundaries and encoded content.",
            packet: "RECEIVED MIME",
            keyword: "Message Received",
            direction: "forward",
            activeNodes: ["smtp", "decoder"],
            activeLinks: ["smtp-decoder"],
            message: ["MIME message", "Encoded attachment"],
        },

        {
            title: "MIME content is decoded",
            text: "The receiving MIME processor decodes the encoded content back into its original form.",
            packet: "DECODED DATA",
            keyword: "Decode Content",
            direction: "forward",
            activeNodes: ["decoder"],
            activeLinks: [],
            message: ["text/plain", "image/jpeg", "Original data restored"],
        },

        {
            title: "Email client interprets the MIME information",
            text: "The receiving email client reads the MIME headers and determines how the text and attachment should be displayed.",
            packet: "CONTENT-TYPE",
            keyword: "Interpret MIME",
            direction: "forward",
            activeNodes: ["decoder", "client"],
            activeLinks: ["decoder-client"],
            message: ["Display text", "Show image attachment"],
        },

        {
            title: "Email content is displayed",
            text: "The recipient can view the message and access the attached multimedia content in its original form.",
            packet: "TEXT + IMAGE",
            keyword: "Final Content",
            direction: "none",
            activeNodes: ["client"],
            activeLinks: [],
            message: ["Hello!", "image.jpg"],
        },
    ],

    theory: {
        characteristics: [
            {
                title: "Text Encoding",
                text: "MIME supports character sets beyond ASCII, including UTF-8 for multilingual email content.",
            },
            {
                title: "Attachments",
                text: "MIME allows images, audio, video and documents to be included with email messages.",
            },
            {
                title: "Multipart Messages",
                text: "A message can contain multiple parts such as plain text, HTML content and media attachments.",
            },
            {
                title: "Header Fields",
                text: "MIME introduces headers such as Content-Type, Content-Disposition and Content-Transfer-Encoding.",
            },
        ],

        structure: [
            {
                title: "MIME-Version",
                text: "Specifies the MIME version used by the email message, commonly version 1.0.",
            },
            {
                title: "Content-Type",
                text: "Indicates the type of content, such as text/plain, text/html, image/jpeg or audio/mpeg.",
            },
            {
                title: "Content-Transfer-Encoding",
                text: "Specifies how content is encoded for safe transmission, such as Base64 or quoted-printable.",
            },
            {
                title: "Content-Disposition",
                text: "Determines whether content is displayed inline or treated as an attachment.",
            },
            {
                title: "Content-ID",
                text: "Provides an identifier for referencing embedded objects such as inline images.",
            },
            {
                title: "Content-Description",
                text: "Provides a short description of a MIME part, such as an image or PDF document.",
            },
        ],

        pros: [
            {
                title: "Multiple Data Types",
                text: "Supports text, audio, video, images and application files in email messages.",
            },
            {
                title: "Multilingual Compatibility",
                text: "Allows email content to use languages such as Hindi, French, Japanese and Chinese.",
            },
            {
                title: "Rich Formatting",
                text: "Supports HTML and CSS based email content with enhanced formatting.",
            },
            {
                title: "Long Messages",
                text: "Supports large or lengthy messages while maintaining their encoded content.",
            },
            {
                title: "Unique Identification",
                text: "Content-ID can uniquely identify MIME parts and help reference embedded media.",
            },
        ],

        cons: [
            {
                title: "Inconsistent Interpretation",
                text: "Different receiving systems may not always interpret MIME types in exactly the same way.",
            },
            {
                title: "Increased Overhead",
                text: "Additional headers and encoding can increase message size and transmission time.",
            },
            {
                title: "Complexity",
                text: "Multiple media types, headers and MIME parts can make email processing more complex.",
            },
            {
                title: "Compatibility Issues",
                text: "Older or limited email systems may not fully support MIME features.",
            },
        ],
    },
};

export default mimeData;