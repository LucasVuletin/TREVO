import { Instagram, Linkedin, Mail, MessageCircleMore } from "lucide-react";
import { TrevoMark, TrevoWordmark } from "./TrevoLogo";
import { CONTACT_CHANNELS, NAV_LINKS } from "../data/siteContent";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="px-4 pb-10 pt-2 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 border-t border-line pt-8 lg:flex-row lg:items-end lg:justify-between">
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="rounded-[1.4rem] border border-line bg-surface p-3">
              <TrevoMark />
            </div>
            <TrevoWordmark />
          </div>
          <p className="max-w-md text-base leading-7 text-ink-soft">
            Dashboards, automatización y orden operativo para pymes.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-[auto_auto]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-forest/70">Secciones</p>
            <div className="mt-4 flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <a key={link.href} href={link.href} className="text-sm text-ink-soft transition hover:text-forest">
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-forest/70">Canales</p>
            <div className="mt-4 flex flex-col gap-3 text-sm text-ink-soft">
              <a href={CONTACT_CHANNELS.WHATSAPP_URL} className="footer-link">
                <MessageCircleMore className="h-4 w-4" />
                WhatsApp
              </a>
              <a href={CONTACT_CHANNELS.INSTAGRAM_URL} className="footer-link">
                <Instagram className="h-4 w-4" />
                Instagram
              </a>
              <a href={CONTACT_CHANNELS.LINKEDIN_URL} className="footer-link">
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
              <a href={`mailto:${CONTACT_CHANNELS.EMAIL}`} className="footer-link">
                <Mail className="h-4 w-4" />
                {CONTACT_CHANNELS.EMAIL}
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-7xl text-sm text-ink-soft">© {currentYear} TREVO. Todos los derechos reservados.</div>
    </footer>
  );
}

export default Footer;
