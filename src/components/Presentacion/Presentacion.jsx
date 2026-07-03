import { Link } from "react-router-dom";
import perfil from "./image/perfil.jpg";
import "./Presentacion.css";

export const Presentacion = () => {
    return (
        <section className="presentacion-container">
            <div className="presentacion">
                <Link to={"/"}>
                    <img className="presentacion-imagen" src={perfil} alt="Foto de perfil de Martin Matarrese"/>
                </Link>
                <Link className="nombre" to={"/"}>
                    <h1 className="presentacion-nombre">Martín Matarrese</h1>
                </Link>
            </div>
        </section>
    )
}