import React from 'react';
import '../pages.css';
import Orcamento from './Orcamento';
import Carrossel from './Carrossel';
import { Link } from 'react-router-dom'
import Header from '../../Header/Header'
import Footer from '../../Footer/Footer'


function Index() {

    return (
        <>
            <Header />
            <div id="index">
                <Carrossel />
                <div id="paragrafo">
                    <p className="slogan">A chocolateria líder de vendas para festas e eventos na cidade do Rio de Janeiro.</p>
                    <p className="destaqueSlogan">Especialistas em proporcionar momentos únicos e criar boas memórias através do sabor.</p>
                </div>
                <Orcamento />
                <div className="linkPresentes">
                    <h1><Link to="/Presentes">Para presentear</Link></h1>
                    <Link to="/Presentes">
                        <div className="fotosPresentes">
                            <img src="./imgs/presentes-index/florescer1.jpg"></img>
                            <img src="./imgs/presentes-index/batecoracao1.jpg"></img>
                            <img src="./imgs/presentes-index/florescer2.jpg"></img>
                            <img src="./imgs/presentes-index/meuamor1.jpg"></img>
                        </div>
                    </Link>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Index
