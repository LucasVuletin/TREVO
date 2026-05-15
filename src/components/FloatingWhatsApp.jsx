import { MessageCircleMore } from "lucide-react";
import { CONTACT_CHANNELS } from "../data/siteContent";

function FloatingWhatsApp() {
  return (
    <a
      href={CONTACT_CHANNELS.WHATSAPP_URL}
      className="fixed bottom-5 right-5 z-40 inline-flex h-14 w-14 items-center justify-center rounded-[1.15rem] border border-white/10 bg-forest text-white shadow-panel transition duration-300 hover:-translate-y-1 hover:bg-forest-deep"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircleMore className="h-6 w-6" />
    </a>
  );
}

export default FloatingWhatsApp;
