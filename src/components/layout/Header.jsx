import React, { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Inicio", href: "#inicio" },
    { name: "Sobre Mí", href: "#sobre-mi" },
    { name: "Servicios", href: "#servicios" },
    { name: "Caso Real", href: "#caso-real" },
    { name: "Proceso", href: "#proceso" },
    { name: "Tarifas", href: "#tarifas" },
    { name: "FAQ", href: "#faq" },
    { name: "Contacto", href: "#contacto" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md border-b border-stone-200"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-2 group">
            <span className="text-2xl font-display font-bold text-stone-900">
              Iker Delgado
            </span>
            <span className="w-2 h-2 rounded-full bg-gradient-to-br from-orange-600 to-rose-500 group-hover:scale-125 transition-transform"></span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-stone-700 hover:text-orange-600 transition-colors relative group whitespace-nowrap"
              >
                {link.name}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-orange-600 to-rose-500 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <a
            href="#contacto"
            className="hidden md:inline-block rounded-xl bg-gradient-to-r from-orange-600 to-rose-500 px-6 py-3 text-sm font-semibold text-white hover:shadow-lg hover:scale-105 transition-all duration-300 whitespace-nowrap"
          >
            Empezar Proyecto
          </a>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-stone-700 hover:bg-stone-100 transition-colors"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-stone-200 bg-white">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 text-base font-medium text-stone-700 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contacto"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2 mx-4 rounded-xl bg-gradient-to-r from-orange-600 to-rose-500 px-6 py-3 text-center text-base font-semibold text-white"
              >
                Empezar Proyecto
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
