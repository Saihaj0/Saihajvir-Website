import { SectionContainer } from './section-container'
import { TimelineItem } from './timeline-item'

export function EducationSection() {
  return (
    <SectionContainer id="education">
      <div className="max-w-3xl">
        <h2 className="text-4xl font-bold text-foreground mb-4">Education</h2>
        <div className="w-12 h-1 bg-accent mb-8" />

        <div className="relative">
          <TimelineItem
            title="Bachelor of Technology in Computer Engineering"
            subtitle="Mukesh Patel School of Technology Management & Engineering"
            date="July 2023 - Aug 2027"
            description="Motivated B.Tech Computer Engineering student with strong foundations in software development, full-stack development, and machine learning."
            details={[
              'CGPA: 3.09 / 4.00',
              'Focus Areas: AI, Web Development, Machine Learning, Software Engineering',
              'Proficient in: Java, Python, C++, JavaScript, React.js, Node.js, MongoDB, Firebase',
            ]}
          />

          <TimelineItem
            title="HSC (CBSE)"
            subtitle="Senior Secondary Education"
            date="July 2021 - June 2023"
            description="Senior Secondary Certificate from CBSE board."
            details={[
              'Percentage: 77%',
            ]}
          />

          <TimelineItem
            title="SSC (CBSE)"
            subtitle="Secondary Education"
            date="July 2020 - June 2021"
            description="Secondary Certificate from CBSE board."
            details={[
              'Percentage: 89%',
            ]}
          />
        </div>
      </div>
    </SectionContainer>
  )
}
