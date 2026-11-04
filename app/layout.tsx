import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const EMPRESA = {
  nombre: "VÉRTICE",
  eslogan: "Especialistas en cristales de altura",
  whatsapp: "549XXXXXXXXXXX",      // ← TU NÚMERO REAL
  telefono: "+54 9 XX XXXXXXXX",    // ← TU TELÉFONO
  instagram: "tu_usuario",           // ← TU USUARIO SIN @
  correo: "info@vertice.com.ar",     // ← TU CORREO
};

export const metadata: Metadata = {
  title: `${EMPRESA.nombre} — ${EMPRESA.eslogan}`,
  description: "Limpieza de cristales en altura. Pinamar, Villa Gesell y Costa Atlántica. Presupuesto sin cargo.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={`${inter.className} antialiased`}>
        <header className="sticky top-0 bg-white/90 backdrop-blur-sm shadow-sm z-40">
          <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
            <div className="font-bold text-xl text-[#002B5C]">{EMPRESA.nombre}</div>
            <nav className="hidden md:flex gap-5 text-gray-700 text-sm">
              <a href="/" className="hover:text-[#0077CC] transition">Inicio</a>
              <a href="/servicios" className="hover:text-[#0077CC] transition">Servicios</a>
              <a href="/seguridad" className="hover:text-[#0077CC] transition">Seguridad</a>
              <a href="/cobertura" className="hover:text-[#0077CC] transition">Zonas</a>
              <a href="/contacto" className="hover:text-[#0077CC] transition">Contacto</a>
            </nav>
            <div className="flex items-center gap-3">
              <a
                href={`https://instagram.com/${EMPRESA.instagram}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-600 hover:text-pink-700 text-lg"
              >📸</a>
              <a
                href={`https://wa.me/${EMPRESA.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] text-white px-3 py-2 rounded-lg text-sm hover:bg-green-600 transition"
              >💬 WhatsApp</a>
            </div>
          </div>
        </header>

        {children}

        <footer className="bg-[#002B5C] text-gray-200 py-10 px-4 text-sm">
          <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-white text-lg mb-3">{EMPRESA.nombre}</h3>
              <p className="text-blue-200">{EMPRESA.eslogan}</p>
              <p className="mt-2">Brillo impecable, servicio profesional</p>
            </div>
            <div>
              <h3 className="font-bold text-white mb-3">Contacto</h3>
              <p className="mb-1">
                <a href={`https://wa.me/${EMPRESA.whatsapp}`} target="_blank" className="text-green-400 hover:underline">
                  💬 {EMPRESA.telefono}
                </a>
              </p>
              <p className="mb-1">
                <a href={`https://instagram.com/${EMPRESA.instagram}`} target="_blank" className="text-pink-300 hover:underline">
                  📸 @{EMPRESA.instagram}
                </a>
              </p>
              <p>📧 {EMPRESA.correo}</p>
            </div>
            <div>
              <h3 className="font-bold text-white mb-3">🌊 Zonas de Cobertura</h3>
              <p className="font-semibold text-blue-300 mb-1">Costa Atlántica</p>
              <p>✅ Pinamar</p>
              <p>✅ Villa Gesell</p>
              <p>✅ Cariló · Valeria del Mar · Ostende</p>
              <p className="mt-2 text-blue-200 text-xs">Consultar otras localidades</p>
            </div>
          </div>
          <div className="max-w-7xl mx-auto mt-8 pt-4 border-t border-blue-800 text-center text-xs">
            © {new Date().getFullYear()} {EMPRESA.nombre} — Todos los derechos reservados
          </div>
        </footer>

        <a
          href={`https://wa.me/${EMPRESA.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-5 right-5 z-50 bg-[#25D366] text-white w-14 h-14 rounded-full flex items-center justify-center text-2xl shadow-lg hover:scale-110 transition-transform"
          aria-label="Contactar por WhatsApp"
        >💬</a>
      </body>
    </html>
  );
}