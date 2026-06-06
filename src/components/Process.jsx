import { METHOD_STRIP } from "../data/siteContent";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

function Process() {
  return (
    <section id="metodo" className="scroll-mt-32 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-[2rem] bg-[#081917] px-6 py-9 text-white shadow-panel sm:px-8 lg:px-10">
        <div className="space-y-8">
          <Reveal>
            <SectionHeading
              eyebrow="Método"
              title="Cuatro pasos, sin sobredimensionar."
              description="Entendemos, priorizamos, implementamos y ajustamos junto al equipo."
              invert
            />
          </Reveal>

          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
            {METHOD_STRIP.map((step, index) => {
              const Icon = step.icon;

              return (
                <Reveal key={step.step} delay={index * 80}>
                  <article className="h-full rounded-[1.35rem] border border-white/10 bg-white/[0.06] p-5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-mint">
                      <Icon className="h-5 w-5" />
                    </div>
                    <p className="mt-5 text-xs font-semibold uppercase tracking-[0.22em] text-mint">{step.step}</p>
                    <h3 className="mt-2 font-display text-xl font-semibold text-white">{step.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-white/68">{step.description}</p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Process;
