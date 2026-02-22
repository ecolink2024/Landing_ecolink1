import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'EcoLink',
  description: 'Comunidad sustentable con noticias y acciones de impacto.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
