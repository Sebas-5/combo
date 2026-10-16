import { doc, getDoc, setDoc, serverTimestamp } from 'firebase/firestore'
import { db } from './config.js'

// Crea el perfil users/{uid} la primera vez que alguien entra.
// Si ya existe, no se toca (así `createdAt` conserva la fecha original).
export async function asegurarPerfil(usuario) {
  const ref = doc(db, 'users', usuario.uid)
  const existente = await getDoc(ref)
  if (existente.exists()) return

  await setDoc(ref, {
    displayName: usuario.displayName ?? '',
    photoURL: usuario.photoURL ?? '',
    email: usuario.email ?? '',
    createdAt: serverTimestamp(),
  })
}
