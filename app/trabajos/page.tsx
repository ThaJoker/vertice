"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const trabajos = [
  {
    id: 1,
    imagen: "/trabajos/edificio-status-pinamar.png",
    titulo: "Edificio Status — Pinamar",
    descripcion: "Hidrolavado y lavado profesional de cristales",
  },
  {
    id: 2,
    imagen: "/trabajos/positive-tower-gesell.png",
    titulo: "Positive Tower — Pinamar",
    descripcion: "Edificio corporativo y residencial completo",
  },
  {
    id: 3,
    imagen: "/trabajos/la-argentina-center.png",
    titulo: "La Argentina Center",
    descripcion: "Limpieza profesional de fachada vidriada y accesos",
  },
  {
    id: 4,
    imagen: "/trabajos/chalet-4-pinamar.png",
    titulo: "Chalet 4 — Pinamar",
    descripcion: "Limpieza integral de cristales en vivienda exclusiva",
  },
  {
    id: 5,
    imagen: "/trabajos/chalet-pinamar-2.png",
    titulo: "Chalet — Pinamar Norte",
    descripcion: "Grandes ventanales y superficies vidriadas",
  },
  {
    id: 6,
    imagen: "/trabajos/chalet-pinamar.png",
    titulo: "Residencia — Pinamar",
    descripcion: "Mantenimiento completo de frentes y cristales",
  },
  {
    id: 7,
    imagen: "/trabajos/sagitario-pinamar.png",
    titulo: "Pinturería Sagitario — Pinamar",
    descripcion: "Limpieza de vidrios en local comercial",
  },
  {
    id: 8,
    imagen: "/trabajos/sagitario-madariaga.png",
    titulo: "Pinturería Sagitario — Madariaga",
    descripcion: "Atención a cadenas comerciales",
  },
  {
    id: 9,
    imagen: "/trabajos/casa-lomas-pinamar.png",
    titulo: "Residencia en Pinamar",
    descripcion: "Limpieza integral de frentes y cristales",
  },
  {
    id: 10,
    imagen: "/trabajos/residencia-moderna-pinamar.png",
    titulo: "Residencia — Pinamar Norte",
    descripcion: "Grandes superficies vidriadas y terrazas",
  },
  {
    id: 11,
    imagen: "/trabajos/cristales-piscina.png",
    titulo: "Frente vidriado con piscina — Pinamar",
    descripcion: "Resultado impecable en viviendas de categoría",
  },
  {
    id: 12,
    imagen: "/trabajos/interior-vidrio-limpio.png",
    titulo: "Vista nítida garantizada",
    descripcion: "Cristales limpios desde adentro y afuera",
  },
];


export default function TrabajosRealizados() {
  const [indiceActivo, setIndiceActivo] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setIndiceActivo((anterior) =>
        anterior === trabajos.length - 1 ? 0 : anterior + 1
      );
    }, 5000);
    return () => clearInterval(intervalo);
  }, []);

  return (
    <main className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-5xl font-bold text-[#002B5C] mb-4">
            Trabajos Realizados
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Orgullosos de cuidar los cristales de Pinamar y toda la Costa Atlántica.
          </p>
          <Link
            href="/"
            className="inline-block mt-6 text-[#0077CC] hover:underline"
          >
            ← Volver al inicio
          </Link>
        </div>

        <div className="relative overflow-hidden rounded-2xl shadow-xl bg-white">
          <div
            className="flex transition-transform duration-700 ease-out"
            style={{ transform: `translateX(-${indiceActivo * 100}%)` }}
          >
            {trabajos.map((trabajo) => (
              <div key={trabajo.id} className="w-full flex-shrink-0">
                <div className="relative w-full h-[50vh] min-h-[400px]">
                  <Image
                    src={trabajo.imagen}
                    alt={trabajo.titulo}
                    fill
                    className="object-cover"
                    sizes="100vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <h2 className="text-2xl md:text-3xl font-bold mb-2">
                      {trabajo.titulo}
                    </h2>
                    <p className="text-lg text-gray-200">
                      {trabajo.descripcion}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={() =>
              setIndiceActivo(
                indiceActivo === 0 ? trabajos.length - 1 : indiceActivo - 1
              )
            }
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-[#002B5C] w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl transition"
          >
            ‹
          </button>
          <button
            onClick={() =>
              setIndiceActivo(
                indiceActivo === trabajos.length - 1 ? 0 : indiceActivo + 1
              )
            }
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-[#002B5C] w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl transition"
          >
            ›
          </button>
        </div>

        <div className="flex justify-center gap-3 mt-8">
          {trabajos.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndiceActivo(i)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                i === indiceActivo
                  ? "bg-[#002B5C] w-8"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Ver imagen ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </main>
  );
}