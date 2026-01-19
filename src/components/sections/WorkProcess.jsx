import React from "react";
import {
  MessageSquare,
  Palette,
  Code,
  Rocket,
  CheckCircle2,
} from "lucide-react";

const WorkProcess = () => {
  const steps = [
    {
      number: "01",
      icon: MessageSquare,
      title: "Consulta Inicial",
      duration: "30 mins",
      description:
        "Hablamos de tu restaurante, tu visión y tus objetivos. Analizamos qué necesitas y te propongo la mejor solución.",
      deliverables: ["Propuesta personalizada", "Presupuesto sin sorpresas"],
      color: "from-orange-500 to-orange-600",
    },
    {
      number: "02",
      icon: Palette,
      title: "Diseño Personalizado",
      duration: "3-5 días",
      description:
        "Creo el diseño web aplicado a los colores, temática y estilos que interesan a mi cliente.",
      deliverables: ["Diseño a medida", "Colores y estilos personalizados"],
      color: "from-rose-500 to-rose-600",
    },
    {
      number: "03",
      icon: Code,
      title: "Desarrollo + Optimización",
      duration: "1 semana",
      description:
        "Desarrollo la web con las mejores tecnologías. Optimizo velocidad, SEO y experiencia móvil. Todo medible y probado, adaptado para cualquier dispositivo.",
      deliverables: [
        "Web ultrarrápida",
        "SEO optimizado",
        "100% Adaptable a móviles",
      ],
      color: "from-amber-500 to-amber-600",
    },
    {
      number: "04",
      icon: Rocket,
      title: "Lanzamiento + Formación",
      duration: "1 día",
      description:
        "Dependiendo del plan elegido, te enseño a gestionar tu web para que la adaptes a tu gusto y la publicamos.",
      deliverables: [
        "Publicación web",
        "Formación de gestión",
        "Soporte de lanzamiento",
      ],
      color: "from-emerald-500 to-emerald-600",
    },
  ];

  return (
    <section
      className="relative py-24 sm:py-32 bg-gradient-to-br from-stone-50 to-orange-50/40 overflow-hidden"
      id="proceso"
    >
      {/* Background Pattern - Removed as per user request */}
      <div className="absolute inset-0 opacity-5"></div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-orange-200 text-orange-700 text-sm font-semibold mb-6 shadow-sm">
            <CheckCircle2 className="w-4 h-4" />
            Proceso Transparente
          </div>
          <h2 className="text-4xl sm:text-5xl font-display font-bold tracking-tight text-stone-900 mb-6">
            Cómo trabajamos <span className="gradient-text">juntos</span>
          </h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            Un proceso claro, sin sorpresas. Desde la primera llamada hasta el
            lanzamiento, sabrás exactamente qué esperar en cada paso.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line - Hidden on mobile */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-200 via-rose-200 to-emerald-200"></div>

          {/* Steps */}
          <div className="space-y-12 md:space-y-24">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className={`relative flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Content Card */}
                <div
                  className={`w-full md:w-5/12 ${
                    index % 2 === 0 ? "md:text-right" : "md:text-left"
                  }`}
                >
                  <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-stone-100">
                    {/* Header */}
                    <div
                      className={`flex items-center gap-3 mb-4 ${
                        index % 2 === 0
                          ? "md:flex-row-reverse md:justify-end"
                          : ""
                      }`}
                    >
                      <div
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center text-white shadow-lg`}
                      >
                        <step.icon className="w-8 h-8" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-stone-400">
                          {step.number}
                        </div>
                        <h3 className="text-2xl font-bold text-stone-900">
                          {step.title}
                        </h3>
                      </div>
                    </div>

                    {/* Duration Badge */}
                    <div
                      className={`inline-block px-3 py-1 bg-stone-100 text-stone-700 text-sm font-medium rounded-full mb-4 ${
                        index % 2 === 0 ? "md:float-right" : ""
                      }`}
                    >
                      ⏱️ {step.duration}
                    </div>

                    {/* Description */}
                    <p className="text-stone-600 mb-4 leading-relaxed clear-both">
                      {step.description}
                    </p>

                    {/* Deliverables */}
                    <div className="space-y-2">
                      {step.deliverables.map((deliverable, idx) => (
                        <div
                          key={idx}
                          className={`flex items-center gap-2 text-sm text-stone-700 ${
                            index % 2 === 0 ? "md:flex-row-reverse" : ""
                          }`}
                        >
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                          <span>{deliverable}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Center Circle Number */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full bg-white border-4 border-orange-200 items-center justify-center shadow-lg z-10">
                  <span className="text-2xl font-bold gradient-text">
                    {index + 1}
                  </span>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;
