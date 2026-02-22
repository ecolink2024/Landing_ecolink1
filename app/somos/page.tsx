import Navbar from '@/app/components/Navbar';

const HERO_IMAGE =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuAKtby8UOWpYK5VHiYAECFWQNGqBJJVT0iPk0NM1t-l9V4tCvdpSXMjOfW7BG-oUvE81QYItnD9FvLxwMPwzsJjZbtv8adPgZryFcSlE-Tjg1Qo3PC7bLblzGuyxh1-bPIxQ1bZqfBnX3_TczQc_eepPiQLgrBjhvTwNO2ssOUaAV8vRnaKQVe3BQ1hyJUqVAZePBU2P69nsqHOGsa10Au5K0rZW3AwV1ilSR2nSR2yedDhpxcy_T0cNTqiBdrjJIYn7o-tWYX0CROl';

const CASAS_IMAGE =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDCnGg7u0LHfpsr5wKpfvJtOgTgiRv7eVOfIwCEVLAdFhphi0TenzHWRIZyQShkkHB9cNXuPx3Qx4I7UicwOOhMtp7bm_6QyRkD1CS0D2Xw8KAwCMNr5LTaLMFKdXkdPiJgRDH3Pz3zEotoZxXpkT8PV38e4SQVdF5fWiBWJKVDGY3psZGLAifhO5KuIWLqGKlEm4IHtZmCjyVPAdhjnzHw6OA-qqHFpiDJ5QEtN6QtLyOJveegq0CCypjRIE8H6O7zeOqIa23QjOue';

const EMPRESAS_IMAGE =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDZVQb0ANqhHHA0DW1s5UCqr8OAABvneIHEmF7W-TIRzVs8s_IDHt08fHLJhFf1q17ZzPDf7fQUHoEy_gJpqlhVzuKEGhRuNoEjvA__fQSqUfTl7hKi7JZRORYES6iR9j6cxCVs55p2m9Mkp7Iz7W_WGp_ga0g3Gu6nbmsf905dg9jj9kkk9bBWSh2m1_rRj2SnpLlAXwCtb7xNib9ESOa3fbjyisfwf7VMM6ne2g-bFz9A2F0KN8FGJ3Ka5paBevZGaRjpRj3nm9ZS';

const stats = [
  { value: '+500k', label: 'Kilos recuperados' },
  { value: '120', label: 'Empresas aliadas' },
  { value: '12k', label: 'Hogares activos' },
  { value: '15', label: 'Puntos de acopio' },
];

