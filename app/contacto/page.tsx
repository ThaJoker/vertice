'use client';

import { useState } from 'react';

const EMPRESA = {
  nombre: "VÉRTICE",
  whatsapp: "+5492255555094",       // ← Poné tu número real acá
  telefono: "+5492255555094",     // ← Para mostrar en pantalla
  instagram: "vertice.cristales",    // ← Tu usuario de Instagram sin @
  correo: "info@verticecristales.com.ar", // ← Tu correo
};

export default function Contacto() {
  const [enviado, setEnviado] = useState(false);
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    zona: '',
    latitud: '',
    longitud: '',
    mensaje: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Enlace directo a Google Maps si completan las coordenadas
  const enlaceMaps = formData.latitud && formData.longitud
    ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(formData.latitud)},${encodeURIComponent(formData.longitud)}`
    : null;

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
                {enlaceMaps && (
                  <a
                    href={enlaceMaps}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 text-[#0077CC] hover:underline"
                  >
                    📍 Ubicación enviada — Ver en Google Maps
                  </a>
                )}
              </div>
            ) : (
              <form
                action="https://formspree.io/f/XXXXXXXX"  // ← Reemplazá por tu enlace real de Formspree
                method="POST"
                onSubmit={() => setEnviado(true)}
                className="space-y-4"
              >
                <input type="hidden" name="_subject" value="Presupuesto — VÉRTICE Costa Atlántica" />
                
                <div>
                  <label className="block text-sm font-medium mb-1 text-gray-700">Nombre y Apellido</label>
                  <input
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#0077CC]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1 text-gray-700">WhatsApp / Teléfono</label>
                  <input
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#0077CC]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1 text-gray-700">Localidad / Dirección</label>
                  <input
                    name="zona"
                    value={formData.zona}
                    onChange={handleChange}
                    placeholder="Ej: Pinamar Norte, Villa Gesell Centro, Cariló..."
                    className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#0077CC]"
                  />
                </div>

                {/* 📍 UBICACIÓN EXACTA — Latitud y Longitud */}
                <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                  <label className="block text-sm font-semibold mb-2 text-[#002B5C]">
                    📍 Ubicación exacta (opcional)
                  </label>
                  <p className="text-xs text-gray-500 mb-3">
                    Abrí Google Maps → mantené presionado el lugar → copiá los números de arriba
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs text-gray-600 mb-1">Latitud</label>
                      <input
                        name="latitud"
                        value={formData.latitud}
                        onChange={handleChange}
                        placeholder="-37.xxxx"
                        className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#0077CC]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-gray-600 mb-1">Longitud</label>
                      <input
                        name="longitud"
                        value={formData.longitud}
                        onChange={handleChange}
                        placeholder="-57.xxxx"
                        className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#0077CC]"
                      />
                    </div>
                  </div>
                  {enlaceMaps && (
                    <a
                      href={enlaceMaps}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-2 text-sm text-[#0077CC] hover:underline"
                    >
                      🔗 Previsualizar en Google Maps
                    </a>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1 text-gray-700">¿Qué necesitás?</label>
                  <textarea
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
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