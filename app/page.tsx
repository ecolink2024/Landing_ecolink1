import { prisma } from '@/lib/prisma';

export const dynamic = 'force-dynamic';

const PAGE_SIZE = 3;

async function getNews() {
  const items = await prisma.news.findMany({
    where: { isPublished: true },
    orderBy: { createdAt: 'desc' },
    take: PAGE_SIZE,
  });
  return items;
}

export default async function Home() {
  const news = await getNews();

  return (
    <body className="bg-eco-beige text-eco-text-dark">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-50 bg-transparent px-6 py-4 flex items-center justify-between">
        <div className="text-white text-2xl font-bold tracking-tighter">EcoLINK</div>
        <nav className="hidden md:flex bg-eco-green/80 backdrop-blur-sm rounded-full px-8 py-2 gap-6 text-white text-sm font-medium">
          <a className="hover:underline" href="#">INICIO</a>
          <a className="hover:underline" href="#">NOSOTROS</a>
          <a className="hover:underline" href="/empresas">EMPRESAS</a>
          <a className="hover:underline" href="#">SERVICIOS</a>
          <a className="hover:underline" href="#">RECURSOS</a>
          <a className="hover:underline" href="#">NOVEDADES</a>
          <a className="hover:underline" href="#">CONTACTO</a>
        </nav>
        <button className="bg-eco-pink text-white px-6 py-2 rounded-full font-bold text-sm shadow-lg hover:scale-105 transition-transform">
          INGRESAR
        </button>
      </header>

      <main>
        {/* Hero */}
        <section className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden">
          <div className="absolute inset-0 bg-black/40 z-10"></div>
          <img
            alt="Hero Background"
            className="absolute inset-0 w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBl3-93XEqxHS69FIRLrE2vF-QXUuZv_u5UW3jL9-snEIifo4k_6f7Q0NUncgCzw7EhjdsQY2KIkltLlY_XPk4qB9aLKhYW4ZBL1q32OfV3k5goUeErPvY5EqwVNDvepcyDYL2-Z6Jcrowb4Qm4oKTb1X4QGirkI1RWG0SK9EC01Tiq8GLsVbJUInY8X1qyrG_GB-ksXf7BBvO6XBFOOT-ryHYFxx6Cz_1UfC-X5Gd7BSFuUqPGmM_jCccKNPMjODwB1AAb_Dx4bXfw"
          />
          <div className="relative z-20 px-4 max-w-4xl">
            <h2 className="text-lg font-bold tracking-widest mb-4">SOMOS ECOLINK</h2>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
              <div className="flex flex-col items-center">
                <div className="w-32 h-32 mb-6 flex items-center justify-center">
                  <img alt="Icon Separation" className="object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZhlDI0Jeyoumx8KeRefpFB02edYXN7IGJtCCl-2PPDxwTiWSbJpUobOR0xTgGHsNeWfbfzpD1GpTfZONA_ujoolQvhyMk0PwxZPzZvXEd7xtaWG8c1z_wvAsGNJX7jclM6YVQ54Ksr6jrOAhSw9WoTsB0XBfjA_-0Eibz0R0GOogaVjEzQDLMMigIGdERjMwOkTf8MafXzBnRTu1f8dOZ4hfzVEbnapagpmzqi782W55jbXilN_1S2C8nsLvOHkieKvi9rId-6" />
                </div>
                <h3 className="text-eco-green font-bold text-sm uppercase tracking-tighter">Separación<br />en origen</h3>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-32 h-32 mb-6 flex items-center justify-center">
                  <img alt="Icon Transport" className="object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCrsIBAeo3iuP37YjqrCssqIBToUfeR9BsgY2GJ8uDXRODdQq-R28vp53KK6oc-kVZU2CFrulgb8UP1U-3JU88CGfMlb1L4xIhKMa7WjSjfQxPvr1gap4TgF-SvTx4dtdTsM-Sym2Da4M_kobfTCmJNi5yOHlDb2afEhYZxS8UODwMxUoF3fBNqU7hMh69R4dyoCtquofAJXTlpgNSFA9_D2PznPFtuY9tRM0-01hdTuGmV0npULj9zO9x3vfL3LbsFJY_ok9QXpnoq" />
                </div>
                <h3 className="text-eco-green font-bold text-sm uppercase tracking-tighter">Transporte de<br />materiales</h3>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-32 h-32 mb-6 flex items-center justify-center">
                  <img alt="Icon Plant" className="object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCiCzWK_9eb4B62aQqpE0mbg8BF4g0qOUdQi8_u4Jy4pBzs6j9PUa2TzlFqBNw6AmB3VtbQ5zkkB-7qONt77MObitozp1M8_XQezpWu5r__bfj7LcN7-giYU8amoW83dWm8vNZCBooTp3qSpeTSRbnXRZBf9wJT83DMoZXuyezD0zg2K6PK9eUc507fKERGFhFuxUmL9s6bOYGAlYNFOuOhggbsj_Zjy3wAxTonqombuu2HtnWqBOe22maIMP63sX6DENInWtlTcM2" />
                </div>
                <h3 className="text-eco-green font-bold text-sm uppercase tracking-tighter">Cooperativas y<br />Plantas de Gestión</h3>
              </div>
            </div>
          </div>
        </section>

        {/* Banner Mid */}
        <section className="relative h-80 flex items-center px-6 md:px-20 overflow-hidden">
          <img alt="Waste Background" className="absolute inset-0 w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDdN3WFeXgteAoonNjsFC5FwpEyCi6ZywRfENlVeItxsr4_OZHkMsSMPmu9kcYxLRiYo4pLih8UJjZiA8yZn4ZlndNLle21xVFL8VDnlZmqLGZ3ddD_CNfC2bG_BbCQ5XLYDOH0fiUmp0w8symjXAV-YXHapZWXtULlFSLdHwIu-2Bfrkp6SgXS2qEmhmnTxFAkghdQucWL82jneIyQDNShvB6DThfahvuVImN9aRsP_5odWvwVq6C4uR5HXoVkt2qbdao8cshNPPDq" />
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative z-10 w-full flex flex-col md:flex-row items-center justify-between gap-8 max-w-7xl mx-auto">
            <h2 className="text-white text-3xl md:text-5xl font-bold max-w-lg leading-tight">
              Cada acción cuenta cuando está bien gestionada
            </h2>
            <div className="bg-eco-beige/90 backdrop-blur p-8 rounded shadow-xl text-center min-w-[300px]">
              <div className="text-eco-green text-4xl font-extrabold">+50 mil litros</div>
              <div className="text-eco-forest text-xs uppercase tracking-widest font-bold mt-2">de aceite recuperado</div>
            </div>
          </div>
        </section>

        {/* Business Section */}
        <section className="bg-eco-beige py-24 px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-eco-forest text-4xl font-bold mb-6">
                SI SOS <span className="text-eco-green italic">EMPRESA</span>
              </h2>
              <p className="text-eco-forest text-lg mb-8 leading-relaxed max-w-md">
                Ofrecemos servicios integrales de gestión de residuos para empresas que buscan un impacto real y cumplimiento normativo.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-eco-forest text-white px-8 py-3 rounded-full font-bold hover:bg-black transition-colors">VER MÁS</button>
                <button className="bg-eco-green text-white px-8 py-3 rounded-full font-bold hover:opacity-90 transition-opacity">SERVICIOS</button>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <img alt="EcoLINK Boxes" className="rounded-lg shadow-2xl w-full object-cover h-[500px]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBDLaGAm5XoOlh7Sedn2vqRul--EZUiHfc-oVLwl2Xo243Tm1BgqWknv15wff0FBgjuZ4j_2yl8_rLz3d_ZSKmgogWUqQTpHque5k5OTO_94RxDhudISLajQ46WwH_haCeS4ou1gsG_yaLm9-G2yvlgg16RA-M-jonDAoknBi4BQCQ2b5zTOKSR0lzDwTZjzMNoCRQzIVMtIH73xhdO_M_x_3L2x6phNBGf5vyqM8IG8sknsdjVT-oFwkXTh5rWeSe4GdRs90g_aEGt" />
            </div>
          </div>
        </section>

        {/* News Section */}
        <section className="bg-eco-green py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-eco-beige text-3xl md:text-4xl font-bold mb-12 text-center md:text-left">
              Cuando nos movemos, pasan cosas
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {news.length > 0 ? news.map((item) => (
                <div key={item.id} className="bg-eco-light-green/20 rounded-lg overflow-hidden flex flex-col">
                  <img alt={item.title} className="w-full h-64 object-cover" src={item.imageUrl} />
                  <div className="p-6 flex-grow">
                    <h3 className="text-eco-beige font-bold mb-2">{item.title}</h3>
                    <p className="text-eco-beige/80 text-sm line-clamp-2">{item.content}</p>
                  </div>
                </div>
              )) : (
                <>
                  <div className="bg-eco-light-green/20 rounded-lg overflow-hidden flex flex-col">
                    <img alt="News 1" className="w-full h-64 object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXIZoV03jsV6oLmBfPQC361yhrBCvyDPTIeim4Vw2pxCkgbzWpnfFmbTC_PoM6qw58M16NRwAcl2jfuksROdEtXKLhYAEEAocN8og1N0COkFLP2cQfTOsXPak6W3YKrrjuUvXntZd742oUbxvgXRwiCwmWZHtwRcuaIcghDidezZR1UrVzlJ-lVhxRR8UJjp1k-IGkD4QjWaVfUreV8ERupxlr8hXHimXjpNTKKRCucW0yQZMKkmMBMcWL4EanVYa4nqeAhbqt-bkT" />
                    <div className="p-6 flex-grow">
                      <h3 className="text-eco-beige font-bold mb-2">Eco-link en acción: Jornadas de limpieza</h3>
                      <p className="text-eco-beige/80 text-sm">Más de 50 voluntarios se sumaron a la jornada...</p>
                    </div>
                  </div>
                  <div className="bg-eco-light-green/20 rounded-lg overflow-hidden flex flex-col">
                    <img alt="News 2" className="w-full h-64 object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDtIZ08BuQ6g6a-_8wvYxgWADYMZNUUi8P-9VV1yty2tG6iWzG5d3erfXNQSHSa02oo3Wt3EWEggjEoWX2xW_wSk0t5OHZGnn-00dOqw4TDrbUrDbpvW-6mcLI6y1XPQsmOetVTWb3-hRfc8F2IJ2zdFas_Q0gvFwwh5TGCmFkeyA-O2VoUqaUfZ_YFoyLINPmF8CmpW0NFYZ1CymBXBXQwxnEoVa11PJ_zJRjDKlQmBPz-byS3c2lOHqECGoRTuZX9SSGPHO3TuFG3" />
                    <div className="p-6 flex-grow">
                      <h3 className="text-eco-beige font-bold mb-2">Instalamos nuevos puntos verdes</h3>
                      <p className="text-eco-beige/80 text-sm">Nuevos contenedores en puntos estratégicos de la ciudad...</p>
                    </div>
                  </div>
                  <div className="bg-eco-light-green/20 rounded-lg overflow-hidden flex flex-col">
                    <img alt="News 3" className="w-full h-64 object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBlbNFm-WQHlTWKLtBYPU8MG9b5XEZ15jdVBR11Bx-ACsSBjDMfOFKIU_XXQd2Ay00c9VU0x9-hm0eP5Tfxd66Y4AdaGqcblXU0gP6cRcLMfd-ZOb4BtBpRjL-sJ5Sns_zxpGH6jZa4l7_rcjteDafx5g-IR-1uI3j9XDO-OHgRKn7-YDzt9VnletOezFJpVo2eNFCkKrSoO2vF6-jqJc_zS9IMdMHlAtK0mSrslhW4usgPf3yxhr1KSeU8Og0LwW0D1yWkGTfeQps" />
                    <div className="p-6 flex-grow">
                      <h3 className="text-eco-beige font-bold mb-2">Staff EcoLINK en formación constante</h3>
                      <p className="text-eco-beige/80 text-sm">Capacitaciones sobre economía circular y procesos...</p>
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Newsletter */}
            <div className="mt-20 max-w-2xl mx-auto flex flex-col md:flex-row items-center gap-4">
              <p className="text-eco-beige font-medium text-center md:text-left flex-shrink-0">Recibí las últimas novedades</p>
              <input className="flex-grow rounded-full border-none px-6 py-3 text-eco-forest focus:ring-2 focus:ring-eco-pink" placeholder="E-mail" type="email" />
              <button className="bg-eco-pink text-white px-8 py-3 rounded-full font-bold hover:bg-eco-pink/80">SUSCRIBIR</button>
            </div>
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
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <div className="text-4xl font-black mb-8">EcoLINK</div>
          <div className="flex gap-6 mb-12">
            <a className="w-10 h-10 flex items-center justify-center rounded-full border border-eco-beige/20 hover:bg-eco-beige/10" href="#">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path></svg>
            </a>
            <a className="w-10 h-10 flex items-center justify-center rounded-full border border-eco-beige/20 hover:bg-eco-beige/10" href="#">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.805.249 2.227.412.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.013 3.584-.07 4.85c-.054 1.17-.249 1.805-.413 2.227-.217.562-.477.96-.896 1.382-.42.419-.819.679-1.381.896-.422.164-1.057.36-2.227.413-1.266.057-1.646.07-4.85.07s-3.584-.013-4.85-.07c-1.17-.054-1.805-.249-2.227-.412-.562-.217-.96-.477-1.382-.896-.419-.42-.679-.819-.896-1.381-.164-.422-.36-1.057-.413-2.227-.057-1.266-.07-1.646-.07-4.85s.013-3.584.07-4.85c.054-1.17.249-1.805.413-2.227.217-.562.477-.96.896-1.382.42-.419.819-.679 1.381-.896.422-.164 1.057-.36 2.227-.413 1.266-.057 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-1.277.057-2.15.26-2.914.557-.79.307-1.459.718-2.125 1.384-.666.666-1.077 1.335-1.384 2.125-.297.764-.5 1.637-.557 2.914-.058 1.28-.072 1.688-.072 4.947s.014 3.667.072 4.947c.057 1.277.26 2.15.557 2.914.307.79.718 1.459 1.384 2.125.666.666 1.335 1.077 2.125 1.384.764.297 1.637.5 2.914.557 1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c1.277-.057 2.15-.26 2.914-.557.79-.307 1.459-.718 2.125-1.384.666-.666 1.077-1.335 1.384-2.125.297-.764.5-1.637.557-2.914.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.057-1.277-.26-2.15-.557-2.914-.307-.79-.718-1.459-1.384-2.125-.666-.666-1.335-1.077-2.125-1.384-.764-.297-1.637-.5-2.914-.557-1.28-.058-1.688-.072-4.947-.072z"></path><path d="M12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.209-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path></svg>
            </a>
          </div>
          <div className="text-xs text-eco-beige/50 border-t border-eco-beige/10 pt-8 w-full">
            © 2023 EcoLINK | Todos los derechos reservados
          </div>
        </div>
      </footer>
    </body>
  );
}
