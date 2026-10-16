import { useId } from 'react'
import './Formulario.css'

// Desplegable con etiqueta. `opciones`: [{ valor, texto }].
export default function Selector({ etiqueta, opciones, className = '', ...props }) {
  const id = useId()
  return (
    <div className={`campo ${className}`}>
      <label className="campo__etiqueta" htmlFor={id}>
        {etiqueta}
      </label>
      <select id={id} className="campo__control campo__control--selector" {...props}>
        {opciones.map((o) => (
          <option key={o.valor} value={o.valor}>
            {o.texto}
          </option>
        ))}
      </select>
    </div>
  )
}
