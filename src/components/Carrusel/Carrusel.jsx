import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import diagrama from "./image/diagrama_tienda_fondo_negro.png";
import funcion1 from "./image/funcion 1.png";
import funcion2 from "./image/funcion 2.png";
import procedimiento from "./image/procedimiento.png";
import procedure from "./image/procedure.png";
import viewActiveCarts from "./image/view_active_carts.png";
import viewLowStockProducts from "./image/view_low_stock_products.png";
import viewProductReviews from "./image/view_product_reviews.png";
import viewProducts from "./image/view_products.png";
import viewTicketPayments from "./image/view_ticket_payments.png";
import "./Carrusel.css";

export const Carrusel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: true,
    };

    const imagenes = [
        { 
            imagen: diagrama,
            titulo: "Diagrama de base de datos",
            descripcion: "Estructura completa de tablas y relaciones"
        },
        { 
            imagen: funcion1,
            titulo: "Stored Procedures",
            descripcion: "Funciones y procedimiento almacenados"
        },
        {
            imagen: funcion2,
            titulo: "stored Procedures",
            descripcion: "Funciones y procedimiento almacenados"
        },
        {
            imagen: procedimiento,
            titulo: "Procedure",
            descripcion: "Agregar un producto y la cantidad al carrito"
        },
        {
            imagen: procedure,
            titulo: "Procedure",
            descripcion: "Crea un carrito con un usuario activo"
        },
        {
            imagen: viewActiveCarts,
            titulo: "view_active_carts",
            descripcion: "Vista de los carritos activos"
        },
        {
            imagen: viewLowStockProducts,
            titulo: "View_low_stock_products",
            descripcion: "Vista de los productos con poco stock"
        },
        {
            imagen: viewProductReviews,
            titulo: "view_product_reviews",
            descripcion: "Vista de las reseñas de los productos"
        },
        {
            imagen: viewProducts,
            titulo: "view_products",
            descripcion: "Vista de los productos"
        },
        {
            imagen: viewTicketPayments,
            titulo: "view_ticket_payments",
            descripcion: "Vista de los tickets pagados"
        }
    ]

    return (
        <div className="carrusel-sql">
            <Slider {...settings}>
                {imagenes.map((item, index) => (
                    <div key={index} className="slide-sql">
                        <img src={item.imagen} alt={item.titulo} />
                        <div className="slide-info-sql">
                            <h4>{item.titulo}</h4>
                            <p>{item.descripcion}</p>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    )
};