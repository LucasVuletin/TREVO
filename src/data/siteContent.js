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
  { label: "Diagnóstico", href: "#diagnostico" },
  { label: "Método", href: "#metodo" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Contacto", href: "#contacto" },
];

export const COMMON_PROBLEMS = [
  {
    icon: FileSpreadsheet,
    title: "Datos repartidos",
    description: "Información importante vive entre planillas, chats y notas, y cuesta saber cuál es la versión correcta.",
  },
  {
    icon: Repeat2,
    title: "Tareas manuales",
    description: "Controles, cargas y avisos que se repiten cada semana pueden ordenarse con herramientas simples.",
  },
  {
    icon: MessagesSquare,
    title: "Seguimiento difuso",
    description: "Pedidos, cobranzas y pendientes dependen de memoria, mensajes sueltos o de una persona clave.",
  },
  {
    icon: LineChart,
    title: "Reportes tardíos",
    description: "Ventas, stock y operación se revisan tarde, con reportes que llevan demasiado tiempo actualizar.",
  },
  {
    icon: ClipboardList,
    title: "Cierres lentos",
    description: "El mes cierra tarde y cuesta tener una foto clara para decidir.",
  },
];

export const SERVICE_PILLARS = [
  {
    icon: LayoutDashboard,
    title: "Dashboards",
    description: "Indicadores simples para seguir ventas, stock, cobranzas y operación.",
  },
  {
    icon: Bot,
    title: "Automatización",
    description: "Flujos que reducen doble carga, avisos manuales y tareas repetidas.",
  },
  {
    icon: ArrowRightLeft,
    title: "Procesos",
    description: "Circuitos claros para responsabilidades, estados y seguimiento.",
  },
  {
    icon: FileText,
    title: "Reportes",
    description: "Informes ejecutivos y operativos sin perseguir datos cada semana.",
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

export const INDUSTRY_LIST = [
  "Comercios",
  "Industria",
  "Servicios",
  "Logística",
  "Agro",
  "Administración",
];

export const METHOD_STRIP = [
  {
    icon: ClipboardCheck,
    step: "01",
    title: "Entendemos",
    description: "Revisamos cómo trabaja hoy la empresa.",
  },
  {
    icon: Route,
    step: "02",
    title: "Priorizamos",
    description: "Elegimos qué conviene ordenar primero.",
  },
  {
    icon: Sparkles,
    step: "03",
    title: "Implementamos",
    description: "Creamos la herramienta con alcance claro.",
  },
  {
    icon: UsersRound,
    step: "04",
    title: "Acompañamos",
    description: "Ajustamos con el uso diario del equipo.",
  },
];

export const FOUNDER_PROFILES = [
  {
    initials: "LS",
    name: "Lucas",
    role: "Ingeniero en Petróleo ITBA · Ingeniero de campo en fractura en Halliburton · Co-founder TREVO",
  },
  {
    initials: "SB",
    name: "Seba",
    role: "Ingeniero en Petróleo ITBA · Desarrollo y exploración en Pampa Energía · Co-founder TREVO",
  },
];

export const TREVO_DIFFERENTIATORS = [
  "Mentalidad de ingeniería aplicada a problemas cotidianos.",
  "Primero entendemos la empresa; después proponemos la herramienta.",
  "Soluciones pensadas para que el equipo pueda usarlas de verdad.",
  "Mejoras medibles, simples de mantener y alineadas al negocio.",
];

export const CONTACT_CHANNELS = {
  WHATSAPP_URL: "#",
  INSTAGRAM_URL: "#",
  LINKEDIN_URL: "#",
  EMAIL: "contacto@trevo.com.ar",
};
