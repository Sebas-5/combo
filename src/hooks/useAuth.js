import { useContext } from 'react'
import { AuthContext } from './AuthContext.jsx'

// Uso: const { usuario, cargando, entrarConGoogle, salir } = useAuth()
export default function useAuth() {
  const contexto = useContext(AuthContext)
  if (!contexto) throw new Error('useAuth debe usarse dentro de <AuthProvider>')
  return contexto
}
