import { MessageCircle } from 'lucide-react'
import { clinic } from '../../config/clinic'
import { buildWhatsAppUrl } from '../../lib/whatsapp'
import { Button } from '../ui/Button'
import { Card } from '../ui/Card'
import { SectionTitle } from '../ui/SectionTitle'

export function HowItWorks() {
  const { howItWorks: h } = clinic
  return (
    <section id={h.id} aria-labelledby={`${h.id}-titulo`} className="scroll-mt-20 bg-brand-50 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionTitle id={`${h.id}-titulo`} title={h.title} subtitle={h.subtitle} />
        <ol className="grid gap-6 md:grid-cols-3">
          {h.steps.map((step, index) => (
            <Card as="li" key={step.title} className="p-6">
              <span aria-hidden="true" className="font-serif text-5xl font-semibold text-brand-500">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-2 font-serif text-2xl font-semibold">{step.title}</h3>
              <p className="mt-3 text-ink-soft">{step.description}</p>
            </Card>
          ))}
        </ol>
        <div className="mt-10 flex justify-center">
          <Button
            href={buildWhatsAppUrl(clinic.whatsappNumber, clinic.whatsappDefaultMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="min-h-11"
          >
            <MessageCircle aria-hidden="true" size={20} />
            {h.ctaLabel}
          </Button>
        </div>
      </div>
    </section>
  )
}
