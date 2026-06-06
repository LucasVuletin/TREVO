import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { NAV_LINKS } from "../data/siteContent";
import TrevoLogo from "./TrevoLogo";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#071614] px-4 py-2 text-white shadow-[0_14px_40px_rgba(5,18,16,0.18)] sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6">
        <a href="#inicio" className="shrink-0" aria-label="Ir al inicio" onClick={closeMenu}>
          <TrevoLogo theme="dark" compact />
        </a>

        <nav className="hidden items-center gap-5 lg:flex" aria-label="Navegación principal">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="text-sm font-medium text-white/68 transition hover:text-mint">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href="#contacto" className="hidden items-center gap-2 rounded-full bg-mint px-5 py-2.5 text-sm font-semibold text-forest-deep shadow-soft transition hover:-translate-y-0.5 hover:bg-white sm:inline-flex">
            Solicitar diagnóstico
            <ArrowUpRight className="h-4 w-4" />
          </a>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:bg-white/10 lg:hidden"
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((current) => !current)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {isOpen ? (
        <nav className="mx-auto mt-3 grid max-w-7xl gap-2 border-t border-white/10 pb-3 pt-3 lg:hidden" aria-label="Navegación móvil">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-2xl px-4 py-3 text-sm font-medium text-white/78 transition hover:bg-white/10 hover:text-mint"
              onClick={closeMenu}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contacto"
            className="mt-1 inline-flex items-center justify-center gap-2 rounded-full bg-mint px-5 py-3 text-sm font-semibold text-forest-deep"
            onClick={closeMenu}
          >
            Solicitar diagnóstico
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </nav>
      ) : null}
    </header>
  );
}

export default Header;
