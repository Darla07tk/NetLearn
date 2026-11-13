import { useState } from "react"; 
import { useNavigate } from "react-router-dom"; 
import protocolLayers from "../../data/protocolLayers"; 
 
import "./protocols.css"; 
import useModuleProgress from "../../hooks/useModuleProgress";
export default function Protocols() { 
    const navigate = useNavigate(); 
 
    const [activeLayer, setActiveLayer] = useState(0); 
 
    const layer = protocolLayers[activeLayer]; 
    useModuleProgress(
    6,
    activeLayer,
    protocolLayers.length
    );
    const changeLayer = (newLayer) => { 
        setActiveLayer(newLayer); 
 
        window.scrollTo({ 
            top: 0, 
            behavior: "smooth", 
        }); 
    }; 
 
    const openProtocol = (protocol) => { 
        navigate(`/${protocol.id}`); 
    }; 
 
    return ( 
        <div className="protocols-page"> 
 
            <aside className="protocols-sidebar"> 
 
                <button 
                    className="protocols-back" 
                    onClick={() => navigate("/dashboard")} 
                > 
                    Back 
                </button> 
 
                <h2>Network Protocols</h2> 
 
                <div className="protocols-layer-list"> 
 
                    {protocolLayers.map((item, index) => ( 
                        <button 
                            key={item.id} 
                            className={ 
                                activeLayer === index 
                                    ? "protocols-layer active" 
                                    : "protocols-layer" 
                            } 
                            onClick={() => changeLayer(index)} 
                        > 
                            <span> 
                                {item.layer.replace("Layer ", "")} 
                            </span> 
 
                            <strong> 
                                {item.name} 
                            </strong> 
                        </button> 
                    ))} 
 
                </div> 
 
            </aside> 
 
 
            <main className="protocols-content"> 
 
 
 
                <section className="protocols-layer-content"> 
 
                    <div className="protocols-section-title"> 
                        {layer.name} Layer 
                    </div> 
 
 
                    <div className="protocols-grid"> 
 
                        {layer.protocols.map((protocol) => ( 
 
                            <button 
                                key={protocol.id} 
                                className="protocol-card" 
                                onClick={() => openProtocol(protocol)} 
                            > 
                                <h3> 
                                    {protocol.name} 
                                </h3> 
                            </button> 
 
                        ))} 
 
                    </div> 
 
                </section> 
 
 
                <div className="protocols-navigation"> 
 
                    <button 
                        disabled={activeLayer === 0} 
                        onClick={() => 
                            changeLayer(activeLayer - 1) 
                        } 
                    > 
                        Previous 
                    </button> 
 
                    <button 
                        disabled={ 
                            activeLayer === 
                            protocolLayers.length - 1 
                        } 
                        onClick={() => 
                            changeLayer(activeLayer + 1) 
                        } 
                    > 
                        Next 
                    </button> 
 
                </div> 
 
            </main> 
 
        </div> 
    ); 
}