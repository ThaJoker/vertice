"use client";
import { useState } from "react";

const EMPRESA = {
  nombre: "VÉRTICE",
  whatsapp: "549XXXXXXXXXXX",     // ← Tu número real sin espacios
  instagram: "tu_usuario",        // ← Tu usuario sin @
  telefono: "+54 9 XX XXXXXXXX",  // ← Tu teléfono con formato
  correo: "info@vertice.com.ar",  // ← Tu correo real
};

export default function Contacto() {
  const [enviado, setEnviado] = useState(false);

  return (
    <main className="min-h-screen py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-[#002B5C] text-center mb-4">
          Contactanos
        </h1>
        <p className="text-center text-gray-600 mb-12 text-lg">
          Pedí tu presupuesto sin cargo. Atendemos en Pinamar, Villa Gesell y toda la Costa Atlántica.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Formulario */}
          <div>
            {enviado ? (
              <div className="bg-green-50 p-8 rounded-xl text-center">
                <p className="text-xl font-semibold text-green-700">✅ ¡Mensaje enviado!</p>
                <p className="mt-2 text-gray-600">Te respondemos lo antes posible.</p>
              </div>
            ) : (
              <form
                action="https://formspree.io/f/XXXXXXXX"  // ← Tu enlace de Formspree
                method="POST"
                onSubmit={() => setEnviado(true)}
                className="space-y-4"
              >
                <input type="hidden" name="_subject" value="Presupuesto — VÉRTICE Costa Atlántica" />
                
                <div>
                  <label className="block text-sm font-medium mb-1 text-gray-700">Nombre y Apellido</label>
                  <input
                    name="nombre"
                    required
                    className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#0077CC]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1 text-gray-700">WhatsApp / Teléfono</label>
                  <input
                    name="telefono"
                    required
                    className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#0077CC]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1 text-gray-700">Localidad</label>
                  <input
                    name="zona"
                    placeholder="Ej: Pinamar Norte, Villa Gesell Centro, Cariló..."
                    className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#0077CC]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1 text-gray-700">¿Qué necesitás?</label>
                  <textarea
                    name="mensaje"
                    rows={4}
                    placeholder="Tipo de servicio, cantidad de vidrios, altura aproximada..."
                    className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#0077CC]"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#002B5C] text-white py-3 rounded-lg font-semibold hover:bg-[#004080] transition"
                >
                  Enviar Solicitud
                </button>
              </form>
            )}
          </div>

          {/* Datos directos de contacto */}
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-gray-800">O escribinos directamente</h2>

            <a
              href={`https://wa.me/${EMPRESA.whatsapp}`}
              target="_blank"
              className="flex items-center gap-3 p-4 bg-green-50 rounded-xl hover:bg-green-100 transition"
            >
              <span className="text-2xl">💬</span>
              <div>
                <p className="font-semibold text-green-800">WhatsApp</p>
                <p className="text-green-600 text-sm">{EMPRESA.telefono}</p>
              </div>
            </a>

            <a
              href={`https://instagram.com/${EMPRESA.instagram}`}
              target="_blank"
              className="flex items-center gap-3 p-4 bg-pink-50 rounded-xl hover:bg-pink-100 transition"
            >
              <span className="text-2xl">📸</span>
              <div>
                <p className="font-semibold text-pink-800">Instagram</p>
                <p className="text-pink-600 text-sm">@{EMPRESA.instagram}</p>
              </div>
            </a>

            <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
              <span className="text-2xl">📧</span>
              <div>
                <p className="font-semibold text-gray-800">Email</p>
                <p className="text-gray-600 text-sm">{EMPRESA.correo}</p>
              </div>
            </div>

            <div className="p-4 bg-blue-50 rounded-xl">
              <p className="font-semibold text-[#002B5C] mb-1">🕐 Atención</p>
              <p className="text-blue-600 text-sm">Lunes a Viernes: 8:00 a 18:00</p>
              <p className="text-blue-600 text-sm">Sábados: 9:00 a 13:00</p>
              <p className="mt-2 text-blue-500 text-xs">📍 Costa Atlántica — Pinamar / Villa Gesell</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}