import { MessageCircle } from 'lucide-react'
import { clinic } from '../../config/clinic'
import { buildWhatsAppUrl } from '../../lib/whatsapp'
import { Button } from '../ui/Button'
import { Card } from '../ui/Card'
import { Section } from '../ui/Section'
import { SectionTitle } from '../ui/SectionTitle'

export function HowItWorks() {
  const { howItWorks: h } = clinic
  return (
    <Section id={h.id} tone="tint" labelledBy={`${h.id}-titulo`}>
      <SectionTitle id={`${h.id}-titulo`} title={h.title} subtitle={h.subtitle} />
      <ol className="grid gap-6 md:grid-cols-3 xl:gap-8">
        {h.steps.map((step, index) => (
          <Card as="li" key={step.title} className="p-6 xl:p-8">
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
    </Section>
  )
}
