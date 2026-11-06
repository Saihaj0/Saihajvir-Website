'use client'

import { useEffect, useRef, useState } from 'react'

/** Counts a number like "12+", "3.09" or "95%" up from zero when it scrolls into view. */
export function Counter({
  value,
  className,
  duration = 1400,
}: {
  value: string
  className?: string
  duration?: number
}) {
  const match = /^(\d+(?:\.\d+)?)(.*)$/.exec(value)
  const [shown, setShown] = useState(value)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (!match || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const target = parseFloat(match[1])
    const suffix = match[2]
    const decimals = (match[1].split('.')[1] ?? '').length
    const el = ref.current
    if (!el) return

    setShown(`${(0).toFixed(decimals)}${suffix}`)
    let raf = 0
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        io.disconnect()
        const t0 = performance.now()
        const tick = (now: number) => {
          const p = Math.min(1, (now - t0) / duration)
          const eased = 1 - Math.pow(1 - p, 3)
          setShown(`${(target * eased).toFixed(decimals)}${suffix}`)
          if (p < 1) raf = requestAnimationFrame(tick)
        }
        raf = requestAnimationFrame(tick)
      },
      { threshold: 0.4 }
    )
    io.observe(el)
    return () => {
      io.disconnect()
      cancelAnimationFrame(raf)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, duration])

  return (
    <span ref={ref} className={className} style={{ fontVariantNumeric: 'tabular-nums' }}>
      {shown}
    </span>
  )
}
