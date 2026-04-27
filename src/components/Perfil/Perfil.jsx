import { useEffect, useRef, useState } from "react";
import { Habilidades } from "../Habilidades/Habilidades";
import "./Perfil.css"

export const Perfil = () => {
    const [ dropdownOpen, setDropdownOpen ] = useState(false)
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClick = (e) => {
            if(dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setDropdownOpen(false)
            };
        };
        document.addEventListener("mousedown", handleClick);
            return () => {
                document.removeEventListener("mousedown", handleClick)
            }
    }, []);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };
    
    return (
        <div className="container-perfil">
            <div className="perfil">
                <div className="perfil-descripcion">
                    <p>Como Desarrollador Web  Full Stack, trabajo en el ciclo completo de desarrollo de aplicaciones web. Uso <small>React.js</small> para construir interfaces rápidas, adaptables a culquier dispositivo y <small>Node.js</small> para crear backends escalables. Antes de entregar el código aplico prácticas de <small>Testing QA Manual</small> que aseguran productos estables y confiables.</p>
                    <p>Complemento mi trabajo con conocimientos en <small>Cloud computin (AWS)</small>, lo que me permite pensar en despliegues, escalabilidad y entornos productivos desde la fase del diseño.</p>
                </div>
                <div className="tecnologias" ref={dropdownRef}>
                    <button className="button-habilidades"onClick={toggleDropdown}>
                        Mis Habilidades
                    </button>
                </div>
                {dropdownOpen && (
                    <div>
                        <Habilidades/>
                    </div>
                )}
            </div>
        </div>
    )
};