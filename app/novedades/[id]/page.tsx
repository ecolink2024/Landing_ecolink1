import Navbar from '@/app/components/Navbar';
import { supabase } from '@/lib/supabase';
import { notFound } from 'next/navigation';

export const dynamic = 'force-dynamic';
export const revalidate = 0;
export const fetchCache = 'force-no-store';

async function getNewsById(id: string) {
  const { data, error } = await supabase
    .from('news')
    .select('*')
    .eq('id', id)
    .eq('is_published', true)
    .single();

  if (error || !data) return null;
  return data as any;
}

export default async function NovedadDetallePage({
  params,
}: {
  params: { id: string };
}) {
  const item = await getNewsById(params.id);
  if (!item) notFound();

  const dateText = new Date(item.created_at).toLocaleDateString('es-AR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <div className="bg-eco-beige text-eco-text-dark">
      <Navbar />

      <main className="pt-10 pb-24">
        {/* Hero image */}
        <section className="px-6">
          <div className="max-w-5xl mx-auto">
            <div className="rounded-2xl overflow-hidden shadow-sm bg-white">
              <img
                src={item.image_url}
                alt={item.title}
                className="w-full h-[320px] sm:h-[420px] md:h-[520px] object-cover"
              />
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="px-6 mt-10">
          <article className="max-w-3xl mx-auto">
            <p className="text-eco-green text-xs font-bold uppercase tracking-widest">
              {dateText}
            </p>
            <h1 className="text-eco-forest text-3xl md:text-5xl font-extrabold leading-tight mt-3">
              {item.title}
            </h1>

            <p className="text-eco-forest/80 text-lg md:text-xl font-medium leading-relaxed mt-5">
              {item.excerpt ?? ''}
            </p>

            <div className="mt-8 prose prose-slate max-w-none">
              <p className="text-eco-forest/80 leading-relaxed whitespace-pre-wrap">
                {item.content}
              </p>
            </div>
          </article>
        </section>
      </main>
    </div>
  );
}

