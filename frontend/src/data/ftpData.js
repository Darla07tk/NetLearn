const ftpData = {

    title: "File Transfer Protocol",

    intro: [
        "FTP is an application-layer protocol used to transfer files between a client and a server over a TCP/IP network.",

        "FTP supports text, binary, image, and program files.",

        "FTP enables uploading, downloading, and remote file management.",
    ],


    theory: {

        connectionTypes: [

            {
                title: "Control Connection",
                points: [
                    "The control connection uses TCP port 21 to exchange commands and responses between the FTP client and server.",
                ],
            },

            {
                title: "Data Connection",
                points: [
                    "The data connection transfers actual files and directory listings separately from the control connection.",
                ],
            },

            {
                title: "Out-of-Band Communication",
                points: [
                    "FTP is an out-of-band protocol because control information and file data use separate connections.",
                ],
            },

        ],


        dataTypes: [

            {
                title: "ASCII",
                points: [
                    "ASCII mode is used to transfer text files using ASCII character encoding.",
                ],
            },

            {
                title: "EBCDIC",
                points: [
                    "EBCDIC mode is used to transfer text files encoded using IBM's EBCDIC standard.",
                ],
            },

            {
                title: "Image (Binary)",
                points: [
                    "Binary mode transfers files as a continuous stream of bytes without modification.",
                ],
            },

            {
                title: "Local",
                points: [
                    "Local mode transfers files using logical bytes of a specified bit length.",
                ],
            },

        ],


        clients: [

            {
                title: "FTP Client",
                points: [
                    "An FTP client connects to the FTP server, authenticates the user, and performs file transfer operations.",
                ],
            },

            {
                title: "Command-Line Interface",
                points: [
                    "A command-line FTP client allows users to perform file operations by entering commands.",
                ],
            },

            {
                title: "Graphical Interface",
                points: [
                    "A graphical FTP client provides a GUI for connecting to servers and managing files.",
                ],
            },

        ],


        commands: [

            {
                title: "get",
                points: [
                    "The get command downloads a single file from the FTP server.",
                ],
            },

            {
                title: "mget",
                points: [
                    "The mget command downloads multiple files from the FTP server.",
                ],
            },

            {
                title: "ls",
                points: [
                    "The ls command displays the files and directories in the current server directory.",
                ],
            },

            {
                title: "cd",
                points: [
                    "The cd command changes the current directory on the FTP server.",
                ],
            },

            {
                title: "put",
                points: [
                    "The put command uploads a file from the client to the FTP server.",
                ],
            },

        ],


        replies: [

            {
                title: "200",
                points: [
                    "Code 200 indicates that the command was executed successfully.",
                ],
            },

            {
                title: "221",
                points: [
                    "Code 221 indicates that the FTP service is closing the control connection.",
                ],
            },

            {
                title: "331",
                points: [
                    "Code 331 indicates that the username was accepted and a password is required.",
                ],
            },

            {
                title: "530",
                points: [
                    "Code 530 indicates that the user is not logged in because authentication failed.",
                ],
            },

            {
                title: "502",
                points: [
                    "Code 502 indicates that the requested command is not implemented.",
                ],
            },

            {
                title: "503",
                points: [
                    "Code 503 indicates that commands were issued in an incorrect sequence.",
                ],
            },

        ],


        characteristics: [

            {
                title: "TCP Based",
                points: [
                    "FTP uses TCP to provide reliable file transmission.",
                ],
            },

            {
                title: "Separate Connections",
                points: [
                    "FTP establishes separate control and data connections for communication.",
                ],
            },

            {
                title: "General File Transfer",
                points: [
                    "FTP is suitable for general-purpose file transfer over networks.",
                ],
            },

            {
                title: "Authentication",
                points: [
                    "FTP provides authentication-based access control using user credentials.",
                ],
            },

        ],


        ftpTypes: [

            {
                title: "Anonymous FTP",
                points: [
                    "Anonymous FTP allows users to access publicly available files without a personal user account.",
                ],
            },

            {
                title: "Password-Protected FTP",
                points: [
                    "Password-protected FTP requires a valid username and password to access files.",
                ],
            },

            {
                title: "FTPS",
                points: [
                    "FTPS adds SSL/TLS encryption to FTP to secure authentication and data transmission.",
                ],
            },

            {
                title: "SFTP",
                points: [
                    "SFTP is a secure file transfer protocol that operates over SSH and uses a single encrypted connection.",
                ],
            },

        ],


        security: [

            {
                title: "Plain-Text Transmission",
                points: [
                    "FTP can transmit data and credentials in plain text, making them vulnerable to interception.",
                ],
            },

            {
                title: "Sniffing",
                points: [
                    "Attackers monitoring network traffic may capture FTP credentials and transferred information.",
                ],
            },

            {
                title: "Spoofing",
                points: [
                    "FTP communication can be exposed to spoofing attacks because basic FTP does not provide built-in encryption.",
                ],
            },

            {
                title: "Brute Force",
                points: [
                    "FTP accounts may be targeted by repeated authentication attempts to discover valid credentials.",
                ],
            },

        ],


        securityWeakness: [

            {
                title: "Clear-Text Passwords",
                points: [
                    "FTP sends passwords without encryption, allowing attackers monitoring the connection to capture them.",
                ],
            },

            {
                title: "No Built-In Encryption",
                points: [
                    "Basic FTP does not provide built-in encryption for protecting credentials or transferred data.",
                ],
            },

            {
                title: "Secure Alternatives",
                points: [
                    "FTPS and SFTP provide encrypted communication for more secure file transfer.",
                ],
            },

        ],


        portConfiguration: [

            {
                title: "Access Server Configuration",
                points: [
                    "The FTP server control panel or configuration file is opened to manage port settings.",
                ],
            },

            {
                title: "Modify Port Settings",
                points: [
                    "The default control port 21 and data port 20, when applicable, can be changed in the server configuration.",
                ],
            },

            {
                title: "Restart FTP Service",
                points: [
                    "The FTP service is restarted after changing the port settings so the new configuration takes effect.",
                ],
            },

            {
                title: "Update Client Configuration",
                points: [
                    "FTP clients must use the updated port number when connecting to the server.",
                ],
            },

        ],


        comparison: [

            {
                title: "FTP",
                points: [
                    "FTP normally uses separate control and data connections and does not provide built-in encryption.",
                ],
            },

            {
                title: "SFTP",
                points: [
                    "SFTP operates over SSH using a single secure connection and encrypts authentication and file data.",
                ],
            },

            {
                title: "FTP Port",
                points: [
                    "FTP commonly uses TCP port 21 for the control connection and port 20 for data in active mode.",
                ],
            },

            {
                title: "SFTP Port",
                points: [
                    "SFTP commonly uses TCP port 22 for its SSH-based secure connection.",
                ],
            },

        ],

    },

};


export default ftpData;