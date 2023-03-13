import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Axios from 'axios'
import NavAdmin from './NavAdmin';
import './Admin.css'


export default function Admin() {

       
    const [values, setValues] = useState();
    const [listProdutos, setListProdutos] = useState([]);
    
    // constante para localizar o produto no banco de dados sql
    const localizaProduto = () => {
        // busca os dados
        Axios.post("http://localhost:3001/busca", {
            idprod: response.data[0].idprod,
            linha: values.linha,
            produto: values.produto,
            descricao: values.descricao,
            tamanho: values.tamanho,
            sabor: values.sabor,
            valor: values.valor,
        }).then((response) => {
            // traz o resultado do que foi buscado
            setListProdutos([
                ...listProdutos,
                {
                    idprod: response.data[0].idprod,
                    linha: values.linha,
                    produto: values.produto,
                    descricao: values.descricao,
                    tamanho: values.tamanho,
                    sabor: values.sabor,
                    valor: values.valor,
                },
            ]);
        });
    }

    // mostra na tela o que foi encontrado
    useEffect(() => {
        Axios.get("http://localhost:3001/getProdutos").then((response) => {
          setListProdutos(response.data);
        });
    }, []);


    return (
        <>
            <NavAdmin />
            <Link to='/LinhasComerciais'><h1>Ver Linhas Comerciais</h1></Link>
            <Link to='/Produtos'><h1>Ver Produtos</h1></Link>
            
        </>
    )
}
