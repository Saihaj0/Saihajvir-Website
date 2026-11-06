import { cn } from '@/lib/utils'
import type { CSSProperties } from 'react'

/** Endless sideways ticker. Pauses on hover. */
export function Marquee({
  items,
  speed = 45,
  className,
}: {
  items: string[]
  speed?: number
  className?: string
}) {
  return (
    <div
      className={cn('marquee relative overflow-hidden', className)}
      style={
        {
          maskImage: 'linear-gradient(to right, transparent, #000 12%, #000 88%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, #000 12%, #000 88%, transparent)',
        } as CSSProperties
      }
    >
      <div className="marquee-track" style={{ '--marquee-speed': `${speed}s` } as CSSProperties}>
        {[0, 1].map((copy) => (
          <div key={copy} className="flex shrink-0 items-center" aria-hidden={copy === 1}>
            {items.map((item) => (
              <span key={`${copy}-${item}`} className="flex items-center">
                <span className="px-5 font-mono text-sm uppercase tracking-[0.18em] text-foreground/60 transition-colors hover:text-accent">
                  {item}
                </span>
                <span className="text-accent/50" aria-hidden="true">
                  ✦
                </span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
