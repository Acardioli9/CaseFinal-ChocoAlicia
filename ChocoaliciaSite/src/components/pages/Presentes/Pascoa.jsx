import React, { useState, useEffect } from "react"
import '../pages.css'
import Axios from 'axios'

function Pascoa() {

    const [contador, setContador] = useState(0)
    const [showElement, setShowElement] = useState(false)
    const showOrHide = () => {
        setContador(contador + 1);
        if (contador % 2 === 0) {
            setShowElement(true)
        } else if ( contador % 2 === 1) {
            setShowElement(false)
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
            <div className="linhasComerciais"> {/*Páscoa*/}
                <button onClick={showOrHide} className="btn-presentes">
                    <h2>+ Linha Páscoa</h2>
                </button>
                <p className="linhaDescricao">Porque o que é bom deve ser saboreado o ano inteiro.<br />
                    Nossos ovos de colher te faz salivar do momento que você o vê até o último pedacinho de chocolate.
                </p>

                { showElement ?
                    <>
                        <div className="linhaOpcoes">
                            {listProdutos.map((data) => {
                                if (data.linha === "3") {
                                    return (
                                        <div className="produto">
                                            <img src="../../../../imgs/map_presentes/pascoa.png" />
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

            </div>{/*fim Pascoa*/}
        </>
    )
}

export default Pascoa