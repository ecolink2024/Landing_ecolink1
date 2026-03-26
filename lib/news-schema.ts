import { z } from 'zod';

export const newsSchema = z.object({
  title: z.string().trim().min(3, 'El título debe tener al menos 3 caracteres.').max(120),
  excerpt: z
    .string()
    .trim()
    .min(3, 'La bajada debe tener al menos 3 caracteres.')
    .max(220, 'La bajada no puede superar 220 caracteres.'),
  content: z.string().trim().min(10, 'El contenido debe tener al menos 10 caracteres.'),
  imageUrl: z.string().url('La imagen debe ser una URL válida.'),
  isPublished: z.boolean().optional().default(true)
});
