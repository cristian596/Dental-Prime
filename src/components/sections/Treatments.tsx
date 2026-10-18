import { clinic } from '../../config/clinic'
import { treatments } from '../../data/treatments'
import { Card } from '../ui/Card'
import { SectionTitle } from '../ui/SectionTitle'

export function Treatments() {
  const { treatments: t } = clinic
  return (
    <section id={t.id} aria-labelledby={`${t.id}-titulo`} className="scroll-mt-20 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionTitle id={`${t.id}-titulo`} title={t.title} subtitle={t.subtitle} />
        <div className="space-y-14">
          {t.categories.map((category) => {
            const items = treatments.filter((item) => item.category === category.id)
            if (items.length === 0) return null
            return (
              <div key={category.id}>
                <h3 className="mb-6 text-3xl font-semibold text-brand-700">{category.title}</h3>
                <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
      </div>
    </section>
  )
}
