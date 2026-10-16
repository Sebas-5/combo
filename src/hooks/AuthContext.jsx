import { createContext, useEffect, useState } from 'react'
import { onAuthStateChanged, signInWithPopup, signInWithRedirect, signOut } from 'firebase/auth'
import { auth, proveedorGoogle } from '../firebase/config.js'
import { asegurarPerfil } from '../firebase/usuarios.js'

export const AuthContext = createContext(null)

// Guarda en un único sitio quién ha iniciado sesión, para toda la app.
// `cargando` es true mientras Firebase comprueba si ya había una sesión guardada
// (así no parpadea la pantalla de login a quien ya había entrado).
export function AuthProvider({ children }) {
  const [usuario, setUsuario] = useState(null)
  const [cargando, setCargando] = useState(true)

  useEffect(() => {
    // Firebase avisa cada vez que alguien entra o sale
    return onAuthStateChanged(auth, async (u) => {
      if (u) {
        try {
          await asegurarPerfil(u)
        } catch (e) {
          // Si falla (reglas, sin red), la sesión sigue; el perfil se reintenta en la próxima entrada
          console.error('No se pudo crear el perfil', e)
        }
      }
      setUsuario(u)
      setCargando(false)
    })
  }, [])

  async function entrarConGoogle() {
    try {
      await signInWithPopup(auth, proveedorGoogle)
    } catch (e) {
      // Algunos navegadores móviles bloquean la ventana emergente: probamos con redirección
      if (e.code === 'auth/popup-blocked') return signInWithRedirect(auth, proveedorGoogle)
      // Cerrar la ventana a propósito no es un error
      if (e.code === 'auth/popup-closed-by-user' || e.code === 'auth/cancelled-popup-request') return
      throw e
    }
  }

  const salir = () => signOut(auth)

  return <AuthContext.Provider value={{ usuario, cargando, entrarConGoogle, salir }}>{children}</AuthContext.Provider>
}
