import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './Admin.css'

// NÃO ESTÁ EM USO
// caso seja usado, será chamado no Produtos.jsx na parte do map

export default function ItemLC(props) {


    return (
        <>
            <tr>
                <td>{props.idlinha}</td>
                <td>{props.nomelinha}</td>
                <td>{props.descricaolinha}</td>
                <td>
                    <Link to=''><button onClick={() => setEditValues(props)}>Editar</button></Link>
                </td>
            </tr>
        </>
    )
}