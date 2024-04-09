import { NavLink } from "react-router-dom";
import imagen from '../images/3.jpg';
import '../Estilos/Menu.css';

export default function Menu() {
    return (
        <nav className="container-fluid shadow navbar navbar-expand-xxxl text-white py-0 " style={{position:"sticky", top:"0", zIndex:4, backgroundColor: "#d7eede"}}>
            <span className="text-primary ms-4 fw-bold fs-3">
                <NavLink className="cuanto-pongo " to="/home/">
                    <img className="img-fluid " src={imagen} alt="imagen de ejemplo" style={{width:"90px"}} />
                    Cuanto Pongo?
                </NavLink>
            </span>
            <div className="ms-auto me-4 my-2 ">
                <ul className="navbar-nav">
                    <li className="py-0 ">
                        <NavLink className="btn btn-nav" to="/ayuda/">
                            Ayuda
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
