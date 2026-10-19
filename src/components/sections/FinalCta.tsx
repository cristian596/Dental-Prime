import { MessageCircle } from 'lucide-react'
import { clinic } from '../../config/clinic'
import { buildWhatsAppUrl } from '../../lib/whatsapp'
import { Button } from '../ui/Button'
import { Container } from '../ui/Container'

export function FinalCta() {
  const { finalCta: c } = clinic
  return (
    <section aria-labelledby="cta-final-titulo" className="bg-brand-700 py-20 xl:py-28">
      <Container className="flex flex-col items-center gap-8 text-center xl:flex-row xl:justify-between xl:text-left">
        <h2 id="cta-final-titulo" className="max-w-2xl text-4xl font-semibold text-white sm:text-5xl">
          {c.title}
        </h2>
        <Button
          variant="inverse"
          href={buildWhatsAppUrl(clinic.whatsappNumber, clinic.whatsappDefaultMessage)}
          target="_blank"
          rel="noopener noreferrer"
          className="min-h-11 shrink-0 focus-visible:outline-white"
        >
          <MessageCircle aria-hidden="true" size={20} />
          {c.ctaLabel}
        </Button>
      </Container>
    </section>
  )
}
