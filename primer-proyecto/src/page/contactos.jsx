import { useState } from "react";

function Contacto() {
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setEnviado(true);
    e.target.reset();
    setTimeout(() => setEnviado(false), 4000);
  };

  return (
    <section className="container py-4">
      <div className="text-center mb-5">
        <h2 className="fw-bold text-dark">Contáctanos</h2>
        <p className="text-muted">
          ¿Tienes alguna consulta sobre tus compras o productos? Estamos aquí para ayudarte.
        </p>
      </div>

      <div className="row g-4 align-items-stretch">
        {/* Columna Izquierda: Tarjeta de Información */}
        <div className="col-md-5">
          <div className="card shadow-sm border-0 h-100 p-4" style={{ backgroundColor: "#0f172a", color: "#ffffff", borderRadius: "12px" }}>
            <h4 className="fw-bold mb-3">Información de Contacto</h4>
            <p className="text-light opacity-75 mb-4" style={{ fontSize: "0.95rem" }}>
              Comunícate directamente con nuestro equipo de atención al cliente en PUCE Ibarra.
            </p>

            <div className="d-flex flex-column gap-4 mt-auto">
              <div>
                <small className="text-uppercase text-info fw-semibold d-block">Correo Electrónico</small>
                <span className="fs-6">contacto@puceibarra.edu.ec</span>
              </div>

              <div>
                <small className="text-uppercase text-info fw-semibold d-block">Teléfono</small>
                <span className="fs-6">+593 6 299 7800</span>
              </div>

              <div>
                <small className="text-uppercase text-info fw-semibold d-block">Ubicación</small>
                <span className="fs-6">Av. Jorge Guzmán Rueda y Av. Aurelio Espinosa Pólit, Ibarra, Ecuador</span>
              </div>

              <div>
                <small className="text-uppercase text-info fw-semibold d-block">Horario de Atención</small>
                <span className="fs-6">Lunes a Viernes: 08:00 - 17:00</span>
              </div>
            </div>
          </div>
        </div>

        {/* Columna Derecha: Formulario de Mensaje */}
        <div className="col-md-7">
          <div className="card shadow-sm border-0 h-100 p-4" style={{ borderRadius: "12px" }}>
            <h4 className="fw-bold text-dark mb-3">Envíanos un mensaje</h4>

            {enviado && (
              <div className="alert alert-success py-2" role="alert">
                ¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="row g-3 mb-3">
                <div className="col-sm-6">
                  <label className="form-label fw-semibold text-secondary" style={{ fontSize: "0.9rem" }}>
                    Nombre completo
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Ej. María Gómez"
                    required
                  />
                </div>

                <div className="col-sm-6">
                  <label className="form-label fw-semibold text-secondary" style={{ fontSize: "0.9rem" }}>
                    Correo electrónico
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="maria@ejemplo.com"
                    required
                  />
                </div>
              </div>

              <div className="mb-3">
                <label className="form-label fw-semibold text-secondary" style={{ fontSize: "0.9rem" }}>
                  Asunto
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Consulta sobre productos o facturación"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="form-label fw-semibold text-secondary" style={{ fontSize: "0.9rem" }}>
                  Mensaje
                </label>
                <textarea
                  className="form-control"
                  rows="4"
                  placeholder="Escribe tu mensaje aquí..."
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary w-100 fw-semibold py-2">
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contacto;