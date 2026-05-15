import { CheckCircle2 } from "lucide-react";
import { SERVICE_PACKAGES } from "../data/siteContent";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

function Packages() {
  return (
    <section id="paquetes" className="scroll-mt-32 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl space-y-12">
        <Reveal>
          <SectionHeading
            eyebrow="Paquetes"
            title="Servicios claros para empezar por donde más impacto genera."
            description="Cada propuesta se adapta al tamaño, urgencia y madurez digital de la empresa."
          />
        </Reveal>

        <div className="grid gap-5 lg:grid-cols-3">
          {SERVICE_PACKAGES.map((plan, index) => (
            <Reveal key={plan.name} delay={index * 80}>
              <article className={`relative h-full rounded-[1.9rem] border p-6 shadow-soft ${plan.featured ? "border-forest bg-forest text-white" : "border-line bg-white/90 text-ink"}`}>
                <div className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${plan.featured ? "bg-mint text-forest-deep" : "bg-forest/8 text-forest"}`}>
                  {plan.label}
                </div>
                <h3 className="mt-6 font-display text-2xl font-semibold">{plan.name}</h3>
                <p className={`mt-3 text-sm leading-7 ${plan.featured ? "text-white/68" : "text-ink-soft"}`}>{plan.description}</p>
                <p className="mt-7 font-display text-3xl font-semibold">{plan.price}</p>

                <div className="mt-7 space-y-3">
                  {plan.features.map((feature) => (
                    <div key={feature} className={`flex items-center gap-3 text-sm ${plan.featured ? "text-white/78" : "text-ink-soft"}`}>
                      <CheckCircle2 className={`h-5 w-5 shrink-0 ${plan.featured ? "text-mint" : "text-forest"}`} />
                      {feature}
                    </div>
                  ))}
                </div>

                <a href="#contacto" className={`mt-8 inline-flex w-full items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition hover:-translate-y-0.5 ${plan.featured ? "bg-white text-forest" : "bg-forest text-white hover:bg-forest-deep"}`}>
                  Consultar paquete
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Packages;
