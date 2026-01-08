import React from "react";

const PrivacidadContent = () => {
  return (
    <div className="prose prose-stone max-w-none">
      <p className="text-stone-600 text-sm mb-6">
        Última actualización: 8 de enero de 2026
      </p>

      <section className="mb-8">
        <h3 className="text-xl font-bold text-stone-900 mb-3">
          1. Información que Recopilamos
        </h3>
        <p className="text-stone-700 leading-relaxed mb-3">
          Cuando usted se pone en contacto con nosotros a través del formulario
          de contacto, recopilamos la siguiente información:
        </p>
        <ul className="list-disc pl-6 text-stone-700 space-y-2">
          <li>Nombre completo</li>
          <li>Dirección de correo electrónico</li>
          <li>Número de teléfono</li>
          <li>Nombre del restaurante/local (opcional)</li>
          <li>Ubicación del negocio (opcional)</li>
          <li>Mensaje o consulta</li>
        </ul>
      </section>

      <section className="mb-8">
        <h3 className="text-xl font-bold text-stone-900 mb-3">
          2. Cómo Utilizamos su Información
        </h3>
        <p className="text-stone-700 leading-relaxed mb-3">
          Utilizamos la información recopilada únicamente para:
        </p>
        <ul className="list-disc pl-6 text-stone-700 space-y-2">
          <li>Responder a sus consultas y solicitudes de presupuesto</li>
          <li>Comunicarnos con usted durante el desarrollo del proyecto</li>
          <li>Proporcionarle soporte técnico post-lanzamiento</li>
        </ul>
        <p className="text-stone-700 leading-relaxed mt-3">
          <strong>No vendemos ni compartimos</strong> su información personal
          con terceros para fines de marketing.
        </p>
      </section>

      <section className="mb-8">
        <h3 className="text-xl font-bold text-stone-900 mb-3">
          3. Almacenamiento de Datos
        </h3>
        <p className="text-stone-700 leading-relaxed">
          Sus datos personales se almacenan de forma segura a través de{" "}
          <strong>Formspree</strong>, nuestro proveedor de formularios de
          contacto. Formspree cumple con las normativas GDPR.
        </p>
      </section>

      <section className="mb-8">
        <h3 className="text-xl font-bold text-stone-900 mb-3">
          4. Sus Derechos (GDPR)
        </h3>
        <p className="text-stone-700 leading-relaxed mb-3">
          Usted tiene los siguientes derechos sobre sus datos personales:
        </p>
        <ul className="list-disc pl-6 text-stone-700 space-y-2">
          <li>
            <strong>Derecho de acceso:</strong> Solicitar una copia de los datos
            que tenemos sobre usted
          </li>
          <li>
            <strong>Derecho de rectificación:</strong> Corregir datos inexactos
            o incompletos
          </li>
          <li>
            <strong>Derecho de supresión:</strong> Solicitar la eliminación de
            sus datos
          </li>
          <li>
            <strong>Derecho de portabilidad:</strong> Recibir sus datos en
            formato estructurado
          </li>
        </ul>
        <p className="text-stone-700 leading-relaxed mt-3">
          Para ejercer cualquiera de estos derechos, contacte con nosotros en{" "}
          <a
            href="mailto:ikerdelgras@gmail.com"
            className="text-orange-600 hover:text-orange-700 underline"
          >
            ikerdelgras@gmail.com
          </a>
        </p>
      </section>

      <section className="mb-8">
        <h3 className="text-xl font-bold text-stone-900 mb-3">5. Contacto</h3>
        <p className="text-stone-700 leading-relaxed mb-3">
          Si tiene alguna pregunta sobre esta política de privacidad:
        </p>
        <ul className="list-none text-stone-700 space-y-2">
          <li>
            <strong>Responsable:</strong> Iker Delgado Gras
          </li>
          <li>
            <strong>Email:</strong>{" "}
            <a
              href="mailto:ikerdelgras@gmail.com"
              className="text-orange-600 hover:text-orange-700 underline"
            >
              ikerdelgras@gmail.com
            </a>
          </li>
          <li>
            <strong>Teléfono:</strong> +34 657 829 03
          </li>
        </ul>
      </section>
    </div>
  );
};

export default PrivacidadContent;
