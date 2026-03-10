'use client';

import { useEffect, useState } from 'react';

const INTERVAL_MS = 3000;
const TITLE_SUFFIX_LIGHT = 'rgba(255,255,255,0.85)';

const SLIDES = [
  {
    id: 1,
    image: '/gConsResRec.jpg',
    text: 'Gestión Consciente de Residuos Reciclables',
  },
  {
    id: 2,
    image: '/gConsResOrganicos.jpg',
    text: 'Gestión Consciente de Residuos Orgánico',
  },
  {
    id: 3,
    image: '/CapacitacionesyTalleres.JPG',
    text: 'Capacitaciones y Talleres',
  },
  {
    id: 4,
    image: '/certificacionesNuevo.jpg',
    text: 'Certificaciones aptas normativa municipal',
  },
  {
    id: 5,
    image: '/SustpEventos.jpg',
    text: 'Sustentabilidad para Eventos Corporativos',
  },
  {
    id: 6,
    image: '/Huella.jpg',
    text: 'Medición, Verificación y Compensación de Huella de Carbono',
  },
  {
    id: 7,
    image: '/AccionesRespSocialEmpresarial.jpeg',
    text: 'Acciones de Responsabilidad Social Empresarial – Forestaciones',
  },
];

export function EmpresasServicesCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SLIDES.length);
    }, INTERVAL_MS);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center">
      <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[10/11] w-11/12">
        <div className="relative w-full h-full overflow-hidden">
          {SLIDES.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-500 ${
                current === index ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
            >
              <img
                src={slide.image}
                alt={slide.text}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 bg-white py-4 px-6 rounded-lg shadow-xl text-center">
          <p className="text-eco-green font-bold text-lg">
            {SLIDES[current].text}
          </p>
        </div>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex justify-center gap-2">
          {SLIDES.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setCurrent(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                current === index ? 'bg-white w-6' : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
