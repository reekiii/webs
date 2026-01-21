import React, { useState } from "react";
import { Calendar, Clock, Users, Sparkles } from "lucide-react";
import ReservationModal from "../ui/ReservationModal";

const ReservationDemo = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="py-24 sm:py-32 bg-gradient-to-br from-orange-50 via-white to-rose-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-rose-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-100 to-rose-100 border border-orange-200 text-orange-700 text-sm font-semibold mb-6">
            <Sparkles className="w-4 h-4" />
            Sistema de Reservas Incluido
          </div>
          <h2 className="text-4xl sm:text-5xl font-display font-bold tracking-tight text-stone-900 mb-6">
            Reservas Online{" "}
            <span className="gradient-text">Sin Comisiones</span>
          </h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            Tus clientes reservan directamente desde tu web. Sin intermediarios,
            sin comisiones, sin dependencias.
          </p>
        </div>

        {/* Main CTA Card */}
        <div className="max-w-4xl mx-auto">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 to-rose-600 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-500"></div>
            <div className="relative bg-white rounded-3xl p-8 md:p-12 border border-orange-200 shadow-xl">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Left: Info */}
                <div>
                  <h3 className="text-3xl font-bold text-stone-900 mb-4 font-display">
                    Prueba el Sistema de Reservas
                  </h3>
                  <p className="text-stone-600 mb-6 leading-relaxed">
                    Este es un ejemplo funcional del sistema de reservas que
                    incluyo en tus webs. Calendario visual, confirmaciones
                    automáticas y recordatorios por email.
                  </p>

                  {/* Features */}
                  <div className="space-y-3 mb-8">
                    <div className="flex items-center gap-3 text-sm text-stone-700">
                      <div className="w-8 h-8 rounded-lg bg-orange-100 flex items-center justify-center flex-shrink-0">
                        <Calendar className="w-4 h-4 text-orange-600" />
                      </div>
                      <span className="font-medium">
                        Calendario en tiempo real
                      </span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-stone-700">
                      <div className="w-8 h-8 rounded-lg bg-orange-100 flex items-center justify-center flex-shrink-0">
                        <Clock className="w-4 h-4 text-orange-600" />
                      </div>
                      <span className="font-medium">
                        Recordatorios automáticos
                      </span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-stone-700">
                      <div className="w-8 h-8 rounded-lg bg-orange-100 flex items-center justify-center flex-shrink-0">
                        <Users className="w-4 h-4 text-orange-600" />
                      </div>
                      <span className="font-medium">Gestión de capacidad</span>
                    </div>
                  </div>

                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-orange-600 to-rose-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                  >
                    Probar Sistema de Reservas
                  </button>
                </div>

                {/* Right: Visual */}
                <div className="relative">
                  <div className="aspect-square rounded-2xl bg-gradient-to-br from-orange-100 to-rose-100 p-8 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-24 h-24 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-orange-600 to-rose-600 flex items-center justify-center shadow-2xl">
                        <Calendar className="w-12 h-12 text-white" />
                      </div>
                      <div className="space-y-2">
                        <div className="h-3 bg-white/60 rounded-full w-3/4 mx-auto"></div>
                        <div className="h-3 bg-white/40 rounded-full w-1/2 mx-auto"></div>
                        <div className="h-3 bg-white/20 rounded-full w-2/3 mx-auto"></div>
                      </div>
                    </div>
                  </div>
                  {/* Floating badge */}
                  <div className="absolute -top-4 -right-4 px-4 py-2 bg-emerald-500 text-white text-xs font-bold rounded-full shadow-lg">
                    0% Comisiones
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Info Cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm">
              <div className="text-3xl font-bold text-orange-600 mb-2">
                24/7
              </div>
              <p className="text-sm text-stone-600">
                Tus clientes pueden reservar en cualquier momento, incluso
                cuando estás cerrado
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm">
              <div className="text-3xl font-bold text-orange-600 mb-2">0€</div>
              <p className="text-sm text-stone-600">
                Sin comisiones por reserva. A diferencia de TheFork que cobra
                hasta 4€/comensal
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm">
              <div className="text-3xl font-bold text-orange-600 mb-2">
                100%
              </div>
              <p className="text-sm text-stone-600">
                Control total. Los datos de tus clientes son tuyos, no de
                terceros
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Reservation Modal */}
      <ReservationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        calUsername="rekicena"
      />
    </section>
  );
};

export default ReservationDemo;
