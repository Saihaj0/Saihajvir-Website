import { Github, Linkedin } from 'lucide-react'
import Link from 'next/link'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-card border-t border-border py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Left - Copyright */}
          <div className="text-center md:text-left">
            <p className="text-foreground/70 text-sm">
              © {currentYear} Saihajvir Singh. All rights reserved.
            </p>
            <p className="text-foreground/50 text-xs mt-2">
              Built with Next.js, React, and TailwindCSS
            </p>
          </div>

          {/* Center - Quick Links */}
          <div className="flex gap-8 text-sm">
            <a
              href="#home"
              className="text-foreground/70 hover:text-accent transition-colors"
            >
              Home
            </a>
            <a
              href="#projects"
              className="text-foreground/70 hover:text-accent transition-colors"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-foreground/70 hover:text-accent transition-colors"
            >
              Contact
            </a>
          </div>

          {/* Right - Social Links */}
          <div className="flex gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg bg-secondary/50 border border-border flex items-center justify-center hover:bg-accent/20 hover:border-accent transition-all"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4 text-foreground/70 hover:text-accent" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg bg-secondary/50 border border-border flex items-center justify-center hover:bg-accent/20 hover:border-accent transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4 text-foreground/70 hover:text-accent" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
