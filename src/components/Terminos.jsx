import React from "react";
import { ArrowLeft } from "lucide-react";

const Terminos = () => {
  return (
    <div className="min-h-screen bg-stone-50 py-24">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <a
          href="/"
          className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 mb-8 font-medium"
        >
          <ArrowLeft className="w-4 h-4" />
          Volver al inicio
        </a>

        <h1 className="text-4xl font-display font-bold text-stone-900 mb-8">
          Términos de Servicio
        </h1>

        <div className="prose prose-stone max-w-none">
          <p className="text-stone-600 text-lg mb-8">
            Última actualización: 8 de enero de 2026
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-stone-900 mb-4">
              1. Aceptación de los Términos
            </h2>
            <p className="text-stone-700 leading-relaxed">
              Al contratar los servicios de desarrollo web ofrecidos por Iker
              Delgado Gras, usted acepta estos términos de servicio en su
              totalidad. Si no está de acuerdo con alguna parte de estos
              términos, le recomendamos no contratar nuestros servicios.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-stone-900 mb-4">
              2. Descripción del Servicio
            </h2>
            <p className="text-stone-700 leading-relaxed mb-4">
              Ofrecemos servicios de diseño y desarrollo web especializado para
              restaurantes, que incluyen (dependiendo del plan contratado):
            </p>
            <ul className="list-disc pl-6 text-stone-700 space-y-2">
              <li>Desarrollo de sitios web responsivos</li>
              <li>Optimización SEO para buscadores</li>
              <li>Integración de sistemas de gestión de contenido (CMS)</li>
              <li>Configuración de hosting y dominio</li>
              <li>Soporte técnico post-lanzamiento</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-stone-900 mb-4">
              3. Propiedad Intelectual
            </h2>
            <p className="text-stone-700 leading-relaxed mb-4">
              <strong>Propiedad del Cliente:</strong> Una vez finalizado el
              proyecto y recibido el pago completo, usted será el propietario
              total del código fuente y todos los archivos de diseño de su sitio
              web.
            </p>
            <p className="text-stone-700 leading-relaxed">
              <strong>Uso de Imagen:</strong> Nos reservamos el derecho de
              mostrar el proyecto completado en nuestro portafolio y materiales
              promocionales, salvo que se acuerde lo contrario por escrito.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-stone-900 mb-4">
              4. Proceso de Pago
            </h2>
            <p className="text-stone-700 leading-relaxed mb-4">
              <strong>Pago Único:</strong> Nuestro modelo es de inversión única,
              sin cuotas mensuales recurrentes. El pago se estructura de la
              siguiente manera:
            </p>
            <ul className="list-disc pl-6 text-stone-700 space-y-2">
              <li>50% al inicio del proyecto (señal)</li>
              <li>50% al finalizar y entregar el proyecto</li>
            </ul>
            <p className="text-stone-700 leading-relaxed mt-4">
              El hosting del primer año está incluido en todos los planes. A
              partir del segundo año, el costo de renovación de hosting y
              dominio lo asume directamente el cliente (aproximadamente
              12-50€/año según proveedores).
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-stone-900 mb-4">
              5. Plazos de Entrega
            </h2>
            <p className="text-stone-700 leading-relaxed">
              Los plazos estimados varían según el plan:
            </p>
            <ul className="list-disc pl-6 text-stone-700 space-y-2 mt-2">
              <li>Plan Presencia Esencial: 1-2 semanas</li>
              <li>Plan Crecimiento Pro: 2-3 semanas</li>
              <li>Plan Suite Completa: 3-4 semanas</li>
            </ul>
            <p className="text-stone-700 leading-relaxed mt-4">
              Estos plazos son estimados y pueden variar dependiendo de la
              disponibilidad de contenido por parte del cliente, número de
              revisiones solicitadas y complejidad adicional del proyecto.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-stone-900 mb-4">
              6. Revisiones y Cambios
            </h2>
            <p className="text-stone-700 leading-relaxed">
              Todos los planes incluyen 2-3 rondas de revisiones durante el
              desarrollo. Los cambios solicitados fuera del alcance original del
              proyecto pueden conllevar costos adicionales, que serán
              comunicados y acordados previamente.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-stone-900 mb-4">
              7. Responsabilidades del Cliente
            </h2>
            <p className="text-stone-700 leading-relaxed mb-2">
              El cliente se compromete a:
            </p>
            <ul className="list-disc pl-6 text-stone-700 space-y-2">
              <li>
                Proporcionar todo el contenido necesario (textos, imágenes,
                logos) en tiempo y forma
              </li>
              <li>
                Responder a las consultas y solicitudes de feedback en un plazo
                razonable
              </li>
              <li>
                Revisar y aprobar los entregables en cada fase del proyecto
              </li>
              <li>Realizar los pagos según lo acordado</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-stone-900 mb-4">
              8. Garantía y Mantenimiento
            </h2>
            <p className="text-stone-700 leading-relaxed">
              Ofrecemos 1 mes de soporte técnico gratuito post-lanzamiento para
              resolver cualquier error o ajuste menor. El mantenimiento continuo
              después de este periodo es opcional y se cotiza por separado.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-stone-900 mb-4">
              9. Cancelación
            </h2>
            <p className="text-stone-700 leading-relaxed">
              Si el cliente decide cancelar el proyecto antes de su
              finalización, el pago inicial (50%) no será reembolsable, ya que
              cubre el tiempo y recursos invertidos hasta ese momento.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-stone-900 mb-4">
              10. Limitación de Responsabilidad
            </h2>
            <p className="text-stone-700 leading-relaxed">
              No nos hacemos responsables de pérdidas de datos, ingresos o
              beneficios derivados del uso del sitio web. Nuestro compromiso es
              entregar un sitio web funcional y optimizado según las mejores
              prácticas actuales.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-stone-900 mb-4">
              11. Modificaciones de los Términos
            </h2>
            <p className="text-stone-700 leading-relaxed">
              Nos reservamos el derecho de actualizar estos términos en
              cualquier momento. Los cambios serán efectivos inmediatamente
              después de su publicación en este sitio web.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-stone-900 mb-4">
              12. Contacto
            </h2>
            <p className="text-stone-700 leading-relaxed">
              Para cualquier duda sobre estos términos, puede contactarnos en:
            </p>
            <ul className="list-none text-stone-700 space-y-1 mt-2">
              <li>
                <strong>Email:</strong> ikerdelgras@gmail.com
              </li>
              <li>
                <strong>Teléfono:</strong> +34 657 829 03
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Terminos;
