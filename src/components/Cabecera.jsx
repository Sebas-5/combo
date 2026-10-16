import Logo from './Logo.jsx'
import Icono from './Icono.jsx'
import './Cabecera.css'

// Barra superior: logo + palabra "combo" y la campana de notificaciones.
// La campana aún no hace nada: las notificaciones llegan en la Fase 2.
export default function Cabecera() {
  return (
    <header className="cabecera">
      <div className="cabecera__marca">
        <Logo tamano={32} pequeno />
        <span className="cabecera__nombre">combo</span>
      </div>
      <button className="cabecera__campana" aria-label="Notificaciones">
        <Icono nombre="campana" />
      </button>
    </header>
  )
}
