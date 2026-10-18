import { clinic } from '../../config/clinic'
import { specialists } from '../../data/specialists'
import { Card } from '../ui/Card'
import { SectionTitle } from '../ui/SectionTitle'

export function Specialists() {
  const { specialists: s } = clinic
  return (
    <section id={s.id} aria-labelledby={`${s.id}-titulo`} className="scroll-mt-20 bg-brand-100 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionTitle id={`${s.id}-titulo`} title={s.title} subtitle={s.subtitle} />
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {specialists.map((person) => (
            <Card as="li" key={person.id}>
              <img
                src={person.photo.src}
                alt={person.photo.alt}
                width={600}
                height={700}
                loading="lazy"
                className="aspect-[6/7] w-full object-cover"
              />
              <div className="p-6">
                <h3 className="font-serif text-2xl font-semibold">{person.name}</h3>
                <p className="mt-1 text-ink-soft">{person.specialty}</p>
                <p className="mt-3 text-sm font-semibold text-brand-700">{s.experienceLabel(person.yearsExperience)}</p>
              </div>
            </Card>
          ))}
        </ul>
      </div>
    </section>
  )
}
