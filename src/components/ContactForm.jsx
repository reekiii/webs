import React from "react";
import { Send, MapPin, Store, Phone, Mail } from "lucide-react";

const ContactForm = () => {
  return (
    <div
      className="relative py-24 sm:py-32 overflow-hidden bg-gradient-to-br from-orange-50 to-rose-50"
      id="contacto"
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-200/30 blur-[120px] rounded-full pointer-events-none" />

      <div className="mx-auto max-w-6xl px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold leading-7 text-orange-600 uppercase tracking-wide">
            Contacto
          </h2>
          <p className="mt-2 text-4xl font-display font-bold tracking-tight text-stone-900 sm:text-5xl">
            Hablemos de tu <span className="gradient-text">proyecto</span>
          </p>
          <p className="mt-4 text-lg text-stone-600">
            Completa el formulario y te responderé en menos de 24 horas
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="glass-card p-6 rounded-2xl">
              <h3 className="font-bold text-lg text-stone-900 mb-4">
                Información de Contacto
              </h3>

              <div className="space-y-4">
                <a
                  href="mailto:ikerdelgras@gmail.com"
                  className="flex items-center gap-3 text-stone-700 hover:text-orange-600 transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <div className="text-sm text-stone-600">Email</div>
                    <div className="font-medium">ikerdelgras@gmail.com</div>
                  </div>
                </a>

                <a
                  href="tel:+34657829 03"
                  className="flex items-center gap-3 text-stone-700 hover:text-orange-600 transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <div className="text-sm text-stone-600">
                      Teléfono / WhatsApp
                    </div>
                    <div className="font-medium">+34 657 829 03</div>
                  </div>
                </a>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-orange-600 to-rose-500 text-white">
              <h3 className="font-bold text-lg mb-2">Horario de Atención</h3>
              <p className="text-sm text-orange-50">
                Lunes a Viernes: 9:00 - 19:00
                <br />
                Respuesta en menos de 24h
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <div className="glass-card p-8 sm:p-12 rounded-3xl shadow-2xl">
              <form
                action="https://formspree.io/f/xjgknjdv"
                method="POST"
                className="space-y-6"
              >
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  {/* Nombre */}
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium leading-6 text-stone-900"
                    >
                      Nombre Completo *
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        required
                        className="block w-full rounded-lg border-0 bg-white py-3 px-4 text-stone-900 shadow-sm ring-1 ring-inset ring-stone-300 placeholder:text-stone-400 focus:ring-2 focus:ring-inset focus:ring-orange-500 sm:text-sm sm:leading-6 transition-all"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-stone-900"
                    >
                      Email *
                    </label>
                    <div className="mt-2">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        className="block w-full rounded-lg border-0 bg-white py-3 px-4 text-stone-900 shadow-sm ring-1 ring-inset ring-stone-300 placeholder:text-stone-400 focus:ring-2 focus:ring-inset focus:ring-orange-500 sm:text-sm sm:leading-6 transition-all"
                      />
                    </div>
                  </div>

                  {/* Telefono */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium leading-6 text-stone-900"
                    >
                      Teléfono *
                    </label>
                    <div className="mt-2">
                      <input
                        type="tel"
                        name="phone"
                        id="phone"
                        required
                        className="block w-full rounded-lg border-0 bg-white py-3 px-4 text-stone-900 shadow-sm ring-1 ring-inset ring-stone-300 placeholder:text-stone-400 focus:ring-2 focus:ring-inset focus:ring-orange-500 sm:text-sm sm:leading-6 transition-all"
                      />
                    </div>
                  </div>

                  {/* Plan */}
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="plan"
                      className="block text-sm font-medium leading-6 text-stone-900"
                    >
                      Plan de Interés
                    </label>
                    <div className="mt-2">
                      <select
                        id="plan"
                        name="plan"
                        className="block w-full rounded-lg border-0 bg-white py-3 px-4 text-stone-900 shadow-sm ring-1 ring-inset ring-stone-300 focus:ring-2 focus:ring-inset focus:ring-orange-500 sm:text-sm sm:leading-6 [&>option]:bg-white transition-all"
                      >
                        <option value="esencial">
                          Presencia Esencial (300€)
                        </option>
                        <option value="pro">Crecimiento Pro (600€)</option>
                        <option value="completa">Suite Completa (900€+)</option>
                        <option value="unsure">
                          No estoy seguro / Consultoría
                        </option>
                      </select>
                    </div>
                  </div>

                  {/* Nombre del Local */}
                  <div>
                    <label
                      htmlFor="restaurant-name"
                      className="block text-sm font-medium leading-6 text-stone-900"
                    >
                      <span className="flex items-center gap-2">
                        <Store className="w-4 h-4" /> Nombre del Local
                      </span>
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="restaurant-name"
                        id="restaurant-name"
                        className="block w-full rounded-lg border-0 bg-white py-3 px-4 text-stone-900 shadow-sm ring-1 ring-inset ring-stone-300 placeholder:text-stone-400 focus:ring-2 focus:ring-inset focus:ring-orange-500 sm:text-sm sm:leading-6 transition-all"
                      />
                    </div>
                  </div>

                  {/* Ubicacion */}
                  <div>
                    <label
                      htmlFor="location"
                      className="block text-sm font-medium leading-6 text-stone-900"
                    >
                      <span className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" /> Ubicación
                      </span>
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="location"
                        id="location"
                        placeholder="Ej. Madrid Centro"
                        className="block w-full rounded-lg border-0 bg-white py-3 px-4 text-stone-900 shadow-sm ring-1 ring-inset ring-stone-300 placeholder:text-stone-400 focus:ring-2 focus:ring-inset focus:ring-orange-500 sm:text-sm sm:leading-6 transition-all"
                      />
                    </div>
                  </div>

                  {/* Mensaje */}
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium leading-6 text-stone-900"
                    >
                      Mensaje (Opcional)
                    </label>
                    <div className="mt-2">
                      <textarea
                        name="message"
                        id="message"
                        rows={4}
                        placeholder="Cuéntame más sobre tu proyecto..."
                        className="block w-full rounded-lg border-0 bg-white py-3 px-4 text-stone-900 shadow-sm ring-1 ring-inset ring-stone-300 placeholder:text-stone-400 focus:ring-2 focus:ring-inset focus:ring-orange-500 sm:text-sm sm:leading-6 transition-all"
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <button
                    type="submit"
                    className="w-full rounded-lg bg-gradient-to-r from-orange-600 to-rose-500 px-4 py-4 text-center text-base font-semibold text-white shadow-lg hover:shadow-xl flex items-center justify-center gap-2 transition-all hover:scale-[1.02]"
                  >
                    Enviar Solicitud
                    <Send className="w-5 h-5" />
                  </button>
                  <p className="mt-4 text-xs text-center text-stone-500">
                    * Al enviar este formulario aceptas nuestra política de
                    privacidad.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
