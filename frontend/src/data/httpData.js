const httpData = {
    title: "Hypertext Transfer Protocol",

    intro: [
        "HTTP stands for Hypertext Transfer Protocol. It allows communication between web browsers and web servers.",
        "When you visit a website, the browser sends a request to the server and the server sends back the data required to display the webpage.",
    ],

    steps: [
        {
            title: "Open Web Browser",
            text: "The user opens a web browser and enters a website URL such as www.example.com.",
            active: ["browser"],
            packet: "URL",
        },

        {
            title: "Browser Processes the URL",
            text: "The browser identifies the website address and prepares to find the server responsible for that website.",
            active: ["browser"],
            packet: "WEBSITE URL",
        },

        {
            title: "DNS Lookup",
            text: "The browser asks a DNS server to find the IP address associated with the website URL.",
            active: ["browser", "dns"],
            packet: "DNS QUERY",
        },

        {
            title: "DNS Returns IP Address",
            text: "The DNS server provides the IP address associated with the requested website.",
            active: ["dns", "browser"],
            packet: "DNS RESPONSE",
        },

        {
            title: "Send HTTP Request",
            text: "After obtaining the server IP address, the browser sends an HTTP request asking for the required web resource.",
            active: ["browser", "server"],
            packet: "HTTP REQUEST",
        },

        {
            title: "Server Processes the Request",
            text: "The web server receives the HTTP request, processes it, and prepares the requested resource.",
            active: ["server"],
            packet: "PROCESS REQUEST",
        },

        {
            title: "Server Sends HTTP Response",
            text: "The server sends an HTTP response containing a status code, headers, and the requested content.",
            active: ["server", "browser"],
            packet: "HTTP RESPONSE",
        },

        {
            title: "Browser Receives the Response",
            text: "The browser receives the response from the web server and processes the returned data.",
            active: ["browser"],
            packet: "RESPONSE DATA",
        },

        {
            title: "Render the Web Page",
            text: "The browser uses the received HTML, CSS, JavaScript, images, and other resources to display the webpage.",
            active: ["browser"],
            packet: "WEB PAGE",
        },
    ],

    theory: {
        hypertext: {
            title: "What is HyperText?",
            points: [
                "HyperText is text that can contain links to other documents or resources.",
                "HTML is used to create and structure this type of content for web pages.",
                "HTTP transfers hypertext and other web resources between the browser and server.",
            ],
        },

        request: {
            title: "HTTP Request",
            points: [
                "An HTTP request is sent by the browser when it asks the server for a resource.",
                "It contains information such as the HTTP version, URL, method, and request headers.",
                "A request body may also be included when the browser sends data to the server.",
            ],
        },

        response: {
            title: "HTTP Response",
            points: [
                "An HTTP response is the server's answer to a browser request.",
                "It contains an HTTP status code that indicates what happened to the request.",
                "It can also contain response headers and a response body containing the requested content.",
            ],
        },

        status: {
            title: "HTTP Status Codes",
            points: [
                "1xx — Informational responses.",
                "2xx — Successful responses.",
                "3xx — Redirection responses.",
                "4xx — Client error responses.",
                "5xx — Server error responses.",
            ],
        },

        versions: {
            title: "HTTP Versions",
            points: [
                "HTTP/1.1 supports persistent connections and multiple requests over a connection.",
                "HTTP/2 introduced multiplexing and header compression to improve performance.",
                "HTTP/3 uses QUIC and reduces connection setup time while providing integrated encryption.",
            ],
        },

        cookies: {
            title: "Cookies in HTTP",
            points: [
                "An HTTP cookie is a small piece of data transmitted by a server to a web browser.",
                "The browser can store the cookie and send it back to the same server in later requests.",
                "Cookies can be used to maintain login state and recognize requests from the same browser.",
            ],
        },

        ddos: {
            title: "HTTP and DDoS",
            points: [
                "HTTP operates at the application layer.",
                "Large numbers of HTTP requests can be used in application-layer DoS or DDoS attacks.",
                "HTTP/1.1 and later versions can use persistent connections, allowing multiple requests over a connection.",
            ],
        },

        advantages: {
            title: "Advantages of HTTP",
            points: [
                "Fewer simultaneous connections can reduce resource usage.",
                "Persistent connections can reduce repeated connection overhead.",
                "HTTP supports request and response communication between clients and servers.",
                "Errors can be reported through HTTP responses without necessarily closing the connection.",
            ],
        },

        disadvantages: {
            title: "Disadvantages of HTTP",
            points: [
                "Regular HTTP does not provide encryption like HTTPS.",
                "HTTP communication can therefore be less secure than encrypted HTTPS communication.",
                "HTTP is not optimized for every type of network environment.",
                "Large or slow data transfers can keep server resources occupied while the response is being completed.",
            ],
        },
    },
};

export default httpData;