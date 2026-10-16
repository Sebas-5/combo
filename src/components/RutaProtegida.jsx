import { Navigate, Outlet } from 'react-router-dom'
import useAuth from '../hooks/useAuth.js'
import Pantallazo from './Pantallazo.jsx'

// Envuelve las rutas que requieren sesión: sin usuario te devuelve al inicio.
export default function RutaProtegida() {
  const { usuario, cargando } = useAuth()
  if (cargando) return <Pantallazo />
  if (!usuario) return <Navigate to="/" replace />
  return <Outlet />
}
