# Plantilla de landing para clínicas dentales

Landing de una sola página para clínicas dentales. Incluye hero, tratamientos, especialistas, instalaciones, financiamiento, cómo funciona, testimonios, preguntas frecuentes, contacto con formulario que abre WhatsApp y banda final. Está hecha con React, Vite, TypeScript y Tailwind CSS. No necesita base de datos ni servidor: al compilarla se obtiene la carpeta `dist/`, lista para publicar.

> **Todos los textos y datos son de ejemplo y deben reemplazarse.** La marca aparece como **"AQUÍ VA TU MARCA"**. En el código, el contenido de muestra está marcado con el comentario `EJEMPLO`: busca esa palabra en el proyecto para encontrar todo lo que debes cambiar.

---

## 1. Requisitos

- **Node.js 24** (el archivo `.nvmrc` lo indica). Verifica tu versión con `node -v`.
- **npm** (viene con Node.js).

## 2. Instalación y prueba local

Abre una terminal en la carpeta del proyecto y ejecuta:

```bash
npm install
npm run dev
```

La web queda en **http://localhost:5173/**. Los cambios que guardes se ven al instante. Para detenerla: `Ctrl + C`.

## 3. Comandos

| Comando | Qué hace |
| --- | --- |
| `npm run dev` | Servidor local de desarrollo. |
| `npm run build` | Revisa los tipos y compila la web. El resultado queda en `dist/`. |
| `npm run preview` | Muestra `dist/` tal como se vería publicado, por defecto en http://localhost:4173/. Ejecuta antes `npm run build`. |
| `npm run lint` | Revisa el código en busca de errores. |

## 4. Mapa de archivos

| Qué quieres cambiar | Dónde está |
| --- | --- |
| Datos de la clínica, enlaces, cifras, preguntas frecuentes, financiamiento, dirección, mapa y SEO | `src/config/clinic.ts` |
| Tratamientos | `src/data/treatments.ts` |
| Especialistas | `src/data/specialists.ts` |
| Instalaciones | `src/data/facilities.ts` |
| Testimonios | `src/data/testimonials.ts` |
| Fotos y logos | `public/images/` |
| Ícono de la pestaña | `public/favicon.svg` |
| Políticas legales | `politica-de-privacidad.html`, `politica-de-tratamiento-datos.html`, `politica-de-cookies.html` (en la raíz del proyecto) |
| Colores y fuentes | `src/index.css` (bloque `@theme`) y `index.html` (enlace de Google Fonts) |
| Google Analytics | Variable `VITE_GA_ID` (ver `.env.example`) |
| Cabeceras de seguridad y caché | `public/_headers` |
| Licencia | `LICENSE.md` |

Los componentes de `src/components/` no contienen textos del cliente: no hace falta tocarlos.

---

## 5. Cómo cambiar la marca

Casi todo se cambia en **`src/config/clinic.ts`**. Cambia el valor entre comillas y guarda.

| Campo | Qué es |
| --- | --- |
| `name` | Nombre de la clínica. Aparece en el logo, el pie de página, las descripciones de imágenes y el mapa. |
| `tagline` | Eslogan. |
| `whatsappNumber` | Número en formato internacional, **solo dígitos**, sin `+` ni espacios (Colombia: `57` + número). |
| `whatsappDefaultMessage` y `phoneDisplay` | Mensaje inicial de WhatsApp y teléfono tal como se muestra. |
| `address` | `street` (calle), `city` (ciudad) y `mapUrl` (enlace a Google Maps). |
| `seo.siteUrl` | **Dominio** final de la web, con `https://`. Ver sección 10. |

**Ejemplo, antes y después** (clínica ficticia):

```ts
// Antes
const clinicName = 'AQUÍ VA TU MARCA'
tagline: 'Sonrisas que transforman vidas',
whatsappNumber: '573001234567',
street: 'Calle 123 #45-67, Consultorio 801',
siteUrl: 'https://www.ejemplo-aqui-va-tu-marca.com',

// Después
const clinicName = 'Clínica Dental Sonríe'
tagline: 'Tu salud oral, en buenas manos',
whatsappNumber: '573109876543',
street: 'Carrera 15 #85-20, Consultorio 302',
siteUrl: 'https://www.clinicasonrie.com',
```

Otros textos del mismo archivo: horarios (`hours`), redes sociales (`socials`, lista vacía oculta la columna), `seo` (título y descripción en Google y al compartir el enlace) y los textos de cada sección.

**Lo que no lee `clinic.ts` y debes cambiar a mano:**

