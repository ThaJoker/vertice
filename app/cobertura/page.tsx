export default function Cobertura() {
  return (
    <main className="min-h-screen py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-[#002B5C] text-center mb-4">
          Zonas de Atención
        </h1>
        <p className="text-center text-gray-600 mb-12 text-lg">
          Estamos presentes en la Costa Atlántica. Conocemos el lugar, vivimos acá.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Zona Principal */}
          <div className="bg-[#002B5C] text-white p-6 rounded-xl">
            <h3 className="font-bold text-xl mb-4">🌊 Zona Principal</h3>
            <ul className="space-y-3">
              {[
                "✅ Pinamar — Centro, Norte, Sur",
                "✅ Villa Gesell — Centro, Norte, Sur",
                "✅ Cariló",
                "✅ Valeria del Mar",
                "✅ Ostende",
                "✅ Mar de las Pampas",
              ].map((lugar, i) => (
                <li key={i} className="flex items-center gap-2">{lugar}</li>
              ))}
            </ul>
          </div>

          {/* Otras Localidades */}
          <div className="bg-white border border-gray-100 p-6 rounded-xl shadow-sm">
            <h3 className="font-bold text-lg text-[#002B5C] mb-4">📍 Otras Localidades</h3>
            <ul className="space-y-2 text-gray-600">
              {[
                "San Bernardo",
                "Mar de Ajó",
                "General Madariaga",
                "Necochea",
                "Costa Atlántica en general",
              ].map((lugar, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="text-amber-500">→</span>{lugar}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-gray-500">
              * Disponibilidad según distancia y tamaño del servicio.
            </p>
          </div>
        </div>

        {/* Por qué somos distintos en la Costa */}
        <div className="mt-12 bg-blue-50 p-8 rounded-xl">
          <h3 className="font-bold text-xl text-[#002B5C] mb-4 text-center">
            🌅 Por qué somos distintos en la Costa
          </h3>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            {[
              {
                icon: "💨",
                titulo: "Sabemos del clima",
                desc: "Salitre, viento y arena requieren productos especiales. No dañamos tus cristales.",
              },
              {
                icon: "🏢",
                titulo: "Conocemos los edificios",
                desc: "Experiencia en torres, complejos y casas características de la zona.",
              },
              {
                icon: "⚡",
                titulo: "Estamos acá",
                desc: "No viajamos desde lejos. Respuesta rápida y seguimiento constante.",
              },
            ].map((item, i) => (
              <div key={i}>
                <div className="text-3xl mb-2">{item.icon}</div>
                <h4 className="font-bold text-[#002B5C] mb-1">{item.titulo}</h4>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Consulta */}
        <div className="mt-12 text-center bg-[#002B5C] text-white p-8 rounded-2xl">
          <h3 className="text-2xl font-bold mb-3">¿Tu localidad no aparece?</h3>
          <p className="mb-6 text-blue-200">
            Escribinos, viajamos a distintas localidades según disponibilidad.
          </p>
          <a
            href="https://wa.me/549XXXXXXXXXXX"
            className="inline-block bg-white text-[#002B5C] px-8 py-3 rounded-lg font-bold hover:bg-blue-100 transition"
          >
            💬 Consultar disponibilidad
          </a>
        </div>
      </div>
    </main>
  );
}