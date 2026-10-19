import { clinic } from '../../config/clinic'
import { specialists } from '../../data/specialists'
import { Card } from '../ui/Card'
import { Section } from '../ui/Section'
import type { SectionTone } from '../ui/Section'
import { SectionTitle } from '../ui/SectionTitle'

// Fila centrada con tarjetas de ancho fijo según la cantidad: sin huecos con 1, 2, 3 o 4+ especialistas.
// Clases completas para que Tailwind las detecte (gap-6 = 1.5rem).
const itemWidth =
  specialists.length >= 4
    ? 'w-full md:w-[calc((100%-1.5rem)/2)] xl:w-[calc((100%-4.5rem)/4)]'
    : specialists.length >= 2
      ? 'w-full md:w-[calc((100%-1.5rem)/2)] xl:w-[calc((100%-3rem)/3)]'
      : 'w-full max-w-sm'

export function Specialists({ tone }: { tone: SectionTone }) {
  const { specialists: s } = clinic
  return (
    <Section id={s.id} tone={tone} labelledBy={`${s.id}-titulo`}>
      <SectionTitle id={`${s.id}-titulo`} title={s.title} subtitle={s.subtitle} />
      <ul className="flex flex-wrap justify-center gap-6">
        {specialists.map((person) => (
          <Card as="li" key={person.id} className={itemWidth}>
            <img
              src={person.photo.src}
              alt={person.photo.alt}
              width={600}
              height={750}
              loading="lazy"
              className="aspect-[4/5] w-full object-cover object-top"
            />
            <div className="p-5">
              <h3 className="font-serif text-2xl font-semibold">{person.name}</h3>
              <p className="mt-1 text-ink-soft">{person.specialty}</p>
              <p className="mt-3 text-sm font-semibold text-brand-700">{s.experienceLabel(person.yearsExperience)}</p>
            </div>
          </Card>
        ))}
      </ul>
    </Section>
  )
}
