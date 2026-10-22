import { MessageCircle } from 'lucide-react'
import { clinic } from '../../config/clinic'
import { buildWhatsAppUrl } from '../../lib/whatsapp'

export function FloatingWhatsApp() {
  return (
    <a
      href={buildWhatsAppUrl(clinic.whatsappNumber, clinic.floatingWhatsAppMessage)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={clinic.floatingWhatsAppLabel}
      className="fixed right-4 bottom-[calc(1rem+var(--cookie-banner-h,0px))] z-40 inline-flex size-14 items-center justify-center rounded-full bg-brand-700 text-white shadow-lg hover:bg-brand-600 focus-visible:outline-brand-700 sm:right-6 sm:bottom-[calc(1.5rem+var(--cookie-banner-h,0px))]"
    >
      <MessageCircle aria-hidden="true" size={28} />
    </a>
  )
}
