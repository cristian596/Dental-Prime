import type { LucideIcon } from 'lucide-react'
import { CalendarCheck, ClipboardCheck, ShieldCheck } from 'lucide-react'

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

export interface Financing {
  /** false: la sección no se renderiza. */
  enabled: boolean
  id: string
  title: string
  description: string
  benefits: string[]
  partnersTitle: string
  partners: string[]
  disclaimer: string
}

// Único punto de personalización del contenido de la clínica.
// Para vender la plantilla a otro cliente, edita este archivo y los de src/data/.

export const clinic = {
  name: 'DENTAL PRIME',
  tagline: 'Sonrisas que transforman vidas',
  // Formato internacional, solo dígitos, sin "+" ni espacios (VALOR DE EJEMPLO).
  whatsappNumber: '573001234567',
  whatsappDefaultMessage: 'Hola, quisiera información sobre una valoración dental.',
  phoneDisplay: '+57 300 123 4567',
  address: {
    street: 'Calle 123 #45-67, Consultorio 801',
    city: 'Bogotá, Colombia',
    mapUrl: 'https://maps.google.com/?q=Calle+123+45-67+Bogota',
  },
  hours: [
    { days: 'Lunes a viernes', time: '8:00 a. m. – 6:00 p. m.' },
    { days: 'Sábados', time: '9:00 a. m. – 1:00 p. m.' },
    { days: 'Domingos y festivos', time: 'Cerrado' },
  ],
  socials: [
    { label: 'Instagram', url: 'https://instagram.com/dentalprime' },
    { label: 'Facebook', url: 'https://facebook.com/dentalprime' },
  ],

  // Datos para <head> (index.html). EJEMPLOS: reemplázalos por los del cliente.
  seo: {
    title: 'DENTAL PRIME | Clínica dental en Bogotá',
    description:
      'Estética dental, ortodoncia e implantes con especialistas y tecnología de vanguardia. Agenda tu valoración por WhatsApp.',
    siteUrl: 'https://www.ejemplo-dentalprime.com',
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
    image: { src: '/images/hero.webp', alt: 'Fachada de la clínica DENTAL PRIME al atardecer, con grandes ventanales iluminados' },
  },

  trustPoints: [
    { label: 'Valoración personalizada', icon: ClipboardCheck },
    { label: 'Especialistas certificados', icon: ShieldCheck },
    { label: 'Atención con cita previa', icon: CalendarCheck },
  ] as TrustPoint[],

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
    partners: ['Aliado financiero 1', 'Aliado financiero 2', 'Aliado financiero 3'],
    disclaimer: 'La aprobación del financiamiento depende de la evaluación de cada entidad financiera. Sujeto a condiciones.',
  } as Financing,

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
      name: { label: 'Nombre completo', placeholder: 'Tu nombre', error: 'Escribe tu nombre.' },
      phone: { label: 'Teléfono', placeholder: '300 123 4567', error: 'Escribe tu teléfono.' },
      treatment: { label: 'Tratamiento de interés', placeholder: 'Selecciona una opción' },
      schedule: { label: 'Día u horario preferido', placeholder: 'Ej.: martes por la tarde' },
    },
    submitLabel: 'Enviar por WhatsApp',
    helper: 'Al enviar se abrirá WhatsApp con tu mensaje listo. No guardamos tus datos.',
    messageIntro: 'Hola, quiero agendar una valoración.',
    notProvided: 'Sin preferencia',
    contactTitle: 'Visítanos',
    addressLabel: 'Dirección',
    hoursLabel: 'Horarios',
    whatsappLinkLabel: 'Chatea directo por WhatsApp',
    mapLinkLabel: 'Ver en el mapa',
  },

  footer: {
    contactTitle: 'Contacto',
    socialTitle: 'Síguenos',
    rights: 'Todos los derechos reservados.',
    socialAriaLabel: (network: string) => `${network} (se abre en una pestaña nueva)`,
  },
}
