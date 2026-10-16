import { useId } from 'react'
import './Formulario.css'

// Campo de texto con su etiqueta. El <label> va asociado al input (clic y lectores de pantalla).
export default function Campo({ etiqueta, className = '', ...props }) {
  const id = useId()
  return (
    <div className={`campo ${className}`}>
      <label className="campo__etiqueta" htmlFor={id}>
        {etiqueta}
      </label>
      <input id={id} className="campo__control" {...props} />
    </div>
  )
}
