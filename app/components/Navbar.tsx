'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { label: 'INICIO', href: '/' },
  { label: 'SOMOS', href: '/somos' },
  { label: 'CASAS', href: '/casas' },
  { label: 'EMPRESAS', href: '/empresas' },
  { label: 'NOVEDADES', href: '/novedades' },
  { label: 'CONTACTO', href: '/#contacto' },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-eco-beige/95 backdrop-blur-sm border-b border-eco-light-green/30 px-6 py-3 flex items-center justify-between">
      <Link href="/" className="text-eco-forest text-2xl font-black tracking-tighter">
        EcoLINK
      </Link>

      <nav className="hidden md:flex items-center gap-1">
        {links.map(({ label, href }) => {
          const isActive = href === '/' ? pathname === '/' : pathname.startsWith(href.split('#')[0]) && href !== '/';
          return (
            <Link
              key={href}
              href={href}
              className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest transition-colors ${
                isActive
                  ? 'bg-eco-green text-white'
                  : 'text-eco-forest hover:bg-eco-green/10'
              }`}
            >
              {label}
            </Link>
          );
        })}
      </nav>

      <Link
        href="/#contacto"
        className="bg-eco-pink text-white px-5 py-2 rounded-full font-bold text-xs uppercase tracking-wider shadow hover:scale-105 transition-transform"
      >
        ESCRIBINOS
      </Link>
    </header>
  );
}
