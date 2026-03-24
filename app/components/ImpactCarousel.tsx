"use client";

import { useEffect, useState } from "react";

const SLIDES = [
  {
    id: "impact-training",
    background: "/homeDatos.png",
    heading: "IMPACTO ECOLINK",
    value: "+800 capacitaciones",
    label: "en empresas y escuelas",
  },
  {
    id: "impact-recyclables",
    background: "/homeBolsasData.png",
    heading: "IMPACTO ECOLINK",
    value: "+700.000 kg",
    label: "reciclables recuperados",
  },
  {
    id: "impact-actions",
    background: "/homeDataAmbiente.png",
    heading: "IMPACTO ECOLINK",
    value: "+100 acciones",
    label: "sostenibles y ambientales",
  },
  {
    id: "impact-organics",
    background: "/banner-organicos.png",
    heading: "IMPACTO ECOLINK",
    value: "+50 mil litros",
    label: "orgánicos recuperados",
  },
];

export function ImpactCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (SLIDES.length <= 1) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SLIDES.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  if (SLIDES.length === 0) return null;

  const activeSlide = SLIDES[current];

  return (
    <section className="relative isolate overflow-hidden md:h-[340px] md:min-h-[340px]">
      {/* Backgrounds */}
      {SLIDES.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-700 ease-out ${
            index === current ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <img
            src={slide.background}
            alt={slide.heading}
            className="h-full w-full object-cover"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-0 bg-black/25" />
        </div>
      ))}

      {/* Content overlay (texto y tarjeta de datos) */}
      <div className="relative z-10 flex px-4 py-8 pb-14 sm:px-6 sm:py-10 sm:pb-16 md:h-[340px] md:min-h-0 md:items-center md:px-20 md:py-0 md:pb-12">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center gap-6 md:h-full md:flex-row md:items-center md:justify-between md:gap-8">
          <h2 className="max-w-lg shrink-0 text-center text-2xl font-bold leading-tight text-white md:text-left md:text-4xl">
            {activeSlide.heading}
          </h2>
          <div className="flex aspect-square w-[min(17.5rem,calc(100vw-2.5rem))] shrink-0 flex-col items-center justify-center rounded-full bg-eco-beige/95 p-4 text-center shadow-xl backdrop-blur sm:p-6 md:w-72 md:p-7">
            <div className="px-1 text-xl font-extrabold leading-tight text-eco-green sm:text-3xl md:text-4xl">
              {activeSlide.value}
            </div>
            <div className="mt-2 px-2 text-[10px] font-bold uppercase leading-snug tracking-widest text-eco-forest sm:text-xs md:text-sm">
              {activeSlide.label}
            </div>
          </div>
        </div>
      </div>

      {/* Dots */}
      {SLIDES.length > 1 && (
        <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 gap-2">
          {SLIDES.map((slide, index) => (
            <button
              key={slide.id}
              type="button"
              onClick={() => setCurrent(index)}
              className={`h-2 w-2 rounded-full transition-colors ${
                index === current ? "bg-white" : "bg-white/40"
              }`}
              aria-label={`Ir a la diapositiva ${index + 1}`}
            />
          ))}
        </div>
      )}
    </section>
  );
}
