'use client'

import { useEffect, useState } from 'react'
import { Github, Linkedin, Download, Menu, X } from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { ThemeToggle } from '@/components/theme-toggle'

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#featured', label: 'Featured' },
  { href: '#projects', label: 'Projects' },
  { href: '#publications', label: 'Publications' },
  { href: '#stats', label: 'Stats' },
  { href: '#blog', label: 'Blog' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
]

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('#home')
  const [scrolled, setScrolled] = useState(false)

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleViewResume = () => {
    window.open('/Saihajvir-Singh-Resume.pdf', '_blank')
  }

  // Highlight the link of the section that is currently in view.
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24)
      const probe = window.innerHeight * 0.35
      let current = '#home'
      for (const link of navLinks) {
        const el = document.querySelector(link.href)
        if (el && el.getBoundingClientRect().top <= probe) current = link.href
      }
      setActive(current)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className="fixed inset-x-0 top-3 z-50 flex justify-center px-3 sm:top-4 sm:px-4">
      <div className="w-full max-w-6xl">
        <div
          className={cn(
            'glass flex h-14 items-center justify-between rounded-full pl-3 pr-2 transition-all duration-500',
            scrolled ? 'bg-background/70 shadow-[0_10px_40px_-14px_rgba(0,0,0,0.45)]' : 'bg-transparent'
          )}
        >
          {/* Logo */}
          <Link
            href="#home"
            onClick={(e) => handleSmoothScroll(e, '#home')}
            className="flex size-9 items-center justify-center rounded-full border border-accent/40 bg-accent/10 font-mono text-sm font-bold text-accent transition-colors hover:bg-accent/20"
            aria-label="Home"
          >
            SS
          </Link>

          {/* Nav Links */}
          <div className="hidden items-center gap-0.5 xl:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleSmoothScroll(e, link.href)}
                className={cn(
                  'relative rounded-full px-3 py-1.5 text-[13px] transition-colors',
                  active === link.href ? 'bg-accent/15 text-accent' : 'text-foreground/65 hover:text-foreground'
                )}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-1.5">
            <a
              href="https://github.com/Saihaj0"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hidden size-9 items-center justify-center rounded-full text-foreground/70 transition-colors hover:bg-foreground/5 hover:text-accent sm:flex"
            >
              <Github className="size-[18px]" />
            </a>
            <a
              href="https://www.linkedin.com/in/saihajvir-singh-52490a283"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hidden size-9 items-center justify-center rounded-full text-foreground/70 transition-colors hover:bg-foreground/5 hover:text-accent sm:flex"
            >
              <Linkedin className="size-[18px]" />
            </a>

            <ThemeToggle />

            <button
              type="button"
              onClick={handleViewResume}
              className="inline-flex h-9 items-center gap-2 rounded-full bg-[var(--ice)] px-4 text-sm font-semibold text-[var(--accent-foreground)] transition-shadow hover:shadow-[0_0_24px_-2px_var(--glow)]"
            >
              <Download className="size-4" />
              <span className="hidden sm:inline">Resume</span>
            </button>

            <button
              type="button"
              className="inline-flex size-9 items-center justify-center rounded-full border border-border text-foreground/75 transition-colors hover:text-accent xl:hidden"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X className="size-[18px]" /> : <Menu className="size-[18px]" />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="glass mt-2 rounded-3xl bg-popover/95 p-3 shadow-2xl xl:hidden">
            <div className="grid grid-cols-2 gap-1 sm:grid-cols-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    handleSmoothScroll(e, link.href)
                    setMenuOpen(false)
                  }}
                  className={cn(
                    'rounded-xl px-3 py-2.5 text-sm transition-colors',
                    active === link.href ? 'bg-accent/15 text-accent' : 'text-foreground/80 hover:bg-foreground/5 hover:text-accent'
                  )}
                >
                  {link.label}
                </a>
              ))}
            </div>
            <div className="mt-2 flex gap-2 border-t border-border pt-3 sm:hidden">
              <a
                href="https://github.com/Saihaj0"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-border py-2 text-sm text-foreground/80"
              >
                <Github className="size-4" /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/saihajvir-singh-52490a283"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-border py-2 text-sm text-foreground/80"
              >
                <Linkedin className="size-4" /> LinkedIn
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
