import { useState } from 'react';
import { Link } from 'react-router';

function CardProducto({ id, nombre, precio, stock, categoria, imagen, onAgregar, agregar }) {
  const [contador, setContador] = useState(0);
  const [descuento, setDescuento] = useState(0);

  const porcentajeDescuento = parseFloat(descuento) || 0;
  const subtotalBase = contador * precio;
  const montoDescuento = subtotalBase * (porcentajeDescuento / 100);
  const subtotalConDescuento = subtotalBase - montoDescuento;
  const iva = subtotalConDescuento * 0.15;
  const total = subtotalConDescuento + iva;

  function mostrarProducto() {
    setContador(contador + 1);

    const subtotalUnidad = precio - (precio * (porcentajeDescuento / 100));
    const ivaUnidad = subtotalUnidad * 0.15;
    const totalUnidad = subtotalUnidad + ivaUnidad;

    if (onAgregar) {
      onAgregar(totalUnidad, nombre);
    }
  }

  function comprarProducto() {
    if (agregar) {
      agregar(nombre, precio, categoria);
    }
  }

  const obtenerEstadoStock = () => {
    if (stock > 10) {
      return { texto: 'Disponible', color: '#198754' };
    } else if (stock >= 5 && stock <= 10) {
      return { texto: 'Poco Stock (Riesgo)', color: '#ffc107' };
    } else if (stock > 0 && stock < 5) {
      return { texto: 'Por terminarse', color: '#dc3545' };
    } else {
      return { texto: 'Agotado', color: '#dc3545' };
    }
  };

  const estado = obtenerEstadoStock();

  return (
    <div className="card" style={{ width: '18rem' }}>
      {imagen && (
        <img
          src={imagen}
          className="card-img-top"
          alt={nombre}
          loading="lazy"
          style={{ height: '180px', objectFit: 'contain' }}
        />
      )}
      <div className="card-body">
        <h5 className="card-title">{nombre}</h5>
        {stock > 0 && stock < 10 && (
          <span className="badge bg-danger mb-2">¡Últimas unidades!</span>
        )}
        
        <p className="card-text" style={{ marginBottom: '0.2rem' }}>
          Precio base: ${precio.toFixed(2)}
        </p>

        <p className="card-text">
          Estado:{' '}
          <span style={{ color: estado.color, fontWeight: 'bold' }}>
            {estado.texto} ({stock})
          </span>
        </p>

        <div className="mb-3">
          <label htmlFor={`descuento-${nombre}`} className="form-label mb-1" style={{ fontSize: '0.9rem', fontWeight: '500' }}>
            Descuento (%):
          </label>
          <input
            id={`descuento-${nombre}`}
            type="number"
            className="form-control form-control-sm"
            placeholder="0"
            min="0"
            max="100"
            value={descuento}
            onChange={(e) => setDescuento(e.target.value)}
          />
        </div>

        {stock > 0 ? (
          <>
            <button onClick={mostrarProducto} className="btn btn-primary w-100">
              Agregar al Carrito
            </button>
            <button onClick={comprarProducto} className="btn btn-danger w-100 mt-2">
              Comprar
            </button>
          </>
        ) : (
          <button className="btn btn-danger w-100" disabled style={{ backgroundColor: '#dc3545', borderColor: '#dc3545' }}>
            Agotado
          </button>
        )}
        {id && (
          <Link to={`/producto/${id}`} className="btn btn-outline-primary w-100 mt-2">
            Ver detalle
          </Link>
        )}

        <div className="mt-3 pt-2 border-top">
          
          <p className="card-text mb-1" style={{ fontSize: '0.9rem' }}>
            <strong>Cantidad:</strong> {contador}
          </p>
          <p className="card-text mb-1" style={{ fontSize: '0.9rem' }}>
            Subtotal: ${subtotalBase.toFixed(2)}
          </p>
          
          {porcentajeDescuento > 0 && (
            <p className="card-text mb-1 text-danger" style={{ fontSize: '0.9rem' }}>
              Descuento ({porcentajeDescuento}%): -${montoDescuento.toFixed(2)}
            </p>
          )}

          <p className="card-text mb-1" style={{ fontSize: '0.9rem', color: '#6c757d' }}>
            IVA (15%): ${iva.toFixed(2)}
          </p>
          <p className="card-text fw-bold text-primary mb-0" style={{ fontSize: '1rem' }}>
            Total Acumulado: ${total.toFixed(2)}
          </p>
        </div>

      </div>
    </div>
  );
}

export default CardProducto;