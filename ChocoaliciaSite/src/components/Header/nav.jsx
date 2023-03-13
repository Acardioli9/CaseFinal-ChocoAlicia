import React from "react";
import { Link } from 'react-router-dom'
import { NavBar } from "./navStyle";

function Nav() {

    return (
        <NavBar>  
            <ul> 
                <li><Link to='/QuemSomos'>Quem somos</Link></li>
                <li><Link to='/NossoTime'>Nosso Time</Link></li>
                <li><Link to='/Presentes'>Presentes</Link></li>
                <li><Link to='/Contato'>Contato</Link></li>
            </ul>
        </NavBar>
    )
}

export default Nav