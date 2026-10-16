// Pantalla provisional de las pestañas que aún no existen.
export default function EnConstruccion({ titulo }) {
  return (
    <>
      <h1>{titulo}</h1>
      <p style={{ color: 'var(--texto-suave)', margin: 0 }}>Esta pantalla llega en un paso posterior.</p>
    </>
  )
}
