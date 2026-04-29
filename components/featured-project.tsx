import { SectionContainer } from './section-container'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Github, ExternalLink } from 'lucide-react'
import Image from 'next/image'

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
      <div className="max-w-6xl">
        <h2 className="text-4xl font-bold text-foreground mb-4">Featured Project</h2>
        <div className="w-12 h-1 bg-accent mb-8" />

        <Card className="bg-card border border-border overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
            {/* Image */}
            <div className="flex items-center justify-center rounded-xl border border-accent/30 min-h-[280px] sm:min-h-[340px] md:min-h-96 overflow-hidden bg-gradient-to-br from-accent/10 to-accent/5">
              <Image
                src="/images/wildfire-detection.jpg"
                alt="Wildfire Detection System with thermal imaging and CNN visualization"
                width={500}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col justify-center">
              <h3 className="text-3xl font-bold text-foreground mb-3">
                Wildfire Detection System
              </h3>
              <p className="text-foreground/70 mb-2 text-sm">
                <span className="text-accent font-semibold">July 2025 - Dec 2025</span>
              </p>
              <p className="text-foreground/70 mb-6">
                A cutting-edge CNN-based wildfire detection model leveraging deep learning to identify wildfire-prone regions with high accuracy. The system uses 4-channel input combining RGB and thermal imaging data to achieve 95% accuracy in detecting potential wildfires, supporting environmental monitoring and disaster prevention efforts.
              </p>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wider">
                  Key Achievements
                </h4>
                <ul className="space-y-2">
                  {features.map((feature, idx) => (
                    <li key={idx} className="flex gap-3 text-sm text-foreground/70">
                      <span className="text-accent">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wider">
                  Tech Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {['Python', 'CNN', 'TensorFlow', 'Deep Learning', 'OpenCV', 'Thermal Imaging'].map((tech) => (
                    <span
                      key={tech}
                      className="inline-block px-3 py-1 text-xs bg-secondary/50 text-foreground/80 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                <Button
                  asChild
                  className="bg-accent hover:bg-accent/90 text-accent-foreground gap-2"
                >
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4" />
                    View Code
                  </a>
                </Button>
                <Button
                  variant="outline"
                  asChild
                  className="border-border hover:border-accent hover:text-accent gap-2"
                >
                  <a href="https://medium.com/@saihajvirsingh09/building-a-cnn-based-wildfire-detection-system-abca8c547edc" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4" />
                    Learn More
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </SectionContainer>
  )
}
