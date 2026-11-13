
import { useState } from "react";

const layers = [
    {
        number: 7,
        name: "Application",
        pdu: "Data",
        encapsulation: [
            "The Application layer creates the original data that the user wants to send to the destination application.",
            "The application provides the network service that the user interacts with, such as creating an email or requesting a webpage.",
            "At this stage, the information is simply application data and no Transport, IP or MAC header has been added yet."
        ],
        decapsulation: [
            "The Application layer receives the final data after it has passed upward through the lower OSI layers.",
            "All lower-layer headers and trailers have already been removed, so the original application data is available.",
            "The destination application can now use or display the received information to the user."
        ]
    },
    {
        number: 6,
        name: "Presentation",
        pdu: "Data",
        encapsulation: [
            "The Presentation layer prepares the application data into a suitable format for transmission between the communicating systems.",
            "It can perform functions such as data translation, encryption and compression when they are required.",
            "The information is still considered Data at this layer because the Transport layer has not yet added its header."
        ],
        decapsulation: [
            "The Presentation layer receives the data after it has been passed upward from the Session layer.",
            "Encrypted information can be decrypted and compressed information can be decompressed at this stage.",
            "The processed data is restored into a format that the destination application can understand."
        ]
    },
    {
        number: 5,
        name: "Session",
        pdu: "Data",
        encapsulation: [
            "The Session layer establishes and manages the communication session between the sender and receiver.",
            "It controls the beginning, continuation and termination of the communication session between the applications.",
            "The information is still treated as Data because the Transport layer has not yet converted it into a Segment."
        ],
        decapsulation: [
            "The Session layer receives the data after the Transport layer has processed and removed its transport information.",
            "The Session layer processes the session-related information and maintains the communication between the applications.",
            "The remaining data is passed upward to the Presentation layer for further processing."
        ]
    },
    {
        number: 4,
        name: "Transport",
        pdu: "Segment",
        encapsulation: [
            "The Transport layer adds a Transport header containing information such as source and destination port numbers.",
            "With TCP, the Transport header also contains information used for reliable delivery, sequencing, acknowledgement and error control.",
            "The original application data together with the Transport header becomes a Segment."
        ],
        decapsulation: [
            "The Transport layer receives the Segment from the Network layer and examines its Transport header.",
            "The source and destination port information is used to identify the correct application process at the destination.",
            "The Transport header is removed now, and the remaining application data is passed upward to the Session layer."
        ]
    },
    {
        number: 3,
        name: "Network",
        pdu: "Packet",
        encapsulation: [
            "The Network layer adds an IP header containing the source and destination IP addresses.",
            "The IP addresses provide logical addressing information that allows routers to determine where the data originated and where it must be delivered.",
            "The Transport Segment together with the newly added IP header becomes a Packet."
        ],
        decapsulation: [
            "The Network layer receives the Packet from the Data Link layer and examines its IP header.",
            "The source and destination IP addresses are processed to confirm the logical destination of the packet.",
            "The IP header is removed now, leaving the Transport Segment, which is passed upward to the Transport layer."
        ]
    },
    {
        number: 2,
        name: "Data Link",
        pdu: "Frame",
        encapsulation: [
            "The Data Link layer adds a frame header containing local physical addressing information such as source and destination MAC addresses.",
            "It can also add a trailer containing error-detection information such as the Frame Check Sequence.",
            "The Network Packet is placed inside the Data Link header and trailer, creating a complete Frame."
        ],
        decapsulation: [
            "The Data Link layer receives the Frame from the Physical layer and examines its MAC addressing information.",
            "The frame can be checked for transmission errors using information contained in its trailer.",
            "The Data Link header and trailer are removed now, leaving the original Network Packet to be passed upward."
        ]
    },
    {
        number: 1,
        name: "Physical",
        pdu: "Bits",
        encapsulation: [
            "The Physical layer receives the complete Frame from the Data Link layer.",
            "The frame is converted into a sequence of bits represented by electrical signals, light pulses or radio signals depending on the transmission medium.",
            "These bits are transmitted through the physical medium toward the receiving device."
        ],
        decapsulation: [
            "The Physical layer receives electrical, optical or radio signals from the transmission medium.",
            "The received signals are converted back into the original sequence of bits.",
            "The bits are passed upward to the Data Link layer, where the received Frame can be processed."
        ]
    }
];

