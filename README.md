# Plantilla de landing para clínicas dentales

Landing de una sola página lista para personalizar y publicar. Stack: Vite + React + TypeScript + Tailwind CSS. No tiene backend: el formulario abre WhatsApp con el mensaje ya escrito.

> **Todo el contenido que trae es de ejemplo** (nombre "DENTAL PRIME", teléfonos, dirección, cifras, preguntas, testimonios, fotos…). En el código está marcado con el comentario `EJEMPLO`. Busca `EJEMPLO` en el proyecto para encontrar todo lo que debes reemplazar.

```bash
npm install
npm run dev      # desarrollo en http://localhost:5173
npm run build    # compila a dist/
npm run lint
```

## a) Qué incluye la plantilla

Secciones, en este orden: Hero con enlaces de confianza, cifras, tratamientos por categoría, cómo funciona, especialistas, financiamiento (opcional), instalaciones, testimonios, preguntas frecuentes, formulario de cita con mapa y horarios, banda final con llamada a la acción, pie de página y botón flotante de WhatsApp.

Además:

- SEO básico (título, descripción, Open Graph y canonical) tomado de `clinic.seo`.
- Diseño adaptable a móvil, tableta y escritorio, sin scroll horizontal.
- Las secciones sin datos se ocultan solas, y los fondos alternos (blanco / azul claro) se reacomodan sin huecos.
- Los componentes de `src/components/` no contienen textos del cliente: no hace falta tocarlos.

## b) Lista de verificación para reemplazar datos

### `src/config/clinic.ts`

- [ ] `name` y `tagline`: nombre y eslogan de la clínica.
- [ ] `whatsappNumber` (formato internacional, solo dígitos, sin `+`: Colombia `573001234567`, México `5215512345678`), `whatsappDefaultMessage`, `phoneDisplay`.
- [ ] `address` (`street`, `city`, `mapUrl`) y `hours`.
- [ ] `mapEmbedUrl`: en Google Maps, Compartir > Insertar un mapa, y copia el `src` del iframe. Déjalo en `''` para mostrar solo la dirección y el enlace a Maps.
- [ ] `socials`: redes sociales. Lista vacía oculta la columna del pie de página.
- [ ] `seo`: `title`, `description`, `siteUrl` (el dominio real) y `ogImage`.
- [ ] `hero`: título, subtítulo, imagen y su `alt`.
- [ ] `trustPoints`, `treatments.categories`, `howItWorks.steps`, `finalCta`, `booking`, `footer` y demás textos de cada sección.
- [ ] `stats`: "pacientes atendidos" es inventado; las otras cifras se calculan de `src/data/`. Con `value: ''` una cifra se oculta.
- [ ] `faq`: preguntas y respuestas con los precios, tiempos y políticas reales.
- [ ] `financing`: `benefits`, `partners` (aliados) y `disclaimer`.

### `src/data/`

