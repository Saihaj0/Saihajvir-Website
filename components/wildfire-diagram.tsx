/**
 * Schematic of the Wildfire Detection System: RGB and thermal frames are stacked into one
 * 4-channel input, pass through a CNN, and come out as a wildfire detection (95% accuracy).
 * Drawn as SVG so it stays sharp at any size; it is an illustration, not a screenshot.
 */

const TREES: [number, number][] = [
  [2, 0.85], [26, 1.05], [52, 0.8], [78, 1.1], [106, 0.9], [132, 1.05], [158, 0.85],
]
const FLAMES: [number, number, number][] = [
  [40, 120, 1.7], [92, 121, 2.2], [146, 120, 1.6], [66, 122, 1.2],
]

function Scene({ thermal }: { thermal?: boolean }) {
  return (
    <>
      {thermal ? (
        <>
          <rect width="190" height="120" fill="#12052a" />
          <circle cx="95" cy="112" r="78" fill="url(#heat)" />
          <circle cx="50" cy="104" r="34" fill="url(#heat)" opacity="0.9" />
          <circle cx="150" cy="106" r="30" fill="url(#heat)" opacity="0.85" />
        </>
      ) : (
        <>
          <rect width="190" height="120" fill="url(#sky)" />
          <ellipse cx="95" cy="124" rx="120" ry="52" fill="url(#glow)" />
        </>
      )}
      {TREES.map(([x, s]) => (
        <use
          key={x}
          href="#tree"
          transform={`translate(${x},122) scale(${s})`}
          fill={thermal ? '#1a0a38' : '#06120d'}
          opacity={thermal ? 0.8 : 1}
        />
      ))}
      {!thermal &&
        FLAMES.map(([x, y, s]) => (
          <path
            key={x}
            transform={`translate(${x},${y}) scale(${s})`}
            d="M0 0 C-6 -8 -3 -16 0 -24 C2 -16 8 -12 6 -4 C5 0 2 2 0 0 Z"
            fill="url(#flame)"
          />
        ))}
    </>
  )
}

