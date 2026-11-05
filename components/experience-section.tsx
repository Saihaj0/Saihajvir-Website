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
            title="Wealth Management Intern"
            subtitle="HDFC Bank"
            date="June 2026 - Aug 2026"
            description="Worked with the Wealth Management team on data analytics and reporting, building dashboards and automated workflows to support investment and client-facing decisions."
            details={[
              'Developed interactive Power BI dashboards for AUM analysis, client segmentation, and investment recommendation tracking',
              'Created DAX measures and automated ETL/data transformation workflows using Power Query and Microsoft Excel',
              'Analysed wealth management portfolios to generate insights on holdings, recommendations, and investment performance',
            ]}
          />
        </div>
      </div>
    </SectionContainer>
  )
}
