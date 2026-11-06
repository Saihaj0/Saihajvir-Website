import { SectionContainer } from './section-container'
import { SectionHeading } from './section-heading'
import { Reveal } from '@/components/fx/reveal'
import { TiltCard } from '@/components/fx/tilt-card'
import { Counter } from '@/components/fx/counter'
import { Chip } from '@/components/chip'
import { Code2, Zap, Trophy, Users } from 'lucide-react'

const stats = [
  {
    label: 'Projects Completed',
    value: '12+',
    description: 'Full-stack, ML, and mobile applications',
    icon: Code2,
  },
  {
    label: 'Technologies Mastered',
    value: '15+',
    description: 'Languages, frameworks, and tools',
    icon: Zap,
  },
  {
    label: 'Hackathons & Events',
    value: '7+',
    description: 'Including Smart India Hackathon',
    icon: Trophy,
  },
  {
    label: 'Positions of Responsibility',
    value: '5',
    description: 'Leadership roles in college',
    icon: Users,
  },
]

const groups = [
  { label: 'Programming Languages', value: '5+', items: ['Python', 'Java', 'C++', 'JavaScript', 'C'] },
  {
    label: 'Web Technologies',
    value: '8+',
    items: ['React', 'Node.js', 'TypeScript', 'MongoDB', 'Firebase', 'Supabase', 'Next.js', 'TailwindCSS'],
  },
  { label: 'AI/ML Expertise', value: '4+', items: ['TensorFlow', 'CNN', 'Deep Learning', 'OpenCV'] },
]

export function StatsDashboard() {
  return (
    <SectionContainer id="stats">
      <SectionHeading n="07" title="Quick" accent="Stats" />

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, idx) => {
          const Icon = stat.icon
          return (
            <Reveal key={stat.label} delay={idx * 90} className="h-full">
              <TiltCard className="h-full p-6">
                <div className="mb-8 flex size-11 items-center justify-center rounded-xl border border-accent/30 bg-accent/10">
                  <Icon className="size-5 text-accent" />
                </div>
                <Counter value={stat.value} className="block text-6xl font-semibold tracking-tighter text-foreground" />
                <p className="eyebrow mt-4 !text-accent">{stat.label}</p>
                <p className="mt-2 text-sm leading-relaxed text-foreground/65">{stat.description}</p>
              </TiltCard>
            </Reveal>
          )
        })}
      </div>

      <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-3">
        {groups.map((g, idx) => (
          <Reveal key={g.label} delay={idx * 90} className="h-full">
            <TiltCard className="h-full p-6">
              <p className="eyebrow">{g.label}</p>
              <p className="mb-4 mt-2 text-4xl font-semibold tracking-tight text-accent">{g.value}</p>
              <div className="flex flex-wrap gap-2">
                {g.items.map((item) => (
                  <Chip key={item}>{item}</Chip>
                ))}
              </div>
            </TiltCard>
          </Reveal>
        ))}
      </div>
    </SectionContainer>
  )
}
