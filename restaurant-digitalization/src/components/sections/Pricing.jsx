import React from "react";
import { Check, Star } from "lucide-react";

const tiers = [
  {
    name: "Presencia Esencial",
    id: "tier-basic",
    href: "#contacto",
    price: "300€",
    description: "Ideal para comenzar tu presencia digital",
    features: [
      "Landing Page One-Page profesional",
      "Carta Digital Optimizada",
      "Integración Google Maps",
      "Botón WhatsApp Directo",
      "Hosting de Alta Velocidad (1 año)",
    ],
    mostPopular: false,
  },
  {
    name: "Crecimiento Pro",
    id: "tier-property",
    href: "#contacto",
    price: "600€",
    description: "Control total para crecer sin límites",
    features: [
      "Todo lo del plan Esencial",
      "Panel de Control (CMS) Propio",
      "Gestión de Carta (Fotos/Precios)",
      "Optimización SEO Local Avanzada",
      "QR Dinámicos Personalizados",
    ],
    mostPopular: true,
  },
  {
    name: "Suite Completa",
    id: "tier-advanced",
    href: "#contacto",
    price: "900€+",
    description: "Solución enterprise para grandes proyectos",
    features: [
      "Arquitectura Multi-página",
      "Sistema de Reservas (Integración)",
      "Blog / Eventos / Noticias",
      "Estrategia de Lanzamiento",
      "Soporte Prioritario 24/7",
    ],
    mostPopular: false,
  },
];

const Pricing = () => {
  return (
    <div
      className="bg-white py-24 sm:py-32 border-t border-stone-100"
      id="tarifas"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-base font-semibold leading-7 text-orange-600 uppercase tracking-wide">
            Tarifas
          </h2>
          <p className="mt-2 text-4xl font-display font-bold text-stone-900 sm:text-5xl">
            Inversión Única. Sin Alquileres.
          </p>
          <p className="mt-6 text-lg leading-8 text-stone-600">
            Adquieres un activo digital para tu negocio. El código es tuyo, sin
            suscripciones mensuales ocultas.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={`relative flex flex-col rounded-3xl p-8 transition-all duration-300
                ${
                  tier.mostPopular
                    ? "bg-gradient-to-br from-orange-50 to-rose-50 border-2 border-orange-300 shadow-xl scale-105"
                    : "bg-stone-50 border border-stone-200 hover:border-orange-200 hover:shadow-lg"
                }`}
            >
              {tier.mostPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-orange-600 to-rose-500 px-4 py-1.5 text-xs font-bold text-white shadow-lg">
                    <Star className="w-3 h-3 fill-white" /> Más Popular
                  </span>
                </div>
              )}

              <div className="flex-1">
                <h3 className="text-xl font-bold text-stone-900 mb-2">
                  {tier.name}
                </h3>
                <p className="text-sm text-stone-600 mb-6">
                  {tier.description}
                </p>

                <div className="mb-6">
                  <span className="text-5xl font-bold text-stone-900 font-display">
                    {tier.price}
                  </span>
                  <span className="text-stone-600 ml-2">/único</span>
                </div>

                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-stone-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="#contacto"
                className={`block w-full text-center py-3 px-6 rounded-xl font-semibold transition-all duration-300
                    ${
                      tier.mostPopular
                        ? "bg-gradient-to-r from-orange-600 to-rose-500 text-white hover:shadow-xl hover:scale-105"
                        : "bg-white text-stone-900 border-2 border-stone-300 hover:border-orange-600 hover:text-orange-600"
                    }`}
              >
                Seleccionar Plan
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
