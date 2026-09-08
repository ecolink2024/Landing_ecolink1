'use client';

import { FormEvent, useMemo, useRef, useState } from 'react';
import { formatNewsDateForDisplay, isoDateFromCreated, todayIsoLocal } from '@/lib/news-date';

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

type FormState = {
  title: string;
  excerpt: string;
  content: string;
  imageUrl: string;
  galleryImages: string[];
  isPublished: boolean;
  /** YYYY-MM-DD — fecha que se muestra en Novedades */
  publishedAt: string;
};

function createInitialForm(): FormState {
  return {
    title: '',
    excerpt: '',
    content: '',
    imageUrl: '',
    galleryImages: [],
    isPublished: true,
    publishedAt: todayIsoLocal(),
  };
}
const MAX_UPLOAD_BYTES = 4 * 1024 * 1024;
const MAX_GALLERY_IMAGES = 6;

type ApiErrorPayload = {
  error?:
    | string
    | {
        formErrors?: string[];
        fieldErrors?: Record<string, string[] | undefined>;
      };
  message?: string;
};

function formatApiError(payload: unknown, fallback: string): string {
  if (!payload || typeof payload !== 'object') return fallback;

  const data = payload as ApiErrorPayload;

  if (typeof data.message === 'string' && data.message.trim()) {
    return data.message;
  }

  if (typeof data.error === 'string' && data.error.trim()) {
    return data.error;
  }

  if (data.error && typeof data.error === 'object') {
    const formError = data.error.formErrors?.find((msg) => typeof msg === 'string' && msg.trim());
    if (formError) return formError;

    const fieldMessages = Object.values(data.error.fieldErrors ?? {})
      .flat()
      .filter((msg): msg is string => typeof msg === 'string' && msg.trim().length > 0);

    if (fieldMessages.length > 0) {
      return fieldMessages.join(' ');
    }
  }

  return fallback;
}

async function readJsonSafe(response: Response): Promise<unknown> {
  try {
    return await response.json();
  } catch {
    return null;
  }
}

