import { clinic } from '../../config/clinic'
import { Section } from '../ui/Section'

export function Stats() {
  return (
    <Section id="cifras" tone="tint" ariaLabel={clinic.statsLabel}>
      <dl className="grid grid-cols-2 gap-x-6 gap-y-10 text-center xl:grid-cols-4">
        {clinic.stats.map((stat) => (
          <div key={stat.label} className="flex flex-col-reverse">
            <dd className="font-serif text-5xl font-semibold text-brand-700 xl:text-6xl">{stat.value}</dd>
            <dt className="mt-2 text-ink-soft">{stat.label}</dt>
          </div>
        ))}
      </dl>
    </Section>
  )
}
