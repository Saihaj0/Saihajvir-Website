import { SectionContainer } from './section-container'
import { Card } from '@/components/ui/card'

export function AboutSection() {
  return (
    <SectionContainer id="about">
      <div className="max-w-3xl">
        <h2 className="text-4xl font-bold text-foreground mb-4">About Me</h2>
        <div className="w-12 h-1 bg-accent mb-8" />

        <Card className="bg-card border border-border p-8">
          <div className="space-y-4 text-foreground/80 leading-relaxed">
            <p>
              Motivated B.Tech Computer Engineering student (2027) with strong foundations in software development, full-stack development, and machine learning. I&apos;m passionate about building scalable applications that solve real-world problems using cutting-edge technology.
            </p>
            <p>
              My expertise spans full-stack web development with React.js, Node.js, and MongoDB, alongside AI/ML implementations using TensorFlow and OpenCV. I&apos;ve developed innovative projects including a CNN-based wildfire detection system achieving 95% accuracy and real-time Android applications with cloud integration.
            </p>
            <p>
              I&apos;m proficient in Java, Python, C++, JavaScript, and have hands-on experience building scalable web, mobile, and AI-based applications. Strong knowledge of data structures, object-oriented programming, and problem-solving, with proven leadership and teamwork experience through multiple positions of responsibility.
            </p>
            <p>
              Currently seeking opportunities to apply my technical skills in real-world software and technology projects. I&apos;m committed to continuous learning and contributing to innovative solutions.
            </p>
          </div>

          <div className="mt-8 pt-8 border-t border-border">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div>
                <p className="text-2xl font-bold text-accent">12+</p>
                <p className="text-sm text-foreground/60">Projects</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-accent">3.02</p>
                <p className="text-sm text-foreground/60">CGPA</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-accent">5+</p>
                <p className="text-sm text-foreground/60">Languages</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-accent">95%</p>
                <p className="text-sm text-foreground/60">Wildfire Accuracy</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </SectionContainer>
  )
}
