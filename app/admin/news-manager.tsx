'use client';

import { FormEvent, useMemo, useState } from 'react';

type News = {
  id: number | string;
  title: string;
  content: string;
  image_url: string;
  is_published: boolean;
  created_at: string | Date;
};

type FormState = {
  title: string;
  content: string;
  imageUrl: string;
  isPublished: boolean;
};

const initialForm: FormState = { title: '', content: '', imageUrl: '', isPublished: true };

export function AdminNewsManager({ initialNews }: { initialNews: News[] }) {
  const [items, setItems] = useState(initialNews);
  const [form, setForm] = useState<FormState>(initialForm);
  const [editingId, setEditingId] = useState<string | number | null>(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);

  const orderedItems = useMemo(() => items, [items]);

  async function refreshNews() {
    const response = await fetch('/api/news?page=1&pageSize=50&includeDrafts=1');
    const data = await response.json();
    const adminVisible = data.items as News[];
    setItems(adminVisible);
  }

  async function onUpload(file: File) {
    setUploading(true);
    setError('');
    const formData = new FormData();
    formData.append('file', file);

    const response = await fetch('/api/upload', {
      method: 'POST',
      body: formData
    });
    setUploading(false);

    if (!response.ok) {
      setError('No se pudo subir la imagen.');
      return;
    }

    const data = await response.json();
    setForm((prev) => ({ ...prev, imageUrl: data.secureUrl }));
  }

  async function onSubmit(event: FormEvent) {
    event.preventDefault();
    setError('');

    if (!form.imageUrl) {
      setError('Subí una imagen antes de publicar.');
      return;
    }

    setLoading(true);

    const endpoint = editingId ? `/api/news/${editingId}` : '/api/news';
    const method = editingId ? 'PUT' : 'POST';

    const response = await fetch(endpoint, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    });

    setLoading(false);

    if (!response.ok) {
      const data = await response.json();
      setError(data.error?.formErrors?.[0] ?? data.error ?? 'No se pudo guardar la noticia.');
      return;
    }

    setForm(initialForm);
    setEditingId(null);
    await refreshNews();
  }

  function onEdit(item: News) {
    setEditingId(item.id);
    setForm({ title: item.title, content: item.content, imageUrl: item.image_url, isPublished: item.is_published });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  async function onDelete(id: string | number) {
    const confirmed = window.confirm('¿Seguro que querés eliminar esta noticia?');
    if (!confirmed) return;

    const response = await fetch(`/api/news/${id}`, { method: 'DELETE' });
    if (!response.ok) {
      setError('No se pudo eliminar la noticia.');
      return;
    }

    setItems((prev) => prev.filter((item) => item.id !== id));
  }

  async function onLogout() {
    await fetch('/api/admin/logout', { method: 'POST' });
    window.location.href = '/admin/login';
  }

  return (
    <div className="min-h-screen bg-eco-beige">
      {/* Header */}
      <header className="bg-eco-green px-6 py-3 flex items-center justify-between shadow-md">
        <img src="/ecolink-logo.png" alt="EcoLINK" className="h-12 w-auto object-contain" />
        <p className="text-white/70 text-xs uppercase tracking-[0.2em] font-bold hidden md:block">Panel de noticias</p>
        <button
          onClick={onLogout}
          className="bg-eco-pink text-white px-6 py-2 rounded-full font-extrabold text-xs uppercase tracking-widest hover:opacity-90 transition-opacity"
        >
          Salir
        </button>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Form */}
        <section>
          <h2 className="text-eco-forest text-2xl font-extrabold mb-6">
            {editingId ? 'Editar noticia' : 'Nueva noticia'}
          </h2>

          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
            <form onSubmit={onSubmit} className="space-y-5">
              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Título</label>
                <input
                  value={form.title}
                  onChange={(e) => setForm((p) => ({ ...p, title: e.target.value }))}
                  required
                  placeholder="Título de la noticia"
                  className="w-full border border-gray-200 rounded-md px-4 py-3 text-eco-forest focus:outline-none focus:border-eco-green transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Contenido</label>
                <textarea
                  rows={6}
                  value={form.content}
                  onChange={(e) => setForm((p) => ({ ...p, content: e.target.value }))}
                  required
                  placeholder="Escribí el contenido de la noticia..."
                  className="w-full border border-gray-200 rounded-md px-4 py-3 text-eco-forest focus:outline-none focus:border-eco-green transition-colors resize-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Imagen</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) onUpload(file);
                  }}
                  className="w-full text-sm text-eco-forest file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-bold file:bg-eco-green file:text-white hover:file:bg-eco-forest file:cursor-pointer file:transition-colors"
                />
                {uploading && <p className="text-xs text-eco-green mt-1 font-medium">Subiendo imagen...</p>}
              </div>

              {form.imageUrl && (
                <div className="rounded-lg overflow-hidden h-40 bg-gray-100">
                  <img src={form.imageUrl} alt="Preview" className="w-full h-full object-cover" />
                </div>
              )}

              <label className="flex items-center gap-3 cursor-pointer select-none">
                <div
                  onClick={() => setForm((p) => ({ ...p, isPublished: !p.isPublished }))}
                  className={`w-11 h-6 rounded-full transition-colors relative ${form.isPublished ? 'bg-eco-green' : 'bg-gray-300'}`}
                >
                  <span className={`absolute top-1 w-4 h-4 bg-white rounded-full shadow transition-transform ${form.isPublished ? 'translate-x-6' : 'translate-x-1'}`} />
                </div>
                <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">
                  {form.isPublished ? 'Publicada' : 'Borrador'}
                </span>
              </label>

              {error && <p className="text-sm text-eco-pink font-medium">{error}</p>}

              <div className="flex gap-3 pt-1">
                <button
                  type="submit"
                  disabled={loading || uploading}
                  className="flex-1 bg-eco-green text-white font-bold py-3 rounded-full uppercase tracking-wider text-sm hover:bg-eco-forest transition-colors disabled:opacity-50"
                >
                  {loading ? 'Guardando...' : editingId ? 'Actualizar' : 'Publicar'}
                </button>
                <button
                  type="button"
                  onClick={() => { setForm(initialForm); setEditingId(null); }}
                  className="px-6 bg-gray-100 text-eco-forest font-bold py-3 rounded-full uppercase tracking-wider text-sm hover:bg-gray-200 transition-colors"
                >
                  Limpiar
                </button>
              </div>
            </form>
          </div>
        </section>

        {/* Listado */}
        <section>
          <h2 className="text-eco-forest text-2xl font-extrabold mb-6">
            Noticias <span className="text-eco-green">({orderedItems.length})</span>
          </h2>

          {orderedItems.length === 0 && (
            <div className="bg-white rounded-xl border border-gray-100 p-12 text-center">
              <p className="text-gray-400 text-sm uppercase tracking-widest font-bold">No hay noticias aún</p>
            </div>
          )}

          <div className="space-y-4">
            {orderedItems.map((item) => (
              <article key={item.id} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 flex gap-0">
                <img
                  src={item.image_url}
                  alt={item.title}
                  className="w-28 h-28 object-cover flex-shrink-0"
                />
                <div className="p-4 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="text-eco-forest font-bold text-sm leading-snug mb-1 line-clamp-2">{item.title}</h3>
                    <p className="text-gray-400 text-xs">
                      {new Date(item.created_at).toLocaleDateString('es-AR')}
                      {' · '}
                      <span className={item.is_published ? 'text-eco-green font-semibold' : 'text-eco-pink font-semibold'}>
                        {item.is_published ? 'Publicada' : 'Borrador'}
                      </span>
                    </p>
                  </div>
                  <div className="flex gap-2 mt-2">
                    <button
                      onClick={() => onEdit(item)}
                      className="px-4 py-1.5 bg-eco-forest text-white text-xs font-bold rounded-full uppercase tracking-wider hover:bg-eco-green transition-colors"
                    >
                      Editar
                    </button>
                    <button
                      onClick={() => onDelete(item.id)}
                      className="px-4 py-1.5 bg-eco-beige text-eco-pink text-xs font-bold rounded-full uppercase tracking-wider border border-eco-pink/30 hover:bg-eco-pink hover:text-white transition-colors"
                    >
                      Eliminar
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
