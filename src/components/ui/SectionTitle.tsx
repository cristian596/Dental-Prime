interface SectionTitleProps {
  id: string
  title: string
  subtitle?: string
  align?: 'center' | 'left'
}

export function SectionTitle({ id, title, subtitle, align = 'center' }: SectionTitleProps) {
  return (
    <div className={align === 'center' ? 'mx-auto mb-12 max-w-2xl text-center' : 'mb-8 max-w-xl text-left xl:mb-0'}>
      <h2 id={id} className="text-4xl font-semibold sm:text-5xl">
        {title}
      </h2>
      {subtitle && <p className="mt-4 text-lg text-ink-soft">{subtitle}</p>}
    </div>
  )
}
