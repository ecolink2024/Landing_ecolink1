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
    <section className="relative h-72 sm:h-80 md:h-[340px] overflow-hidden">
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
            className="w-full h-full object-cover"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-0 bg-black/25" />
        </div>
      ))}

      {/* Content overlay (texto y tarjeta de datos) */}
      <div className="relative z-10 h-full px-4 sm:px-6 md:px-20 flex items-center">
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-8 max-w-7xl mx-auto">
          <h2 className="text-white text-2xl md:text-4xl font-bold max-w-lg leading-tight text-center md:text-left">
            {activeSlide.heading}
          </h2>
          <div className="bg-eco-beige/95 backdrop-blur p-6 md:p-8 rounded shadow-xl text-center w-full max-w-xs md:max-w-sm md:min-w-[280px]">
            <div className="text-eco-green text-3xl md:text-4xl font-extrabold">
              {activeSlide.value}
            </div>
            <div className="text-eco-forest text-xs md:text-sm uppercase tracking-widest font-bold mt-2">
              {activeSlide.label}
            </div>
          </div>
        </div>
      </div>

      {/* Dots */}
      {SLIDES.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
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
