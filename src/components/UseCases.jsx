import { Check } from "lucide-react";
import { INDUSTRY_LIST, INDUSTRY_USE_CASES } from "../data/siteContent";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

function UseCases() {
  return (
    <section id="industrias" className="scroll-mt-32 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl space-y-12">
        <Reveal>
          <SectionHeading
            eyebrow="Casos de uso"
            title="Aplicado a la operación diaria de distintos tipos de empresas."
            description="La tecnología funciona cuando baja a procesos concretos: vender, entregar, cobrar, producir y reportar."
          />
        </Reveal>

        <div className="grid gap-4 lg:grid-cols-2">
          {INDUSTRY_USE_CASES.map((useCase, index) => {
            const Icon = useCase.icon;

            return (
              <Reveal key={useCase.industry} delay={index * 80}>
                <article className="grid h-full gap-6 rounded-[1.8rem] border border-line bg-white/90 p-6 shadow-soft sm:grid-cols-[auto_1fr]">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-mint/18 text-forest">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-forest/70">{useCase.industry}</p>
                    <h3 className="mt-3 font-display text-2xl font-semibold text-ink">{useCase.title}</h3>
                    <div className="mt-5 grid gap-3 sm:grid-cols-3">
                      {useCase.items.map((item) => (
                        <div key={item} className="flex items-center gap-2 text-sm text-ink-soft">
                          <Check className="h-4 w-4 shrink-0 text-forest" />
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={120}>
          <div className="space-y-5">
            <div className="flex flex-wrap gap-3">
              {INDUSTRY_LIST.map((industry) => (
                <span key={industry} className="rounded-full border border-line bg-white/80 px-4 py-2 text-sm font-medium text-ink-soft">
                  {industry}
                </span>
              ))}
              <span className="rounded-full border border-forest/20 bg-forest/8 px-4 py-2 text-sm font-semibold text-forest">
                Y otros negocios con procesos por ordenar
              </span>
            </div>
            <p className="max-w-3xl text-base leading-7 text-ink-soft">
              Desde una empresa chica que está armando sus primeros controles hasta una operación con varios equipos, el punto de partida es el mismo: entender cómo fluye el trabajo y qué información falta para decidir mejor.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default UseCases;
