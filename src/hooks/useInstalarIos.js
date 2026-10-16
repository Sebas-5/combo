import { useState } from 'react'

const CLAVE = 'combo.avisoIosCerrado'

// En iPhone/iPad las notificaciones push de una PWA solo funcionan si está
// añadida a la pantalla de inicio (iOS 16.4+). Este hook dice si hay que
// enseñar la guía: estamos en iOS, en el navegador (no instalada) y el
// usuario no la ha cerrado ya.
function esIos() {
  const ua = navigator.userAgent
  const iphoneOIpod = /iPhone|iPod/.test(ua)
  // Los iPad modernos se identifican como Mac, pero tienen pantalla táctil
  const ipad = /iPad/.test(ua) || (/Macintosh/.test(ua) && navigator.maxTouchPoints > 1)
  return iphoneOIpod || ipad
}

function estaInstalada() {
  return window.navigator.standalone === true || window.matchMedia('(display-mode: standalone)').matches
}

function yaCerrado() {
  try {
    return localStorage.getItem(CLAVE) === '1'
  } catch {
    return false
  }
}

export default function useInstalarIos() {
  const [visible, setVisible] = useState(() => esIos() && !estaInstalada() && !yaCerrado())

  function cerrar() {
    setVisible(false)
    try {
      localStorage.setItem(CLAVE, '1')
    } catch {
      // sin localStorage (modo privado): el aviso volverá a salir, no pasa nada
    }
  }

  return { visible, cerrar }
}
