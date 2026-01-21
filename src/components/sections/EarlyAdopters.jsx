import React from "react";
import { Sparkles, Target, Heart, Zap } from "lucide-react";

const EarlyAdopters = () => {
  return (
    <section className="relative py-24 sm:py-32 bg-gradient-to-br from-orange-50 via-white to-rose-50 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-orange-200/20 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-rose-200/20 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="mx-auto max-w-4xl px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border-2 border-orange-300 text-orange-600 text-sm font-bold mb-6 shadow-sm">
            <Sparkles className="w-4 h-4" />
            Programa Especial
          </div>
          <h2 className="text-4xl sm:text-5xl font-display font-bold tracking-tight text-stone-900 mb-6">
            Primeros Clientes:{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-rose-600">
              Construyamos Juntos
            </span>
          </h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto leading-relaxed">
            Estoy especializándome en webs para restaurantes. Por eso, ofrezco
            condiciones especiales a los primeros clientes que confíen en mí.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-2 gap-6 mb-12">
          <div className="p-6 bg-white rounded-2xl border-2 border-orange-200 hover:border-orange-400 transition-all hover:-translate-y-1 shadow-sm hover:shadow-md">
            <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center mb-4">
              <Target className="w-6 h-6 text-orange-600" />
            </div>
            <h3 className="text-xl font-bold text-stone-900 mb-2">
              Atención 100% Personalizada
            </h3>
            <p className="text-stone-600 text-sm">
              Comunicación directa conmigo. Sin intermediarios, sin esperas. Tu
              proyecto es mi prioridad.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl border-2 border-orange-200 hover:border-orange-400 transition-all hover:-translate-y-1 shadow-sm hover:shadow-md">
            <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center mb-4">
              <Heart className="w-6 h-6 text-orange-600" />
            </div>
            <h3 className="text-xl font-bold text-stone-900 mb-2">
              Revisiones Incluidas
            </h3>
            <p className="text-stone-600 text-sm">
              Trabajamos juntos hasta que estés 100% satisfecho con el resultado
              final. Sin límite de revisiones.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl border-2 border-orange-200 hover:border-orange-400 transition-all hover:-translate-y-1 shadow-sm hover:shadow-md">
            <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center mb-4">
              <Zap className="w-6 h-6 text-orange-600" />
            </div>
            <h3 className="text-xl font-bold text-stone-900 mb-2">
              Precio de Lanzamiento
            </h3>
            <p className="text-stone-600 text-sm">
              Tarifas competitivas mientras construyo mi portfolio de
              restaurantes. Calidad profesional, inversión accesible.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl border-2 border-orange-200 hover:border-orange-400 transition-all hover:-translate-y-1 shadow-sm hover:shadow-md">
            <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center mb-4">
              <Sparkles className="w-6 h-6 text-orange-600" />
            </div>
            <h3 className="text-xl font-bold text-stone-900 mb-2">
              Expertise Comprobado
            </h3>
            <p className="text-stone-600 text-sm">
              Tengo experiencia creando webs profesionales (ver Salty Soul
              Trips). Ahora enfoco mi expertise en restaurantes.
            </p>
          </div>
        </div>

        {/* Trust Note */}
        <p className="text-center text-sm text-stone-500 mt-8">
          💡 <strong>Transparencia total:</strong> Estoy construyendo mi
          portfolio de restaurantes. Por eso ofrezco estas condiciones
          especiales. Tu éxito es mi éxito.
        </p>
      </div>
    </section>
  );
};

export default EarlyAdopters;
