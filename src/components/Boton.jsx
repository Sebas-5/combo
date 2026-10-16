import './Boton.css'

// Botón de Combo. `variante`: "principal" (amarillo) o "secundario" (con borde).
export default function Boton({ variante = 'principal', className = '', ...props }) {
  return <button className={`boton boton--${variante} ${className}`} {...props} />
}
