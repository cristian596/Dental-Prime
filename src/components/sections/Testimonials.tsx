import { Star } from 'lucide-react'
import { clinic } from '../../config/clinic'
import { testimonials } from '../../data/testimonials'
import { Card } from '../ui/Card'
import { Section } from '../ui/Section'
import type { SectionTone } from '../ui/Section'
import { SectionTitle } from '../ui/SectionTitle'

// Fila centrada con tarjetas de ancho fijo según la cantidad: sin huecos con 1, 2, 3 o más testimonios.
// Clases completas para que Tailwind las detecte (gap-6 = 1.5rem, xl:gap-8 = 2rem).
const itemWidth =
  testimonials.length >= 3
    ? 'w-full md:w-[calc((100%-3rem)/3)] xl:w-[calc((100%-4rem)/3)]'
    : testimonials.length === 2
      ? 'w-full md:w-[calc((100%-1.5rem)/2)] xl:w-[calc((100%-2rem)/2)]'
      : 'w-full md:max-w-xl'

export function Testimonials({ tone }: { tone: SectionTone }) {
  const { testimonials: t } = clinic
  return (
    <Section id={t.id} tone={tone} labelledBy={`${t.id}-titulo`}>
      <SectionTitle id={`${t.id}-titulo`} title={t.title} subtitle={t.subtitle} />
      <ul className="flex flex-wrap justify-center gap-6 xl:gap-8">
        {testimonials.map((item) => (
          <Card as="li" key={item.id} className={`flex flex-col p-6 xl:p-8 ${itemWidth}`}>
            <div role="img" aria-label={t.ratingLabel(item.rating)} className="flex gap-1 text-brand-500">
              {[1, 2, 3, 4, 5].map((n) => (
                <Star key={n} size={20} aria-hidden="true" fill={n <= item.rating ? 'currentColor' : 'none'} />
              ))}
            </div>
            <blockquote className="mt-4 flex-1 text-ink-soft">“{item.text}”</blockquote>
            <p className="mt-6 font-semibold">{item.name}</p>
            <p className="text-sm text-ink-soft">
              {t.treatmentPrefix} {item.treatment}
            </p>
          </Card>
        ))}
      </ul>
    </Section>
  )
}
