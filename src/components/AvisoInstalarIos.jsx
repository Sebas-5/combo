import useInstalarIos from '../hooks/useInstalarIos.js'
import Boton from './Boton.jsx'
import './AvisoInstalarIos.css'

// Guía "Añadir a pantalla de inicio" que solo se ve en iPhone/iPad sin instalar.
export default function AvisoInstalarIos() {
  const { visible, cerrar } = useInstalarIos()
  if (!visible) return null

  return (
    <aside className="aviso-ios" role="dialog" aria-label="Instalar Combo en tu iPhone">
      <h2 className="aviso-ios__titulo">Instala Combo en tu iPhone</h2>
      <p className="aviso-ios__texto">Para recibir avisos de tus planes, añádela a la pantalla de inicio:</p>
      <ol className="aviso-ios__pasos">
        <li>
          Pulsa{' '}
          <svg className="aviso-ios__icono" viewBox="0 0 24 24" aria-label="Compartir">
            <path d="M12 3v12M8 7l4-4 4 4M6 11H5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1h-1" />
          </svg>{' '}
          <strong>Compartir</strong> en Safari.
        </li>
        <li>
          Elige <strong>Añadir a pantalla de inicio</strong>.
        </li>
        <li>Abre Combo desde el nuevo icono.</li>
      </ol>
      <Boton variante="outline" onClick={cerrar}>
        Entendido
      </Boton>
    </aside>
  )
}
