import Link from "next/link";
import Image from "next/image";

const EMPRESA = {
  nombre: "VÉRTICE",
  eslogan: "Especialistas en cristales de altura",
  whatsapp: "+5492255555094",
};

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* HERO CON IMAGEN */}
      <section className="relative w-full h-[85vh] min-h-[550px] overflow-hidden">
        <Image
          src="/hero-fondo.png"
          alt="Limpieza de vidrios en rascacielos tomada desde dron"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/55" />

        <div className="relative z-10 flex flex-col justify-center items-center h-full px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            {EMPRESA.nombre}
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-6">
            {EMPRESA.eslogan}
          </p>
          <p className="text-lg text-gray-200 mb-8 max-w-2xl">
            Villa Gesell, Pinamar y toda la Costa Atlántica. Conocemos el clima costero y sabemos cómo cuidar tus cristales.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={`https://wa.me/${EMPRESA.whatsapp}`}
              className="bg-white text-[#002B5C] px-8 py-3 rounded-lg font-bold hover:bg-blue-100 transition"
            >
              💬 Presupuesto Gratis
            </a>
            <Link
              href="/servicios"
              className="bg-white/20 px-8 py-3 rounded-lg font-semibold text-white hover:bg-white/30 transition"
            >
              Ver Servicios
            </Link>
          </div>
        </div>
      </section>

      {/* ZONAS DE TRABAJO */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-center text-[#002B5C] mb-10">¿Dónde trabajamos?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { titulo: "Villa Gesell", desc: "Centro, Norte, Sur y costa" },
              { titulo: "Pinamar", desc: "Centro, Norte, Sur y alrededores" },
              { titulo: "Zonas Aledañas", desc: "Cariló, Valeria del Mar, Ostende" },
            ].map((zona, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-sm text-center border-t-4 border-[#0077CC]">
                <h3 className="font-bold text-lg text-[#002B5C] mb-2">{zona.titulo}</h3>
                <p className="text-gray-600">{zona.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ENLACE A GALERÍA DE TRABAJOS */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#002B5C] mb-4">
            Nuestros Trabajos
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Recorré las obras que realizamos en la Costa Atlántica. Pinamar, Villa Gesell y alrededores.
          </p>
          <Link
            href="/trabajos"
            className="inline-block bg-[#002B5C] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#004080] transition"
          >
            📸 Ver Galería Completa →
          </Link>
        </div>
      </section>
    </main>
  );
}