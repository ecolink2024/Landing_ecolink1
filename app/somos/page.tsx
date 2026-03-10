import Navbar from "@/app/components/Navbar";

export default function SomosPage() {
  return (
    <>
      <Navbar />
      <div className="w-full overflow-x-hidden bg-eco-beige">
        {/* Hero */}
        <section className="relative h-[560px] flex items-end overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              alt="Equipo EcoLink"
              className="w-full h-full object-cover"
              src="/equipoSomos.png"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
          </div>
          <div className="container mx-auto px-6 pb-12 relative z-10">
            <h1 className="text-white text-3xl md:text-5xl font-extrabold leading-tight max-w-2xl mb-4">
              SOMOS ECOLINK
            </h1>
            <p className="text-white/90 text-sm md:text-lg max-w-2xl font-light leading-relaxed">
              Un equipo interdisciplinario comprometido con el cuidado del
              ambiente y la transformación en red.
            </p>
          </div>
        </section>

        {/* Description */}
        <section className="bg-eco-green py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <p className="text-white text-lg md:text-xl leading-relaxed">
              Trabajamos con hogares, comercios, espacios gastronómicos,
              empresas e instituciones que buscan reducir su impacto ambiental y
              generar un cambio real. Acompañamos a cada cliente con soluciones
              simples, eficientes y adaptadas a su realidad, integrando la
              gestión de residuos reciclables y orgánicos como parte de su día a
              día.
            </p>
          </div>
        </section>

        {/* Nuestro Equipo */}
        <section className="bg-eco-beige py-28 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-center text-3xl md:text-4xl font-extrabold text-eco-forest mb-12">
              Nuestro equipo
            </h2>
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className="flex justify-center">
                <div className="w-80 h-80 rounded-full overflow-hidden shadow-xl bg-gray-200">
                  <img
                    alt="Federico Gauna"
                    className="w-full h-full object-cover"
                    src="/federicoSomos.jpg"
                  />
                </div>
              </div>
              <div className="text-center md:text-left">
                <p className="text-eco-forest text-xl md:text-2xl font-bold italic leading-snug mb-6">
                  &ldquo;Es necesario buscar alternativas, cambiar modelos,
                  rediseñar productos y repensar casi todo lo que entendemos por
                  normal o común.&rdquo;
                </p>
                <p className="text-eco-forest text-lg font-bold">
                  Federico Gauna
                </p>
                <p className="text-gray-500 text-sm">
                  Lic. en Economía | Director y Fundador de EcoLink
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-eco-forest text-eco-beige py-16 px-6">
          <div className="max-w-7xl mx-auto flex flex-col items-center text-center gap-8">
            <img
              src="/ecolink-logo.png"
              alt="EcoLINK"
              className="h-16 w-auto object-contain"
            />
            <div className="flex gap-5 items-center">
              <a
                href="https://www.instagram.com/ecolinkcba/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full border border-eco-beige/30 hover:bg-eco-beige/10 transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.805.249 2.227.412.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.013 3.584-.07 4.85c-.054 1.17-.249 1.805-.413 2.227-.217.562-.477.96-.896 1.382-.42.419-.819.679-1.381.896-.422.164-1.057.36-2.227.413-1.266.057-1.646.07-4.85.07s-3.584-.013-4.85-.07c-1.17-.054-1.805-.249-2.227-.412-.562-.217-.96-.477-1.382-.896-.419-.42-.679-.819-.896-1.381-.164-.422-.36-1.057-.413-2.227-.057-1.266-.07-1.646-.07-4.85s.013-3.584.07-4.85c.054-1.17.249-1.805.413-2.227.217-.562.477-.96.896-1.382.42-.419.819-.679 1.381-.896.422-.164 1.057-.36 2.227-.413 1.266-.057 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-1.277.057-2.15.26-2.914.557-.79.307-1.459.718-2.125 1.384-.666.666-1.077 1.335-1.384 2.125-.297.764-.5 1.637-.557 2.914-.058 1.28-.072 1.688-.072 4.947s.014 3.667.072 4.947c.057 1.277.26 2.15.557 2.914.307.79.718 1.459 1.384 2.125.666.666 1.335 1.077 2.125 1.384.764.297 1.637.5 2.914.557 1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c1.277-.057 2.15-.26 2.914-.557.79-.307 1.459-.718 2.125-1.384.666-.666 1.077-1.335 1.384-2.125.297-.764.5-1.637.557-2.914.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.057-1.277-.26-2.15-.557-2.914-.307-.79-.718-1.459-1.384-2.125-.666-.666-1.335-1.077-2.125-1.384-.764-.297-1.637-.5-2.914-.557-1.28-.058-1.688-.072-4.947-.072z" />
                  <path d="M12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.209-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="https://wa.me/5493518097375"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full border border-eco-beige/30 hover:bg-eco-beige/10 transition-colors"
                aria-label="WhatsApp"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/ecolinkcba/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full border border-eco-beige/30 hover:bg-eco-beige/10 transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
            <a
              href="mailto:somos@ecolink.com.ar"
              className="text-eco-beige/70 font-normal leading-none text-sm hover:text-eco-beige transition-colors"
            >
              somos@ecolink.com.ar
            </a>
            <p className="text-eco-beige/50 font-normal leading-none text-xs">
              © 2020 EcoLink® | Todos los Derechos Reservados.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}
