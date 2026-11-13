import { useEffect, useState } from "react";

const dhcpSteps = [
    "Discover",
    "Offer",
    "Request",
    "Acknowledge"
];

export default function StaticDynamicDiagram({ type }) {
    const [dhcpStep, setDhcpStep] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setDhcpStep((step) => (step + 1) % dhcpSteps.length);
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    if (type !== "static-dynamic-main") {
        return null;
    }

    return (
        <div className="simulation assignment-simulation">
            <div className="assignment-panels">
                <div className="assignment-panel">
                    <div className="assignment-panel-title">
                        STATIC ASSIGNMENT
                    </div>

                    <div className="assignment-static-flow">
                        <div className="assignment-device">
                            <strong>PC1</strong>
                            <span>Device</span>
                        </div>

                        <div className="assignment-arrow">→</div>

                        <div className="static-settings">
                            <strong>Manual Configuration</strong>

                            <div>
                                <span>IP</span>
                                <b>192.168.1.10</b>
                            </div>

                            <div>
                                <span>Mask</span>
                                <b>255.255.255.0</b>
                            </div>

                            <div>
                                <span>Gateway</span>
                                <b>192.168.1.1</b>
                            </div>
                        </div>
                    </div>

                    <div className="assignment-result">
                        Address remains fixed until changed manually.
                    </div>
                </div>

                <div className="assignment-panel">
                    <div className="assignment-panel-title">
                        DYNAMIC ASSIGNMENT
                    </div>

                    <div className="assignment-dynamic-flow">
                        <div className="assignment-device">
                            <strong>PC2</strong>
                            <span>DHCP Client</span>
                        </div>

                        <div className="assignment-arrow">→</div>

                        <div className="dhcp-server">
                            <strong>DHCP Server</strong>

                            <div className="dhcp-steps">
                                {dhcpSteps.map((step, index) => (
                                    <span
                                        key={step}
                                        className={
                                            dhcpStep === index
                                                ? "dhcp-step-active"
                                                : ""
                                        }
                                    >
                                        {step}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="assignment-arrow">→</div>

                        <div className="assigned-address">
                            <span>Assigned IP</span>
                            <strong>192.168.1.20</strong>
                        </div>
                    </div>

                    <div className="assignment-result">
                        Current DHCP step:{" "}
                        <strong>{dhcpSteps[dhcpStep]}</strong>
                    </div>
                </div>
            </div>
        </div>
    );
}