export function WildfireDiagram({ className }: { className?: string }) {
  const channels: [string, string][] = [
    ['#ff6b6b', 'R'],
    ['#4cd68a', 'G'],
    ['#5aa9ff', 'B'],
    ['#ffb347', 'T'],
  ]

  return (
    <svg
      viewBox="0 0 480 480"
      className={className}
      role="img"
      aria-label="Diagram: RGB and thermal images are combined into a 4-channel input, processed by a convolutional neural network, and classified as wildfire with 95% accuracy."
      fontFamily="var(--font-mono), ui-monospace, monospace"
    >
      <defs>
        <linearGradient id="wf-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#0a1622" />
          <stop offset="1" stopColor="#050a11" />
        </linearGradient>
        <pattern id="wf-grid" width="24" height="24" patternUnits="userSpaceOnUse">
          <path d="M24 0H0V24" fill="none" stroke="#a5dcff" strokeOpacity="0.05" />
        </pattern>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#09182a" />
          <stop offset="0.6" stopColor="#2a1a22" />
          <stop offset="1" stopColor="#6b2d12" />
        </linearGradient>
        <radialGradient id="glow">
          <stop offset="0" stopColor="#ff8a3d" stopOpacity="0.85" />
          <stop offset="1" stopColor="#ff5a1f" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="flame" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0" stopColor="#ff5a1f" />
          <stop offset="1" stopColor="#ffd36b" />
        </linearGradient>
        <radialGradient id="heat">
          <stop offset="0" stopColor="#fff6b0" />
          <stop offset="0.25" stopColor="#ffb23d" />
          <stop offset="0.55" stopColor="#e5391f" stopOpacity="0.85" />
          <stop offset="1" stopColor="#7a1fa8" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="slab" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#a5dcff" stopOpacity="0.45" />
          <stop offset="1" stopColor="#a5dcff" stopOpacity="0.08" />
        </linearGradient>
        <linearGradient id="ring" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#a5dcff" />
          <stop offset="1" stopColor="#ff8a3d" />
        </linearGradient>
        <clipPath id="wf-tile">
          <rect width="190" height="120" rx="12" />
        </clipPath>
        <path id="tree" d="M0 0 L9 -26 L5 -26 L12 -44 L8 -44 L14 -64 L20 -44 L16 -44 L23 -26 L19 -26 L28 0 Z" />
      </defs>

      <rect width="480" height="480" rx="28" fill="url(#wf-bg)" />
      <rect width="480" height="480" rx="28" fill="url(#wf-grid)" />
      <rect x="0.5" y="0.5" width="479" height="479" rx="27.5" fill="none" stroke="#a5dcff" strokeOpacity="0.18" />

      {/* header */}
      <text x="28" y="36" fontSize="11" letterSpacing="2" fill="#8da2b8">
        WILDFIRE DETECTION · CNN
      </text>
      <circle cx="452" cy="32" r="4" fill="#ff7a3d">
        <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite" />
      </circle>

      {/* input frames */}
      <g transform="translate(28,56)" clipPath="url(#wf-tile)">
        <Scene />
      </g>
      <g transform="translate(262,56)" clipPath="url(#wf-tile)">
        <Scene thermal />
      </g>
      <rect x="28" y="56" width="190" height="120" rx="12" fill="none" stroke="#a5dcff" strokeOpacity="0.25" />
      <rect x="262" y="56" width="190" height="120" rx="12" fill="none" stroke="#a5dcff" strokeOpacity="0.25" />
      <text x="123" y="196" textAnchor="middle" fontSize="10" letterSpacing="2" fill="#8da2b8">
        RGB
      </text>
      <text x="357" y="196" textAnchor="middle" fontSize="10" letterSpacing="2" fill="#8da2b8">
        THERMAL
      </text>

      {/* merge into 4 channels */}
      <g fill="none" stroke="#a5dcff" strokeOpacity="0.65" strokeWidth="1.5" className="wf-flow">
        <path d="M123 204 C123 226 226 216 226 240" />
        <path d="M357 204 C357 226 254 216 254 240" />
      </g>
      {channels.map(([color], i) => (
        <rect
          key={color}
          x={198 + i * 8}
          y={240 + i * 6}
          width="60"
          height="34"
          rx="6"
          fill={color}
          fillOpacity="0.28"
          stroke={color}
          strokeOpacity="0.95"
        />
      ))}
      {channels.map(([color, label], i) => (
        <text key={label} x={198 + i * 8 + 8} y={240 + i * 6 + 14} fontSize="9" fill="#ffffff" fontWeight="700">
          {label}
        </text>
      ))}
      <text x="240" y="312" textAnchor="middle" fontSize="10" letterSpacing="2" fill="#cfe6f7">
        4-CHANNEL INPUT
      </text>

      {/* into the CNN */}
      <path
        d="M240 318 C240 334 57 322 57 335"
        fill="none"
        stroke="#a5dcff"
        strokeOpacity="0.65"
        strokeWidth="1.5"
        className="wf-flow"
      />

      {/* conv blocks */}
      {[
        [40, 335, 34, 74],
        [96, 343, 28, 58],
        [146, 351, 22, 42],
        [190, 358, 16, 28],
      ].map(([x, y, w, h]) => (
        <g key={x}>
          <rect x={x + 5} y={y - 5} width={w} height={h} rx="4" fill="none" stroke="#a5dcff" strokeOpacity="0.35" />
          <rect x={x} y={y} width={w} height={h} rx="4" fill="url(#slab)" stroke="#a5dcff" strokeOpacity="0.85" />
        </g>
      ))}

      {/* dense layers */}
      <g stroke="#a5dcff" strokeOpacity="0.18">
        {[350, 361, 372, 383, 394].flatMap((y1) => [361, 372, 383].map((y2) => <line key={`${y1}-${y2}`} x1="240" y1={y1} x2="268" y2={y2} />))}
      </g>
      {[350, 361, 372, 383, 394].map((y) => (
        <circle key={`a${y}`} cx="240" cy={y} r="3.2" fill="#a5dcff" />
      ))}
      {[361, 372, 383].map((y) => (
        <circle key={`b${y}`} cx="268" cy={y} r="3.2" fill="#a5dcff" />
      ))}

      {/* result */}
      <path d="M278 372 L356 372" fill="none" stroke="#ffb347" strokeOpacity="0.8" strokeWidth="1.5" className="wf-flow" />
      <circle cx="400" cy="372" r="38" fill="none" stroke="#1c2a3a" strokeWidth="8" />
      <circle
        cx="400"
        cy="372"
        r="38"
        fill="none"
        stroke="url(#ring)"
        strokeWidth="8"
        strokeLinecap="round"
        strokeDasharray="226.8 238.8"
        transform="rotate(-90 400 372)"
      />
      <text x="400" y="378" textAnchor="middle" fontSize="20" fontWeight="700" fill="#ffffff">
        95%
      </text>

      {/* labels */}
      <g fontSize="9" letterSpacing="1.6" fill="#8da2b8" textAnchor="middle">
        <text x="112" y="432">CONVOLUTIONAL LAYERS</text>
        <text x="254" y="432">DENSE</text>
        <text x="400" y="432">ACCURACY</text>
      </g>
      <text x="240" y="464" textAnchor="middle" fontSize="9" letterSpacing="2" fill="#5d7288">
        EARLY DETECTION · DISASTER PREVENTION
      </text>
    </svg>
  )
}
