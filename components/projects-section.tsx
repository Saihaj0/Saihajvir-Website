import { SectionContainer } from './section-container'
import { ProjectCard } from './project-card'
import { SectionHeading } from './section-heading'
import { Reveal } from '@/components/fx/reveal'

type Project = {
  title: string
  description: string
  technologies: string[]
  githubUrl: string
  liveUrl?: string
}

const projects: Project[] = [
  {
    title: 'Blockchain-Based Distributed Voting Platform',
    description: 'Secure full-stack voting platform supporting real-time multi-user voting with encrypted vote storage, admin dashboard with live analytics, role-based authentication, and vote encryption for double-vote prevention.',
    technologies: ['Next.js', 'React', 'TypeScript', 'Supabase', 'PostgreSQL', 'TailwindCSS', 'JWT', 'bcrypt'],
    githubUrl: 'https://github.com/Saihaj0',
  },
  {
    title: 'Hospital Readmission Prediction',
    description: 'Machine learning model predicting patient readmission risk using exploratory data analysis, comprehensive feature engineering, and ROC-AUC evaluation. Includes statistical analysis and model optimization for healthcare decision support.',
    technologies: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'EDA'],
    githubUrl: 'https://github.com/Frostwave-afk/Hospital-Redadmission-Prediction',
  },
  {
    title: 'Smart Parking Finder',
    description: 'Android application displaying real-time parking slot availability with Firebase cloud database integration, user authentication, and live data synchronization. Features real-time updates and user-friendly interface for finding available parking spots.',
    technologies: ['Java', 'Firebase', 'Android Studio', 'Real-time Database'],
    githubUrl: 'https://github.com/Saihaj0/Smart-Parking-System',
  },
  {
    title: 'AI Blackjack Game',
    description: 'AI-based Blackjack game implementing probability-based decision strategies with intelligent gameplay behavior and realistic scoring system. The AI opponent uses game theory and statistical analysis for optimal decision making.',
    technologies: ['Python', 'Java', 'AI', 'Game Logic', 'Probability'],
    githubUrl: 'https://github.com/Saihaj0',
  },
  {
    title: 'Gym Management System',
    description: 'Comprehensive Java-based management system for gym operations including memberships, attendance tracking, payment records, and member profiles. Implements full CRUD operations with SQLite database integration for persistent data storage.',
    technologies: ['Java', 'SQLite', 'Database Design', 'CRUD Operations'],
    githubUrl: 'https://github.com/Saihaj0/Gym-Management-System',
  },
  {
    title: 'VANRA – Blue Carbon Registry',
    description: 'Digital platform for tracking coastal carbon credits and environmental monitoring developed during Smart India Hackathon. Built with responsive frontend and real-time data storage for environmental sustainability tracking.',
    technologies: ['TypeScript', 'Next.js', 'Supabase', 'HTML/CSS', 'Environmental Tech'],
    githubUrl: 'https://github.com/Saihaj0/SIH-FINAL',
  },
  {
    title: 'PaisaPilot',
    description: 'AI-powered personal finance management app for Indian youth, built as a B.Tech capstone project, covering transaction categorization, spend forecasting, and anomaly detection. Achieves 75.5% accuracy (merchant-grouped evaluation) with an AUC of 0.918; research paper accepted at ICCTRDA 2026.',
    technologies: ['React Native', 'FastAPI', 'PostgreSQL', 'scikit-learn'],
    githubUrl: 'https://github.com/Saihaj0',
  },
  {
    title: 'PromptGuard',
    description: 'Production-grade security layer for detecting and preventing prompt injection attacks in LLM applications. Combines six independent detection methods (keyword, regex, encoding, chain-injection, honeypot, and phrase detection) with an explainability engine and real-time threat analytics dashboard.',
    technologies: ['Next.js', 'Python', 'FastAPI', 'Prompt Security', 'Analytics Dashboard'],
    githubUrl: 'https://github.com/Saihaj0/PromptGuard',
  },
  {
    title: 'AquaPrognos',
    description: 'Read-only retrofit estimator for household water filter cartridges that measures flow rate, pressure, turbidity, and temperature to predict remaining cartridge life, without actuating any valves. Built for AtomQuest 2026 by Atomberg (Water Purifier track).',
    technologies: ['ESP32', 'PlatformIO', 'Python', 'Sensor Fusion', 'Embedded Systems'],
    githubUrl: 'https://github.com/Saihaj0',
  },
  {
    title: 'RootLens',
    description: 'Serverless AI-diagnosed incident detection pipeline built as a Cloud Computing course project on AWS: CloudWatch alarms trigger Gemini-based diagnosis, with results stored in DynamoDB and alerts sent via SNS. Validated across 10 fault-injection trials with 71.4% correct diagnoses and no false alarms on normal runs.',
    technologies: ['AWS Lambda', 'CloudWatch', 'DynamoDB', 'SNS', 'Gemini API', 'Python'],
    githubUrl: 'https://github.com/Saihaj0',
  },
  {
    title: 'TRACE-X – Explainable Digital Forensics Engine',
    description: 'A forensics engine that reconstructs event timelines and correlation graphs with explainable findings, making forensic AI outputs auditable and trustworthy. Evaluated on 12 scenarios covering 98 events with an automated test suite and a full project report.',
    technologies: ['Python', 'FastAPI', 'SQLAlchemy', 'PostgreSQL', 'React'],
    githubUrl: 'https://github.com/Saihaj0',
  },
]

export function ProjectsSection() {
  return (
    <SectionContainer id="projects">
      <SectionHeading n="05" title="Other" accent="Projects" />

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <Reveal key={project.title} delay={(i % 3) * 90} className="h-full">
            <ProjectCard
              index={i}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              githubUrl={project.githubUrl}
              liveUrl={project.liveUrl}
            />
          </Reveal>
        ))}
      </div>
    </SectionContainer>
  )
}
