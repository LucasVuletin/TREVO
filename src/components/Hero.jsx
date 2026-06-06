import { useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight, BarChart3, BellRing, MessageSquareMore, PackageCheck, Wallet, Workflow } from "lucide-react";
import Reveal from "./Reveal";
import { TrevoMark } from "./TrevoLogo";

const industrySamples = [
  {
    industry: "Comercio",
    title: "Ventas y stock",
    subtitle: "Pedidos, cobranzas y reposición",
    metrics: [
      { label: "Pedidos", value: "124", trend: "+14%" },
      { label: "Stock crítico", value: "8 ítems", trend: "-22%" },
      { label: "Cobranzas", value: "86% al día", trend: "+9%" },
    ],
    chartTitle: "Flujo de ventas",
    chartSubtitle: "Ingreso, cobro y reposición",
    modules: [
      { icon: BarChart3, label: "Ventas" },
      { icon: PackageCheck, label: "Stock" },
      { icon: Wallet, label: "Cobros" },
      { icon: BellRing, label: "Alertas" },
    ],
    path: "M0 128 C52 116 86 86 132 96 C188 108 214 42 270 54 C328 66 344 124 398 84 C442 52 482 48 520 30",
  },
  {
    industry: "Industria",
    title: "Producción y tareas",
    subtitle: "Órdenes, etapas y productividad",
    metrics: [
      { label: "Órdenes", value: "42 activas", trend: "+11%" },
      { label: "Retrabajos", value: "6 casos", trend: "-18%" },
      { label: "Entrega", value: "91% a tiempo", trend: "+7%" },
    ],
    chartTitle: "Avance por etapa",
    chartSubtitle: "Planificación, producción y despacho",
    modules: [
      { icon: Workflow, label: "Etapas" },
      { icon: PackageCheck, label: "Insumos" },
      { icon: BarChart3, label: "Rinde" },
      { icon: BellRing, label: "Desvíos" },
    ],
    path: "M0 138 C44 130 78 118 120 86 C172 46 214 76 258 104 C310 138 356 92 398 70 C448 44 480 60 520 42",
  },
  {
    industry: "Servicios",
    title: "Agenda y seguimiento",
    subtitle: "Solicitudes, estados e incidencias",
    metrics: [
      { label: "Servicios", value: "37 abiertos", trend: "-12%" },
      { label: "Respuesta", value: "2.4 hs", trend: "-28%" },
      { label: "Pendientes", value: "11 tareas", trend: "-16%" },
    ],
    chartTitle: "Circuito de atención",
    chartSubtitle: "Pedido, asignación y cierre",
    modules: [
      { icon: MessageSquareMore, label: "Pedidos" },
      { icon: Workflow, label: "Estados" },
      { icon: BellRing, label: "Avisos" },
      { icon: BarChart3, label: "Reportes" },
    ],
    path: "M0 118 C42 80 84 70 130 94 C176 118 216 130 258 96 C302 60 346 54 386 86 C428 118 474 98 520 56",
  },
  {
    industry: "Agro",
    title: "Campo y operaciones",
    subtitle: "Tareas, insumos y control semanal",
    metrics: [
      { label: "Lotes", value: "18 seguidos", trend: "+10%" },
      { label: "Insumos", value: "5 alertas", trend: "-15%" },
      { label: "Partes", value: "92% cargado", trend: "+21%" },
    ],
    chartTitle: "Plan operativo",
    chartSubtitle: "Campo, insumos y partes diarios",
    modules: [
      { icon: Workflow, label: "Tareas" },
      { icon: PackageCheck, label: "Insumos" },
      { icon: BarChart3, label: "Partes" },
      { icon: BellRing, label: "Alertas" },
    ],
    path: "M0 142 C48 98 82 108 126 120 C174 134 206 86 252 66 C300 44 336 80 382 92 C430 106 472 70 520 36",
  },
];

