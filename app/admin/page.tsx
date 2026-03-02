import { supabase } from '@/lib/supabase';
import { AdminNewsManager } from './news-manager';

export const dynamic = 'force-dynamic';

type News = {
  id: string;
  title: string;
  content: string;
  imageUrl: string;
  isPublished: boolean;
  createdAt: string | Date;
};

export default async function AdminPage() {
  let news: News[] = [];
  try {
    const { data, error } = await supabase
      .from('News')
      .select('*')
      .order('createdAt', { ascending: false });
    if (!error && data) news = data as News[];
  } catch {}

  return (
    <main>
      <AdminNewsManager initialNews={news} />
    </main>
  );
}
