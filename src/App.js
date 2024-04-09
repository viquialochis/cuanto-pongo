import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import CalculadorGastos from './Componentes/CalculadorGastos';
import Ayuda from './Componentes/Ayuda';
//import ReportarError from './Componentes/ReportarError'; // Importa el componente ReportarError
import Landing from './Componentes/Landing'; // Importa el componente Landing
import Footer from './Componentes/Footer';
import Menu from './Componentes/Menu';


function App() {
  return (
    <Router>
      <div className="fondo-pagina" style={{ position: "relative", minHeight: "100vh" , paddingBottom:"2rem"}} >
        <Menu />
        <div style={{ paddingBottom: "6em" }}>
          <Routes>
            <Route path="/" element={<Navigate to="/cuantopongo/calcular" replace />} />
            <Route path="/cuantopongo/calcular" element={<CalculadorGastos />} exact />
            <Route exact path="/home" element={<Landing />} />
            <Route path="/ayuda" element={<Ayuda/>} />
            {/*<Route path="/reportar" element={ReportarError} />*/}
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
