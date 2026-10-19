import { useState } from 'react'
import type { FormEvent } from 'react'
import { Clock, MapPin, MessageCircle } from 'lucide-react'
import { clinic } from '../../config/clinic'
import { treatments } from '../../data/treatments'
import { buildWhatsAppUrl } from '../../lib/whatsapp'
import { Button } from '../ui/Button'
import { Section } from '../ui/Section'
import type { SectionTone } from '../ui/Section'
import { SectionTitle } from '../ui/SectionTitle'

const inputClasses =
  'mt-2 w-full rounded-2xl border border-brand-300 bg-white px-4 py-3 text-ink placeholder:text-ink-soft/70'

export function BookingForm({ tone }: { tone: SectionTone }) {
  const { booking: b } = clinic
  const [errors, setErrors] = useState<{ name?: string; phone?: string }>({})

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)
    const value = (key: string) => String(data.get(key) ?? '').trim()
    const name = value('name')
    const phone = value('phone')

    const nextErrors = {
      name: name ? undefined : b.fields.name.error,
      phone: phone ? undefined : b.fields.phone.error,
    }
    setErrors(nextErrors)
    if (nextErrors.name || nextErrors.phone) {
      const firstInvalid = nextErrors.name ? 'name' : 'phone'
      ;(form.elements.namedItem(firstInvalid) as HTMLElement | null)?.focus()
      return
    }

    const message = [
      b.messageIntro,
      `${b.fields.name.label}: ${name}`,
      `${b.fields.phone.label}: ${phone}`,
      `${b.fields.treatment.label}: ${value('treatment') || b.notProvided}`,
      `${b.fields.schedule.label}: ${value('schedule') || b.notProvided}`,
    ].join('\n')

    window.open(buildWhatsAppUrl(clinic.whatsappNumber, message), '_blank', 'noopener,noreferrer')
  }

  return (
    <Section id={b.id} tone={tone} labelledBy={`${b.id}-titulo`}>
        <SectionTitle id={`${b.id}-titulo`} title={b.title} subtitle={b.subtitle} />
        <div className="grid gap-10 xl:grid-cols-2 xl:gap-12">
          <form
            onSubmit={handleSubmit}
            noValidate
            className="space-y-5 rounded-3xl border border-brand-100 bg-white p-6 shadow-sm sm:p-8"
          >
            <div>
              <label htmlFor="name" className="font-medium">
                {b.fields.name.label}
              </label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                placeholder={b.fields.name.placeholder}
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? 'name-error' : undefined}
                className={inputClasses}
              />
              {errors.name && (
                <p id="name-error" role="alert" className="mt-1 text-sm text-red-700">
                  {errors.name}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="phone" className="font-medium">
                {b.fields.phone.label}
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                placeholder={b.fields.phone.placeholder}
                aria-invalid={!!errors.phone}
                aria-describedby={errors.phone ? 'phone-error' : undefined}
                className={inputClasses}
              />
              {errors.phone && (
                <p id="phone-error" role="alert" className="mt-1 text-sm text-red-700">
                  {errors.phone}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="treatment" className="font-medium">
                {b.fields.treatment.label}
              </label>
              <select id="treatment" name="treatment" defaultValue="" className={inputClasses}>
                <option value="">{b.fields.treatment.placeholder}</option>
                {treatments.map((t) => (
                  <option key={t.id} value={t.name}>
                    {t.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="schedule" className="font-medium">
                {b.fields.schedule.label}
              </label>
              <input
                id="schedule"
                name="schedule"
                type="text"
                placeholder={b.fields.schedule.placeholder}
                className={inputClasses}
              />
            </div>

            <Button type="submit" className="w-full">
              <MessageCircle aria-hidden="true" size={20} />
              {b.submitLabel}
            </Button>
            {clinic.privacyPolicyUrl && (
              <p className="text-sm text-ink-soft">
                {b.privacyNoticePrefix}{' '}
                <a
                  href={clinic.privacyPolicyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-brand-700 underline underline-offset-4"
                >
                  {b.privacyNoticeLinkLabel}
                </a>
                .
              </p>
            )}
            <p className="text-sm text-ink-soft">{b.helper}</p>
          </form>

          <div className={`space-y-6 rounded-3xl bg-brand-100 p-6 sm:p-8 ${clinic.mapEmbedUrl ? '' : 'xl:self-start'}`}>
            {clinic.mapEmbedUrl && (
              <iframe
                src={clinic.mapEmbedUrl}
                title={b.mapTitle}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                className="h-72 w-full rounded-2xl border-0 xl:h-96"
              />
            )}
            <h3 className="text-3xl font-semibold">{b.contactTitle}</h3>
            <div className="flex gap-3">
              <MapPin aria-hidden="true" className="mt-1 shrink-0 text-brand-700" />
              <div>
                <p className="font-semibold">{b.addressLabel}</p>
                <p className="text-ink-soft">
                  {clinic.address.street}, {clinic.address.city}
                </p>
                <a
                  href={clinic.address.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-brand-700 underline underline-offset-4"
                >
                  {b.mapLinkLabel}
                </a>
              </div>
            </div>
            <div className="flex gap-3">
              <Clock aria-hidden="true" className="mt-1 shrink-0 text-brand-700" />
              <div>
                <p className="font-semibold">{b.hoursLabel}</p>
                <ul className="text-ink-soft">
                  {clinic.hours.map((h) => (
                    <li key={h.days}>
                      {h.days}: {h.time}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <Button
              href={buildWhatsAppUrl(clinic.whatsappNumber, clinic.whatsappDefaultMessage)}
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
              className="w-full"
            >
              <MessageCircle aria-hidden="true" size={20} />
              {b.whatsappLinkLabel}
            </Button>
          </div>
        </div>
    </Section>
  )
}
