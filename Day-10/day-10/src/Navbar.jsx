
import {NavLink} from 'react-router-dom'

const links = [

    {
        to:'/',
        label:'Home'
    },
    {
        to:'/data',
        label:'Product'
    },
    {
        to:'/about',
        label:'About'
    }

]

// Normal Link tags

// export default function Navbar(){

//     return <div style={{display:'flex',justifyContent:'space-evenly'}}>

//     {
//         links.map((link)=>{
//             return <Link to={link.to}>{link.label}</Link>
//         })
//     }

//     </div>

// }


// "NavLink" tag : - it's same as normal tag but it gives one additional feature that we can style a particular link on the base of state : 'isActive' 

// style = { ({isActive})=>{
//     return isActive?Activestyle:defaultstyle
//    }
// }

export default function Navbar(){

    const defaultstyle={
        color:"black",
        textDecoration:"none",
        fontSize:"21px"
    }
    const Activestyle={
        color:"red",
        textDecoration:"none",
        fontSize:"21px"
    }

    return <div style={{display:'flex',justifyContent:'space-evenly',margin:'20px auto'}}>

    {
        links.map((link)=>{
            return <NavLink to={link.to} style={({isActive})=>{
                return isActive?Activestyle:defaultstyle
            }} >{link.label}</NavLink>
        })
    }

    </div>

}