function DataFlowSimulation() {
    const [mode, setMode] = useState("encapsulation");
    const [currentStep, setCurrentStep] = useState(0);

    const isEncapsulation = mode === "encapsulation";
    const totalSteps = layers.length;

    const currentLayerIndex = isEncapsulation
        ? currentStep
        : totalSteps - 1 - currentStep;

    const currentLayer = layers[currentLayerIndex];

    const selectMode = (selectedMode) => {
        setMode(selectedMode);
        setCurrentStep(0);

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    const goPrevious = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
        }
    };

    const goNext = () => {
        if (currentStep < totalSteps - 1) {
            setCurrentStep(currentStep + 1);
        }
    };

    const reset = () => {
        setCurrentStep(0);
    };

    const isCompleted = (layerIndex) => {
        if (isEncapsulation) {
            return layerIndex < currentLayerIndex;
        }

        return layerIndex > currentLayerIndex;
    };

    return (
        <section className="data-flow-simulation">
            <div className="data-flow-top">
                <h2>Data Flow</h2>

                <div className="flow-controls-top">
                    <div className="flow-process-buttons">
                        <button
                            className={
                                isEncapsulation
                                    ? "flow-process-active"
                                    : ""
                            }
                            style={{
                                fontSize: "12px",
                                whiteSpace: "nowrap"
                            }}
                            onClick={() => selectMode("encapsulation")}
                        >
                            Encapsulation
                        </button>

                        <button
                            className={
                                !isEncapsulation
                                    ? "flow-process-active"
                                    : ""
                            }
                            style={{
                                fontSize: "12px",
                                whiteSpace: "nowrap"
                            }}
                            onClick={() => selectMode("decapsulation")}
                        >
                            Decapsulation
                        </button>
                    </div>

                    <div className="flow-step-counter">
                        Step {currentStep + 1} / {totalSteps}
                    </div>
                </div>
            </div>

            <div className="flow-direction-label">
                {isEncapsulation
                    ? "Layer 7 → Layer 1"
                    : "Layer 1 → Layer 7"}
            </div>

            <div className="flow-learning-area">
                <div className="flow-diagram-card">
                    <div
                        className="flow-card-title"
                        style={{
                            fontSize: "12px",
                            color: "#155a8a"
                        }}
                    >
                        {isEncapsulation
                            ? "Encapsulation"
                            : "Decapsulation"}
                    </div>

                    <div className="flow-data-box">
                        {isEncapsulation
                            ? "Application Data"
                            : "Received Bits"}
                    </div>

                    <div className="flow-arrow">
                        {isEncapsulation ? "↓" : "↑"}
                    </div>

                    <div className="single-layer-stack">
                        {layers.map((layer, index) => {
                            const current = index === currentLayerIndex;
                            const completed = isCompleted(index);

                            return (
                                <div
                                    key={layer.number}
                                    className={
                                        current
                                            ? "large-flow-layer flow-layer-current"
                                            : completed
                                                ? "large-flow-layer flow-layer-completed"
                                                : "large-flow-layer"
                                    }
                                >
                                    <div className="large-layer-number">
                                        {layer.number}
                                    </div>

                                    <div className="large-layer-name">
                                        <strong>{layer.name}</strong>
                                        <span
                                            style={{
                                                fontSize: "10px"
                                            }}
                                        >
                                            Layer {layer.number}
                                        </span>
                                    </div>

                                    <div className="large-layer-pdu">
                                        <strong>{layer.pdu}</strong>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    <div className="flow-arrow">
                        {isEncapsulation ? "↓" : "↑"}
                    </div>

                    <div className="flow-data-box">
                        {isEncapsulation
                            ? "Transmission"
                            : "Application"}
                    </div>
                </div>

                <div className="flow-explanation-card">
                    <div className="explanation-label">
                        CURRENT STEP
                    </div>

                    <h3>
                        Layer {currentLayer.number} — {currentLayer.name}
                    </h3>

                    <div className="explanation-divider"></div>

                    <h4>What is happening?</h4>

                    <ul className="flow-explanation-points">
                        {(isEncapsulation
                            ? currentLayer.encapsulation
                            : currentLayer.decapsulation
                        ).map((point, index) => (
                            <li key={index}>{point}</li>
                        ))}
                    </ul>

                    <div className="flow-info-boxes">
                        <div className="flow-info-box">
                            <span>LAYER</span>
                            <strong>Layer {currentLayer.number}</strong>
                        </div>

                        <div className="flow-info-box">
                            <span>PDU</span>
                            <strong>{currentLayer.pdu}</strong>
                        </div>

                        <div className="flow-info-box">
                            <span>PROCESS</span>
                            <strong>
                                {isEncapsulation
                                    ? "Encapsulation"
                                    : "Decapsulation"}
                            </strong>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flow-navigation">
                <button
                    onClick={goPrevious}
                    disabled={currentStep === 0}
                >
                    Previous
                </button>

                <button onClick={reset}>
                    Reset
                </button>

                <button
                    onClick={goNext}
                    disabled={currentStep === totalSteps - 1}
                >
                    {currentStep === totalSteps - 1
                        ? "Completed"
                        : "Next"}
                </button>
            </div>
        </section>
    );
}

export default DataFlowSimulation;
