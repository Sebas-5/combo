// Iconos de la interfaz: SVG de trazo (nunca emojis). Heredan el color del texto
// (currentColor), así que se tiñen con el `color` del elemento que los contiene.
// Chat y juego se añadirán cuando existan esas funciones.
const RUTAS = {
  voto: 'M6 20v-5M12 20V6M18 20v-9',
  plan: 'M6 5h12a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3zM3 10h18M8 3v4M16 3v4',
  grupo:
    'M9 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM3 20c0-3 2.7-5 6-5s6 2 6 5M17 10.5a2.5 2.5 0 1 0 0-5M17 14.5c2.5 0 4 1.7 4 4.5',
  perfil: 'M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM4 21c0-4 3.6-6 8-6s8 2 8 6',
  campana: 'M18 16v-5a6 6 0 1 0-12 0v5l-2 2h16zM10 21h4',
  ajustes: 'M4 7h9M17 7h3M4 17h3M11 17h9M15 7m-2 0a2 2 0 1 0 4 0 2 2 0 1 0-4 0M9 17m-2 0a2 2 0 1 0 4 0 2 2 0 1 0-4 0',
  check: 'M5 12l5 5 9-10',
  mas: 'M12 5v14M5 12h14',
  cerrar: 'M6 6l12 12M18 6L6 18',
  compartir: 'M12 3v12M8 7l4-4 4 4M6 11H5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1h-1',
}

// Si el icono acompaña a un texto, se deja decorativo (sin `titulo`).
// Si va solo (por ejemplo la campana), hay que pasar `titulo` para los lectores de pantalla.
export default function Icono({ nombre, tamano = 24, titulo }) {
  return (
    <svg
      width={tamano}
      height={tamano}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      role={titulo ? 'img' : undefined}
      aria-label={titulo}
      aria-hidden={titulo ? undefined : true}
    >
      <path d={RUTAS[nombre]} />
    </svg>
  )
}
