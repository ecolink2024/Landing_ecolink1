import { NextRequest, NextResponse } from 'next/server';
import { isAdminAuthenticated } from '@/lib/auth';
import { supabase } from '@/lib/supabase';

export const dynamic = 'force-dynamic';

const BUCKET = 'news-images';
// En Vercel, request body suele fallar > ~4.5MB (413). Dejamos margen.
const MAX_SIZE_BYTES = 4 * 1024 * 1024;
const ALLOWED_MIME = new Set(['image/jpeg', 'image/png', 'image/webp', 'image/gif']);

async function ensureBucketExists() {
  const { data: buckets } = await supabase.storage.listBuckets();
  const exists = buckets?.some((b) => b.name === BUCKET);
  if (!exists) {
    await supabase.storage.createBucket(BUCKET, {
      public: true,
      allowedMimeTypes: ['image/jpeg', 'image/png', 'image/webp', 'image/gif'],
      fileSizeLimit: MAX_SIZE_BYTES,
    });
  }
}

export async function POST(request: NextRequest) {
  const isAdmin = await isAdminAuthenticated();
  if (!isAdmin) {
    return NextResponse.json({ error: 'No autorizado.' }, { status: 401 });
  }

  const formData = await request.formData();
  const file = formData.get('file');

  if (!(file instanceof File)) {
    return NextResponse.json({ error: 'Archivo inválido.' }, { status: 400 });
  }

  if (!ALLOWED_MIME.has(file.type)) {
    return NextResponse.json({ error: 'Tipo de archivo no permitido.' }, { status: 415 });
  }

  if (file.size > MAX_SIZE_BYTES) {
    return NextResponse.json(
      { error: 'La imagen supera el límite de 4MB para deploy.' },
      { status: 413 },
    );
  }

  try {
    await ensureBucketExists();
  } catch (err) {
    console.error('Error creating bucket:', err);
    return NextResponse.json(
      { error: 'No se pudo preparar el bucket de imágenes.' },
      { status: 500 },
    );
  }

  try {
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const ext = (file.name.split('.').pop() || '').toLowerCase();
    const safeExt = ext && /^[a-z0-9]+$/.test(ext) ? ext : 'jpg';
    const fileName = `${Date.now()}-${Math.random().toString(36).slice(2)}.${safeExt}`;

    const { error } = await supabase.storage
      .from(BUCKET)
      .upload(fileName, buffer, { contentType: file.type, upsert: false });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    const { data } = supabase.storage.from(BUCKET).getPublicUrl(fileName);
    return NextResponse.json({ secureUrl: data.publicUrl });
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Error interno subiendo la imagen.';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
