import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
    return (
        <div style={{display:'flex', justifyContent:'space-evenly',margin:'25px auto'}}>
            <Link to={"/"}>Home</Link>
            <Link to={"/addtodo"}>Create Todo</Link>
            <Link to={"/showtodo"}>Todo Page</Link>
            <Link to={"/counter"}>Counter</Link>
            <Link to={"/login"}>Login</Link>

        </div>
        
    )
}

export default Nav
