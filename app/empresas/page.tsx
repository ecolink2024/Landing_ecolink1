import Navbar from '@/app/components/Navbar';

export default function EmpresasPage() {
  const logos = Array.from({ length: 20 });
  const logoRows = 5;

  return (
    <div className="bg-white text-gray-800 antialiased">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[560px] flex items-end overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            src="/empresas-hero.mp4"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
        </div>
        <div className="container mx-auto px-6 pb-12 relative z-10">
          <p className="text-white/80 text-xs font-bold uppercase tracking-[0.2em] mb-2">Empresas</p>
          <h1 className="text-white text-3xl md:text-5xl font-extrabold leading-tight max-w-2xl mb-4">
            Locales comerciales, PyMes, instituciones
          </h1>
          <p className="text-white/90 text-sm md:text-lg max-w-2xl font-light leading-relaxed">
            Nuestros servicios están pensados para quienes quieran iniciar un camino de impacto ambiental consciente. O bien, fortalecerse y sumar impacto real.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-eco-green py-4 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-[1fr_1.2fr] gap-8 items-center">
          <div className="py-10">
            <p className="text-sm font-bold uppercase tracking-widest mb-4 text-white/70">Servicios</p>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-8">
              <span className="text-eco-forest">Trazamos soluciones de</span> <br />
              <span className="text-white font-black">Gestión Consciente</span> <span className="text-eco-forest">con</span> <br />
              <span className="text-eco-forest">impacto real</span>
            </h2>
            <a
              className="inline-block bg-eco-pink text-white px-8 py-3 rounded-full text-xs font-extrabold uppercase tracking-widest shadow-lg hover:scale-105 transition-transform"
              href="https://wa.me/5493518097375"
              target="_blank"
              rel="noopener noreferrer"
            >
              Sumá a tu empresa
            </a>
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img
              alt="Workshop team"
              className="w-full object-cover aspect-[10/11]"
              src="/BusinessTalking.png"
            />
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 bg-white py-4 px-6 rounded-lg shadow-xl text-center">
              <p className="text-eco-green font-bold text-lg">
                Capacitaciones y Talleres
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto text-center max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-2">
            Recuperar y Transformar los Residuos
          </h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-eco-green mb-10">
            empieza con una decisión
          </h3>
          <p className="text-gray-500 font-semibold text-lg mb-12">Estas empresas ya se sumaron</p>
          <div className="partners-marquee">
            {Array.from({ length: logoRows }).map((_, rowIndex) => (
              <div key={rowIndex} className="partners-marquee-row">
                <div className="partners-marquee-inner">
                  {logos.map((_, i) => (
                    <img
                      key={`row-${rowIndex}-a-${i}`}
                      alt="Partner Logo"
                      className="mx-auto h-10 w-auto object-contain opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all"
                      src="/ecolink-logo.png"
                    />
                  ))}
                  {logos.map((_, i) => (
                    <img
                      key={`row-${rowIndex}-b-${i}`}
                      alt="Partner Logo"
                      className="mx-auto h-10 w-auto object-contain opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all"
                      src="/ecolink-logo.png"
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-eco-beige py-20 px-6" id="contact">
        <div className="container mx-auto grid md:grid-cols-2 gap-12 max-w-6xl">
          {/* CTA Text */}
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl font-extrabold text-gray-800 mb-6">¡Sumate vos también!</h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Hacé click para contactarnos, o dejanos tu consulta y te contactamos
            </p>
            <div>
              <a
                className="inline-block bg-eco-pink text-white px-8 py-3 rounded-full font-extrabold uppercase tracking-widest text-xs leading-none hover:opacity-90 transition-opacity"
                href="https://wa.me/5493518097375"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sumá a tu empresa
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <form className="space-y-4" action="#" method="POST">
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase mb-1" htmlFor="nombre">
                  Nombre
                </label>
                <input
                  id="nombre"
                  className="w-full border border-gray-200 rounded-md p-3 text-sm focus:outline-none focus:border-eco-pink"
                  placeholder="Escribe tu nombre aquí"
                  type="text"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase mb-1" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  className="w-full border border-gray-200 rounded-md p-3 text-sm focus:outline-none focus:border-eco-pink"
                  placeholder="ejemplo@tumail.com"
                  type="email"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase mb-1" htmlFor="telefono">
                  Teléfono
                </label>
                <input
                  id="telefono"
                  className="w-full border border-gray-200 rounded-md p-3 text-sm focus:outline-none focus:border-eco-pink"
                  placeholder="+549 XXX XXX XXXX"
                  type="tel"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase mb-1" htmlFor="consulta">
                  Consulta
                </label>
                <textarea
                  id="consulta"
                  className="w-full border border-gray-200 rounded-md p-3 text-sm focus:outline-none focus:border-eco-pink"
                  placeholder="Escribe tu consulta aquí"
                  rows={4}
                ></textarea>
              </div>
              <button
                className="w-full bg-eco-pink text-white py-4 rounded-full font-extrabold uppercase tracking-widest text-xs leading-none hover:opacity-90 transition-opacity"
                type="submit"
              >
                Enviar
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-eco-forest text-eco-beige py-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center gap-8">
          <img src="/ecolink-logo.png" alt="EcoLINK" className="h-16 w-auto object-contain" />
          <div className="flex gap-5 items-center">
            <a href="https://www.instagram.com/ecolinkcba/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 flex items-center justify-center rounded-full border border-eco-beige/30 hover:bg-eco-beige/10 transition-colors" aria-label="Instagram">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.805.249 2.227.412.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.013 3.584-.07 4.85c-.054 1.17-.249 1.805-.413 2.227-.217.562-.477.96-.896 1.382-.42.419-.819.679-1.381.896-.422.164-1.057.36-2.227.413-1.266.057-1.646.07-4.85.07s-3.584-.013-4.85-.07c-1.17-.054-1.805-.249-2.227-.412-.562-.217-.96-.477-1.382-.896-.419-.42-.679-.819-.896-1.381-.164-.422-.36-1.057-.413-2.227-.057-1.266-.07-1.646-.07-4.85s.013-3.584.07-4.85c.054-1.17.249-1.805.413-2.227.217-.562.477-.96.896-1.382.42-.419.819-.679 1.381-.896.422-.164 1.057-.36 2.227-.413 1.266-.057 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-1.277.057-2.15.26-2.914.557-.79.307-1.459.718-2.125 1.384-.666.666-1.077 1.335-1.384 2.125-.297.764-.5 1.637-.557 2.914-.058 1.28-.072 1.688-.072 4.947s.014 3.667.072 4.947c.057 1.277.26 2.15.557 2.914.307.79.718 1.459 1.384 2.125.666.666 1.335 1.077 2.125 1.384.764.297 1.637.5 2.914.557 1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c1.277-.057 2.15-.26 2.914-.557.79-.307 1.459-.718 2.125-1.384.666-.666 1.077-1.335 1.384-2.125.297-.764.5-1.637.557-2.914.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.057-1.277-.26-2.15-.557-2.914-.307-.79-.718-1.459-1.384-2.125-.666-.666-1.335-1.077-2.125-1.384-.764-.297-1.637-.5-2.914-.557-1.28-.058-1.688-.072-4.947-.072z"/><path d="M12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.209-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
            <a href="https://wa.me/5493518097375" target="_blank" rel="noopener noreferrer" className="w-9 h-9 flex items-center justify-center rounded-full border border-eco-beige/30 hover:bg-eco-beige/10 transition-colors" aria-label="WhatsApp">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            </a>
            <a href="https://www.linkedin.com/company/ecolinkcba/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 flex items-center justify-center rounded-full border border-eco-beige/30 hover:bg-eco-beige/10 transition-colors" aria-label="LinkedIn">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
          </div>
          <a href="mailto:somos@ecolink.com.ar" className="text-eco-beige/70 font-normal leading-none text-sm hover:text-eco-beige transition-colors">somos@ecolink.com.ar</a>
          <p className="text-eco-beige/50 font-normal leading-none text-xs">© 2020 EcoLink® | Todos los Derechos Reservados.</p>
        </div>
      </footer>
    </div>
  );
}
