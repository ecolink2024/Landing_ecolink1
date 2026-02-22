import { prisma } from '@/lib/prisma';
import { AdminNewsManager } from './news-manager';

export const dynamic = 'force-dynamic';

export default async function AdminPage() {
  const news = await prisma.news.findMany({ orderBy: { createdAt: 'desc' } });

  return (
    <main className="admin-wrap">
      <div className="container">
        <h1>Panel de noticias</h1>
        <p>Crear, editar, publicar o eliminar noticias.</p>
        <AdminNewsManager initialNews={news} />
      </div>
    </main>
  );
}
