'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { ChevronDown, Mail, Linkedin, Github } from 'lucide-react'
import Image from 'next/image'

export function HeroSection() {
  const [displayedText, setDisplayedText] = useState('')
  const fullText = "Hi, I'm Saihajvir Singh"
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(fullText.slice(0, index + 1))
        setIndex(index + 1)
      }, 50)
      return () => clearTimeout(timeout)
    }
  }, [index, fullText])

  const handleSmoothScroll = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-background px-4 sm:px-6 lg:px-8 pt-20"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="flex flex-col justify-center gap-6">
            <div className="mb-6">
              <h1 className="text-5xl sm:text-6xl font-bold text-foreground mb-4 leading-tight">
                {displayedText}
                <span className="animate-pulse">|</span>
              </h1>
              <p className="text-xl text-foreground/70 mb-2">
                Software Developer & AI Enthusiast
              </p>
              <p className="text-lg text-accent font-medium">
                Full Stack Development | Deep Learning | Mobile Development
              </p>
            </div>

            <p className="text-base text-foreground/60 mb-2 max-w-md leading-relaxed">
              B.Tech Computer Engineering student at Mukesh Patel School of Technology Management & Engineering (MPSTME)
            </p>
            <p className="text-base text-foreground/60 mb-8 max-w-md leading-relaxed">
              Passionate about building scalable applications with modern tech stack. Experienced with Python, Java, JavaScript, React.js, Node.js, TensorFlow, and Firebase. Currently exploring AI applications and cloud technologies.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => handleSmoothScroll('#projects')}
                className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 text-base font-semibold"
              >
                View Projects
              </Button>
              <Button
                variant="outline"
                onClick={() => handleSmoothScroll('#contact')}
                className="w-full sm:w-auto px-8 py-6 text-base font-semibold border-border hover:border-accent hover:text-accent"
              >
                Get in Touch
              </Button>
            </div>
          </div>

          {/* Right Side - Profile Image */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-md aspect-square min-h-[280px] sm:min-h-[340px] md:min-h-96 bg-gradient-to-br from-accent/20 to-accent/5 rounded-2xl border border-accent/30 flex items-center justify-center overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <Image
                src="/images/Saihaj formals final.png"
                alt="Saihajvir Singh - Computer Engineering Student"
                fill
                className="object-cover z-10"
                priority
              />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-16">
          <button
            onClick={() => handleSmoothScroll('#about')}
            className="flex flex-col items-center gap-2 text-foreground/50 hover:text-accent transition-colors"
          >
            <span className="text-sm">Scroll to explore</span>
            <ChevronDown className="w-5 h-5 animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  )
}