- `package.json`: campo `name` (solo minúsculas y guiones, por ejemplo `clinica-sonrie`).
- `public/favicon.svg`: el ícono de la pestaña. Reemplázalo por tu logo en SVG.
- `index.html`: el título, la descripción y los datos para redes salen de `clinic.ts`, así que normalmente no hay que editarlo. Solo tócalo si agregas textos fijos propios.

---

## 6. Cómo cambiar cada sección

Las secciones sin datos se ocultan solas, su enlace del menú desaparece y los fondos alternos (blanco y azul claro) se reacomodan sin huecos.

### Hero (portada)

- **Texto**: `hero.title` y `hero.subtitle` en `clinic.ts`.
- **Botones**: el principal usa `nav.cta` (por defecto "Agenda tu valoración"). El secundario abre WhatsApp y su texto es `hero.whatsappLabel`.
- **Imagen**: `public/images/hero.webp`; la ruta y el texto alternativo están en `hero.image`. Usa una foto **apaisada (horizontal), de al menos 2400 px de ancho**; la actual mide 1456 × 816 px. Si cambias la proporción, ajusta `width` y `height` de la etiqueta `<img>` en `src/components/sections/Hero.tsx`.
- Formato recomendado: WebP, idealmente por debajo de 300 KB.

### Tratamientos

