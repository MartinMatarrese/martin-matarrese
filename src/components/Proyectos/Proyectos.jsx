import harryPotter from "./image/harry potter.png";
import tiendaDeRopaDeportiva from "./image/tiendaderopadeportivaprincipal.png";
import html from "../../image/html5.svg";
import css from "../../image/css3.svg";
import bootstrap from "../../image/bootstrap.svg";
import sass from "../../image/sass.svg";
import gitHub from "../../image/github.svg";
import node from "../../image/nodedotjs.svg";
import express from "../../image/express.svg";
import mongoDB from "../../image/mongodb.svg";
import mongoose from "../../image/mongoose.svg";
import jwt from "../../image/jsonwebtokens.svg";
import passport from "../../image/passport.svg";
import react from "../../image/react.svg";
import swagger from "../../image/swagger.svg";
import railway from "../../image/railway.svg";
import docker from "../../image/docker.svg";
import sql from "../../image/mysql.svg";
import "./Proyectos.css";
import { Carrusel } from "../Carrusel/Carrusel";
import { useEffect, useRef, useState } from "react";
import { TestingQAManual } from "./TestingQAManual";
import { CloudComputing } from "./CloudComputing";

const useDropdown = () => {
    const [ isOpen, setIsOpen ] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const handleClick = (e) => {
            if(ref.current && !ref.current.contains(e.target)) {
                setIsOpen(false);
            };
        };
        document.addEventListener("mousedown", handleClick);
        return () => {
            document.removeEventListener("mousedown", handleClick);
        };
    }, []);

    const toggle = () => setIsOpen(!isOpen);

    return [isOpen, ref, toggle];
};

