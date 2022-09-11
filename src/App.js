import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Extra from './componentes/paginas/Extra';
import Sobre from './componentes/paginas/Sobre';
import Home from './componentes/paginas/Home';
import Erro from './componentes/paginas/Erro';
import NavBar from './componentes/navbar/navbar';
import Footer from './componentes/Footer/Footer';
import Formulario from './componentes/login/Formulario';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Sobre' element={<Sobre/>}/>
        <Route path='/Extra' element={<Extra/>}/>
        <Route path='/login' element={<Formulario/>}/>
        <Route path='*' element={<Erro/>}/>
      </Routes>
      <Footer />
    </Router>
  )
}

export default App;