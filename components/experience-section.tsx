import { SectionContainer } from './section-container'
import { SectionHeading } from './section-heading'
import { TimelineItem } from './timeline-item'

export function ExperienceSection() {
  return (
    <SectionContainer id="experience">
      <SectionHeading n="02" title="Work" accent="Experience" />

      <div className="max-w-3xl">
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
    </SectionContainer>
  )
}
