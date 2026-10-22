import { Check } from 'lucide-react'
import { clinic } from '../../config/clinic'
import { buildWhatsAppUrl } from '../../lib/whatsapp'
import { Button } from '../ui/Button'
import { Card } from '../ui/Card'
import { Section } from '../ui/Section'
import type { SectionTone } from '../ui/Section'

export function Financing({ tone }: { tone: SectionTone }) {
  const { financing: f } = clinic
  if (!f.enabled) return null
  const hasPartners = f.partners.length > 0
  return (
    <Section id={f.id} tone={tone} labelledBy={`${f.id}-titulo`}>
      <Card className="p-6 sm:p-10 xl:p-14">
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
        {hasPartners && (
          <div className="mt-8">
            <h3 className="font-sans text-sm font-semibold text-brand-700">{f.partnersTitle}</h3>
            <ul className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-3">
              {f.partners.map((partner) => (
                <li
                  key={partner.name}
                  className="flex h-40 flex-col items-center justify-center gap-2 rounded-2xl border border-brand-100 bg-white p-3 transition-colors hover:border-brand-200"
                >
                  <div className="h-16 w-full overflow-hidden rounded-lg">
                    <img
                      src={partner.logo}
                      alt={partner.alt}
                      width={partner.width}
                      height={partner.height}
                      loading="lazy"
                      className="h-full w-full object-contain"
                      style={partner.logoScale ? { transform: `scale(${partner.logoScale})` } : undefined}
                    />
                  </div>
                  {partner.badge && <p className="text-center text-sm text-brand-700">{partner.badge}</p>}
                </li>
              ))}
            </ul>
          </div>
        )}
        <div className="mt-8">
          <Button
            href={buildWhatsAppUrl(clinic.whatsappNumber, f.ctaMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="min-h-11 w-full text-center sm:w-auto"
          >
            {f.ctaLabel}
          </Button>
        </div>
      </Card>
      <p className="mt-4 text-center text-sm text-ink-soft">{f.disclaimer}</p>
    </Section>
  )
}
