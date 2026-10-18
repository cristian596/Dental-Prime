import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
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

export default defineConfig({
  plugins: [react(), tailwindcss(), clinicHtml()],
})
