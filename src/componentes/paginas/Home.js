import React from "react"
import './paginas css/home.css'


function Home() {
    return (
        <div>
            <section className="help">
                {/* <img src={imgA} alt="gif" className="image"/> */}
                <container>
                    <div className="text" id="first">
                        <h1 id="slogan">O espelho que cuida de você</h1>
                    </div>

                </container>
                <div className="text" id="second">
                    <h4>Nosso  projeto  consiste  em  um  espelho  visado  a  auxiliar  e  monitorar  pessoas  com
                        distúrbios  e  problemas  comportamentais,  criando  gráficos  e  coletando  dados  para:
                        que o usuário possa monitora seu estado mental,</h4>
                </div>
            </section>
            <section className="info">
                {/* <img src={imgB} alt="nobro" className="image2"/> */}
                <div className="yeye">
                    <h1>
                        Nosso time:
                        <br/>
                        <img src={"./paginas css/893.jpg"} alt="penis"/>
                        <br/>
                        Twitter
                        <br/>
                        Telegram
                    </h1>
                </div>
            </section>
        </div>
    )
}

export default Home