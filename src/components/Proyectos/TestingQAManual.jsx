import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import apimon from "./Documentos/APIMON - MATARRESE.pdf";
import bugs from "./Documentos/Bugs.pdf";
import casosDePrueba from "./Documentos/Casos de prueba.pdf";
import estres from "./Documentos/ESTRES - MATARRESE.pdf";
import reporteDePruebas from "./Documentos/REPORTE DE PRUEBAS.pdf";
import "./ProyectosAparte.css";

export const TestingQAManual = () => {
    const documentos = [
        {
            id: 1,
            titulo: "Reporte de bugs",
            descripcion: "3 bugs reportados con diferentes niveles de seriedad",
            archivo: bugs,
            tipo: "pdf",
            icono: <FontAwesomeIcon icon={faFilePdf} style={{color: "#e74c3c"}}/>
        },

        {
            id: 2,
            titulo: "Casos de Prueba",
            descripcion: "10 casos ejecutados (50% de éxito)",
            archivo: casosDePrueba,
            tipo: "pdf",
            icono: <FontAwesomeIcon icon={faFilePdf} style={{color: "#e74c3c"}}/>
        },

        {
            id: 3,
            titulo: "Reportes de prueba",
            descripcion: "Analisis completo con conclusiones y recomendaciones",
            archivo: reporteDePruebas,
            tipo: "pdf",
            icono: <FontAwesomeIcon icon={faFilePdf} style={{color: "#e74c3c"}}/>
        },

        {
            id: 4,
            titulo: "Informe Sobre Pokeapi.co con Postman",
            descripcion: "LLamados con endpoints 5 positivos y 5 negativos",
            archivo: apimon,
            tipo: "pdf",
            icono: <FontAwesomeIcon icon={faFilePdf} style={{color: "#e74c3c"}}/>
        },

        {
            id: 5,
            titulo: "Analisis en ligthouse",
            descripcion: "Analisis general de rendimiento, SEO y buenas prácticas",
            archivo: estres,
            tipo: "pdf",
            icono: <FontAwesomeIcon icon={faFilePdf} style={{color: "#e74c3c"}}/>
        }
    ];

    return (
        <section className="proyectos-section">
            <h2>Documentación del proyecto QA</h2>

            <div className="documentos-grid">
                {documentos.map(doc => (
                    <div key={doc.id} className="document-card">
                        <h3>{doc.titulo}</h3>
                        <p>{doc.descripcion}</p>

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