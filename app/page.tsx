import { supabase } from '@/lib/supabase';
import Navbar from '@/app/components/Navbar';

export const dynamic = 'force-dynamic';
export const revalidate = 0;
export const fetchCache = 'force-no-store';

const PAGE_SIZE = 20;

async function getNews() {
  try {
    const { data, error } = await supabase
      .from('news')
      .select('*')
      .eq('is_published', true)
      .order('created_at', { ascending: false })
      .limit(PAGE_SIZE);
    if (error) throw error;
    return data ?? [];
  } catch {
    return [];
  }
}

export default async function Home() {
  const news = await getNews();

  return (
    <div className="bg-eco-beige text-eco-text-dark">
      <Navbar />

      <main>
        {/* Hero - se extiende detrás del navbar para fondo transparente */}
        <section className="relative min-h-screen flex items-center justify-center text-center text-white overflow-hidden -mt-[73px] pt-[73px]">
          <div className="absolute inset-0 bg-black/40 z-10"></div>
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            src="/home-hero.mp4"
          />
          <div className="relative z-20 px-4 max-w-4xl">
            <h2 className="text-2xl md:text-4xl font-bold tracking-widest mb-12 md:mb-16">SOMOS ECOLINK</h2>
            <h1 className="text-xl md:text-3xl font-extrabold mb-6 leading-tight whitespace-nowrap">
              CONECTAMOS | RECUPERAMOS | TRANSFORMAMOS
            </h1>
            <p className="text-xl md:text-2xl font-light">
              Gestión ambiental de residuos reciclables y orgánicos en Córdoba.
            </p>
          </div>
        </section>

        {/* Impact Stats */}
        <section className="bg-eco-green py-20 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-eco-beige text-3xl md:text-4xl font-bold mb-12">Decisiones concientes, impacto real</h2>
            <div className="flex flex-col items-center gap-6">
              <div className="bg-eco-beige w-full max-w-md py-6 rounded-lg shadow-md">
                <div className="text-eco-green text-3xl font-extrabold">8 años</div>
                <div className="text-eco-forest text-xs uppercase tracking-widest font-bold">de trayectoria</div>
              </div>
              <div className="bg-eco-beige w-full max-w-md py-6 rounded-lg shadow-md">
                <div className="text-eco-green text-3xl font-extrabold">+2000 hogares</div>
                <div className="text-eco-forest text-xs uppercase tracking-widest font-bold">que nos eligen</div>
              </div>
              <div className="bg-eco-beige w-full max-w-md py-6 rounded-lg shadow-md">
                <div className="text-eco-green text-3xl font-extrabold">+150 empresas</div>
                <div className="text-eco-forest text-xs uppercase tracking-widest font-bold">confían en nosotros</div>
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="bg-eco-beige py-24 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-eco-green text-3xl font-extrabold mb-4">Trazamos decisiones</h2>
            <p className="text-eco-forest mb-16 max-w-2xl mx-auto leading-relaxed">
              Desde la separación en origen, hasta las cooperativas de reciclaje, acompañamos a Empresas, Hogares y Organizaciones en una Gestión Consciente de sus residuos.
            </p>
            <img
              alt="Proceso EcoLINK: Separación en origen, Trasladamos los materiales, Cooperativas de reciclaje"
              className="w-full max-w-3xl mx-auto object-contain rounded-lg shadow-[0px_4px_12px_0px_rgba(0,0,0,0.15)]"
              src="/proceso-ecolink.svg"
            />
          </div>
        </section>

        {/* Banner Mid */}
        <section className="relative h-80 flex items-center px-6 md:px-20 overflow-hidden">
          <img alt="Compostaje y residuos orgánicos" className="absolute inset-0 w-full h-full object-cover" src="/banner-organicos.png" />
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative z-10 w-full flex flex-col md:flex-row items-center justify-between gap-8 max-w-7xl mx-auto">
            <h2 className="text-white text-3xl md:text-5xl font-bold max-w-lg leading-tight">
              Cada acción cuenta cuando está bien gestionada
            </h2>
            <div className="bg-eco-beige/90 backdrop-blur p-8 rounded shadow-xl text-center min-w-[300px]">
              <div className="text-eco-green text-4xl font-extrabold">+50 mil litros</div>
              <div className="text-eco-forest text-xs uppercase tracking-widest font-bold mt-2">orgánicos recuperados</div>
            </div>
          </div>
        </section>

        {/* Business Section */}
        <section className="bg-eco-beige py-24 px-6">
          <div className="max-w-5xl mx-auto text-center mb-16">
            <h2 className="text-eco-forest text-3xl md:text-4xl font-bold leading-none">
              Con EcoLink hacés <span className="text-eco-green italic">mucho más</span> que reciclar
            </h2>
            <p className="text-eco-forest/70 text-base md:text-lg font-medium leading-none mt-4">
              ¡Elegí la forma que mejor se adapte a vos para sumarte al cambio!
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 text-center md:text-left">
              <h3 className="text-eco-forest text-3xl md:text-4xl font-extrabold mb-6">
                SI SOS <span className="text-eco-green italic">EMPRESA</span>
              </h3>
              <p className="text-eco-forest/80 text-base leading-relaxed max-w-md mx-auto md:mx-0 mb-8">
                Empresas, organizaciones y grandes generadores, de cualquier rubro, interesados en iniciar y fortalecer una gestión sustentable de los residuos que generan.
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <a href="/empresas" className="bg-eco-forest text-white px-8 py-3 rounded-full font-extrabold text-sm uppercase leading-none hover:bg-black transition-colors">SABER MÁS</a>
                <a href="https://wa.me/5493518097375" target="_blank" rel="noopener noreferrer" className="bg-eco-green text-white px-8 py-3 rounded-full font-extrabold text-sm uppercase leading-none hover:opacity-90 transition-opacity">WHATSAPP</a>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <img
                alt="EcoLINK Boxes"
                className="rounded-lg shadow-2xl w-full object-cover h-[450px] md:h-[500px]"
                src="/sosEmpresaPrincipal.jpg"
              />
            </div>
          </div>
        </section>

        {/* News Section */}
        <section className="bg-eco-green py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-eco-beige text-3xl md:text-4xl font-bold mb-12 text-center md:text-left">
              Cuando nos movemos, pasan cosas
            </h2>

            {news.length > 0 ? (
              <div className="overflow-x-auto pb-4 -mx-6 px-6 scrollbar-thin">
                <div className="flex gap-8" style={{ minWidth: news.length > 3 ? `${news.length * 340}px` : undefined }}>
                  {news.map((item) => (
                    <div key={item.id} className="bg-eco-light-green/20 rounded-lg overflow-hidden flex flex-col flex-shrink-0 w-[300px] md:w-[380px]">
                      <img alt={item.title} className="w-full h-64 object-cover" src={item.image_url} />
                      <div className="p-6 flex-grow">
                        <h3 className="text-eco-beige font-bold mb-2">{item.title}</h3>
                        <p className="text-eco-beige/80 text-sm line-clamp-3">{item.content}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-eco-beige/60 text-lg">Próximamente novedades...</p>
              </div>
            )}

          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-eco-forest py-24 px-6 text-center text-eco-beige">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              El futuro se construye con las decisiones que tomamos <span className="italic font-extrabold text-white">HOY</span>
            </h2>
          </div>
        </section>

        {/* Contact Form */}
        <section className="bg-eco-beige py-24 px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">
            <div>
              <h2 className="text-eco-forest text-4xl font-extrabold mb-6 leading-tight">
                Sé parte del cambio vos también. ¿Empezamos?
              </h2>
              <p className="text-eco-forest text-lg font-medium">Déjanos tu consulta y ayudanos.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <form className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase mb-1">Nombre</label>
                  <input className="w-full border border-gray-200 rounded-md px-3 py-2 focus:outline-none focus:border-eco-green" placeholder="Tu nombre completo" type="text" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase mb-1">E-mail</label>
                  <input className="w-full border border-gray-200 rounded-md px-3 py-2 focus:outline-none focus:border-eco-green" placeholder="ejemplo@correo.com" type="email" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase mb-1">Teléfono</label>
                  <input className="w-full border border-gray-200 rounded-md px-3 py-2 focus:outline-none focus:border-eco-green" placeholder="+54 351 000 0000" type="tel" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase mb-1">Consulta</label>
                  <textarea className="w-full border border-gray-200 rounded-md px-3 py-2 focus:outline-none focus:border-eco-green" placeholder="¿En qué podemos ayudarte?" rows={4}></textarea>
                </div>
                <button className="w-full bg-eco-pink text-white font-bold py-4 rounded-md hover:bg-opacity-90 transition-all uppercase tracking-widest text-sm" type="submit">
                  Enviar
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-eco-forest text-eco-beige py-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center gap-8">
          <img
            src="/ecolink-logo.png"
            alt="EcoLINK"
            className="h-16 w-auto object-contain"
          />

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

          <a href="mailto:somos@ecolink.com.ar" className="text-eco-beige/70 font-normal leading-none text-sm hover:text-eco-beige transition-colors">
            somos@ecolink.com.ar
          </a>

          <p className="text-eco-beige/50 font-normal leading-none text-xs">
            © 2020 EcoLink® | Todos los Derechos Reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
