import { SectionContainer } from './section-container'
import { SectionHeading } from './section-heading'
import { Reveal } from '@/components/fx/reveal'
import { TiltCard } from '@/components/fx/tilt-card'
import { Award } from 'lucide-react'

const certifications = [
  {
    title: 'Python Basics',
    issuer: 'University of Michigan (Coursera)',
    date: 'Completed',
  },
  {
    title: 'Python Data Structures',
    issuer: 'University of Michigan (Coursera)',
    date: 'Completed',
  },
  {
    title: 'Programming for Everybody',
    issuer: 'University of Michigan (Coursera)',
    date: 'Completed',
  },
  {
    title: 'Introduction to Front-End Development',
    issuer: 'Meta (Coursera)',
    date: 'Completed',
  },
  {
    title: 'Full Stack Development',
    issuer: 'Meta (Coursera)',
    date: 'Completed',
  },
  {
    title: 'Managing Projects using AI',
    issuer: 'Coursera',
    date: 'Completed',
  },
  {
    title: 'Ethical Hacker',
    issuer: 'Cisco Networking Academy',
    date: 'Completed',
  },
  {
    title: 'AWS Academy Graduate - Cloud Architecting',
    issuer: 'AWS Academy',
    date: 'Completed',
  },
  {
    title: 'Research Paper Published',
    issuer: 'SmartCom Conference, Pune',
    date: '2025',
  },
]

export function CertificationsSection() {
  return (
    <SectionContainer id="certifications">
      <SectionHeading n="10" accent="Certifications" />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {certifications.map((cert, i) => (
          <Reveal key={cert.title} delay={(i % 3) * 80} className="h-full">
            <TiltCard className="h-full p-6">
              <div className="flex items-start gap-4">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-accent/30 bg-accent/10">
                  <Award className="size-5 text-accent" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-semibold leading-snug text-foreground">{cert.title}</h3>
                  <p className="mt-1.5 text-sm text-foreground/65">{cert.issuer}</p>
                  <p className="eyebrow mt-3">{cert.date}</p>
                </div>
              </div>
            </TiltCard>
          </Reveal>
        ))}
      </div>
    </SectionContainer>
  )
}
