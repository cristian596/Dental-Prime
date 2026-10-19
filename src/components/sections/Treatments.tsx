import { clinic } from '../../config/clinic'
import { treatments } from '../../data/treatments'
import { Card } from '../ui/Card'
import { Section } from '../ui/Section'
import { SectionTitle } from '../ui/SectionTitle'

// Clases completas para que Tailwind las detecte. Cada categoría llena su fila sin tarjetas huérfanas.
const columnsByCount: Record<number, string> = {
  1: 'xl:grid-cols-1',
  2: 'xl:grid-cols-2',
  3: 'xl:grid-cols-3',
}

export function Treatments() {
  const { treatments: t } = clinic
  return (
    <Section id={t.id} labelledBy={`${t.id}-titulo`}>
      <SectionTitle id={`${t.id}-titulo`} title={t.title} subtitle={t.subtitle} />
      <div className="space-y-14">
        {t.categories.map((category) => {
          const items = treatments.filter((item) => item.category === category.id)
          if (items.length === 0) return null
          return (
            <div key={category.id} className="xl:grid xl:grid-cols-4 xl:gap-6">
              <h3 className="mb-6 text-3xl font-semibold text-brand-700 xl:mb-0 xl:pr-4">{category.title}</h3>
              <ul className={`grid gap-6 sm:grid-cols-2 xl:col-span-3 ${columnsByCount[items.length] ?? 'xl:grid-cols-3'}`}>
                {items.map(({ id, name, description, icon: Icon }) => (
                  <Card as="li" key={id} className="p-6">
                    <span className="mb-4 inline-flex rounded-2xl bg-brand-100 p-3 text-brand-700">
                      <Icon aria-hidden="true" size={28} />
                    </span>
                    <h4 className="font-serif text-2xl font-semibold">{name}</h4>
                    <p className="mt-2 text-ink-soft">{description}</p>
                  </Card>
                ))}
              </ul>
            </div>
          )
        })}
      </div>
    </Section>
  )
}
