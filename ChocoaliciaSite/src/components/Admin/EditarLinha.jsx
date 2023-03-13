import React, { useState } from 'react'
import { Form } from 'semantic-ui-react'
import Axios from 'axios'
import { useNavigate, useLocation } from 'react-router-dom';
import './Admin.css'
import NavAdmin from './NavAdmin';


export default function EditarLinha() {
    const location = useLocation();
    //console.log(location, " useLocation Hook");
    const { data } = location.state;

    console.log(data);

    return (
        <>
            <NavAdmin />
            <div className="central">
                <Form className="CRUD">
                    <h2>Editar linha comercial</h2>
                    <div className="novoProduto">
                        <label>Linha</label><br />
                        <input placeholder='Qual o nome da Linha Comercial' type='text' name='nomelinha' defaultValue={data.nomelinha} /><br />

                        <label>Descrição</label><br />
                        <input placeholder='Breve descrição sobre a Linha Comercial' type='text' name='descricaolinha' defaultValue={data.descricaolinha} /><br />
                    </div>
                    <button  type='submit' className="botaoCRUD">Atualizar</button>
                </Form>
            </div>
        </>
    )
}