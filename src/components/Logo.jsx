// Icono de Combo: tres barras de votación y un check ("el grupo decide").
// Con `pequeno` se quita el check, porque a 32px o menos no se distingue.
export default function Logo({ tamano = 84, pequeno = false }) {
  return (
    <svg
      width={tamano}
      height={tamano}
      viewBox="0 0 84 84"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Logo de Combo"
    >
      <rect x="12" y="44" width="16" height="28" rx="5" fill="#FFD23F" />
      <rect x="34" y="24" width="16" height="48" rx="5" fill="#FFD23F" />
      <rect x="56" y="36" width="16" height="36" rx="5" fill="#FFD23F" />
      {!pequeno && (
        <path
          d="M34 14l6 6 12-12"
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      )}
    </svg>
  )
}
