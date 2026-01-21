import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "¿Cuánto tiempo tarda el desarrollo de mi web?",
      answer:
        "Entre 1-3 semanas según la complejidad del proyecto y mi carga de trabajo actual. Te informo del plazo exacto al contactar. Trabajo con atención personalizada para garantizar calidad.",
    },
    {
      question: "¿Tienes experiencia con restaurantes?",
      answer:
        "Estoy especializándome en este sector. Tengo experiencia creando webs profesionales (puedes ver Salty Soul Trips como ejemplo de mi trabajo) y ahora enfoco mi expertise técnico en restaurantes. Por eso ofrezco condiciones especiales a los primeros clientes.",
    },
    {
      question: "¿Incluye hosting y dominio?",
      answer:
        "Sí, todos los planes incluyen hosting de alta velocidad durante el primer año. El dominio (.com, .es, etc.) está incluido también, o puedo ayudarte a configurar uno que ya tengas.",
    },
    {
      question: "¿Puedo actualizar el contenido yo mismo?",
      answer:
        "En el plan Growth y Enterprise, incluyo un panel de control (CMS) intuitivo donde podrás actualizar tu carta, fotos, precios y horarios sin necesidad de programar. También te proporcionaré documentación y soporte.",
    },
    {
      question: "¿Quién es el dueño legal de la web y el dominio?",
      answer:
        "Usted es el propietario total de la web y el dominio desde el primer día. El dominio se registra a su nombre y el pago (aprox. 12€/año) lo realiza usted directamente al proveedor para asegurar que siempre mantenga el control de su marca.",
    },
    {
      question: "¿Tengo que gestionar yo el hosting o las cuentas técnicas?",
      answer:
        "No, mi servicio es 'llave en mano'. Yo me encargo de toda la configuración técnica, el alojamiento en servidores de alto rendimiento y la conexión del dominio para que usted no tenga que tocar nada ni entender de programación.",
    },
    {
      question:
        "¿Qué pasa si en el futuro quiero trabajar con otro profesional?",
      answer:
        "Al finalizar el proyecto, le entrego todo el código fuente de su web. Al ser de su propiedad total y no depender de suscripciones ocultas, cualquier otro programador podrá trabajar sobre ella en el futuro si usted así lo decide.",
    },
    {
      question: "¿Por qué no hay cuotas mensuales de mantenimiento?",
      answer:
        "Utilizo tecnología moderna (React) que permite alojar la web de forma extremadamente eficiente y segura. Esto me permite ofrecerle un modelo de Pago Único donde usted solo paga por el trabajo realizado, sin alquileres mensuales por el simple hecho de tener su web online.",
    },
    {
      question: "¿Trabajas con restaurantes fuera de tu ciudad?",
      answer:
        "¡Por supuesto! Todo el proceso es 100% remoto. Solo necesitamos videollamadas ocasionales y comunicación por email/WhatsApp.",
    },
    {
      question: "¿La web será móvil responsive?",
      answer:
        "Absolutamente. Más del 70% de las búsquedas de restaurantes se hacen desde móviles. Todas mis webs están diseñadas primero para móvil (mobile-first) y se ven perfectas en cualquier dispositivo.",
    },
    {
      question: "¿Qué pasa si quiero hacer cambios durante el desarrollo?",
      answer:
        "Tendrás 2-3 rondas de revisiones incluidas en todos los planes. Los cambios mayores fuera del alcance original pueden tener un costo adicional, pero siempre lo discutiremos antes.",
    },
    {
      question: "¿Puedo contratar o cancelar el mantenimiento cuando quiera?",
      answer:
        "Sí, totalmente. El mantenimiento es opcional y flexible. Puedes contratarlo por meses sueltos si necesitas cambios, o dejarlo si prefieres gestionarlo tú. Si lo cancelas y vuelves meses después, simplemente reanudamos el servicio.",
    },
    {
      question: "¿El código es mío al final?",
      answer:
        "Sí, al finalizar el proyecto y recibir el pago completo, te entrego todo el código fuente. La web es 100% tuya, sin dependencias ni suscripciones ocultas.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 sm:py-32 bg-white" id="faq">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold leading-7 text-orange-600 uppercase tracking-wide">
            FAQ
          </h2>
          <p className="mt-2 text-4xl font-display font-bold tracking-tight text-stone-900 sm:text-5xl">
            Preguntas <span className="gradient-text">Frecuentes</span>
          </p>
          <p className="mt-4 text-lg text-stone-600">
            Todo lo que necesitas saber antes de empezar
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-stone-200 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-md"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-orange-50 transition-colors"
              >
                <span className="font-semibold text-lg text-stone-900 pr-8">
                  {faq.question}
                </span>
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-600">
                  {openIndex === index ? (
                    <Minus className="w-5 h-5" />
                  ) : (
                    <Plus className="w-5 h-5" />
                  )}
                </span>
              </button>

              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openIndex === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-6 pt-2 bg-orange-50/50">
                  <p className="text-stone-700 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
