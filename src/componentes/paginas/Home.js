import React from "react"
import './paginas css/home.css'
import imgA from "./paginas css/0001-0110-_1_.gif"

function Home() {
    return (
        <div>
            <section className="help">
                <container>
                    <div className="text" id="first">
                        <h1 id="slogan">O espelho que cuida de você</h1>
                    </div>
                </container>
                <div className="text" id="second">
                    <h3>
                        Nosso  projeto  consiste  em  um  espelho  visado  a  auxiliar  e  monitorar  pessoas  com
                        distúrbios  e  problemas  comportamentais, criando  gráficos  e  coletando  dados  para
                        que o usuário possa monitorar seu estado mental.
                    </h3>
                </div>
            </section>
            <section className="yeye">
                <img src={imgA} alt="gif" className="image"/>
                <div className="giftext">
                    <h1>Umirror é um espelho inteligente visado no monitoramento e alivio ou melhoramento do humor de seu usuario</h1>
                    <h4>Nosso  projeto  consiste  em  um  espelho  visado  a  auxiliar  e  monitorar  pessoas  com 
                    distúrbios  e  problemas  comportamentais,  criando  gráficos  e  coletando  dados  para 
                    que o usuário possa monitorar seu estado mental,</h4>
                </div>
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
            <section className="info">
                <h1>Nossa Equipe:</h1>
                <div className="cont">
                    <div>
                        <h3>Luiz</h3><h4>,</h4>
                    </div>
                    <div>
                        <h3>Enzo</h3><h4>,</h4>
                    </div>
                    <div>
                        <h3>Julio</h3><h4>,</h4>
                    </div>
                    <div>
                        <h3>Lucas</h3><h4>,</h4>
                    </div>
                    <div>
                        <h3>João</h3><h4>,</h4>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home