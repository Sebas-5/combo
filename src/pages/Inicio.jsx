import Logo from '../components/Logo.jsx'
import Boton from '../components/Boton.jsx'
import './Inicio.css'

export default function Inicio() {
  return (
    <main className="pagina inicio">
      <div className="inicio__centro">
        <Logo tamano={120} />
        <h1 className="inicio__logo">combo</h1>
        <p className="inicio__lema">Tu grupo propone, vota y decide.</p>
      </div>
      {/* El login real con Google se conecta en el paso 4 */}
      <Boton className="inicio__entrar">Entrar con Google</Boton>
    </main>
  )
}
