import { supabase } from '@/lib/supabase';
import { AdminNewsManager } from './news-manager';

export const dynamic = 'force-dynamic';
export const revalidate = 0;
export const fetchCache = 'force-no-store';

type News = {
  id: number | string;
  title: string;
  excerpt?: string;
  content: string;
  image_url: string;
  gallery_images?: string[];
  is_published: boolean;
  created_at: string | Date;
  published_at?: string | null;
};

export default async function AdminPage() {
  let news: News[] = [];
  try {
    const { data, error } = await supabase
      .from('news')
      .select('*')
      .order('published_at', { ascending: false, nullsFirst: false });
    if (!error && data) news = data as News[];
  } catch {}

  return (
    <main>
      <AdminNewsManager initialNews={news} />
    </main>
  );
}
