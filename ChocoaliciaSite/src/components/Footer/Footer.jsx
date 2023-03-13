import React from "react"
import "./Footer.css"
import { Link } from 'react-router-dom'

function Footer() {

    return (
        <footer>
            <div className="logoRodape">
                <Link to='/'><img src="../../../../imgs/logo_chocoalicia_comFundo.png" /></Link>
            </div>

            <div className="rodape">
                <div className="textoRodape">
                    <div className="redesRodape">
                        <h4>Fale conosco</h4>
                        <div className="iconesRedes">
                            <img src="../../../../imgs/icons/wpp.png" />
                            <img src="../../../../imgs/icons/insta.png" />
                            <img src="../../../../imgs/icons/fb.png" />
                        </div>
                    </div>

                    <div className="funcionamento">
                        <h4>Horário de funcionamento</h4>
                        <p> Segunda a sábado: <span>10h às 22h</span><br />
                            Domingo e feriado: <span>13h às 21h</span></p>
                    </div>

                    <div id="localizacao">
                        <h4>Localização</h4>
                        <img width="200px" src="../../../../imgs/iframe.png" />
                    </div>
                </div> {/* fim textoRodape */}

                <div className="copyright">
                    <p><Link to='/LoginAdmin' target="blank">ChocoAlícia</Link> © Copyright 2022 - Todos os direitos reservados. CNPJ 00.000.000/0001-00.</p>
                    <p>Desenvolvido por <Link to='/ImpulseCompany'>Impulse Company</Link></p>
                </div>

            </div>{/* fim rodape */}
        </footer>
    )
}

export default Footer