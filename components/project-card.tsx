import { Github, ExternalLink, ArrowUpRight } from 'lucide-react'
import { TiltCard } from '@/components/fx/tilt-card'
import { Chip } from '@/components/chip'

interface ProjectCardProps {
  title: string
  description: string
  technologies: string[]
  githubUrl?: string
  liveUrl?: string
  index?: number
}

const linkCls =
  'inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-xs font-medium text-foreground/80 transition-colors hover:border-accent/60 hover:text-accent'

export function ProjectCard({ title, description, technologies, githubUrl, liveUrl, index }: ProjectCardProps) {
  return (
    <TiltCard className="h-full p-6">
      <div className="flex h-full flex-col">
        <div className="mb-4 flex items-start justify-between gap-4">
          {index !== undefined && (
            <span className="font-mono text-xs text-accent/70">{String(index + 1).padStart(2, '0')}</span>
          )}
          <ArrowUpRight className="ml-auto size-4 text-foreground/30" aria-hidden="true" />
        </div>
        <h3 className="mb-3 text-lg font-semibold leading-snug tracking-tight text-foreground">{title}</h3>
        <p className="mb-5 text-sm leading-relaxed text-foreground/65">{description}</p>

        <div className="mb-6 mt-auto flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <Chip key={tech}>{tech}</Chip>
          ))}
        </div>

        {(githubUrl || liveUrl) && (
          <div className="flex flex-wrap items-center gap-3 border-t border-border pt-4">
            {githubUrl && (
              <a href={githubUrl} target="_blank" rel="noopener noreferrer" className={linkCls}>
                <Github className="size-3.5" />
                Code
              </a>
            )}
            {liveUrl && (
              <a href={liveUrl} target="_blank" rel="noopener noreferrer" className={linkCls}>
                <ExternalLink className="size-3.5" />
                Live
              </a>
            )}
          </div>
        )}
      </div>
    </TiltCard>
  )
}
