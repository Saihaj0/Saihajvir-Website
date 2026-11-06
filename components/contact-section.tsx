'use client'

import { useState } from 'react'
import { SectionContainer } from './section-container'
import { SectionHeading } from './section-heading'
import { Reveal } from '@/components/fx/reveal'
import { btnPrimary } from '@/lib/styles'
import { Mail, Github, Linkedin, ArrowUpRight, Send } from 'lucide-react'
import { toast } from 'sonner'

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast.error('Please fill in all fields')
      return
    }

    setIsSubmitting(true)

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (!res.ok) {
        const err = await res.json().catch(() => ({ error: 'Failed to send' }))
        console.error('Contact API error', err)
        throw new Error(err.error || 'Failed to send')
      }

      toast.success("Message sent successfully! I'll get back to you soon.")
      setFormData({ name: '', email: '', message: '' })
    } catch {
      toast.error('Failed to send message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const field =
    'w-full rounded-xl border border-border bg-white/[0.04] px-4 py-3 text-sm text-foreground placeholder:text-foreground/35 outline-none transition-colors focus:border-accent focus:bg-white/[0.06] focus:ring-2 focus:ring-accent/25 disabled:opacity-60'

  const rows = [
    {
      href: 'mailto:saihajvirsingh09@gmail.com',
      icon: Mail,
      label: 'Email',
      value: 'saihajvirsingh09@gmail.com',
      external: false,
    },
    {
      href: 'https://github.com/Saihaj0',
      icon: Github,
      label: 'GitHub',
      value: 'github.com/Saihaj0',
      external: true,
    },
    {
      href: 'https://www.linkedin.com/in/saihajvir-singh-52490a283/',
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/saihajvir-singh-52490a283',
      external: true,
    },
  ]

  return (
    <SectionContainer id="contact">
      <SectionHeading n="12" title="Get in" accent="Touch" />

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.05fr] lg:gap-14">
        {/* Contact Info */}
        <Reveal>
          <p className="max-w-md text-lg leading-relaxed text-foreground/70">
            Have a project in mind or want to collaborate? Feel free to reach out! I&apos;m always interested in hearing about new opportunities and ideas.
          </p>

          <div className="mt-10 space-y-3">
            {rows.map((row) => {
              const Icon = row.icon
              return (
                <a
                  key={row.label}
                  href={row.href}
                  {...(row.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="spot glass group flex items-center gap-4 rounded-2xl p-4"
                >
                  <div className="relative z-10 flex size-11 shrink-0 items-center justify-center rounded-xl border border-accent/30 bg-accent/10 transition-colors group-hover:bg-accent/20">
                    <Icon className="size-5 text-accent" />
                  </div>
                  <div className="relative z-10 min-w-0 flex-1">
                    <p className="eyebrow">{row.label}</p>
                    <p className="break-all font-medium text-foreground">{row.value}</p>
                  </div>
                  <ArrowUpRight className="relative z-10 size-4 shrink-0 text-foreground/30 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
                </a>
              )
            })}
          </div>
        </Reveal>

        {/* Contact Form */}
        <Reveal delay={120}>
          <div className="beam glass rounded-3xl p-6 sm:p-8">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="eyebrow mb-2 block">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className={field}
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label htmlFor="email" className="eyebrow mb-2 block">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  className={field}
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label htmlFor="message" className="eyebrow mb-2 block">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message..."
                  rows={5}
                  className={`${field} resize-none`}
                  disabled={isSubmitting}
                />
              </div>

              <button type="submit" disabled={isSubmitting} className={`${btnPrimary} w-full py-3.5`}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
                {!isSubmitting && <Send className="size-4" />}
              </button>
            </form>
          </div>
        </Reveal>
      </div>
    </SectionContainer>
  )
}
