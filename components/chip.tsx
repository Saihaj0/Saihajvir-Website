import { cn } from '@/lib/utils'

/** Small mono tag used for technologies, keywords and topics. */
export function Chip({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border border-border bg-white/[0.04] px-3 py-1 font-mono text-[11px] tracking-wide text-foreground/75 transition-colors hover:border-accent/50 hover:text-accent',
        className
      )}
    >
      {children}
    </span>
  )
}
