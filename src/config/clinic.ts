import type { LucideIcon } from 'lucide-react'
import { CalendarCheck, ClipboardCheck, ShieldCheck } from 'lucide-react'
import { specialists } from '../data/specialists.ts'
import { testimonials } from '../data/testimonials.ts'

// Cifras derivadas de src/data/: cambian solas al editar especialistas o testimonios.
// Sin datos devuelven '' y la cifra se oculta (ver clinic.stats).
const maxYearsExperience = specialists.length ? Math.max(...specialists.map((s) => s.yearsExperience)) : 0
const averageRating = testimonials.length ? testimonials.reduce((sum, t) => sum + t.rating, 0) / testimonials.length : 0

// EJEMPLO: reemplazar por datos reales del cliente (se reutiliza en textos de accesibilidad)
const clinicName = 'AQUÍ VA TU MARCA'

export interface TrustPoint {
  label: string
  icon: LucideIcon
}

export interface HowItWorksStep {
  title: string
  description: string
}

export interface HowItWorks {
  id: string
  title: string
  subtitle: string
  ctaLabel: string
  steps: HowItWorksStep[]
}

export interface Stat {
  value: string
  label: string
}

export interface FaqItem {
  question: string
  answer: string
}

export interface FinalCta {
  title: string
  ctaLabel: string
}

export interface FinancingPartner {
  name: string
  /** Ruta del logo dentro de public/. */
  logo: string
  alt: string
  /** Zoom del logo (1 = tamaño original). Súbelo si el archivo tiene mucho margen interno. */
  logoScale?: number
  width: number
  height: number
}

export interface Financing {
  /** false: la sección no se renderiza. */
  enabled: boolean
  id: string
  title: string
  description: string
  benefits: string[]
  partnersTitle: string
  partners: FinancingPartner[]
  disclaimer: string
}

// Único punto de personalización del contenido de la clínica.
// Para vender la plantilla a otro cliente, edita este archivo y los de src/data/.
// Todo bloque marcado con "EJEMPLO" es contenido de muestra que el comprador debe reemplazar.

