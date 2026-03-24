"use client";

import { useEffect, useRef, useState } from "react";

const STATS = [
  { value: "+8 años", label: "en Córdoba Capital" },
  { value: "+2000 hogares", label: "nos eligen" },
  { value: "+150 empresas", label: "cordobesas son parte" },
];

export function StatsSection() {
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node || hasAnimated) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setHasAnimated(true);
          }
        });
      },
      { threshold: 0.3 },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section
      ref={sectionRef}
      className="bg-eco-green py-[calc(4rem+1cm)] md:py-[calc(5rem+1cm)] px-[calc(1rem+1cm)] sm:px-[calc(1.5rem+1cm)]"
      style={{
        background: "linear-gradient(135deg, #5E9F57 0%, #477844 100%)",
      }}
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-[calc(3rem+1cm)]">
          <span className="text-black">CONECTAMOS</span>{" "}
          <span className="text-white">DECISIONES</span>
        </h2>
        <div className="flex flex-row flex-wrap justify-center items-center gap-6 sm:gap-8 md:gap-10">
          {STATS.map((stat, index) => (
            <div
              key={stat.value}
              className={`bg-eco-beige rounded-full shadow-md flex flex-col items-center justify-center text-center w-[calc(9rem+2cm)] h-[calc(9rem+2cm)] sm:w-[calc(10rem+2cm)] sm:h-[calc(10rem+2cm)] md:w-[calc(11rem+2cm)] md:h-[calc(11rem+2cm)] lg:w-[calc(12rem+2cm)] lg:h-[calc(12rem+2cm)] px-3 py-4 shrink-0 transform transition-all duration-700 ease-out ${
                hasAnimated
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-6"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="text-eco-green text-xl sm:text-2xl lg:text-3xl font-extrabold leading-tight">
                {stat.value}
              </div>
              <div className="text-eco-text-dark text-xs sm:text-sm font-normal mt-1 leading-snug max-w-[calc(11rem+2cm)]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
