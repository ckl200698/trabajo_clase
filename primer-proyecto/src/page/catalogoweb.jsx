import { useState, useEffect } from "react";
//useEffect sirve para cargar los datos una sola vez sin recargar la pagina
import CardProducto from "../components/CardProducto";

function CatalogoWeb() {
    //Manejo del estado de carga
    const [cargando, setCargando] = useState(true);
    const [productos, setProductos] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {
        fetch("https://dummyjson.com/products?limit=10")
            .then((respuesta) => {
                if (!respuesta.ok) {
                    throw new Error("No se pudieron cargar los productos");
                }
                return respuesta.json();
            })
            .then((datos) => {
                setProductos(datos.products);
                setCargando(false);
            })
            .catch(() => {
                setError("Error al cargar los productos");
                setCargando(false);
            })
    }, []);

    if (error) {
        return <p role="alert">Error: {error}</p>;
    }

    if (cargando) {
        return <p>Cargando productos...</p>;
    }

    return (
        <section>
            <h2>Catálogo Web</h2>
            <div className="d-flex flex-wrap gap-3 justify-content-center">
                {productos.map((producto) => (
                    <CardProducto
                        key={producto.id}
                        id={producto.id}
                        nombre={producto.title}
                        precio={producto.price}
                        stock={producto.stock}
                        categoria={producto.category}
                        imagen={producto.images?.[0] || producto.thumbnail}
                    />
                ))}
            </div>
        </section>
    );
}

export default CatalogoWeb;
