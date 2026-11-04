'use client'; // ✅ Necesario para el estado del menú

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";
import { useState } from "react"; // ✅ Para abrir/cerrar el menú
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });

const EMPRESA = {
  nombre: "VÉRTICE",
  eslogan: "Especialistas en cristales de altura",
  whatsapp: "5492255555094", // ✅ Quité el + para que funcione bien el enlace
  telefono: "+54 9 2255 555-5094",
  instagram: "tu_usuario",
  correo: "info@vertice.com.ar",
};

export const metadata: Metadata = {
  title: `${EMPRESA.nombre} — ${EMPRESA.eslogan}`,
  description: "Limpieza de cristales en altura. Pinamar, Villa Gesell y Costa Atlántica.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [menuAbierto, setMenuAbierto] = useState(false); // ✅ Estado del menú

  return (
    <html lang="es">
      <body className={`${inter.className} antialiased`}>
        <header className="sticky top-0 bg-white/90 backdrop-blur-sm shadow-sm z-40">
          <div className="max-w-7xl mx-auto px-4 py-3">
            <div className="flex justify-between items-center">
              
              {/* LOGO — igual que lo tenías */}
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

              {/* Menú ESCRITORIO — igual que antes */}
              <nav className="hidden md:flex gap-5 text-gray-700 text-sm">
                <a href="/" className="hover:text-[#0077CC]">Inicio</a>
                <a href="/servicios" className="hover:text-[#0077CC]">Servicios</a>
                <a href="/seguridad" className="hover:text-[#0077CC]">Seguridad</a>
                <a href="/cobertura" className="hover:text-[#0077CC]">Zonas</a>
                <a href="/contacto" className="hover:text-[#0077CC]">Contacto</a>
              </nav>

              {/* WhatsApp ESCRITORIO */}
              <a
                href={`https://wa.me/${EMPRESA.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:block bg-[#25D366] text-white px-3 py-2 rounded-lg text-sm hover:bg-green-600 transition"
              >
                💬 WhatsApp
              </a>

              {/* Botón MENÚ HAMBURGUESA — CELULAR */}
              <button
                onClick={() => setMenuAbierto(!menuAbierto)}
                className="md:hidden text-[#002B5C] text-2xl p-2"
                aria-label="Menú"
              >
                {menuAbierto ? "✕" : "☰"}
              </button>
            </div>

            {/* 📱 MENÚ DESPLEGABLE SOLO EN CELULAR */}
            {menuAbierto && (
              <div className="md:hidden mt-3 pb-3 border-t pt-3">
                <nav className="flex flex-col gap-3">
                  <a
                    href="/"
                    className="py-2 px-2 text-gray-700 hover:text-[#0077CC] hover:bg-blue-50 rounded"
                    onClick={() => setMenuAbierto(false)}
                  >
                    Inicio
                  </a>
                  <a
                    href="/servicios"
                    className="py-2 px-2 text-gray-700 hover:text-[#0077CC] hover:bg-blue-50 rounded"
                    onClick={() => setMenuAbierto(false)}
                  >
                    Servicios
                  </a>
                  <a
                    href="/seguridad"
                    className="py-2 px-2 text-gray-700 hover:text-[#0077CC] hover:bg-blue-50 rounded"
                    onClick={() => setMenuAbierto(false)}
                  >
                    Seguridad
                  </a>
                  <a
                    href="/cobertura"
                    className="py-2 px-2 text-gray-700 hover:text-[#0077CC] hover:bg-blue-50 rounded"
                    onClick={() => setMenuAbierto(false)}
                  >
                    Zonas
                  </a>
                  <a
                    href="/contacto"
                    className="py-2 px-2 text-gray-700 hover:text-[#0077CC] hover:bg-blue-50 rounded"
                    onClick={() => setMenuAbierto(false)}
                  >
                    Contacto
                  </a>
                  <a
                    href={`https://wa.me/${EMPRESA.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 bg-[#25D366] text-white py-2 rounded-lg text-center"
                    onClick={() => setMenuAbierto(false)}
                  >
                    💬 WhatsApp
                  </a>
                </nav>
              </div>
            )}
          </div>
        </header>

        {children}

        {/* PIE DE PÁGINA — IGUAL QUE TENÍAS */}
        <footer className="bg-[#002B5C] text-white py-8 px-4 text-sm mt-12">
          <div className="max-w-7xl mx-auto text-center">
            <p className="font-bold text-lg">{EMPRESA.nombre}</p>
            <p className="text-blue-200 mt-1">{EMPRESA.eslogan}</p>
            <p className="mt-3">📧 {EMPRESA.correo} | 📞 {EMPRESA.telefono}</p>
            <p className="mt-4 text-blue-300 text-xs">
              © 2026 {EMPRESA.nombre} — Todos los derechos reservados
            </p>
            <p className="mt-2 text-blue-400 text-xs">
              Powered By Dola IA — Santuario 💙
            </p>
          </div>
        </footer>

        {/* Botón flotante de WhatsApp — IGUAL QUE TENÍAS */}
        <a
          href={`https://wa.me/${EMPRESA.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-5 right-5 bg-[#25D366] text-white w-14 h-14 rounded-full flex items-center justify-center text-2xl shadow-lg hover:bg-green-600 transition"
        >
          💬
        </a>
      </body>
    </html>
  );
}