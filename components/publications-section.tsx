'use client'

import { SectionContainer } from './section-container'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { BookOpen, ExternalLink } from 'lucide-react'

export function PublicationsSection() {
  const publications = [
    {
      title: 'Wildfire Detection Using CNN and Thermal Imaging',
      authors: 'Saihajvir Singh, Dr. Mentor Name, Prof. Name',
      conference: 'SmartCom Conference 2025',
      date: '2025',
      abstract: 'This paper presents a novel CNN-based approach for wildfire detection utilizing 4-channel input processing with thermal imaging and RGB data. Achieving 95% accuracy on the wildfire detection dataset, the model demonstrates significant potential in early disaster detection and environmental monitoring. The research combines deep learning techniques with thermal imaging analysis to create a robust system for identifying wildfire-prone regions.',
      topics: ['Deep Learning', 'CNN', 'Computer Vision', 'Environmental Monitoring', 'Thermal Imaging'],
      doi: '#',
      certificate: '/certificate.pdf',
      paper: '/research-paper.pdf',
    },
  ]

  return (
    <SectionContainer id="publications">
      <div className="max-w-4xl">
        <h2 className="text-4xl font-bold text-foreground mb-4">Publications & Research</h2>
        <div className="w-12 h-1 bg-accent mb-8" />

        <div className="space-y-6">
          {publications.map((pub, idx) => (
            <Card key={idx} className="bg-card border border-border p-8">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:gap-6 mb-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-accent/20 border border-accent/50 flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-accent" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {pub.title}
                  </h3>
                  <p className="text-sm text-foreground/60 mb-1">
                    {pub.authors}
                  </p>
                  <p className="text-sm text-accent font-medium">
                    {pub.conference} • {pub.date}
                  </p>
                </div>
              </div>

              <p className="text-foreground/70 mb-4 leading-relaxed">
                {pub.abstract}
              </p>

              <div className="mb-6">
                <p className="text-xs font-semibold text-foreground mb-2 uppercase tracking-wider">
                  Keywords
                </p>
                <div className="flex flex-wrap gap-2">
                  {pub.topics.map((topic) => (
                    <span
                      key={topic}
                      className="inline-block px-3 py-1 text-xs bg-secondary/50 text-foreground/80 rounded-full"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-3 pt-4 border-t border-border">
                <Button
                  asChild
                  className="bg-accent hover:bg-accent/90 text-accent-foreground gap-2 w-full sm:w-auto"
                  size="sm"
                >
                  <a href={pub.paper} target="_blank" rel="noopener noreferrer">
                    <BookOpen className="w-4 h-4" />
                    Read Paper
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-border hover:border-accent hover:text-accent gap-2 w-full sm:w-auto"
                  size="sm"
                >
                  <a href={pub.certificate} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4" />
                    Certificate
                  </a>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </SectionContainer>
  )
}
