import type { LucideIcon } from 'lucide-react'
import { Crown, Gem, Layers, Smile, SmilePlus, Sparkles, Syringe, Bone } from 'lucide-react'

export interface Treatment {
  id: string
  name: string
  description: string
  /** Debe coincidir con un id de clinic.treatments.categories */
  category: string
  icon: LucideIcon
}

export const treatments: Treatment[] = [
  {
    id: 'blanqueamiento',
    name: 'Blanqueamiento dental',
    description: 'Aclara el tono de tus dientes varios niveles de forma segura y sin sensibilidad.',
    category: 'estetica',
    icon: Sparkles,
  },
  {
    id: 'carillas',
    name: 'Carillas de porcelana',
    description: 'Láminas ultrafinas que corrigen forma, color y alineación con resultado natural.',
    category: 'estetica',
    icon: Gem,
  },
  {
    id: 'diseno-sonrisa',
    name: 'Diseño de sonrisa',
    description: 'Plan personalizado que armoniza tus dientes con tu rostro y tu personalidad.',
    category: 'estetica',
    icon: Smile,
  },
  {
    id: 'brackets',
    name: 'Brackets metálicos y estéticos',
    description: 'Alinean tus dientes con control preciso, en versión metálica o de zafiro discreto.',
    category: 'ortodoncia',
    icon: Layers,
  },
  {
    id: 'alineadores',
    name: 'Alineadores invisibles',
    description: 'Férulas transparentes y removibles para corregir tu mordida con comodidad.',
    category: 'ortodoncia',
    icon: SmilePlus,
  },
  {
    id: 'implante-unitario',
    name: 'Implante unitario',
    description: 'Reemplaza un diente perdido con una raíz de titanio y una corona a tu medida.',
    category: 'implantes',
    icon: Syringe,
  },
  {
    id: 'rehabilitacion-total',
    name: 'Rehabilitación total',
    description: 'Recupera toda tu dentadura fija con implantes y prótesis de alta durabilidad.',
    category: 'implantes',
    icon: Crown,
  },
  {
    id: 'injerto-oseo',
    name: 'Injerto óseo',
    description: 'Regeneración del hueso para que puedas recibir implantes con total seguridad.',
    category: 'implantes',
    icon: Bone,
  },
]
