import React from "react";
import './Admin.css'
import { useNavigate, Link } from 'react-router-dom'

function NavAdmin() {

    const navigate = useNavigate();
    const logout = () => {
        localStorage.setItem("user_loggin", false)
        navigate("/")
    }

    return (
        <div className="headerAdmin">
            <h3>Área de administrador</h3>
            <ul>
                <li><Link to='/Admin'>Admin</Link></li>
                <li><Link to='/LinhasComerciais'>Linhas Comerciais</Link></li>
                <li><Link to='/Produtos'>Produtos</Link></li>
                <li><a style={{cursor: "pointer"}} onClick={logout}>Sair</a></li>
            </ul>
        </div>
    )
}

export default NavAdmin