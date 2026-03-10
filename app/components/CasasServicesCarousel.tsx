"use client";

import { useEffect, useState } from "react";

const INTERVAL_MS = 5000;
const TITLE_SUFFIX_LIGHT = "rgba(255,255,255,0.85)";

export function CasasServicesCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % 2);
    }, INTERVAL_MS);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-7xl mx-auto relative overflow-hidden">
      <div className="relative min-h-[380px] md:min-h-[420px] overflow-hidden">
        {/* Slide 0: Reciclables — estructura original */}
        <div
          className={`grid md:grid-cols-[1fr_1.2fr] gap-8 items-center transition-opacity duration-500 ${
            current === 0
              ? "opacity-100"
              : "opacity-0 absolute inset-0 pointer-events-none"
          }`}
        >
          <div className="py-10">
            <p className="text-sm font-bold uppercase tracking-widest mb-4 text-white/70">
              Servicios
            </p>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
              <span className="text-eco-forest">Recolección Domiciliaria</span>
              <br />
              <span className="text-white font-black">
                de Residuos Reciclables
              </span>
            </h2>
            <p className="text-white/80 text-sm leading-relaxed mb-2">
              ✔ Kit de reciclaje, bolsas especiales para mantener tu espacio
              limpio y ordenado.
            </p>
            <p className="text-white/80 text-sm leading-relaxed mb-8">
              Recolección de 1 a 4 veces por mes.
            </p>
            <a
              className="inline-block bg-eco-pink text-white px-8 py-3 rounded-full text-xs font-extrabold uppercase tracking-widest leading-none shadow-lg hover:scale-105 transition-transform"
              href="https://wa.link/hdyfys"
              target="_blank"
              rel="noopener noreferrer"
            >
              Quiero reciclar
            </a>
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[10/11]">
            <img
              src="/BolsasCasas.jpg"
              alt="Recolección domiciliaria de reciclables"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Slide 1: Orgánicos — misma estructura, fondo verde como el otro */}
        <div
          className={`rounded-2xl overflow-hidden shadow-2xl grid md:grid-cols-[1fr_1.2fr] min-h-[380px] md:min-h-[420px] transition-opacity duration-500 ${
            current === 1
              ? "opacity-100"
              : "opacity-0 absolute inset-0 pointer-events-none"
          }`}
        >
          <div className="flex flex-col justify-center px-8 md:px-10 py-10 bg-eco-green">
            <p className="text-white/90 text-xs font-bold uppercase tracking-[0.2em] mb-4">
              Servicios
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-4">
              <span className="text-white">Recolección Domiciliaria</span>
              <br />
              <span className="font-bold" style={{ color: TITLE_SUFFIX_LIGHT }}>
                de Residuos Orgánicos
              </span>
            </h2>
            <p className="text-white/90 text-sm leading-relaxed mb-8">
              Elegí esta opción y que tus residuos orgánicos vuelvan a la
              tierra. ¡Reducis hasta un 50%!
            </p>
            <a
              className="inline-block bg-eco-pink text-white px-8 py-3 rounded-full text-xs font-extrabold uppercase tracking-widest leading-none shadow-lg hover:scale-105 transition-transform w-fit"
              href="https://wa.link/qjwkuk"
              target="_blank"
              rel="noopener noreferrer"
            >
              Quiero compostar
            </a>
          </div>
          <div className="relative overflow-hidden">
            <img
              src="/casasOrganicos.png"
              alt="Recolección domiciliaria de residuos orgánicos"
              className="w-full h-full min-h-[240px] md:min-h-[420px] object-cover"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-center gap-2 mt-4">
        <button
          type="button"
          onClick={() => setCurrent(0)}
          className={`h-2 w-2 rounded-full transition-colors ${current === 0 ? "bg-white" : "bg-white/40"}`}
          aria-label="Ver Recyclables"
        />
        <button
          type="button"
          onClick={() => setCurrent(1)}
          className={`h-2 w-2 rounded-full transition-colors ${current === 1 ? "bg-white" : "bg-white/40"}`}
          aria-label="Ver Orgánicos"
        />
      </div>
    </div>
  );
}
