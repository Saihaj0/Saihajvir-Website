'use client'

import { SectionContainer } from './section-container'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ExternalLink, Calendar, ArrowRight } from 'lucide-react'

export function BlogSection() {
  const articles = [
    {
      title: 'Building a CNN-Based Wildfire Detection System',
      description: 'Deep dive into designing a machine learning model that achieves 95% accuracy in detecting wildfires using thermal imaging and deep learning techniques.',
      date: 'Dec 2025',
      readTime: '8 min read',
      tags: ['Deep Learning', 'CNN', 'Computer Vision'],
      url: 'https://medium.com/@saihajvirsingh09/building-a-cnn-based-wildfire-detection-system-abca8c547edc',
      featured: true,
    },
    {
      title: 'Full-Stack Development with Next.js and Supabase',
      description: 'A comprehensive guide to building modern full-stack applications using Next.js 16, React 19, and Supabase for authentication and database management.',
      date: 'Nov 2025',
      readTime: '10 min read',
      tags: ['Next.js', 'Supabase', 'Full-Stack'],
      url: 'https://medium.com/@saihajvirsingh09/full-stack-development-with-next-js-and-supabase-building-modern-web-applications-a942c49a8175',
    },
    {
      title: 'Smart India Hackathon Experience: VANRA Project',
      description: 'Behind-the-scenes look at developing VANRA during Smart India Hackathon, including challenges, solutions, and key learnings from the competition.',
      date: 'Oct 2025',
      readTime: '6 min read',
      tags: ['Hackathon', 'Project Management', 'React'],
      url: 'https://medium.com/@davsaihajvir10f32/smart-india-hackathon-experience-building-the-vanra-project-183b40cd9f04',
    },
    {
      title: 'Getting Started with Firebase and Android Development',
      description: 'Learn how to integrate Firebase real-time database with Android Studio to build applications like Smart Parking Finder with live data synchronization.',
      date: 'Sep 2025',
      readTime: '7 min read',
      tags: ['Firebase', 'Android', 'Java'],
      url: 'https://medium.com/@davsaihajvir10f32/getting-started-with-firebase-and-android-development-a1dcad339a28',
    },
  ]

  return (
    <SectionContainer id="blog">
      <div className="max-w-5xl">
        <h2 className="text-4xl font-bold text-foreground mb-4">Blog & Articles</h2>
        <div className="w-12 h-1 bg-accent mb-8" />

        <div className="space-y-6">
          {articles.map((article, idx) => (
            <Card
              key={idx}
              className={`border transition-all hover:border-accent/50 ${
                article.featured
                  ? 'bg-gradient-to-r from-accent/10 to-accent/5 border-accent/30 p-8'
                  : 'bg-card border-border p-6'
              } flex flex-col gap-6`}
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-3">
                    {article.featured && (
                      <span className="inline-block px-3 py-1 text-xs font-semibold bg-accent/20 text-accent rounded-full uppercase tracking-wider">
                        Featured
                      </span>
                    )}
                    <span className="flex items-center gap-1 text-sm text-foreground/60">
                      <Calendar className="w-4 h-4" />
                      {article.date}
                    </span>
                    <span className="text-sm text-foreground/60">•</span>
                    <span className="text-sm text-foreground/60">{article.readTime}</span>
                  </div>

                  <h3 className="text-2xl font-bold text-foreground mb-3">
                    {article.title}
                  </h3>

                  <p className="text-foreground/70 mb-4 leading-relaxed">
                    {article.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {article.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-block px-3 py-1 text-xs bg-secondary/50 text-foreground/80 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                    <Button
                      asChild
                      className="bg-accent hover:bg-accent/90 text-accent-foreground gap-2 w-full sm:w-auto"
                    >
                      <a href={article.url} target="_blank" rel="noopener noreferrer">
                        Read Article
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </SectionContainer>
  )
}
