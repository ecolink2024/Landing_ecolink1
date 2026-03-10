"use client";

import { useEffect, useState } from "react";

type Slide = {
  id: string;
  titlePrefix: string;
  titleHighlight: string;
  description: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref: string;
  secondaryLabel: string;
  imageSrc: string;
  imageAlt: string;
};

const SLIDES: Slide[] = [
  {
    id: "empresa",
    titlePrefix: "SI SOS",
    titleHighlight: "EMPRESA",
    description:
      "Empresas, organizaciones y grandes generadores, de cualquier rubro, interesados en iniciar y fortalecer una gestión sustentable de los residuos que generan.",
    primaryHref: "/empresas",
    primaryLabel: "SABER MÁS",
    secondaryHref: "https://wa.link/p60j9m",
    secondaryLabel: "WHATSAPP",
    imageSrc: "/sosEmpresaPrincipal.jpg",
    imageAlt: "EcoLINK Boxes",
  },
  {
    id: "casas",
    titlePrefix: "SI SOS",
    titleHighlight: "CASA",
    description:
      "Hogares y consorcios que quieren separar sus residuos y sumarse a una gestión responsable y circular desde su casa.",
    primaryHref: "/casas",
    primaryLabel: "SABER MÁS",
    secondaryHref: "https://wa.link/hdyfys",
    secondaryLabel: "WHATSAPP",
    imageSrc: "/homeCasas.png",
    imageAlt: "Familias reciclando con EcoLink",
  },
];

export function BusinessCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (SLIDES.length <= 1) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SLIDES.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const active = SLIDES[current];

  return (
    <section className="bg-eco-beige py-16 md:py-24 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto text-center mb-16">
        <h2 className="text-eco-forest text-3xl md:text-4xl font-bold leading-none">
          Con EcoLink hacés{" "}
          <span className="text-eco-green italic">mucho más</span> que reciclar
        </h2>
        <p className="text-eco-forest/70 text-base md:text-lg font-medium leading-none mt-4">
          ¡Elegí la forma que mejor se adapte a vos para sumarte al cambio!
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1 text-center md:text-left">
          <h3 className="text-eco-forest text-3xl md:text-4xl font-extrabold mb-6">
            {active.titlePrefix}{" "}
            <span className="text-eco-green italic">
              {active.titleHighlight}
            </span>
          </h3>
          <p className="text-eco-forest/80 text-base leading-relaxed max-w-md mx-auto md:mx-0 mb-8">
            {active.description}
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <a
              href={active.primaryHref}
              className="bg-eco-forest text-white px-8 py-3 rounded-full font-extrabold text-sm uppercase leading-none hover:bg-black transition-colors"
            >
              {active.primaryLabel}
            </a>
            <a
              href={active.secondaryHref}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-eco-green text-white px-8 py-3 rounded-full font-extrabold text-sm uppercase leading-none hover:opacity-90 transition-opacity"
            >
              {active.secondaryLabel}
            </a>
          </div>
        </div>
        <div className="order-1 md:order-2 group">
          <div className="rounded-lg shadow-2xl w-full h-[280px] sm:h-[420px] md:h-[500px] overflow-hidden">
            <img
              alt={active.imageAlt}
              className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
              src={active.imageSrc}
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-10">
        {SLIDES.map((slide, index) => (
          <button
            key={slide.id}
            type="button"
            onClick={() => setCurrent(index)}
            className={`h-2 w-2 rounded-full transition-colors ${
              index === current ? "bg-eco-forest" : "bg-eco-forest/30"
            }`}
            aria-label={`Ver opción ${slide.titleHighlight.toLowerCase()}`}
          />
        ))}
      </div>
    </section>
  );
}
