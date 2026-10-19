export interface Specialist {
  id: string
  name: string
  specialty: string
  yearsExperience: number
  photo: { src: string; alt: string }
}

// EJEMPLO: reemplazar por datos reales del cliente.
// Agrega o quita especialistas libremente: con 0 la sección se oculta; la rejilla se ajusta de 1 a 4 o más.
// Las fotos deben ser del cliente, con su permiso por escrito, o imágenes con licencia.
export const specialists: Specialist[] = [
  {
    id: 'especialista-1',
    name: 'Nombre del especialista',
    specialty: 'Especialidad del especialista',
    // EJEMPLO: reemplazar
    yearsExperience: 10,
    // EJEMPLO: reemplazar por fotos del cliente, sin rostros de personas reales
    photo: { src: '/images/especialista-ejemplo-1.webp', alt: 'Retrato de Nombre del especialista' },
  },
  {
    id: 'especialista-2',
    name: 'Nombre del especialista 2',
    specialty: 'Especialidad del especialista',
    // EJEMPLO: reemplazar
    yearsExperience: 10,
    // EJEMPLO: reemplazar por fotos del cliente, sin rostros de personas reales
    photo: { src: '/images/especialista-ejemplo-2.webp', alt: 'Retrato de Nombre del especialista 2' },
  },
  {
    id: 'especialista-3',
    name: 'Nombre del especialista 3',
    specialty: 'Especialidad del especialista',
    // EJEMPLO: reemplazar
    yearsExperience: 10,
    // EJEMPLO: reemplazar por fotos del cliente, sin rostros de personas reales
    photo: { src: '/images/especialista-ejemplo-3.webp', alt: 'Retrato de Nombre del especialista 3' },
  },
  {
    id: 'especialista-4',
    name: 'Nombre del especialista 4',
    specialty: 'Especialidad del especialista',
    // EJEMPLO: reemplazar
    yearsExperience: 10,
    // EJEMPLO: reemplazar por fotos del cliente, sin rostros de personas reales
    photo: { src: '/images/especialista-ejemplo-4.webp', alt: 'Retrato de Nombre del especialista 4' },
  },
]
