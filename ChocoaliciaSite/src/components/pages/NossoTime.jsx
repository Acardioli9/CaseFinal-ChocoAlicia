import React from "react";
import './pages.css'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

function NossoTime() {

    return (
        <>
            <Header />
            <div id="nossoTime">
                <h1> A chocolateria artesanal mais doce do Rio!<br/>
                    Conheça nosso time!
                </h1>

                <div className="containerFuncionarios">
                    <div className="funcionario">
                    <img src="./public/imgs/nossotime/Chef.png"></img>
                    <h3>Alícia</h3>
                        <p className="cargo"><i>Chef chocolatier</i></p>
                        <p>Cria novas receitas, organiza e supervisiona a cozinha da ChocoAlícia com muito carinho e dedicação.</p>
                    </div>

                    <div className="funcionario">
                        <img src="./public/imgs/nossotime/sousChef.png"/>
                        <h3>João</h3>
                        <p className="cargo"><i>Sous chef chocolatier</i></p>
                        <p>Responsável pela apresentação menu degustação da nossa linha e co-orientação geral na produção dos chocolates.</p>
                    </div>

                    <div className="funcionario">
                        <img src="./public/imgs/nossotime/cozinheira.png"/>
                        <h3>Janaína</h3>
                        <p className="cargo">Cozinheira</p>
                        <p>Coloca em ação a base dos recheios mais deliciosos para te surpreender na primeira mordida.</p>
                    </div>

                    <div className="funcionario">
                        <img src="./public/imgs/nossotime/auxiliar.png"/>
                        <h3>Lucas</h3>
                        <p className="cargo"> Auxiliar de cozinha</p>
                        <p>Cuida com muito carinho da temperagem dos chocolates para trazer mais qualidade à apresentação dos nossos produtos.</p>
                    </div>

                    <div className="funcionario">
                        <img src="./public/imgs/nossotime/ajudante.png"/>
                        <h3>Paloma</h3>
                        <p className="cargo">Ajudante de cozinha</p>
                        <p>Seleciona e prepara todo o<i> mise en place</i> de nossas receitas.</p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}


export default NossoTime
