import { Star } from 'lucide-react'
import { clinic } from '../../config/clinic'
import { testimonials } from '../../data/testimonials'
import { Card } from '../ui/Card'
import { Section } from '../ui/Section'
import { SectionTitle } from '../ui/SectionTitle'

export function Testimonials() {
  const { testimonials: t } = clinic
  return (
    <Section id={t.id} tone="tint" labelledBy={`${t.id}-titulo`}>
      <SectionTitle id={`${t.id}-titulo`} title={t.title} subtitle={t.subtitle} />
      <ul className="grid gap-6 md:grid-cols-3 xl:gap-8">
        {testimonials.map((item) => (
          <Card as="li" key={item.id} className="flex flex-col p-6 xl:p-8">
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
