import { useState } from "react";

function TarjetaOferta({ nombre, precio, descuento, categoria, agregar, imagen }) {
    const [agregado, setAgregado] = useState(false);
    const valorDescuento = precio * (descuento / 100);
    const precioFinal = precio - valorDescuento;
    const iva = precioFinal * 0.15;
    const precioTotal = precioFinal + iva;
    const etiquetaOferta = descuento >= 10 ? "gran oferta" : "oferta";

    function agregarAlCarrito() {
        agregar(nombre, precioFinal, categoria);
        setAgregado(true);
    }

    return (
        <div className="card shadow-sm" style={{ width: "18rem" }}>
            {imagen && (
                <img
                    src={imagen}
                    alt={nombre}
                    className="card-img-top p-3"
                    style={{ height: "180px", objectFit: "contain" }}
                />
            )}
            <div className="card-body">
                <span
                    className={descuento >= 10 ? "badge bg-danger" : "badge bg-secondary"}
                >
                    {etiquetaOferta}
                </span>
                <h3 className="card-title fs-5 mt-3">{nombre}</h3>
                <p className="card-text mb-1">Precio antes: ${precio.toFixed(2)}</p>
                <p className="card-text mb-1">Valor descuento: ${valorDescuento.toFixed(2)}</p>
                <p className="card-text mb-1">Precio final: ${precioFinal.toFixed(2)}</p>
                <p className="card-text mb-1">IVA (15%): ${iva.toFixed(2)}</p>
                <p className="card-text fw-bold">Precio total: ${precioTotal.toFixed(2)}</p>
                <button
                    type="button"
                    className={agregado ? "btn btn-success w-100" : "btn btn-primary w-100"}
                    onClick={agregarAlCarrito}
                >
                    {agregado ? "Agregado al carrito" : "Agregar al carrito"}
                </button>
            </div>
        </div>
    );
}

export default TarjetaOferta;
