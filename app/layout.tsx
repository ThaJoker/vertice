import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";
import Navbar from "./components/Navbar"; // ✅ El menú va aparte
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });

const EMPRESA = {
  nombre: "VÉRTICE",
  eslogan: "Especialistas en cristales de altura",
  whatsapp: "5492255555094",
  telefono: "+54 9 2255 555-5094",
  instagram: "tu_usuario",
  correo: "info@verticecristales.com.ar",
};

export const metadata: Metadata = {
  title: `${EMPRESA.nombre} — ${EMPRESA.eslogan}`,
  description: "Limpieza de cristales en altura. Pinamar, Villa Gesell y Costa Atlántica.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={`${inter.className} antialiased`}>
        {/* 🧭 Barra de navegación en archivo separado */}
        <Navbar />

        {children}

        {/* Pie de página */}
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

        {/* Botón flotante de WhatsApp */}
        <a
          href={`https://wa.me/${EMPRESA.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-5 right-5 bg-[#25D366] text-white w-14 h-14 rounded-full flex items-center justify-center text-2xl shadow-lg hover:bg-green-600 transition z-50"
        >
          💬
        </a>
      </body>
    </html>
  );
}