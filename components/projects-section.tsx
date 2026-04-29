import { SectionContainer } from './section-container'
import { ProjectCard } from './project-card'

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
]

export function ProjectsSection() {
  return (
    <SectionContainer id="projects">
      <div className="max-w-6xl">
        <h2 className="text-4xl font-bold text-foreground mb-4">Other Projects</h2>
        <div className="w-12 h-1 bg-accent mb-8" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              githubUrl={project.githubUrl}
              liveUrl={project.liveUrl}
            />
          ))}
        </div>
      </div>
    </SectionContainer>
  )
}
