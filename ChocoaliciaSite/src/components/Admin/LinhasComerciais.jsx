import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Axios from 'axios'
import NavAdmin from './NavAdmin';
import './Admin.css'
import ItemLC from './ItemLC';


export default function LinhasComerciais() {

    const [values, setValues] = useState();
    const [listLinhas, setlistLinhas] = useState([]);

    const localizaLinhas = () => {
        // busca os dados
        Axios.post("http://localhost:3001/buscaLinhas", {
            idlinha: response.data[0].idlinha,
            nomelinha: values.nomelinha,
            descricaolinha: values.descricaolinha,
        }).then((response) => {
            // traz o resultado do que foi buscado
            setlistLinhas([
                ...listLinhas,
                {
                    idlinha: response.data[0].idlinha,
                    nomelinha: values.nomelinha,
                    descricaolinha: values.descricaolinha,
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
                    <h2>Linhas Comerciais cadastradas</h2>

                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nome da linha</th>
                                <th>Descrição da linha</th>
                                <th>Editar</th>
                            </tr>
                        </thead>

                        <tbody>
                            {listLinhas.map((data) => {
                                // <ItemLC
                                //     listLinhas={data.listLinhas}
                                //     setlistLinhas={data.setlistLinhas}
                                //     idlinha={data.idlinha}
                                //     nomelinha={data.nomelinha}
                                //     descricaolinha={data.descricaolinha}
                                // />
                                return (
                                    <tr>
                                        <td>{data.idlinha}</td>
                                        <td>{data.nomelinha}</td>
                                        <td>{data.descricaolinha}</td>
                                        <td>
                                            {/* <Link to='/EditarLinha'><button onClick={() => setEditValues(props)}>Editar</button></Link> */}
                                            <Link to="/EditarLinha" state={{ data: data }}><button>Editar</button></Link>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>

                    <Link to='/AdicionarLinha'><button className="botaoCRUD">Adicionar linha comercial</button></Link>
                </div>
            </div>
        </>
    )
}