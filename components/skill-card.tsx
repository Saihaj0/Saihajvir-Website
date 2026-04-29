import { Card } from '@/components/ui/card'

interface SkillCardProps {
  title: string
  skills: string[]
}

export function SkillCard({ title, skills }: SkillCardProps) {
  return (
    <Card className="bg-card border border-border hover:border-accent/50 transition-all hover:shadow-lg hover:shadow-accent/20 p-6">
      <h3 className="text-lg font-semibold text-foreground mb-4">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="inline-block px-3 py-1 text-sm bg-secondary/50 text-foreground/90 rounded-full hover:bg-accent/20 hover:text-accent transition-colors"
          >
            {skill}
          </span>
        ))}
      </div>
    </Card>
  )
}
