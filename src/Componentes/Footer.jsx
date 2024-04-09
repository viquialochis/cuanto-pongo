
import * as React from "react";
import { Link, NavLink } from "react-router-dom";
import '../Estilos/Footer.css';



export default function Footer() {
    return (
        <footer className="bg mt-footer" style={{ position: "absolute", bottom: 0, width: "100%", backgroundColor: '#387554' }}>
            <div className="container py-4 py-md-5 px-4 px-md-3">
                <div className="col-6 mb-3 text-primary  mx-auto">
                <h5 className="texto-informacion">Informacion</h5>    
                    <div className="row d-flex">
                        <div className="mr-3">
                            <a className="texto-link" href="https://www.linkedin.com/in/victoria-alochis/" target="_blank">Contacto</a>
                        </div>
                        <div className="mr-3">
                            <NavLink className="texto-link" to="/reportar">Reportar error</NavLink>
                        </div>
                        <div>
                            <NavLink className="texto-link" to="/faq/">Preguntas frecuentes</NavLink>
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    );
}
