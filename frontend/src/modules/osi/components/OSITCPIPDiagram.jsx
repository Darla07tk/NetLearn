
function OSITCPIPDiagram() {
    return (
        <section className="osi-diagram model-comparison-diagram">
            <div
                className="comparison-diagram"
                style={{
                    gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)",
                    gap: "35px"
                }}
            >
                <div className="comparison-column">
                    <h4>OSI Model</h4>

                    <div className="comparison-layer">
                        Application
                    </div>

                    <div className="comparison-layer">
                        Presentation
                    </div>

                    <div className="comparison-layer">
                        Session
                    </div>

                    <div className="comparison-layer">
                        Transport
                    </div>

                    <div className="comparison-layer">
                        Network
                    </div>

                    <div className="comparison-layer">
                        Data Link
                    </div>

                    <div className="comparison-layer">
                        Physical
                    </div>
                </div>

                <div className="comparison-column">
                    <h4>TCP/IP Model</h4>

                    <div className="comparison-layer tcpip-application">
                        Application
                    </div>

                    <div className="comparison-layer">
                        Transport
                    </div>

                    <div className="comparison-layer">
                        Internet
                    </div>

                    <div className="comparison-layer tcpip-access">
                        Network Access
                    </div>
                </div>
            </div>
        </section>
    );
}

export default OSITCPIPDiagram;
