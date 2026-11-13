
import { deviceLayerGroups } from "../../../data/osiData";

function DeviceLayerDiagram() {
    return (
        <section className="osi-diagram device-layer-diagram">
            <div className="device-layer-map">
                {deviceLayerGroups.map((group) => (
                    <div
                        key={group.layer}
                        className="device-group"
                    >
                        <div className="device-layer-label">
                            <strong>{group.layer}</strong>

                            <span>{group.description}</span>
                        </div>

                        <div className="device-cards">
                            {group.devices.map((device) => (
                                <div
                                    key={device}
                                    className="device-card"
                                >
                                    <div className="device-symbol">
                                        {device.charAt(0)}
                                    </div>

                                    <strong>{device}</strong>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default DeviceLayerDiagram;
