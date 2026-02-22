import { prisma } from '@/lib/prisma';

const PAGE_SIZE = 5;

async function getNews(page: number) {
  const where = { isPublished: true };
  const [items, total] = await Promise.all([
    prisma.news.findMany({ where, orderBy: { createdAt: 'desc' }, skip: (page - 1) * PAGE_SIZE, take: PAGE_SIZE }),
    prisma.news.count({ where })
  ]);
  return { items, totalPages: Math.max(1, Math.ceil(total / PAGE_SIZE)) };
}

export default async function Home({ searchParams }: { searchParams?: { page?: string } }) {
  const page = Math.max(1, Number(searchParams?.page ?? '1') || 1);
  const { items, totalPages } = await getNews(page);

  return (
    <main>
      <section className="news-section section">
        <div className="container">
          <h2>Noticias</h2>
          <p>Últimas novedades de EcoLink.</p>
          <div className="news-grid">
            {items.map((item) => (
              <article className="card" key={item.id}>
                <img src={item.imageUrl} alt={item.title} />
                <div className="card-body">
                  <div className="badge">Noticia</div>
                  <h3 className="title">{item.title}</h3>
                  <div className="meta">{new Date(item.createdAt).toLocaleDateString('es-AR')}</div>
                  <p>{item.content}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="pagination">
            {page > 1 ? <a className="btn-muted" href={`/?page=${page - 1}`}>Anterior</a> : <span />}
            <span>Página {page} de {totalPages}</span>
            {page < totalPages ? <a className="btn-muted" href={`/?page=${page + 1}`}>Siguiente</a> : <span />}
          </div>
        </div>
      </section>

      <section className="hero section">
        <div className="container">
          <h1>Somos conexión de enlace EcoLink</h1>
          <p>Conectamos, recuperamos y transformamos.</p>
        </div>
      </section>
    </main>
  );
}
