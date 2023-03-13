import React, { useState, useEffect } from "react"
import '../pages.css'
import Axios from 'axios'

function VoceEEspecial() {

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

    const localizaProduto = () => {
        Axios.post("http://localhost:3001/busca", {
            id: response.data[0].id,
            linha: values.linha,
            produto: values.produto,
            descricao: values.descricao,
            tamanho: values.tamanho,
            sabor: values.sabor,
            valor: values.valor,
        }).then((response) => {
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

    useEffect(() => {
        Axios.get("http://localhost:3001/getProdutos").then((response) => {
          setListProdutos(response.data);
        });
    }, []);


    return (
        <>
            <div className="linhasComerciais"> {/*Você é Especial*/}
                <button onClick={showOrHide} className="btn-presentes">
                    <h2>+ Linha Você é Especial</h2>
                </button>
                <p className="linhaDescricao">Suas datas comemorativas terão um toque especial e singular.<br />
                    Além do sabor que já é nossa marca, personalizamos seu presente para deixar sua cara.
                </p>

                { showElement ?
                    <>
                        <div className="linhaOpcoes">
                            {listProdutos.map((data) => {
                                if (data.linha === "2") {
                                    return (
                                        <div className="produto">
                                            <img src="../../../../imgs/map_presentes/voceeespecial.png" />
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
                        </div>{/*fim linhaOpcoes*/}
                    </>
                : null }

            </div>{/*fim Você é Especial*/}
        </>
    )
}

export default VoceEEspecial