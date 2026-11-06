'use client'

import { useEffect, useRef } from 'react'

/** Thin scroll-progress bar at the top and a soft light that trails the mouse. */
export function PageFx() {
  const bar = useRef<HTMLDivElement>(null)
  const glow = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight
      const p = h > 0 ? window.scrollY / h : 0
      if (bar.current) bar.current.style.transform = `scaleX(${Math.min(1, Math.max(0, p))})`
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    const canGlow =
      window.matchMedia('(pointer: fine)').matches &&
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let raf = 0
    let gx = 0
    let gy = 0
    let tx = 0
    let ty = 0
    const onMove = (e: PointerEvent) => {
      tx = e.clientX
      ty = e.clientY
      if (glow.current) glow.current.style.opacity = '1'
    }
    const loop = () => {
      gx += (tx - gx) * 0.12
      gy += (ty - gy) * 0.12
      if (glow.current) glow.current.style.transform = `translate3d(${gx - 300}px, ${gy - 300}px, 0)`
      raf = requestAnimationFrame(loop)
    }
    if (canGlow) {
      window.addEventListener('pointermove', onMove, { passive: true })
      raf = requestAnimationFrame(loop)
    }

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      window.removeEventListener('pointermove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      <div
        ref={bar}
        className="fixed left-0 top-0 z-[70] h-[2px] w-full origin-left bg-[var(--ice)]"
        style={{ transform: 'scaleX(0)', boxShadow: '0 0 12px var(--glow)' }}
        aria-hidden="true"
      />
      <div
        ref={glow}
        className="pointer-events-none fixed left-0 top-0 z-[1] h-[600px] w-[600px] rounded-full opacity-0 transition-opacity duration-500"
        style={{ background: 'radial-gradient(circle, rgba(120,200,255,0.10), transparent 65%)' }}
        aria-hidden="true"
      />
    </>
  )
}
