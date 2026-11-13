export default function VLANDiagram() {  
    return (  
        <div className="vlan-diagram">  
            <svg  
                viewBox="0 0 1100 620"  
                width="100%"  
                height="100%"  
                preserveAspectRatio="xMidYMid meet"  
            >  
                {/* Main diagram area */}  
                <rect  
                    x="20"  
                    y="20"  
                    width="1060"  
                    height="580"  
                    rx="18"  
                    fill="#f8fbff"  
                    stroke="#c7d9eb"  
                    strokeWidth="2"  
                />  
  
                {/* Title */}  
                <text  
                    x="550"  
                    y="62"  
                    textAnchor="middle"  
                    fontSize="20"  
                    fontWeight="700"  
                    fill="#07518f"  
                >  
                    VLAN SEGMENTATION  
                </text>  
  
                {/* VLAN 10 box */}  
                <rect  
                    x="55"  
                    y="105"  
                    width="330"  
                    height="430"  
                    rx="14"  
                    fill="#ffffff"  
                    stroke="#c7d9eb"  
                    strokeWidth="2"  
                />  
  
                <text  
                    x="80"  
                    y="140"  
                    fontSize="17"  
                    fontWeight="700"  
                    fill="#07518f"  
                >  
                    VLAN 10  
                </text>  
  
                {/* VLAN 20 box */}  
                <rect  
                    x="715"  
                    y="105"  
                    width="330"  
                    height="430"  
                    rx="14"  
                    fill="#ffffff"  
                    stroke="#c7d9eb"  
                    strokeWidth="2"  
                />  
  
                <text  
                    x="740"  
                    y="140"  
                    fontSize="17"  
                    fontWeight="700"  
                    fill="#07518f"  
                >  
                    VLAN 20  
                </text>  
  
                {/* Connection lines */}  
                <line  
                    x1="255"  
                    y1="225"  
                    x2="475"  
                    y2="305"  
                    stroke="#9bb8d1"  
                    strokeWidth="6"  
                    strokeLinecap="round"  
                />  
  
                <line  
                    x1="255"  
                    y1="435"  
                    x2="475"  
                    y2="315"  
                    stroke="#9bb8d1"  
                    strokeWidth="6"  
                    strokeLinecap="round"  
                />  
  
                <line  
                    x1="625"  
                    y1="305"  
                    x2="845"  
                    y2="225"  
                    stroke="#9bb8d1"  
                    strokeWidth="6"  
                    strokeLinecap="round"  
                />  
  
                <line  
                    x1="625"  
                    y1="315"  
                    x2="845"  
                    y2="435"  
                    stroke="#9bb8d1"  
                    strokeWidth="6"  
                    strokeLinecap="round"  
                />  
  
                {/* PC1 */}  
                <rect  
                    x="105"  
                    y="185"  
                    width="150"  
                    height="80"  
                    rx="10"  
                    fill="#ffffff"  
                    stroke="#087ee8"  
                    strokeWidth="2"  
                />  
  
                <text  
                    x="180"  
                    y="232"  
                    textAnchor="middle"  
                    fontSize="16"  
                    fontWeight="700"  
                    fill="#07518f"  
                >  
                    PC1  
                </text>  
  
                {/* PC2 */}  
                <rect  
                    x="105"  
                    y="395"  
                    width="150"  
                    height="80"  
                    rx="10"  
                    fill="#ffffff"  
                    stroke="#087ee8"  
                    strokeWidth="2"  
                />  
  
                <text  
                    x="180"  
                    y="442"  
                    textAnchor="middle"  
                    fontSize="16"  
                    fontWeight="700"  
                    fill="#07518f"  
                >  
                    PC2  
                </text>  
  
                {/* PC3 */}  
                <rect  
                    x="845"  
                    y="185"  
                    width="150"  
                    height="80"  
                    rx="10"  
                    fill="#ffffff"  
                    stroke="#087ee8"  
                    strokeWidth="2"  
                />  
  
                <text  
                    x="920"  
                    y="232"  
                    textAnchor="middle"  
                    fontSize="16"  
                    fontWeight="700"  
                    fill="#07518f"  
                >  
                    PC3  
                </text>  
  
                {/* PC4 */}  
                <rect  
                    x="845"  
                    y="395"  
                    width="150"  
                    height="80"  
                    rx="10"  
                    fill="#ffffff"  
                    stroke="#087ee8"  
                    strokeWidth="2"  
                />  
  
                <text  
                    x="920"  
                    y="442"  
                    textAnchor="middle"  
                    fontSize="16"  
                    fontWeight="700"  
                    fill="#07518f"  
                >  
                    PC4  
                </text>  
  
                {/* Central switch */}  
                <rect  
                    x="475"  
                    y="255"  
                    width="150"  
                    height="110"  
                    rx="12"  
                    fill="#ffffff"  
                    stroke="#087ee8"  
                    strokeWidth="3"  
                />  
  
                <text  
                    x="550"  
                    y="315"  
                    textAnchor="middle"  
                    fontSize="18"  
                    fontWeight="700"  
                    fill="#07518f"  
                >  
                    SWITCH  
                </text>  
  
                {/* Hidden animation paths */}  
                <path  
                    id="vlanPath1"  
                    d="M255 225 L475 305"  
                    fill="none"  
                    stroke="transparent"  
                />  
  
                <path  
                    id="vlanPath2"  
                    d="M475 315 L255 435"  
                    fill="none"  
                    stroke="transparent"  
                />  
  
                <path  
                    id="vlanPath3"  
                    d="M625 305 L845 225"  
                    fill="none"  
                    stroke="transparent"  
                />  
  
                <path  
                    id="vlanPath4"  
                    d="M625 315 L845 435"  
                    fill="none"  
                    stroke="transparent"  
                />  
  
                {/* Single moving data dot */}  
                <circle  
                    r="9"  
                    fill="#087ee8"  
                    stroke="#ffffff"  
                    strokeWidth="3"  
                >  
                    <animateMotion  
                        dur="4s"  
                        repeatCount="indefinite"  
                        calcMode="linear"  
                        path="M255 435 L475 315 L625 315 L845 435"  
                    />  
  
                    <animate  
                        attributeName="opacity"  
                        values="1;1;0;0;1;1"  
                        keyTimes="0;0.39;0.40;0.60;0.61;1"  
                        dur="4s"  
                        repeatCount="indefinite"  
                    />  
                </circle>  
  
                {/* Switch port indicators */}  
                <circle  
                    cx="475"  
                    cy="305"  
                    r="4"  
                    fill="#087ee8"  
                />  
  
                <circle  
                    cx="475"  
                    cy="315"  
                    r="4"  
                    fill="#087ee8"  
                />  
  
                <circle  
                    cx="625"  
                    cy="305"  
                    r="4"  
                    fill="#087ee8"  
                />  
  
                <circle  
                    cx="625"  
                    cy="315"  
                    r="4"  
                    fill="#087ee8"  
                />  
            </svg>  
        </div>  
    );  
}