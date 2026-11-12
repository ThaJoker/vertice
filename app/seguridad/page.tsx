import Link from "next/link";

export const metadata = {
  title: "Seguridad — VÉRTICE",
  description: "Protocolos, equipamiento y certificaciones. Trabajamos en altura con los más altos estándares de protección.",
};

export default function SeguridadPage() {
  return (
    <main className="min-h-screen py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* 📌 Encabezado */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-[#002B5C] mb-4">
            Seguridad y Compromiso
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Tu tranquilidad y la de nuestro equipo es nuestra prioridad. 
            Trabajamos con equipamiento certificado, protocolos estrictos 
            y documentación disponible en cada intervención.
          </p>
        </div>

        {/* ✅ Pilares de seguridad — ORIGINAL */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          
          <div className="bg-white rounded-xl shadow-md p-8">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-bold text-[#002B5C] mb-3">
              Equipamiento Certificado
            </h3>
            <p className="text-gray-600 mb-4">
              Usamos solo elementos homologados y revisados periódicamente.
            </p>
            <ul className="text-gray-600 space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-green-500 font-bold">✓</span>
                Arnés de cuerpo completo con puntos de anclaje
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 font-bold">✓</span>
                Líneas de vida y cuerdas certificadas
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 font-bold">✓</span>
                Mosquetones y conectores de seguridad
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 font-bold">✓</span>
                Casco y calzado de protección
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-md p-8">
            <div className="text-4xl mb-4">📋</div>
            <h3 className="text-xl font-bold text-[#002B5C] mb-3">
              Protocolos de Trabajo
            </h3>
            <p className="text-gray-600 mb-4">
              Cada servicio se ejecuta siguiendo un plan de seguridad predefinido.
            </p>
            <ul className="text-gray-600 space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-green-500 font-bold">✓</span>
                Inspección previa del lugar y anclajes
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 font-bold">✓</span>
                Evaluación de condiciones climáticas
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 font-bold">✓</span>
                Señalización y delimitación de zonas
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 font-bold">✓</span>
                Trabajo en parejas: nunca solo
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-md p-8">
            <div className="text-4xl mb-4">🎓</div>
            <h3 className="text-xl font-bold text-[#002B5C] mb-3">
              Capacitación Continua
            </h3>
            <p className="text-gray-600 mb-4">
              Nuestro equipo está formado y actualizado constantemente.
            </p>
            <ul className="text-gray-600 space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-green-500 font-bold">✓</span>
                Cursos de acceso y posicionamiento en altura
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 font-bold">✓</span>
                Primeros auxilios y maniobras de rescate
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 font-bold">✓</span>
                Manejo seguro de herramientas y productos
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 font-bold">✓</span>
                Normativas vigentes en seguridad laboral
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-md p-8">
            <div className="text-4xl mb-4">🛡️</div>
            <h3 className="text-xl font-bold text-[#002B5C] mb-3">
              Seguros y Respaldos
            </h3>
            <p className="text-gray-600 mb-4">
              Cobertura completa para tu tranquilidad y la de nuestro equipo.
            </p>
            <ul className="text-gray-600 space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-green-500 font-bold">✓</span>
                Seguro de Accidentes Personales
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 font-bold">✓</span>
                Responsabilidad Civil contra terceros
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 font-bold">✓</span>
                Cobertura de daños materiales
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 font-bold">✓</span>
                Documentación en regla al día
              </li>
            </ul>
          </div>
        </div>

        {/* 📑 NUEVA SECCIÓN — Documentación y Descargas */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-16">
          <h2 className="text-2xl font-bold text-[#002B5C] mb-6">📑 Documentación y Descargas</h2>
          <p className="text-gray-600 mb-6">Puede descargar nuestra documentación estándar o solicitar copia personalizada para su proyecto:</p>
          
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <a 
              href="/documentos/presupuesto-modelo.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 border border-gray-200 rounded-xl hover:bg-blue-50 hover:border-[#0077CC] transition"
            >
              <span className="text-2xl">📄</span>
              <div>
                <h3 className="font-semibold text-[#002B5C]">Presupuesto Modelo</h3>
                <p className="text-sm text-gray-500">Formato de cotización estándar</p>
              </div>
            </a>

            <a 
              href="/documentos/contrato-servicios.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 border border-gray-200 rounded-xl hover:bg-blue-50 hover:border-[#0077CC] transition"
            >
              <span className="text-2xl">📝</span>
              <div>
                <h3 className="font-semibold text-[#002B5C]">Contrato de Servicios</h3>
                <p className="text-sm text-gray-500">Términos y condiciones de trabajo</p>
              </div>
            </a>

            <a 
              href="/documentos/politica-seguridad.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 border border-gray-200 rounded-xl hover:bg-blue-50 hover:border-[#0077CC] transition"
            >
              <span className="text-2xl">🛡️</span>
              <div>
                <h3 className="font-semibold text-[#002B5C]">Política de Seguridad</h3>
                <p className="text-sm text-gray-500">Protocolos y procedimientos en obra</p>
              </div>
            </a>

            <a 
              href="/documentos/seguros-responsabilidad.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 border border-gray-200 rounded-xl hover:bg-blue-50 hover:border-[#0077CC] transition"
            >
              <span className="text-2xl">🔒</span>
              <div>
                <h3 className="font-semibold text-[#002B5C]">Seguros y Coberturas</h3>
                <p className="text-sm text-gray-500">Pólizas y constancias vigentes</p>
              </div>
            </a>
          </div>

          <p className="text-sm text-gray-500">
            💡 <em>Nota: Si los archivos aún no están disponibles para descarga, contáctenos y se los enviamos por WhatsApp o correo sin compromiso.</em>
          </p>
        </div>

        {/* ⚠️ RECOMENDACIONES AL CLIENTE — NUEVO */}
        <div className="bg-amber-50 rounded-2xl p-8 mb-12">
          <h2 className="text-xl font-bold text-[#002B5C] mb-4">⚠️ Recomendaciones antes de contratar</h2>
          <p className="text-gray-600 mb-4">Antes de elegir quién trabaja en su propiedad, verifique:</p>
          
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <span className="text-green-600 font-bold">✓</span>
              <p className="text-gray-700"><strong>¿La empresa cuenta con seguro de accidentes y responsabilidad civil vigente?</strong></p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-green-600 font-bold">✓</span>
              <p className="text-gray-700"><strong>¿El personal está capacitado y usa equipo de protección completo?</strong></p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-green-600 font-bold">✓</span>
              <p className="text-gray-700"><strong>¿El presupuesto es claro, por escrito y sin costos ocultos?</strong></p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-green-600 font-bold">✓</span>
              <p className="text-gray-700"><strong>¿La empresa ofrece garantía por el trabajo realizado?</strong></p>
            </div>
          </div>
        </div>

        {/* 📌 Garantía — ORIGINAL */}
        <div className="bg-blue-50 rounded-2xl p-8 text-center mb-12">
          <h2 className="text-2xl font-bold text-[#002B5C] mb-3">
            Trabajamos con Transparencia
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-4">
            Si lo solicitás, te presentamos antes de comenzar la documentación 
            completa: seguros, constancias de capacitación y plan de trabajo. 
            Sin costos adicionales.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
            <a
              href="https://wa.me/5492255555094"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#002B5C] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#003a7a] transition"
            >
              📄 Solicitar Documentación
            </a>
            <Link
              href="/contacto"
              className="bg-white text-[#002B5C] border-2 border-[#002B5C] px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition"
            >
              📍 Consultar por tu Zona
            </Link>
          </div>
        </div>

        {/* 📱 Llamado final — ORIGINAL */}
        <div className="bg-[#002B5C] rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-3">¿Tenés dudas sobre nuestra seguridad?</h2>
          <p className="text-blue-200 mb-6 max-w-xl mx-auto">
            Estamos para explicarte paso a paso cómo trabajamos.
          </p>
          <a
            href="https://wa.me/5492255555094"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#25D366] px-8 py-3 rounded-lg font-bold hover:bg-green-600 transition"
          >
            💬 Hablá con Nosotros
          </a>
        </div>
      </div>
    </main>
  );
}
