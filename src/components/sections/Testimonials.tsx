import { Star } from 'lucide-react'
import { clinic } from '../../config/clinic'
import { testimonials } from '../../data/testimonials'
import { Card } from '../ui/Card'
import { SectionTitle } from '../ui/SectionTitle'

export function Testimonials() {
  const { testimonials: t } = clinic
  return (
    <section id={t.id} aria-labelledby={`${t.id}-titulo`} className="scroll-mt-20 bg-brand-100 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionTitle id={`${t.id}-titulo`} title={t.title} subtitle={t.subtitle} />
        <ul className="grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <Card as="li" key={item.id} className="flex flex-col p-6">
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
      </div>
    </section>
  )
}
