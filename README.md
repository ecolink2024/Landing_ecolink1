# EcoLink

Sitio / landing de EcoLink (Next.js) con panel de noticias, leads a Google Sheets y presentaciones embebidas.

## Documentación

- **Desarrollo (técnico):** [docs/DESARROLLO.md](./docs/DESARROLLO.md)
- **Guía de uso (contenido / admin):** [docs/GUIA-DE-USO.md](./docs/GUIA-DE-USO.md)

## Repo y deploy

- **Repo canónico:** https://github.com/ecolink2024/Landing_ecolink1
- **Producción:** https://landing-ecolink-gtr1.vercel.app

Pushear cambios de producción solo a este repositorio (`main`).

## Desarrollo rápido

```bash
npm install
cp .env.example .env.local   # completar variables (ver docs/DESARROLLO.md)
npm run dev
```

## Stack (resumen)

Next.js 14 · Supabase (noticias + imágenes) · Auth admin por cookie JWT · Google Sheets (leads) · Vercel
