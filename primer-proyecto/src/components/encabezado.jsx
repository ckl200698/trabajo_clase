import { Link } from "react-router";

function Encabezado({ titulo }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
      <div className="container-fluid px-4">
        <Link className="navbar-brand fw-bold" to="/">
          {titulo || "Tienda"}
        </Link>
        
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav" 
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/productos">
                Productos
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/compras">
                Mis Compras
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contactos">
                Contactos
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/catalogo">
                Catálogo Web
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/ofertas">
                Ofertas
              </Link>
            </li>
             <li className="nav-item">
              <Link className="nav-link" to="/buscar">
                Buscar
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Encabezado;