import { SectionContainer } from './section-container'
import { SkillCard } from './skill-card'
import { SectionHeading } from './section-heading'
import { Reveal } from '@/components/fx/reveal'

const skillCategories = [
  {
    title: 'Programming',
    skills: ['Python', 'C', 'C++', 'Java', 'JavaScript', 'SQL'],
  },
  {
    title: 'Full Stack Dev',
    skills: ['React.js', 'Next.js', 'Node.js', 'Express.js', 'HTML', 'CSS', 'TypeScript', 'REST APIs', 'Tailwind CSS'],
  },
  {
    title: 'Database',
    skills: ['MongoDB', 'Firebase', 'Supabase', 'SQLite', 'PostgreSQL'],
  },
  {
    title: 'AI & Deep Learning',
    skills: ['TensorFlow', 'CNN', 'Deep Learning', 'OpenCV', 'PyTorch'],
  },
  {
    title: 'Data Analytics & BI',
    skills: ['Power BI', 'DAX', 'Power Query', 'Microsoft Excel', 'Data Visualization'],
  },
  {
    title: 'Tools & Platforms',
    skills: ['Android Studio', 'Firebase Console', 'Git', 'GitHub', 'VS Code'],
  },
]

export function SkillsSection() {
  return (
    <SectionContainer id="skills">
      <SectionHeading n="03" title="Skills &" accent="Technologies" />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((category, i) => (
          <Reveal key={category.title} delay={(i % 3) * 90} className="h-full">
            <SkillCard title={category.title} skills={category.skills} index={i} />
          </Reveal>
        ))}
      </div>
    </SectionContainer>
  )
}
