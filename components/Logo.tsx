// Hringariki-symbolet fra logopakken: H-monogram med bølgelinje. Navnet står ved siden av i sidens egne skrifter.
export function Logo({ size = 44, farge = "#1E5A53" }: { size?: number; farge?: string }) {
  return (
    <svg width={size} height={(size * 212) / 240} viewBox="0 0 240 212" aria-hidden="true" focusable="false">
      <g fill={farge}>
        <path d="M52 34 H85 L77 42 V171 L84 178 H49 L57 170 V42 Z" />
        <path d="M150 34 H183 L175 42 V170 L183 178 H148 L155 171 V42 Z" />
      </g>
      <path
        d="M27 109 C58 88 80 94 105 108 C135 127 163 130 209 103"
        fill="none"
        stroke={farge}
        strokeWidth="11.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M27 126 C58 105 80 111 105 125 C135 144 163 147 209 120"
        fill="none"
        stroke={farge}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Bølgelinja fra logopakken, brukt som signatur over avslutningen.
export function Bolge({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 620 155" className={className} aria-hidden="true" focusable="false">
      <path
        d="M10 62 C90 10 180 15 265 62 S435 112 610 55"
        fill="none"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
      />
      <path
        d="M10 78 C90 26 180 31 265 78 S435 128 610 71"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

// Ringene fra logopakken, til ett hjørne av den mørke akuttflaten.
export function Ringer({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 260 260" className={className} aria-hidden="true" focusable="false">
      <path
        d="M18 238 A220 220 0 0 1 238 18 M42 238 A196 196 0 0 1 238 42 M66 238 A172 172 0 0 1 238 66"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
}
