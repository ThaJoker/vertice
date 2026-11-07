'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const EMPRESA = {
  nombre: "VÉRTICE",
  whatsapp: "5492255555094",
};

export default function Navbar() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  return (
    <header className="sticky top-0 bg-white/90 backdrop-blur-sm shadow-sm z-40">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo-vertice.jpg"
              alt={`${EMPRESA.nombre} — Especialistas en cristales de altura`}
              width={130}
              height={48}
              className="object-contain"
              priority
            />
          </Link>

          {/* Menú escritorio */}
          <nav className="hidden md:flex gap-5 text-gray-700 text-sm">
            <Link href="/" className="hover:text-[#0077CC]">Inicio</Link>
            <Link href="/servicios" className="hover:text-[#0077CC]">Servicios</Link>
            <Link href="/seguridad" className="hover:text-[#0077CC]">Seguridad</Link>
            <Link href="/trabajos" className="hover:text-[#0077CC] font-semibold">📸 Trabajos</Link>
            <Link href="/cobertura" className="hover:text-[#0077CC]">Zonas</Link>
            <Link href="/contacto" className="hover:text-[#0077CC]">Contacto</Link>
          </nav>

          {/* WhatsApp escritorio */}
          <a
            href={`https://wa.me/${EMPRESA.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block bg-[#25D366] text-white px-3 py-2 rounded-lg text-sm hover:bg-green-600 transition"
          >
            💬 WhatsApp
          </a>

          {/* Botón menú celular */}
          <button
            onClick={() => setMenuAbierto(!menuAbierto)}
            className="md:hidden text-[#002B5C] text-2xl p-2"
            aria-label="Menú"
          >
            {menuAbierto ? "✕" : "☰"}
          </button>
        </div>

        {/* Menú desplegable celular */}
        {menuAbierto && (
          <div className="md:hidden mt-3 pb-3 border-t pt-3">
            <nav className="flex flex-col gap-3">
              <Link
                href="/"
                className="py-2 px-2 text-gray-700 hover:text-[#0077CC] hover:bg-blue-50 rounded"
                onClick={() => setMenuAbierto(false)}
              >
                Inicio
              </Link>
              <Link
                href="/servicios"
                className="py-2 px-2 text-gray-700 hover:text-[#0077CC] hover:bg-blue-50 rounded"
                onClick={() => setMenuAbierto(false)}
              >
                Servicios
              </Link>
              <Link
                href="/seguridad"
                className="py-2 px-2 text-gray-700 hover:text-[#0077CC] hover:bg-blue-50 rounded"
                onClick={() => setMenuAbierto(false)}
              >
                Seguridad
              </Link>
              <Link
                href="/trabajos"
                className="py-2 px-2 text-gray-700 hover:text-[#0077CC] hover:bg-blue-50 rounded font-semibold"
                onClick={() => setMenuAbierto(false)}
              >
                📸 Trabajos
              </Link>
              <Link
                href="/cobertura"
                className="py-2 px-2 text-gray-700 hover:text-[#0077CC] hover:bg-blue-50 rounded"
                onClick={() => setMenuAbierto(false)}
              >
                Zonas
              </Link>
              <Link
                href="/contacto"
                className="py-2 px-2 text-gray-700 hover:text-[#0077CC] hover:bg-blue-50 rounded"
                onClick={() => setMenuAbierto(false)}
              >
                Contacto
              </Link>
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
  );
}