import React, { useState } from "react";
// import { Form } from "semantic-ui-react";
import { useNavigate, Link } from "react-router-dom";
import "./Admin.css";
import * as yup from "yup";
import { ErrorMessage, Formik, Form, Field, replace } from "formik";
import Axios from "axios";


export default function LoginAdmin() {

  const navigate = useNavigate();

  const handleLogin = (values) => {
    Axios.post("http://localhost:3001/login", {
      username: values.username,
      senha: values.senha,
    }).then((response) => {
      localStorage.setItem("user_loggin", true)
      alert("Usuário logado com sucesso")
      navigate("/Admin", {replace: true})
    }).catch(({ response }) => {
      localStorage.setItem("user_loggin", false)
      alert(response.data)
      // navigate("/")
    });

  };

  const validationsLogin = yup.object().shape({
    username: yup
      .string()
      .required("Campo obrigatório"),
    senha: yup
      .string()
      .min(4, "A senha deve conter pelo menos 4 caracteres")
      .required("A senha é obrigatória"),
  });

  return (
    <>
        <div className="headerAdmin">
            <h3>Área de administrador</h3>
            <ul>
                <li><Link to="/">Ir para site</Link></li>
            </ul>
        </div>


      <div className="central">
        <Formik initialValues={{}} onSubmit={handleLogin} validationSchema={validationsLogin}>
          <Form className="CRUD" >
            <h2>Login</h2>
            <div className="novoProduto" >
              <label>Nome de usuário</label><br />
              <Field placeholder="Nome de usuário" name="username" /><br />

              {/* Esse error mensagem é tratamento de erro no preenchimento do input, precisa arrumar o estilo */}
              <ErrorMessage component="span" name="username" className="form-error" />

              <label>Senha</label><br />
              <Field placeholder="Senha" name="senha" /><br />

              <ErrorMessage component="span" name="senha" className="form-error" />
            </div>
            <button type="submit" className="botaoCRUD">Entrar</button>
          </Form>
        </Formik>
      </div>
    </>
  );
}
