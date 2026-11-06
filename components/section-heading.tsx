import { Reveal } from '@/components/fx/reveal'

/** Numbered section title: small mono index, big sans title, last words in italic serif. */
export function SectionHeading({
  n,
  title,
  accent,
}: {
  n: string
  title?: string
  accent: string
}) {
  return (
    <Reveal className="mb-12 sm:mb-16">
      <p className="eyebrow mb-4 flex items-center gap-3">
        <span className="text-accent">{n}</span>
        <span className="h-px w-10 bg-border" />
      </p>
      <h2 className="max-w-3xl text-balance break-words text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
        {title ? `${title} ` : ''}
        <span className="serif-em">{accent}</span>
      </h2>
    </Reveal>
  )
}
