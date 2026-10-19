import { clinic } from '../../config/clinic'
import { visibleStats } from '../../lib/sections'
import { Section } from '../ui/Section'
import type { SectionTone } from '../ui/Section'

// Clases completas para que Tailwind las detecte. Con menos de 4 cifras la fila se reparte sin huecos.
const columnsByCount: Record<number, string> = {
  1: 'xl:grid-cols-1',
  2: 'xl:grid-cols-2',
  3: 'xl:grid-cols-3',
}

export function Stats({ tone }: { tone: SectionTone }) {
  const odd = visibleStats.length % 2 === 1
  return (
    <Section id="cifras" tone={tone} ariaLabel={clinic.statsLabel}>
      <dl className={`grid grid-cols-2 gap-x-6 gap-y-10 text-center ${columnsByCount[visibleStats.length] ?? 'xl:grid-cols-4'}`}>
        {visibleStats.map((stat, index) => (
          // En móvil (2 columnas) la última cifra, si queda sola, ocupa el ancho completo.
          <div
            key={stat.label}
            className={`flex flex-col-reverse ${odd && index === visibleStats.length - 1 ? 'col-span-2 xl:col-span-1' : ''}`}
          >
            <dd className="font-serif text-5xl font-semibold text-brand-700 xl:text-6xl">{stat.value}</dd>
            <dt className="mt-2 text-ink-soft">{stat.label}</dt>
          </div>
        ))}
      </dl>
    </Section>
  )
}