export const Proyectos = () => {
    const [ proyecto1Open, proyecto1Ref, toggleProyecto1 ] = useDropdown();
    const [ proyecto2Open, proyecto2Ref, toggleProyecto2 ] = useDropdown();
    const [ proyecto3Open, proyecto3Ref, toggleProyecto3 ] = useDropdown();
    const [ proyecto4Open, proyecto4Ref, toggleProyecto4 ] = useDropdown();
    const [ proyecto5Open, proyecto5Ref, toggleProyecto5 ] = useDropdown();
    const [ tecnologiasProyecto1Open, tecnologiasProyecto1Ref, toggleTeconologiasProyecto1 ] = useDropdown();
    const [ enlacesProyecto1Open, enlacesProyecto1Ref, toggleEnlacesProyecto1 ] = useDropdown();
    const [ tecnologiasProyecto2Open, tecnologiasProyecto2Ref, toggleTeconologiasProyecto2 ] = useDropdown();
    const [ enlacesProyecto2Open, enlacesProyecto2Ref, toggleEnlacesProyecto2 ] = useDropdown()
    const [ tecnologiasProyecto3Open, tecnologiasProyecto3Ref, toggleTeconologiasProyecto3 ] = useDropdown();
    const [ enlacesProyecto3Open, enlacesProyecto3Ref, toggleEnlacesProyecto3 ] = useDropdown();
    const [ caracteristicasOpen, caracteristicasRef, toggleCaracteristicas ] = useDropdown();

    return (
        <section className="proyectos">
            <div className="container">
                <h2 className="seccion-titulo">💼 Proyectos</h2>
                <div className="proyecto-cards">
                    <div className="proyecto" ref={proyecto1Ref}>
                        <button className="btn-proyecto" onClick={toggleProyecto1}>
                            Harry Potter Fans
                        </button>
                        {proyecto1Open && (
                            <div className="proyecto-card">
                                <div className="proyecto-imagenes">
                                    <img src={harryPotter} alt="Harry Potter Fans - Proyecto completo"/>
                                </div>
                                <div className="proyecto-contenido">
                                    <h3 className="proyecto-titulo">HARRY POTTER FANS</h3>
                                    <p className="proyecto-descripcion">
                                        Página web temática sobre Harry Potter con diseño completamente responsive y adaptativo.
                                    </p>
                                    <div className="doggle">
                                        <div className="btn-tecnologias" ref={tecnologiasProyecto1Ref}>
                                            <button className="btn-tecnologia" onClick={toggleTeconologiasProyecto1}>
                                                Tecnologis utilizadas
                                            </button>
                                        </div>
                                        {tecnologiasProyecto1Open && (
                                            <div className="proyecto-tecnologias">
                                                <div className="tecnologia-item" data-tech="html5">
                                                    <img src={html} alt="html"/>
                                                    <span>HTML5</span>
                                                </div>
                                                <div className="tecnologia-item" data-tech="css">
                                                    <img src={css} alt="css3"/>
                                                    <span>CSS3</span>
                                                </div>
                                                <div className="tecnologia-item" data-tech="bootstrap">
                                                    <img src={bootstrap} alt="Bootstrap"/>
                                                    <span>Bootstrap</span>
                                                </div>
                                                <div className="tecnologia-item" data-tech="sass">
                                                    <img src={sass} alt="Sass"/>
                                                    <span>Sass</span>
                                                </div>
                                            </div>
                                        )}
                                        <div className="btn-enlaces" ref={enlacesProyecto1Ref}>
                                            <button className="btn-enlace" onClick={toggleEnlacesProyecto1}>
                                                Enlaces
                                            </button>
                                        </div>
                                        {enlacesProyecto1Open && (
                                            <div className="proyecto-enlaces">
                                                <div className="enlace-item" data-tech="github">
                                                    <a href="https://github.com/MartinMatarrese/HARRY-POTTER-FAN" target="_blank" rel="noreferrer" className="btn-outline">
                                                        <img src={gitHub} alt="GitHub"/>
                                                        <span>Código</span>
                                                    </a>
                                                </div>
                                                <a href="https://martinmatarrese.github.io/HARRY-POTTER-FAN/index.html" target="_blank" rel="noreferrer" className="btn btn-primary">
                                                    🌐 Ver Demo
                                                </a>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    
                    <div className="proyecto" ref={proyecto2Ref}>
                        <button className="btn-proyecto" onClick={toggleProyecto2}>
                            Tienda de ropa deportiva
                        </button>
                        {proyecto2Open && (
                            <div className="proyecto-card">
                                <div className="proyecto-imagenes">
                                    <img src={tiendaDeRopaDeportiva} alt="Tienda Deportiva - E-commerce"/>
                                </div>
                                <div className="proyecto-contenido">
                                    <h3 className="proyecto-titulo">Tienda De Ropa Deportiva</h3>
                                    <p className="proyecto-descripcion">
                                        E-commerce completo con carrito de compras, <strong>Backend robusto</strong> con API REST, autenticación JWT + OAuth, y base de datos MongoDB. Sistema completo de carrito, órdenes, panel administrativo y pasarela de pagos.
                                    </p>
                                    <div className="doggle">
                                        <div className="btn-caracteristicas" ref={caracteristicasRef}>
                                            <button className="btn-caracteristica" onClick={toggleCaracteristicas}>
                                                Carácteristicas
                                            </button>
                                        </div>
                                        {caracteristicasOpen && (
                                            <div className="backend-features">
                                                <h4>Backend características:</h4>
                                                <ul>
                                                    <li> API REST con arquitectura por capas</li>
                                                    <li> Autenticación con JWT + Google OAuth</li>
                                                    <li> CRUD completo con MongoDB</li>
                                                    <li> Documentación con Swagger</li>
                                                    <li> Testing con Jest</li>
                                                    <li> Contenedor con Docker</li>
                                                    <li> Deployment con Railway</li>
                                                </ul>
                                            </div>
                                        )}
                                        <div className="btn-tecnologias" ref={tecnologiasProyecto2Ref}>
                                            <button className="btn-tecnologia" onClick={toggleTeconologiasProyecto2}>
                                                Tecnologias utilizadas
                                            </button>
                                        </div>
                                        {tecnologiasProyecto2Open && (
                                            <div className="proyecto-tecnologias">
                                                <div className="tech-category">
                                                    <span className="category-label">Backend</span>
                                                    <div className="tecnologia-item" data-tech="node">
                                                        <img src={node} alt="Node.js"/>
                                                        <span>Node.js</span>
                                                    </div>
                                                    <div className="tecnologia-item" data-tech="express">
                                                        <img src={express} alt="Express"/>
                                                        <span>Express</span>
                                                    </div>
                                                    <div className="tecnologia-item" data-tech="mongo">
                                                        <img src={mongoDB} alt="MongoDB"/>
                                                        <span>MongoDB</span>
                                                    </div>
                                                    <div className="tecnologia-item" data-tech="mongoose">
                                                        <img src={mongoose} alt="Mongoose"/>
                                                        <span>Mongoose</span>
                                                    </div>
                                                    <div className="tecnologia-item" data-tech="jwt">
                                                        <img src={jwt} alt="JWT"/>
                                                        <span>JWT</span>
                                                    </div>
                                                    <div className="tecnologia-item" data-tech="passport">
                                                        <img src={passport} alt="Passport"/>
                                                        <span>Passport</span>
                                                    </div>
                                                </div>

                                                <div className="tech-category">
                                                    <span className="category-label">Frontend</span>
                                                    <div className="tecnologia-item" data-tech="react">
                                                        <img src={react} alt="React"/>
                                                        <span>React</span>
                                                    </div>
                                                    <div className="tecnologia-item" data-tech="css">
                                                        <img src={css} alt="CSS3"/>
                                                        <span>CSS3</span>
                                                    </div>
                                                </div>

                                                <div className="tech-category">
                                                    <span className="category-label">DevOps & Tools</span>
                                                    <div className="tecnologia-item" data-tech="swagger">
                                                        <img src={swagger} alt="Swagger"/>
                                                        <span>Swagger</span>
                                                    </div>
                                                    <div className="tecnologia-item" data-tech="railway">
                                                        <img src={railway} alt="Railway"/>
                                                        <span>Railway</span>
                                                    </div>
                                                    <div className="tecnologia-item" data-tech="github">
                                                        <img src={gitHub} alt="GitHub"/>
                                                        <span>GitHub</span>
                                                    </div>
                                                    <div className="tecnologia-item" data-tech="docker">
                                                        <img src={docker} alt="docker"/>
                                                        <span>Dcoker</span>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                        <div className="btn-enlaces" ref={enlacesProyecto2Ref}>
                                            <button className="btn-enlace" onClick={toggleEnlacesProyecto2}>
                                                Enlaces
                                            </button>
                                        </div>
                                        {enlacesProyecto2Open && (
                                            <div className="proyecto-enlaces">
                                                <div className="enlace-item" data-tech="github">
                                                    <a href="https://github.com/MartinMatarrese/tiendaderopadeportiva" target="_blank" rel="noreferrer" className="btn-outline">
                                                        <img src={gitHub} alt="GitHub"/>
                                                        <span>código Frontend</span>
                                                    </a>
                                                </div>
                                                <div className="enlace-item" data-tech="github">
                                                    <a href="https://github.com/MartinMatarrese/tiendaderopadeportiva/tree/main/backend" target="_bkank" rel="noreferrer" className="btn-outline">
                                                        <img src={gitHub} alt="GitHub"/>
                                                        <span>código Backend</span>
                                                    </a>
                                                </div>
                                                <div className="enlace-item" data-tech="swagger">
                                                    <a href="https://tiendaderopadeportiva-production.up.railway.app/docs/" target="_blank" rel="noreferrer" className="btn-outline">
                                                        <img src={swagger} alt="Swagger"/>
                                                        <span>API Docs</span>
                                                    </a>
                                                </div>                            
                                                <a href="https://martinmatarrese.github.io/tiendaderopadeportiva/" target="_blank" rel="noreferrer" className="btn btn-primary">
                                                    🌐 Ver Demo
                                                </a>
                                                </div>                                        
                                        )}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    
                    <div className="proyecto" ref={proyecto3Ref}>
                        <button className="btn-proyecto" onClick={toggleProyecto3}>
                            Sistema de Gestión - SQL
                        </button>
                        {proyecto3Open && (
                            <div className="proyecto-card">
                                <div className="proyecto-imagenes sql">
                                    <Carrusel/>
                                </div>
                                <div className="proyecto-contenido">
                                    <h3 className="proyecto-titulo">Sistema de Gestión - SQL</h3>
                                    <p className="proyecto-descripcion">
                                        Base de datos MySQL para e-commerce con triggers, stored procedures, vistas optimizadas y normalización de  datos.
                                    </p>
                                </div>
                                <div className="doggle">
                                    <div className="btn-tecnologias" ref={tecnologiasProyecto3Ref}>
                                        <button className="btn-tecnologia" onClick={toggleTeconologiasProyecto3}>
                                            Tecnologias utilizadas
                                        </button>
                                    </div>
                                    {tecnologiasProyecto3Open && (
                                        <div className="proyecto-tecnologias sql-tecnologias">
                                            <div className="tecnologia-item" data-tech="sql">
                                                <img src={sql} alt="MySQL"/>
                                                <span>MySQL</span>
                                            </div>
                                        </div>
                                    )}
                                    <div className="btn-enlaces" ref={enlacesProyecto3Ref}>
                                        <button className="btn-enlace" onClick={toggleEnlacesProyecto3}>
                                            Enlaces
                                        </button>
                                    </div>
                                    {enlacesProyecto3Open && (
                                        <div className="proyecto-enlaces">
                                            <div className="enlace-item" data-tech="github">
                                                <a href="https://github.com/MartinMatarrese/sistemadegestiondetiendaonline" target="_blank" rel="noreferrer" className="btn btn-outline">
                                                    <img src={gitHub} alt="GitHub"/>
                                                    <span>Código</span>
                                                </a>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="proyecto" ref={proyecto4Ref}>
                        <button className="btn-proyecto" onClick={toggleProyecto4}>
                            Proyecto de Testing QA Manual
                        </button>
                        {proyecto4Open && (
                            <div className="proyecto-card">
                                <div className="proyecto-contenido">
                                    <TestingQAManual/>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="proyecto" ref={proyecto5Ref}>
                        <button className="btn-proyecto" onClick={toggleProyecto5}>
                            Proyecto de Cloud Computing (Aws)
                        </button>
                        {proyecto5Open && (
                            <div className="proyecto-card">
                                <div className="proyecto-contenido">
                                    <CloudComputing/>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}