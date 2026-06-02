
'use client'

import { useState } from 'react'
import { Github, Linkedin, Download, Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function Navbar() {
  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#featured', label: 'Featured' },
    { href: '#projects', label: 'Projects' },
    { href: '#publications', label: 'Publications' },
    { href: '#stats', label: 'Stats' },
    { href: '#blog', label: 'Blog' },
    { href: '#education', label: 'Education' },
    { href: '#contact', label: 'Contact' },
  ]

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

  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => setMenuOpen((prev) => !prev)

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="#home" className="text-xl font-bold text-accent font-mono">
            SS
          </Link>

          {/* Nav Links */}
          <div className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleSmoothScroll(e, link.href)}
                className="text-sm text-foreground/70 hover:text-accent transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-3">
            <div className="hidden md:flex gap-2">
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="hover:text-accent"
              >
                <a href="https://github.com/Saihaj0" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="hover:text-accent"
              >
                <a href="https://www.linkedin.com/in/saihajvir-singh-52490a283" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5" />
                </a>
              </Button>
            </div>

            <button
              type="button"
              className="inline-flex items-center justify-center rounded-lg border border-border p-2 text-foreground/70 hover:text-accent md:hidden"
              onClick={toggleMenu}
              aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

            <Button
              onClick={handleViewResume}
              className="bg-accent hover:bg-accent/90 text-accent-foreground gap-2"
              size="sm"
            >
              <Download className="w-4 h-4" />
              <span className="hidden sm:inline">Resume</span>
            </Button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden mt-3 rounded-2xl border border-border bg-card p-4 shadow-xl">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    handleSmoothScroll(e, link.href)
                    setMenuOpen(false)
                  }}
                  className="rounded-lg px-3 py-2 text-sm text-foreground/80 hover:bg-secondary/50 hover:text-accent transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
