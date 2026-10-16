import { useState } from 'react'
import { Navigate } from 'react-router-dom'
import Logo from '../components/Logo.jsx'
import Boton from '../components/Boton.jsx'
import Pantallazo from '../components/Pantallazo.jsx'
import useAuth from '../hooks/useAuth.js'
import './Inicio.css'

export default function Inicio() {
  const { usuario, cargando, entrarConGoogle } = useAuth()
  const [error, setError] = useState('')
  const [entrando, setEntrando] = useState(false)

  if (cargando) return <Pantallazo />
  // Quien ya tiene sesión no necesita ver el login
  if (usuario) return <Navigate to="/planes" replace />

  async function entrar() {
    setError('')
    setEntrando(true)
    try {
      await entrarConGoogle()
    } catch {
      setError('No hemos podido iniciar sesión. Inténtalo de nuevo.')
    } finally {
      setEntrando(false)
    }
  }

  return (
    <main className="pagina inicio">
      <div className="inicio__centro">
        <Logo tamano={120} />
        <h1 className="inicio__logo">combo</h1>
        <p className="inicio__lema">Tu grupo propone, vota y decide.</p>
      </div>
      {error && (
        <p className="inicio__error" role="alert">
          {error}
        </p>
      )}
      <Boton className="inicio__entrar" onClick={entrar} disabled={entrando}>
        {entrando ? 'Entrando…' : 'Entrar con Google'}
      </Boton>
    </main>
  )
}
