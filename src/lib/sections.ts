import { clinic } from '../config/clinic'
import { facilities } from '../data/facilities'
import { specialists } from '../data/specialists'
import { testimonials } from '../data/testimonials'
import { treatments } from '../data/treatments'

/** Cifras con valor; las de valor vacío se ocultan. */
export const visibleStats = clinic.stats.filter((stat) => stat.value.trim() !== '')

/**
 * Qué secciones con datos opcionales se muestran, por id de sección.
 * App.tsx las usa para omitir las vacías y mantener los fondos alternos sin huecos.
 */
export const sectionVisible: Record<string, boolean> = {
  cifras: visibleStats.length > 0,
  [clinic.treatments.id]: treatments.length > 0,
  [clinic.howItWorks.id]: clinic.howItWorks.steps.length > 0,
  [clinic.specialists.id]: specialists.length > 0,
  [clinic.financing.id]: clinic.financing.enabled,
  [clinic.facilities.id]: facilities.length > 0,
  [clinic.testimonials.id]: testimonials.length > 0,
  [clinic.faqSection.id]: clinic.faq.length > 0,
}
