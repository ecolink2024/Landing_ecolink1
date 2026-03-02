import { supabase } from '@/lib/supabase';
import { AdminNewsManager } from './news-manager';

export const dynamic = 'force-dynamic';

export default async function AdminPage() {
  let news: Record<string, unknown>[] = [];
  try {
    const { data, error } = await supabase
      .from('News')
      .select('*')
      .order('createdAt', { ascending: false });
    if (!error && data) news = data;
  } catch {}

  return (
    <main>
      <AdminNewsManager initialNews={news} />
    </main>
  );
}
