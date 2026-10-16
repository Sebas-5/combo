import './Formulario.css'

// Radio o casilla con su texto. `tipo`: "radio" (una opción) o "checkbox" (varias).
// Se usa el <input> nativo, así funciona con teclado y lectores de pantalla.
export default function Opcion({ tipo = 'radio', children, ...props }) {
  return (
    <label className="opcion">
      <input type={tipo} className="opcion__control" {...props} />
      <span>{children}</span>
    </label>
  )
}
