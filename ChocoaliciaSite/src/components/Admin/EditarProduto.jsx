import React, { useState, useEffect } from 'react'
import { Form } from 'semantic-ui-react'
import Axios from 'axios'
import { useNavigate, useLocation } from 'react-router-dom';
import './Admin.css'
import NavAdmin from './NavAdmin';


export default function EditarProduto(props) {
    const location = useLocation();
    //console.log(location, " useLocation Hook");
    const { data } = location.state;

    const navigate = useNavigate();

    const [editValues, setEditValues] = useState({
        idprod: data.idprod,
        linha: data.linha,
        produto: data.produto,
        descricao: data.descricao,
        tamanho: data.tamanho,
        sabor: data.sabor,
        valor: data.valor,
    });

    const handleChangeValues = (values) => {
        setEditValues((prevValues) => ({
            ...prevValues,
            [values.target.idprod]: values.target.value,
        }));
    };


    // editar
    const handleEditProduto = () => {
        Axios.put("http://localhost:3001/edit", {
            idprod: editValues.idprod,
            linha: editValues.linha,
            produto: editValues.produto,
            descricao: editValues.descricao,
            tamanho: editValues.tamanho,
            sabor: editValues.sabor,
            valor: editValues.valor,
        }).then(() => {
            props.setListProdutos(
                props.listProdutos.map((value) => {
                    return value.idgames == editValues.idgames ?
                    {
                        idprod: editValues.idprod,
                        linha: editValues.linha,
                        produto: editValues.produto,
                        descricao: editValues.descricao,
                        tamanho: editValues.tamanho,
                        sabor: editValues.sabor,
                        valor: editValues.valor,
                    } : value;
                })
            );
        });
        navigate('/Admin');
    };

    // deletar
    const handleDeleteProduto = () => {
        Axios.delete(`http://localhost:3001/delete/${editValues.idprod}`).then(() => {
            props.setListProdutos(
                props.listProdutos.filter((value) => {
                    return value.idprod != editValues.idprod;
                })
            );
        });
        navigate('/Admin');
    };


    return (
        <>
            <NavAdmin />
            <div className="central">
                <Form className="CRUD">
                    <h2>Atualizar produto</h2>
                    <div className="novoProduto">
                        <label>Linha</label><br />
                        <input placeholder='Qual a linha de presentes' id='linha' type='text' defaultValue={data.linha} onChange={handleChangeValues}/><br />

                        <label>Produto</label><br />
                        <input placeholder='Qual o nome do produto' id='produto' type='text' defaultValue={data.produto} onChange={handleChangeValues}/><br />

                        <label>Descrição</label><br />
                        <input placeholder='Breve descrição do produto' id='descricao' type='text' defaultValue={data.descricao} onChange={handleChangeValues}/><br />

                        <label>Tamanho</label><br />
                        <input placeholder='Qual o tamanho do produto' id='tamanho' type='text' defaultValue={data.tamanho} onChange={handleChangeValues}/><br />

                        <label>Sabor</label><br />
                        <input placeholder='Qual o sabor do produto' id='sabor' type='text' defaultValue={data.sabor} onChange={handleChangeValues}/><br />

                        <label>Valor</label><br />
                        <input placeholder='Qual o valor do produto' id='valor' type='text' defaultValue={data.valor} onChange={handleChangeValues}/><br />
                    </div>

                    <button type='submit' onClick={handleEditProduto} className="botaoCRUD">Atualizar</button>
                    <button type='submit' onClick={handleDeleteProduto} className="botaoCRUD">Deletar</button>
                </Form>
            </div>
        </>
    )
}
