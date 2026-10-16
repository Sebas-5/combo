import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { initializeFirestore, persistentLocalCache, persistentMultipleTabManager } from 'firebase/firestore'

// La configuración sale de las variables de entorno de Vite (.env.local).
// Estas claves NO son secretas (van en el JS que descarga el navegador):
// lo que protege los datos son las reglas de Firestore (firestore.rules).
const app = initializeApp({
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
})

export const auth = getAuth(app)
export const proveedorGoogle = new GoogleAuthProvider()

// Firestore con caché local: los datos ya vistos se leen sin conexión y las
// escrituras hechas offline se envían solas al volver la red.
export const db = initializeFirestore(app, {
  localCache: persistentLocalCache({ tabManager: persistentMultipleTabManager() }),
})
