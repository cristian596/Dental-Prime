# Guía de despliegue en Cloudflare Pages

Esta guía te explica cómo publicar el sitio de tu clínica. No necesitas saber programar. Sigue los pasos en orden.

## 1. Qué necesitas

- Una cuenta de **GitHub** (recomendado) o una cuenta de **Cloudflare**.
- Una cuenta de **Cloudflare** (es gratis).
- El **proyecto descargado** en tu computador.
- Un **dominio propio** (opcional para probar, necesario para publicar).

## 2. Opción A (recomendada): conectar GitHub a Cloudflare Pages

Cada cambio que guardes en la rama principal se publica solo.

1. Sube el proyecto a un repositorio de tu cuenta de GitHub.
2. Entra al panel de Cloudflare.
3. Ve a **Workers & Pages** y crea un proyecto nuevo de tipo **Pages**.
4. Elige **Connect to Git** (conectar con Git) y autoriza tu cuenta de GitHub.
5. Selecciona el repositorio del proyecto.
6. Completa la configuración de compilación:
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
7. Revisa la versión de Node. El archivo `.nvmrc` indica **24**. Si el build falla por la versión, agrega la variable **NODE_VERSION** con valor **24** en la configuración del proyecto.
8. Agrega la variable **VITE_GA_ID** solo si la clínica usa Google Analytics. Pon allí el ID de medición de tu propia cuenta (empieza por `G-`). Si no usas Analytics, no la agregues.
9. Pulsa **Save and Deploy** (guardar y desplegar).
10. Espera a que termine. Cloudflare te dará una dirección del tipo `nombre.pages.dev`.

## 3. Opción B: subir la carpeta dist a mano (Direct Upload)

Úsala si no quieres usar GitHub.

1. En tu computador, abre una terminal en la carpeta del proyecto.
2. Ejecuta `npm install` y luego `npm run build`.
3. Se crea la carpeta `dist`.
4. En Cloudflare, ve a **Workers & Pages** y crea un proyecto de Pages con **Direct Upload** (subida directa).
5. Sube la carpeta `dist`.

**Ojo:** cada actualización requiere volver a ejecutar `npm run build` y subir la carpeta `dist` otra vez.

Si usas Google Analytics con esta opción, define `VITE_GA_ID` en tu computador antes de ejecutar el build. Las variables del panel de Cloudflare no se aplican a una carpeta ya construida.

## 4. Dominio

- **Para pruebas:** usa la dirección gratuita `nombre.pages.dev`.
- **Para publicar:** usa un dominio propio.

El dominio lo compra la clínica, **a su nombre y con su correo**. Así el control es de la clínica. La renovación anual también la paga la clínica. Si el dominio vence, el sitio deja de abrir.

## 5. Conectar el dominio

1. En el proyecto de Cloudflare Pages, abre la pestaña **Custom domains** (dominios personalizados).
2. Pulsa **Set up a custom domain** y escribe tu dominio.
3. Usa **los valores que muestre el panel**. No copies registros de otros tutoriales.
4. Guarda y espera. Puede tardar desde unos minutos hasta 24 horas.

## 6. Actualizar la dirección del sitio

Cuando cambie el dominio, edita `siteUrl` en el archivo `src/config/clinic.ts` (dentro de `seo`). Pon la dirección real, por ejemplo `https://www.tuclinica.com`.

Luego vuelve a publicar:
- Opción A: guarda el cambio en la rama principal.
- Opción B: ejecuta `npm run build` y sube `dist` otra vez.

## 7. Verificar el sitio

Revisa todo en el **celular** y en el **computador**:

- [ ] La página de inicio abre bien.
- [ ] Abren las tres políticas legales: privacidad, tratamiento de datos y cookies.
- [ ] El formulario no se envía sin marcar la casilla de autorización.
- [ ] El botón de WhatsApp abre el chat con el número correcto.
- [ ] El banner de cookies aparece y funciona.

## 8. Problemas comunes

**El build falla**
- Revisa que la versión de Node sea la 24 (variable `NODE_VERSION`).
- Lee el mensaje de error en el registro del despliegue.

**Hice un cambio y no aparece**
- Espera a que termine el despliegue.
- Limpia la caché del navegador con **Ctrl + F5**.

**Una política da error al abrirla directamente**
- Cada política es una página propia del sitio (por ejemplo `/politica-de-privacidad.html`). No requiere configuración extra.
- Revisa que escribiste la dirección completa, con `.html` al final.

**El dominio no abre**
- Espera la propagación. Puede tardar hasta 24 horas.
- Confirma que usaste los valores que muestra el panel de Cloudflare.

## 9. Volver a una versión anterior

1. En el proyecto de Cloudflare Pages, abre **Deployments** (despliegues).
2. Busca una versión que funcionaba bien.
3. Usa las opciones de esa fila para restaurarla o publicarla de nuevo.

El nombre exacto de las opciones puede variar según el panel.

## 10. Cabeceras y caché

El archivo `public/_headers` agrega cabeceras de seguridad a todo el sitio y guarda en caché por un año las imágenes de `/images/`. Cloudflare Pages lo lee solo; no tienes que configurar nada.
