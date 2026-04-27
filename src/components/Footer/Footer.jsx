import gmail from "./image/icons8-gmail-logo-48.png";
import whatsApp from "./image/Digital_Glyph_Green.png";
import linkedIn from "./image/LI-In-Bug.png";
import "./Footer.css";

export const Footer = () => {
    const año = new Date().getFullYear()
    return (
        <div id="contacto" className="contacto-section">
            <div className="contacto-container">
                <h2 className="contacto-titulo">📞 Contacto</h2>
                <div className="contacto-grid">
                    <a href="maito:matarresemartin@gmail.com" target="_blank" rel="noreferrer" className="contacto-card">
                        <div className="contacto-icono">
                            <img src={gmail} alt="Emial"/>
                        </div>
                        <div className="contacto-info">
                            <h4>Email</h4>
                            <span>matarresemartin@gmail.com</span>
                        </div>
                    </a>
                    <a href="https://wa.me/5491156672350" target="_blank" rel="noreferrer" className="contacto-card">
                        <div className="contacto-icono">
                            <img src={whatsApp} alt="whatsApp"/>
                        </div>
                        <div className="contacto-info">
                            <h4>WhatsApp</h4>
                            <span>+54 9 11 5667-2350</span>
                        </div>
                    </a>
                    <a href="https://www.linkedin.com/in/martin-matarrese-b370382a4/" target="_blank" rel="noreferrer" className="contacto-card">
                    <div className="contacto-icono">
                        <img src={linkedIn} alt="linkedin"/>
                    </div>
                    <div className="contacto-info">
                        <h4>LinkedIn</h4>
                        <span>Martin Matarrese</span>
                    </div>
                </a>
            </div>
            <div className="contacto-copyright">
                <p>@{año}. Martin Matarrese, todos los derechos reservados.</p>
            </div>
        </div>
        </div>
    );
};