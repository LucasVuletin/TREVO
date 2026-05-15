import { ArrowRight, ArrowUpRight, BarChart3, BellRing, CheckCircle2, ClipboardList, MessageSquareMore, Wallet, Workflow } from "lucide-react";
import Reveal from "./Reveal";
import { TrevoMark } from "./TrevoLogo";

const quickModules = [
  { icon: BarChart3, label: "Reportes" },
  { icon: Workflow, label: "Procesos" },
  { icon: Wallet, label: "Cobranzas" },
  { icon: MessageSquareMore, label: "Consultas" },
];

function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-[#051210] px-4 pb-16 pt-28 text-white sm:px-6 lg:px-8 lg:pb-24 lg:pt-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_24%_18%,rgba(86,199,173,0.18),transparent_26%),radial-gradient(circle_at_86%_16%,rgba(86,199,173,0.12),transparent_24%),linear-gradient(180deg,rgba(255,255,255,0.03),transparent_42%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[42rem] bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:linear-gradient(180deg,black_0%,transparent_88%)]" />

      <div className="relative mx-auto grid min-h-[calc(100svh-7rem)] max-w-7xl items-center gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:gap-16">
        <Reveal className="max-w-2xl space-y-8">
          <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/72">
            <span className="h-2 w-2 rounded-full bg-mint" />
            Soluciones digitales para pymes en crecimiento
          </div>

          <div className="space-y-5">
            <div className="flex items-center gap-4">
              <TrevoMark theme="dark" />
              <span className="text-sm font-semibold uppercase tracking-[0.3em] text-mint">TREVO</span>
            </div>

            <h1 className="font-display text-4xl font-semibold leading-[1.02] text-white sm:text-5xl lg:text-[4.6rem]">
              Control de procesos con tecnología simple para tu pyme.
            </h1>
            <p className="max-w-xl text-lg leading-8 text-white/70 sm:text-xl">
              Dashboards, herramientas digitales y automatizaciones para optimizar tus procesos.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <a href="#contacto" className="btn-primary justify-center sm:justify-start">
              Solicitar diagnóstico
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <a href="#servicios" className="btn-secondary-dark justify-center sm:justify-start">
              Ver soluciones
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="flex flex-wrap gap-3 text-sm text-white/60">
            {["Ventas", "Stock", "Procesos", "Reportes"].map((item) => (
              <span key={item} className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
                {item}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal className="relative" delay={120}>
          <div className="relative min-h-[34rem]">
            <div className="hero-shot animate-float p-4 sm:p-5">
              <div className="overflow-hidden rounded-[1.6rem] border border-white/10 bg-[#f7faf8] text-ink">
                <div className="flex items-center justify-between border-b border-line bg-white px-5 py-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-forest text-white">
                      <BarChart3 className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-ink">Panel operativo</p>
                      <p className="text-xs text-ink-soft">Resumen semanal</p>
                    </div>
                  </div>
                  <span className="rounded-full bg-mint/18 px-3 py-1 text-xs font-semibold text-forest">En línea</span>
                </div>

                <div className="grid gap-5 p-5 lg:grid-cols-[0.72fr_1.28fr]">
                  <div className="space-y-4">
                    {[
                      { label: "Ventas", value: "$ 2.540.000", trend: "+14%" },
                      { label: "Cobranzas", value: "$ 1.920.000", trend: "+9%" },
                      { label: "Pendientes", value: "37 tareas", trend: "-18%" },
                    ].map((item) => (
                      <div key={item.label} className="rounded-[1.15rem] border border-line bg-white p-4">
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-soft">{item.label}</p>
                        <div className="mt-3 flex items-end justify-between gap-3">
                          <p className="font-display text-2xl font-semibold text-ink">{item.value}</p>
                          <span className="rounded-full bg-forest/8 px-2.5 py-1 text-xs font-semibold text-forest">{item.trend}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="rounded-[1.2rem] border border-line bg-white p-5">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-soft">Flujo de pedidos</p>
                        <p className="mt-2 text-sm text-ink-soft">Ingresos, preparación y entrega</p>
                      </div>
                      <BellRing className="h-5 w-5 text-forest" />
                    </div>
                    <div className="mt-7 h-40">
                      <svg viewBox="0 0 520 170" className="h-full w-full" preserveAspectRatio="none" aria-hidden="true">
                        <path d="M0 130 C60 116 83 86 132 96 C194 110 202 34 268 50 C329 64 335 122 398 82 C442 54 476 50 520 28" fill="none" stroke="#13483f" strokeWidth="5" strokeLinecap="round" />
                        <path d="M0 160 L0 130 C60 116 83 86 132 96 C194 110 202 34 268 50 C329 64 335 122 398 82 C442 54 476 50 520 28 L520 160 Z" fill="#56c7ad" opacity="0.18" />
                      </svg>
                    </div>
                    <div className="mt-5 grid gap-3 sm:grid-cols-4">
                      {quickModules.map((item) => {
                        const Icon = item.icon;

                        return (
                          <div key={item.label} className="rounded-[1rem] bg-surface px-3 py-3 text-center">
                            <Icon className="mx-auto h-4 w-4 text-forest" />
                            <p className="mt-2 text-xs font-medium text-ink-soft">{item.label}</p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                <div className="grid gap-3 border-t border-line bg-white px-5 py-4 sm:grid-cols-3">
                  {[
                    "Datos actualizados",
                    "Alertas automáticas",
                    "Reportes compartibles",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-sm font-medium text-ink-soft">
                      <CheckCircle2 className="h-4 w-4 text-forest" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 left-5 hidden w-56 rounded-[1.35rem] border border-white/10 bg-white p-4 text-ink shadow-panel sm:block">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-mint/20 text-forest">
                  <ClipboardList className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold">24 procesos</p>
                  <p className="text-xs text-ink-soft">ordenados este mes</p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default Hero;
