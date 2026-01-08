import React from "react";
import { Zap, Smartphone, Search, TrendingUp } from "lucide-react";

const ValueProposition = () => {
  const features = [
    {
      name: "Carga Instantánea",
      description:
        "99/100 en Google PageSpeed. Una web rápida = Más clientes que se quedan navegando y reservan.",
      icon: Zap,
    },
    {
      name: "Diseño Mobile-First",
      description:
        "70% de tus clientes te buscan desde el móvil. Tu web se verá perfecta en cualquier dispositivo.",
      icon: Smartphone,
    },
    {
      name: "Primera Página en Google",
      description:
        "SEO local optimizado para que te encuentren cuando busquen 'restaurante cerca de mí' o tu tipo de cocina.",
      icon: Search,
    },
    {
      name: "Conversión Garantizada",
      description:
        "Cada elemento está diseñado para que tus visitantes reserven, llamen o visiten tu local.",
      icon: TrendingUp,
    },
  ];

  return (
    <div className="bg-stone-50 py-24 sm:py-32" id="servicios">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-20">
          <h2 className="text-base font-semibold leading-7 text-orange-600 uppercase tracking-wide">
            Por qué elegirme
          </h2>
          <p className="mt-2 text-4xl font-display font-bold tracking-tight text-stone-900 sm:text-5xl">
            Más que una plantilla,{" "}
            <span className="gradient-text">tu activo digital</span>
          </p>
          <p className="mt-4 text-lg text-stone-600">
            No uso plantillas genéricas. Cada web está diseñada específicamente
            para tu restaurante y tus objetivos.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.name}
              className="group relative p-6 bg-white rounded-2xl border border-stone-200 hover:border-orange-300 hover:shadow-lg transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-orange-100 to-rose-100 text-orange-600 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-stone-900 mb-3">
                {feature.name}
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed">
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
