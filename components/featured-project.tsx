import { SectionContainer } from './section-container'
import { SectionHeading } from './section-heading'
import { Reveal } from '@/components/fx/reveal'
import { Chip } from '@/components/chip'
import { btnGhost, btnPrimary } from '@/lib/styles'
import { Github, ExternalLink, Check } from 'lucide-react'
import { WildfireDiagram } from '@/components/wildfire-diagram'

export function FeaturedProject() {
  const features = [
    '4-channel input processing (RGB + Thermal imaging)',
    'CNN-based deep learning model architecture',
    'Image preprocessing with normalization and augmentation',
    '95% accuracy on wildfire detection dataset',
    'Early detection for environmental monitoring',
    'Disaster prevention support capabilities',
  ]

  return (
    <SectionContainer id="featured">
      <SectionHeading n="04" title="Featured" accent="Project" />

      <Reveal>
        <div className="beam glass overflow-hidden rounded-3xl">
          <div className="grid grid-cols-1 gap-8 p-5 sm:p-8 lg:grid-cols-2 lg:gap-12 lg:p-10">
            {/* Image */}
            <div className="relative aspect-square w-full self-center overflow-hidden rounded-2xl border border-border">
              <WildfireDiagram className="absolute inset-0 size-full" />
            </div>

            {/* Content */}
            <div className="flex flex-col justify-center">
              <h3 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Wildfire Detection System</h3>
              <p className="eyebrow mt-3 !text-accent">July 2025 - Dec 2025</p>
              <p className="mt-5 leading-relaxed text-foreground/70">
                A cutting-edge CNN-based wildfire detection model leveraging deep learning to identify wildfire-prone regions with high accuracy. The system uses 4-channel input combining RGB and thermal imaging data to achieve 95% accuracy in detecting potential wildfires, supporting environmental monitoring and disaster prevention efforts.
              </p>

              <div className="mt-7">
                <h4 className="eyebrow mb-3">Key Achievements</h4>
                <ul className="space-y-2.5">
                  {features.map((feature, idx) => (
                    <li key={idx} className="flex gap-3 text-sm leading-relaxed text-foreground/75">
                      <Check className="mt-0.5 size-4 shrink-0 text-accent" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-7">
                <h4 className="eyebrow mb-3">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {['Python', 'CNN', 'TensorFlow', 'Deep Learning', 'OpenCV', 'Thermal Imaging'].map((tech) => (
                    <Chip key={tech}>{tech}</Chip>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href="#" target="_blank" rel="noopener noreferrer" className={btnPrimary}>
                  <Github className="size-4" />
                  View Code
                </a>
                <a
                  href="https://medium.com/@saihajvirsingh09/building-a-cnn-based-wildfire-detection-system-abca8c547edc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={btnGhost}
                >
                  <ExternalLink className="size-4" />
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </SectionContainer>
  )
}
