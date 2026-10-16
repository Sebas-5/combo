import Logo from './Logo.jsx'

// Pantalla de carga mientras se comprueba la sesión
export default function Pantallazo() {
  return (
    <div style={{ minHeight: '100%', display: 'grid', placeItems: 'center' }} role="status" aria-label="Cargando">
      <Logo tamano={72} />
    </div>
  )
}
