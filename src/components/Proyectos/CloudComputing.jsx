import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import proyecto from "./Documentos/Aws.pdf";
import "./CloudComputing.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./ProyectosAparte.css";

export const CloudComputing = () => {
    const documento = [
        {
            id: 1,
            titulo: "Proyecto",
            descipcion: "Proyecto de migración a AWS",
            archivo: proyecto,
            tipo: "pdf",
            icono: <FontAwesomeIcon icon={faFilePdf} style={{color: "#e74c3c"}}/>
        }
    ];

    return (
        <section className="proyectos-section">
            <h2>Documentación del proyecto en Cloud Computing (AWS)</h2>

            <div className="documentos-grid">
                {documento.map(doc =>(
                    <div key={doc.id} className="document-card">
                        <h3>{doc.titulo}</h3>
                        <p>{doc.descipcion}</p>

                        <div className="documento-acciones">
                            <button
                                onClick={() => window.open(doc.archivo, "_blank")}
                            >
                                Ver en navegador
                            </button>

                            <a 
                                href={`${doc.archivo}`}
                                download={doc.titulo}
                                className="btn-descarga"
                                >
                                    {doc.icono} Descargar
                                </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}