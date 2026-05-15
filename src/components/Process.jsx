import { METHOD_STRIP } from "../data/siteContent";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

function Process() {
  return (
    <section id="metodo" className="scroll-mt-32 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-[2.4rem] bg-[#081917] px-6 py-10 text-white shadow-panel sm:px-8 lg:px-12 lg:py-14">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <Reveal>
            <SectionHeading
              eyebrow="Método"
              title="Cuatro pasos para pasar del diagnóstico a una solución usable."
              description="Trabajamos con entregas claras, alcance definido y foco en adopción real."
              invert
            />
          </Reveal>

          <div className="grid gap-4">
            {METHOD_STRIP.map((step, index) => {
              const Icon = step.icon;

              return (
                <Reveal key={step.step} delay={index * 80}>
                  <article className="grid gap-5 rounded-[1.5rem] border border-white/10 bg-white/[0.06] p-5 sm:grid-cols-[auto_1fr]">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-mint">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-mint">{step.step}</p>
                      <h3 className="mt-2 font-display text-2xl font-semibold text-white">{step.title}</h3>
                      <p className="mt-3 text-base leading-7 text-white/68">{step.description}</p>
                    </div>
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
