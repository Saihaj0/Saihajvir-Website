import React from 'react'
import { cn } from '@/lib/utils'

interface SectionContainerProps {
  id?: string
  children: React.ReactNode
  className?: string
}

export function SectionContainer({
  id,
  children,
  className,
}: SectionContainerProps) {
  return (
    <section
      id={id}
      className={cn(
        'py-20 px-4 sm:px-6 lg:px-8 max-w-6xl w-full mx-auto animate-in fade-in duration-500',
        className
      )}
    >
      {children}
    </section>
  )
}
