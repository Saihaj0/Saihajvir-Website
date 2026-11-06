import { SectionContainer } from './section-container'
import { SectionHeading } from './section-heading'
import { Reveal } from '@/components/fx/reveal'
import { TiltCard } from '@/components/fx/tilt-card'
import { Chip } from '@/components/chip'
import { btnGhost, btnPrimary } from '@/lib/styles'
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
    {
      title: 'PaisaPilot: A Modular Personal Finance Management System with Explainable AI',
      authors: 'Saihajvir Singh',
      conference: 'ICCTRDA 2026 (2nd International Conference on Computational Technologies for Research in Data Analytics)',
      date: '2026',
      abstract: 'This paper presents PaisaPilot, an AI-powered personal finance management system for Indian youth built with React Native, FastAPI, PostgreSQL, and scikit-learn. The system performs transaction categorization, spend forecasting, and anomaly detection, achieving 75.5% accuracy (merchant-grouped evaluation) with an AUC of 0.918. The paper has been accepted for publication by Springer in the Lecture Notes in Networks and Systems series.',
      topics: ['Fintech', 'Machine Learning', 'Explainable AI', 'React Native', 'FastAPI', 'scikit-learn'],
      doi: '#',
      certificate: '/paisapilot-acceptance-letter.pdf',
      paper: '/paisapilot-research-paper.pdf',
    },
  ]

  return (
    <SectionContainer id="publications">
      <SectionHeading n="06" title="Publications &" accent="Research" />

      <div className="space-y-6">
        {publications.map((pub, idx) => (
          <Reveal key={idx} delay={idx * 100}>
            <TiltCard className="p-6 sm:p-9">
              <div className="mb-6 flex flex-col gap-5 sm:flex-row sm:items-start">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl border border-accent/40 bg-accent/10">
                  <BookOpen className="size-5 text-accent" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-2xl font-semibold leading-snug tracking-tight text-foreground sm:text-3xl">{pub.title}</h3>
                  <p className="mt-2 text-sm text-foreground/60">{pub.authors}</p>
                  <p className="mt-1 text-sm font-medium text-accent">
                    {pub.conference} • {pub.date}
                  </p>
                  {!pub.paper && (
                    <span className="mt-3 inline-block rounded-full border border-accent/40 bg-accent/15 px-2.5 py-0.5 text-xs font-medium text-accent">
                      Accepted
                    </span>
                  )}
                </div>
              </div>

              <p className="mb-6 leading-relaxed text-foreground/70">{pub.abstract}</p>

              <div className="mb-7">
                <p className="eyebrow mb-3">Keywords</p>
                <div className="flex flex-wrap gap-2">
                  {pub.topics.map((topic) => (
                    <Chip key={topic}>{topic}</Chip>
                  ))}
                </div>
              </div>

              {(pub.paper || pub.certificate) && (
                <div className="flex flex-col gap-3 border-t border-border pt-6 sm:flex-row sm:items-center">
                  {pub.paper && (
                    <a href={pub.paper} target="_blank" rel="noopener noreferrer" className={btnPrimary}>
                      <BookOpen className="size-4" />
                      Read Paper
                    </a>
                  )}
                  {pub.certificate && (
                    <a href={pub.certificate} target="_blank" rel="noopener noreferrer" className={btnGhost}>
                      <ExternalLink className="size-4" />
                      Certificate
                    </a>
                  )}
                </div>
              )}
            </TiltCard>
          </Reveal>
        ))}
      </div>
    </SectionContainer>
  )
}
