import { SectionContainer } from './section-container'
import { SectionHeading } from './section-heading'
import { Reveal } from '@/components/fx/reveal'
import { TiltCard } from '@/components/fx/tilt-card'
import { Chip } from '@/components/chip'
import { btnPrimary } from '@/lib/styles'
import { ExternalLink, Calendar, ArrowUpRight } from 'lucide-react'

export function BlogSection() {
  const articles = [
    {
      title: 'Building a CNN-Based Wildfire Detection System',
      description: 'Deep dive into designing a machine learning model that achieves 95% accuracy in detecting wildfires using thermal imaging and deep learning techniques.',
      date: 'Dec 2025',
      readTime: '8 min read',
      tags: ['Deep Learning', 'CNN', 'Computer Vision'],
      url: 'https://medium.com/@saihajvirsingh09/building-a-cnn-based-wildfire-detection-system-abca8c547edc',
      featured: true,
    },
    {
      title: 'Full-Stack Development with Next.js and Supabase',
      description: 'A comprehensive guide to building modern full-stack applications using Next.js 16, React 19, and Supabase for authentication and database management.',
      date: 'Nov 2025',
      readTime: '10 min read',
      tags: ['Next.js', 'Supabase', 'Full-Stack'],
      url: 'https://medium.com/@saihajvirsingh09/full-stack-development-with-next-js-and-supabase-building-modern-web-applications-a942c49a8175',
    },
    {
      title: 'Smart India Hackathon Experience: VANRA Project',
      description: 'Behind-the-scenes look at developing VANRA during Smart India Hackathon, including challenges, solutions, and key learnings from the competition.',
      date: 'Oct 2025',
      readTime: '6 min read',
      tags: ['Hackathon', 'Project Management', 'React'],
      url: 'https://medium.com/@davsaihajvir10f32/smart-india-hackathon-experience-building-the-vanra-project-183b40cd9f04',
    },
    {
      title: 'Getting Started with Firebase and Android Development',
      description: 'Learn how to integrate Firebase real-time database with Android Studio to build applications like Smart Parking Finder with live data synchronization.',
      date: 'Sep 2025',
      readTime: '7 min read',
      tags: ['Firebase', 'Android', 'Java'],
      url: 'https://medium.com/@davsaihajvir10f32/getting-started-with-firebase-and-android-development-a1dcad339a28',
    },
  ]

  const [featured, ...rest] = articles

  return (
    <SectionContainer id="blog">
      <SectionHeading n="08" title="Blog &" accent="Articles" />

      <div className="space-y-5">
        <Reveal>
          <div className="beam glass rounded-3xl p-6 sm:p-10">
            <div className="mb-5 flex flex-wrap items-center gap-x-3 gap-y-2">
              <span className="rounded-full bg-accent/15 px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-wider text-accent">
                Featured
              </span>
              <span className="flex items-center gap-1.5 text-sm text-foreground/60">
                <Calendar className="size-4" />
                {featured.date}
              </span>
              <span className="text-sm text-foreground/60">•</span>
              <span className="text-sm text-foreground/60">{featured.readTime}</span>
            </div>
            <h3 className="max-w-3xl text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl">
              {featured.title}
            </h3>
            <p className="mt-5 max-w-2xl leading-relaxed text-foreground/70">{featured.description}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {featured.tags.map((tag) => (
                <Chip key={tag}>{tag}</Chip>
              ))}
            </div>
            <a href={featured.url} target="_blank" rel="noopener noreferrer" className={`${btnPrimary} mt-8`}>
              Read Article
              <ExternalLink className="size-4" />
            </a>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {rest.map((article, idx) => (
            <Reveal key={article.title} delay={idx * 90} className="h-full">
              <TiltCard className="h-full p-6">
                <div className="flex h-full flex-col">
                  <div className="mb-4 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-foreground/60">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="size-4" />
                      {article.date}
                    </span>
                    <span>•</span>
                    <span>{article.readTime}</span>
                  </div>
                  <h3 className="mb-3 text-xl font-semibold leading-snug tracking-tight text-foreground">{article.title}</h3>
                  <p className="mb-5 text-sm leading-relaxed text-foreground/65">{article.description}</p>
                  <div className="mb-6 mt-auto flex flex-wrap gap-2">
                    {article.tags.map((tag) => (
                      <Chip key={tag}>{tag}</Chip>
                    ))}
                  </div>
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-fit items-center gap-2 border-b border-accent/40 pb-0.5 text-sm font-medium text-accent transition-colors hover:border-accent"
                  >
                    Read Article
                    <ArrowUpRight className="size-4" />
                  </a>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </SectionContainer>
  )
}
