import { useState, useEffect } from "react";
import TarjetaOferta from "../components/TarjetaOferta";

function Ofertas({ agregar, lista }) {
    const [cargando, setCargando] = useState(true);
    const [productos, setProductos] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {
        fetch("https://dummyjson.com/products?limit=20")
            .then((respuesta) => {
                if (!respuesta.ok) {
                    throw new Error("No se pudieron cargar las ofertas");
                }
                return respuesta.json();
            })
            .then((datos) => {
                setProductos(Array.isArray(datos.products) ? datos.products : []);
                setCargando(false);
            })
            .catch(() => {
                setError("Error al cargar las ofertas");
                setCargando(false);
            });
    }, []);

    if (error) {
        return <p role="alert">Error: {error}</p>;
    }

    if (cargando) {
        return <p>Cargando ofertas...</p>;
    }

    if (productos.length === 0) {
        return <p role="status">No hay ofertas disponibles.</p>;
    }

    let ahorroTotal = 0;
    for (let i = 0; i < productos.length; i++) {
        const descuento = productos[i].discountPercentage || 0;
        ahorroTotal += productos[i].price * (descuento / 100);
    }

    return (
        <section className="container py-4">
            <h2 className="text-center fw-bold mb-4">Catálogo de ofertas</h2>
            <p className="text-center fw-semibold text-success mb-4">
                Si compras uno de cada producto, ahorras ${ahorroTotal.toFixed(2)}
            </p>
            <div className="d-flex flex-wrap gap-3 justify-content-center">
                {productos.map((producto) => (
                    <TarjetaOferta
                        key={producto.id}
                        nombre={producto.title}
                        precio={producto.price}
                        descuento={producto.discountPercentage || 0}
                        categoria={producto.category}
                        agregar={agregar}
                        imagen={producto.images?.[0] || producto.thumbnail}
                    />
                ))}
            </div>
            {lista.length > 0 && (
                <aside
                    className="card shadow-lg border-primary"
                    aria-label="Productos agregados al carrito"
                    style={{
                        position: "fixed",
                        right: "1rem",
                        bottom: "1rem",
                        zIndex: 1050,
                        width: "min(22rem, calc(100vw - 2rem))",
                        maxHeight: "50vh",
                        overflowY: "auto"
                    }}
                >
                    <div className="card-header bg-primary text-white fw-bold">
                        Carrito ({lista.length})
                    </div>
                    <ul className="list-group list-group-flush">
                        {lista.map((producto, indice) => (
                            <li
                                key={`${producto.nombre}-${indice}`}
                                className="list-group-item d-flex justify-content-between gap-3"
                            >
                                <span>{producto.nombre}</span>
                                <span className="fw-semibold">
                                    ${producto.precio.toFixed(2)}
                                </span>
                            </li>
                        ))}
                    </ul>
                    <div className="card-footer d-flex justify-content-between fw-bold">
                        <span>Total:</span>
                        <span>
                            ${lista.reduce((total, producto) => total + producto.precio, 0).toFixed(2)}
                        </span>
                    </div>
                </aside>
            )}
        </section>
    );
}

export default Ofertas;