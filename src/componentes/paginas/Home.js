import React from "react"
import './paginas css/home.css'


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
            <section className="info">
                <h1>Nossa Equipe:</h1>
                <div className="yeye">
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