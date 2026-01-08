import React from "react";
import { Quote, Star, ExternalLink } from "lucide-react";

const Testimonials = () => {
  const testimonial = {
    quote:
      "Iker transformó completamente nuestra presencia digital. La web es rápida, elegante y nos ha ayudado a atraer muchos más clientes. Su atención al detalle y conocimiento técnico son impresionantes.",
    author: "SaltySoulTrips",
    role: "Agencia de Viajes Boutique",
    rating: 5,
    link: "https://www.saltysoultrips.com",
  };

  return (
    <section
      className="py-24 sm:py-32 bg-gradient-to-br from-orange-50 to-rose-50"
      id="testimonios"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-base font-semibold leading-7 text-orange-600 uppercase tracking-wide">
            Testimonios
          </h2>
          <p className="mt-2 text-4xl font-display font-bold tracking-tight text-stone-900 sm:text-5xl">
            Lo que dicen mis <span className="gradient-text">clientes</span>
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="mx-auto max-w-4xl">
          <div className="glass-card rounded-3xl p-8 sm:p-12 relative">
            {/* Quote Icon */}
            <div className="absolute -top-6 left-8">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-600 to-rose-500 flex items-center justify-center shadow-lg">
                <Quote className="w-6 h-6 text-white" />
              </div>
            </div>

            {/* Stars */}
            <div className="flex gap-1 mb-6 justify-center sm:justify-start">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 text-orange-500 fill-orange-500"
                />
              ))}
            </div>

            {/* Quote Text */}
            <blockquote className="text-xl sm:text-2xl leading-relaxed text-stone-700 font-medium mb-8 italic">
              "{testimonial.quote}"
            </blockquote>

            {/* Author Info */}
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <div className="font-bold text-lg text-stone-900">
                  {testimonial.author}
                </div>
                <div className="text-stone-600 text-sm">{testimonial.role}</div>
              </div>
              <a
                href={testimonial.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-orange-600 hover:text-orange-700 transition-colors group"
              >
                Ver proyecto
                <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* Trust Badge */}
        <div className="mt-12 text-center">
          <p className="text-stone-600 text-sm">
            ¿Quieres ser el próximo caso de éxito?{" "}
            <a
              href="#contacto"
              className="text-orange-600 font-semibold hover:text-orange-700 underline"
            >
              Contáctame aquí
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
