import { Reveal } from '@/components/fx/reveal'

interface TimelineItemProps {
  title: string
  subtitle?: string
  date: string
  description?: string
  details?: string[]
}

export function TimelineItem({ title, subtitle, date, description, details }: TimelineItemProps) {
  return (
    <Reveal className="group relative pb-10 pl-9 last:pb-0 sm:pl-12">
      {/* rail */}
      <span className="absolute bottom-0 left-[7px] top-6 w-px bg-gradient-to-b from-accent/50 via-border to-transparent group-last:hidden" />
      {/* node */}
      <span className="absolute left-0 top-1.5 flex size-[15px] items-center justify-center">
        <span className="ping-soft absolute size-full rounded-full bg-accent/40" />
        <span className="relative size-[9px] rounded-full bg-[var(--ice)] shadow-[0_0_14px_var(--glow)]" />
      </span>

      <div className="spot glass rounded-2xl p-5 sm:p-7">
        <div className="relative z-10">
          <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
            <h3 className="text-lg font-semibold tracking-tight text-foreground sm:text-xl">{title}</h3>
            <p className="eyebrow shrink-0">{date}</p>
          </div>
          {subtitle && <p className="mt-1 text-sm font-medium text-accent">{subtitle}</p>}
          {description && <p className="mt-3 text-sm leading-relaxed text-foreground/70">{description}</p>}
          {details && details.length > 0 && (
            <ul className="mt-4 space-y-2">
              {details.map((detail, idx) => (
                <li key={idx} className="flex gap-3 text-sm leading-relaxed text-foreground/70">
                  <span className="mt-2 size-1 shrink-0 rounded-full bg-accent" />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </Reveal>
  )
}
