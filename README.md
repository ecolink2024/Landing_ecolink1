# EcoLink

Aplicación Next.js con panel administrador para gestionar noticias.

## Requisitos

- Node.js 18+
- PlanetScale (MySQL)
- Cloudinary

## Variables de entorno

Copiar `.env.example` a `.env` y completar valores.

## Base de datos

1. Crear DB en PlanetScale.
2. Configurar `DATABASE_URL`.
3. Ejecutar SQL de `prisma/migrations/20260222195000_init/migration.sql` en PlanetScale.
4. Generar cliente Prisma:

```bash
npm run prisma:generate
```

## Desarrollo

```bash
npm install
npm run dev
```

## Endpoints

- `GET /api/news?page=1&pageSize=5` público (solo publicadas).
- `POST /api/news` admin.
- `PUT /api/news/:id` admin.
- `DELETE /api/news/:id` admin.
- `POST /api/upload` admin (sube imagen a Cloudinary).