function Hero() {
  const [activeSampleIndex, setActiveSampleIndex] = useState(0);
  const activeSample = industrySamples[activeSampleIndex];
  const activeAreaPath = `${activeSample.path.replace(/^M0\s+\d+/, "M0 160 L0 142")} L520 160 Z`;

  const showPreviousSample = () => {
    setActiveSampleIndex((current) => (current === 0 ? industrySamples.length - 1 : current - 1));
  };

  const showNextSample = () => {
    setActiveSampleIndex((current) => (current + 1) % industrySamples.length);
  };

  return (
    <section id="inicio" className="relative overflow-hidden bg-[#051210] px-4 pb-16 pt-28 text-white sm:px-6 lg:px-8 lg:pb-24 lg:pt-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_24%_18%,rgba(86,199,173,0.18),transparent_26%),radial-gradient(circle_at_86%_16%,rgba(86,199,173,0.12),transparent_24%),linear-gradient(180deg,rgba(255,255,255,0.03),transparent_42%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[42rem] bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:linear-gradient(180deg,black_0%,transparent_88%)]" />

      <div className="relative mx-auto grid min-h-[calc(100svh-7rem)] max-w-7xl items-center gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:gap-16">
        <Reveal className="max-w-2xl space-y-8">
          <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/72">
            <span className="h-2 w-2 rounded-full bg-mint" />
            Diagnóstico operativo
          </div>

          <div className="space-y-5">
            <div className="flex items-center gap-4">
              <TrevoMark theme="dark" />
              <span className="text-sm font-semibold uppercase tracking-[0.3em] text-mint">TREVO</span>
            </div>

            <h1 className="font-display text-4xl font-semibold leading-[1.02] text-white sm:text-5xl lg:text-[4.25rem]">
              Ordenamos tu operación con datos claros.
            </h1>
            <p className="max-w-xl text-lg leading-8 text-white/70 sm:text-xl">
              Procesos, dashboards y automatizaciones simples para que tu equipo trabaje con más claridad.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <a href="#contacto" className="btn-primary justify-center sm:justify-start">
              Solicitar diagnóstico
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <a href="#diagnostico" className="btn-secondary-dark justify-center sm:justify-start">
              Ver diagnóstico
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </Reveal>

        <Reveal className="relative" delay={120}>
          <div className="relative min-h-[28rem]">
            <div className="hero-shot animate-float p-3 sm:p-4">
              <div className="overflow-hidden rounded-[1.6rem] border border-white/10 bg-[#f7faf8] text-ink">
                <div className="flex flex-col gap-3 border-b border-line bg-white px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-forest text-white">
                      <BarChart3 className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-ink">Panel operativo</p>
                      <p className="text-xs text-ink-soft">{activeSample.industry} · {activeSample.subtitle}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-line bg-surface text-forest transition hover:bg-mint/20"
                      aria-label="Ver muestra anterior"
                      onClick={showPreviousSample}
                    >
                      <ArrowLeft className="h-4 w-4" />
                    </button>
                    <button
                      type="button"
                      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-line bg-surface text-forest transition hover:bg-mint/20"
                      aria-label="Ver siguiente muestra"
                      onClick={showNextSample}
                    >
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                <div className="grid gap-4 p-4 lg:grid-cols-[0.72fr_1.28fr]" aria-live="polite">
                  <div className="space-y-3">
                    <div className="rounded-[1.15rem] border border-line bg-forest p-3.5 text-white">
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-mint">{activeSample.industry}</p>
                      <p className="mt-2 font-display text-xl font-semibold">{activeSample.title}</p>
                    </div>
                    {activeSample.metrics.map((item) => (
                      <div key={item.label} className="rounded-[1.15rem] border border-line bg-white p-3.5">
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-soft">{item.label}</p>
                        <div className="mt-2 flex items-end justify-between gap-3">
                          <p className="font-display text-xl font-semibold text-ink">{item.value}</p>
                          <span className="rounded-full bg-forest/8 px-2.5 py-1 text-xs font-semibold text-forest">{item.trend}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="rounded-[1.2rem] border border-line bg-white p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-soft">{activeSample.chartTitle}</p>
                        <p className="mt-2 text-sm text-ink-soft">{activeSample.chartSubtitle}</p>
                      </div>
                      <BellRing className="h-5 w-5 text-forest" />
                    </div>
                    <div className="mt-5 h-32">
                      <svg viewBox="0 0 520 170" className="h-full w-full" preserveAspectRatio="none" aria-hidden="true">
                        <path d={activeSample.path} fill="none" stroke="#13483f" strokeWidth="5" strokeLinecap="round" />
                        <path d={activeAreaPath} fill="#56c7ad" opacity="0.18" />
                      </svg>
                    </div>
                    <div className="mt-4 grid gap-2 sm:grid-cols-4">
                      {activeSample.modules.map((item) => {
                        const Icon = item.icon;

                        return (
                          <div key={item.label} className="rounded-[1rem] bg-surface px-2.5 py-2.5 text-center">
                            <Icon className="mx-auto h-4 w-4 text-forest" />
                            <p className="mt-2 text-xs font-medium text-ink-soft">{item.label}</p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-center gap-2 border-t border-line bg-white px-5 py-4">
                  {industrySamples.map((sample, index) => (
                    <button
                      key={sample.industry}
                      type="button"
                      className={`h-2.5 rounded-full transition ${index === activeSampleIndex ? "w-8 bg-forest" : "w-2.5 bg-forest/18 hover:bg-forest/35"}`}
                      aria-label={`Ver muestra de ${sample.industry}`}
                      aria-current={index === activeSampleIndex}
                      onClick={() => setActiveSampleIndex(index)}
                    />
                  ))}
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
