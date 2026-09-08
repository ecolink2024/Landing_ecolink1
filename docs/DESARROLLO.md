# EcoLink — Documentación de desarrollo

Guía técnica del sitio/landing de EcoLink (Next.js + Supabase + Vercel).

## Repo canónico

| Qué | Valor |
| --- | --- |
| **Repo de producción** | https://github.com/ecolink2024/Landing_ecolink1 |
| **Deploy** | https://landing-ecolink-gtr1.vercel.app |
| **Org** | `ecolink2024` |

> **Importante:** no pushear cambios de producción a `felipetillard/ecolink` ni a forks viejos (`ferromayy/Landing_ecolink`, etc.) salvo que se indique explícitamente. El `origin` de trabajo debe apuntar a `ecolink2024/Landing_ecolink1`.

### Remotes recomendados

```bash
git remote -v
# origin → https://github.com/ecolink2024/Landing_ecolink1.git
```

Si el clone apunta a otro lado:

```bash
git remote set-url origin https://github.com/ecolink2024/Landing_ecolink1.git
git fetch origin
git checkout main
git pull origin main
```

## Stack

- **Next.js 14** (App Router)
- **React 18** + **TypeScript**
- **Tailwind CSS 4**
- **Supabase** (Postgres + Storage para imágenes de noticias)
- **Zod** (validación de noticias)
- **jose** + **bcryptjs** (sesión admin JWT en cookie)
- **Google Sheets API** (leads de formularios)
- **Vercel** (hosting + cron de keepalive)

Prisma aparece en el proyecto por legado; el flujo actual de noticias usa **Supabase** (`lib/supabase.ts`), no Prisma en runtime de news.

## Estructura relevante

```
app/
  page.tsx                 # Home
  casas/                   # Landing casas
  empresas/                # Landing empresas
  somos/                   # Quiénes somos
  novedades/               # Listado + detalle de noticias
  recursos/p/[slug]/       # Presentaciones embebidas (Google Slides)
  admin/                   # Panel de noticias (protegido)
  api/
    news/                  # CRUD noticias
    upload/                # Subida de imágenes a Supabase Storage
    admin/login|logout     # Auth admin
    leads/                 # Formularios → Google Sheets
    health/supabase        # Keepalive (cron Vercel)
lib/
  news-schema.ts           # Validación Zod de noticias
  rich-text.tsx            # Negrita **texto** en contenido
  auth.ts / middleware.ts  # Sesión admin
  googleSheets.ts          # Append de leads
  embedded-slides.ts       # Slugs de presentaciones
supabase/migrations/       # SQL a correr en Supabase
```

## Setup local

1. Node.js 18+
2. Clonar el repo canónico
3. `npm install`
4. Copiar `.env.example` → `.env.local` y completar variables
5. `npm run dev` → http://localhost:3000

### Scripts

| Script | Uso |
| --- | --- |
| `npm run dev` | Desarrollo |
| `npm run build` | Build de producción (`prisma generate && next build`) |
| `npm run start` | Servir build |
| `npm run lint` | ESLint |
| `npm run typecheck` | TypeScript |

## Variables de entorno

### Obligatorias (noticias + admin)

| Variable | Uso |
| --- | --- |
| `SUPABASE_URL` | Proyecto Supabase |
| `SUPABASE_SERVICE_ROLE_KEY` | Service role (solo servidor; no exponer al cliente) |
| `AUTH_SECRET` | Firma JWT de cookie `ecolink_admin_session` |
| `ADMIN_EMAIL` | Email del admin |

> El hash de password admin hoy está hardcodeado en `app/api/admin/login/route.ts`. Ideal a mediano plazo: moverlo a `ADMIN_PASSWORD_HASH` en env (ya aparece en `.env.example`).

### Leads (formularios)

| Variable | Uso |
| --- | --- |
| `GOOGLE_SHEETS_SPREADSHEET_ID` | ID del spreadsheet |
| `GOOGLE_SHEETS_CLIENT_EMAIL` | Service account |
| `GOOGLE_SHEETS_PRIVATE_KEY` | Private key (con `\n` escapados) |
| `GOOGLE_SHEETS_TAB_NAME` | Tab (default `Leads`) |

