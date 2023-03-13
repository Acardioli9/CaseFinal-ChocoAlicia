import React from "react";
import './pages.css'

import Header from '../Header/Header'
import Footer from '../Footer/Footer'

function QuemSomos() {

    return (
        <>
            <Header />
            <div id="quemSomos">
                <div className="containerLeft">
                    <img src="../../../../imgs/quemsomos/choc3.jpg" />
                    <div className="textoQuemSomos">
                        <h2>O início</h2>
                        <p> A <span className="chocoalicia">ChocoAlícia</span> surgiu em 1993, numa pequena cozinha em Bangu, com produção artesanal para
                            venda direta aos operários da antiga fábrica de Tecidos Bangu. Com o passar dos anos e o fechamento
                            da fábrica inglesa, em 2004, a <i>chef</i> Alícia voltou a vender seus bombons por venda direta, e
                            aos poucos novos clientes foram conquistados.</p>
                    </div>
                </div>

                <div className="containerRight">
                    <div className="textoQuemSomos">
                        <h2>Novos rumos</h2>
                        <p>Com o passar dos anos, e após inciar um cardápio para pequenas festas e eventos, nossa <i>chef
                            chocolatier</i> percebeu que sua cozinha já não comportava produzir tantas encomendas, e decidiu
                            dar mais um passo em sua empreitada.<br /><br />
                            Em 2014, ela expandiu sua equipe e abriu sua primeira loja física, no mesmo local que deu início
                            ao seu negócio, no Shopping Bangu.<br /><br />
                            Lá, você encontra um pouquinho da nossa história em formato de chocolate, e um atendimento exclusivo
                            para orçamentos.
                        </p>
                    </div>
                    <img src="../../../../imgs/quemsomos/choc2.jpg" />
                </div>

                <div className="containerLeft">
                    <img src="../../../../imgs/quemsomos/choc1.jpg" />
                    <div className="textoQuemSomos">
                        <h2>Mais que produtos</h2>
                        <p>Hoje, conseguimos alcançar muito mais corações fazendo o que mais amamos: chocolate!
                            Nosso serviços irão agregar ao seu evento uma experiência única de sabores, cheiros e texturas.<br /><br />
                            A <span className="chocoalicia">ChocoAlícia</span> conta com um catálogo diversificado, e garantimos o melhor custo benefício, além de
                            atendimento diferenciado para entender e atender sua demanda.<br /><br />
                            E por aqui você encontra opções incríveis para presentes!
                        </p>
                    </div>
                </div>

            </div> {/* fim #quemSomos */}
            <Footer />
        </>
    )
}

export default QuemSomos