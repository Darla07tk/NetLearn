
import { osiLayers } from "../../../data/osiData";

function OSIOverviewDiagram() {
    return (
        <section className="osi-diagram overview-diagram">
            <div className="overview-stack">
                {osiLayers.map((layer) => (
                    <div
                        key={layer.number}
                        className={`overview-layer layer-size-${layer.number}`}
                    >
                        <span className="overview-number">
                            {layer.number}
                        </span>

                        <strong>{layer.name}</strong>

                        <span className="overview-pdu">
                            {layer.pdu}
                        </span>
                    </div>
                ))}
            </div>

            <div className="overview-labels">
                <span>Application side</span>
                <span>Transmission side</span>
            </div>
        </section>
    );
}

export default OSIOverviewDiagram;
