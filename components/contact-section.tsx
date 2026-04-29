'use client'

import { useState } from 'react'
import { SectionContainer } from './section-container'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Mail, Github, Linkedin } from 'lucide-react'
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

  return (
    <SectionContainer id="contact">
      <div className="max-w-3xl">
        <h2 className="text-4xl font-bold text-foreground mb-4">Get in Touch</h2>
        <div className="w-12 h-1 bg-accent mb-8" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div>
            <p className="text-foreground/70 mb-8">
              Have a project in mind or want to collaborate? Feel free to reach out! I&apos;m always interested in hearing about new opportunities and ideas.
            </p>

            <div className="space-y-6">
              <a
                href="mailto:saihajvirsingh09@gmail.com"
                className="flex items-center gap-4 p-4 rounded-lg hover:bg-secondary/50 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-accent/20 border border-accent/50 flex items-center justify-center group-hover:bg-accent/30 transition-colors">
                  <Mail className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-foreground/60">Email</p>
                  <p className="text-foreground font-medium">saihajvirsingh09@gmail.com</p>
                </div>
              </a>

              <a
                href="https://github.com/Saihaj0"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-lg hover:bg-secondary/50 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-accent/20 border border-accent/50 flex items-center justify-center group-hover:bg-accent/30 transition-colors">
                  <Github className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-foreground/60">GitHub</p>
                  <p className="text-foreground font-medium">github.com/Saihaj0</p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/saihajvir-singh-52490a283/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-lg hover:bg-secondary/50 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-accent/20 border border-accent/50 flex items-center justify-center group-hover:bg-accent/30 transition-colors">
                  <Linkedin className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-foreground/60">LinkedIn</p>
                  <p className="text-foreground font-medium">linkedin.com/in/saihajvir-singh-52490a283</p>
                </div>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-card border border-border p-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="bg-background border-border focus-visible:border-accent focus-visible:ring-accent"
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  className="bg-background border-border focus-visible:border-accent focus-visible:ring-accent"
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message..."
                  rows={5}
                  className="bg-background border-border focus-visible:border-accent focus-visible:ring-accent resize-none"
                  disabled={isSubmitting}
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </SectionContainer>
  )
}
