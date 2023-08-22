
import { NavLink } from 'react-router-dom'

import styled from 'styled-components'



const Navlinks = [


    {
        to: '/',
        label: "Home"
    },

    {
        to: '/login',
        label: "Login"
    },

    {
        to: '/admin',
        label: "Admin"
    }

]




function Navbar() {


    return (
        <WRAPPER>

            {
                Navlinks.map((ele,i) => {
                    return <NavLink key={i} to={ele.to}>{ele.label}</NavLink>
                })
            }

        </WRAPPER>
    )
}

export default Navbar


const WRAPPER = styled.div`
    
    width: 80%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin: 20px auto;

    a{
        text-decoration: none;
        font-size: 18px;
        font-family: 'Courier New', Courier, monospace;
        font-weight: bold;

    }

    .active{
        color:red;
    }

`
