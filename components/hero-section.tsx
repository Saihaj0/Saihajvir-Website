'use client'

import Image from 'next/image'
import { ArrowDown, ArrowRight } from 'lucide-react'
import { Orb } from '@/components/fx/orb'
import { ScrambleText } from '@/components/fx/scramble-text'
import { Marquee } from '@/components/fx/marquee'
import { btnGhost, btnPrimary } from '@/lib/styles'

const tickerItems = [
  'Python', 'Java', 'C++', 'JavaScript', 'TypeScript', 'React.js', 'Next.js', 'Node.js',
  'TensorFlow', 'OpenCV', 'PyTorch', 'Firebase', 'Supabase', 'PostgreSQL', 'Power BI', 'AWS',
]

export function HeroSection() {
  const handleSmoothScroll = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="relative z-10 flex min-h-screen flex-col justify-center overflow-hidden pt-28 sm:pt-32">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-6">
          {/* Left Content */}
          <div className="flex flex-col">
            <div className="glass mb-8 inline-flex w-fit items-center gap-3 rounded-full px-4 py-2">
              <span className="relative flex size-2">
                <span className="ping-soft absolute inline-flex size-full rounded-full bg-accent" />
                <span className="relative inline-flex size-2 rounded-full bg-accent" />
              </span>
              <span className="eyebrow !text-foreground/70">Seeking opportunities</span>
            </div>

            <h1 className="text-[clamp(2.75rem,9vw,6.25rem)] font-semibold leading-[0.92] tracking-tighter">
              <span className="mb-3 block text-[0.34em] font-normal tracking-normal text-foreground/50">
                Hi, I&apos;m{' '}
              </span>
              <span className="block">
                <ScrambleText text="Saihajvir" duration={1100} />{' '}
              </span>
              <span className="block">
                <ScrambleText text="Singh" className="serif-em" delay={350} duration={900} />
              </span>
            </h1>

            <p className="mt-8 text-xl text-foreground/80 sm:text-2xl">Software Developer &amp; AI Enthusiast</p>
            <p className="mt-3 font-mono text-[13px] leading-relaxed text-accent sm:text-sm">
              Full Stack Development <span className="text-foreground/30">|</span> Deep Learning{' '}
              <span className="text-foreground/30">|</span> Mobile Development
            </p>

            <p className="mt-8 max-w-lg text-base leading-relaxed text-foreground/60">
              B.Tech Computer Engineering student at Mukesh Patel School of Technology Management &amp; Engineering (MPSTME)
            </p>
            <p className="mt-3 max-w-lg text-base leading-relaxed text-foreground/60">
              Passionate about building scalable applications with modern tech stack. Experienced with Python, Java, JavaScript, React.js, Node.js, TensorFlow, and Firebase. Currently exploring AI applications and cloud technologies.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <button type="button" onClick={() => handleSmoothScroll('#projects')} className={btnPrimary}>
                View Projects
                <ArrowRight className="size-4" />
              </button>
              <button type="button" onClick={() => handleSmoothScroll('#contact')} className={btnGhost}>
                Get in Touch
              </button>
            </div>
          </div>

          {/* Right Side - globe with portrait */}
          <div className="relative mx-auto aspect-square w-full max-w-[300px] sm:max-w-[460px] lg:max-w-[540px]">
            <Orb className="absolute inset-0 size-full" />

            <div className="absolute left-1/2 top-1/2 aspect-square w-[44%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[conic-gradient(from_200deg,#a5dcff,#05080d_30%,#a5dcff_55%,#05080d_80%,#a5dcff)] p-[2px] shadow-[0_0_80px_-10px_var(--glow)]">
              <div className="relative size-full overflow-hidden rounded-full bg-background">
                <Image
                  src="/images/Saihaj formals final.png"
                  alt="Saihajvir Singh - Computer Engineering Student"
                  fill
                  sizes="(min-width: 1024px) 240px, 200px"
                  className="object-cover object-top"
                  priority
                />
              </div>
            </div>

            <div className="float-y glass absolute left-0 top-[14%] rounded-2xl px-3.5 py-2.5 sm:px-4 sm:py-3" style={{ '--fd': '0s' } as React.CSSProperties}>
              <p className="text-xl font-semibold leading-none text-accent sm:text-2xl">95%</p>
              <p className="eyebrow mt-1 !text-[10px]">Wildfire accuracy</p>
            </div>
            <div className="float-y glass absolute bottom-[12%] right-0 rounded-2xl px-3.5 py-2.5 sm:px-4 sm:py-3" style={{ '--fd': '-2s' } as React.CSSProperties}>
              <p className="text-xl font-semibold leading-none text-accent sm:text-2xl">3.09</p>
              <p className="eyebrow mt-1 !text-[10px]">CGPA</p>
            </div>
            <div className="float-y glass absolute bottom-[26%] left-[-2%] hidden rounded-2xl px-4 py-3 sm:block" style={{ '--fd': '-4s' } as React.CSSProperties}>
              <p className="text-sm font-semibold leading-none text-foreground">HDFC Bank</p>
              <p className="eyebrow mt-1 !text-[10px]">Wealth Mgmt Intern</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-14 sm:mt-20">
        <Marquee items={tickerItems} />
      </div>

      {/* Scroll Indicator */}
      <div className="flex justify-center py-8">
        <button
          type="button"
          onClick={() => handleSmoothScroll('#about')}
          className="flex flex-col items-center gap-2 text-foreground/45 transition-colors hover:text-accent"
        >
          <span className="eyebrow !text-inherit">Scroll to explore</span>
          <ArrowDown className="size-4 animate-bounce" />
        </button>
      </div>
    </section>
  )
}
