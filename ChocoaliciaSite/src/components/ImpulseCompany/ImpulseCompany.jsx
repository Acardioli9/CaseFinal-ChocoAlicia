import React from "react";
import './ImpulseCompany.css'
import { useNavigate } from "react-router-dom";

function ImpulseCompany() {

    const navigate = useNavigate()
    const voltar = () => {
        navigate('/')
    }

    return (
      <>
        <div id="tudo">
          <div className="voltar">
            <button onClick={voltar}>Voltar</button>
          </div>
          <div id="conteudo">
            <div id="projeto">
              <h1>Informações importantes</h1>

              <p>
                <b>Todo conteúdo do site é fictício.</b>
              </p>
              <br />

              <p>
                Projeto desenvolvido durante o curso de{" "}
                <span className="destaqueDevs">WebDev Full-Stack</span>, projetado
                pela <span className="destaqueDevs">Resilia Educação</span>, para o
                edital{" "}
                <span className="destaqueDevs">"Programadores Cariocas"</span>.
                <br />
                <span className="destaqueDevs">"Programadores Cariocas"</span> é um
                programa desenvolvido pela{" "}
                <span className="destaqueDevs">Prefeitura do Rio de Janeiro</span>{" "}
                em parceria com o <span className="destaqueDevs">Senac RJ</span>,
                com a missão de formar mais de 1000 jovens para atuar na àrea de
                tecnologia e ingressarem com qualificação no mercado de
                trabalho.
              </p>
            </div>

            <div id="desenvolvedores">
              <h1>Desenvolvedores</h1>

              <div id="todos">
                <div className="integrante">
                  <img
                    className="foto"
                    src="../../../../imgs/devs/amandaCardoso.jpg"
                  />
                  <div className="integranteInfos">
                    <h3>Amanda Cardoso</h3>
                    <p className="funcao">
                      <i>Integrante</i>
                    </p>
                    <a href="https://www.linkedin.com/in/acardioli/">
                      <img
                        className="link"
                        src="../../../../imgs/icons/linkedIn.png"
                      />
                    </a>
                    <a href="https://github.com/Acardioli9">
                      <img
                        className="link"
                        src="../../../../imgs/icons/github.png"
                      />
                    </a>
                  </div>
                </div>

                <div className="integrante">
                  <img
                    className="foto"
                    src="../../../../imgs/devs/jordanLima.jpeg"
                  />
                  <div className="integranteInfos">
                    <h3>Jordan Lima</h3>
                    <p className="funcao">
                      <i>Integrante</i>
                    </p>
                    <a href="https://www.linkedin.com/in/jordan-lima-03787a248/">
                      <img
                        className="link"
                        src="../../../../imgs/icons/linkedIn.png"
                      />
                    </a>
                    <a href="https://github.com/jordanlima1">
                      <img
                        className="link"
                        src="../../../../imgs/icons/github.png"
                      />
                    </a>
                  </div>
                </div>

                <div className="integrante">
                  <img
                    className="foto"
                    src="../../../../imgs/devs/julianaJesus.jpg"
                  />
                  <div className="integranteInfos">
                    <h3>Juliana Jesus</h3>
                    <p className="funcao">
                      <i>Integrante</i>
                    </p>
                    <a href="https://www.linkedin.com/in/julianajesus93/">
                      <img
                        className="link"
                        src="../../../../imgs/icons/linkedIn.png"
                      />
                    </a>
                    <a href="https://github.com/JulianaJesus93">
                      <img
                        className="link"
                        src="../../../../imgs/icons/github.png"
                      />
                    </a>
                  </div>
                </div>

                <div className="integrante">
                  <img
                    className="foto"
                    src="../../../../imgs/devs/palloneSilva.jpg"
                  />
                  <div className="integranteInfos">
                    <h3>Pallone Silva</h3>
                    <p className="funcao">
                      <i>Integrante</i>
                    </p>
                    <a href="https://www.linkedin.com/in/pallone-silva/">
                      <img
                        className="link"
                        src="../../../../imgs/icons/linkedIn.png"
                      />
                    </a>
                    <a href="https://github.com/Pallone16">
                      <img
                        className="link"
                        src="../../../../imgs/icons/github.png"
                      />
                    </a>
                  </div>
                </div>

                <div className="integrante">
                  <img
                    className="foto"
                    src="../../../../imgs/devs/luanCarlos.jpg"
                  />
                  <div className="integranteInfos">
                    <h3>Luan Carlos</h3>
                    <p className="funcao">
                      <i>Integrante</i>
                    </p>
                    <a href="https://www.linkedin.com/in/luan-carlos-8395051ba/">
                      <img
                        className="link"
                        src="../../../../imgs/icons/linkedIn.png"
                      />
                    </a>
                    <a href="https://github.com/LuanCarlozZ">
                      <img
                        className="link"
                        src="../../../../imgs/icons/github.png"
                      />
                    </a>
                  </div>
                </div>
              </div>
              {/* todos> */}
            </div>
            {/* desenvolvedores */}
          </div>{" "}
          {/* fim conteudo */}
        </div>{" "}
        {/* fim tudo */}
      </>
    );
}

export default ImpulseCompany