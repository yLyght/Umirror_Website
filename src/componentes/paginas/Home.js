import React from "react"
import './paginas css/home.css'
import imgA from "./paginas css/0001-0110-_1_.gif"
import menuclose from "../botão/menuClose"

function Home() {
    return (
        <div>
            <div className="sideMenu" id="sideMenu" onMouseLeave={menuclose}>
                    <ul>
                        <li>
                        <a href="#yeye">Sobre</a>
                        </li>
                        <li>
                        <a href="#info">Equipe</a>
                        </li>
                        <li>
                        <a href="https://charts.mongodb.com/charts-project-0-nhjgr/embed/dashboards?id=633d8bb3-4c53-4d83-89dd-0e88e56448d6&theme=light&autoRefresh=true&maxDataAge=3600&showTitleAndDesc=false&scalingWidth=fixed&scalingHeight=fixed" target="blank">Análise</a>
                        </li>
                    </ul>
                </div>
            <div id="main">
                <section className="help">
                        <div className="text" id="first">
                            <h1 id="slogan">O espelho que cuida de você</h1>
                        </div>
                    <div className="text" id="second">
                        <h3>
                            Nosso  projeto  consiste  em  um  espelho  visado  a  auxiliar  e  monitorar  pessoas  com
                            distúrbios  e  problemas  comportamentais, criando  gráficos  e  coletando  dados  para
                            que o usuário possa monitorar seu estado mental.
                        </h3>
                    </div>
                </section>
                <section className="yeye" id="yeye">
                    <img src={imgA} alt="gif" className="image"/>
                    <div className="giftext">
                        <h1>Umirror é um espelho inteligente visado no monitoramento e alivio ou melhoramento do humor de seu usuario</h1>
                        <h4>Nosso  projeto  consiste  em  um  espelho  visado  a  auxiliar  e  monitorar  pessoas  com 
                        distúrbios  e  problemas  comportamentais,  criando  gráficos  e  coletando  dados  para 
                        que o usuário possa monitorar seu estado mental.</h4>
                    </div>
                </section>
                <section className="yeye2">
                <img src="https://via.placeholder.com/2008x2448" alt="nobro" className="image2"/>
                    <div className="place">
                        <h4>
                        usarão  um  algoritmo  que 
                        usará dados de nosso software de reconhecimento facial para poder dar sugestões, 
                        tais quais aparecerão em telas de LCD plantadas atrás  do  espelho  e  seu  painel 
                        refletivo, que  o  usuário  poderá  ver  enquanto  se  arruma  para  seu  dia. 
                        </h4>
                    </div>
                </section>
                <section className="info" id="info">
                    <h1>Nossa Equipe:</h1>
                    <div className="cont">
                        <div className="wrapper">
                                <h3>Luiz</h3>
                                <h4>Programador Front-End</h4>
                                <img src="https://via.placeholder.com/1008x848" alt="nobro"/>
                                <h3>Enzo</h3>
                                <h4>Programador Back-End</h4>
                                <img src="https://via.placeholder.com/1008x848" alt="nobro"/>
                                <h3>Julio</h3>
                                <h4>Programador Back-End</h4>
                                <img src="https://via.placeholder.com/1008x848" alt="nobro"/>
                                <h3>Lucas</h3>
                                <h4>Diretor de construção fisica(?)</h4>
                                <img src="https://via.placeholder.com/1008x848" alt="nobro"/>
                                <h3>João</h3>
                                <h4>Diretor Criativo</h4>
                                <img src="https://via.placeholder.com/1008x848" alt="nobro"/>
                            </div>
                        </div>
                </section>
            </div>
        </div>
    )
}

export default Home