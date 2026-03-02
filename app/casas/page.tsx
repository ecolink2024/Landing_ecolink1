import Navbar from '@/app/components/Navbar';

const HERO_IMAGE =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDCnGg7u0LHfpsr5wKpfvJtOgTgiRv7eVOfIwCEVLAdFhphi0TenzHWRIZyQShkkHB9cNXuPx3Qx4I7UicwOOhMtp7bm_6QyRkD1CS0D2Xw8KAwCMNr5LTaLMFKdXkdPiJgRDH3Pz3zEotoZxXpkT8PV38e4SQVdF5fWiBWJKVDGY3psZGLAifhO5KuIWLqGKlEm4IHtZmCjyVPAdhjnzHw6OA-qqHFpiDJ5QEtN6QtLyOJveegq0CCypjRIE8H6O7zeOqIa23QjOue';

const services = [
  {
    icon: 'recycling',
    title: 'Recolección Programada',
    desc: 'Retiramos tus residuos reciclables directamente desde tu domicilio con frecuencia semanal.',
  },
  {
    icon: 'inventory_2',
    title: 'Kits de Reciclaje',
    desc: 'Te proveemos de los materiales necesarios para separar correctamente tus residuos en origen.',
  },
  {
    icon: 'eco',
    title: 'Impacto Medible',
    desc: 'Accedé a reportes de tu impacto ambiental y seguí la huella de tus residuos recuperados.',
  },
];

export default function CasasPage() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-eco-beige">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[60vh] w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(26,61,47,0.6), rgba(26,61,47,0.9)), url('${HERO_IMAGE}')`,
          }}
        />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
          <span className="mb-4 inline-block rounded-full bg-eco-pink/20 px-3 py-1 text-xs font-bold uppercase tracking-wider text-eco-pink">
            Para tu Hogar
          </span>
          <h2 className="max-w-2xl text-4xl font-black leading-tight text-white md:text-6xl">
            EcoLINK Casas
          </h2>
          <p className="mt-4 max-w-lg text-lg text-slate-200">
            Gestión de residuos inteligente para tu hogar y comunidad. Recolección programada y kits de reciclaje.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="#contact"
              className="rounded-xl bg-eco-pink px-8 py-3 font-bold text-white shadow-lg transition-transform active:scale-95"
            >
              Quiero reciclar
            </a>
            <a
              href="#servicios"
              className="rounded-xl border border-white/30 bg-white/10 px-8 py-3 font-bold text-white backdrop-blur-sm"
            >
              Ver servicios
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="servicios" className="bg-eco-forest py-16 px-6 text-white">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-bold uppercase tracking-widest mb-4 opacity-80">Servicios</p>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-12">
            Soluciones de reciclaje <br />
            <span className="font-black">para tu hogar</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map(({ icon, title, desc }) => (
              <div key={title} className="bg-white/10 rounded-2xl p-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-white/20">
                  <span className="material-symbols-outlined text-white text-3xl">{icon}</span>
                </div>
                <h3 className="text-xl font-bold mb-3">{title}</h3>
                <p className="text-slate-200 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Quote */}
      <section className="bg-white px-6 py-16 text-center">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-sm font-bold uppercase tracking-[0.2em]" style={{ color: '#ec5b13' }}>
            Nuestra Misión
          </h2>
          <p className="mt-6 text-2xl font-medium leading-relaxed text-slate-800">
            &ldquo;En EcoLINK, creemos que el futuro es circular. Nuestra tecnología conecta hogares y empresas con
            soluciones reales para reducir su huella ambiental,{' '}
            <span className="text-eco-green font-bold">construyendo una sociedad más sustentable</span> día a día.&rdquo;
          </p>
          <div className="mt-8 flex justify-center">
            <div className="h-1 w-20 rounded-full" style={{ background: 'rgba(236,91,19,0.3)' }}></div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-eco-beige py-20 px-6">
        <div className="container mx-auto grid md:grid-cols-2 gap-12 max-w-6xl">
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl font-extrabold text-gray-800 mb-6">¡Sumate vos también!</h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Hacé click para contactarnos, o dejanos tu consulta y te contactamos
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <form className="space-y-4" action="#" method="POST">
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase mb-1" htmlFor="nombre">Nombre</label>
                <input
                  id="nombre"
                  className="w-full border border-gray-200 rounded-md p-3 text-sm focus:outline-none focus:border-eco-pink"
                  placeholder="Escribe tu nombre aquí"
                  type="text"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase mb-1" htmlFor="email">Email</label>
                <input
                  id="email"
                  className="w-full border border-gray-200 rounded-md p-3 text-sm focus:outline-none focus:border-eco-pink"
                  placeholder="ejemplo@tumail.com"
                  type="email"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase mb-1" htmlFor="telefono">Teléfono</label>
                <input
                  id="telefono"
                  className="w-full border border-gray-200 rounded-md p-3 text-sm focus:outline-none focus:border-eco-pink"
                  placeholder="+549 XXX XXX XXXX"
                  type="tel"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase mb-1" htmlFor="consulta">Consulta</label>
                <textarea
                  id="consulta"
                  className="w-full border border-gray-200 rounded-md p-3 text-sm focus:outline-none focus:border-eco-pink"
                  placeholder="Escribe tu consulta aquí"
                  rows={4}
                ></textarea>
              </div>
              <button
                className="w-full bg-eco-pink text-white py-4 rounded-md font-extrabold uppercase tracking-[0.2em] text-xs hover:opacity-90 transition-opacity"
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
