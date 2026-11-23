import { useState } from "react";

function Compras({ lista, limpiarLista }) {
  const [cliente, setCliente] = useState({
    nombre: "",
    ciudad: "",
    edad: "",
    genero: ""
  });

  const [factura, setFactura] = useState(null);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setCliente({
      ...cliente,
      [e.target.name]: e.target.value
    });
  };

  const generarFactura = (e) => {
    e.preventDefault();
    setError("");
    setFactura(null);

    if (lista.length === 0) {
      setError("No hay productos en la lista para facturar.");
      return;
    }

    const edadNum = parseInt(cliente.edad, 10);
    if (!cliente.nombre.trim() || !cliente.ciudad.trim() || !cliente.genero || isNaN(edadNum) || edadNum <= 0) {
      setError("Por favor completa todos los datos del cliente correctamente.");
      return;
    }

    const tieneLicores = lista.some((producto) => producto.categoria === "Licores");

    if (edadNum < 18 && tieneLicores) {
      setError("Venta prohibida: No se pueden vender licores a menores de edad.");
      return;
    }

    const subtotalGeneral = lista.reduce((acc, prod) => acc + prod.precio, 0);
    const subtotalLicores = lista
      .filter((prod) => prod.categoria === "Licores")
      .reduce((acc, prod) => acc + prod.precio, 0);

    let iva;
    let ice;
    let reglaAplicada;

    if (edadNum < 18) {
      iva = 0;
      ice = 0;
      reglaAplicada = "Menor de edad (Exento de IVA)";
    } else if (edadNum >= 18 && edadNum <= 65) {
      iva = subtotalGeneral * 0.15;
      ice = subtotalLicores * 0.15;
      reglaAplicada = "Tarifa estándar (18 a 65 años)";
    } else {
      const ivaBase = subtotalGeneral * 0.15;
      const iceBase = subtotalLicores * 0.15;
      iva = ivaBase * (1 - 0.08);
      ice = iceBase * (1 - 0.08);
      reglaAplicada = "Tercera edad (+65 años: 8% desc. en IVA e ICE)";
    }

    const totalPagar = subtotalGeneral + iva + ice;

    setFactura({
      ...cliente,
      edad: edadNum,
      subtotal: subtotalGeneral,
      iva,
      ice,
      totalPagar,
      reglaAplicada
    });
  };

  const handleNuevaCompra = () => {
    setFactura(null);
    setError("");
    setCliente({ nombre: "", ciudad: "", edad: "", genero: "" });
    limpiarLista();
  };

  return (
    <div className="container">
      <h3 className="mb-3">Total de productos: {lista.length}</h3>

      <div className="row g-4 align-items-start">
        
        {/* COLUMNA IZQUIERDA: Lista de productos */}
        <div className="col-md-7">
          <div className="card shadow p-3">
            <div className="card-title">
              <h5>Detalle de Compras</h5>
            </div>

            {lista.length === 0 ? (
              <p className="text-muted mb-0">Aún no has comprado ningún producto.</p>
            ) : (
              lista.map((producto, i) => (
                <div
                  key={i}
                  className="d-flex justify-content-between align-items-center border-bottom py-2"
                >
                  <div>
                    <span>{producto.nombre}</span>
                    <small className="text-muted ms-2">({producto.categoria})</small>
                  </div>
                  <span className="fw-bold text-primary">${producto.precio.toFixed(2)}</span>
                </div>
              ))
            )}
          </div>
        </div>

        {/* COLUMNA DERECHA: Datos del Cliente y Facturación */}
        <div className="col-md-5">
          <div className="card shadow p-3">
            <div className="card-title border-bottom pb-2">
              <h5 className="mb-0">Datos del Cliente</h5>
            </div>

            <form onSubmit={generarFactura}>
              <div className="mb-2">
                <label className="form-label mb-1 fw-semibold" style={{ fontSize: "0.85rem" }}>Nombre:</label>
                <input
                  type="text"
                  name="nombre"
                  className="form-control form-control-sm"
                  placeholder="Ej. Juan Pérez"
                  value={cliente.nombre}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-2">
                <label className="form-label mb-1 fw-semibold" style={{ fontSize: "0.85rem" }}>Ciudad:</label>
                <input
                  type="text"
                  name="ciudad"
                  className="form-control form-control-sm"
                  placeholder="Ej. Ibarra"
                  value={cliente.ciudad}
                  onChange={handleChange}
                />
              </div>

              <div className="row g-2 mb-3">
                <div className="col-6">
                  <label className="form-label mb-1 fw-semibold" style={{ fontSize: "0.85rem" }}>Edad:</label>
                  <input
                    type="number"
                    name="edad"
                    className="form-control form-control-sm"
                    placeholder="Ej. 20"
                    min="1"
                    value={cliente.edad}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-6">
                  <label className="form-label mb-1 fw-semibold" style={{ fontSize: "0.85rem" }}>Género:</label>
                  <select
                    name="genero"
                    className="form-select form-select-sm"
                    value={cliente.genero}
                    onChange={handleChange}
                  >
                    <option value="">Seleccione...</option>
                    <option value="Masculino">Masculino</option>
                    <option value="Femenino">Femenino</option>
                    <option value="Otro">Otro</option>
                  </select>
                </div>
              </div>

              {error && (
                <div className="alert alert-danger py-2 px-3 mb-3" style={{ fontSize: "0.85rem" }}>
                  {error}
                </div>
              )}

              <button type="submit" className="btn btn-primary w-100 fw-semibold">
                Generar Factura
              </button>
            </form>

            {factura && (
              <div className="mt-3 pt-3 border-top">
                <h6 className="fw-bold text-dark mb-1">Factura Generada</h6>
                <p className="text-muted mb-2" style={{ fontSize: "0.8rem" }}>
                  <strong>Cliente:</strong> {factura.nombre} | <strong>Ciudad:</strong> {factura.ciudad} | <strong>Género:</strong> {factura.genero}
                  <br />
                  <span className="text-info fw-semibold">{factura.reglaAplicada}</span>
                </p>

                <div className="d-flex justify-content-between mb-1">
                  <span className="text-muted">Subtotal:</span>
                  <span className="fw-semibold">${factura.subtotal.toFixed(2)}</span>
                </div>

                <div className="d-flex justify-content-between mb-1">
                  <span className="text-muted">IVA (15%):</span>
                  <span className="fw-semibold">${factura.iva.toFixed(2)}</span>
                </div>

                <div className="d-flex justify-content-between mb-2">
                  <span className="text-muted">ICE (Licores):</span>
                  <span className="fw-semibold">${factura.ice.toFixed(2)}</span>
                </div>

                <hr className="my-2" />

                <div className="d-flex justify-content-between align-items-center mb-3">
                  <span className="fw-bold fs-5">Total a Pagar:</span>
                  <span className="fw-bold fs-5 text-success">${factura.totalPagar.toFixed(2)}</span>
                </div>
              </div>
            )}

            {lista.length > 0 && (
              <button
                type="button"
                onClick={handleNuevaCompra}
                className="btn btn-outline-danger w-100 fw-semibold mt-2"
              >
                Nueva Compra
              </button>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}

export default Compras;