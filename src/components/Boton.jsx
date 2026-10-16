import './Boton.css'

// Botón de Combo. `variante`:
//  - "principal": amarillo, para la acción más importante de la pantalla
//  - "secundario": relleno oscuro
//  - "outline": solo borde
export default function Boton({ variante = 'principal', className = '', ...props }) {
  return <button className={`boton boton--${variante} ${className}`} {...props} />
}
