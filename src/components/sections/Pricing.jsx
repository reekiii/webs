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
];

const Pricing = () => {
  return (
    <div
      className="bg-white py-24 sm:py-32 border-t border-stone-100 relative"
      id="tarifas"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 border border-orange-200 text-orange-600 text-sm font-semibold mb-6 shadow-sm">
            <ShieldCheck className="w-4 h-4" />
            Tarifas Claras
          </div>
          <h2 className="text-4xl sm:text-5xl font-display font-bold tracking-tight text-stone-900 mb-6">
            Inversión Única.{" "}
            <span className="gradient-text">Sin Alquileres.</span>
          </h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            Adquieres un activo digital para tu negocio. El código es tuyo, sin
            suscripciones mensuales ocultas ni comisiones por ventas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
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

        {/* Optional Maintenance Section */}
        <div className="max-w-4xl mx-auto">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 to-rose-400 rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-500"></div>
            <div className="relative bg-gradient-to-br from-orange-50 to-rose-50 rounded-3xl p-6 sm:p-8 border-2 border-orange-200">
              <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-orange-600 to-rose-500 flex items-center justify-center shadow-lg">
                    <Server className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                  </div>
                </div>
                <div className="flex-1 w-full">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-3">
                    <h3 className="text-xl sm:text-2xl font-display font-bold text-stone-900">
                      Mantenimiento Opcional
                    </h3>
                    <span className="inline-block px-3 py-1 bg-orange-600 text-white text-xs font-bold rounded-full w-fit">
                      30€/mes
                    </span>
                  </div>
                  <p className="text-stone-600 mb-6">
                    Despreocúpate de todo lo técnico. Servicio opcional que
                    puedes contratar o cancelar cuando quieras.
                  </p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    <div className="flex items-center gap-2 text-sm text-stone-700">
                      <Check className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                      <span>Cambios en la Carta (ilimitados)</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-stone-700">
                      <Check className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                      <span>Actualizaciones de Seguridad</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-stone-700">
                      <Check className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                      <span>Copias de Seguridad Automáticas</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-stone-700">
                      <Check className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                      <span>Renovación de Hosting Anual</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-stone-700">
                      <Check className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                      <span>Soporte Técnico Prioritario</span>
                    </div>
                  </div>
                  <p className="text-xs text-stone-500 mt-4 italic">
                    💡 Totalmente flexible: contrata solo cuando lo necesites,
                    cancela cuando quieras.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
