import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import { Presentacion } from "../Presentacion/Presentacion";

export const NavBar = () => {

    return (
        <nav className="menu">
            <Presentacion/>
            <div className="menu-enlaces">
                <NavLink to={"/"} className="secciones">Perfil</NavLink>
                <NavLink to={"/certificaciones"} className="secciones">Certificaciones</NavLink>
                <NavLink to={"/proyectos"} className="secciones">Proyectos</NavLink>
                <NavLink to={"/experiencia"} className="secciones">Experiencia</NavLink>
                <Link to="contacto" className="secciones">Contacto</Link>
            </div>
        </nav>
    )
}