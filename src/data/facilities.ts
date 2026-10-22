interface Facility {
  id: string
  src: string
  alt: string
}

// EJEMPLO: reemplazar por datos reales del cliente (fotos propias o con licencia).
// Las tres primeras se muestran en la galería (Facilities.tsx usa slice(0, 3)).
// Con 1 o 2 fotos la galería se adapta; con 0 la sección se oculta.
export const facilities: Facility[] = [
  { id: 'instalaciones-1', src: '/images/Kennedy.webp', alt: 'Instalaciones de la clínica, foto 1' },
  { id: 'instalaciones-2', src: '/images/Teusaquillo.webp', alt: 'Instalaciones de la clínica, foto 2' },
  { id: 'instalaciones-3', src: '/images/Norte.webp', alt: 'Instalaciones de la clínica, foto 3' },
]
