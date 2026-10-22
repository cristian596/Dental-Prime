import { clinic } from '../../config/clinic'
import { treatments } from '../../data/treatments'
import { Card } from '../ui/Card'
import { Section } from '../ui/Section'
import type { SectionTone } from '../ui/Section'
import { SectionTitle } from '../ui/SectionTitle'

export function Treatments({ tone }: { tone: SectionTone }) {
  const { treatments: t } = clinic
  return (
    <Section id={t.id} tone={tone} labelledBy={`${t.id}-titulo`}>
      <SectionTitle id={`${t.id}-titulo`} title={t.title} subtitle={t.subtitle} />
      <div className="space-y-16">
        {t.categories.map((category) => {
          const items = treatments.filter((item) => item.category === category.id)
          if (items.length === 0) return null
          return (
            <div key={category.id}>
              <div className="mb-8 border-b border-brand-200 pb-4">
                <h3 className="font-serif text-2xl font-semibold text-brand-700">{category.title}</h3>
                <p className="mt-2 text-ink-soft">{category.description}</p>
              </div>
              {/* Flex con wrap (en vez de grid) para poder centrar las filas incompletas. */}
              <ul className="flex flex-wrap justify-center gap-6">
                {items.map(({ id, name, description, icon: Icon, image }) => (
                  <Card
                    as="li"
                    key={id}
                    className="group flex w-full flex-col transition-colors hover:border-brand-200 md:w-[calc((100%-1.5rem)/2)] xl:w-[calc((100%-3rem)/3)]"
                  >
                    {image && (
                      <div className="relative aspect-[4/3] overflow-hidden">
                        {/* Decorativa: el título superpuesto ya describe el servicio. */}
                        <img
                          src={image.src}
                          alt=""
                          width={1232}
                          height={928}
                          loading="lazy"
                          className="h-full w-full object-cover transition-transform duration-500 motion-safe:group-hover:scale-105"
                        />
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-900/70 to-transparent" />
                        <h4 className="absolute inset-x-0 bottom-0 p-5 font-serif text-2xl font-semibold text-white">{name}</h4>
                      </div>
                    )}
                    <div className="p-6">
                      {!image && (
                        <>
                          <span className="mb-4 inline-flex rounded-2xl bg-brand-100 p-3 text-brand-700">
                            <Icon aria-hidden="true" size={28} />
                          </span>
                          <h4 className="font-serif text-2xl font-semibold">{name}</h4>
                        </>
                      )}
                      <p className={`text-sm leading-relaxed text-ink-soft ${image ? '' : 'mt-2'}`}>{description}</p>
                    </div>
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