Sources de leads: `home` | `empresas` | `casas` (`POST /api/leads?source=...`).

### Opcionales / legado

| Variable | Uso |
| --- | --- |
| `DATABASE_URL` / `DIRECT_URL` | Prisma (legado) |
| `CLOUDINARY_*` | Cloudinary (legado; upload actual usa Supabase Storage) |
| `SUPABASE_KEEPALIVE_SECRET` | Token opcional del cron `/api/health/supabase` |

## Datos: noticias (Supabase)

Tabla `public.news` (campos usados por la app):

- `id`, `title`, `excerpt`, `content`
- `image_url`, `gallery_images` (array / JSON de URLs)
- `is_published`, `created_at`, `updated_at`
- `published_at` (date mostrada en el sitio) — ver `supabase/migrations/add_news_published_at.sql`

Storage bucket: **`news-images`** (público). Límite de archivo en upload: **4MB**. MIME: jpeg/png/webp/gif.

## API

| Método | Ruta | Auth | Notas |
| --- | --- | --- | --- |
| `GET` | `/api/news?page=&pageSize=&includeDrafts=1` | Drafts solo admin | Público: solo publicadas |
| `POST` | `/api/news` | Admin | Crea noticia |
| `PUT` | `/api/news/:id` | Admin | Actualiza |
| `DELETE` | `/api/news/:id` | Admin | Elimina |
| `POST` | `/api/upload` | Admin | Sube imagen → `{ secureUrl }` |
| `POST` | `/api/admin/login` | — | Setea cookie JWT 7d |
| `POST` | `/api/admin/logout` | — | Limpia cookie |
| `POST` | `/api/leads?source=` | — | Append a Sheets |
| `GET` | `/api/health/supabase` | Token opcional | Keepalive |

Validación de body de news: `lib/news-schema.ts`.

Errores de validación Zod: responder con `{ error: flatten(), message: string }` para que el admin no crashee al mostrar el error.

## Auth admin

- Middleware protege `/admin/*` excepto `/admin/login`
- Cookie httpOnly: `ecolink_admin_session`
- Role en JWT: `admin`

## Contenido enriquecido

El contenido de noticias acepta negrita con sintaxis `**texto**`, renderizada en el detalle (`lib/rich-text.tsx`). No hay HTML libre (evita XSS).

## Páginas públicas

| Ruta | Descripción |
| --- | --- |
| `/` | Home + carousel de novedades + form lead |
| `/casas` | Servicios hogares + lead |
| `/empresas` | Servicios empresas + lead |
| `/somos` | Equipo / historia |
| `/novedades` | Listado paginado |
| `/novedades/[id]` | Detalle + galería |
| `/recursos/p/presentacion` | Google Slides embebido |
| `/recursos/p/organicos-compostables` | Google Slides embebido |
| `/admin` | CRUD noticias |
| `/admin/login` | Login |

Presentaciones: editar URLs en `lib/embedded-slides.ts` (Publish to web → `pubembed`).

## Deploy

- Host: **Vercel**, proyecto ligado a `ecolink2024/Landing_ecolink1` (`main`)
- Cron (`vercel.json`): `GET /api/health/supabase` cada 2 días a las 09:00 UTC aprox.

Tras push a `main`, Vercel redeploya solo. Verificar variables en el dashboard de Vercel.

## Checklist antes de pushear

1. Confirmar remote: `git remote get-url origin` → `ecolink2024/Landing_ecolink1`
2. Branch base: `main` actualizado
3. No commitear `.env.local` ni secrets
4. Probar admin: login, crear/editar noticia, upload &lt; 4MB, negrita, validación (mensaje de error, no crash)

## Docs relacionadas

- Guía de uso (no técnica): [GUIA-DE-USO.md](./GUIA-DE-USO.md)
