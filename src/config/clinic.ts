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

  specialists: {
    id: 'especialistas',
    title: 'Nuestros especialistas',
    subtitle: 'Profesionales con formación avanzada y trato humano.',
    experienceLabel: (years: number) => `${years} años de experiencia`,
  },

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
