import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { FOUNDER_PROFILES } from "../data/siteContent";

function WhyTrevo() {
  return (
    <section id="nosotros" className="scroll-mt-32 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <Reveal>
          <SectionHeading
            eyebrow="Nosotros"
            title={
              <>
                Tu empresa ya funciona.
                <br />
                TREVO te muestra dónde puede funcionar mejor.
              </>
            }
            description="Entramos en tu operación, entendemos cómo trabajás y detectamos dónde se pierde tiempo, plata e información. Después lo convertimos en herramientas simples para mejorar cada día."
          />
        </Reveal>

        <Reveal>
          <div className="grid gap-3 sm:grid-cols-2">
            {FOUNDER_PROFILES.map((founder) => (
              <article key={founder.name} className="rounded-[1.35rem] border border-line bg-white/90 p-4 shadow-soft">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-forest text-sm font-bold text-white">
                    {founder.initials}
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-ink">{founder.name}</h3>
                    <p className="mt-1 text-sm leading-6 text-ink-soft">{founder.role}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default WhyTrevo;
