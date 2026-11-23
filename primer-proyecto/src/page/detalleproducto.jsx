import { useState, useEffect } from "react";
import { useParams, Link } from "react-router";
function DetalleProducto({ agregar }) {
    const { id } = useParams();
    const [producto, setProducto] = useState(null);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        fetch(`https://dummyjson.com/products/${id}`)
            .then((respuesta) => {
                if (!respuesta.ok) {
                    throw new Error("No se pudo cargar el producto");
                }
                return respuesta.json();
            })
            .then((datos) => {
                setProducto(datos);
                setCargando(false);
            })
            .catch(() => {
                setError("Error al cargar el producto");
                setCargando(false);
            });
    }, [id]);

    if (cargando) {
        return <p className="alert alert-info">Cargando producto...</p>;
    }
    if (error) {
        return <p className="alert alert-danger" role="alert">{error}</p>;
    }
    if (producto === null) {
        return <p className="alert alert-danger">Producto no encontrado.</p>;
    }

    return (
        <div className="card shadow-sm">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={producto.thumbnail} alt={producto.title} className="img-fluid p-3" />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <span className="badge bg-secondary mb-2">{producto.category}</span>
                        {producto.stock > 0 && producto.stock < 10 && (
                            <span className="badge bg-danger ms-2 mb-2">¡Últimas unidades!</span>
                        )}
                        <h2>{producto.title}</h2>
                        <p>{producto.description}</p>
                        <p className="fs-4 fw-bold">${producto.price.toFixed(2)}</p>
                        <p>Stock: {producto.stock} unidades</p>
                        <button className="btn btn-primary me-2"
                            disabled={producto.stock <= 0}
                            onClick={() => agregar(producto.title, producto.price, producto.category)}>
                            Agregar
                        </button>
                        <Link to="/buscar" className="btn btn-outline-secondary">Volver</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default DetalleProducto;
