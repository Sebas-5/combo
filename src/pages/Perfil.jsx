import useAuth from '../hooks/useAuth.js'
import Boton from '../components/Boton.jsx'
import Tarjeta from '../components/Tarjeta.jsx'
import './Perfil.css'

export default function Perfil() {
  const { usuario, salir } = useAuth()

  return (
    <>
      <h1>Perfil</h1>
      <Tarjeta className="perfil__tarjeta">
        {usuario.photoURL ? (
          // referrerPolicy: Google no carga las fotos de perfil si se envía el referrer
          <img className="perfil__foto" src={usuario.photoURL} alt="" referrerPolicy="no-referrer" />
        ) : (
          <span className="perfil__foto perfil__foto--vacia" aria-hidden="true" />
        )}
        <div>
          <p className="perfil__nombre">{usuario.displayName}</p>
          <p className="perfil__email">{usuario.email}</p>
        </div>
      </Tarjeta>
      <Boton variante="outline" onClick={salir}>
        Cerrar sesión
      </Boton>
    </>
  )
}
