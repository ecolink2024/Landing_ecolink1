import { supabase } from '@/lib/supabase';
import Link from 'next/link';
import Navbar from '@/app/components/Navbar';

export const dynamic = 'force-dynamic';

const PAGE_SIZE = 9;

async function getNews(page: number) {
  try {
    const from = (page - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE - 1;

    const { data, error, count } = await supabase
      .from('News')
      .select('*', { count: 'exact' })
      .eq('isPublished', true)
      .order('createdAt', { ascending: false })
      .range(from, to);

    if (error) throw error;
    const total = count ?? 0;
    return { items: data ?? [], totalPages: Math.max(1, Math.ceil(total / PAGE_SIZE)) };
  } catch {
    return { items: [], totalPages: 1 };
  }
}

export default async function NovedadesPage({
  searchParams,
}: {
  searchParams: { page?: string };
}) {
  const page = Math.max(1, Number(searchParams.page ?? '1') || 1);
  const { items, totalPages } = await getNews(page);

  return (
    <body className="bg-eco-beige text-eco-text-dark">
      <Navbar />

      <main className="pt-10 pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Título */}
          <div className="mb-12">
            <h1 className="text-eco-forest text-4xl md:text-5xl font-extrabold leading-tight">
              Cuando nos movemos,<br />
              <span className="text-eco-green italic">pasan cosas</span>
            </h1>
            <p className="text-eco-forest/60 mt-3 text-lg">Últimas novedades de EcoLINK</p>
          </div>

          {/* Grid de noticias */}
          {items.length === 0 ? (
            <div className="text-center py-24">
              <p className="text-eco-forest/40 text-lg font-medium uppercase tracking-widest">No hay novedades por ahora</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {items.map((item) => (
                <article key={item.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-56 object-cover"
                  />
                  <div className="p-6 flex flex-col flex-grow">
                    <p className="text-eco-green text-xs font-bold uppercase tracking-widest mb-2">
                      {new Date(item.createdAt).toLocaleDateString('es-AR', { day: 'numeric', month: 'long', year: 'numeric' })}
                    </p>
                    <h2 className="text-eco-forest font-extrabold text-lg leading-snug mb-3">{item.title}</h2>
                    <p className="text-eco-forest/70 text-sm leading-relaxed line-clamp-3 flex-grow">{item.content}</p>
                  </div>
                </article>
              ))}
            </div>
          )}

          {/* Paginación */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-3 mt-14">
              {page > 1 && (
                <Link
                  href={`/novedades?page=${page - 1}`}
                  className="px-6 py-2 rounded-full bg-eco-forest text-white text-sm font-bold uppercase tracking-wider hover:bg-eco-green transition-colors"
                >
                  ← Anterior
                </Link>
              )}
              <span className="text-eco-forest/50 text-sm font-medium">
                {page} / {totalPages}
              </span>
              {page < totalPages && (
                <Link
                  href={`/novedades?page=${page + 1}`}
                  className="px-6 py-2 rounded-full bg-eco-forest text-white text-sm font-bold uppercase tracking-wider hover:bg-eco-green transition-colors"
                >
                  Siguiente →
                </Link>
              )}
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-eco-forest text-eco-beige py-12 px-6 text-center">
        <div className="text-3xl font-black mb-4">EcoLINK</div>
        <div className="text-xs text-eco-beige/50">© 2024 EcoLINK | Todos los derechos reservados</div>
      </footer>
    </body>
  );
}
