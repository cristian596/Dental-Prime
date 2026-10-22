import type { LucideIcon } from 'lucide-react'
import { Crown, Gem, Layers, Smile, SmilePlus, Sparkles, Syringe, Bone } from 'lucide-react'

interface Treatment {
  id: string
  name: string
  description: string
  /** Debe coincidir con un id de clinic.treatments.categories */
  category: string
  icon: LucideIcon
  image?: { src: string; alt: string }
}

// EJEMPLO: reemplazar por datos reales del cliente. Las fotos de tratamientos deben tener licencia o permiso.
export const treatments: Treatment[] = [
  {
    id: 'blanqueamiento',
    name: 'Blanqueamiento dental',
    description: 'Aclara el tono de tus dientes varios niveles de forma segura y sin sensibilidad.',
    category: 'estetica',
    icon: Sparkles,
    image: {
      src: '/images/tratamiento-blanqueamiento.webp',
      alt: 'Odontólogo mostrando a un paciente su sonrisa tras un blanqueamiento dental',
    },
  },
  {
    id: 'carillas',
    name: 'Carillas de porcelana',
    description: 'Láminas ultrafinas que corrigen forma, color y alineación con resultado natural.',
    category: 'estetica',
    icon: Gem,
    image: {
      src: '/images/tratamiento-carillas.webp',
      alt: 'Primer plano de una sonrisa con carillas de porcelana de aspecto natural',
    },
  },
  {
    id: 'diseno-sonrisa',
    name: 'Diseño de sonrisa',
    description: 'Plan personalizado que armoniza tus dientes con tu rostro y tu personalidad.',
    category: 'estetica',
    icon: Smile,
    image: {
      src: '/images/tratamiento-diseno-sonrisa.webp',
      alt: 'Odontólogo planificando el diseño de sonrisa junto a una paciente',
    },
  },
  {
    id: 'brackets',
    name: 'Brackets metálicos y estéticos',
    description: 'Alinean tus dientes con control preciso, en versión metálica o de zafiro discreto.',
    category: 'ortodoncia',
    icon: Layers,
    image: {
      src: '/images/tratamiento-brackets.webp',
      alt: 'Primer plano de dientes con brackets metálicos y estéticos',
    },
  },
  {
    id: 'alineadores',
    name: 'Alineadores invisibles',
    description: 'Férulas transparentes y removibles para corregir tu mordida con comodidad.',
    category: 'ortodoncia',
    icon: SmilePlus,
    image: {
      src: '/images/tratamiento-alineadores.webp',
      alt: 'Mano sosteniendo un alineador transparente invisible',
    },
  },
  {
    id: 'implante-unitario',
    name: 'Implante unitario',
    description: 'Reemplaza un diente perdido con una raíz de titanio y una corona a tu medida.',
    category: 'implantes',
    icon: Syringe,
    image: {
      src: '/images/tratamiento-implante-unitario.webp',
      alt: 'Modelo de un implante dental unitario de titanio con su corona',
    },
  },
  {
    id: 'rehabilitacion-total',
    name: 'Rehabilitación total',
    description: 'Recupera toda tu dentadura fija con implantes y prótesis de alta durabilidad.',
    category: 'implantes',
    icon: Crown,
    image: {
      src: '/images/tratamiento-rehabilitacion.webp',
      alt: 'Paciente sonriendo tras una rehabilitación total con implantes',
    },
  },
  {
    id: 'injerto-oseo',
    name: 'Injerto óseo',
    description: 'Regeneración del hueso para que puedas recibir implantes con total seguridad.',
    category: 'implantes',
    icon: Bone,
    image: {
      src: '/images/tratamiento-injerto-oseo.webp',
      alt: 'Odontólogo explicando a un paciente el injerto óseo sobre una radiografía',
    },
  },
]
