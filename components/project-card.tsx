import { Github, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import Link from 'next/link'

interface ProjectCardProps {
  title: string
  description: string
  technologies: string[]
  githubUrl?: string
  liveUrl?: string
}

export function ProjectCard({
  title,
  description,
  technologies,
  githubUrl,
  liveUrl,
}: ProjectCardProps) {
  return (
    <Card className="bg-card border border-border hover:border-accent/50 transition-all hover:shadow-lg hover:shadow-accent/20 p-6 flex flex-col h-full">
      <div>
        <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
        <p className="text-sm text-foreground/70 mb-4">{description}</p>
      </div>

      <div className="flex flex-wrap gap-2 mb-6 mt-auto">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="inline-block px-3 py-1 text-xs bg-secondary/50 text-foreground/80 rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center gap-3 pt-4 border-t border-border">
        {githubUrl && (
          <Button
            variant="ghost"
            size="sm"
            asChild
            className="hover:text-accent hover:bg-secondary/50 w-full sm:w-auto"
          >
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4 mr-2" />
              Code
            </a>
          </Button>
        )}
        {liveUrl && (
          <Button
            variant="ghost"
            size="sm"
            asChild
            className="hover:text-accent hover:bg-secondary/50 w-full sm:w-auto"
          >
            <a href={liveUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-4 h-4 mr-2" />
              Live
            </a>
          </Button>
        )}
      </div>
    </Card>
  )
}
