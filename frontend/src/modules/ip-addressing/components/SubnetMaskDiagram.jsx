export default function SubnetMaskDiagram({ type }) {
    if (type === "mask-definition") {
        return (
            <div className="subnet-diagram">
                <div className="mask-main">
                    <strong>255.255.255.0</strong>

                    <div className="mask-meaning">
                        <div>
                            <span>255</span>
                            <small>Network</small>
                        </div>

                        <div>
                            <span>255</span>
                            <small>Network</small>
                        </div>

                        <div>
                            <span>255</span>
                            <small>Network</small>
                        </div>

                        <div>
                            <span>0</span>
                            <small>Host</small>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    if (type === "mask-bits") {
        return (
            <div className="subnet-diagram">
                <div className="bit-diagram">
                    <div className="bit-network">11111111</div>
                    <div className="bit-network">11111111</div>
                    <div className="bit-network">11111111</div>
                    <div className="bit-host">00000000</div>
                </div>

                <div className="bit-labels">
                    <span>24 Network Bits</span>
                    <span>8 Host Bits</span>
                </div>
            </div>
        );
    }

    if (type === "cidr") {
        return (
            <div className="subnet-diagram">
                <div className="cidr-main">
                    <strong>192.168.1.0/24</strong>

                    <div>
                        <span>/24</span>
                        <small>24 Network Bits</small>
                    </div>

                    <div>
                        <span>8</span>
                        <small>Host Bits</small>
                    </div>
                </div>
            </div>
        );
    }

    if (type === "network-address") {
        return (
            <div className="subnet-diagram">
                <div className="network-calculation">
                    <div>
                        <strong>192.168.1.25</strong>
                        <span>IP Address</span>
                    </div>

                    <b>AND</b>

                    <div>
                        <strong>255.255.255.0</strong>
                        <span>Subnet Mask</span>
                    </div>

                    <b>=</b>

                    <div className="network-result">
                        <strong>192.168.1.0</strong>
                        <span>Network Address</span>
                    </div>
                </div>
            </div>
        );
    }

    if (type === "subnetting") {
        return (
            <div className="subnet-diagram">
                <div className="subnet-flow">
                    <div className="large-subnet">
                        <strong>192.168.1.0/24</strong>
                        <span>Original Network</span>
                    </div>

                    <div className="subnet-arrow">→</div>

                    <div className="small-subnets">
                        <span>192.168.1.0/26</span>
                        <span>192.168.1.64/26</span>
                        <span>192.168.1.128/26</span>
                        <span>192.168.1.192/26</span>
                    </div>
                </div>
            </div>
        );
    }

    if (type === "host-calculation") {
        return (
            <div className="host-calculation-diagram">
                <div className="host-header">
                    <strong>192.168.1.0/24</strong>
                    <span>8 Host Bits</span>
                </div>

                <div className="host-range">
                    <div className="host-network">
                        <strong>192.168.1.0</strong>
                        <span>Network Address</span>
                    </div>

                    <div className="host-usable">
                        <strong>192.168.1.1</strong>
                        <span>Usable Hosts</span>
                        <b>192.168.1.1 – 192.168.1.254</b>
                        <small>254 usable addresses</small>
                    </div>

                    <div className="host-broadcast">
                        <strong>192.168.1.255</strong>
                        <span>Broadcast Address</span>
                    </div>
                </div>

                <div className="host-details">
                    <div>
                        <span>Total</span>
                        <strong>256</strong>
                    </div>

                    <div>
                        <span>Network</span>
                        <strong>1</strong>
                    </div>

                    <div>
                        <span>Broadcast</span>
                        <strong>1</strong>
                    </div>

                    <div>
                        <span>Usable</span>
                        <strong>254</strong>
                    </div>
                </div>

                <div className="host-formula">
                    2<sup>8</sup> − 2 = <strong>254</strong>
                </div>
            </div>
        );
    }

    return null;
}