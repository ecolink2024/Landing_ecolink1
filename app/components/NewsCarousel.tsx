'use client';

import Link from 'next/link';
import { useState } from 'react';

type NewsItem = {
  id: string | number;
  title: string;
  excerpt?: string;
  content: string;
  image_url: string;
};

type Props = {
  items: NewsItem[];
};

export function NewsCarousel({ items }: Props) {
  const PAGE_SIZE = 3;
  const [currentPage, setCurrentPage] = useState(0);

  if (!items || items.length === 0) return null;

  const totalPages = Math.ceil(items.length / PAGE_SIZE);

  const goNext = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const goPrev = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const startIndex = currentPage * PAGE_SIZE;
  const visibleItems = items.slice(startIndex, startIndex + PAGE_SIZE);

  // Si estamos en la última página y no hay suficientes elementos, rellenamos desde el inicio para mantener siempre 3
  if (visibleItems.length < PAGE_SIZE && items.length > PAGE_SIZE) {
    visibleItems.push(
      ...items.slice(0, PAGE_SIZE - visibleItems.length),
    );
  }

  return (
    <div className="relative min-w-0">
      {/* En mobile 3×300px + gaps ensanchaba todo el documento; el scroll queda acá */}
      <div className="-mx-4 px-4 md:mx-0 md:px-0 overflow-x-auto overscroll-x-contain pb-1 md:overflow-visible touch-pan-x md:touch-auto">
        <div className="flex gap-6 md:gap-8 justify-start md:justify-center w-max max-w-none mx-auto md:w-full md:max-w-full">
        {visibleItems.map((item) => (
          <Link
            key={item.id}
            href={`/novedades/${item.id}`}
            className="group bg-eco-light-green/20 hover:bg-[#FDFCF8] rounded-lg overflow-hidden flex flex-col flex-shrink-0 w-[280px] sm:w-[300px] md:w-[380px] transition-colors duration-300"
          >
            <img
              alt={item.title}
              className="w-full h-64 object-cover"
              src={item.image_url}
            />
            <div className="p-6 flex-grow">
              <h3 className="text-eco-beige group-hover:text-[#477844] font-bold mb-2 transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-eco-beige/80 group-hover:text-[#477844] text-sm line-clamp-3 transition-colors duration-300">
                {item.excerpt ?? item.content}
              </p>
            </div>
          </Link>
        ))}
        </div>
      </div>

      {/* Controles */}
      {items.length > PAGE_SIZE && (
        <>
          <button
            type="button"
            onClick={goPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-eco-beige/20 hover:bg-eco-beige/40 text-eco-beige rounded-full w-10 h-10 flex items-center justify-center backdrop-blur-sm transition-colors"
            aria-label="Anterior"
          >
            ←
          </button>
          <button
            type="button"
            onClick={goNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-eco-beige/20 hover:bg-eco-beige/40 text-eco-beige rounded-full w-10 h-10 flex items-center justify-center backdrop-blur-sm transition-colors"
            aria-label="Siguiente"
          >
            →
          </button>
        </>
      )}

      {/* Dots */}
      {items.length > PAGE_SIZE && (
        <div className="flex justify-center gap-2 mt-6">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setCurrentPage(index)}
              className={`h-2 w-2 rounded-full transition-colors ${
                index === currentPage ? 'bg-eco-beige' : 'bg-eco-beige/40'
              }`}
              aria-label={`Ir al grupo ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

