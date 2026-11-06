import { TiltCard } from '@/components/fx/tilt-card'
import { Chip } from '@/components/chip'

interface SkillCardProps {
  title: string
  skills: string[]
  index?: number
}

export function SkillCard({ title, skills, index }: SkillCardProps) {
  return (
    <TiltCard className="h-full p-6">
      <div className="mb-5 flex items-center justify-between">
        <h3 className="text-lg font-semibold tracking-tight text-foreground">{title}</h3>
        {index !== undefined && (
          <span className="font-mono text-xs text-accent/70">{String(index + 1).padStart(2, '0')}</span>
        )}
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <Chip key={skill}>{skill}</Chip>
        ))}
      </div>
    </TiltCard>
  )
}
