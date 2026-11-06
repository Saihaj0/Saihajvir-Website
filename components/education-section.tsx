import { SectionContainer } from './section-container'
import { TimelineItem } from './timeline-item'
import { SectionHeading } from './section-heading'

export function EducationSection() {
  return (
    <SectionContainer id="education">
      <SectionHeading n="09" accent="Education" />

      <div className="max-w-3xl">
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
