import { Navbar } from '@/components/navbar'
import { HeroSection } from '@/components/hero-section'
import { AboutSection } from '@/components/about-section'
import { ExperienceSection } from '@/components/experience-section'
import { SkillsSection } from '@/components/skills-section'
import { FeaturedProject } from '@/components/featured-project'
import { ProjectsSection } from '@/components/projects-section'
import { PublicationsSection } from '@/components/publications-section'
import { StatsDashboard } from '@/components/stats-dashboard'
import { BlogSection } from '@/components/blog-section'
import { EducationSection } from '@/components/education-section'
import { CertificationsSection } from '@/components/certifications-section'
import { AchievementsSection } from '@/components/achievements-section'
import { ContactSection } from '@/components/contact-section'
import { Footer } from '@/components/footer'
import { Toaster } from 'sonner'

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <FeaturedProject />
        <ProjectsSection />
        <PublicationsSection />
        <StatsDashboard />
        <BlogSection />
        <EducationSection />
        <CertificationsSection />
        <AchievementsSection />
        <ContactSection />
      </main>
      <Footer />
      <Toaster theme="dark" />
    </>
  )
}
