import { Routes, Route } from 'react-router-dom'
import Inicio from './pages/Inicio.jsx'
import AvisoInstalarIos from './components/AvisoInstalarIos.jsx'

// Las rutas de la app. Se irán añadiendo en los siguientes pasos
// (/grupos, /grupo/:id, /plan/:id, /unirse/:codigo...).
export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Inicio />} />
      </Routes>
      <AvisoInstalarIos />
    </>
  )
}
