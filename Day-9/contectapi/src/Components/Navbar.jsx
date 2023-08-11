import Leftnav from "./Leftnav";
import Rightnav from "./Rightnav";


export default function Navbar(){
    return <div style={{display:'flex',justifyContent:'space-around'}}>
        <Leftnav />
        <Rightnav />
    </div>
}