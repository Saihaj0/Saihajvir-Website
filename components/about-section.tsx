import { SectionContainer } from './section-container'
import { SectionHeading } from './section-heading'
import { Reveal } from '@/components/fx/reveal'
import { TiltCard } from '@/components/fx/tilt-card'
import { Counter } from '@/components/fx/counter'

const stats = [
  { value: '12+', label: 'Projects' },
  { value: '3.09', label: 'CGPA' },
  { value: '5+', label: 'Languages' },
  { value: '95%', label: 'Wildfire Accuracy' },
]

export function AboutSection() {
  return (
    <SectionContainer id="about">
      <SectionHeading n="01" title="About" accent="Me" />

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.35fr_1fr] lg:gap-16">
        <div className="space-y-6 leading-relaxed text-foreground/65">
          <Reveal>
            <p className="text-xl leading-relaxed text-foreground/90 sm:text-2xl">
              Motivated B.Tech Computer Engineering student (2027) with strong foundations in software development, full-stack development, and machine learning. I&apos;m passionate about building scalable applications that solve real-world problems using cutting-edge technology.
            </p>
          </Reveal>
          <Reveal delay={80}>
            <p>
              My expertise spans full-stack web development with React.js, Node.js, and MongoDB, alongside AI/ML implementations using TensorFlow and OpenCV. I&apos;ve developed innovative projects including a CNN-based wildfire detection system achieving 95% accuracy and real-time Android applications with cloud integration.
            </p>
          </Reveal>
          <Reveal delay={140}>
            <p>
              I&apos;m proficient in Java, Python, C++, JavaScript, and have hands-on experience building scalable web, mobile, and AI-based applications. Strong knowledge of data structures, object-oriented programming, and problem-solving, with proven leadership and teamwork experience through multiple positions of responsibility.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <p>
              Currently seeking opportunities to apply my technical skills in real-world software and technology projects. I&apos;m committed to continuous learning and contributing to innovative solutions.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-2 gap-4 self-start">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 90}>
              <TiltCard className="p-5 sm:p-6">
                <Counter value={s.value} className="block text-4xl font-semibold tracking-tight text-accent sm:text-5xl" />
                <p className="eyebrow mt-3">{s.label}</p>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </SectionContainer>
  )
}
