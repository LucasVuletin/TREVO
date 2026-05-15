import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { METHOD_STRIP, VALUE_POINTS } from "../data/siteContent";

function WhyTrevo() {
  return (
    <section id="enfoque" className="scroll-mt-32 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-[2.6rem] bg-[#081917] px-8 py-10 text-white shadow-panel sm:px-10 sm:py-12 lg:px-14 lg:py-14">
        <div className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:gap-14">
          <Reveal>
            <div className="space-y-8">
              <SectionHeading
                eyebrow="Enfoque TREVO"
                title="Criterio operativo, solucion simple y foco en el negocio."
                description="Sin sobrecargar la operacion."
                invert
              />

              <div className="grid gap-3 sm:grid-cols-3">
                {METHOD_STRIP.map((item) => (
                  <div key={item.step} className="rounded-[1.35rem] border border-white/10 bg-white/5 px-4 py-4">
                    <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-mint">{item.step}</p>
                    <p className="mt-3 text-sm font-medium text-white/80">{item.title}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <div className="grid gap-4">
            {VALUE_POINTS.map((item, index) => (
              <Reveal key={item.title} delay={index * 60}>
                <article className="grid gap-4 rounded-[1.7rem] border border-white/10 bg-white/5 px-5 py-5 sm:grid-cols-[auto_1fr] sm:items-start">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-mint">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-semibold tracking-[-0.03em] text-white">{item.title}</h3>
                    <p className="mt-3 text-base leading-7 text-white/70">{item.description}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyTrevo;
