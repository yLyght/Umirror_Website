import React from "react"
import './paginas css/home.css'
import imgA from "./paginas css/Umirror.gif"
import imgB from "./paginas css/ranmo.png"

function Home(){
    return(
        <div>
            <section className="help">
            <img src={imgA} alt="gif" className="image"/>
            <div className="text">
                <h1>Umirror é um espelho inteligente visado no monitoramento e alivio ou melhoramento do humor de seu usuario</h1>
                <h4>Nosso  projeto  consiste  em  um  espelho  visado  a  auxiliar  e  monitorar  pessoas  com 
                distúrbios  e  problemas  comportamentais,  criando  gráficos  e  coletando  dados  para 
                que o usuário possa monitorar seu estado mental,</h4>
            </div>
            </section>
            <section className="info">
                <img src={imgB} alt="nobro" className="image2"/>
                <div className="yeye">
                    <h4>
                    usarão  um  algoritmo  que 
                    usará dados de nosso software de reconhecimento facial para poder dar sugestões, 
                    tais quais aparecerão em telas de LCD plantadas atrás  do  espelho  e  seu  painel 
                    refletivo, que  o  usuário  poderá  ver  enquanto  se  arruma  para  seu  dia. 
                    </h4>
                </div>
            </section>
        </div>
    )
}

export default Home