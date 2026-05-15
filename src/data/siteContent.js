import {
  ArrowRightLeft,
  BarChart3,
  Bot,
  Building2,
  ClipboardCheck,
  ClipboardList,
  Factory,
  FileSpreadsheet,
  FileText,
  Globe,
  Handshake,
  LayoutDashboard,
  LineChart,
  MessagesSquare,
  PackageCheck,
  Repeat2,
  Route,
  ShoppingBag,
  Settings2,
  ShieldCheck,
  Sparkles,
  Store,
  Truck,
  UsersRound,
} from "lucide-react";

export const NAV_LINKS = [
  { label: "Inicio", href: "#inicio" },
  { label: "Soluciones", href: "#servicios" },
  { label: "Industrias", href: "#industrias" },
  { label: "Método", href: "#metodo" },
  { label: "Paquetes", href: "#paquetes" },
  { label: "Contacto", href: "#contacto" },
];

export const COMMON_PROBLEMS = [
  {
    icon: FileSpreadsheet,
    title: "Planillas dispersas",
    description: "Información crítica repartida en archivos, chats y notas sin una única fuente confiable.",
  },
  {
    icon: Repeat2,
    title: "Tareas repetidas",
    description: "Doble carga de datos, controles manuales y seguimiento administrativo que consume horas.",
  },
  {
    icon: MessagesSquare,
    title: "Procesos poco visibles",
    description: "Pedidos, cobranzas y pendientes dependen de memoria, mensajes sueltos o personas clave.",
  },
  {
    icon: LineChart,
    title: "Decisiones sin datos",
    description: "Ventas, stock y operación se revisan tarde, con reportes difíciles de actualizar.",
  },
];

export const SERVICE_PILLARS = [
  {
    icon: LayoutDashboard,
    title: "Dashboards",
    description: "Indicadores claros para seguir ventas, stock, cobranzas, productividad y operación diaria.",
  },
  {
    icon: Bot,
    title: "Automatización",
    description: "Flujos simples para reducir doble carga, avisos manuales y tareas administrativas repetitivas.",
  },
  {
    icon: ArrowRightLeft,
    title: "Procesos",
    description: "Circuitos documentados para ordenar responsabilidades, estados, aprobaciones y seguimiento.",
  },
  {
    icon: FileSpreadsheet,
    title: "Excel inteligente",
    description: "Modelos de gestión mejor estructurados, más fáciles de actualizar y preparados para crecer.",
  },
  {
    icon: ClipboardList,
    title: "Formularios",
    description: "Carga ordenada de pedidos, solicitudes, reclamos, auditorías y datos operativos.",
  },
  {
    icon: FileText,
    title: "Reportes",
    description: "Informes ejecutivos y operativos para ver el estado del negocio sin perseguir datos.",
  },
];

export const INDUSTRY_USE_CASES = [
  {
    icon: Store,
    industry: "Comercios",
    title: "Ventas, stock y cobranzas al día",
    items: ["Control de ingresos", "Productos más vendidos", "Seguimiento de pendientes"],
  },
  {
    icon: Factory,
    industry: "Industria y talleres",
    title: "Producción y tareas con trazabilidad",
    items: ["Órdenes de trabajo", "Estados por etapa", "Reportes de productividad"],
  },
  {
    icon: Truck,
    industry: "Servicios y logística",
    title: "Operación coordinada sin mensajes sueltos",
    items: ["Agenda de servicios", "Rutas y entregas", "Incidencias registradas"],
  },
  {
    icon: Building2,
    industry: "Administración",
    title: "Información ordenada para decidir",
    items: ["Cobranzas", "Proveedores", "Tableros de dirección"],
  },
];

export const VALUE_POINTS = [
  {
    icon: ShieldCheck,
    title: "Operación real",
    description: "Pensado para pymes que necesitan orden y control, no tecnología de más.",
  },
  {
    icon: Settings2,
    title: "Simple y aplicable",
    description: "Soluciones concretas para que el equipo las use de verdad desde el primer día.",
  },
  {
    icon: Handshake,
    title: "Trabajo directo",
    description: "Cercanía, criterio y una conversación clara con foco en el negocio.",
  },
  {
    icon: BarChart3,
    title: "Resultado visible",
    description: "Más control, menos reproceso y mejor información para decidir.",
  },
];

export const METHOD_STRIP = [
  {
    icon: ClipboardCheck,
    step: "01",
    title: "Diagnóstico",
    description: "Relevamos procesos, herramientas actuales, dolores y objetivos de mejora.",
  },
  {
    icon: Route,
    step: "02",
    title: "Mapa de solución",
    description: "Definimos qué ordenar, qué automatizar y qué indicadores medir primero.",
  },
  {
    icon: Sparkles,
    step: "03",
    title: "Implementación",
    description: "Construimos dashboards, formularios, reportes o automatizaciones con entregas cortas.",
  },
  {
    icon: UsersRound,
    step: "04",
    title: "Ajuste y adopción",
    description: "Acompañamos el uso real para que el equipo incorpore la solución sin fricción.",
  },
];

export const SERVICE_PACKAGES = [
  {
    name: "Diagnóstico operativo",
    label: "Inicio",
    price: "Relevamiento",
    description: "Ideal para detectar oportunidades y priorizar mejoras digitales concretas.",
    features: ["Entrevista inicial", "Mapa de problemas", "Propuesta de próximos pasos"],
  },
  {
    name: "Dashboard esencial",
    label: "Más pedido",
    price: "Proyecto corto",
    description: "Para convertir datos dispersos en un tablero simple de seguimiento.",
    features: ["Modelo de datos", "Indicadores clave", "Vista ejecutiva y operativa"],
    featured: true,
  },
  {
    name: "Sistema a medida",
    label: "Integral",
    price: "Implementación",
    description: "Para ordenar procesos completos con formularios, reportes y automatizaciones.",
    features: ["Flujos de trabajo", "Automatizaciones", "Acompañamiento de adopción"],
  },
];

export const CONTACT_CHANNELS = {
  WHATSAPP_URL: "#",
  INSTAGRAM_URL: "#",
  LINKEDIN_URL: "#",
  EMAIL: "contacto@trevo.com.ar",
};
