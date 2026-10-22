import { clinic } from '../../config/clinic'
import { openCookieSettings } from '../../lib/consent'

const year = new Date().getFullYear()

export function Footer() {
  const { footer, address, hours } = clinic
  const legalLinks = [
    { label: footer.privacyLinkLabel, href: clinic.privacyPolicyUrl },
    { label: footer.treatmentLinkLabel, href: clinic.treatmentPolicyUrl },
    { label: footer.cookieLinkLabel, href: clinic.cookiePolicyUrl },
  ].filter((l) => l.href)
  return (
    <footer className="bg-ink text-white">
      <div className={`mx-auto grid max-w-7xl gap-10 px-6 pt-14 pb-28 xl:px-10 md:pb-14 ${clinic.socials.length > 0 ? 'md:grid-cols-3' : 'md:grid-cols-2'}`}>
        <div>
          <p className="font-serif text-3xl font-bold">{clinic.name}</p>
          <p className="mt-2 text-white/80">{clinic.tagline}</p>
        </div>

        <div>
          <h2 className="font-sans text-sm font-semibold text-brand-300">{footer.contactTitle}</h2>
          <address className="mt-3 space-y-1 not-italic text-white/90">
            <p>{address.street}</p>
            <p>{address.city}</p>
            <p>{clinic.phoneDisplay}</p>
            {hours.map((h) => (
              <p key={h.days} className="text-white/70">
                {h.days}: {h.time}
              </p>
            ))}
          </address>
        </div>

        {clinic.socials.length > 0 && (
        <div>
          <h2 className="font-sans text-sm font-semibold text-brand-300">{footer.socialTitle}</h2>
          <ul className="mt-3 space-y-1">
            {clinic.socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={footer.socialAriaLabel(s.label)}
                  className="text-white/90 underline-offset-4 hover:underline"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        )}
      </div>
      <div className="border-t border-white/10 px-6 py-5 text-center text-sm text-white/70">
        <p>
          © {year} {clinic.name}. {footer.rights}
        </p>
        {legalLinks.length > 0 && (
          <ul className="mt-2 flex flex-wrap justify-center gap-x-5 gap-y-1">
            {legalLinks.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/90 underline underline-offset-4 hover:text-white"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        )}
        <button
          type="button"
          onClick={openCookieSettings}
          className="mt-2 text-white/90 underline underline-offset-4 hover:text-white"
        >
          {footer.cookieSettingsLabel}
        </button>
      </div>
    </footer>
  )
}
