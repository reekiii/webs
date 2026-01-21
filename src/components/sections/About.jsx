import React from "react";
import { Heart, Code, Utensils, Users } from "lucide-react";

const About = () => {
  return (
    <section className="py-24 sm:py-32 bg-white" id="sobre-mi">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 border border-orange-200 text-orange-600 text-sm font-semibold mb-6 shadow-sm">
            <Heart className="w-4 h-4" />
            Sobre Mí
          </div>
          <h2 className="text-4xl sm:text-5xl font-display font-bold tracking-tight text-stone-900 mb-6">
            Hola, soy <span className="gradient-text">Iker Delgado Gras</span>
          </h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            Desarrollador web especializado en restaurantes. Combino mi pasión
            por la gastronomía con mi experiencia técnica.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left: Avatar & Quick Info */}
          <div className="flex flex-col items-center lg:items-start">
            <div className="relative mb-6 sm:mb-8">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-rose-400 rounded-full blur-xl opacity-30"></div>
              <div className="relative w-32 h-32 sm:w-48 sm:h-48 rounded-full bg-gradient-to-br from-orange-600 to-rose-500 flex items-center justify-center text-white text-4xl sm:text-6xl font-bold font-display shadow-2xl">
                ID
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 text-orange-700 text-sm font-semibold">
                <Code className="w-4 h-4" />
                Desarrollador Web
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-100 text-rose-700 text-sm font-semibold">
                <Utensils className="w-4 h-4" />
                Amante de la Gastronomía
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 text-amber-700 text-sm font-semibold">
                <Users className="w-4 h-4" />
                Especialista en Restaurantes
              </span>
            </div>
          </div>

          {/* Right: Story */}
          <div className="space-y-6 text-lg text-stone-700 leading-relaxed">
            <p>
              <Heart className="w-5 h-5 inline text-rose-500 mr-2" />
              <strong className="text-stone-900">
                Me encanta comer fuera.
              </strong>{" "}
              Descubrir restaurantes nuevos, probar platos únicos, vivir
              experiencias gastronómicas diferentes... Es una de mis mayores
              pasiones.
            </p>

            <p>
              Pero como desarrollador web, también me fijo en{" "}
              <strong className="text-stone-900">
                cómo se presentan online
              </strong>
              .
            </p>

            <div className="p-6 bg-gradient-to-r from-orange-50 to-rose-50 rounded-2xl border-l-4 border-orange-600">
              <p className="text-xl font-semibold text-stone-900 mb-3">
                Y la verdad duele:
              </p>
              <p className="text-stone-700">
                Hay restaurantes increíbles, con comida espectacular y un
                ambiente único, que{" "}
                <strong>pasan completamente desapercibidos</strong> porque no
                tienen presencia digital o tienen una web que da mala imagen.
              </p>
            </div>

            <p>
              Por eso decidí especializarme en este sector. No hago webs
              genéricas para cualquier negocio.{" "}
              <strong className="text-orange-600">
                Me dedico exclusivamente a restaurantes
              </strong>{" "}
              porque entiendo el sector, sé lo que buscan los clientes, y
              conozco la importancia de transmitir esa primera impresión que
              invite a reservar.
            </p>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mx-auto max-w-4xl">
          <div className="glass-card p-8 sm:p-12 rounded-3xl text-center">
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-stone-900 mb-6">
              Mi Objetivo
            </h3>
            <p className="text-xl text-stone-700 leading-relaxed mb-6">
              Que ningún restaurante de calidad pierda clientes por no tener una
              web profesional. Que los dueños puedan{" "}
              <span className="text-orange-600 font-bold">
                centrarse en cocinar y atender
              </span>
              , mientras yo me encargo de que su presencia online esté a la
              altura de su propuesta.
            </p>
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-600 to-rose-500 text-white px-8 py-4 rounded-2xl shadow-lg font-semibold">
              Tu restaurante merece estar online. Ya.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
