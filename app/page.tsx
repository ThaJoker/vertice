import Image from "next/image";
import Link from "next/link";

const EMPRESA = {
  nombre: "VÉRTICE",
  eslogan: "Especialistas en cristales de altura",
  whatsapp: "549XXXXXXXXXXX", // ← Tu número real
};

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#002B5C] to-[#0077CC] text-white">
        <div className="max-w-7xl mx-auto px-4 py-16 md:py-20 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-2">{EMPRESA.nombre}</h1>
            <p className="text-xl text-blue-200 mb-6">{EMPRESA.eslogan}</p>
            <h2 className="text-2xl font-semibold mb-4">Limpieza Integral de Cristales</h2>
            <p className="text-lg text-blue-100 mb-8">
              Pinamar, Villa Gesell y toda la Costa Atlántica. Conocemos el clima costero y sabemos cómo cuidar tus cristales.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <a
                href={`https://wa.me/${EMPRESA.whatsapp}`}
                className="bg-white text-[#002B5C] px-6 py-3 rounded-lg font-bold hover:bg-blue-100 transition"
              >
                💬 Presupuesto Gratis
              </a>
              <Link
                href="/servicios"
                className="bg-white/20 px-6 py-3 rounded-lg font-semibold hover:bg-white/30 transition"
              >
                Ver Servicios
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4 text-sm">
              {[
                { icon: "🛡️", texto: "Personal capacitado" },
                { icon: "✨", texto: "Productos de calidad" },
                { icon: "⏱️", texto: "Cumplimiento y responsabilidad" },
                { icon: "🤝", texto: "Atención personalizada" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span>{item.icon}</span>
                  <span className="text-blue-100">{item.texto}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20">
            <Image
              src="/vertice-trabajo.jpg"
              alt="Vértice — Limpieza de cristales en altura"
              width={600}
              height={450}
              className="w-full h-auto object-cover"
              priority
            />
            <div className="absolute bottom-0 left-0 right-0 bg-[#002B5C]/80 p-3 text-center font-semibold">
              ✅ Pinamar · Villa Gesell · Cariló · Valeria del Mar
            </div>
          </div>
        </div>
      </section>

      {/* Zonas */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-[#002B5C] mb-12">
            ¿Dónde trabajamos?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: "🏙️", titulo: "Pinamar", desc: "Centro, Norte, Sur y alrededores" },
              { icon: "🏖️", titulo: "Villa Gesell", desc: "Centro, Norte, Sur y costa" },
              { icon: "🏡", titulo: "Zonas Aledañas", desc: "Cariló, Valeria del Mar, Ostende, Mar de las Pampas" },
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-xl shadow-sm text-center hover:shadow-md transition border-t-4 border-[#0077CC]">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-xl text-[#002B5C] mb-2">{item.titulo}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-[#002B5C] text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">¿Necesitás un presupuesto?</h2>
          <p className="mb-8 text-blue-200 text-lg">Sin cargo, sin compromiso. Te respondemos rápido.</p>
          <a
            href={`https://wa.me/${EMPRESA.whatsapp}`}
            className="inline-block bg-white text-[#002B5C] px-8 py-3 rounded-lg font-bold text-lg hover:bg-blue-100 transition"
          >
            💬 Escribinos por WhatsApp
          </a>
        </div>
      </section>
    </main>
  );
}