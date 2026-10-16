import Boton from '../components/Boton.jsx'
import './Diseno.css'
import Campo from '../components/Campo.jsx'
import Selector from '../components/Selector.jsx'
import Opcion from '../components/Opcion.jsx'
import Tarjeta from '../components/Tarjeta.jsx'
import EtiquetaEstado from '../components/EtiquetaEstado.jsx'
import Icono from '../components/Icono.jsx'

// Catálogo de componentes, solo visible en desarrollo (/diseno).
// Sirve para ver todas las piezas juntas y comprobar que siguen la guía visual.
const ICONOS = ['voto', 'plan', 'grupo', 'perfil', 'campana', 'ajustes', 'check', 'mas', 'cerrar', 'compartir']

export default function Diseno() {
  return (
    <>
      <h1>Diseño</h1>

      <section className="diseno__bloque">
        <h2>Iconos</h2>
        <div className="diseno__iconos">
          {ICONOS.map((n) => (
            <span key={n} title={n} style={{ color: 'var(--acento)' }}>
              <Icono nombre={n} tamano={32} />
            </span>
          ))}
        </div>
      </section>

      <section className="diseno__bloque">
        <h2>Botones</h2>
        <Boton>Principal</Boton>
        <Boton variante="secundario">Secundario</Boton>
        <Boton variante="outline">Outline</Boton>
        <Boton disabled>Desactivado</Boton>
      </section>

      <section className="diseno__bloque">
        <h2>Formulario</h2>
        <Campo etiqueta="Título del plan" placeholder="Cena en la pizzería" />
        <Selector
          etiqueta="Tipo de voto"
          opciones={[
            { valor: 'unico', texto: 'Voto único' },
            { valor: 'multiple', texto: 'Voto múltiple' },
          ]}
        />
        <Opcion name="demo" defaultChecked>Voto público</Opcion>
        <Opcion name="demo">Voto anónimo</Opcion>
        <Opcion tipo="checkbox" defaultChecked>Cerrar automáticamente</Opcion>
      </section>

      <section className="diseno__bloque">
        <h2>Tarjeta y estados</h2>
        <Tarjeta as="article" className="diseno__plan">
          <h3>Cena en pizzería Roma</h3>
          <p>Viernes 21:00</p>
          <EtiquetaEstado estado="propuesto" />
          <EtiquetaEstado estado="confirmado" />
          <EtiquetaEstado estado="cancelado" />
        </Tarjeta>
      </section>
    </>
  )
}
