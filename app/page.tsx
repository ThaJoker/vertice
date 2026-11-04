import Link from "next/link";
import Image from "next/image";

const EMPRESA = {
  nombre: "VÉRTICE",
  eslogan: "Especialistas en cristales de altura",
  whatsapp: "549XXXXXXXXXXX",
};

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* HERO CON IMAGEN PANORÁMICA */}
      <section className="relative w-full h-[85vh] min-h-[550px] overflow-hidden">
        {/* Imagen de fondo: trabajador limpiando vidrios en rascacielos, cielo sin costa */}
        <Image
          src="/hero-fondo.png"
          alt="Limpieza de vidrios en rascacielos tomada desde dron"
          fill
          priority
          className="object-cover object-center"
        />

        {/* Overlay oscuro para que el texto se lea bien sobre la imagen */}
        <div className="absolute inset-0 bg-black/55" />

        {/* Contenido del hero encima de la imagen */}
        <div className="relative z-10 flex flex-col justify-center items-center h-full px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            {EMPRESA.nombre}
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-6">
            {EMPRESA.eslogan}
          </p>
          <p className="text-lg text-gray-200 mb-8 max-w-2xl">
            Pinamar, Villa Gesell y toda la Costa Atlántica. Conocemos el clima costero y sabemos cómo cuidar tus cristales.
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

      {/* SECCIÓN DE ZONAS - IGUAL QUE TENÍAS */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-center text-[#002B5C] mb-10">¿Dónde trabajamos?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { titulo: "Pinamar", desc: "Centro, Norte, Sur y alrededores" },
              { titulo: "Villa Gesell", desc: "Centro, Norte, Sur y costa" },
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
    </main>
  );
}