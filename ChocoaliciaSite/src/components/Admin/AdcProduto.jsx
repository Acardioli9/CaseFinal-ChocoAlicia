import React, { useState, useEffect } from 'react'
import { Form } from 'semantic-ui-react'
import Axios from 'axios'
import { useNavigate } from "react-router-dom";
import './Admin.css'
import NavAdmin from './NavAdmin';


export default function AdcProduto() {

    const navigate = useNavigate();

    // Envio de dados para o banco sql
    const [values, setValues] = useState();

    const handleRegisterProduto = () => {
        Axios.post("http://localhost:3001/AdcProduto", {
            linha: values.linha,
            produto: values.produto,
            descricao: values.descricao,
            tamanho: values.tamanho,
            sabor: values.sabor,
            valor: values.valor,
        }).then(() => {
            navigate('/Produtos')
        });
    };

    const handleaddValues = (value) => {
        setValues((prevValues) => ({
            ...prevValues,
            [value.target.name]: value.target.value,
        }));
    };


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
                <Form className="CRUD">
                    <h2>Cadastrar novo produto</h2>
                    <div className="novoProduto">
                        <label>Linha</label><br />
                        <p> Escolha um dos números a seguir: </p>
                        <div className="opcoeslinhas">
                            {listLinhas.map((data) => {
                                return (
                                    <p><b>{data.idlinha}</b>.{data.nomelinha}</p>
                                )
                            })}
                        </div>
                        <input placeholder='Qual a linha de presentes' type='text' name='linha' onChange={handleaddValues}/><br />

                        <label>Produto</label><br />
                        <input placeholder='Qual o nome do produto' type='text' name='produto' onChange={handleaddValues}/><br />

                        <label>Descrição</label><br />
                        <input placeholder='Breve descrição do produto' type='text' name='descricao' onChange={handleaddValues}/><br />

                        <label>Tamanho</label><br />
                        <input placeholder='Qual o tamanho do produto' type='text' name='tamanho' onChange={handleaddValues}/><br />

                        <label>Sabor</label><br />
                        <input placeholder='Qual o sabor do produto' type='text' name='sabor' onChange={handleaddValues}/><br />

                        <label>Valor</label><br />
                        <input placeholder='Qual o valor do produto' type='text' name='valor' onChange={handleaddValues}/><br />
                    </div>
                    <button onClick={handleRegisterProduto} type='submit' className="botaoCRUD">Criar</button>
                </Form>


            </div>
        </>
    )
}
