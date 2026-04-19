-- Fecha mostrada en Novedades (editable desde el admin). Ejecutar en Supabase → SQL Editor.
-- Tras migrar, las noticias viejas usan la fecha de `created_at` como valor inicial.

ALTER TABLE public.news
  ADD COLUMN IF NOT EXISTS published_at date;

UPDATE public.news
SET published_at = created_at::date
WHERE published_at IS NULL;

-- Opcional: exigir que siempre haya fecha (descomentar después de verificar datos)
-- ALTER TABLE public.news ALTER COLUMN published_at SET NOT NULL;

COMMENT ON COLUMN public.news.published_at IS 'Fecha de publicación mostrada en el sitio (YYYY-MM-DD).';
