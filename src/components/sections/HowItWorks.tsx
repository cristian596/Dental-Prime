import { Check, MessageCircle, Smile, Stethoscope } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { clinic } from '../../config/clinic'
import type { HowItWorksIcon } from '../../config/clinic'
import { buildWhatsAppUrl } from '../../lib/whatsapp'
import { Button } from '../ui/Button'
import { Card } from '../ui/Card'
import { Section } from '../ui/Section'
import type { SectionTone } from '../ui/Section'
import { SectionTitle } from '../ui/SectionTitle'

const stepIcons: Record<HowItWorksIcon, LucideIcon> = {
  message: MessageCircle,
  stethoscope: Stethoscope,
  smile: Smile,
}

export function HowItWorks({ tone }: { tone: SectionTone }) {
  const { howItWorks: h } = clinic
  return (
    <Section id={h.id} tone={tone} labelledBy={`${h.id}-titulo`}>
      <SectionTitle id={`${h.id}-titulo`} title={h.title} subtitle={h.subtitle} />
      <ol className="relative grid gap-6 md:grid-cols-3 xl:gap-8">
        {/* Línea conectora de escritorio: del centro del primer icono al del último, detrás de las tarjetas */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute left-[16.67%] right-[16.67%] top-[calc(2rem+1.75rem+4px)] hidden h-0.5 bg-brand-200 xl:block"
        />
        {h.steps.map((step, index) => {
          const Icon = stepIcons[step.icon]
          const includes = step.firstVisitIncludes ?? []
          return (
            <li
              key={step.title}
              className="relative flex max-md:not-last:after:absolute max-md:not-last:after:-bottom-6 max-md:not-last:after:left-1/2 max-md:not-last:after:h-6 max-md:not-last:after:w-0.5 max-md:not-last:after:-translate-x-1/2 max-md:not-last:after:bg-brand-200 max-md:not-last:after:content-['']"
            >
              <Card
                as="div"
                className="flex w-full flex-col border-t-4 border-t-brand-700 p-6 transition-[transform,box-shadow] hover:shadow-md motion-safe:hover:-translate-y-1 xl:p-8"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-50 text-brand-700">
                  <Icon aria-hidden="true" size={28} />
                </span>
                <span aria-hidden="true" className="mt-4 font-serif text-5xl font-semibold text-brand-500">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-2 font-serif text-2xl font-semibold">{step.title}</h3>
                <p className="mt-3 text-ink-soft">{step.description}</p>
                {includes.length > 0 && (
                  <ul className="mt-4 space-y-2 text-sm">
                    {includes.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <Check aria-hidden="true" size={16} className="mt-0.5 shrink-0 text-brand-700" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {step.badge && <p className="mt-auto pt-5 text-sm font-medium text-brand-700">{step.badge}</p>}
              </Card>
            </li>
          )
        })}
      </ol>
      <div className="mt-10 flex flex-col items-center gap-3">
        <Button
          href={buildWhatsAppUrl(clinic.whatsappNumber, clinic.whatsappDefaultMessage)}
          target="_blank"
          rel="noopener noreferrer"
          className="min-h-11"
        >
          <MessageCircle aria-hidden="true" size={20} />
          {h.ctaLabel}
        </Button>
        {h.trustNote && <p className="text-center text-sm text-ink-soft">{h.trustNote}</p>}
      </div>
    </Section>
  )
}
