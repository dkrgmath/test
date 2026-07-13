'use client'

import { useId } from 'react'

type AppLogoProps = {
  /** Hauteur du logo (ex: 40, '40px', '2.5rem'). Défaut : 40px. */
  height?: number | string
  /** Force le logo en monochrome blanc (utile sur fond sombre). */
  white?: boolean
  /** Force le logo dans une couleur unie de ton choix. */
  color?: string
  className?: string
}

export default function AppLogo({
  height = 40,
  white = false,
  color,
  className,
}: AppLogoProps) {
  // IDs uniques : évite les collisions si le logo est rendu plusieurs fois (header + footer)
  const uid = useId().replace(/:/g, '')
  const g1 = `cbx-grad-1-${uid}`
  const g2 = `cbx-grad-2-${uid}`
  const g3 = `cbx-grad-3-${uid}`
  const g4 = `cbx-grad-4-${uid}`

  // Monochrome si `white` ou `color` est fourni, sinon les dégradés d'origine
  const flat = white ? '#ffffff' : color
  const fill1 = flat ?? `url(#${g1})`
  const fill2 = flat ?? `url(#${g2})`
  const fill3 = flat ?? `url(#${g3})`
  const fill4 = flat ?? `url(#${g4})`

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 953.96 1199.73"
      role="img"
      aria-label="CBX Academy"
      className={className}
      style={{ height, width: 'auto', display: 'block' }}
    >
      {!flat && (
        <defs>
          <linearGradient
            id={g1}
            x1="451.08"
            y1="607.3"
            x2="142.23"
            y2="975.36"
            gradientTransform="translate(0 1608.94) scale(1 -1)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#285ffd" />
            <stop offset=".2" stopColor="#2763fd" />
            <stop offset=".4" stopColor="#276ffd" />
            <stop offset=".61" stopColor="#2684fd" />
            <stop offset=".82" stopColor="#25a1fe" />
            <stop offset="1" stopColor="#24c0ff" />
          </linearGradient>

          <linearGradient
            id={g2}
            x1="92.15"
            y1="713.13"
            x2="329.36"
            y2="1598.25"
            gradientTransform="translate(0 1608.94) scale(1 -1)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#285ffd" />
            <stop offset="1" stopColor="#24c0ff" />
          </linearGradient>

          <linearGradient
            id={g3}
            x1="3154.23"
            y1="-443.1"
            x2="2845.39"
            y2="-75.04"
            gradientTransform="translate(3657.12 641.3) rotate(-180) scale(1 -1)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#285ffd" />
            <stop offset=".2" stopColor="#2763fd" />
            <stop offset=".4" stopColor="#276ffd" />
            <stop offset=".61" stopColor="#2684fd" />
            <stop offset=".82" stopColor="#25a1fe" />
            <stop offset="1" stopColor="#24c0ff" />
          </linearGradient>

          <linearGradient
            id={g4}
            x1="2795.32"
            y1="-337.28"
            x2="3032.42"
            y2="547.74"
            gradientTransform="translate(3657.12 641.3) rotate(-180) scale(1 -1)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#285ffd" />
            <stop offset="1" stopColor="#24c0ff" />
          </linearGradient>
        </defs>
      )}

      <g id="logo">
        <g id="icon">
          <g id="left">
            <path
              fill={fill1}
              d="M468.28,874.32c10.1,10.9,12.3,18.8,0,42s-41.3,83.4-54.4,110.9c-13,27.5-26.8,18.1-51.5-8S75.68,702.22,75.68,702.22l133-124.4s249.3,285.6,259.5,296.5h.1Z"
            />
            <path
              fill={fill2}
              d="M234.88,877.92s-157.2-171.7-200.7-222.4c-61-71.1-33.4-94.4,28.2-166.8C123.98,416.22,456.58,37.92,478.48,14.62c101.5-108-134.8,411-222.5,619.7-59.2,140.9-43.5,216.7-21,243.5h-.1v.1Z"
            />
          </g>
          <g id="right">
            <path
              fill={fill3}
              d="M485.68,325.52c-10.1-10.9-12.3-18.9,0-42s41.3-83.4,54.4-110.9c13-27.5,26.8-18.1,51.5,8s286.7,317,286.7,317l-133,124.4s-249.3-285.6-259.5-296.5h-.1Z"
            />
            <path
              fill={fill4}
              d="M719.08,321.92s157.2,171.7,200.7,222.4c61,71.1,33.4,94.4-28.2,166.8-61.6,72.5-394.2,450.8-416,474-101.5,108,134.8-411,222.5-619.7,59.2-140.9,43.5-216.7,21-243.5h0Z"
            />
          </g>
        </g>
      </g>
    </svg>
  )
}
