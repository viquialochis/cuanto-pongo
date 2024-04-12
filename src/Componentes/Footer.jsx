import * as React from "react";
import { NavLink } from "react-router-dom";
import '../Estilos/Footer.css';

export default function Footer() {
    return (
        <footer className="bg mt-footer" style={{ position: "absolute", bottom: 0, width: "100%", backgroundColor: '#387554' }}>
            <div className="container py-3 py-md-4 px-4 px-md-3">
                <div className="d-flex justify-content-center">
                    <div className="col-12 col-md-6 mx-auto texto-informacion text-center">
                        <div className="d-flex justify-content-center align-items-center " > 
                            <span className="espaciado mr-1">
                                <a className="texto-link" href="https://www.linkedin.com/in/victoria-alochis/" target="_blank">Contacto</a>
                            </span>
                      
                            <span className="espaciado">
                                <NavLink className="texto-link" to="/cuanto-pongo/ayuda"> Preguntas frecuentes</NavLink>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
