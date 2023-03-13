import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './Admin.css'

// NÃO ESTÁ EM USO
// caso seja usado, será chamado no Produtos.jsx na parte do map

export default function Item(props) {


    return (
        <>
            <tr key={props.idprod}>
                <td>{props.idprod}</td>
                <td>{props.linha}</td>
                <td>{props.produto}</td>
                <td>{props.descricao}</td>
                <td>{props.tamanho}</td>
                <td>{props.sabor}</td>
                <td>R$ {props.valor}</td>
                <td>
                    {/* <Link to='/EditarProduto'><button onClick={() => setEditValues(props)}>Editar</button></Link> */}
                    <Link to="/EditarLinha" state={{ data: props }}><button>Editar</button></Link>
                </td>
            </tr>
        </>
    )
}