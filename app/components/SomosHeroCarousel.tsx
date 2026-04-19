"use client";

import { useEffect, useState } from "react";

const HERO_SLIDES = [
  {
    src: "/hero1-somos.jpg",
    alt: "Equipo EcoLink, imagen 1",
    objectPosition: "object-center",
  },
  {
    src: "/hero2-somos.jpg",
    alt: "Equipo EcoLink, imagen 2",
    /* Caras arriba: anclar recorte al borde superior */
    objectPosition: "object-top",
  },
  {
    src: "/hero3-somos.jpg",
    alt: "Equipo EcoLink, imagen 3",
    objectPosition: "object-top",
  },
] as const;

const INTERVAL_MS = 2000;

export function SomosHeroCarousel() {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setSlide((s) => (s + 1) % HERO_SLIDES.length);
    }, INTERVAL_MS);
    return () => window.clearInterval(id);
  }, []);

  return (
    <>
      {HERO_SLIDES.map((item, index) => (
        <img
          key={item.src}
          alt={item.alt}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-out ${item.objectPosition} ${
            index === slide
              ? "z-0 opacity-100"
              : "z-0 opacity-0 pointer-events-none"
          }`}
          src={item.src}
          fetchPriority={index === 0 ? "high" : "low"}
        />
      ))}
    </>
  );
}