export function AdminNewsManager({ initialNews }: { initialNews: News[] }) {
  const [items, setItems] = useState<News[]>(Array.isArray(initialNews) ? initialNews : []);
  const [form, setForm] = useState<FormState>(() => createInitialForm());
  const [editingId, setEditingId] = useState<string | number | null>(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const contentRef = useRef<HTMLTextAreaElement | null>(null);

  const orderedItems = useMemo(() => items, [items]);

  async function refreshNews() {
    const response = await fetch('/api/news?page=1&pageSize=50&includeDrafts=1');
    const data = (await readJsonSafe(response)) as { items?: News[] } | null;

    if (!response.ok || !data || !Array.isArray(data.items)) {
      throw new Error('No se pudo actualizar el listado de noticias.');
    }

    setItems(data.items);
  }

  async function onUpload(file: File) {
    if (file.size > MAX_UPLOAD_BYTES) {
      setError('La imagen supera 4MB. En deploy ese tamaño falla (HTTP 413).');
      return;
    }

    setUploading(true);
    setError('');

    try {
      const formData = new FormData();
      formData.append('file', file);

      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData
      });

      let data: any = null;
      let rawText: string | null = null;
      try {
        data = await response.json();
      } catch {
        try {
          rawText = await response.text();
        } catch {
          rawText = null;
        }
      }

      if (!response.ok) {
        const fallback = response.status === 413
          ? 'La imagen supera 4MB. Reducí el tamaño e intentá nuevamente.'
          : `No se pudo subir la imagen (HTTP ${response.status}).`;
        setError(formatApiError(data, rawText ? rawText.slice(0, 160) : fallback));
        return;
      }

      if (!data?.secureUrl) {
        setError('La subida respondió OK pero sin URL de imagen.');
        return;
      }

      setForm((prev) => ({ ...prev, imageUrl: data.secureUrl }));
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Error de red subiendo la imagen.';
      setError(message);
    } finally {
      setUploading(false);
    }
  }

  async function onUploadGallery(files: FileList | null) {
    if (!files || files.length === 0) return;

    const remainingSlots = MAX_GALLERY_IMAGES - form.galleryImages.length;
    if (remainingSlots <= 0) {
      setError('Ya alcanzaste el máximo de 6 imágenes de galería.');
      return;
    }

    const selected = Array.from(files).slice(0, remainingSlots);
    const oversized = selected.find((file) => file.size > MAX_UPLOAD_BYTES);
    if (oversized) {
      setError(`"${oversized.name}" supera 4MB. Reducí el tamaño e intentá nuevamente.`);
      return;
    }

    setUploading(true);
    setError('');

    try {
      const uploadedUrls: string[] = [];

      for (const file of selected) {
        const formData = new FormData();
        formData.append('file', file);

        const response = await fetch('/api/upload', {
          method: 'POST',
          body: formData
        });

        let data: any = null;
        let rawText: string | null = null;
        try {
          data = await response.json();
        } catch {
          try {
            rawText = await response.text();
          } catch {
            rawText = null;
          }
        }

        if (!response.ok) {
          const fallback = response.status === 413
            ? 'Una imagen supera 4MB. Reducí el tamaño e intentá nuevamente.'
            : `No se pudo subir una imagen de galería (HTTP ${response.status}).`;
          throw new Error(formatApiError(data, rawText ? rawText.slice(0, 160) : fallback));
        }

        if (!data?.secureUrl) {
          throw new Error('La subida respondió OK pero sin URL de imagen.');
        }

        uploadedUrls.push(data.secureUrl);
      }

      setForm((prev) => ({
        ...prev,
        galleryImages: [...prev.galleryImages, ...uploadedUrls].slice(0, MAX_GALLERY_IMAGES)
      }));
    } catch (err) {
      const message = err instanceof Error ? err.message : 'No se pudieron subir las imágenes de galería.';
      setError(message);
    } finally {
      setUploading(false);
    }
  }

  async function onSubmit(event: FormEvent) {
    event.preventDefault();
    setError('');

    if (uploading) {
      setError('Esperá a que termine de subir la imagen.');
      return;
    }

    if (!form.imageUrl) {
      setError('Subí una imagen antes de publicar.');
      return;
    }

    setLoading(true);

    try {
      const endpoint = editingId ? `/api/news/${editingId}` : '/api/news';
      const method = editingId ? 'PUT' : 'POST';

      const payload = {
        title: form.title.trim(),
        excerpt: form.excerpt.trim(),
        content: form.content.trim(),
        imageUrl: form.imageUrl.trim(),
        galleryImages: form.galleryImages,
        isPublished: form.isPublished,
        publishedAt: form.publishedAt,
      };

      const response = await fetch(endpoint, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await readJsonSafe(response);

      if (!response.ok) {
        setError(formatApiError(data, 'No se pudo guardar la noticia.'));
        return;
      }

      setForm(createInitialForm());
      setEditingId(null);
      await refreshNews();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'No se pudo guardar la noticia.');
    } finally {
      setLoading(false);
    }
  }

  function onEdit(item: News) {
    setEditingId(item.id);
    setForm({
      title: item.title,
      excerpt: item.excerpt ?? '',
      content: item.content,
      imageUrl: item.image_url,
      galleryImages: item.gallery_images ?? [],
      isPublished: item.is_published,
      publishedAt: item.published_at ?? isoDateFromCreated(item.created_at),
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  async function onDelete(id: string | number) {
    const confirmed = window.confirm('¿Seguro que querés eliminar esta noticia?');
    if (!confirmed) return;

    setError('');

    try {
      const response = await fetch(`/api/news/${id}`, { method: 'DELETE' });
      const data = await readJsonSafe(response);

      if (!response.ok) {
        setError(formatApiError(data, 'No se pudo eliminar la noticia.'));
        return;
      }

      setItems((prev) => prev.filter((item) => item.id !== id));
    } catch {
      setError('Error de red al eliminar la noticia.');
    }
  }

  async function onLogout() {
    await fetch('/api/admin/logout', { method: 'POST' });
    window.location.href = '/admin/login';
  }

  function wrapContentSelection(prefix: string, suffix: string = prefix) {
    const textarea = contentRef.current;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const value = form.content;
    const selected = value.slice(start, end) || 'texto';
    const next = `${value.slice(0, start)}${prefix}${selected}${suffix}${value.slice(end)}`;

    setForm((prev) => ({ ...prev, content: next }));

    requestAnimationFrame(() => {
      textarea.focus();
      const cursorStart = start + prefix.length;
      const cursorEnd = cursorStart + selected.length;
      textarea.setSelectionRange(cursorStart, cursorEnd);
    });
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
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">
                  Fecha de la noticia
                </label>
                <input
                  type="date"
                  value={form.publishedAt}
                  onChange={(e) => setForm((p) => ({ ...p, publishedAt: e.target.value }))}
                  className="w-full max-w-xs border border-gray-200 rounded-md px-4 py-3 text-eco-forest focus:outline-none focus:border-eco-green transition-colors"
                />
                <p className="text-xs text-gray-500 mt-1">
                  Por defecto es hoy; podés cambiarla. Es la fecha que se muestra en Novedades.
                </p>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Bajada</label>
                <textarea
                  rows={2}
                  value={form.excerpt}
                  onChange={(e) => setForm((p) => ({ ...p, excerpt: e.target.value }))}
                  required
                  placeholder="Escribí la bajada (resumen corto de la noticia)..."
                  className="w-full border border-gray-200 rounded-md px-4 py-3 text-eco-forest focus:outline-none focus:border-eco-green transition-colors resize-none"
                />
              </div>

              <div>
                <div className="flex items-center justify-between gap-3 mb-1">
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest">Contenido</label>
                  <button
                    type="button"
                    onClick={() => wrapContentSelection('**')}
                    className="px-3 py-1 rounded-full bg-eco-forest text-white text-[11px] font-bold uppercase tracking-wider hover:bg-eco-green transition-colors"
                  >
                    Negrita
                  </button>
                </div>
                <textarea
                  ref={contentRef}
                  rows={6}
                  value={form.content}
                  onChange={(e) => setForm((p) => ({ ...p, content: e.target.value }))}
                  required
                  placeholder="Escribí el contenido de la noticia..."
                  className="w-full border border-gray-200 rounded-md px-4 py-3 text-eco-forest focus:outline-none focus:border-eco-green transition-colors resize-none"
                />
                <p className="text-xs text-gray-500 mt-1">
                  Seleccioná texto y tocá Negrita, o escribí <code className="font-mono">**así**</code> para resaltar.
                </p>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Imagen</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    e.currentTarget.value = '';
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

              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">
                  Galería (hasta 6 imágenes)
                </label>
                <input
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={(e) => {
                    onUploadGallery(e.target.files);
                    e.currentTarget.value = '';
                  }}
                  className="w-full text-sm text-eco-forest file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-bold file:bg-eco-forest file:text-white hover:file:bg-eco-green file:cursor-pointer file:transition-colors"
                />
                <p className="text-xs text-gray-500 mt-2">
                  Cargadas: {form.galleryImages.length} / {MAX_GALLERY_IMAGES}
                </p>
              </div>

              {form.galleryImages.length > 0 && (
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {form.galleryImages.map((url, index) => (
                    <div key={`${url}-${index}`} className="relative rounded-lg overflow-hidden h-24 bg-gray-100">
                      <img src={url} alt={`Galería ${index + 1}`} className="w-full h-full object-cover" />
                      <button
                        type="button"
                        onClick={() =>
                          setForm((prev) => ({
                            ...prev,
                            galleryImages: prev.galleryImages.filter((_, i) => i !== index)
                          }))
                        }
                        className="absolute top-1 right-1 w-6 h-6 rounded-full bg-black/70 text-white text-xs font-bold hover:bg-black"
                        aria-label="Quitar imagen de galería"
                      >
                        ×
                      </button>
                    </div>
                  ))}
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
                  onClick={() => {
                    setForm(createInitialForm());
                    setEditingId(null);
                  }}
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
                      {formatNewsDateForDisplay(item)}
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
