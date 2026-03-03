import { supabase } from '@/lib/supabase';
import { AdminNewsManager } from './news-manager';

export const dynamic = 'force-dynamic';

type News = {
  id: number | string;
  title: string;
  content: string;
  image_url: string;
  is_published: boolean;
  created_at: string | Date;
};

export default async function AdminPage() {
  let news: News[] = [];
  try {
    const { data, error } = await supabase
      .from('news')
      .select('*')
      .order('created_at', { ascending: false });
    if (!error && data) news = data as News[];
  } catch {}

  return (
    <main>
      <AdminNewsManager initialNews={news} />
    </main>
  );
}
