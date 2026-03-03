'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const links = [
  { label: 'EMPRESAS', href: '/empresas' },
  { label: 'CASAS', href: '/casas' },
  { label: 'SOMOS ECOLINK', href: '/somos' },
  { label: 'NOVEDADES', href: '/novedades' },
];

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === '/';

  return (
    <header className="sticky top-0 z-50 bg-eco-green px-6 py-3 flex items-center justify-between">
      <Link href="/" className="flex items-center">
        <Image
          src="/ecolink-logo.png"
          alt="EcoLINK"
          width={180}
          height={60}
          className="h-12 w-auto object-contain mix-blend-screen"
          priority
        />
      </Link>

      <nav className="hidden md:flex items-center bg-eco-green rounded-full px-4 py-2 gap-1">
        {links.map(({ label, href }) => {
          const isActive = href === '/' ? pathname === '/' : pathname.startsWith(href.split('#')[0]) && href !== '/';
          return (
            <Link
              key={href}
              href={href}
              className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest transition-colors ${
                isActive
                  ? 'bg-white/20 text-white'
                  : 'text-white/90 hover:text-white hover:bg-white/10'
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
