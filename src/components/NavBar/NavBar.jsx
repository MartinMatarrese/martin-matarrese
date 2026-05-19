import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import { Presentacion } from "../Presentacion/Presentacion";
import { useEffect, useRef, useState } from "react";
import abrir from "../../image/list.svg";
import cerrar from "../../image/x (1).svg";

const useDropdown = () => {
    const [ isOpen, setIsOpen ] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const handleClick = (e) => {
            if(ref.current && !ref.current.contains(e.target)) {
                setIsOpen(false)
            };
        };
        document.addEventListener("mousedown", handleClick);
        return () => {
            document.removeEventListener("mousedown", handleClick);
        };
    }, []);

    const toggle = () => setIsOpen(!isOpen);

    return [ isOpen, ref, toggle ];
};

export const NavBar = () => {

    const [ menuHamburgesaOpen, menuHamburgesaRef, toggleMenuHamburgesa ] = useDropdown();
    const [ windowWidth, setWindowWidth ] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
            if(window.innerWidth >= 768) {
                toggleMenuHamburgesa(false)
            };
        };

        window.addEventListener("resize", handleResize);
    }, []);

    const esPantallaChica = windowWidth < 768;

    return (
        <nav className="menu">
            <Presentacion/>
            <div className="menu-enlaces" ref={menuHamburgesaRef}>
                {esPantallaChica && (
                    <button className="menu-hamburgesa" onClick={toggleMenuHamburgesa}>
                        <img src={menuHamburgesaOpen ? cerrar : abrir} alt={menuHamburgesaOpen ? "cerrar" : "menu"} className="menu-image"/>
                    </button>
                )}
                {menuHamburgesaOpen && (
                    <div className="menu-desplegable">
                        <NavLink to={"/"} className="secciones">Perfil</NavLink>
                        <NavLink to={"/certificaciones"} className="secciones">Certificaciones</NavLink>
                        <NavLink to={"/proyectos"} className="secciones">Proyectos</NavLink>
                        <NavLink to={"/experiencia"} className="secciones">Experiencia</NavLink>
                        <Link to="contacto" className="secciones">Contacto</Link>    
                    </div>
                )}
                {!esPantallaChica && (
                    <div className="menu-normal">
                        <NavLink to={"/"} className="secciones">Perfil</NavLink>
                        <NavLink to={"/certificaciones"} className="secciones">Certificaciones</NavLink>
                        <NavLink to={"/proyectos"} className="secciones">Proyectos</NavLink>
                        <NavLink to={"/experiencia"} className="secciones">Experiencia</NavLink>
                        <Link to="contacto" className="secciones">Contacto</Link>    
                    </div>
                )}
                {/* <NavLink to={"/"} className="secciones">Perfil</NavLink>
                <NavLink to={"/certificaciones"} className="secciones">Certificaciones</NavLink>
                <NavLink to={"/proyectos"} className="secciones">Proyectos</NavLink>
                <NavLink to={"/experiencia"} className="secciones">Experiencia</NavLink>
                <Link to="contacto" className="secciones">Contacto</Link> */}
            </div>
        </nav>
    )
}