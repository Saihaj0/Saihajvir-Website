import { SectionContainer } from './section-container'
import { Card } from '@/components/ui/card'
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
      <div className="max-w-6xl">
        <h2 className="text-4xl font-bold text-foreground mb-4">Certifications</h2>
        <div className="w-12 h-1 bg-accent mb-8" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert) => (
            <Card
              key={cert.title}
              className="bg-card border border-border hover:border-accent/50 transition-all hover:shadow-lg hover:shadow-accent/20 p-6"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-accent/20 border border-accent/50 flex items-center justify-center flex-shrink-0">
                  <Award className="w-5 h-5 text-accent" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-foreground truncate">{cert.title}</h3>
                  <p className="text-sm text-foreground/70 mt-1">{cert.issuer}</p>
                  <p className="text-xs text-foreground/50 mt-2">{cert.date}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </SectionContainer>
  )
}
