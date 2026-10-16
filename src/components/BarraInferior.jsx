import { NavLink } from 'react-router-dom'
import Icono from './Icono.jsx'
import './BarraInferior.css'

// Navegación principal. NavLink marca solo la pestaña activa (amarillo + aria-current).
const PESTANAS = [
  { a: '/votos', icono: 'voto', texto: 'Voto' },
  { a: '/planes', icono: 'plan', texto: 'Plan' },
  { a: '/perfil', icono: 'perfil', texto: 'Perfil' },
]

export default function BarraInferior() {
  return (
    <nav className="barra" aria-label="Navegación principal">
      {PESTANAS.map((p) => (
        <NavLink key={p.a} to={p.a} className="barra__enlace">
          <Icono nombre={p.icono} />
          <span>{p.texto}</span>
        </NavLink>
      ))}
    </nav>
  )
}
