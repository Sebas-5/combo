import { Outlet } from 'react-router-dom'
import Cabecera from './Cabecera.jsx'
import BarraInferior from './BarraInferior.jsx'
import './Armazon.css'

// Estructura común de las pantallas de dentro de la app: cabecera, contenido y barra inferior.
// La pantalla de inicio (sin sesión) no lo usa.
export default function Armazon() {
  return (
    <div className="armazon">
      <Cabecera />
      <main className="armazon__contenido">
        <Outlet />
      </main>
      <BarraInferior />
    </div>
  )
}
