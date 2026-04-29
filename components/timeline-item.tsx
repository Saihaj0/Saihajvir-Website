interface TimelineItemProps {
  title: string
  subtitle?: string
  date: string
  description?: string
  details?: string[]
}

export function TimelineItem({
  title,
  subtitle,
  date,
  description,
  details,
}: TimelineItemProps) {
  return (
    <div className="flex gap-6 mb-8 last:mb-0">
      {/* Timeline dot and line */}
      <div className="flex flex-col items-center">
        <div className="w-4 h-4 bg-accent rounded-full mt-2 mb-4" />
        <div className="w-1 h-16 bg-border last:h-0" />
      </div>

      {/* Content */}
      <div className="flex-1 pb-8">
        <h3 className="text-lg font-semibold text-foreground">{title}</h3>
        {subtitle && <p className="text-sm text-accent font-medium mt-1">{subtitle}</p>}
        <p className="text-sm text-foreground/60 mt-1">{date}</p>
        {description && (
          <p className="text-sm text-foreground/70 mt-3">{description}</p>
        )}
        {details && details.length > 0 && (
          <ul className="mt-3 space-y-1">
            {details.map((detail, idx) => (
              <li key={idx} className="text-sm text-foreground/70 flex gap-2">
                <span className="text-accent">•</span>
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
