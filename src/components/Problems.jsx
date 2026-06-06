import { COMMON_PROBLEMS, SERVICE_PILLARS } from "../data/siteContent";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

function Problems() {
  return (
    <section id="diagnostico" className="scroll-mt-32 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl space-y-10">
        <Reveal>
          <SectionHeading
            eyebrow="Diagnóstico"
            title="Lo que suele trabar la operación, y cómo lo ordenamos."
            description="Una lectura rápida de los dolores más comunes y las herramientas simples que usamos para resolverlos."
          />
        </Reveal>

        <div className="grid gap-8 lg:grid-cols-2">
          <Column title="Problemas comunes" items={COMMON_PROBLEMS} tone="light" />
          <Column title="Soluciones TREVO" items={SERVICE_PILLARS} tone="accent" />
        </div>
      </div>
    </section>
  );
}

function Column({ title, items, tone }) {
  return (
    <Reveal>
      <div className="space-y-4">
        <h3 className="font-display text-2xl font-semibold text-ink">{title}</h3>
        <div className="divide-y divide-line overflow-hidden rounded-[1.6rem] border border-line bg-white/88 shadow-soft">
          {items.map((item) => {
            const Icon = item.icon;
            const iconClass = tone === "accent" ? "bg-forest text-white" : "bg-forest/8 text-forest";

            return (
              <article key={item.title} className="grid gap-4 p-5 sm:grid-cols-[auto_1fr]">
                <div className={`flex h-11 w-11 items-center justify-center rounded-2xl ${iconClass}`}>
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-display text-lg font-semibold text-ink">{item.title}</h4>
                  <p className="mt-1 text-sm leading-6 text-ink-soft">{item.description}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </Reveal>
  );
}

export default Problems;
