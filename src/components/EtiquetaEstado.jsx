import Icono from './Icono.jsx'
import './EtiquetaEstado.css'

// Estado de un plan. El estado se indica con texto (y el check del confirmado),
// no solo con el color, para que se entienda también sin distinguir colores.
const ESTADOS = {
  propuesto: 'Propuesto',
  confirmado: 'Confirmado',
  cancelado: 'Cancelado',
}

export default function EtiquetaEstado({ estado }) {
  return (
    <span className={`estado estado--${estado}`}>
      {estado === 'confirmado' && <Icono nombre="check" tamano={16} />}
      {ESTADOS[estado]}
    </span>
  )
}
