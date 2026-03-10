"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useId, useMemo, useRef, useState } from "react";

const links = [
  { label: "EMPRESAS", href: "/empresas" },
  { label: "CASAS", href: "/casas" },
  { label: "SOMOS ECOLINK", href: "/somos" },
  { label: "NOVEDADES", href: "/novedades" },
];

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [mobileOpen, setMobileOpen] = useState(false);
  const mobileMenuId = useId();
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

  const contactHref = useMemo(() => "/#contacto", []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!mobileOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);

    // Mover el foco al primer control del menú
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [mobileOpen]);

  return (
    <header
      className={`${isHome ? "fixed" : "sticky"} top-0 z-50 w-full min-h-[73px] flex ${
        isHome ? "bg-transparent" : "bg-eco-green"
      }`}
    >
      {/* Desktop layout */}
      <div className={`hidden md:flex mx-auto w-full max-w-7xl items-center justify-between px-6 ${isHome ? "py-2" : "py-3"}`}>
        {/* Logo izquierda */}
        <Link href="/" className="flex items-center">
          <Image
            src="/ecolink-logo.png"
            alt="EcoLINK"
            width={180}
            height={60}
            className={`h-14 w-auto object-contain ${isHome ? "mix-blend-screen" : ""}`}
            priority
          />
        </Link>

        {/* Links centro */}
        <nav className="flex items-center justify-center flex-1">
          <div className="bg-eco-green rounded-full px-4 py-2 flex items-center gap-1">
            {links.map(({ label, href }) => {
              const isActive =
                href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(href.split("#")[0]) && href !== "/";
              return (
                <Link
                  key={href}
                  href={href}
                  className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest transition-colors ${
                    isActive
                      ? "bg-white/20 text-white"
                      : "text-white/90 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {label}
                </Link>
              );
            })}
          </div>
        </nav>

        {/* Botón derecha */}
        <Link
          href={contactHref}
          className="ml-6 bg-eco-pink text-white px-5 py-2 rounded-full font-bold text-xs uppercase tracking-wider shadow hover:scale-105 transition-transform whitespace-nowrap"
        >
          ESCRIBINOS
        </Link>
      </div>

      {/* Mobile layout */}
      <div className={`flex md:hidden mx-auto w-full max-w-7xl items-center justify-between px-4 ${isHome ? "py-2" : "py-3"}`}>
        <Link href="/" className="flex items-center">
          <Image
            src="/ecolink-logo.png"
            alt="EcoLINK"
            width={160}
            height={52}
            className={`h-10 w-auto object-contain ${isHome ? "mix-blend-screen" : ""}`}
            priority
          />
        </Link>

        <button
          type="button"
          className={`inline-flex items-center justify-center rounded-full px-3 py-3 ${
            isHome
              ? "bg-black/30 text-white backdrop-blur"
              : "bg-white/10 text-white"
          }`}
          aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={mobileOpen}
          aria-controls={mobileMenuId}
          onClick={() => setMobileOpen((v) => !v)}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <path
              d={
                mobileOpen ? "M6 6l12 12M18 6L6 18" : "M4 7h16M4 12h16M4 17h16"
              }
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <button
            type="button"
            className="absolute inset-0 bg-black/50"
            aria-label="Cerrar menú"
            onClick={() => setMobileOpen(false)}
          />

          <div
            id={mobileMenuId}
            className="absolute right-0 top-0 h-full w-[85%] max-w-sm bg-eco-green text-white shadow-2xl flex flex-col"
            role="dialog"
            aria-modal="true"
          >
            <div className="min-h-[73px] px-4 flex items-center justify-between border-b border-white/10">
              <span className="text-xs font-bold uppercase tracking-widest text-white/80">
                Menú
              </span>
              <button
                ref={closeButtonRef}
                type="button"
                className="inline-flex items-center justify-center rounded-full px-3 py-3 bg-white/10"
                aria-label="Cerrar menú"
                onClick={() => setMobileOpen(false)}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M6 6l12 12M18 6L6 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>

            <nav className="px-4 py-6 flex flex-col gap-2">
              {links.map(({ label, href }) => {
                const isActive =
                  href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(href.split("#")[0]) && href !== "/";
                return (
                  <Link
                    key={href}
                    href={href}
                    className={`rounded-lg px-4 py-3 text-sm font-extrabold uppercase tracking-widest transition-colors ${
                      isActive
                        ? "bg-white/15 text-white"
                        : "text-white/90 hover:bg-white/10 hover:text-white"
                    }`}
                    onClick={() => setMobileOpen(false)}
                  >
                    {label}
                  </Link>
                );
              })}
            </nav>

            <div className="mt-auto px-4 pb-6">
              <Link
                href={contactHref}
                className="block w-full text-center bg-eco-pink text-white py-4 rounded-xl font-bold text-sm uppercase tracking-widest shadow hover:bg-opacity-90 transition-all"
                onClick={() => setMobileOpen(false)}
              >
                Escribinos
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
