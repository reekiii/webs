import React from "react";
import {
  ExternalLink,
  Star,
  TrendingUp,
  BarChart3,
  Clock,
  Users,
} from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      name: "La Terracita",
      type: "Restaurante Mediterráneo",
      location: "Barcelona",
      description:
        "Web moderna con reservas online integradas y menú digital. Aumento del 45% en reservas tras el lanzamiento.",
      metrics: {
        speed: "99",
        conversion: "+45%",
        traffic: "+120%",
      },
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
      tags: ["Reservas Online", "SEO Local", "Menú Digital"],
    },
    {
      id: 2,
      name: "Asador El Rincón",
      type: "Asador de Carnes",
      location: "Madrid",
      description:
        "Landing page optimizada con galería visual de platos y sistema de pedidos. Mejora del 60% en visibilidad Google.",
      metrics: {
        speed: "98",
        conversion: "+38%",
        traffic: "+85%",
      },
      image:
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
      tags: ["Pedidos Online", "Fotografía Pro", "Google Maps"],
    },
    {
      id: 3,
      name: "Sabor Auténtico",
      type: "Cocina Tradicional",
      location: "Valencia",
      description:
        "Presencia digital completa con blog de recetas y newsletter. Duplicó su base de clientes recurrentes en 3 meses.",
      metrics: {
        speed: "100",
        conversion: "+52%",
        traffic: "+140%",
      },
      image:
        "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800&q=80",
      tags: ["Blog", "Email Marketing", "Redes Sociales"],
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
            Casos de Éxito
          </div>
          <h2 className="text-4xl sm:text-5xl font-display font-bold tracking-tight text-stone-900 mb-6">
            Restaurantes que ya{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-rose-600">
              triunfan online
            </span>
          </h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            Estos restaurantes confiaron en mí para llevar su negocio al mundo
            digital. <strong>Los resultados hablan por sí solos.</strong>
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-white rounded-3xl overflow-hidden border border-stone-200 hover:border-orange-300 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-6 right-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1 font-display">
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
              <div className="p-6">
                <p className="text-stone-600 text-sm mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-3 mb-6">
                  <div className="text-center p-3 bg-stone-50 rounded-xl border border-stone-100 group-hover:border-orange-100 transition-colors">
                    <Clock className="w-4 h-4 text-orange-500 mx-auto mb-2" />
                    <div className="text-lg font-bold text-stone-900 mb-0.5">
                      {project.metrics.speed}
                    </div>
                    <div className="text-[10px] uppercase tracking-wider text-stone-500 font-bold">
                      Speed
                    </div>
                  </div>
                  <div className="text-center p-3 bg-stone-50 rounded-xl border border-stone-100 group-hover:border-orange-100 transition-colors">
                    <TrendingUp className="w-4 h-4 text-emerald-500 mx-auto mb-2" />
                    <div className="text-lg font-bold text-stone-900 mb-0.5">
                      {project.metrics.conversion}
                    </div>
                    <div className="text-[10px] uppercase tracking-wider text-stone-500 font-bold">
                      Conv.
                    </div>
                  </div>
                  <div className="text-center p-3 bg-stone-50 rounded-xl border border-stone-100 group-hover:border-orange-100 transition-colors">
                    <Users className="w-4 h-4 text-blue-500 mx-auto mb-2" />
                    <div className="text-lg font-bold text-stone-900 mb-0.5">
                      {project.metrics.traffic}
                    </div>
                    <div className="text-[10px] uppercase tracking-wider text-stone-500 font-bold">
                      Tráfico
                    </div>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="text-xs px-3 py-1 bg-stone-100 text-stone-600 rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
