interface SectionTitleProps {
  id: string
  title: string
  subtitle?: string
}

export function SectionTitle({ id, title, subtitle }: SectionTitleProps) {
  return (
    <div className="mx-auto mb-12 max-w-2xl text-center">
      <h2 id={id} className="text-4xl font-semibold sm:text-5xl">
        {title}
      </h2>
      {subtitle && <p className="mt-4 text-lg text-ink-soft">{subtitle}</p>}
    </div>
  )
}
