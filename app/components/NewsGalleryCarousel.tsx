'use client';

import { useEffect, useMemo, useState } from 'react';

type Props = {
  images: string[];
};

const PAGE_SIZE = 3;

export function NewsGalleryCarousel({ images }: Props) {
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = Math.max(1, Math.ceil(images.length / PAGE_SIZE));

  useEffect(() => {
    if (images.length <= PAGE_SIZE) return;

    const interval = setInterval(() => {
      setCurrentPage((prev) => (prev + 1) % totalPages);
    }, 3500);

    return () => clearInterval(interval);
  }, [images.length, totalPages]);

  const visibleItems = useMemo(() => {
    const start = currentPage * PAGE_SIZE;
    const chunk = images.slice(start, start + PAGE_SIZE);
    if (chunk.length < PAGE_SIZE && images.length > PAGE_SIZE) {
      return [...chunk, ...images.slice(0, PAGE_SIZE - chunk.length)];
    }
    return chunk;
  }, [images, currentPage]);

  if (images.length === 0) return null;

  return (
    <section className="mt-14">
      <h2 className="text-eco-forest text-xl md:text-2xl font-bold mb-5">Galería</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {visibleItems.map((url, index) => (
          <div key={`${url}-${index}`} className="rounded-xl overflow-hidden bg-white shadow-sm">
            <img
              src={url}
              alt={`Imagen de galería ${index + 1}`}
              className="w-full h-[calc(14rem+1cm)] object-cover"
            />
          </div>
        ))}
      </div>

      {images.length > PAGE_SIZE && (
        <div className="flex justify-center gap-2 mt-5">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setCurrentPage(index)}
              className={`h-2.5 w-2.5 rounded-full transition-colors ${
                index === currentPage ? 'bg-eco-green' : 'bg-eco-green/30'
              }`}
              aria-label={`Ir a bloque ${index + 1} de la galería`}
            />
          ))}
        </div>
      )}
    </section>
  );
}

