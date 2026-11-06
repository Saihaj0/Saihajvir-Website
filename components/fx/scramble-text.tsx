'use client'

import { useEffect, useState } from 'react'

const GLYPHS = '01#<>/\\_=+*[]{}~'

/**
 * Types a line out of random glyphs that settle into the real text, left to right.
 * The real text is always laid out (invisibly) so the line never changes width.
 */
export function ScrambleText({
  text,
  delay = 0,
  duration = 900,
  className,
}: {
  text: string
  delay?: number
  duration?: number
  className?: string
}) {
  const [out, setOut] = useState(text)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let raf = 0
    const t0 = performance.now() + delay
    const rand = () => GLYPHS[Math.floor(Math.random() * GLYPHS.length)]

    const tick = (now: number) => {
      const p = Math.min(1, Math.max(0, (now - t0) / duration))
      const settled = Math.floor(p * text.length)
      let s = ''
      for (let i = 0; i < text.length; i++) {
        s += text[i] === ' ' || (now >= t0 && i < settled) ? text[i] : rand()
      }
      setOut(p >= 1 ? text : s)
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [text, delay, duration])

  return (
    <span className={`relative inline-block ${className ?? ''}`} aria-label={text}>
      <span className="invisible" aria-hidden="true">
        {text}
      </span>
      <span className="absolute inset-0 whitespace-nowrap" aria-hidden="true">
        {out}
      </span>
    </span>
  )
}
