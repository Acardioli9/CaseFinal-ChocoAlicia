import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Axios from 'axios'
import NavAdmin from './NavAdmin';
import './Admin.css'
import Item from './Item'


export default function Produtos() {


    // PRODUTOS
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


    // LINHAS COMERCIAIS
    const [valuesLC, setValuesLC] = useState();
    const [listLinhas, setlistLinhas] = useState([]);

    const localizaLinhas = () => {
        // busca os dados
        Axios.post("http://localhost:3001/buscaLinhas", {
            idlinha: response.data[0].idlinha,
            nomelinha: valuesLC.nomelinha,
            descricaolinha: valuesLC.descricaolinha,
        }).then((response) => {
            // traz o resultado do que foi buscado
            setlistLinhas([
                ...listLinhas,
                {
                    idlinha: response.data[0].idlinha,
                    nomelinha: valuesLC.nomelinha,
                    descricaolinha: valuesLC.descricaolinha,
                },
            ]);
        });
    }

    // mostra na tela o que foi encontrado
    useEffect(() => {
        Axios.get("http://localhost:3001/getLinhas").then((response) => {
            setlistLinhas(response.data);
        });
    }, []);


    return (
        <>
            <NavAdmin />
            <div className="central">
                <div className="containerAdmin">
                    <h2>Produtos cadastrados</h2>
                    <Link to='/Presentes' target='blank'><p>Ver produtos no site</p></Link>
                    <div className="opcoeslinhas">
                        <p>Legenda linhas comerciais:</p>
                        {listLinhas.map((data, index) => {
                            return (
                                <p key={index}><b>{data.idlinha}</b>.{data.nomelinha}</p>
                            )
                        })}
                    </div>

                    <table>
                        <thead>
                            <tr>
                                <th>Linha</th>
                                <th>Produto</th>
                                <th>Descrição</th>
                                <th>Tamanho</th>
                                <th>Sabor</th>
                                <th>Valor</th>
                                <th>Editar</th>
                            </tr>
                        </thead>

                        <tbody>
                            {/* {listProdutos.map((data) => (
                                <Item
                                    listProdutos={data.listProdutos}
                                    setListProdutos={data.setListProdutos}
                                    idprod={data.idprod}
                                    linha={data.linha}
                                    produto={data.produto}
                                    descricao={data.descricao}
                                    tamanho={data.tamanho}
                                    sabor={data.sabor}
                                    valor={data.valor}
                                />
                            ))} */}

                            {listProdutos.map((data, index) => {
                                return (
                                    <tr key={ data.idprod }>
                                        <td>{ data.linha}</td>
                                        <td>{ data.produto}</td>
                                        <td>{ data.descricao}</td>
                                        <td>{ data.tamanho}</td>
                                        <td>{ data.sabor}</td>
                                        <td>R$ { data.valor}</td>
                                        <td>
                                            {/* <Link to='/EditarProduto'><button onClick={() => setEditValues(props)}>Editar</button></Link> */}
                                            <Link to="/EditarProduto" state={{ data: data }}><button>Editar</button></Link>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>

                    <Link to='/AdicionarProduto'><button className="botaoCRUD">Adicionar produto</button></Link>
                </div>
            </div>
        </>
    )
}
