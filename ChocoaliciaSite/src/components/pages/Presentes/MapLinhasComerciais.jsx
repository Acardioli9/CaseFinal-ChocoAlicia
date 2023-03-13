import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Axios from 'axios'
import '../pages.css'

// NÃO ESTÁ USO. Muitas coisas para ajuste


function MapLinhasComerciais() {


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


    // abrir e fechar div da linha comercial
    const [contador, setContador] = useState(0)
    const [showElement, setShowElement] = useState(true)
    const showOrHide = () => {
        setContador(contador + 1);
        if (contador % 2 === 0) {
            setShowElement(false)
        } else if ( contador % 2 === 1) {
            setShowElement(true)
        }
    }


    return (
        <>
            {listLinhas.map((val) => {
                return (
                    <div className="linhasComerciais">
                        {/* problema com o showorHide, pois com o map, ele fecha e abre todas as divs, não apenas a selecionada */}
                        <button onClick={showOrHide} className="btn-presentes">
                            <h2>+ Linha {val.nomelinha}</h2>
                        </button>
                        <p className="linhaDescricao">{val.descricaolinha}</p>

                        { showElement ?
                            <>
                                <div className="linhaOpcoes">
                                    {listProdutos.map((data) => {
                                        // Precisa relacionar o nome da linha entre as entidades linhas comerciais e produtos
                                        // para que só apareça na sessão llinha comercial os produtos que são dessa linha

                                        // if (data.linha === val.idlinha) {
                                            return (
                                                <div className="produto">
                                                    <img src="../../../../imgs/map_presentes/geral.png" />
                                                    <div className="produtoInfos">
                                                        <h3>{data.produto}</h3>
                                                        <p className="produtoDescricao">{data.descricao}</p>
                                                        <p className="tamanhoSabor">{data.tamanho} | {data.sabor} </p>
                                                        <br />
                                                        <p className="preco">R$ {data.valor}</p>
                                                        <div className="botaoQuero">
                                                            <p>Eu quero</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            )

                                        // A ideia do else era: caso não encontro nada nas condições acima, retorno "Em breve"
                                        // mas ele esta retornando "em breve" para cada produto que ele mapeia

                                        // } else {
                                        //     return (
                                        //         <>
                                        //         <p className="linhaDescricao"><b>EM BREVE</b></p>
                                        //         </>
                                        //     )
                                        // }
                                    })}
                                </div> {/* fim linhaOpcoes */}
                            </>
                        : null }

                    </div> // fim Linha Comercial
                )
            })}
        </>
    )
}

export default MapLinhasComerciais