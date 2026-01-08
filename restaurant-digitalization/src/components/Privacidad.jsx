import React from "react";
import { ArrowLeft } from "lucide-react";

const Privacidad = () => {
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
          Política de Privacidad
        </h1>

        <div className="prose prose-stone max-w-none">
          <p className="text-stone-600 text-lg mb-8">
            Última actualización: 8 de enero de 2026
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-stone-900 mb-4">
              1. Información que Recopilamos
            </h2>
            <p className="text-stone-700 leading-relaxed mb-4">
              Cuando usted se pone en contacto con nosotros a través del
              formulario de contacto, recopilamos la siguiente información:
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
            <h2 className="text-2xl font-bold text-stone-900 mb-4">
              2. Cómo Utilizamos su Información
            </h2>
            <p className="text-stone-700 leading-relaxed mb-4">
              Utilizamos la información recopilada únicamente para los
              siguientes propósitos:
            </p>
            <ul className="list-disc pl-6 text-stone-700 space-y-2">
              <li>Responder a sus consultas y solicitudes de presupuesto</li>
              <li>Comunicarnos con usted durante el desarrollo del proyecto</li>
              <li>Enviarle actualizaciones sobre el progreso de su proyecto</li>
              <li>
                Proporcionarle soporte técnico post-lanzamiento (si aplicable)
              </li>
            </ul>
            <p className="text-stone-700 leading-relaxed mt-4">
              <strong>No vendemos ni compartimos</strong> su información
              personal con terceros para fines de marketing.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-stone-900 mb-4">
              3. Base Legal para el Tratamiento de Datos
            </h2>
            <p className="text-stone-700 leading-relaxed">
              Procesamos sus datos personales bajo las siguientes bases legales
              conforme al RGPD (Reglamento General de Protección de Datos):
            </p>
            <ul className="list-disc pl-6 text-stone-700 space-y-2 mt-2">
              <li>
                <strong>Consentimiento:</strong> Al enviar el formulario de
                contacto, usted nos otorga su consentimiento explícito para
                procesar sus datos
              </li>
              <li>
                <strong>Ejecución de contrato:</strong> Para llevar a cabo el
                servicio de desarrollo web que usted solicita
              </li>
              <li>
                <strong>Interés legítimo:</strong> Para responder a consultas y
                mejorar nuestros servicios
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-stone-900 mb-4">
              4. Almacenamiento de Datos
            </h2>
            <p className="text-stone-700 leading-relaxed">
              Sus datos personales se almacenan de forma segura a través de{" "}
              <strong>Formspree</strong>, nuestro proveedor de formularios de
              contacto. Formspree cumple con las normativas de protección de
              datos GDPR y almacena la información en servidores seguros.
            </p>
            <p className="text-stone-700 leading-relaxed mt-4">
              Los datos se conservarán durante el tiempo necesario para cumplir
              con los propósitos descritos, o según lo requiera la legislación
              aplicable (mínimo 5 años para fines fiscales y legales).
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-stone-900 mb-4">
              5. Cookies y Tecnologías de Seguimiento
            </h2>
            <p className="text-stone-700 leading-relaxed">
              Este sitio web <strong>no utiliza cookies de terceros</strong>{" "}
              para rastreo o publicidad. Solo utilizamos cookies esenciales
              necesarias para el funcionamiento básico del sitio (como mantener
              su sesión activa).
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-stone-900 mb-4">
              6. Compartir Información con Terceros
            </h2>
            <p className="text-stone-700 leading-relaxed mb-4">
              Solo compartimos su información con los siguientes terceros
              necesarios para proporcionar nuestros servicios:
            </p>
            <ul className="list-disc pl-6 text-stone-700 space-y-2">
              <li>
                <strong>Formspree:</strong> Procesamiento del formulario de
                contacto
              </li>
              <li>
                <strong>Proveedores de hosting:</strong> Para alojar su sitio
                web (solo durante el proyecto contratado)
              </li>
            </ul>
            <p className="text-stone-700 leading-relaxed mt-4">
              Todos estos proveedores cumplen con las normativas de protección
              de datos GDPR.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-stone-900 mb-4">
              7. Sus Derechos (GDPR)
            </h2>
            <p className="text-stone-700 leading-relaxed mb-4">
              Usted tiene los siguientes derechos sobre sus datos personales:
            </p>
            <ul className="list-disc pl-6 text-stone-700 space-y-2">
              <li>
                <strong>Derecho de acceso:</strong> Solicitar una copia de los
                datos que tenemos sobre usted
              </li>
              <li>
                <strong>Derecho de rectificación:</strong> Corregir datos
                inexactos o incompletos
              </li>
              <li>
                <strong>Derecho de supresión:</strong> Solicitar la eliminación
                de sus datos (salvo obligaciones legales)
              </li>
              <li>
                <strong>Derecho de portabilidad:</strong> Recibir sus datos en
                formato estructurado
              </li>
              <li>
                <strong>Derecho de oposición:</strong> Oponerse al procesamiento
                de sus datos en ciertos casos
              </li>
              <li>
                <strong>Derecho a retirar el consentimiento:</strong> En
                cualquier momento, sin afectar el procesamiento previo
              </li>
            </ul>
            <p className="text-stone-700 leading-relaxed mt-4">
              Para ejercer cualquiera de estos derechos, contacte con nosotros
              en{" "}
              <a
                href="mailto:ikerdelgras@gmail.com"
                className="text-orange-600 hover:text-orange-700 underline"
              >
                ikerdelgras@gmail.com
              </a>
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-stone-900 mb-4">
              8. Seguridad de los Datos
            </h2>
            <p className="text-stone-700 leading-relaxed">
              Implementamos medidas técnicas y organizativas apropiadas para
              proteger sus datos personales contra acceso no autorizado,
              alteración, divulgación o destrucción. Sin embargo, ninguna
              transmisión por Internet es 100% segura, por lo que no podemos
              garantizar seguridad absoluta.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-stone-900 mb-4">
              9. Enlaces a Terceros
            </h2>
            <p className="text-stone-700 leading-relaxed">
              Este sitio web puede contener enlaces a sitios externos (como
              proyectos de portfolio). No somos responsables de las prácticas de
              privacidad de estos sitios. Le recomendamos revisar sus políticas
              de privacidad.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-stone-900 mb-4">
              10. Menores de Edad
            </h2>
            <p className="text-stone-700 leading-relaxed">
              Nuestros servicios están dirigidos a profesionales y empresas. No
              recopilamos intencionalmente información de menores de 18 años. Si
              detectamos que hemos recibido datos de un menor, los eliminaremos
              inmediatamente.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-stone-900 mb-4">
              11. Cambios en esta Política
            </h2>
            <p className="text-stone-700 leading-relaxed">
              Nos reservamos el derecho de actualizar esta política de
              privacidad en cualquier momento. Los cambios serán efectivos
              inmediatamente tras su publicación en este sitio. La fecha de
              "última actualización" se mostrará en la parte superior del
              documento.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-stone-900 mb-4">
              12. Contacto
            </h2>
            <p className="text-stone-700 leading-relaxed mb-4">
              Si tiene alguna pregunta sobre esta política de privacidad o sobre
              cómo manejamos sus datos personales, puede contactarnos en:
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
      </div>
    </div>
  );
};

export default Privacidad;
