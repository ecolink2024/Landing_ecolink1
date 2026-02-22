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
      {/* Header */}
      <header className="sticky top-0 z-50 flex items-center justify-between bg-white/80 px-4 py-3 backdrop-blur-md border-b border-slate-200">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-3xl" style={{ color: '#ec5b13' }}>eco</span>
          <h1 className="text-xl font-extrabold tracking-tight text-eco-forest">EcoLINK</h1>
        </div>
        <nav className="hidden md:flex gap-6 text-xs font-semibold uppercase tracking-widest text-eco-forest">
          <a className="hover:underline" href="/">Inicio</a>
          <a className="hover:underline font-bold underline" href="/casas">Casas</a>
          <a className="hover:underline" href="/empresas">Empresas</a>
          <a className="hover:underline" href="/somos">Somos EcoLINK</a>
        </nav>
        <button className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100">
          <span className="material-symbols-outlined text-slate-600">person</span>
        </button>
      </header>

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
      <footer className="bg-eco-forest text-white pt-12 pb-24 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
            <div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-3xl" style={{ color: '#ec5b13' }}>eco</span>
                <h4 className="text-xl font-extrabold tracking-tight">EcoLINK</h4>
              </div>
              <p className="mt-4 text-slate-400">
                Soluciones integrales de reciclaje y gestión de residuos para el siglo XXI.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold">Contacto</h4>
              <ul className="mt-4 space-y-2 text-slate-400">
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">mail</span> somos@ecolink.com.ar
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">call</span> +54 11 1234-5678
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">location_on</span> Córdoba, Argentina
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold">Síguenos</h4>
              <div className="mt-4 flex gap-4">
                <a className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-700 text-slate-300 hover:bg-slate-600" href="#">
                  <span className="material-symbols-outlined">share</span>
                </a>
                <a className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-700 text-slate-300 hover:bg-slate-600" href="#">
                  <span className="material-symbols-outlined">thumb_up</span>
                </a>
                <a className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-700 text-slate-300 hover:bg-slate-600" href="#">
                  <span className="material-symbols-outlined">camera</span>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-12 border-t border-slate-700 pt-8 text-center text-sm text-slate-400">
            © 2024 EcoLINK. Todos los derechos reservados.
          </div>
        </div>
      </footer>

      {/* Fixed Bottom Nav */}
      <nav className="fixed bottom-0 left-0 right-0 z-[60] flex border-t border-slate-200 bg-white/95 px-4 pb-2 pt-2 backdrop-blur-md">
        <a className="flex flex-1 flex-col items-center justify-center gap-1 text-slate-400" href="/">
          <span className="material-symbols-outlined">home</span>
          <p className="text-[10px] font-bold uppercase tracking-wider">Inicio</p>
        </a>
        <a className="flex flex-1 flex-col items-center justify-center gap-1" style={{ color: '#ec5b13' }} href="/casas">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>potted_plant</span>
          <p className="text-[10px] font-bold uppercase tracking-wider">Casas</p>
        </a>
        <a className="flex flex-1 flex-col items-center justify-center gap-1 text-slate-400" href="/empresas">
          <span className="material-symbols-outlined">corporate_fare</span>
          <p className="text-[10px] font-bold uppercase tracking-wider">Empresas</p>
        </a>
        <a className="flex flex-1 flex-col items-center justify-center gap-1 text-slate-400" href="/somos">
          <span className="material-symbols-outlined">info</span>
          <p className="text-[10px] font-bold uppercase tracking-wider">Somos</p>
        </a>
      </nav>
    </div>
  );
}
