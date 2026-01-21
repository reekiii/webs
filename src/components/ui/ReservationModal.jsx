import React, { useEffect } from "react";
import { X, Calendar, Users, Clock } from "lucide-react";

const ReservationModal = ({ isOpen, onClose, calUsername = "rekicena" }) => {
  // Close on ESC key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fadeIn">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className="relative bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden animate-scaleIn">
        {/* Header */}
        <div className="relative bg-gradient-to-r from-orange-600 to-rose-600 px-8 py-6 text-white">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm flex items-center justify-center transition-all hover:scale-110"
            aria-label="Cerrar"
          >
            <X className="w-5 h-5" />
          </button>

          <h2 className="text-3xl font-display font-bold mb-2">
            Reserva tu Mesa
          </h2>
          <p className="text-white/90 text-sm">
            Selecciona fecha, hora y número de personas
          </p>

          {/* Feature Pills */}
          <div className="flex flex-wrap gap-3 mt-4">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium">
              <Calendar className="w-3.5 h-3.5" />
              Confirmación Instantánea
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium">
              <Clock className="w-3.5 h-3.5" />
              Recordatorios Automáticos
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium">
              <Users className="w-3.5 h-3.5" />
              Sin Comisiones
            </div>
          </div>
        </div>

        {/* Cal.com Embed - Using iframe method */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-180px)]">
          <iframe
            src={`https://app.cal.eu/${calUsername}/reserva-mesa?embed=true`}
            width="100%"
            height="600px"
            frameBorder="0"
            style={{
              border: "none",
              borderRadius: "12px",
              minHeight: "600px",
            }}
            title="Reserva de Mesa"
          />
        </div>

        {/* Footer Info */}
        <div className="border-t border-stone-200 px-8 py-4 bg-stone-50">
          <p className="text-xs text-stone-600 text-center">
            ¿Tienes alguna petición especial? Déjanos un comentario al reservar
            o contáctanos por{" "}
            <a
              href="https://wa.me/34657829003"
              className="text-orange-600 hover:text-orange-700 font-semibold"
            >
              WhatsApp
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReservationModal;
