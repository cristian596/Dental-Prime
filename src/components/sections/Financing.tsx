import { Check } from 'lucide-react'
import { clinic } from '../../config/clinic'
import { Card } from '../ui/Card'

export function Financing() {
  const { financing: f } = clinic
  if (!f.enabled) return null
  return (
    <section id={f.id} aria-labelledby={`${f.id}-titulo`} className="scroll-mt-20 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Card className="grid gap-8 p-6 sm:p-10 lg:grid-cols-2 lg:gap-12">
          <div>
            <h2 id={`${f.id}-titulo`} className="text-4xl font-semibold sm:text-5xl">
              {f.title}
            </h2>
            <p className="mt-4 text-lg text-ink-soft">{f.description}</p>
            <ul className="mt-6 space-y-3">
              {f.benefits.map((benefit) => (
                <li key={benefit} className="flex items-center gap-3 font-medium">
                  <Check aria-hidden="true" size={20} className="shrink-0 text-brand-700" />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-sans text-sm font-semibold uppercase tracking-wider text-brand-700">{f.partnersTitle}</h3>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {f.partners.map((partner) => (
                <li key={partner} className="rounded-2xl border border-brand-100 bg-brand-50 px-4 py-3 font-semibold text-ink">
                  {partner}
                </li>
              ))}
            </ul>
          </div>
        </Card>
        <p className="mt-4 text-center text-xs text-ink-soft">{f.disclaimer}</p>
      </div>
    </section>
  )
}
