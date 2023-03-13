import React, { useState } from 'react'
import { Form } from 'semantic-ui-react'
import Axios from 'axios'
import { useNavigate } from "react-router-dom";
import './Admin.css'
import NavAdmin from './NavAdmin';


export default function AdcLinha() {

    const navigate = useNavigate();

    // Envio de dados para o banco sql
    const [values, setValues] = useState();

    const handleRegisterLinha = () => {
        Axios.post("http://localhost:3001/AdcLinha", {
            nomelinha: values.nomelinha,
            descricaolinha: values.descricaolinha,
        }).then(() => {
            navigate('/LinhasComerciais')
        });
    };

    const handleaddValues = (value) => {
        setValues((prevValues) => ({
            ...prevValues,
            [value.target.name]: value.target.value,
        }));
    };

    return (
        <>
            <NavAdmin />
            <div className="central">
                <Form className="CRUD">
                    <h2>Cadastrar nova linha comercial</h2>
                    <div className="novoProduto">
                        <label>Linha</label><br />
                        <input placeholder='Qual o nome da Linha Comercial' type='text' name='nomelinha' onChange={handleaddValues} /><br />

                        <label>Descrição</label><br />
                        <input placeholder='Breve descrição sobre a Linha Comercial' type='text' name='descricaolinha' onChange={handleaddValues} /><br />
                    </div>
                    <button onClick={handleRegisterLinha} type='submit' className="botaoCRUD">Criar</button>
                </Form>
            </div>
        </>
    )
}
