export interface Facility {
  id: string
  src: string
  alt: string
}

// Las tres primeras se muestran en la galería (Facilities.tsx usa slice(0, 3)).
export const facilities: Facility[] = [
  { id: 'sede-kennedy', src: '/images/Kennedy.webp', alt: 'Sede Kennedy de DENTAL PRIME' },
  { id: 'sede-teusaquillo', src: '/images/Teusaquillo.webp', alt: 'Sede Teusaquillo de DENTAL PRIME' },
  { id: 'sede-norte', src: '/images/Norte.webp', alt: 'Sede Norte de DENTAL PRIME' },
]
