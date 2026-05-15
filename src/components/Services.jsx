import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { SERVICE_PILLARS } from "../data/siteContent";

function Services() {
  return (
    <section id="servicios" className="scroll-mt-32 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl space-y-12">
        <Reveal>
          <SectionHeading
            eyebrow="Soluciones"
            title="Herramientas digitales para gestionar con más claridad."
            description="Desde un dashboard puntual hasta un flujo completo de carga, control y reporte."
          />
        </Reveal>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {SERVICE_PILLARS.map((service, index) => {
            const Icon = service.icon;

            return (
              <Reveal key={service.title} delay={index * 70}>
                <article className="group h-full rounded-[1.7rem] border border-line bg-white/90 p-6 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-forest/25">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-forest/10 text-forest transition group-hover:bg-forest group-hover:text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-6 font-display text-2xl font-semibold text-ink">{service.title}</h3>
                  <p className="mt-3 text-base leading-7 text-ink-soft">{service.description}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Services;