- **Categorías**: `treatments.categories` en `clinic.ts` (cada una con `id`, `title` y `description`).
- **Tratamientos**: `src/data/treatments.ts`. Cada uno tiene `id`, `name`, `description`, `category`, `icon` e `image`.
  - `category` debe coincidir con el `id` de una categoría.
  - `icon` es un ícono de [lucide](https://lucide.dev/icons).
  - `image`: guarda la foto en `public/images/` y escribe su ruta en `src`, por ejemplo `/images/tratamiento-brackets.webp`, con un `alt` que describa lo que se ve. Si un tratamiento no tiene imagen, se muestra con su ícono.
- Para ocultar la sección: `treatments = []`.

### Especialistas

`src/data/specialists.ts`: nombre, especialidad, años de experiencia (`yearsExperience`) y foto (`photo`). Las fotos deben ser **del cliente, con su permiso por escrito, o de un banco de imágenes con licencia**. No uses fotos de personas reales sin permiso. La rejilla se adapta a 1, 2, 3, 4 o más especialistas. Con la lista vacía la sección se oculta.

### Instalaciones

`src/data/facilities.ts`. Se muestran **como máximo 3 fotos**, en el orden de la lista: la primera sale en grande. Con 1 o 2 fotos la galería se adapta. Con la lista vacía se oculta.

### Financiamiento

Bloque `financing` en `clinic.ts`:

- `enabled: false` oculta toda la sección.
- `benefits`: lista de beneficios.
- `partners`: entidades aliadas, con `name`, `logo` (ruta en `public/images/`), `alt`, `badge` (texto corto bajo el logo) y medidas. Lista vacía = se oculta el bloque de logos.
- `ctaLabel` y `ctaMessage`: texto del botón de consulta y mensaje que abre en WhatsApp.
- `disclaimer`: nota legal bajo la sección.

> Los logos de ADDI, Sistecrédito y Banco de Bogotá son marcas reales y están solo como ejemplo. Reemplázalos por tus aliados, con su permiso de uso, o quita la lista de aliados.

### Cómo funciona

Bloque `howItWorks` en `clinic.ts`: tres pasos (`steps`) con `title`, `description`, `icon` (`message`, `stethoscope` o `smile`) y `badge` (dato corto, por ejemplo la duración). El segundo paso incluye `firstVisitIncludes`, la lista de lo que incluye la primera consulta. `trustNote` es la línea de confianza bajo los pasos; vacía, no se muestra. Confirma los tiempos y condiciones reales de tu clínica. `steps: []` oculta la sección.

### Testimonios y preguntas frecuentes

- **Testimonios**: `src/data/testimonials.ts`. Cada uno lleva `name`, `treatment`, `text` y `rating` (entero de 1 a 5). Para agregar, copia un bloque `{ … }`; para quitar, bórralo. Usa solo testimonios reales y con autorización del paciente. Lista vacía = la sección no se muestra.
- **Preguntas frecuentes**: `faq` en `clinic.ts`, con `question` y `answer`. Pon tus precios, tiempos y políticas reales. `faq: []` oculta la sección.
- La calificación promedio y los años de experiencia de las cifras se calculan solos a partir de testimonios y especialistas.

### Contacto

El formulario (`booking` en `clinic.ts`) pide nombre, teléfono, tratamiento de interés y horario preferido. **No guarda nada**: al enviarlo abre WhatsApp con el mensaje ya armado hacia el número de `whatsappNumber`.

La **casilla de tratamiento de datos** viene **sin marcar** y es **obligatoria**: sin marcarla, el formulario no se envía. Su enlace apunta a `treatmentPolicyUrl`. No la actives por defecto.

`mapEmbedUrl` muestra el mapa. En Google Maps usa Compartir > Insertar un mapa y copia el `src` del iframe. Vacío (`''`) deja solo la dirección y el enlace a Maps.

---

## 7. Colores y tipografía

**Colores.** Están en el bloque `@theme` de `src/index.css`:

- `--color-brand-50` a `--color-brand-900`: escala del color de marca, un **azul** (de `#f4f9fd`, casi blanco, a `#0f2f4a`, azul oscuro).
- `--color-ink` (`#243447`) y `--color-ink-soft` (`#4a5b6e`): colores de texto.

Los botones usan `brand-700` porque el texto blanco sobre un tono más claro no cumple el contraste de accesibilidad. Si cambias la paleta, mantén `brand-700` lo bastante oscuro.

**Tipografía.** Títulos en **Cormorant Garamond** y texto en **Inter**, cargadas desde Google Fonts. Para cambiarlas:

1. Elige las nuevas en [fonts.google.com](https://fonts.google.com).
2. En `index.html`, reemplaza el enlace `fonts.googleapis.com` (aparece dos veces: uno normal y otro dentro de `<noscript>`).
3. En `src/index.css`, cambia `--font-serif` (títulos) y `--font-sans` (texto).

---

## 8. Políticas legales y analítica

**Archivos legales** (plantillas en la raíz del proyecto), con su ruta en la web:

| Archivo | Ruta |
| --- | --- |
| `politica-de-privacidad.html` | `/politica-de-privacidad.html` |
| `politica-de-tratamiento-datos.html` | `/politica-de-tratamiento-datos.html` |
| `politica-de-cookies.html` | `/politica-de-cookies.html` |

Reemplaza los marcadores entre corchetes (`[NOMBRE DE LA CLÍNICA]`, `[NIT O IDENTIFICACIÓN]`, `[DIRECCIÓN]`, `[CORREO DE CONTACTO]`, `[TELÉFONO]`, `[FECHA]`, `[PERIODO DE CONSERVACIÓN]`, etc.). Búscalos con `[`.

**Plazos de la Ley 1581 de 2012.** En `politica-de-tratamiento-datos.html` el marcador `[PLAZO DE RESPUESTA]` aparece dos veces. Cámbialo así:

- En la sección de **consultas**: *10 días hábiles*.
- En la sección de **reclamos**: *15 días hábiles*.

**Enlaces.** En `src/config/clinic.ts`: `privacyPolicyUrl`, `treatmentPolicyUrl` y `cookiePolicyUrl`. El pie de página muestra los que tengan valor (vacío = se oculta); `treatmentPolicyUrl` también alimenta el enlace de la casilla del formulario. Si publicas las políticas en otra dirección, cámbialas ahí.

**Banner de cookies.** Aparece hasta que el visitante elige. **Aceptar** y **Rechazar** tienen el mismo tamaño y aspecto. La elección se guarda en el navegador (clave `dp_cookie_consent`) y el botón "Configurar cookies" del pie de página lo vuelve a abrir. Los textos están en `cookieBanner` de `clinic.ts`.

**Google Analytics (opcional).**

1. Crea una propiedad de Google Analytics 4 con una cuenta **de la empresa compradora** y copia el ID de medición (`G-XXXXXXXXXX`).
2. Copia `.env.example` como `.env` y escribe `VITE_GA_ID=G-XXXXXXXXXX`. Se lee al compilar. En Cloudflare Pages va como variable de entorno.
3. Con el ID vacío no se carga nada. Con ID, el script de Google solo se añade si el visitante pulsó **Aceptar**; si rechaza, no se carga ni se guardan cookies de analítica.

> **Aviso legal.** Los textos legales son **plantillas**. El responsable del tratamiento de los datos es la clínica compradora, no el autor de la plantilla. Antes de publicar, **revísalos con tu abogado**. Consulta también si tu clínica debe **registrar sus bases de datos ante la Superintendencia de Industria y Comercio (SIC)**. Más detalle en [GUIA-CUMPLIMIENTO.md](GUIA-CUMPLIMIENTO.md).

---

## 9. Antes de publicar

- [ ] Marca y datos reales en `src/config/clinic.ts` (busca `EJEMPLO`).
- [ ] Fotos reales o con licencia. Reemplaza las de ejemplo y las que muestran el letrero "AQUÍ VA TU MARCA": `hero.webp`, `Kennedy.webp`, `Teusaquillo.webp` y `Norte.webp` en `public/images/`.
- [ ] Logos de financiamiento con permiso de uso, o sección desactivada.
- [ ] Políticas completadas (sin corchetes) y revisadas por un abogado.
- [ ] Probar el formulario y el enlace de WhatsApp con un número propio.
- [ ] Probar en el móvil: menú, formulario, banner de cookies y botón flotante de WhatsApp.
- [ ] Confirmar que la casilla de tratamiento de datos va sin marcar.
- [ ] `siteUrl` con el dominio definitivo.
- [ ] `npm run build` sin errores.

---

## 10. Dominio y publicación en Cloudflare Pages

**Dominio.** La dirección final se escribe en `seo.siteUrl` de `clinic.ts` (con `https://`). Se usa en la etiqueta canonical, en la imagen para compartir y en `robots.txt`. Puedes empezar con la dirección gratuita de Cloudflare Pages (`nombre.pages.dev`) y cambiarla después.

**Configuración de build:**

- Comando: `npm run build`
- Directorio de salida: `dist`

**Variables de entorno:** `VITE_GA_ID` solo si usas Google Analytics. Si el build falla por la versión de Node, agrega `NODE_VERSION` con valor `24`.

**Dominio propio:** cómpralo a nombre de la empresa compradora, agrégalo en **Custom domains** del proyecto de Cloudflare Pages y actualiza `siteUrl` en `clinic.ts`. El HTTPS se activa solo. Los pasos detallados están en [DESPLIEGUE-CLOUDFLARE.md](DESPLIEGUE-CLOUDFLARE.md).

**Cabeceras y caché:** `public/_headers` define las cabeceras de seguridad y mantiene en caché por un año las imágenes de `/images/`; Cloudflare Pages lo lee solo.

---

## 11. Cómo enviar el sitio a Google

1. Entra a [Google Search Console](https://search.google.com/search-console) y agrega la propiedad con la dirección completa (por ejemplo `https://www.clinicasonrie.com/`).
2. Verifica que eres el dueño con el método que Google te indique.
3. En **Inspección de URLs**, pega la dirección de la página principal y pulsa **Solicitar indexación**.
4. Google tarda de unos días a un par de semanas en mostrar la web.

La plantilla no incluye `sitemap.xml`, así que no hay mapa del sitio que enviar. El archivo `robots.txt` se genera solo al compilar y permite que Google rastree todo el sitio.

Para aparecer en Google Maps y en búsquedas locales, crea un perfil gratuito en [Google Business Profile](https://www.google.com/business/) con los mismos datos de contacto.

---

## 12. Cómo gestionar las solicitudes

Cada solicitud del formulario y cada clic en los botones de WhatsApp llega como un mensaje al número de `whatsappNumber` en `clinic.ts`.

- Instala la app gratuita **WhatsApp Business** en el teléfono de la clínica y registra ese número. Te da perfil de empresa, etiquetas y respuestas rápidas.
- **Etiquetas sugeridas:** Nueva, Valoración agendada, Tratamiento aceptado, No avanzó. Para crearlas: *Más opciones (⋮) → Herramientas de empresa → Etiquetas*.
- **Respuestas rápidas sugeridas:** confirmar cita, pedir datos, enviar indicaciones previas. Se crean en *Herramientas de empresa → Respuestas rápidas*.
- **La plantilla no guarda datos.** Cada mensaje va directo al WhatsApp de la clínica y no pasa por ningún servidor. Si necesitas un registro, llévalo en tu propia hoja de cálculo.

---

## 13. Licencia y soporte

Los términos completos están en [LICENSE.md](LICENSE.md). Resumen: licencia de **sitio único**; soporte gratuito de **6 meses** desde la entrega, con respuesta en **48 horas hábiles**; el mantenimiento posterior se contrata por separado. La jurisdicción y el centro de conciliación están en **Facatativá, Cundinamarca**.

---

## 14. Problemas comunes

- **El build falla.** Lee el mensaje: indica el archivo y la línea. Casi siempre es una comilla, llave o coma que falta en el archivo que editaste.
- **Un cambio no aparece.** Detén `npm run dev` con `Ctrl + C`, vuelve a ejecutarlo y recarga la página con `Ctrl + F5`.
- **Un comando no funciona.** Verifica `node -v` (debe ser 24) y que la terminal esté dentro de la carpeta del proyecto.
- **La web publicada se ve mal tras un cambio.** En Cloudflare Pages, pestaña *Deployments*, restaura un despliegue anterior.
