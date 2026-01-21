import React from "react";
import { X, Check, TrendingDown, TrendingUp, AlertCircle } from "lucide-react";

const BeforeAfter = () => {
  const comparison = {
    without: {
      title: "Restaurante SIN Web Profesional",
      icon: X,
      color: "red",
      gradient: "from-red-500 to-rose-600",
      bgGradient: "from-red-50 to-rose-50",
      stats: [
        {
          icon: TrendingDown,
          value: "70%",
          label: "De clientes no te encuentran en Google",
          metric: "Visibilidad Online",
        },
        {
          icon: AlertCircle,
          value: "0",
          label: "Reservas online perdidas cada día",
          metric: "Pérdida de Ingresos",
        },
        {
          icon: TrendingDown,
          value: "45%",
          label: "Clientes que buscan otra opción si no ven menú online",
          metric: "Tasa de Rebote",
        },
      ],
      points: [
        "❌ Dependes 100% del tráfico peatonal",
        "❌ Pierdes clientes que buscan online",
        "❌ Sin presencia en Google Maps",
        "❌ No puedes mostrar tu carta 24/7",
        "❌ Competencia te supera en búsquedas",
        "❌ Marketing limitado al boca a boca",
      ],
    },
    with: {
      title: "Restaurante CON Web Profesional",
      icon: Check,
      color: "emerald",
      gradient: "from-emerald-500 to-green-600",
      bgGradient: "from-emerald-50 to-green-50",
      stats: [
        {
          icon: TrendingUp,
          value: "+120%",
          label: "Incremento en visibilidad online y tráfico web",
          metric: "Crecimiento Digital",
        },
        {
          icon: Check,
          value: "24/7",
          label: "Tu restaurante abierto online siempre",
          metric: "Disponibilidad",
        },
        {
          icon: TrendingUp,
          value: "+45%",
          label: "Más reservas y pedidos online confirmados",
          metric: "Conversión",
        },
      ],
      points: [
        "✅ Aparezcas primero en Google",
        "✅ Reservas y pedidos online automáticos",
        "✅ Carta digital siempre actualizada",
        "✅ Fotos profesionales de tus platos",
        "✅ Reseñas y valoraciones visibles",
        "✅ Marketing digital efectivo",
      ],
    },
  };

  return (
    <section
      className="relative py-24 sm:py-32 bg-white overflow-hidden"
      id="comparacion"
    >
      {/* Decorative divider */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-orange-300 to-transparent"></div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 border border-orange-200 text-orange-600 text-sm font-semibold mb-6 shadow-sm">
            <AlertCircle className="w-4 h-4" />
            La Diferencia es Obvia
          </div>
          <h2 className="text-4xl sm:text-5xl font-display font-bold tracking-tight text-stone-900 mb-6">
            ¿Cuál prefieres <span className="gradient-text">ser</span>?
          </h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            La realidad es clara:{" "}
            <strong>
              los restaurantes sin web profesional están perdiendo dinero cada
              día
            </strong>
            . Aquí está la prueba.
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* WITHOUT Web */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-red-400 to-rose-400 rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-500"></div>
            <div
              className={`relative bg-gradient-to-br ${comparison.without.bgGradient} rounded-3xl p-8 border-2 border-red-200 h-full flex flex-col`}
            >
              {/* Header */}
              <div className="flex items-start gap-4 mb-8">
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${comparison.without.gradient} flex items-center justify-center text-white shadow-lg flex-shrink-0`}
                >
                  <comparison.without.icon className="w-8 h-8" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-stone-900 mb-1">
                    {comparison.without.title}
                  </h3>
                  <p className="text-sm text-red-600 font-semibold uppercase tracking-wide">
                    El camino difícil
                  </p>
                </div>
              </div>

              {/* Stats - Larger and more prominent */}
              <div className="space-y-5 mb-8">
                {comparison.without.stats.map((stat, index) => (
                  <div
                    key={index}
                    className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-red-200 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center flex-shrink-0">
                        <stat.icon className="w-6 h-6 text-red-600" />
                      </div>
                      <div className="text-4xl font-bold text-red-700 font-display">
                        {stat.value}
                      </div>
                    </div>
                    <p className="text-base text-stone-700 font-medium leading-snug">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              {/* Points - More compact */}
              <div className="mt-auto pt-6 border-t border-red-200">
                <div className="grid grid-cols-1 gap-3">
                  {comparison.without.points.map((point, index) => (
                    <div
                      key={index}
                      className="text-sm text-stone-700 font-medium flex items-center gap-2"
                    >
                      <span className="text-base">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* WITH Web */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400 to-green-400 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-500"></div>
            <div
              className={`relative bg-gradient-to-br ${comparison.with.bgGradient} rounded-3xl p-8 border-2 border-emerald-300 shadow-xl h-full flex flex-col`}
            >
              {/* Header */}
              <div className="flex items-start gap-4 mb-6">
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${comparison.with.gradient} flex items-center justify-center text-white shadow-lg flex-shrink-0`}
                >
                  <comparison.with.icon className="w-8 h-8" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-stone-900 mb-1">
                    {comparison.with.title}
                  </h3>
                  <p className="text-sm text-emerald-600 font-semibold uppercase tracking-wide">
                    La ventaja competitiva
                  </p>
                </div>
              </div>

              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white text-xs font-bold rounded-full mb-8 shadow-lg self-start">
                <TrendingUp className="w-4 h-4" />
                RECOMENDADO
              </div>

              {/* Stats - Larger and more prominent */}
              <div className="space-y-5 mb-8">
                {comparison.with.stats.map((stat, index) => (
                  <div
                    key={index}
                    className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 border border-emerald-200 shadow-md hover:shadow-lg transition-all hover:-translate-y-1"
                  >
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center flex-shrink-0">
                        <stat.icon className="w-6 h-6 text-emerald-600" />
                      </div>
                      <div className="text-4xl font-bold text-emerald-700 font-display">
                        {stat.value}
                      </div>
                    </div>
                    <p className="text-base text-stone-700 font-medium leading-snug">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              {/* Points - More compact */}
              <div className="mt-auto pt-6 border-t border-emerald-200">
                <div className="grid grid-cols-1 gap-3">
                  {comparison.with.points.map((point, index) => (
                    <div
                      key={index}
                      className="text-sm text-stone-700 font-medium flex items-center gap-2"
                    >
                      <span className="text-base">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;
