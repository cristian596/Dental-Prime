# DENTAL PRIME — plantilla de landing para clínicas dentales

Vite + React + TypeScript + Tailwind CSS. Sin backend: el formulario abre WhatsApp con el mensaje ya escrito.

## Comandos

```bash
npm install
npm run dev      # desarrollo
npm run build    # compila a dist/
npm run lint
```

## Qué archivos editar

| Quiero cambiar… | Archivo |
| --- | --- |
| Nombre, eslogan, WhatsApp, horarios, dirección, redes, textos de cada sección, SEO | `src/config/clinic.ts` |
| Tratamientos (nombre, descripción, icono, categoría) | `src/data/treatments.ts` |
| Especialistas | `src/data/specialists.ts` |
| Fotos de instalaciones | `src/data/facilities.ts` |
| Testimonios | `src/data/testimonials.ts` |
| Colores y fuentes | `src/index.css` (bloque `@theme`) |

Los componentes de `src/components/` no contienen textos del cliente; no hace falta tocarlos para personalizar.

### Categorías de tratamientos
Se definen en `clinic.treatments.categories` (`id` + `title`). Cada tratamiento apunta a una con su campo `category`.
Los iconos son de [lucide-react](https://lucide.dev/icons): importa el que quieras en `treatments.ts`.

## Configurar WhatsApp

En `src/config/clinic.ts`, cambia `whatsappNumber` por el número en **formato internacional, solo dígitos** (sin `+`, espacios ni guiones). Ejemplo: Colombia `573001234567`, México `5215512345678`.
`whatsappDefaultMessage` es el mensaje de los botones directos. El formulario arma su propio mensaje con los datos del paciente.

## Financiamiento y "Cómo funciona"

- **Financiamiento**: en `clinic.financing`, `enabled: true` muestra el bloque (después de Especialistas) y `enabled: false` lo oculta sin dejar huecos. Edita `benefits`, `partners` (entidades aliadas) y `disclaimer` en el mismo objeto.
- **Cómo funciona**: edita `clinic.howItWorks.steps` (cada paso tiene `title` y `description`; la numeración 01, 02, 03… es automática). El título, subtítulo y texto del botón están en el mismo objeto. El botón usa `whatsappDefaultMessage`.
- **Barra de confianza del Hero**: `clinic.trustPoints` (`label` + `icon` de lucide-react).
- **Botón flotante de WhatsApp**: mensaje en `clinic.floatingWhatsAppMessage`, texto accesible en `clinic.floatingWhatsAppLabel`.

## Cambiar colores y fuentes

En `src/index.css`, dentro de `@theme`:

- `--color-brand-50 … 700`: escala de azules (acento). Cambia estos valores para otra paleta.
- `--color-ink` y `--color-ink-soft`: colores de texto.
- `--font-serif` (títulos) y `--font-sans` (texto).

Para cambiar tipografías, además elige las nuevas en [Google Fonts](https://fonts.google.com) y actualiza el enlace `fonts.googleapis.com` de `index.html`.

> Los botones usan `brand-700` (no `#4A9FD8`) porque el texto blanco sobre `#4A9FD8` no cumple el contraste WCAG AA. `brand-500` (`#4A9FD8`) se usa en acentos decorativos como las estrellas.

## Reemplazar las fotos

Sustituye los archivos de `public/images/` conservando el nombre (y mejor el formato `.webp`):

- `hero.webp` (4:3, ~800×600)
- `especialista-1.webp … 3` (6:7, ~600×700)
- `instalaciones-1.webp … 6` (4:3, ~800×600)

Si usas otros nombres o más fotos, actualiza la ruta y el texto `alt` en `clinic.ts` (hero) o en `src/data/`. Escribe siempre un `alt` descriptivo.
La imagen para redes sociales (Open Graph) se define en `clinic.seo.ogImage`.

## SEO

`index.html` toma el título, descripción, URL e imagen de `clinic.seo` mediante marcadores `%CLINIC_*%` que `vite.config.ts` sustituye al compilar. Cambia `siteUrl` por el dominio real. El favicon es `public/favicon.svg`.

## Estructura

```
src/
  config/clinic.ts     datos y textos de la clínica
  data/                tratamientos, especialistas, instalaciones, testimonios
  lib/whatsapp.ts      buildWhatsAppUrl(numero, mensaje)
  components/
    layout/            Navbar, Footer, FloatingWhatsApp
    ui/                Button, SectionTitle, Card
    sections/          Hero, Treatments, HowItWorks, Specialists, Financing, Facilities, Testimonials, BookingForm
```
