import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import { clinic } from './src/config/clinic.ts'

// Sustituye los marcadores %CLINIC_*% de index.html por los valores de src/config/clinic.ts.
const escapeAttr = (value: string) => value.replace(/&/g, '&amp;').replace(/"/g, '&quot;')

function clinicHtml() {
  const { seo } = clinic
  const values: Record<string, string> = {
    CLINIC_LANG: seo.lang,
    CLINIC_TITLE: seo.title,
    CLINIC_DESCRIPTION: seo.description,
    CLINIC_URL: seo.siteUrl,
    CLINIC_OG_IMAGE: new URL(seo.ogImage, seo.siteUrl).href,
    CLINIC_NAME: clinic.name,
  }
  return {
    name: 'clinic-html',
    transformIndexHtml: (html: string) =>
      html.replace(/%(CLINIC_[A-Z_]+)%/g, (_, key: string) => escapeAttr(values[key] ?? '')),
  }
}

// Genera robots.txt con la URL de src/config/clinic.ts (sin hardcodear). Descomenta Sitemap al publicar sitemap.xml.
function clinicRobots() {
  const body = `User-agent: *\nAllow: /\n\n# Sitemap: ${new URL('/sitemap.xml', clinic.seo.siteUrl).href}\n`
  return {
    name: 'clinic-robots',
    configureServer(server: {
      middlewares: {
        use: (path: string, fn: (req: unknown, res: { setHeader: (k: string, v: string) => void; end: (b: string) => void }) => void) => void
      }
    }) {
      server.middlewares.use('/robots.txt', (_req, res) => {
        res.setHeader('Content-Type', 'text/plain; charset=utf-8')
        res.end(body)
      })
    },
    generateBundle(this: { emitFile: (f: { type: 'asset'; fileName: string; source: string }) => void }) {
      this.emitFile({ type: 'asset', fileName: 'robots.txt', source: body })
    },
  }
}

export default defineConfig({
  plugins: [react(), tailwindcss(), clinicHtml(), clinicRobots()],
  // Páginas legales estáticas (HTML + Tailwind, sin React) además de index.html.
  build: {
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, 'index.html'),
        privacidad: resolve(import.meta.dirname, 'politica-de-privacidad.html'),
        tratamientoDatos: resolve(import.meta.dirname, 'politica-de-tratamiento-datos.html'),
        cookies: resolve(import.meta.dirname, 'politica-de-cookies.html'),
      },
    },
  },
})
