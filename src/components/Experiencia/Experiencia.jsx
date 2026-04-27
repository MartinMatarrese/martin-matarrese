import "./Experiencia.css";

export const Experiencia = () => {
    return (
        <section className="experiencia">
            <div className="experiencia-container">
                <h2 className="experiencia-titulo">💼 Experiencia laboral</h2>
                <div className="experiencia-grid">
                    <div className="card" data-aos="zoom-in-up">
                        <div className="card-body">
                            <h4>Cadete en Estudio jurídico Fredes y asociados:</h4>
                            <p>Actualmente finalizado.</p>
                            <ul>
                                <li className="list-group-item">•	Gestión de documentos legales, memos y órdenes administrativas.</li>
                                <li className="list-group-item">•	Manejo de Excel y tareas administrativas.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="card" data-aos="zoom-in-up">
                        <div className="card-body">
                            <h4>Repartidor en mercado libre flex:</h4>
                            <p>Actualmente finalizado.</p>
                            <ul>
                                <li className="list-group-item">•	Entrega eficiente de paquetes en tiempo y forma.</li>
                                <li className="list-group-item">•	Desarrollo de habilidades de organización y logística.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}