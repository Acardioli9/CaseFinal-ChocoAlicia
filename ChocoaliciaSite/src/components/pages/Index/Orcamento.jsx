import React from "react";
import '../pages.css'



function Orcamento() {

    return (
        <>
            <div className="orcamento">
                <div className="orcamento-imagens">
                    <img src="./imgs/orcamento-index/000.jpg"></img>
                    <img src="./imgs/orcamento-index/0000.jpg"></img>
                    <img src="./imgs/orcamento-index/00000.jpg"></img>
                </div>

                <div className="textoOrcamento">
                    <h1>Leve ChocoAlícia ao seu evento</h1>
                    <p>Nossa chocolateria conta com os mais diversos itens para compor sua mesa de chocolates
                        e encantar seus convidados.
                    </p>
                    <p>Realizamos eventos corporativos, aniversários e cerimoniais. São mais de cinquenta tipos
                        de bombons com diferentes sabores e apresentações para sua ornamentação.
                    </p>
                    <p>Em nosso espaço no Shopping Bangu você poderá experimentar nosso menu degustação e selecionar
                        os produtos que serão servidos em seu evento.
                    </p>
                    <br/>
                    <p>Veja algumas opções do nosso cardápio:</p>

                    <div className="opcoesOrcamento">
                        <ul>
                            <li>Copinho de avelã </li>
                            <li>Copinho de brigadeiro</li>
                            <li>Copinho de beijinho</li>
                            <li>Copinho de amora</li>
                            <li>Camafeu de nozes</li>
                            <li>Língua de gato ao leite</li>
                            <li>Colher de chocolate</li>
                            <li>Docinhos no palito</li>
                        </ul>
                        <ul>
                            <li>Mini trufas frutadas</li>
                            <li>Mini brownie</li>
                            <li>Bombons de mousse de chocolate</li>
                            <li>Bombons de licor cereja</li>
                            <li>Bombons de uva</li>
                            <li>Bombons de pimenta rosa</li>
                            <li>Mediants de damasco</li>
                            <li><b>E muito mais...</b></li>
                        </ul>
                    </div>

                    <p className="destaque">Entre em contato conosco e agende sua visita!</p>

                </div>
            </div>
        </>





















    )
}

export default Orcamento