export default function SomosPage() {
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
          <span
            className="mb-4 inline-block rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider"
            style={{ background: 'rgba(236,91,19,0.2)', color: '#ec5b13' }}
          >
            Impacto Sustentable
          </span>
          <h2 className="max-w-2xl text-4xl font-black leading-tight text-white md:text-6xl">
            Transformamos residuos en recursos
          </h2>
          <p className="mt-4 max-w-lg text-lg text-slate-200">
            Construyendo una sociedad más sustentable a través de la economía circular.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="#servicios"
              className="rounded-xl px-8 py-3 font-bold text-white shadow-lg transition-transform active:scale-95"
              style={{ background: '#ec5b13' }}
            >
              Ver impacto
            </a>
            <a
              href="#mision"
              className="rounded-xl border border-white/30 bg-white/10 px-8 py-3 font-bold text-white backdrop-blur-sm"
            >
              Nuestra misión
            </a>
          </div>
        </div>
      </section>

      {/* Portal Cards: Casas + Empresas */}
      <section id="servicios" className="grid w-full grid-cols-1 gap-4 p-4 md:grid-cols-2 md:p-8">
        {/* Casas Card */}
        <div className="group relative flex min-h-[400px] flex-col overflow-hidden rounded-2xl shadow-xl bg-eco-forest">
          <div
            className="absolute inset-0 transition-transform duration-500 group-hover:scale-110 bg-cover bg-center"
            style={{
              backgroundImage: `linear-gradient(rgba(26,61,47,0.4), rgba(26,61,47,0.8)), url('${CASAS_IMAGE}')`,
            }}
          />
          <div className="relative z-10 mt-auto p-8">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-white/20 backdrop-blur-md">
              <span className="material-symbols-outlined text-white text-3xl">home</span>
            </div>
            <h3 className="text-3xl font-bold text-white">EcoLINK Casas</h3>
            <p className="mt-2 text-slate-200">
              Gestión de residuos inteligente para tu hogar y comunidad. Recolección programada y kits de reciclaje.
            </p>
            <a
              href="/casas"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-eco-pink px-6 py-3 font-bold text-white transition-all hover:gap-4"
            >
              Quiero reciclar <span className="material-symbols-outlined">arrow_forward</span>
            </a>
          </div>
        </div>

        {/* Empresas Card */}
        <div className="group relative flex min-h-[400px] flex-col overflow-hidden rounded-2xl shadow-xl bg-eco-green">
          <div
            className="absolute inset-0 transition-transform duration-500 group-hover:scale-110 bg-cover bg-center"
            style={{
              backgroundImage: `linear-gradient(rgba(61,122,77,0.4), rgba(61,122,77,0.8)), url('${EMPRESAS_IMAGE}')`,
            }}
          />
          <div className="relative z-10 mt-auto p-8">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-white/20 backdrop-blur-md">
              <span className="material-symbols-outlined text-white text-3xl">business</span>
            </div>
            <h3 className="text-3xl font-bold text-white">EcoLINK Empresas</h3>
            <p className="mt-2 text-slate-200">
              Logística inversa, reportes de sostenibilidad y cumplimiento normativo para tu organización.
            </p>
            <a
              href="/empresas"
              className="mt-6 inline-flex items-center gap-2 rounded-xl px-6 py-3 font-bold text-white transition-all hover:gap-4"
              style={{ background: '#ec5b13' }}
            >
              Servicio Corporativo <span className="material-symbols-outlined">arrow_forward</span>
            </a>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section id="mision" className="bg-white px-6 py-16 text-center">
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

      {/* Impact Stats */}
      <section className="bg-eco-forest py-16 text-white">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map(({ value, label }) => (
              <div key={label} className="text-center">
                <div className="mb-2 text-4xl font-black md:text-5xl" style={{ color: '#ec5b13' }}>{value}</div>
                <p className="text-sm font-medium uppercase tracking-wider text-slate-300">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-eco-beige border-t border-slate-200 pt-12 pb-24 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
            <div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-3xl" style={{ color: '#ec5b13' }}>eco</span>
                <h4 className="text-xl font-extrabold tracking-tight text-eco-forest">EcoLINK</h4>
              </div>
              <p className="mt-4 text-slate-500">
                Soluciones integrales de reciclaje y gestión de residuos para el siglo XXI.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold text-eco-forest">Contacto</h4>
              <ul className="mt-4 space-y-2 text-slate-600">
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
              <h4 className="text-lg font-bold text-eco-forest">Síguenos</h4>
              <div className="mt-4 flex gap-4">
                <a className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-200 text-slate-600 hover:bg-slate-300" href="#">
                  <span className="material-symbols-outlined">share</span>
                </a>
                <a className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-200 text-slate-600 hover:bg-slate-300" href="#">
                  <span className="material-symbols-outlined">thumb_up</span>
                </a>
                <a className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-200 text-slate-600 hover:bg-slate-300" href="#">
                  <span className="material-symbols-outlined">camera</span>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-12 border-t border-slate-200 pt-8 text-center text-sm text-slate-400">
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
        <a className="flex flex-1 flex-col items-center justify-center gap-1 text-slate-400" href="/casas">
          <span className="material-symbols-outlined">potted_plant</span>
          <p className="text-[10px] font-bold uppercase tracking-wider">Casas</p>
        </a>
        <a className="flex flex-1 flex-col items-center justify-center gap-1 text-slate-400" href="/empresas">
          <span className="material-symbols-outlined">corporate_fare</span>
          <p className="text-[10px] font-bold uppercase tracking-wider">Empresas</p>
        </a>
        <a className="flex flex-1 flex-col items-center justify-center gap-1" style={{ color: '#ec5b13' }} href="/somos">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>info</span>
          <p className="text-[10px] font-bold uppercase tracking-wider">Somos</p>
        </a>
      </nav>
    </div>
  );
}
