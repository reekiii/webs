import React from "react";
import { Check, Star, ShieldCheck, Server } from "lucide-react";

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
  {
    name: "Mantenimiento Premium",
    id: "tier-maintenance",
    href: "#contacto",
    price: "30€/mes",
    description: "Despreocúpate de todo lo técnico",
    features: [
      "Cambios en la Carta (ilimitados)",
      "Actualizaciones de Seguridad",
      "Copias de Seguridad Automáticas",
      "Renovación de Hosting Anual",
      "Soporte Técnico Prioritario",
    ],
    mostPopular: false,
    isRecurring: true,
  },
];

const Pricing = () => {
  return (
    <div
      className="bg-white py-24 sm:py-32 border-t border-stone-100 relative"
      id="tarifas"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-2xl text-center mb-16 animate-fadeIn">
          <h2 className="text-base font-semibold leading-7 text-orange-600 uppercase tracking-wide">
            Tarifas Claras
          </h2>
          <p className="mt-2 text-4xl font-display font-bold text-stone-900 sm:text-5xl">
            Inversión Única.{" "}
            <span className="gradient-text">Sin Alquileres.</span>
          </p>
          <p className="mt-6 text-lg leading-8 text-stone-600">
            Adquieres un activo digital para tu negocio. El código es tuyo, sin
            suscripciones mensuales ocultas ni comisiones por ventas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={`relative flex flex-col rounded-3xl p-8 transition-all duration-300
                ${
                  tier.mostPopular
                    ? "bg-gradient-to-b from-white to-orange-50/50 border-2 border-orange-400 shadow-2xl scale-105 z-10"
                    : "bg-white border border-stone-200 hover:border-orange-200 hover:shadow-xl hover:-translate-y-1"
                }`}
            >
              {tier.mostPopular && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-full text-center">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-orange-600 to-rose-600 px-4 py-1.5 text-xs font-bold text-white shadow-lg animate-pulse-subtle">
                    <Star className="w-3 h-3 fill-white" /> Opción Recomendada
                  </span>
                </div>
              )}

              <div className="flex-1">
                <h3 className="text-xl font-bold text-stone-900 mb-2 font-display">
                  {tier.name}
                </h3>
                <p className="text-sm text-stone-500 mb-6 h-10">
                  {tier.description}
                </p>

                <div className="mb-8 p-4 bg-stone-50 rounded-2xl text-center">
                  <span className="text-5xl font-bold text-stone-900 font-display tracking-tight">
                    {tier.price}
                  </span>
                  <div className="text-stone-500 text-xs mt-1 font-medium uppercase tracking-wide">
                    {tier.isRecurring ? "Mensual" : "Pago Único"}
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm"
                    >
                      <div className="mt-0.5 rounded-full bg-green-100 p-1">
                        <Check className="w-3 h-3 text-green-600" />
                      </div>
                      <span className="text-stone-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="#contacto"
                className={`block w-full text-center py-4 px-6 rounded-xl font-bold transition-all duration-300
                    ${
                      tier.mostPopular
                        ? "bg-gradient-to-r from-orange-600 to-rose-600 text-white shadow-lg hover:shadow-xl hover:scale-[1.02]"
                        : "bg-white text-stone-900 border-2 border-stone-200 hover:border-orange-600 hover:text-orange-600"
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
