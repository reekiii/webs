import React from "react";
import { Heart, Mail, Phone, Github, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-stone-900 text-stone-300 border-t border-stone-800">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-display font-bold text-white mb-2 flex items-center gap-2">
              Iker Delgado
              <span className="w-2 h-2 rounded-full bg-gradient-to-br from-orange-600 to-rose-500"></span>
            </h3>
            <p className="text-sm text-stone-400">
              Desarrollo web para restaurantes
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-2">
            <a
              href="mailto:ikerdelgras@gmail.com"
              className="flex items-center gap-2 text-sm hover:text-orange-500 transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>ikerdelgras@gmail.com</span>
            </a>
            <a
              href="tel:+34657829 03"
              className="flex items-center gap-2 text-sm hover:text-orange-500 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>+34 657 829 03</span>
            </a>
          </div>

          {/* Legal */}
          <div className="flex flex-col items-start md:items-end gap-3">
            <div className="flex gap-4 text-sm">
              <a
                href="/privacidad"
                className="hover:text-orange-500 transition-colors"
              >
                Privacidad
              </a>
              <a
                href="/terminos"
                className="hover:text-orange-500 transition-colors"
              >
                Términos
              </a>
            </div>
            <p className="text-xs text-stone-500">
              © {currentYear} Iker Delgado Gras
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
