import Image from "next/image";

export const metadata = {
  title: "Servicios — VÉRTICE",
  description: "Limpieza y mantenimiento de cristales en altura. Servicios profesionales en Pinamar, Villa Gesell y Costa Atlántica.",
};

export default function ServiciosPage() {
  return (
    <main className="min-h-screen py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* 📌 Encabezado */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-[#002B5C] mb-4">
            Nuestros Servicios
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Soluciones profesionales para el cuidado y mantenimiento de tus cristales. 
            Trabajamos con estándares de seguridad y calidad en toda la Costa Atlántica.
          </p>
        </div>

        {/* ✅ Servicios en tarjetas */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Servicio 1 */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
            <div className="h-48 bg-blue-50 flex items-center justify-center">
              <span className="text-5xl">🧼</span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-[#002B5C] mb-2">
                Limpieza de Vidrios en Altura
              </h3>
              <p className="text-gray-600 mb-4">
                Limpieza profesional de cristales en edificios, torres y fachadas. 
                Dejamos tus vidrios impecables, sin rayas y sin residuos.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Edificios y departamentos</li>
                <li>• Fachadas acristaladas</li>
                <li>• Terrazas y balcones</li>
              </ul>
            </div>
          </div>

          {/* Servicio 2 */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
            <div className="h-48 bg-blue-50 flex items-center justify-center">
              <span className="text-5xl">🛡️</span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-[#002B5C] mb-2">
                Tratamiento Antisalino
              </h3>
              <p className="text-gray-600 mb-4">
                Protección especial contra la corrosión por salitre y viento costero. 
                Especial para Pinamar, Villa Gesell y zona de costa.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Sellado de porosidad</li>
                <li>• Protección UV</li>
                <li>• Menor adherencia de suciedad</li>
              </ul>
            </div>
          </div>

          {/* Servicio 3 */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
            <div className="h-48 bg-blue-50 flex items-center justify-center">
              <span className="text-5xl">🔧</span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-[#002B5C] mb-2">
                Mantenimiento Periódico
              </h3>
              <p className="text-gray-600 mb-4">
                Planes de limpieza recurrente para consorcios y empresas. 
                Mantenemos tus instalaciones siempre impecables.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Mensual — Quincenal — Semanal</li>
                <li>• Presupuesto cerrado</li>
                <li>• Cobertura completa del edificio</li>
              </ul>
            </div>
          </div>

          {/* Servicio 4 */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
            <div className="h-48 bg-blue-50 flex items-center justify-center">
              <span className="text-5xl">✨</span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-[#002B5C] mb-2">
                Pulido y Restauración
              </h3>
              <p className="text-gray-600 mb-4">
                Eliminamos rayones, manchas y oxidación. Devolvemos la claridad 
                y transparencia a cristales dañados.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Remoción de rayas</li>
                <li>• Tratamiento de manchas</li>
                <li>• Recuperación de brillo</li>
              </ul>
            </div>
          </div>

          {/* Servicio 5 */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
            <div className="h-48 bg-blue-50 flex items-center justify-center">
              <span className="text-5xl">🏢</span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-[#002B5C] mb-2">
                Limpieza de Estructuras Exteriores
              </h3>
              <p className="text-gray-600 mb-4">
                Limpieza integral de marcos, alféizares, revestimientos y 
                estructuras exteriores junto con los vidrios.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Marcos y perfiles</li>
                <li>• Revestimientos de fachada</li>
                <li>• Limpieza completa del entorno</li>
              </ul>
            </div>
          </div>

          {/* Servicio 6 */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
            <div className="h-48 bg-blue-50 flex items-center justify-center">
              <span className="text-5xl">📋</span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-[#002B5C] mb-2">
                Asesoramiento Técnico
              </h3>
              <p className="text-gray-600 mb-4">
                Recomendaciones personalizadas para el cuidado de tus cristales 
                según la exposición al sol, viento y salitre.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Diagnóstico sin cargo</li>
                <li>• Plan de cuidados</li>
                <li>• Presupuesto transparente</li>
              </ul>
            </div>
          </div>
        </div>

        {/* 📱 Llamado a la acción */}
        <div className="mt-16 bg-[#002B5C] rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-3">¿Necesitás un servicio específico?</h2>
          <p className="text-blue-200 mb-6 max-w-xl mx-auto">
            Cada edificio y cada necesidad es distinta. Te hacemos un presupuesto 
            a medida sin compromiso.
          </p>
          <a
            href="https://wa.me/5492255555094"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#25D366] px-8 py-3 rounded-lg font-bold hover:bg-green-600 transition"
          >
            💬 Pedir Presupuesto Gratis
          </a>
        </div>
      </div>
    </main>
  );
}