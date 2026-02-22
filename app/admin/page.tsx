import { prisma } from '@/lib/prisma';
import { AdminNewsManager } from './news-manager';

export const dynamic = 'force-dynamic';

export default async function AdminPage() {
  const news = await prisma.news.findMany({ orderBy: { createdAt: 'desc' } });

  return (
    <main>
      <AdminNewsManager initialNews={news} />
    </main>
  );
}
