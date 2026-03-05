'use client';

import { useEffect, useRef, useState } from 'react';

const STATS = [
  { value: '+8 años', label: 'en Córdoba Capital' },
  { value: '+2000 hogares', label: 'nos eligen' },
  { value: '+150 empresas', label: 'cordobesas son parte' },
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
      { threshold: 0.3 }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section ref={sectionRef} className="bg-eco-green py-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-12">
          <span className="text-eco-text-dark">Decisiones concientes, </span>
          <span className="text-white">impacto real</span>
        </h2>
        <div className="flex flex-col items-center gap-6">
          {STATS.map((stat, index) => (
            <div
              key={stat.value}
              className={`bg-eco-beige w-full max-w-xl py-6 rounded-xl shadow-md transform transition-all duration-700 ease-out ${
                hasAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="text-eco-green text-2xl md:text-3xl font-extrabold">
                {stat.value}
              </div>
              <div className="text-eco-text-dark text-sm md:text-base font-normal mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

