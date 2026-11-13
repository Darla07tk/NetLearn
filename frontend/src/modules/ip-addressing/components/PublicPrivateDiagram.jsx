import { useState } from "react";

const rows = [
    {
        className: "Class A",
        private: "10.0.0.0/8",
        public: "1.0.0.0 – 126.255.255.255"
    },
    {
        className: "Class B",
        private: "172.16.0.0/12",
        public: "128.0.0.0 – 191.255.255.255"
    },
    {
        className: "Class C",
        private: "192.168.0.0/16",
        public: "192.0.0.0 – 223.255.255.255"
    },
    {
        className: "Class D",
        private: "No private range",
        public: "Multicast"
    },
    {
        className: "Class E",
        private: "No private range",
        public: "Reserved / Experimental"
    }
];

export default function PublicPrivateDiagram({ type }) {
    const [activeRow, setActiveRow] = useState(0);

    if (type !== "public-private-table") {
        return null;
    }

    return (
        <div className="simulation public-private-simulation">
            <div className="class-table-wrapper">
                <table className="class-table">
                    <thead>
                        <tr>
                            <th>Class</th>
                            <th>Private</th>
                            <th>Public</th>
                        </tr>
                    </thead>

                    <tbody>
                        {rows.map((row, index) => (
                            <tr
                                key={row.className}
                                className={
                                    activeRow === index
                                        ? "table-row-active"
                                        : ""
                                }
                                onClick={() => setActiveRow(index)}
                            >
                                <td>{row.className}</td>
                                <td>{row.private}</td>
                                <td>{row.public}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}