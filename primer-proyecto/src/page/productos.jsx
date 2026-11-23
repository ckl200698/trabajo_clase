import CardProducto from "../components/CardProducto";
import SeccionCategoria from "../components/seccionCategoria";

function Productos({ agregar }) {
  return (
    <div style={{ padding: '1.5rem 0' }}>
      <h3 style={{
        color: '#0f172a',
        fontSize: '1.25rem',
        fontWeight: '700',
        marginBottom: '1.5rem',
        borderLeft: '4px solid #2563eb',
        paddingLeft: '0.75rem'
      }}>
        Lista de productos:
      </h3>

      <SeccionCategoria titulo="Licores">
        <CardProducto nombre="Cerveza Pilsener" precio={5} stock={15} categoria="Licores" agregar={agregar} />
        <CardProducto nombre="Cerveza Club" precio={5.50} stock={8} categoria="Licores" agregar={agregar} />
        <CardProducto nombre="Gran Malo" precio={25} stock={3} categoria="Licores" agregar={agregar} />
        <CardProducto nombre="Antioqueño" precio={7} stock={11} categoria="Licores" agregar={agregar} />
      </SeccionCategoria>

      <SeccionCategoria titulo="Snacks">
        <CardProducto nombre="Doritos" precio={0.50} stock={20} categoria="Snacks" agregar={agregar} />
        <CardProducto nombre="De Todito" precio={0.60} stock={50} categoria="Snacks" agregar={agregar} />
        <CardProducto nombre="Frutitas" precio={0.35} stock={10} categoria="Snacks" agregar={agregar} />
        <CardProducto nombre="Ruffles" precio={0.50} stock={4} categoria="Snacks" agregar={agregar} />
      </SeccionCategoria>

      <SeccionCategoria titulo="Gaseosas">
        <CardProducto nombre="Coca Cola" precio={1.50} stock={40} categoria="Gaseosas" agregar={agregar} />
        <CardProducto nombre="Pepsi" precio={0.50} stock={20} categoria="Gaseosas" agregar={agregar} />
        <CardProducto nombre="Big Cola" precio={0.50} stock={10} categoria="Gaseosas" agregar={agregar} />
        <CardProducto nombre="Sprite" precio={1.00} stock={2} categoria="Gaseosas" agregar={agregar} />
      </SeccionCategoria>

      <SeccionCategoria titulo="Golosinas">
        <CardProducto nombre="Chocolate Manicho" precio={1.00} stock={40} categoria="Golosinas" agregar={agregar} />
        <CardProducto nombre="Galletas Amor" precio={1.00} stock={20} categoria="Golosinas" agregar={agregar} />
        <CardProducto nombre="Gomitas Grisly" precio={0.60} stock={10} categoria="Golosinas" agregar={agregar} />
        <CardProducto nombre="Galletas María" precio={1.20} stock={2} categoria="Golosinas" agregar={agregar} />
      </SeccionCategoria>
    </div>
  );
}

export default Productos;