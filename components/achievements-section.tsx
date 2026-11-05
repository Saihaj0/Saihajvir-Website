import { SectionContainer } from './section-container'
import { TimelineItem } from './timeline-item'

export function AchievementsSection() {
  return (
    <SectionContainer id="achievements">
      <div className="max-w-3xl">
        <h2 className="text-4xl font-bold text-foreground mb-4">Achievements & Positions of Responsibility</h2>
        <div className="w-12 h-1 bg-accent mb-8" />

        <div className="relative">
          <TimelineItem
            title="Head of Photography Department"
            subtitle="IET MPSTME"
            date="2024-25"
            description="Led and managed a team of photographers for college events, ensuring high-quality visual documentation and timely content delivery."
            details={[
              'Coordinated event coverage and task allocation',
              'Maintained consistent output standards',
              'Strengthened leadership and project coordination skills',
            ]}
          />

          <TimelineItem
            title="Senior Executive - Outreach Department"
            subtitle="Student Council (Sattva)"
            date="2025-26"
            description="Managed outreach initiatives and supported communication strategies to enhance student engagement and participation."
            details={[
              'Coordinated with internal teams to organize events',
              'Streamlined outreach operations',
            ]}
          />

          <TimelineItem
            title="Subhead - Outreach Department"
            subtitle="The Editorial Project"
            date="2025-26"
            description="Assisted in planning outreach activities and maintaining communication with collaborators and contributors."
            details={[
              'Supported team coordination',
              'Execution of content-related initiatives',
            ]}
          />

          <TimelineItem
            title="Executive - Corporate Relations"
            subtitle="Analytika"
            date="2023-24"
            description="Assisted in establishing and maintaining partnerships with external organizations and sponsors."
            details={[
              'Supported professional events and networking initiatives',
            ]}
          />

          <TimelineItem
            title="Volunteer - Community Service"
            subtitle="Hunjan Hospital, Ludhiana"
            date="2024"
            description="Participated in community service activities supporting hospital operations and patient assistance initiatives."
            details={[
              'Demonstrated teamwork and responsibility',
              'Committed to social service',
            ]}
          />

          <TimelineItem
            title="Smart India Hackathon (SIH) Participant"
            subtitle="Project: VANRA – Blue Carbon Registry"
            date="2025"
            description="Collaborated in a team to develop a digital platform for coastal carbon credit tracking and environmental monitoring."
            details={[
              'Built responsive frontend components using Next.js and TypeScript',
              'Integrated Supabase for authentication and real-time data storage',
              'National-level innovation challenge',
            ]}
          />

          <TimelineItem
            title="Finalist – LyondellBasell Hackathon"
            subtitle="Team 404BrainNotFound"
            date="2026"
            description="Reached the finals of the LyondellBasell innovation hackathon as part of a competitive national challenge."
            details={[
              'Advanced through multiple evaluation rounds to the final stage',
            ]}
          />

          <TimelineItem
            title="AtomQuest 2026 by Atomberg — Track 2 (Water Purifier)"
            subtitle="Project: AquaPrognos | Team 404BrainNOTFound"
            date="2026"
            description="Building AquaPrognos, a read-only retrofit estimator predicting remaining filter-cartridge life for household water purifiers."
            details={[
              'Cleared Stage 1 with the AquaPrognos abstract submission',
              'Advanced to Round 2: prototype demo video and progress report',
            ]}
          />

          <TimelineItem
            title="LYB Mumbai Hackathon 2026 — 'Factory of 2036'"
            subtitle="Team 404BrainNotFound"
            date="2026"
            description="Competing with a team project envisioning the factory of the future, selected to present at the in-person final round in Mumbai."
            details={[
              'Round 1 deck submitted',
              'Qualified for the in-person final round',
            ]}
          />

          <TimelineItem
            title="Nomura KakushIN Innovation Contest"
            subtitle="Project: ArthSaathi – Future Self AI"
            date="2026"
            description="Submitted an agentic financial literacy platform featuring a multi-agent AI Courtroom and a Future Self simulation to help users understand long-term financial decisions."
            details={[
              'Designed a multi-agent AI Courtroom debate mechanism for financial decisions',
              'Built a Future Self simulation feature for long-term outcome visualization',
            ]}
          />
        </div>
      </div>
    </SectionContainer>
  )
}
