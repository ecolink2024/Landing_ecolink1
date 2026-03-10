import './globals.css';
import type { Metadata } from 'next';
import { WhatsAppWidget } from '@/app/components/WhatsAppWidget';

export const metadata: Metadata = {
  title: 'EcoLink',
  description: 'Comunidad sustentable con noticias y acciones de impacto.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
      </head>
      <body>
        {children}
        <WhatsAppWidget />
      </body>
    </html>
  );
}
