import React from "react";
import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "34657829 03"; // Sin espacios ni guiones para WhatsApp
  const message = encodeURIComponent(
    "Hola! Me interesa conocer más sobre tus servicios de desarrollo web para restaurantes."
  );
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-green-500 to-green-600 text-white rounded-full shadow-2xl hover:scale-110 transition-all duration-300 hover:shadow-green-500/50 group"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8" />

      {/* Pulse effect */}
      <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping group-hover:animate-none"></span>

      {/* Tooltip */}
      <span className="absolute right-full mr-3 px-3 py-2 bg-stone-900 text-white text-sm font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        ¿Hablamos por WhatsApp?
      </span>
    </a>
  );
};

export default WhatsAppButton;
