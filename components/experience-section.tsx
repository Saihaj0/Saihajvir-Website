import { SectionContainer } from './section-container'
import { TimelineItem } from './timeline-item'

export function ExperienceSection() {
  return (
    <SectionContainer id="experience">
      <div className="max-w-3xl">
        <h2 className="text-4xl font-bold text-foreground mb-4">Work Experience</h2>
        <div className="w-12 h-1 bg-accent mb-8" />

        <div className="relative">
          <TimelineItem
            title="Intern — Wealth Management"
            subtitle="HDFC Bank"
            date="2026"
            description="Worked with the Wealth Management team on data analytics and reporting, building dashboards and data models to support investment and client-facing decisions."
            details={[
              'Built interactive dashboards and reports using Power BI',
              'Wrote DAX measures for data modeling and analysis',
              'Applied data analytics to support wealth management workflows',
            ]}
          />
        </div>
      </div>
    </SectionContainer>
  )
}