export const clinic = {
  // EJEMPLO: reemplazar por datos reales del cliente
  name: clinicName,
  tagline: 'Sonrisas que transforman vidas',

  // EJEMPLO: reemplazar por datos reales del cliente
  // whatsappNumber: formato internacional, solo dígitos, sin "+" ni espacios.
  whatsappNumber: '573001234567',
  whatsappDefaultMessage: 'Hola, quisiera información sobre una valoración dental.',
  phoneDisplay: '+57 300 123 4567',

  // EJEMPLO: reemplazar por datos reales del cliente
  address: {
    street: 'Calle 123 #45-67, Consultorio 801',
    city: 'Bogotá, Colombia',
    mapUrl: 'https://maps.google.com/?q=Calle+123+45-67+Bogota',
  },
  // EJEMPLO: reemplazar por datos reales del cliente
  // En Google Maps: Compartir > Insertar un mapa, y copia el src del iframe. Vacío ('') oculta el mapa
  // y deja solo la dirección y el enlace a Maps.
  mapEmbedUrl: 'https://www.google.com/maps?q=Calle+123+45-67+Bogota&output=embed',
  // EJEMPLO: reemplazar por datos reales del cliente
  hours: [
    { days: 'Lunes a viernes', time: '8:00 a. m. – 6:00 p. m.' },
    { days: 'Sábados', time: '9:00 a. m. – 1:00 p. m.' },
    { days: 'Domingos y festivos', time: 'Cerrado' },
  ],
  // EJEMPLO: reemplazar por datos reales del cliente (lista vacía oculta la columna del pie de página)
  socials: [
    { label: 'Instagram', url: 'https://instagram.com/aqui-va-tu-marca' },
    { label: 'Facebook', url: 'https://facebook.com/aqui-va-tu-marca' },
  ],

  // EJEMPLO: reemplazar por la política de datos del cliente
  // Vacío ('') oculta el enlace en el pie de página y en el formulario.
  privacyPolicyUrl: 'https://www.ejemplo-aqui-va-tu-marca.com/politica-de-datos',

  // Datos para <head> (index.html): vite.config.ts los inyecta en los marcadores %CLINIC_*%.
  seo: {
    // EJEMPLO: reemplazar por datos reales del cliente (título y descripción de Google y redes)
    title: 'AQUÍ VA TU MARCA | Clínica dental en Bogotá',
    description:
      'Estética dental, ortodoncia e implantes con especialistas y tecnología de vanguardia. Agenda tu valoración por WhatsApp.',
    // EJEMPLO: reemplazar por datos reales del cliente (dominio real donde se publicará el sitio)
    siteUrl: 'https://www.ejemplo-aqui-va-tu-marca.com',
    ogImage: '/images/hero.webp',
    lang: 'es',
  },

  // Textos de la interfaz, por sección.
  nav: {
    ariaLabel: 'Navegación principal',
    openMenu: 'Abrir menú',
    closeMenu: 'Cerrar menú',
    links: [
      { label: 'Inicio', href: '#inicio' },
      { label: 'Tratamientos', href: '#tratamientos' },
      { label: 'Especialistas', href: '#especialistas' },
      { label: 'Instalaciones', href: '#instalaciones' },
      { label: 'Testimonios', href: '#testimonios' },
    ],
    cta: { label: 'Agenda tu valoración', href: '#contacto' },
  },

  hero: {
    id: 'inicio',
    title: 'Tu sonrisa merece el mejor cuidado',
    subtitle:
      'Tratamientos dentales personalizados en un ambiente cálido, con tecnología moderna y un equipo que te acompaña en cada paso.',
    whatsappLabel: 'Escríbenos por WhatsApp',
    // EJEMPLO: reemplazar por la foto del cliente (con licencia o permiso)
    image: { src: '/images/hero.webp', alt: `Fachada de la clínica ${clinicName} al atardecer, con grandes ventanales iluminados` },
  },

  trustPoints: [
    { label: 'Valoración personalizada', icon: ClipboardCheck },
    { label: 'Especialistas certificados', icon: ShieldCheck },
    { label: 'Atención con cita previa', icon: CalendarCheck },
  ] as TrustPoint[],

  // EJEMPLO: reemplazar por datos reales del cliente
  // "Pacientes atendidos" es inventado; las otras tres se calculan de src/data/ (también son de ejemplo).
  // Una cifra con value vacío ('') no se muestra; sin cifras, la banda se oculta.
  statsLabel: 'Cifras de la clínica',
  stats: [
    { value: '+5.000', label: 'Pacientes atendidos' },
    { value: maxYearsExperience ? `+${maxYearsExperience}` : '', label: 'Años de experiencia' },
    { value: specialists.length ? `+${specialists.length}` : '', label: 'Especialistas' },
    { value: testimonials.length ? averageRating.toFixed(1) : '', label: 'Calificación promedio' },
  ] as Stat[],

  treatments: {
    id: 'tratamientos',
    title: 'Nuestros tratamientos',
    subtitle: 'Soluciones completas para estrenar la sonrisa que siempre quisiste.',
    categories: [
      { id: 'estetica', title: 'Estética dental' },
      { id: 'ortodoncia', title: 'Ortodoncia' },
      { id: 'implantes', title: 'Implantes' },
    ],
  },

  howItWorks: {
    id: 'como-funciona',
    title: 'Cómo funciona',
    subtitle: 'Comenzar es sencillo: tres pasos hacia tu nueva sonrisa.',
    ctaLabel: 'Agenda tu valoración',
    steps: [
      { title: 'Escríbenos', description: 'Cuéntanos por WhatsApp qué te gustaría mejorar y elegimos un horario que te acomode.' },
      { title: 'Te valoramos', description: 'Un especialista revisa tu caso, resuelve tus dudas y te explica las opciones disponibles.' },
      { title: 'Empieza tu tratamiento', description: 'Con tu plan definido, iniciamos el tratamiento y te acompañamos en cada etapa.' },
    ],
  } as HowItWorks,

  specialists: {
    id: 'especialistas',
    title: 'Nuestros especialistas',
    subtitle: 'Profesionales con formación avanzada y trato humano.',
    experienceLabel: (years: number) => `${years} años de experiencia`,
  },

  // Bloque opcional. Pon enabled en false para ocultarlo por completo.
  financing: {
    enabled: true,
    id: 'financiamiento',
    title: 'Financia tu tratamiento',
    description: 'Consulta opciones de pago pensadas para que cuidar tu sonrisa se ajuste a tu presupuesto.',
    benefits: ['Cuotas flexibles', 'Trámite sencillo', 'Asesoría en tu valoración'],
    partnersTitle: 'Entidades aliadas',
    // EJEMPLO: reemplazar por los aliados reales del cliente. Los logos son de marcas reales: confirmar permiso de uso o quitarlos.
    // Lista vacía oculta el bloque de logos.
    partners: [
      { name: 'ADDI', logo: '/images/addi.webp', alt: 'Logo de ADDI', width: 1760, height: 990 },
      { name: 'Sistecrédito', logo: '/images/sistecredito.webp', alt: 'Logo de Sistecrédito', logoScale: 1.6, width: 554, height: 554 },
      { name: 'Banco de Bogotá', logo: '/images/banco%20de%20bogota.webp', alt: 'Logo de Banco de Bogotá', logoScale: 1.6, width: 424, height: 309 },
    ],
    disclaimer: 'La aprobación del financiamiento depende de la evaluación de cada entidad financiera. Sujeto a condiciones.',
  } as Financing,

  faqSection: {
    id: 'preguntas-frecuentes',
    title: 'Preguntas frecuentes',
    subtitle: 'Resolvemos las dudas más comunes antes de tu primera visita.',
  },

  // EJEMPLO: reemplazar por datos reales del cliente (precios, tiempos y políticas reales). Con 0 la sección se oculta.
  faq: [
    {
      question: '¿Cuánto cuesta la valoración?',
      answer: 'La valoración inicial tiene un costo accesible que te confirmamos al agendar. Incluye revisión completa y un plan de tratamiento por escrito.',
    },
    {
      question: '¿Cuánto dura un tratamiento?',
      answer: 'Depende del caso: un blanqueamiento puede terminar en una sesión, mientras que una ortodoncia toma varios meses. En tu valoración te damos un tiempo estimado.',
    },
    {
      question: '¿Los procedimientos duelen?',
      answer: 'Trabajamos con anestesia local y técnicas mínimamente invasivas para que tu experiencia sea cómoda. Si sientes molestia en cualquier momento, nos detenemos.',
    },
    {
      question: '¿Qué formas de pago aceptan?',
      answer: 'Aceptamos efectivo, tarjetas débito y crédito, transferencias y opciones de financiamiento con entidades aliadas.',
    },
    {
      question: '¿Qué pasa después de agendar?',
      answer: 'Te escribimos por WhatsApp para confirmar día y hora, y te enviamos un recordatorio antes de tu cita con las indicaciones necesarias.',
    },
  ] as FaqItem[],

  floatingWhatsAppMessage: 'Hola, vi su página web y quisiera más información.',
  floatingWhatsAppLabel: 'Escríbenos por WhatsApp',

  facilities: {
    id: 'instalaciones',
    title: 'Nuestras instalaciones',
    subtitle: 'Espacios pensados para que te sientas tranquilo y seguro.',
  },

  testimonials: {
    id: 'testimonios',
    title: 'Lo que dicen nuestros pacientes',
    subtitle: 'Historias reales de sonrisas renovadas.',
    ratingLabel: (rating: number) => `Calificación: ${rating} de 5 estrellas`,
    treatmentPrefix: 'Tratamiento:',
  },

  booking: {
    id: 'contacto',
    title: 'Agenda tu valoración',
    subtitle: 'Déjanos tus datos y te escribimos por WhatsApp para confirmar tu cita.',
    fields: {
      name: { label: 'Nombre completo', placeholder: 'Tu nombre', error: 'Escribe tu nombre para continuar' },
      phone: { label: 'Teléfono', placeholder: '300 123 4567', error: 'Escribe tu teléfono para continuar' },
      treatment: { label: 'Tratamiento de interés', placeholder: 'Selecciona una opción' },
      schedule: { label: 'Día u horario preferido', placeholder: 'Ej.: martes por la tarde' },
    },
    submitLabel: 'Enviar por WhatsApp',
    helper: 'Tus datos solo se usan para abrir la conversación en WhatsApp.',
    privacyNoticePrefix: 'Al enviar aceptas nuestra',
    privacyNoticeLinkLabel: 'política de tratamiento de datos',
    messageIntro: 'Hola, quiero agendar una valoración.',
    notProvided: 'Sin preferencia',
    contactTitle: 'Visítanos',
    addressLabel: 'Dirección',
    hoursLabel: 'Horarios',
    whatsappLinkLabel: 'Chatea directo por WhatsApp',
    mapLinkLabel: 'Ver en el mapa',
    mapTitle: `Mapa con la ubicación de la clínica ${clinicName}`,
  },

  finalCta: {
    title: 'Empieza hoy el cambio que tu sonrisa necesita',
    ctaLabel: 'Agenda tu valoración',
  } as FinalCta,

  footer: {
    contactTitle: 'Contacto',
    socialTitle: 'Síguenos',
    rights: 'Todos los derechos reservados.',
    privacyLinkLabel: 'Política de tratamiento de datos',
    socialAriaLabel: (network: string) => `${network} (se abre en una pestaña nueva)`,
  },
}
