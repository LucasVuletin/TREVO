import { COMMON_PROBLEMS } from "../data/siteContent";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

function Problems() {
  return (
    <section id="problemas" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl space-y-12">
        <Reveal>
          <SectionHeading
            eyebrow="Problemas comunes"
            title="Cuando la pyme crece, el desorden operativo empieza a costar."
            description="TREVO ayuda a transformar tareas sueltas en sistemas simples, medibles y fáciles de usar."
          />
        </Reveal>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {COMMON_PROBLEMS.map((problem, index) => {
            const Icon = problem.icon;

            return (
              <Reveal key={problem.title} delay={index * 70}>
                <article className="h-full rounded-[1.6rem] border border-line bg-white/90 p-6 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-forest/20">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-forest/8 text-forest">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-6 font-display text-xl font-semibold text-ink">{problem.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-ink-soft">{problem.description}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Problems;
