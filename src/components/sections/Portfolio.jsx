import React from "react";
import {
  ExternalLink,
  Star,
  TrendingUp,
  BarChart3,
  Clock,
  Users,
  ArrowRight,
} from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      name: "Salty Soul Trips",
      type: "Agencia de Viajes Online",
      location: "Web Completa",
      description:
        "Proyecto web profesional con sistema de reservas integrado, blog de contenido y optimización SEO completa. Demuestra mi capacidad técnica en React, diseño responsive y performance.",
      metrics: {
        speed: "99",
        responsive: "100%",
        seo: "Optimizado",
      },
      image:
        "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&q=80",
      tags: ["React + Vite", "Responsive", "SEO", "Reservas Online"],
      isReal: true,
      url: "https://saltysoultrips.com",
    },
  ];

  return (
    <section
      className="relative py-24 sm:py-32 bg-stone-50 overflow-hidden"
      id="portfolio"
    >
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-100 rounded-full blur-[100px] pointer-events-none opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-rose-100 rounded-full blur-[100px] pointer-events-none opacity-50"></div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-stone-200 text-orange-600 text-sm font-semibold mb-6 shadow-sm">
            <Star className="w-4 h-4 fill-orange-600" />
            Mi Trabajo
          </div>
          <h2 className="text-4xl sm:text-5xl font-display font-bold tracking-tight text-stone-900 mb-6">
            Proyecto Real:{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-rose-600">
              Salty Soul Trips
            </span>
          </h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            Web profesional que demuestra mi capacidad técnica. Las mismas
            skills que aplico ahora a <strong>restaurantes</strong>: diseño
            moderno, performance óptimo y funcionalidades avanzadas.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="max-w-2xl mx-auto mb-16">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-white rounded-3xl overflow-hidden border-2 border-orange-300 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Real Project Badge */}
              {project.isReal && (
                <div className="absolute top-4 right-4 z-10">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-green-500 px-3 py-1.5 text-xs font-bold text-white shadow-lg">
                    ✓ Proyecto Real
                  </span>
                </div>
              )}

              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-6 right-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-3xl font-bold text-white mb-1 font-display">
                        {project.name}
                      </h3>
                      <p className="text-sm text-stone-200 font-medium">
                        {project.type}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <p className="text-stone-600 text-base mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center p-4 bg-stone-50 rounded-xl border border-stone-100">
                    <Clock className="w-5 h-5 text-orange-500 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-stone-900 mb-1">
                      {project.metrics.speed}
                    </div>
                    <div className="text-xs uppercase tracking-wider text-stone-500 font-bold">
                      PageSpeed
                    </div>
                  </div>
                  <div className="text-center p-4 bg-stone-50 rounded-xl border border-stone-100">
                    <TrendingUp className="w-5 h-5 text-emerald-500 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-stone-900 mb-1">
                      {project.metrics.responsive}
                    </div>
                    <div className="text-xs uppercase tracking-wider text-stone-500 font-bold">
                      Responsive
                    </div>
                  </div>
                  <div className="text-center p-4 bg-stone-50 rounded-xl border border-stone-100">
                    <Users className="w-5 h-5 text-blue-500 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-stone-900 mb-1">
                      {project.metrics.seo}
                    </div>
                    <div className="text-xs uppercase tracking-wider text-stone-500 font-bold">
                      SEO
                    </div>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="text-xs px-3 py-1.5 bg-orange-50 text-orange-700 rounded-full font-semibold border border-orange-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Visit Site Button */}
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-600 to-rose-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all hover:scale-105"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Ver Sitio Web
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Next Project CTA */}
        <div className="text-center p-12 bg-gradient-to-br from-orange-50 to-rose-50 rounded-3xl border-2 border-dashed border-orange-300">
          <h3 className="text-3xl font-display font-bold text-stone-900 mb-4">
            Tu Restaurante Será el Próximo
          </h3>
          <p className="text-lg text-stone-600 mb-6 max-w-xl mx-auto">
            Aplico la misma calidad técnica y atención al detalle a tu proyecto
            de restaurante.
          </p>
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-600 to-rose-600 text-white font-bold rounded-xl hover:shadow-xl transition-all hover:scale-105"
          >
            Empecemos Tu Proyecto
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
