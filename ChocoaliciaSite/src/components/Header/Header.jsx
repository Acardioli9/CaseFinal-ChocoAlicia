import React, {useState} from "react";
import './Header.css'
import Nav from './nav'
import { Link } from 'react-router-dom'
import Modal from '../Header/Modal'

function Header() {

    const [isModalVisible, setIsModalVisible] = useState(false)

  const[email, setEmail] = useState('')
  const[password, setPassword] = useState('')



  function sendEmail(e){
      e.preventDefault();
      alert("Usuário e senha inválidos.")
  }



    return (
        <>
            <div className="topo">
                <div className="redes">
                    <img src="../../../../imgs/icons/wpp.png" />
                    <img src="../../../../imgs/icons/insta.png" />
                    <img src="../../../../imgs/icons/fb.png" />
                </div>

                <div className="topoPrincipal">
                    <Link to='/'><img src="../../../../imgs/logo_chocoalicia_comFundo.png" /></Link><br />
                </div>

                <div className="entrar">
                <div className="App">
      <button className="entrarr" onClick={()=>setIsModalVisible(true)}>Entrar</button>
      {isModalVisible ? ( <Modal onClose={() => setIsModalVisible(false)}>
      <div id="contato" >

<form className="form-caixa" onSubmit={sendEmail}>
    <div><h2 className='h2'>Acesse Sua Conta</h2></div>
    <div className="nomeSobrenome2">
        <div className="nome">
            <label for="name">Email</label><br/>
            <input type="text" id="Email2" placeholder="Digite seu email" onChange={(e) => setEmail(e.target.value)} value={email}  required /><br/>
        </div>
        <div className="sobrenome2">
            <label for="surname">Password</label><br/>
            <input type="password" id="password2" placeholder="Digite sua senha" onChange={(e) => setPassword(e.target.value)} value={password} required/>
        </div>
    </div>

    <input type="checkbox" className='checkbox2'  /> <small className='lembrar'>Lembrar-me</small> <br />

    <br />

    <input type="submit" id="button2" value="Enviar" className="Entrar" /> <br />
        <small className='senha'>esqueci minha senha</small>
</form>




</div>
      </Modal> ): null}
    </div>


                </div>


            </div>

            <Nav />
        </>
    )
}

export default Header