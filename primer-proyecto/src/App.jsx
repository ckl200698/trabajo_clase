import { BrowserRouter, Routes, Route } from "react-router";
import { useState } from "react";

import Encabezado from "./components/encabezado.jsx";
import Pie from "./components/pie.jsx";
import Inicio from "./page/inicio.jsx";
import Contacto from "./page/contactos.jsx";
import Productos from "./page/productos.jsx";
import Compras from "./page/compras.jsx";
import CatalogoWeb from "./page/catalogoweb.jsx";
import Ofertas from "./page/ofertas.jsx";
import Buscar from "./page/buscar.jsx";
import DetalleProducto from "./page/detalleProducto.jsx";


function App() {
  const [lista, setLista] = useState([]);

  function agregar(nombre, precio, categoria) {
    const producto = { nombre: nombre, precio: precio, categoria: categoria };
    setLista((listaAnterior) => [...listaAnterior, producto]);
  }

  function limpiarLista() {
    setLista([]);
  }

  return (
    <BrowserRouter>
      <div className="d-flex flex-column min-vh-100" style={{ backgroundColor: '#f8fafc' }}>
        <header>
          <Encabezado titulo="PUCE Ibarra" />
        </header>

        <main className="container flex-grow-1 my-4">
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/contactos" element={<Contacto />} />
            <Route path="/productos" element={<Productos agregar={agregar} />} />
            <Route path="/compras" element={<Compras lista={lista} limpiarLista={limpiarLista} />} />
            <Route path="/catalogo" element={<CatalogoWeb />} />
            <Route path="/ofertas" element={<Ofertas agregar={agregar} lista={lista} />} />
            <Route path="/buscar" element={<Buscar agregar={agregar} />} />
            <Route path="/producto/:id" element={<DetalleProducto agregar={agregar} />} />


          </Routes>
        </main>

        <footer>
          <Pie />
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;