- [ ] `specialists.ts`: nombre, especialidad, años de experiencia (el número de ejemplo es 10 en todos), foto y `alt`.
- [ ] `treatments.ts`: nombre, descripción, categoría (debe coincidir con un `id` de `clinic.treatments.categories`), icono de [lucide-react](https://lucide.dev/icons) e imagen.
- [ ] `facilities.ts`: fotos de las instalaciones y su `alt`.
- [ ] `testimonials.ts`: solo testimonios reales y con autorización del paciente.

### `public/images/`

- [ ] Reemplaza todas las fotos (ver la sección e y las fotos con marca en la sección f). Los archivos de especialistas se llaman `especialista-ejemplo-N.webp`; si usas otros nombres, actualiza las rutas en `src/data/`.

## c) Cómo activar o desactivar cada sección

| Sección | Cómo se oculta |
| --- | --- |
| Cifras | Deja `value: ''` en cada cifra, o `stats: []`. |
| Tratamientos | `treatments: []` en `src/data/treatments.ts`. |
| Cómo funciona | `howItWorks.steps: []` en `clinic.ts`. |
| Especialistas | `specialists: []` en `src/data/specialists.ts`. |
| Financiamiento | `clinic.financing.enabled = false`. Con `partners: []` se oculta solo la columna de aliados. |
| Instalaciones | `facilities: []` en `src/data/facilities.ts`. |
| Testimonios | `testimonials: []` en `src/data/testimonials.ts`. |
| Preguntas frecuentes | `faq: []` en `clinic.ts`. |
| Mapa | `mapEmbedUrl: ''`. |

Al ocultar una sección, su enlace del menú desaparece y los fondos alternos se recalculan. La rejilla se adapta a la cantidad: especialistas de 1 a 4 o más, testimonios de 1 a 3 o más, instalaciones de 1 a 3 fotos (se muestran como máximo tres), cifras de 1 a 4.

## d) Cómo cambiar colores y fuentes

En `src/index.css`, dentro de `@theme`:

- `--color-brand-50 … 900`: escala del color de marca (azul por defecto).
- `--color-ink` y `--color-ink-soft`: colores de texto.
- `--font-serif` (títulos) y `--font-sans` (texto).

Para cambiar tipografías, elige las nuevas en [Google Fonts](https://fonts.google.com) y actualiza los dos enlaces `fonts.googleapis.com` de `index.html`.

Los botones usan `brand-700` y no `brand-500` porque el texto blanco sobre un tono claro no cumple el contraste WCAG AA. Si cambias la paleta, mantén `brand-700` lo bastante oscuro.

## e) Cómo reemplazar las fotos sin tocar código

Sustituye los archivos de `public/images/` **conservando el mismo nombre** y de preferencia el formato `.webp`:

- `hero.webp` (~1456×816, la imagen principal).
- Especialistas: `especialista-ejemplo-1.webp` … `especialista-ejemplo-4.webp` (proporción 4:5, ~600×750).
- Instalaciones: `Kennedy.webp`, `Teusaquillo.webp`, `Norte.webp` (4:3, ~800×600).
- Tratamientos: `tratamiento-*.webp` (4:3, ~1232×928).

Si prefieres nombres propios o más fotos, actualiza la ruta y el `alt` en `clinic.ts` (hero) o en `src/data/`. Escribe siempre un `alt` descriptivo. La imagen para redes sociales (Open Graph) es `clinic.seo.ogImage`.

> **Importante sobre las fotos de ejemplo:** las fotos de especialistas, instalaciones y tratamientos incluidas son de muestra. Deben reemplazarse por fotos del comprador, con su permiso por escrito (y el de las personas que aparecen), o por imágenes con licencia. No publiques la plantilla con las fotos de ejemplo.

## f) Antes de publicar

> Esta plantilla no sustituye asesoría legal ni sanitaria. Verifica los requisitos vigentes en tu país.

- [ ] **a) Habilitación y registros:** confirmar la habilitación de la Secretaría de Salud correspondiente y los registros de cada profesional. No muestres títulos o especialidades que no puedas acreditar.
- [ ] **b) Protección de datos:** publicar la política de tratamiento de datos (en Colombia, Ley 1581 de 2012) y poner su URL en `privacyPolicyUrl` de `src/config/clinic.ts` (se enlaza sola en el footer y el formulario; vacío oculta ambos enlaces). El formulario no guarda datos (abre WhatsApp), pero la clínica trata los que reciba por ese chat.
- [ ] **c) Fotos:** contar con permiso escrito de cada persona retratada o usar imágenes con licencia. Esto incluye especialistas, instalaciones, tratamientos y hero.
- [ ] **d) Precios y financiamiento:** confirmar que los aliados y condiciones son reales y que autorizaron el uso de su nombre. Revisa también precios, plazos y promociones de las preguntas frecuentes. Si no hay convenios, desactiva la sección (`financing.enabled = false`).
- [ ] **e) Marca:** reemplazar el nombre, el logo y los colores (el logo actual es el nombre en texto y `public/favicon.svg`).
- [ ] Testimonios reales y con autorización escrita de los pacientes.
- [ ] Teléfono, WhatsApp, dirección, horarios y redes probados uno por uno.

### Fotos de ejemplo que contienen la marca

Estas imágenes muestran el letrero "DENTAL PRIME" y deben cambiarse antes de publicar:

- `public/images/Kennedy.webp`: reemplazar: muestra la marca de ejemplo (letrero grande).
- `public/images/Teusaquillo.webp`: reemplazar: muestra la marca de ejemplo.
- `public/images/Norte.webp`: reemplazar: muestra la marca de ejemplo.
- `public/images/hero.webp`: reemplazar: muestra la marca de ejemplo.

## g) Cómo desplegar el sitio

1. Ajusta `clinic.seo.siteUrl` al dominio real.
2. Ejecuta `npm install` y luego `npm run build`. La carpeta `dist/` es el sitio completo (HTML, CSS, JS e imágenes estáticos).
3. Sube el **contenido** de `dist/` a un hosting estático: Netlify, Vercel, Cloudflare Pages, GitHub Pages o un hosting tradicional (carpeta `public_html`).
   - En Netlify, Vercel y Cloudflare Pages también puedes conectar el repositorio con comando `npm run build` y carpeta de salida `dist`.
4. Configura el dominio: en tu proveedor de dominio apunta los registros DNS (CNAME o A, según indique el hosting) al servicio elegido.
5. Activa HTTPS (certificado gratuito en la mayoría de hostings) y fuerza la redirección de `http` a `https`.
6. Antes de anunciarlo, revisa la página en el móvil y comprueba el botón de WhatsApp con el número real.

## Estructura

```
src/
  config/clinic.ts     datos y textos de la clínica
  data/                tratamientos, especialistas, instalaciones, testimonios
  lib/sections.ts      qué secciones se muestran según los datos
  lib/whatsapp.ts      buildWhatsAppUrl(numero, mensaje)
  components/
    layout/            Navbar, Footer, FloatingWhatsApp
    ui/                Button, SectionTitle, Card, Container, Section, Accordion
    sections/          Hero, Stats, Treatments, HowItWorks, Specialists, Financing, Facilities, Testimonials, Faq, BookingForm, FinalCta
index.html             plantilla del <head>; vite.config.ts inyecta clinic.seo en los marcadores %CLINIC_*%
```
