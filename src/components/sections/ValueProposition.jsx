import React from "react";
import { Zap, Smartphone, Search, Wallet, QrCode } from "lucide-react";

const ValueProposition = () => {
  const features = [
    {
      name: "0% Comisiones",
      description:
        "Tus clientes reservan directamente contigo. Olvídate de pagar comisiones abusivas por cada comensal.",
      icon: Wallet,
      highlight: true,
    },
    {
      name: "Carta Digital QR",
      description:
        "Menú interactivo, siempre actualizado y con fotos que venden. Tus clientes escanean, ven y piden.",
      icon: QrCode,
    },
    {
      name: "Perfil Google Business",
      description:
        "Configuración profesional de tu ficha en Google Maps. Imprescindible para que te encuentren los clientes de tu zona.",
      icon: Search,
    },
    {
      name: "Carga Instantánea",
      description:
        "99/100 en Google PageSpeed. Una web rápida = Más clientes que se quedan navegando y reservan.",
      icon: Zap,
    },
  ];

  return (
    <div
      className="bg-stone-50 py-24 sm:py-32 relative overflow-hidden"
      id="servicios"
    >
      {/* Background Elements - Removed for clean consistency */}

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-2xl text-center mb-20 animate-fadeIn">
          <h2 className="text-base font-semibold leading-7 text-orange-600 uppercase tracking-wide">
            Por qué elegirme
          </h2>
          <p className="mt-2 text-4xl font-display font-bold tracking-tight text-stone-900 sm:text-5xl">
            Más que una web,{" "}
            <span className="gradient-text">tu mejor camarero</span>
          </p>
          <p className="mt-4 text-lg text-stone-600">
            No es solo diseño bonito. Es una herramienta de ventas diseñada para
            llenar mesas y aumentar tu ticket medio sin intermediarios.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.name}
              className={`group relative p-8 rounded-3xl transition-all duration-300 hover:-translate-y-2
                ${
                  feature.highlight
                    ? "bg-gradient-to-br from-orange-500 to-rose-600 text-white shadow-xl hover:shadow-orange-500/30"
                    : "glass-card hover:border-orange-200"
                }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div
                className={`mb-6 inline-flex items-center justify-center w-14 h-14 rounded-2xl transition-transform duration-300 group-hover:scale-110
                ${
                  feature.highlight
                    ? "bg-white/20 text-white backdrop-blur-sm"
                    : "bg-orange-50 text-orange-600"
                }`}
              >
                <feature.icon className="w-7 h-7" />
              </div>

              <h3
                className={`text-xl font-bold mb-3 ${
                  feature.highlight ? "text-white" : "text-stone-900"
                }`}
              >
                {feature.name}
              </h3>

              <p
                className={`text-sm leading-relaxed ${
                  feature.highlight ? "text-white/90" : "text-stone-600"
                }`}
              >
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ValueProposition;
