import { Github, Linkedin } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative z-10 overflow-hidden border-t border-border px-5 pb-8 pt-16 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <p
          className="text-outline select-none text-center text-[clamp(3rem,15vw,11rem)] font-semibold uppercase leading-none tracking-tighter"
          aria-hidden="true"
        >
          Saihajvir
        </p>

        <div className="mt-12 flex flex-col items-center justify-between gap-8 md:flex-row">
          {/* Left - Copyright */}
          <div className="text-center md:text-left">
            <p className="text-sm text-foreground/70">© {currentYear} Saihajvir Singh. All rights reserved.</p>
            <p className="mt-2 text-xs text-foreground/50">Built with Next.js, React, and TailwindCSS</p>
          </div>

          {/* Center - Quick Links */}
          <div className="flex gap-8 text-sm">
            <a href="#home" className="text-foreground/70 transition-colors hover:text-accent">
              Home
            </a>
            <a href="#projects" className="text-foreground/70 transition-colors hover:text-accent">
              Projects
            </a>
            <a href="#contact" className="text-foreground/70 transition-colors hover:text-accent">
              Contact
            </a>
          </div>

          {/* Right - Social Links */}
          <div className="flex gap-3">
            <a
              href="https://github.com/Saihaj0"
              target="_blank"
              rel="noopener noreferrer"
              className="flex size-10 items-center justify-center rounded-full border border-border text-foreground/70 transition-all hover:border-accent hover:text-accent"
              aria-label="GitHub"
            >
              <Github className="size-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/saihajvir-singh-52490a283"
              target="_blank"
              rel="noopener noreferrer"
              className="flex size-10 items-center justify-center rounded-full border border-border text-foreground/70 transition-all hover:border-accent hover:text-accent"
              aria-label="LinkedIn"
            >
              <Linkedin className="size-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
