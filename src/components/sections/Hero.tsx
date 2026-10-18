import { MessageCircle } from 'lucide-react'
import { clinic } from '../../config/clinic'
import { buildWhatsAppUrl } from '../../lib/whatsapp'
import { Button } from '../ui/Button'

export function Hero() {
  const { hero, nav } = clinic
  return (
    <section
      id={hero.id}
      className="relative isolate flex min-h-[80vh] scroll-mt-20 items-center overflow-hidden bg-brand-900 pt-28 pb-16 lg:min-h-[85vh]"
    >
      <img
        src={hero.image.src}
        alt={hero.image.alt}
        fetchPriority="high"
        className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
      />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-t from-brand-900/90 via-brand-900/60 to-brand-900/50 lg:bg-gradient-to-r lg:from-brand-900/95 lg:via-brand-900/75 lg:to-brand-900/10" />
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="max-w-xl text-left lg:max-w-2xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-brand-200">{clinic.tagline}</p>
          <h1 className="font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-7xl">{hero.title}</h1>
          <p className="mt-6 text-lg text-white/90">{hero.subtitle}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href={nav.cta.href} className="min-h-11 focus-visible:outline-white">
              {nav.cta.label}
            </Button>
            <Button
              variant="light"
              href={buildWhatsAppUrl(clinic.whatsappNumber, clinic.whatsappDefaultMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-11 focus-visible:outline-white"
            >
              <MessageCircle aria-hidden="true" size={20} />
              {hero.whatsappLabel}
            </Button>
          </div>
          <ul className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-x-6">
            {clinic.trustPoints.map(({ label, icon: Icon }) => (
              <li key={label} className="flex items-center gap-2 text-sm font-medium text-white/90">
                <Icon aria-hidden="true" size={20} className="shrink-0 text-brand-300" />
                {label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
