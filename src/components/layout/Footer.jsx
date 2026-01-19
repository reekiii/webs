import React, { useState } from "react";
import { Mail, Phone } from "lucide-react";
import Modal from "../ui/Modal";
import TerminosContent from "../ui/TerminosContent";
import PrivacidadContent from "../ui/PrivacidadContent";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [showTerminos, setShowTerminos] = useState(false);
  const [showPrivacidad, setShowPrivacidad] = useState(false);

  return (
    <>
      <footer className="bg-white text-stone-900 border-t border-stone-200">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {/* Brand */}
            <div>
              <h3 className="text-xl font-display font-bold text-stone-900 mb-2 flex items-center gap-2">
                Iker Delgado
                <span className="w-2 h-2 rounded-full bg-gradient-to-br from-orange-600 to-rose-500"></span>
              </h3>
              <p className="text-sm text-stone-600">
                Desarrollo web para restaurantes
              </p>
            </div>

            {/* Contact */}
            <div className="space-y-2">
              <a
                href="mailto:ikerdelgras@gmail.com"
                className="flex items-center gap-2 text-sm text-stone-600 hover:text-orange-600 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>ikerdelgras@gmail.com</span>
              </a>
              <a
                href="tel:+3465782903"
                className="flex items-center gap-2 text-sm text-stone-600 hover:text-orange-600 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>+34 657 829 03</span>
              </a>
            </div>

            {/* Legal */}
            <div className="flex flex-col items-start md:items-end gap-3">
              <div className="flex gap-4 text-sm font-medium">
                <button
                  onClick={() => setShowPrivacidad(true)}
                  className="text-stone-600 hover:text-orange-600 transition-colors cursor-pointer"
                >
                  Privacidad
                </button>
                <button
                  onClick={() => setShowTerminos(true)}
                  className="text-stone-600 hover:text-orange-600 transition-colors cursor-pointer"
                >
                  Términos
                </button>
              </div>
              <p className="text-xs text-stone-500">
                © {currentYear} Iker Delgado Gras
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Modals */}
      <Modal
        isOpen={showTerminos}
        onClose={() => setShowTerminos(false)}
        title="Términos de Servicio"
      >
        <TerminosContent />
      </Modal>

      <Modal
        isOpen={showPrivacidad}
        onClose={() => setShowPrivacidad(false)}
        title="Política de Privacidad"
      >
        <PrivacidadContent />
      </Modal>
    </>
  );
};

export default Footer;
