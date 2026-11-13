import { 
    BrowserRouter, 
    Routes, 
    Route, 
    Navigate 
} from "react-router-dom"; 
 
import Dashboard from "./pages/Dashboard"; 
import Fundamentals from "./pages/Fundamentals"; 
import FundamentalsTopic from "./pages/FundamentalsTopic"; 
import Devices from "./pages/Devices"; 
import OSIModel from "./pages/OSIModel"; 
import IpAddressing from "./pages/IpAddressing"; 
import RoutingSwitching from "./pages/RoutingSwitching"; 
import Login from "./pages/Login"; 
import Register from "./pages/Register"; 
import Protocols from "./pages/Protocols"; 
import Arp from "./pages/Arp"; 
import Http from "./pages/Http"; 
import Https from "./pages/Https"; 
import Dns from "./modules/protocols/application/dns/Dns"; 
import Dhcp from "./modules/protocols/application/dhcp/Dhcp"; 
import Smtp from "./modules/protocols/application/smtp/Smtp"; 
import Ftp from "./modules/protocols/application/ftp/Ftp"; 
import Pop3 from "./modules/protocols/application/pop3/Pop3"; 
import Imap from "./modules/protocols/application/imap/Imap"; 
import Telnet from "./modules/protocols/application/telnet/Telnet"; 
import Snmp from "./modules/protocols/application/snmp/Snmp"; 
import Tls from "./modules/protocols/presentation/tls/Tls"; 
import Mime from "./modules/protocols/presentation/mime/Mime"; 
import Rpc from "./modules/protocols/session/rpc/Rpc"; 
import Netbios from "./modules/protocols/session/netbios/Netbios"; 
import Tcp from "./modules/protocols/transport/tcp/Tcp"; 
import Udp from "./modules/protocols/transport/udp/Udp"; 
import Ip from "./modules/protocols/network/ip/Ip"; 
import Icmp from "./modules/protocols/network/icmp/Icmp"; 
import Ospf from "./modules/protocols/network/ospf/Ospf"; 
import Rip from "./modules/protocols/network/rip/Rip"; 
import Ethernet from "./modules/protocols/data-link/ethernet/Ethernet"; 
import Ppp from "./modules/protocols/data-link/ppp/Ppp"; 
import Stp from "./modules/protocols/data-link/stp/Stp"; 
import Wifi from "./modules/protocols/physical/wifi/Wifi"; 
import Dsl from "./modules/protocols/physical/dsl/Dsl"; 
import Bluetooth from "./modules/protocols/physical/bluetooth/Bluetooth"; 
import Quiz from "./pages/Quiz"; 
import NetworkFundamentalsQuiz from "./modules/quiz/network-fundamentals/NetworkFundamentalsQuiz"; 
import NetworkDevicesQuiz from "./modules/quiz/network-devices/NetworkDevicesQuiz"; 
import OsiQuiz from "./modules/quiz/osi-model/OsiQuiz";
import IpAddressingQuiz from "./modules/quiz/ip-addressing/IpAddressingQuiz";
import RoutingSwitchingQuiz
    from "./modules/quiz/routing-switching/RoutingSwitchingQuiz";
import NetworkProtocolsQuiz
    from "./modules/quiz/network-protocols/NetworkProtocolsQuiz";
