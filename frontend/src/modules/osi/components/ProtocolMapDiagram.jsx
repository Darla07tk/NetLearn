
import { protocolLayers } from "../../../data/osiData";

function ProtocolMapDiagram() {
    return (
        <section className="osi-diagram protocol-map-diagram">
            <div className="protocol-map">
                {protocolLayers.map((layer) => (
                    <div
                        key={layer.number}
                        className="protocol-row"
                    >
                        <div className="protocol-number">
                            {layer.number}
                        </div>

                        <div className="protocol-layer">
                            <strong>{layer.name}</strong>

                            <span>
                                Layer {layer.number}
                            </span>
                        </div>

                        <div className="protocol-list">
                            {layer.protocols.map((protocol) => (
                                <span
                                    key={protocol}
                                    className="protocol-badge"
                                >
                                    {protocol}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default ProtocolMapDiagram;
