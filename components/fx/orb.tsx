'use client'

import { useEffect, useRef } from 'react'

type V3 = [number, number, number]

/**
 * A rotating wireframe globe drawn on a 2D canvas: a sphere of points joined to their
 * nearest neighbours, two orbit rings with a satellite each, and a soft glow.
 * It leans toward the pointer, pauses off-screen, and draws one still frame when the
 * visitor prefers reduced motion.
 */
export function Orb({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const small = window.innerWidth < 640

    // Points on a sphere (Fibonacci lattice) and their three nearest neighbours.
    const N = small ? 380 : 700
    const pts: V3[] = []
    const golden = Math.PI * (3 - Math.sqrt(5))
    for (let i = 0; i < N; i++) {
      const y = 1 - (i / (N - 1)) * 2
      const r = Math.sqrt(1 - y * y)
      const t = golden * i
      pts.push([Math.cos(t) * r, y, Math.sin(t) * r])
    }
    const links: [number, number][] = []
    const seen = new Set<number>()
    for (let i = 0; i < N; i++) {
      const d: [number, number][] = []
      for (let j = 0; j < N; j++) {
        if (i === j) continue
        const dx = pts[i][0] - pts[j][0]
        const dy = pts[i][1] - pts[j][1]
        const dz = pts[i][2] - pts[j][2]
        d.push([dx * dx + dy * dy + dz * dz, j])
      }
      d.sort((a, b) => a[0] - b[0])
      for (let k = 0; k < 3; k++) {
        const j = d[k][1]
        const key = i < j ? i * N + j : j * N + i
        if (!seen.has(key)) {
          seen.add(key)
          links.push([i, j])
        }
      }
    }

    // Orbit rings (radius, tilt around X, tilt around Z).
    const rings = [
      { r: 1.32, tx: 1.25, tz: 0.35, speed: 0.55, phase: 0 },
      { r: 1.5, tx: 0.55, tz: -0.7, speed: -0.38, phase: 2 },
    ].map((cfg) => {
      const pts3: V3[] = []
      const steps = 96
      for (let s = 0; s < steps; s++) {
        const a = (s / steps) * Math.PI * 2
        pts3.push(ringPoint(cfg.r, a, cfg.tx, cfg.tz))
      }
      return { ...cfg, pts3 }
    })

    function ringPoint(r: number, a: number, tx: number, tz: number): V3 {
      let x = Math.cos(a) * r
      let y = 0
      let z = Math.sin(a) * r
      const y1 = y * Math.cos(tx) - z * Math.sin(tx)
      const z1 = y * Math.sin(tx) + z * Math.cos(tx)
      y = y1
      z = z1
      const x2 = x * Math.cos(tz) - y * Math.sin(tz)
      const y2 = x * Math.sin(tz) + y * Math.cos(tz)
      x = x2
      y = y2
      return [x, y, z]
    }

    // Colours come from CSS variables so the globe follows the dark/light theme.
    const readPalette = () => {
      const cs = getComputedStyle(document.documentElement)
      const get = (name: string, fallback: string) => cs.getPropertyValue(name).trim() || fallback
      return {
        line: get('--orb-line', '165, 220, 255'),
        dot: get('--orb-dot', '210, 240, 255'),
        glow: get('--orb-glow', '120, 200, 255'),
        sat: get('--orb-sat', '234, 246, 255'),
        boost: parseFloat(get('--orb-boost', '1')) || 1,
      }
    }
    let pal = readPalette()

    let W = 0
    let H = 0
    let dpr = 1
    let R = 0
    let spin = 0
    let curY = 0
    let curX = 0
    let targetY = 0
    let targetX = 0
    let raf = 0
    let visible = true
    let last = 0

    function resize() {
      const rect = canvas!.getBoundingClientRect()
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      W = rect.width
      H = rect.height
      canvas!.width = Math.max(1, Math.round(W * dpr))
      canvas!.height = Math.max(1, Math.round(H * dpr))
      R = Math.min(W, H) * 0.31
      if (reduce) draw()
    }

    function project(p: V3, ay: number, ax: number): [number, number, number] {
      const ca = Math.cos(ay)
      const sa = Math.sin(ay)
      const cb = Math.cos(ax)
      const sb = Math.sin(ax)
      const x = p[0] * ca + p[2] * sa
      const z = -p[0] * sa + p[2] * ca
      const y = p[1]
      const y2 = y * cb - z * sb
      const z2 = y * sb + z * cb
      const scale = 3.2 / (3.2 - z2)
      return [W / 2 + x * R * scale, H / 2 + y2 * R * scale, z2]
    }

    function draw() {
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0)
      ctx!.clearRect(0, 0, W, H)

      // Glow behind the globe.
      const g = ctx!.createRadialGradient(W / 2, H / 2, R * 0.15, W / 2, H / 2, R * 1.7)
      g.addColorStop(0, `rgba(${pal.glow}, ${0.2 * (pal.boost > 1 ? 0.7 : 1)})`)
      g.addColorStop(0.55, `rgba(${pal.glow}, ${0.06 * (pal.boost > 1 ? 0.7 : 1)})`)
      g.addColorStop(1, `rgba(${pal.glow}, 0)`)
      ctx!.fillStyle = g
      ctx!.fillRect(0, 0, W, H)

      const ay = spin + curY
      const ax = -0.32 + curX

      const proj = pts.map((p) => project(p, ay, ax))

      // Mesh lines, grouped by brightness so each group is one stroke.
      const BUCKETS = 5
      const lineBuckets: [number, number, number, number][][] = Array.from({ length: BUCKETS }, () => [])
      for (const [i, j] of links) {
        const a = proj[i]
        const b = proj[j]
        const depth = (a[2] + b[2]) / 2
        const level = Math.min(BUCKETS - 1, Math.max(0, Math.floor(((depth + 1) / 2) * BUCKETS)))
        lineBuckets[level].push([a[0], a[1], b[0], b[1]])
      }
      ctx!.lineWidth = 0.7
      lineBuckets.forEach((segs, level) => {
        if (!segs.length) return
        ctx!.strokeStyle = `rgba(${pal.line}, ${Math.min(1, (0.04 + (level / (BUCKETS - 1)) * 0.22) * pal.boost)})`
        ctx!.beginPath()
        for (const s of segs) {
          ctx!.moveTo(s[0], s[1])
          ctx!.lineTo(s[2], s[3])
        }
        ctx!.stroke()
      })

      // Points, brighter and larger toward the viewer.
      const pointBuckets: [number, number][][] = Array.from({ length: BUCKETS }, () => [])
      for (const p of proj) {
        const level = Math.min(BUCKETS - 1, Math.max(0, Math.floor(((p[2] + 1) / 2) * BUCKETS)))
        pointBuckets[level].push([p[0], p[1]])
      }
      pointBuckets.forEach((arr, level) => {
        if (!arr.length) return
        const t = level / (BUCKETS - 1)
        ctx!.fillStyle = `rgba(${pal.dot}, ${Math.min(1, 0.25 + t * 0.7)})`
        const radius = 0.6 + t * 1.5
        ctx!.beginPath()
        for (const p of arr) {
          ctx!.moveTo(p[0] + radius, p[1])
          ctx!.arc(p[0], p[1], radius, 0, Math.PI * 2)
        }
        ctx!.fill()
      })

      // Orbit rings with a satellite.
      for (const ring of rings) {
        const rp = ring.pts3.map((p) => project(p, ay * 0.35, ax))
        ctx!.lineWidth = 1
        for (let s = 0; s < rp.length; s++) {
          const a = rp[s]
          const b = rp[(s + 1) % rp.length]
          const depth = (a[2] + b[2]) / 2
          ctx!.strokeStyle = `rgba(${pal.line}, ${Math.min(1, (0.06 + ((depth + 1.5) / 3) * 0.3) * pal.boost)})`
          ctx!.beginPath()
          ctx!.moveTo(a[0], a[1])
          ctx!.lineTo(b[0], b[1])
          ctx!.stroke()
        }
        const ang = ring.phase + spin * ring.speed * 6
        const sat = project(ringPoint(ring.r, ang, ring.tx, ring.tz), ay * 0.35, ax)
        ctx!.fillStyle = `rgba(${pal.sat}, 0.95)`
        ctx!.shadowColor = `rgba(${pal.glow}, 0.9)`
        ctx!.shadowBlur = 14
        ctx!.beginPath()
        ctx!.arc(sat[0], sat[1], 2.6 + ((sat[2] + 1.5) / 3) * 1.6, 0, Math.PI * 2)
        ctx!.fill()
        ctx!.shadowBlur = 0
      }
    }

    function loop(now: number) {
      const dt = Math.min(64, now - (last || now))
      last = now
      spin += (dt / 1000) * 0.16
      curY += (targetY - curY) * 0.05
      curX += (targetX - curX) * 0.05
      draw()
      raf = requestAnimationFrame(loop)
    }

    function start() {
      if (reduce || raf) return
      last = 0
      raf = requestAnimationFrame(loop)
    }
    function stop() {
      if (raf) cancelAnimationFrame(raf)
      raf = 0
    }

    function onMove(e: PointerEvent) {
      const rect = canvas!.getBoundingClientRect()
      const nx = (e.clientX - (rect.left + rect.width / 2)) / (window.innerWidth / 2)
      const ny = (e.clientY - (rect.top + rect.height / 2)) / (window.innerHeight / 2)
      targetY = Math.max(-1, Math.min(1, nx)) * 0.7
      targetX = Math.max(-1, Math.min(1, ny)) * 0.35
    }
    function onVisibility() {
      if (document.hidden) stop()
      else if (visible) start()
    }

    const themeObserver = new MutationObserver(() => {
      pal = readPalette()
      if (reduce) draw()
    })
    themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })

    const ro = new ResizeObserver(resize)
    ro.observe(canvas)
    resize()

    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting
      if (visible && !document.hidden) start()
      else stop()
    })
    io.observe(canvas)

    if (!reduce) window.addEventListener('pointermove', onMove, { passive: true })
    document.addEventListener('visibilitychange', onVisibility)
    if (reduce) draw()
    else start()

    return () => {
      stop()
      ro.disconnect()
      themeObserver.disconnect()
      io.disconnect()
      window.removeEventListener('pointermove', onMove)
      document.removeEventListener('visibilitychange', onVisibility)
    }
  }, [])

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />
}
