import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image"; // ✅ Importamos Image
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });

const EMPRESA = {
  nombre: "VÉRTICE",
  eslogan: "Especialistas en cristales de altura",
  whatsapp: "549XXXXXXXXXXX", // ← Tu número real acá
  telefono: "+54 9 XX XXXXXXXX",
  instagram: "tu_usuario",
  correo: "info@vertice.com.ar",
};

export const metadata: Metadata = {
  title: `${EMPRESA.nombre} — ${EMPRESA.eslogan}`,
  description: "Limpieza de cristales en altura. Pinamar, Villa Gesell y Costa Atlántica.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={`${inter.className} antialiased`}>
        <header className="sticky top-0 bg-white/90 backdrop-blur-sm shadow-sm z-40">
          <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
            
            {/* ✅ LOGO en lugar del nombre de texto */}
            <a href="/" className="flex items-center">
              <Image
                src="/logo-vertice.jpg"
                alt={`${EMPRESA.nombre} — ${EMPRESA.eslogan}`}
                width={130}
                height={48}
                className="object-contain"
                priority
              />
            </a>

            <nav className="hidden md:flex gap-5 text-gray-700 text-sm">
              <a href="/" className="hover:text-[#0077CC]">Inicio</a>
              <a href="/servicios" className="hover:text-[#0077CC]">Servicios</a>
              <a href="/seguridad" className="hover:text-[#0077CC]">Seguridad</a>
              <a href="/cobertura" className="hover:text-[#0077CC]">Zonas</a>
              <a href="/contacto" className="hover:text-[#0077CC]">Contacto</a>
            </nav>

            <a
              href={`https://wa.me/${EMPRESA.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white px-3 py-2 rounded-lg text-sm"
            >💬 WhatsApp</a>
          </div>
        </header>

        {children}

        <footer className="bg-[#002B5C] text-white py-8 px-4 text-sm mt-12">
          <div className="max-w-7xl mx-auto text-center">
            <p className="font-bold text-lg">{EMPRESA.nombre}</p>
            <p className="text-blue-200 mt-1">{EMPRESA.eslogan}</p>
            <p className="mt-3">📧 {EMPRESA.correo} | 📞 {EMPRESA.telefono}</p>
            <p className="mt-1">© 2026 {EMPRESA.nombre} — Todos los derechos reservados</p>
          </div>
        </footer>

        {/* Botón flotante de WhatsApp */}
        <a
          href={`https://wa.me/${EMPRESA.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-5 right-5 bg-[#25D366] text-white w-14 h-14 rounded-full flex items-center justify-center text-2xl shadow-lg"
        >💬</a>
      </body>
    </html>
  );
}