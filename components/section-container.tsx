import React from 'react'
import { cn } from '@/lib/utils'

interface SectionContainerProps {
  id?: string
  children: React.ReactNode
  className?: string
}

export function SectionContainer({ id, children, className }: SectionContainerProps) {
  return (
    <section
      id={id}
      className={cn('relative z-10 mx-auto w-full max-w-6xl scroll-mt-20 px-5 py-20 sm:px-8 sm:py-28', className)}
    >
      {children}
    </section>
  )
}
