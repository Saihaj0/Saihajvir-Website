import { SectionContainer } from './section-container'
import { SkillCard } from './skill-card'

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
      <div className="max-w-6xl">
        <h2 className="text-4xl font-bold text-foreground mb-4">Skills & Technologies</h2>
        <div className="w-12 h-1 bg-accent mb-8" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {skillCategories.map((category) => (
            <SkillCard
              key={category.title}
              title={category.title}
              skills={category.skills}
            />
          ))}
        </div>
      </div>
    </SectionContainer>
  )
}
