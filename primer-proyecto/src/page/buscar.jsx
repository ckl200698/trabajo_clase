import { useState } from "react";
import CardProducto from "../components/CardProducto.jsx";
function Buscar({ agregar }) {
    const [texto, setTexto] = useState("");
    const [productos, setProductos] = useState([]);
    const [cargando, setCargando] = useState(false);
    const [buscado, setBuscado] = useState(false);
    const [error, setError] = useState("");

    function buscar(e) {
        e.preventDefault();
        const consulta = texto.trim();
        if (consulta === "") {
            return;
        }
        setCargando(true);
        setBuscado(false);
        setError("");
        setProductos([]);

        fetch(`https://dummyjson.com/products/search?q=${encodeURIComponent(consulta)}`)
            .then((respuesta) => {
                if (!respuesta.ok) {
                    throw new Error("No se pudo realizar la búsqueda");
                }
                return respuesta.json();
            })
            .then((datos) => {
                setProductos(datos.products);
                setCargando(false);
                setBuscado(true);
            })
            .catch(() => {
                setError("Error al buscar los productos");
                setCargando(false);
                setBuscado(true);
            });
    }

    function limpiar() {
        setTexto("");
        setProductos([]);
        setCargando(false);
        setBuscado(false);
        setError("");
    }

    return (
        <div>
            <h2 className="mb-3">Buscar productos</h2>
            <form className="d-flex gap-2 mb-4" onSubmit={buscar}>
                <input
                    className="form-control"
                    placeholder="Ejemplo: phone, laptop, perfume"
                    value={texto}
                    onChange={(e) => setTexto(e.target.value)}
                />
                <button className="btn btn-primary">Buscar</button>
                <button type="button" className="btn btn-secondary" onClick={limpiar}>
                    Limpiar
                </button>
            </form>
            {cargando ? <p className="alert alert-info">Buscando...</p> : null}
            {error && <p className="alert alert-danger" role="alert">{error}</p>}
            {buscado && !cargando ? (
                productos.length > 0 ? (
                    <p className="text-muted">
                        Se encontraron {productos.length} productos para "{texto.trim()}"
                    </p>
                ) : (
                    <p className="alert alert-danger">
                       Se encontraron 0 productos para "{texto.trim()}"
                    </p>
                )
            ) : null}
            <div className="row">
                {productos.map((p) => (
                    <CardProducto
                        key={p.id}
                        id={p.id}
                        nombre={p.title}
                        categoria={p.category}
                        precio={p.price}
                        stock={p.stock}
                        imagen={p.images?.[0] || p.thumbnail}
                        agregar={agregar}
                    />
                ))}
            </div>
        </div>
    );
}
export default Buscar;