import './Tarjeta.css'

// Contenedor con fondo de superficie. `as` permite usar <article>, <section>, <li>...
export default function Tarjeta({ as: Etiqueta = 'div', className = '', ...props }) {
  return <Etiqueta className={`tarjeta ${className}`} {...props} />
}
