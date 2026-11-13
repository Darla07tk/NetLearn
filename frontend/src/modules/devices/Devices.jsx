import { useState, useEffect, useLayoutEffect } from "react";
import devicesData from "../../data/devicesData";
import "./devices.css";
import useModuleProgress from "../../hooks/useModuleProgress";

function Devices() {
    const [currentDevice, setCurrentDevice] = useState(0);

    const device = devicesData[currentDevice];

    useModuleProgress(
        2,
        currentDevice,
        devicesData.length
    );

    useLayoutEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "instant"
        });

        const devicesMain = document.querySelector(".devices-main");

        if (devicesMain) {
            devicesMain.scrollTop = 0;
        }

        const devicesContent = document.querySelector(".devices-content");

        if (devicesContent) {
            devicesContent.scrollTop = 0;
        }
    }, [currentDevice]);

    const goNext = () => {
        if (currentDevice < devicesData.length - 1) {
            setCurrentDevice(currentDevice + 1);
        }
    };

    const goPrevious = () => {
        if (currentDevice > 0) {
            setCurrentDevice(currentDevice - 1);
        }
    };

    const selectDevice = (index) => {
        setCurrentDevice(index);
    };

    return (
        <div className="devices-page">
            <header className="devices-header">
                <button
                    className="back-button"
                    onClick={() => window.location.href = "/dashboard"}
                >
                    Back
                </button>

                <div>
                    <h1>Network Devices</h1>
                </div>

                <div className="device-counter">
                    Page {currentDevice + 1} / {devicesData.length}
                </div>
            </header>

            <div className="devices-content">
                <aside className="devices-list">
                    <h2>Devices</h2>

                    {devicesData.map((item, index) => (
                        <button
                            key={item.id}
                            className={
                                index === currentDevice
                                    ? "device-active"
                                    : ""
                            }
                            onClick={() => selectDevice(index)}
                        >
                            <span>{item.id}</span>
                            <span>{item.name}</span>
                        </button>
                    ))}
                </aside>

                <main className="devices-main">
                    <section className="device-heading">
                        <h2>{device.name}</h2>
                    </section>

                    <section className="device-image-section">
                        <img
                            src={device.image}
                            alt={`${device.name} network visualization`}
                            className="device-image"
                        />
                    </section>

                    <div className="device-content-sections">
                        {device.sections.map((section, index) => (
                            <section
                                className="device-section"
                                key={`${device.id}-${index}`}
                            >
                                <h3>{section.heading}</h3>

                                <div className="device-section-content">
                                    {section.content.map(
                                        (item, itemIndex) => (
                                            <p
                                                key={`${device.id}-${index}-${itemIndex}`}
                                            >
                                                {item}
                                            </p>
                                        )
                                    )}
                                </div>
                            </section>
                        ))}
                    </div>

                    <div className="device-navigation">
                        <button
                            onClick={goPrevious}
                            disabled={currentDevice === 0}
                        >
                            Previous
                        </button>

                        <span>
                            {currentDevice + 1} / {devicesData.length}
                        </span>

                        <button
                            onClick={goNext}
                            disabled={
                                currentDevice === devicesData.length - 1
                            }
                        >
                            Next
                        </button>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default Devices;