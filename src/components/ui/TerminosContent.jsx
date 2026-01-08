import React from "react";

const TerminosContent = () => {
  return (
    <div className="prose prose-stone max-w-none">
      <p className="text-stone-600 text-sm mb-6">
        Última actualización: 8 de enero de 2026
      </p>

      <section className="mb-8">
        <h3 className="text-xl font-bold text-stone-900 mb-3">
          1. Aceptación de los Términos
        </h3>
        <p className="text-stone-700 leading-relaxed">
          Al contratar los servicios de desarrollo web ofrecidos por Iker
          Delgado Gras, usted acepta estos términos de servicio en su totalidad.
          Si no está de acuerdo con alguna parte de estos términos, le
          recomendamos no contratar nuestros servicios.
        </p>
      </section>

      <section className="mb-8">
        <h3 className="text-xl font-bold text-stone-900 mb-3">
          2. Descripción del Servicio
        </h3>
        <p className="text-stone-700 leading-relaxed mb-3">
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
        <h3 className="text-xl font-bold text-stone-900 mb-3">
          3. Propiedad Intelectual
        </h3>
        <p className="text-stone-700 leading-relaxed mb-3">
          <strong>Propiedad del Cliente:</strong> Una vez finalizado el proyecto
          y recibido el pago completo, usted será el propietario total del
          código fuente y todos los archivos de diseño de su sitio web.
        </p>
        <p className="text-stone-700 leading-relaxed">
          <strong>Uso de Imagen:</strong> Nos reservamos el derecho de mostrar
          el proyecto completado en nuestro portafolio y materiales
          promocionales, salvo que se acuerde lo contrario por escrito.
        </p>
      </section>

      <section className="mb-8">
        <h3 className="text-xl font-bold text-stone-900 mb-3">
          4. Proceso de Pago
        </h3>
        <p className="text-stone-700 leading-relaxed mb-3">
          <strong>Pago Único:</strong> Nuestro modelo es de inversión única, sin
          cuotas mensuales recurrentes. El pago se estructura de la siguiente
          manera:
        </p>
        <ul className="list-disc pl-6 text-stone-700 space-y-2">
          <li>50% al inicio del proyecto (señal)</li>
          <li>50% al finalizar y entregar el proyecto</li>
        </ul>
      </section>

      <section className="mb-8">
        <h3 className="text-xl font-bold text-stone-900 mb-3">
          5. Plazos de Entrega
        </h3>
        <p className="text-stone-700 leading-relaxed mb-2">
          Los plazos estimados varían según el plan:
        </p>
        <ul className="list-disc pl-6 text-stone-700 space-y-2">
          <li>Plan Presencia Esencial: 1-2 semanas</li>
          <li>Plan Crecimiento Pro: 2-3 semanas</li>
          <li>Plan Suite Completa: 3-4 semanas</li>
        </ul>
      </section>

      <section className="mb-8">
        <h3 className="text-xl font-bold text-stone-900 mb-3">6. Contacto</h3>
        <p className="text-stone-700 leading-relaxed mb-2">
          Para cualquier duda sobre estos términos, puede contactarnos en:
        </p>
        <ul className="list-none text-stone-700 space-y-1">
          <li>
            <strong>Email:</strong> ikerdelgras@gmail.com
          </li>
          <li>
            <strong>Teléfono:</strong> +34 657 829 03
          </li>
        </ul>
      </section>
    </div>
  );
};

export default TerminosContent;
