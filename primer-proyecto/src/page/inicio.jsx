function Inicio() {
  return (
    <div style={{ paddingBottom: '3rem' }}>
      {/* Banner Principal / Hero Section */}
      <div 
        style={{
          background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
          borderRadius: '16px',
          padding: '4rem 2rem',
          color: '#ffffff',
          textAlign: 'center',
          boxShadow: '0 10px 25px -5px rgba(15, 23, 42, 0.25)',
          marginBottom: '3rem'
        }}
      >
        <span 
          style={{ 
            backgroundColor: 'rgba(37, 99, 235, 0.2)', 
            color: '#60a5fa', 
            padding: '0.4rem 1rem', 
            borderRadius: '50px', 
            fontSize: '0.875rem', 
            fontWeight: '600',
            letterSpacing: '0.5px',
            textTransform: 'uppercase'
          }}
        >
          Tienda Universitaria
        </span>

        <h1 style={{ fontSize: '2.5rem', fontWeight: '800', marginTop: '1.25rem', marginBottom: '1rem', letterSpacing: '-0.5px' }}>
          Bienvenido a la Tienda PUCESI
        </h1>

        <p style={{ fontSize: '1.15rem', color: '#94a3b8', maxWidth: '600px', margin: '0 auto', lineHeight: '1.6' }}>
          Somos la mejor tienda del norte del país. Encuentra los mejores productos, ofertas exclusivas y atención de primera en un solo lugar.
        </p>
      </div>

      {/* Sección de Características / Beneficios */}
      <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        
        {/* Tarjeta 1 */}
        <div style={estiloTarjetaFeature}>
          <div style={estiloIcono}>🛍️</div>
          <h3 style={estiloTituloFeature}>Variedad Garantizada</h3>
          <p style={estiloTextoFeature}>
            Contamos con una amplia selección de licores, snacks, gaseosas y golosinas a los mejores precios.
          </p>
        </div>

        {/* Tarjeta 2 */}
        <div style={estiloTarjetaFeature}>
          <div style={estiloIcono}>⚡</div>
          <h3 style={estiloTituloFeature}>Atención Rápida</h3>
          <p style={estiloTextoFeature}>
            Gestionamos tus pedidos y consultas de manera eficiente para brindarte la mejor experiencia.
          </p>
        </div>

        {/* Tarjeta 3 */}
        <div style={estiloTarjetaFeature}>
          <div style={estiloIcono}>📍</div>
          <h3 style={estiloTituloFeature}>Ubicación Privilegiada</h3>
          <p style={estiloTextoFeature}>
            Nos encontramos dentro de las instalaciones de la sede PUCESI para tu comodidad.
          </p>
        </div>

      </div>
    </div>
  );
}

// Estilos reutilizables para las tarjetas informativas
const estiloTarjetaFeature = {
  flex: '1 1 250px',
  maxWidth: '350px',
  backgroundColor: '#ffffff',
  padding: '1.75rem',
  borderRadius: '12px',
  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
  border: '1px solid #e2e8f0'
};

const estiloIcono = {
  fontSize: '2rem',
  marginBottom: '1rem'
};

const estiloTituloFeature = {
  color: '#0f172a',
  fontSize: '1.15rem',
  fontWeight: '700',
  marginBottom: '0.5rem'
};

const estiloTextoFeature = {
  color: '#64748b',
  fontSize: '0.925rem',
  margin: 0,
  lineHeight: '1.5'
};

export default Inicio;