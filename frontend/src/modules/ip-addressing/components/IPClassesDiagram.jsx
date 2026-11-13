export default function IPClassesDiagram({ type }) {
    const classes = {
        "class-a": {
            name: "Class A",
            range: "1.0.0.0 – 126.255.255.255",
            network: "1 Octet",
            host: "3 Octets",
            purpose: "Very large networks"
        },
        "class-b": {
            name: "Class B",
            range: "128.0.0.0 – 191.255.255.255",
            network: "2 Octets",
            host: "2 Octets",
            purpose: "Medium-sized networks"
        },
        "class-c": {
            name: "Class C",
            range: "192.0.0.0 – 223.255.255.255",
            network: "3 Octets",
            host: "1 Octet",
            purpose: "Small networks"
        },
        "class-d": {
            name: "Class D",
            range: "224.0.0.0 – 239.255.255.255",
            network: "Multicast",
            host: "Not applicable",
            purpose: "Multicast communication"
        },
        "class-e": {
            name: "Class E",
            range: "240.0.0.0 – 255.255.255.255",
            network: "Reserved",
            host: "Not applicable",
            purpose: "Experimental use"
        }
    };

    if (type === "class-overview") {
        return (
            <div className="classes-diagram">
                <div className="class-overview-grid">
                    {[
                        ["A", "1 – 126", "Large networks"],
                        ["B", "128 – 191", "Medium networks"],
                        ["C", "192 – 223", "Small networks"],
                        ["D", "224 – 239", "Multicast"],
                        ["E", "240 – 255", "Reserved"]
                    ].map(([name, range, purpose]) => (
                        <div
                            className="class-overview-row"
                            key={name}
                        >
                            <strong>Class {name}</strong>
                            <span>{range}</span>
                            <small>{purpose}</small>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    const current = classes[type];

    if (current) {
        return (
            <div className="class-detail-diagram">
                <div className="class-detail-title">
                    <strong>{current.name}</strong>
                    <span>{current.range}</span>
                </div>

                <div className="class-octets">
                    {[1, 2, 3, 4].map((octet) => {
                        const isNetwork =
                            type === "class-a"
                                ? octet === 1
                                : type === "class-b"
                                ? octet <= 2
                                : type === "class-c"
                                ? octet <= 3
                                : false;

                        return (
                            <div
                                key={octet}
                                className={
                                    isNetwork
                                        ? "class-octet network"
                                        : "class-octet host"
                                }
                            >
                                <strong>Octet {octet}</strong>

                                <span>
                                    {type === "class-d"
                                        ? "Multicast"
                                        : type === "class-e"
                                        ? "Reserved"
                                        : isNetwork
                                        ? "Network"
                                        : "Host"}
                                </span>
                            </div>
                        );
                    })}
                </div>

                <div className="class-detail-info">
                    <div>
                        <span>Network</span>
                        <strong>{current.network}</strong>
                    </div>

                    <div>
                        <span>Host</span>
                        <strong>{current.host}</strong>
                    </div>

                    <div>
                        <span>Purpose</span>
                        <strong>{current.purpose}</strong>
                    </div>
                </div>
            </div>
        );
    }

    return null;
}