import GrandTest from "./modules/quiz/grand-test/GrandTest";
import ModuleProgressTracker from "./components/ModuleProgressTracker";
function App() { 

    return ( 
        <BrowserRouter> 
            <ModuleProgressTracker />
            <Routes> 
 
                <Route 
                    path="/" 
                    element={<Navigate to="/login" replace />} 
                /> 
 
                <Route 
                    path="/login" 
                    element={<Login />} 
                /> 
 
                <Route 
                    path="/register" 
                    element={<Register />} 
                /> 
 
                <Route 
                    path="/dashboard" 
                    element={<Dashboard />} 
                /> 
 
                <Route 
                    path="/fundamentals" 
                    element={<Fundamentals />} 
                /> 
 
                <Route 
                    path="/fundamentals/:topicId" 
                    element={<FundamentalsTopic />} 
                /> 
 
                <Route 
                    path="/devices" 
                    element={<Devices />} 
                /> 
 
                <Route 
                    path="/osi-model" 
                    element={<OSIModel />} 
                /> 
 
                <Route 
                    path="/ip-addressing" 
                    element={<IpAddressing />} 
                /> 
 
                <Route 
                    path="/routing-switching" 
                    element={<RoutingSwitching />} 
                /> 
 
                <Route 
                    path="/protocols" 
                    element={<Protocols />} 
                /> 
 
                <Route 
                    path="/arp" 
                    element={<Arp />} 
                /> 
 
                <Route 
                    path="/http" 
                    element={<Http />} 
                /> 
 
                <Route 
                    path="/https" 
                    element={<Https />} 
                /> 
 
                <Route 
                    path="/dns" 
                    element={<Dns />} 
                /> 
 
                <Route 
                    path="/dhcp" 
                    element={<Dhcp />} 
                /> 
 
                <Route 
                    path="/smtp" 
                    element={<Smtp />} 
                /> 
 
                <Route 
                    path="/ftp" 
                    element={<Ftp />} 
                /> 
 
                <Route 
                    path="/pop3" 
                    element={<Pop3 />} 
                /> 
 
                <Route 
                    path="/imap" 
                    element={<Imap />} 
                /> 
 
                <Route 
                    path="/telnet" 
                    element={<Telnet />} 
                /> 

                <Route 
                    path="/snmp" 
                    element={<Snmp />} 
                /> 

                <Route 
                    path="/tls" 
                    element={<Tls />} 
                /> 

                <Route 
                    path="/mime" 
                    element={<Mime />} 
                /> 

                <Route  
                    path="/rpc"  
                    element={<Rpc />}  
                /> 

                <Route 
                    path="/netbios" 
                    element={<Netbios />} 
                /> 

                <Route 
                    path="/tcp" 
                    element={<Tcp />} 
                /> 

                <Route 
                    path="/udp" 
                    element={<Udp />} 
                /> 

                <Route 
                    path="/ip" 
                    element={<Ip />} 
                /> 

                <Route 
                    path="/icmp" 
                    element={<Icmp />} 
                /> 

                <Route 
                    path="/ospf" 
                    element={<Ospf />} 
                /> 

                <Route 
                    path="/rip" 
                    element={<Rip />} 
                /> 

                <Route 
                    path="/ethernet" 
                    element={<Ethernet />} 
                /> 

                <Route 
                    path="/ppp" 
                    element={<Ppp />} 
                /> 

                <Route 
                    path="/stp" 
                    element={<Stp />} 
                /> 

                <Route 
                    path="/wifi" 
                    element={<Wifi />} 
                /> 

                <Route 
                    path="/dsl" 
                    element={<Dsl />} 
                /> 

                <Route 
                    path="/bluetooth" 
                    element={<Bluetooth />} 
                /> 

                <Route 
                    path="/quiz" 
                    element={<Quiz />} 
                /> 

                <Route 
                    path="/quiz/network-fundamentals" 
                    element={<NetworkFundamentalsQuiz />} 
                /> 

                <Route 
                    path="/quiz/network-devices" 
                    element={<NetworkDevicesQuiz />} 
                /> 
                <Route
                    path="/quiz/osi-model"
                    element={<OsiQuiz />}
                />
                <Route 
                    path="/quiz/ip-addressing" 
                    element={<IpAddressingQuiz />} 
                />
                <Route
                    path="/quiz/routing-switching"
                    element={<RoutingSwitchingQuiz />}
                />
                <Route
                    path="/quiz/network-protocols"
                    element={<NetworkProtocolsQuiz />}
                />
                <Route
                    path="/quiz/grand-test"
                    element={<GrandTest />}
                />
            </Routes> 
        </BrowserRouter> 
    ); 
} 
 
export default App;