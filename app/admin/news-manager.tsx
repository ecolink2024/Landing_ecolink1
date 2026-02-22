'use client';

import { FormEvent, useMemo, useState } from 'react';

type News = {
  id: string;
  title: string;
  content: string;
  imageUrl: string;
  isPublished: boolean;
  createdAt: string;
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
  const [editingId, setEditingId] = useState<string | null>(null);
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
    setForm({ title: item.title, content: item.content, imageUrl: item.imageUrl, isPublished: item.isPublished });
  }

  async function onDelete(id: string) {
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
    <div className="admin-grid">
      <section>
        <h2>{editingId ? 'Editar noticia' : 'Nueva noticia'}</h2>
        <form onSubmit={onSubmit}>
          <label>
            Título
            <input value={form.title} onChange={(e) => setForm((p) => ({ ...p, title: e.target.value }))} required />
          </label>
          <label>
            Contenido
            <textarea rows={6} value={form.content} onChange={(e) => setForm((p) => ({ ...p, content: e.target.value }))} required />
          </label>
          <label>
            Imagen (archivo)
            <input
              type="file"
              accept="image/*"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) onUpload(file);
              }}
            />
          </label>
          <label>
            URL imagen
            <input value={form.imageUrl} onChange={(e) => setForm((p) => ({ ...p, imageUrl: e.target.value }))} required />
          </label>
          <label style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <input
              style={{ width: 'auto' }}
              type="checkbox"
              checked={form.isPublished}
              onChange={(e) => setForm((p) => ({ ...p, isPublished: e.target.checked }))}
            />
            Publicada
          </label>
          {error ? <p style={{ color: '#be123c' }}>{error}</p> : null}
          <div style={{ display: 'flex', gap: 8 }}>
            <button className="btn-primary" type="submit" disabled={loading || uploading}>
              {loading ? 'Guardando...' : editingId ? 'Actualizar' : 'Crear'}
            </button>
            <button type="button" className="btn-muted" onClick={() => { setForm(initialForm); setEditingId(null); }}>
              Limpiar
            </button>
            <button type="button" className="btn-danger" onClick={onLogout}>
              Salir
            </button>
          </div>
        </form>
      </section>

      <section>
        <h2>Listado</h2>
        <div style={{ display: 'grid', gap: 12 }}>
          {orderedItems.map((item) => (
            <article key={item.id} className="card">
              <img src={item.imageUrl} alt={item.title} />
              <div className="card-body">
                <h3 className="title">{item.title}</h3>
                <p className="meta">{new Date(item.createdAt).toLocaleDateString('es-AR')} · {item.isPublished ? 'Publicada' : 'Borrador'}</p>
                <div style={{ display: 'flex', gap: 8 }}>
                  <button className="btn-muted" onClick={() => onEdit(item)}>Editar</button>
                  <button className="btn-danger" onClick={() => onDelete(item.id)}>Eliminar</button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
