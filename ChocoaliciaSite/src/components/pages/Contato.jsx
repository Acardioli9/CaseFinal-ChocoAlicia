import React, { useState } from "react";
import './pages.css'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

function Contato() {
    const[name, setName] = useState('')
    const[sobrenome, setSobrenome] = useState('')
    const[email, setEmail] = useState('')
    const[mensagem, setMensagem] = useState('')

    function sendEmail(e){
        e.preventDefault();
        alert("Mensagem enviada!")
        setName('')
        setEmail('')
        setMensagem('')
        setSobrenome('')
    }

    return (
        <>
            <Header />
            <div id="contato">
                <form onSubmit={sendEmail}>
                    <div><h2>Fale conosco</h2></div>
                    <div className="nomeSobrenome">
                        <div className="nome">
                            <label for="name">Nome</label><br/>
                            <input type="text" id="name" placeholder="Digite seu nome" onChange={(e) => setName(e.target.value)} value={name}  required /><br/>
                        </div>
                        <div className="sobrenome">
                            <label for="surname">Sobrenome</label><br/>
                            <input type="text" id="surname" placeholder="Digite seu sobrenome" onChange={(e) => setSobrenome(e.target.value)} value={sobrenome} required/>
                        </div>
                    </div>
                    <label for="email">E-mail</label><br/>
                    <input type="email" id="email" placeholder="Digite seu e-mail" onChange={(e) => setEmail(e.target.value)} value={email} required/><br/>
                    <br/>
                    <label for="message">Messagem</label><br/>
                    <textarea type="message" id="message" placeholder="Escreva sua mensagem..." onChange={(e) => setMensagem(e.target.value)} value={mensagem} required></textarea>
                    <br/><br/>
                    <input type="submit" id="button" value="Enviar" className="enviar" />
                </form>


                <div className="redesSociais">
                    <div className="canaisContato">
                        <img src="../../../../imgs/icons/wpp.png"/>
                        <div className="contatoDescricao">
                            <p>Um canal de contato direto conosco</p>
                            <p><a href="#">(21)98765-4321</a></p>
                        </div>
                    </div>

                    <div className="canaisContato">
                        <img src="../../../../imgs/icons/insta.png"/>
                        <div className="contatoDescricao">
                            <p>Fique por dentro de tudo</p>
                            <p><a href="#">@chocoalicia</a></p>
                        </div>
                    </div>

                    <div className="canaisContato">
                        <img src="../../../../imgs/icons/fb.png"/>
                        <div className="contatoDescricao">
                            <p>Acompanhe nossas novidades</p>
                            <p><a href="#">fb/ChocoAlicia</a></p>
                        </div>
                    </div>

                    <div className="canaisContato">
                        <img src="../../../../imgs/icons/ifood.png"/>
                        <div className="contatoDescricao">
                            <p>Faça seu pedido</p>
                            <p><a href="#">Loja ChocoAlícia</a></p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />

        </>
    )

}

export default Contato