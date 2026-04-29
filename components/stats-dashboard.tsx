'use client'

import { SectionContainer } from './section-container'
import { Card } from '@/components/ui/card'
import { Code2, Zap, Trophy, Users } from 'lucide-react'

export function StatsDashboard() {
  const stats = [
    {
      label: 'Projects Completed',
      value: '6+',
      description: 'Full-stack, ML, and mobile applications',
      icon: Code2,
      color: 'text-blue-400',
    },
    {
      label: 'Technologies Mastered',
      value: '15+',
      description: 'Languages, frameworks, and tools',
      icon: Zap,
      color: 'text-yellow-400',
    },
    {
      label: 'Hackathons & Events',
      value: '3+',
      description: 'Including Smart India Hackathon',
      icon: Trophy,
      color: 'text-green-400',
    },
    {
      label: 'Positions of Responsibility',
      value: '5',
      description: 'Leadership roles in college',
      icon: Users,
      color: 'text-purple-400',
    },
  ]

  return (
    <SectionContainer id="stats">
      <div className="max-w-6xl">
        <h2 className="text-4xl font-bold text-foreground mb-4">Quick Stats</h2>
        <div className="w-12 h-1 bg-accent mb-12" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => {
            const Icon = stat.icon
            return (
              <Card
                key={idx}
                className="bg-gradient-to-br from-card to-card/50 border border-border p-6 hover:border-accent/50 transition-colors group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/20 border border-accent/30 flex items-center justify-center group-hover:bg-accent/30 transition-colors">
                    <Icon className={`w-6 h-6 ${stat.color}`} />
                  </div>
                </div>

                <p className="text-sm text-foreground/60 mb-2 uppercase tracking-wider font-semibold">
                  {stat.label}
                </p>
                <p className="text-4xl font-bold text-accent mb-2">
                  {stat.value}
                </p>
                <p className="text-sm text-foreground/70">
                  {stat.description}
                </p>
              </Card>
            )
          })}
        </div>

        {/* Additional Stats */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-card border border-border p-6">
            <p className="text-sm text-foreground/60 mb-2 uppercase tracking-wider font-semibold">
              Programming Languages
            </p>
            <p className="text-2xl font-bold text-accent mb-3">5+</p>
            <div className="flex flex-wrap gap-2">
              {['Python', 'Java', 'C++', 'JavaScript', 'C'].map((lang) => (
                <span
                  key={lang}
                  className="px-2 py-1 text-xs bg-secondary/50 text-foreground/80 rounded"
                >
                  {lang}
                </span>
              ))}
            </div>
          </Card>

          <Card className="bg-card border border-border p-6">
            <p className="text-sm text-foreground/60 mb-2 uppercase tracking-wider font-semibold">
              Web Technologies
            </p>
            <p className="text-2xl font-bold text-accent mb-3">8+</p>
            <div className="flex flex-wrap gap-2">
              {['React', 'Node.js', 'TypeScript', 'MongoDB', 'Firebase', 'Supabase', 'Next.js', 'TailwindCSS'].map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 text-xs bg-secondary/50 text-foreground/80 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
          </Card>

          <Card className="bg-card border border-border p-6">
            <p className="text-sm text-foreground/60 mb-2 uppercase tracking-wider font-semibold">
              AI/ML Expertise
            </p>
            <p className="text-2xl font-bold text-accent mb-3">4+</p>
            <div className="flex flex-wrap gap-2">
              {['TensorFlow', 'CNN', 'Deep Learning', 'OpenCV'].map((tool) => (
                <span
                  key={tool}
                  className="px-2 py-1 text-xs bg-secondary/50 text-foreground/80 rounded"
                >
                  {tool}
                </span>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </SectionContainer>
  )
}
