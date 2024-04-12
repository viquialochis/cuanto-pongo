import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import CalculadorGastos from './Componentes/CalculadorGastos';
import Ayuda from './Componentes/Ayuda';
//import ReportarError from './Componentes/ReportarError'; // Importa el componente ReportarError
import Landing from './Componentes/Landing'; // Importa el componente Landing
import Footer from './Componentes/Footer';
import Menu from './Componentes/Menu';
import 'bootstrap/dist/js/bootstrap.min.js'


function App() {
  return (
    <Router>
      <div className="fondo-pagina" style={{ position: "relative", minHeight: "100vh" , paddingBottom:"8rem"}} >
        <Menu />
        <div style={{ paddingBottom: "6em" }}>
          <Routes>
            <Route path="/" element={<Navigate to="/cuanto-pongo/calcular" replace />} />
            <Route path="/cuanto-pongo/calcular" element={<CalculadorGastos />} exact />
            <Route exact path="/cuanto-pongo" element={<Landing />} />
            <Route path="/cuanto-pongo/ayuda" element={<Ayuda/>} />
            {/*<Route path="/reportar" element={ReportarError} />*/}
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
