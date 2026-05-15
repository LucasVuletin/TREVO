import { ArrowUpRight, Menu } from "lucide-react";
import { NAV_LINKS } from "../data/siteContent";
import TrevoLogo from "./TrevoLogo";

function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#071614]/88 px-4 py-2 text-white backdrop-blur-xl sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6">
        <a href="#inicio" className="shrink-0" aria-label="Ir al inicio">
          <TrevoLogo theme="dark" compact />
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Navegación principal">
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
          <button className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white lg:hidden" aria-label="Abrir menú">
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
