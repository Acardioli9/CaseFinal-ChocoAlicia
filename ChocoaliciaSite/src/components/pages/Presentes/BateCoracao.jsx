import React, { useState, useEffect } from "react"
import '../pages.css'
import Axios from 'axios'

function BateCoracao() {

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

    const [listProdutos, setListProdutos] = useState([]);

    // constante para localizar o produto no banco de dados sql
    const localizaProduto = () => {
        // busca os dados
        Axios.post("http://localhost:3001/busca", {
            id: response.data[0].id,
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
                id: response.data[0].id,
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
            <div className="linhasComerciais"> {/*Bate Coração*/}
                <button onClick={showOrHide} className="btn-presentes">
                    <h2>+ Linha Bate Coração</h2>
                </button>
                <p className="linhaDescricao">Corações lapidados para você demonstrar todo seu amor pela pessoa querida.<br />
                    Apresentado em uma embalagem que vai fazer seu coração palpitar de felicidade.
                </p>

                { showElement ?
                    <>
                        <div className="linhaOpcoes">
                            {listProdutos.map((data) => {
                                if (data.linha === "1") {
                                    return (
                                        <div className="produto">
                                            <img src="../../../../imgs/map_presentes/batecoracao.png" />
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
                                }
                            })}
                        </div> {/* fim linhaOpcoes */}
                    </>
                : null }

            </div>{/* fim Bate Coração */}
        </>
    )
}

export default BateCoracao