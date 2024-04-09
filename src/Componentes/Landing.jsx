import React from 'react';
import { NavLink } from "react-router-dom";
import img2 from '../images/1.jpg'; 
import img1 from '../images/2.jpg'; 

import '../Estilos/Landing.css';  

export default function Landing() {
    return (
        <main className=''>
            <div className="container my-4">
                <div className="row justify-content-center align-items-center">
                    <div className="col-md-6 mb-3">
                        <h3 className='text'>
                            Si dudas de los cálculos de tus amigos, probá nuestra app web para ver cuánto tiene que poner cada uno
                        </h3>
                    </div>
                    <div className="col-md-6 mb-3">
                        <img className="img-fluid stack-card-primary" src={img1} alt="imagen1" />
                    </div>
                </div>

                <div className="row justify-content-center align-items-center ">
                    <div className="col-md-6 mb-3">
                        <img className="img-fluid stack-card-primary" src={img2} alt="imagen2"  />
                    </div>
                    <div className="col-md-6 mb-3 d-flex justify-content-center align-items-center">
                        <span className='btn-calcular px-5 stack-card-primary'>
                            <NavLink className="btn btn-primary my-4 fs-3 fw-bold mx-auto " to="/cuantopongo/calcular/">
                                Calcular
                            </NavLink>
                        </span>
                    </div>
                </div>
            </div>

            <hr className='w-75 mx-auto my-5'></hr>
        </main>
    );
}
