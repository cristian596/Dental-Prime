import { clinic } from '../../config/clinic'
import { specialists } from '../../data/specialists'
import { Card } from '../ui/Card'
import { Section } from '../ui/Section'
import { SectionTitle } from '../ui/SectionTitle'

// 3 especialistas llenan la fila en 3 columnas; con 4 o más se usan 4.
const xlColumns = specialists.length === 3 ? 'xl:grid-cols-3' : 'xl:grid-cols-4'

export function Specialists() {
  const { specialists: s } = clinic
  return (
    <Section id={s.id} labelledBy={`${s.id}-titulo`}>
      <SectionTitle id={`${s.id}-titulo`} title={s.title} subtitle={s.subtitle} />
      <ul className={`grid gap-6 md:grid-cols-2 ${xlColumns}`}>
        {specialists.map((person) => (
          <Card as="li" key={person.id}>
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
