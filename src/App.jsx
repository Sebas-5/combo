import { Routes, Route } from 'react-router-dom'
import Inicio from './pages/Inicio.jsx'
import Diseno from './pages/Diseno.jsx'
import EnConstruccion from './pages/EnConstruccion.jsx'
import Perfil from './pages/Perfil.jsx'
import RutaProtegida from './components/RutaProtegida.jsx'
import Armazon from './components/Armazon.jsx'
import AvisoInstalarIos from './components/AvisoInstalarIos.jsx'

// Las rutas de la app. Se irán añadiendo en los siguientes pasos
// (/grupo/:id, /plan/:id, /unirse/:codigo...).
export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Inicio />} />
        {/* Pantallas de dentro de la app: exigen sesión y comparten cabecera y barra inferior */}
        <Route element={<RutaProtegida />}>
          <Route element={<Armazon />}>
            <Route path="/votos" element={<EnConstruccion titulo="Votaciones" />} />
            <Route path="/planes" element={<EnConstruccion titulo="Planes" />} />
            <Route path="/perfil" element={<Perfil />} />
          </Route>
        </Route>
        {/* El catálogo de componentes solo existe en desarrollo (no pide sesión) */}
        {import.meta.env.DEV && (
          <Route element={<Armazon />}>
            <Route path="/diseno" element={<Diseno />} />
          </Route>
        )}
      </Routes>
      <AvisoInstalarIos />
    </>
  )
}
