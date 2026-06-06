import { useState } from "react";
import { Instagram, Linkedin, Mail, MessageCircleMore } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { CONTACT_CHANNELS } from "../data/siteContent";

const INITIAL_FORM = {
  nombre: "",
  empresa: "",
  rubro: "",
  email: "",
  telefono: "",
  mensaje: "",
};

function validateForm(data) {
  const errors = {};

  if (!data.nombre.trim()) {
    errors.nombre = "Ingresa tu nombre.";
  }

  if (!data.empresa.trim()) {
    errors.empresa = "Ingresa el nombre de tu empresa.";
  }

  if (!data.email.trim()) {
    errors.email = "Ingresa un email de contacto.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Ingresa un email válido.";
  }

  if (!data.mensaje.trim()) {
    errors.mensaje = "Contanos brevemente qué querés mejorar.";
  }

  return errors;
}

function Contact() {
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((current) => {
        const next = { ...current };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const nextErrors = validateForm(formData);
    setErrors(nextErrors);
    setSuccess(false);

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    setSending(true);

    await new Promise((resolve) => {
      window.setTimeout(resolve, 900);
    });

    setFormData(INITIAL_FORM);
    setSending(false);
    setSuccess(true);
  };

  return (
    <section id="contacto" className="scroll-mt-32 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-[2.5rem] border border-line bg-white/90 px-8 py-10 shadow-panel sm:px-10 lg:px-14 lg:py-14">
        <div className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:gap-14">
          <Reveal>
            <div className="space-y-8">
              <SectionHeading
                eyebrow="Contacto"
                title="Hablemos de qué parte de tu operación conviene ordenar primero."
                description="Contanos brevemente cómo trabaja tu empresa y te respondemos con una mirada inicial para avanzar con criterio."
              />

              <div className="flex flex-wrap gap-3">
                {["Diagnóstico", "Dashboards", "Automatización", "Procesos", "Reportes"].map((item) => (
                  <span key={item} className="rounded-full border border-line bg-surface px-4 py-2 text-sm text-ink-soft">
                    {item}
                  </span>
                ))}
              </div>

              <div className="grid gap-3">
                <a href={CONTACT_CHANNELS.WHATSAPP_URL} className="contact-link">
                  <MessageCircleMore className="h-5 w-5" />
                  WhatsApp
                </a>
                <a href={CONTACT_CHANNELS.INSTAGRAM_URL} className="contact-link">
                  <Instagram className="h-5 w-5" />
                  Instagram
                </a>
                <a href={CONTACT_CHANNELS.LINKEDIN_URL} className="contact-link">
                  <Linkedin className="h-5 w-5" />
                  LinkedIn
                </a>
                <a href={`mailto:${CONTACT_CHANNELS.EMAIL}`} className="contact-link">
                  <Mail className="h-5 w-5" />
                  {CONTACT_CHANNELS.EMAIL}
                </a>
              </div>

              <p className="rounded-[1.4rem] border border-line bg-surface px-5 py-4 text-sm leading-6 text-ink-soft">
                El diagnóstico inicial nos sirve para escuchar, entender el contexto y sugerir un camino posible. Después decidimos juntos si tiene sentido avanzar.
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <form className="space-y-5 rounded-[2rem] bg-surface p-6 sm:p-7" onSubmit={handleSubmit} noValidate>
              <div className="grid gap-5 sm:grid-cols-2">
                <FormField
                  label="Nombre"
                  name="nombre"
                  value={formData.nombre}
                  error={errors.nombre}
                  onChange={handleChange}
                  placeholder="Tu nombre"
                />
                <FormField
                  label="Empresa"
                  name="empresa"
                  value={formData.empresa}
                  error={errors.empresa}
                  onChange={handleChange}
                  placeholder="Nombre de la empresa"
                />
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <FormField
                  label="Rubro"
                  name="rubro"
                  value={formData.rubro}
                  error={errors.rubro}
                  onChange={handleChange}
                  placeholder="Ej. metalúrgica, comercio"
                />
                <FormField
                  label="Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  error={errors.email}
                  onChange={handleChange}
                  placeholder="nombre@empresa.com"
                />
              </div>

              <FormField
                label="Teléfono / WhatsApp"
                name="telefono"
                value={formData.telefono}
                error={errors.telefono}
                onChange={handleChange}
                placeholder="+54 9 11 1234 5678"
              />

              <FormField
                label="Qué querés mejorar"
                name="mensaje"
                value={formData.mensaje}
                error={errors.mensaje}
                onChange={handleChange}
                placeholder="Contanos brevemente qué proceso, dato o tarea querés ordenar."
                multiline
              />

              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <button type="submit" disabled={sending} className="btn-primary justify-center disabled:cursor-not-allowed disabled:opacity-75">
                  {sending ? "Enviando..." : "Solicitar diagnóstico"}
                </button>

                {success ? (
                  <p className="text-sm leading-6 text-forest" aria-live="polite">
                    Gracias por contactarte con TREVO. Pronto nos vamos a comunicar con vos.
                  </p>
                ) : null}
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function FormField({
  label,
  name,
  value,
  onChange,
  error,
  placeholder,
  multiline = false,
  type = "text",
}) {
  const sharedProps = {
    id: name,
    name,
    value,
    onChange,
    placeholder,
    className: `input-field ${error ? "border-red-400/80 focus:border-red-500 focus:ring-red-500/20" : ""}`,
  };

  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-ink">{label}</span>
      {multiline ? <textarea rows="5" {...sharedProps} /> : <input type={type} {...sharedProps} />}
      {error ? <span className="mt-2 block text-sm text-red-600">{error}</span> : null}
    </label>
  );
}

export default Contact;
