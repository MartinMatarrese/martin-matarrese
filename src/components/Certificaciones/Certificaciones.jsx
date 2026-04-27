import coderhauseLogo from "./image/coderhouse_logo.jpg";
import "./Certificaciones.css"

export const Certificaciones = () => {
    return (
        <section className="estudios">
            <div className="estudios-container">
                <h2 className="estudio-titulo">🎓 Certificaciones</h2>
                <div className="cerificaciones-cards">
                    <div className="estudios-card">
                        <a href="https://res.cloudinary.com/dxq0cjw9i/image/upload/v1736102915/65f05dc5e9c31edebef8d90d_2_vwhqu9.png" target="_blank" rel="noreferrer"><img className="estudio-imagen" src={coderhauseLogo} alt="Curso de desarrollo web"/><h3>Curso de desarrollo web</h3></a>
                        <p>Coderhause</p>
                    </div>
                    <div className="estudios-card">
                        <a href="https://res.cloudinary.com/dxq0cjw9i/image/upload/v1736102881/certificado-curso_zwbf9t.png" target="_blank" rel="noreferrer"><img className="estudio-imagen" src={coderhauseLogo} alt="Curso de JavaScript"/><h3>Curso de JavaScript</h3></a>
                        <p>Coderhause</p>
                    </div>
                    <div className="estudios-card">
                        <a href="https://res.cloudinary.com/dxq0cjw9i/image/upload/v1736102939/671135a1b55ebe848749d1ca_lltdoz.png" target="_blank" rel="noreferrer"><img className="estudio-imagen" src={coderhauseLogo} alt="Curso de React js"/><h3>Curso de React js</h3></a>
                        <p>Coderhause</p>
                    </div>
                    <div className="estudios-card">
                        <a href="https://res.cloudinary.com/dxq0cjw9i/image/upload/v1736102819/certificado-carrera_lxs7sv.png" target="_blank" rel="noreferrer"><img className="estudio-imagen" src={coderhauseLogo} alt="Curso de desarrollo web front-end"/><h3>Curso de desarrollo web front-end</h3></a>
                        <p>Coderhause</p>                    
                    </div>
                    <div className="estudios-card">
                        <a href="https://pub.coderhouse.com/legacy-certificates/677fdf7b9f7020f017195caa?lang" target="_blank" rel="noreferrer"><img className="estudio-imagen" src={coderhauseLogo} alt="Curso de programación backend 1"/><h3>Curso de Programación Backend 1: Desarrollo avanzado de Backend</h3></a>
                        <p>Coderhause</p>
                    </div>
                    <div className="estudios-card">
                        <a href="https://pub.coderhouse.com/certificates/8b1d259d-14a1-4217-b3c5-50415267cad3?v=1" target="_blank" rel="noreferrer"><img className="estudio-imagen" src={coderhauseLogo} alt="Curso de programación backend 2"/><h3>Curso de programación backend 2: Diseño y arquitectura Backend</h3></a>
                        <p>Coderhause</p>
                    </div>
                    <div className="estudios-card">
                        <a href="https://pub.coderhouse.com/certificates/35740184-7334-42a9-bd43-c14338c834dd?v=1" target="_blank" rel="noreferrer"><img className="estudio-imagen" src={coderhauseLogo} alt="Curso de programación backend 3"/><h3>Curso de programación backend 3: Testing y escalabilidad backend</h3></a>
                        <p>Coderhause</p>
                    </div>
                    <div className="estudios-card">
                        <a href="https://pub.coderhouse.com/certificates/379e5595-3835-4eb6-b3c6-1e2cd49c6da4?v=1" target="_blank" rel="noreferrer"><img src={coderhauseLogo} alt="Curso de sql" className="estudio-imagen"/><h3>Curso de SQL</h3></a>
                        <p>Coderhause</p>
                    </div>
                    <div className="estudios-card">
                        <a href="https://pub.coderhouse.com/certificates/fc76cfca-f32e-443b-95d8-2da792971dcd?v=1" target="_blank"><img src={coderhauseLogo} alt="Curso de Testing QA Manual" className="estudio-imagen"/><h3>Curso de Testing QA Manual</h3></a>
                        <p>Coderhause</p>
                    </div>
                    <div className="estudios-card">
                        <a href="https://pub.coderhouse.com/certificates/77c84c72-496e-4d87-b50f-3074107517ea?v=1" target="_blank"><img src={coderhauseLogo} alt="Curso de AWS" className="estudio-imagen"/><h3>Curso de AWS</h3></a>
                        <p>Coderhause</p>
                    </div>
                </div>
            </div>
        </section>
    );
};