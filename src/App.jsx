import { Routes, Route } from 'react-router-dom'
import Inicio from './pages/Inicio.jsx'
import Diseno from './pages/Diseno.jsx'
import EnConstruccion from './pages/EnConstruccion.jsx'
import Armazon from './components/Armazon.jsx'
import AvisoInstalarIos from './components/AvisoInstalarIos.jsx'

// Las rutas de la app. Se irán añadiendo en los siguientes pasos
// (/grupo/:id, /plan/:id, /unirse/:codigo...).
export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Inicio />} />
        {/* Pantallas de dentro de la app: comparten cabecera y barra inferior */}
        <Route element={<Armazon />}>
          <Route path="/votos" element={<EnConstruccion titulo="Votaciones" />} />
          <Route path="/planes" element={<EnConstruccion titulo="Planes" />} />
          <Route path="/perfil" element={<EnConstruccion titulo="Perfil" />} />
          {/* El catálogo de componentes solo existe en desarrollo */}
          {import.meta.env.DEV && <Route path="/diseno" element={<Diseno />} />}
        </Route>
      </Routes>
      <AvisoInstalarIos />
    </>
  )
}
