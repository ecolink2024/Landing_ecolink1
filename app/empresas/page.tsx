export default function EmpresasPage() {
  const partnerLogos = [
    'AB6AXuB0dwAbTy_M2I2w7OyG7h_M9-IPioCV27qsvx5gCbUrZglQTMhHDPvlR6d1zqOv1ytjJwEVBZva2QdQT24SbXnaZzvQMdTaxQl3XjT6TRepm2jyIavfrpb4pMbwneI6LB-uTpGzlsZysF1wjylIWM13aJTTRpstHgQ6WejD3PHhJWxbvtDhoejfXRgwnS7Iub4nhLVLF4A7u1gadLpEtsOkZmyZ1JQHB_hVf5KexgywDtVAOZCo3dZPjaos38xfn9ux5yC3Mir0InHy',
    'AB6AXuCF5Y2EagcKgdBtUGRdHGfOWIYRXaagtnoOmUKEnQxU3wic18LJnTFSj9qYUSzWF_epzKdvTd9_D_ngKsBqi1KQPbnRf-cFChOtqn17kZi9XAtBDEF3qrMqWX1NTd5-v7l_PZkcWzj13oo8_9iLd1NfqnYZtDKagbouC183O9DJvzHXpsTkAgSPw2Sd6K7GYqDiCVUKHhCLsZ1SQeeezuJN808XbrG4YpTfYRD9_YQ_vSPNxhNeUvbfInGdR_SydEO8h_VNkRzHYiq',
    'AB6AXuAJ-b5waOsfmJJqlhxOqXeKZq_hOUpEw4voQe2PcOB6FVunYzVfxW73rHBD7l4TAXTG-paTNEma7CCf7aoOQ78IuqUTBr2rECFSLJx1DTz5rPPI5EXeIPq9S4iEKKF-3RfDlWmAGuaywP7EqFBvoZmETeY5UkjhTTAtYzRCfHkrbxAJaN59nJyCxIqNmVDMw4fsH6XDjR9WiBzYKGg4i4hUHiC0t6U0GIaFxTVQJ_9dSr2eVNhJn99V-x8DnPrllwn_hyVzGkwv-uW8',
    'AB6AXuB88nvKGzFgXBzoweZVcL1Owv3GtxWZrRWFBn_l9fYZHtX2ePWdOuVeQWII4AcyZhf1GB-eSbcJ8tXOHtEG2zTSVq0ZzMi350SD3jU41-RgslTW2JD2-PUeaQMvO1ZBBCkpGPFBSy5WdsRULnuu4an49COqIsaY3X2EBeK9GowWJsV2DNMBFRsdKgzIr8m7GxYSHCHji-q_Z5gXfhpm2Swygg87z1m_94KFPp8SU6vN_ZTASkrqvu588wcO-X2G1an2TtDP6D0XtdqU',
    'AB6AXuDa_5h26H4pOAz_bIX_vFFJgMWnmZNXa7mnrrpwYhMFhItf9a2RMAAhodR4QDJa-xhA7CwYHP1dHFnkvqOYTMOKkBYy6f7gC9csZGpAmi-yefogZ5rup6VXuA03ktEE-p6T5APIvmaxLYsy8qLvEhQwyikuzGoOzboj5aySFvfeDPYyyyc_tQK6bsH9o1tCi9MZzHDW6zSvqySCGpUOJztcXn4x0I6X4Qjzj1bZoKirK-afxn6Dd1029G-xpOcQHwe1XQpdOlAm9zg2',
    'AB6AXuCFw5hXq_BwGeIHdtx41jLiUn2hEO59KOYwuPfp0mkjSVC8PC1ANcWP2UpNt1APS-uyAW3oYjLdqhDKA-ls4AuQdFLOp_vvOMCh8lbJFwmXg7mrZLbAzhvUXYbXtieIfmJItmz_F31z7hSAXT7usqDumfTkqL2Gz7Yx6RD3f1FfS0CXwhbWFGMz4XbK9rwdqLzESFab6OoY-AJBVBof5TJrMwihRhn1uqqd7bYtFTMWbjAHJE0ZJTchJjOhWwwCmTqHD0w3ZNpoqRi0',
    'AB6AXuDRbhirZViWvmUO1PhUUIkrTXXMvkhOUnPDlSbEtfg4jO7n06vs2NzIycYo7p48DD8nyTVHEV3sbauXh80HXFX4MXuKfOB17aqkHUeNfoJ8EWiOetqS-FIf2iq8-NjvwsDHtznEOYICxnLV6OGvEvDb_Ei3JxYQPgMrKEJRoogua19sCVHdOAJaSKkU9IhsmsVCMXwZZoN_lOVAP4LXdqmMqiPrnH8hs6-l57U7DLpRcOetJ4lMYEF7REwi5w-MY8nilkX2ESz9ETOU',
    'AB6AXuBiBhxmsHesXwvFTsY5BkgLhiLlaOEXnWN0UQKV3i2lmLWMOw64Fappkf3UPbf6xUqFN4ti3ufyvf77qPLSa-zQfL6-MK9OqzOHRgWvz6DtX7zE5uwDcNsvyGhfl8fPacJXw1jXjz9DRsIsWvxz9YpMrjdJGMhmnWe6WQ2VxLMag42XJ5JgaBr5n6crp8PTwcZW3Du2WMh4ZbNm45h_wYmjnXj8vChTk02CgG6VoBAZ5GcJZppUguQyJRANzZMInqJO78sbd-mnXoEh',
    'AB6AXuBUbJ6GeFrz0w6BWngcbUeA2QJlqdlg0qZKHevcsxwka9BOsu5lgn7-dSX0zTnk2khn4z83u7tWA-IyH860K0p-kBjI7FbmdzZKhSm3OehnhRuToVkd2-0e5otd9cNaWgFZzLjgoSUVlfT1Nx46fZS9TrnmQAWIm9-mKjtz2VIwCLrntKoEfjASJQs1uaX8Hjwcpd77QjsWhTt4Zx4ILKVhFfbzCvSwKqfT9Q7AO61qdkMkUpBON-vlCS3X2SUSTrT6C_dlghnPkAOQ',
    'AB6AXuBu9klWjAtFrh8vr0FRRh9at2-fp88spG987gKyWzpOAZrKapMyyH5f31OjucAmhsZX4hsPZsOomOFo7OTCqQV8QLae0VLLe0uatdxl89vkIYU0VJp0PWRGDzZVpfRchKW1apkMq3YxgIOcSKGveFBnFye_uFL1m6zHI1x5zdMiVni5H6wzZgIABSGuk1YE15s-JLRxjSNVGXSJosphgboykviATrIbbZDVEqcj_Lf8u6xYLxG2OH8Pc9K3nXeC9a0j_zas7owPNu59',
    'AB6AXuDJ974haTOEpoRR2Cqo7El4B-W0RB4XAP22Zn7LdfiKxxWxSfKhD8iPWcC38WvCQRKRYBQmkloMifiMYHiRbiH9RGb38M1IDMAEKUQWLUNipH7A0tAhNR3lB86Vr8Rp7xODnm584lBQkq1X3yVOIphLOLZcd_E-G92zOR2YXeu4-UwwjZk055FHy99DHlHw2BnHPcH91FgGM62uuLZk0YxG9_3LikMsU5breqNlhQhJCZtjoOP2bKW7r-PkgO361HU8JZqkS1UFN5ll',
    'AB6AXuA1NsfG6jsNFFB7zGAgp52dP8QzEpEwh31pwY-PmpYeUsCaA2Yp-m_CGub2--7mQd-1TLw81VeRXkjW_Ywn2OQ3I1Y5Jzk8qhJwy5rzEEAJfZrzvyv4bqugiUiU85JyT83GcNd8d99tLDCQlJGkk7_8PvE-igzRQHc_xffLGkzWcg_Z-S5o0ghIrtOQ0bQzs_3PbbeQdyv_NFaeJUSMev7p5aZ_pZrIAUNxu1QeiB2_bByqygKibgyxP_Nse8RT3wYQVeoZ7Nt8-1ER',
    'AB6AXuDxNzHC_-Y7GG_gMs91FoeEY_8qedPJ0S9oIGY81cwHUEnGxO4DrxZuFBuWsdN4Z8WM7icQjxs0BxDu2SYFFFcdeBqFvrlZUSPUkfzQu1Y8CSHJu-0EkZxc9rvvvmlQntgHhpwXpyA7R_BtCob-g_QSX08USFDg7DdUwqBTvClJ9PXGaM8SuDQd3Z-DmzD6Q6RDfcYyofH4uRZ40D_IFes_YCvg9plX1-3AX5YOydcLannSW7JoDdBNjr2O3fxNSNVUEvCmCsfzGo52',
    'AB6AXuDwlunAG8sEipa9HUgqnzckoFa9_1OlsoHyW4wzoAtwu0pHd3VQqjmdfiXgHtzWukaZVk7vXpmcrqte39IGBpgSrz1t1sGWrzJFsfJE9g9CwgNOzVhxBa2EXKEG3JHKOUkqShfZUxVaXe6k8GjYQJx_CAMCNPQRZPeiMRT31kAHTu0JfStUd9gzPO7rRtuXkMOkrpq2gCasdLhm1XLEkjl5fY7GHWK7ML8vDCKuBGrLFXzACKMRXp3tuoh8lCz4JY_dQiFwAxLZuU_H',
    'AB6AXuD8bKH-zi-fPsfdCQ6dSwFwt2KaZbmlbjkSc0PnRN5MhGMgGHD5aMg6mjISgBge3LRi_vZ84nz5mD0UWRog85kSJG6Zkcnyk52FP3xm9xKZqXaRLuvFXGgqTXDTQ38EAbIgFDcIwdJ_fTY8kt7fsci2l94BHB4eGf0ssiDjyjAe7Yx7WSHnJErllJmp84nX1fuJ222seTRMlzNlpUwAAqPRnbgSUoInZDDrqV9u4TiTJqvNYmwUvy3tJqIgMxLmNmlwvJ8vLmu9LydM',
    'AB6AXuBQeKxf1UPo2kvvOQ1sbEROHIpo6ExpvL1QrEYuxK4qmgnugMIL2MWX6fM7embRcmnMlIDY09QO29szvBSORwUljcsnsHqYZ8q2a9oyeof1KhUYoQZGkPsOoKRbTw9tSrnHyrkQNzpVJs5J-AmZIXKU3WJtMSIo-Xzzw5Kt2ErbjRjFvGSrS0w3jXwJ7ZEvTPtOtXurYZd2cgqzh4GbZsHf2fEPpEgoWHgLN-rdEGeSK3F-llxjoAGuu2piC97bnAknnF1Mcs-CLaYW',
  ];

  return (
    <body className="bg-white text-gray-800 antialiased">
      {/* Navigation */}
      <nav className="bg-eco-green text-white py-4 px-6 flex justify-between items-center sticky top-0 z-50 shadow-md">
        <div className="flex items-center gap-2">
          <span className="font-bold text-xl tracking-tight">EcoLINK</span>
          <div className="flex gap-1">
            <span className="text-xs">♻️</span>
            <span className="text-xs">💡</span>
            <span className="text-xs">🍃</span>
          </div>
        </div>
        <div className="hidden md:flex gap-6 text-xs font-semibold uppercase tracking-widest">
          <a className="hover:underline" href="/empresas">Empresas</a>
          <a className="hover:underline" href="#">Casas</a>
          <a className="hover:underline" href="#">Somos EcoLINK</a>
        </div>
        <a
          className="bg-eco-pink text-white px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider hover:opacity-90 transition-opacity"
          href="#contact"
        >
          Escribinos
        </a>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[500px] flex items-end overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            alt="Sustainability work"
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbXuDzl0YWFp85p80wQveXOqpGHHug-0waSPToniLwfKsE18C4r-f_eiOPaY5eJ0xZty_VFb-nwe18RKkN08GAuGcjfk0MwzXFkjPwUqADrdmJzETUA4feEWx5VgNmiNjQpZJSPIVvB5Q2vE1InkKtZusgO7vDK3bVePVRMYjXalqr0a3blyUFxh76o2UGpWHKXvSAIvJlDhsxG9Oz6nz1MpIUMux_rhxodLlGr57bTHF-PaJVZKKyPTu2hHdSm-fld1qJEKmM6aYG"
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
      <section className="bg-eco-green py-16 px-6">
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <p className="text-xs font-bold uppercase tracking-widest mb-4 opacity-80">Servicios</p>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-8">
              Trazamos soluciones de <br />
              <span className="font-black">Gestión Consciente</span> <br />
              con impacto real
            </h2>
            <a
              className="inline-block bg-eco-pink text-white px-8 py-3 rounded-full text-xs font-extrabold uppercase tracking-widest shadow-lg hover:scale-105 transition-transform"
              href="#contact"
            >
              Sumá a tu empresa
            </a>
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img
              alt="Workshop team"
              className="w-full h-full object-cover aspect-square"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC6jfRQJ47Mezdhfygpn_py0W5hTydWmfoK4YjxAffT-vUeL71DSTohQOMftlfCSr0dRAG2rUVilfmvUCbSQxkUY2cPRHMKAjpG6dIa6OEJbaHamzoDSAWR6KuvItIw-6n4STO4ZzLIRqMQeB6PCdIEdTrP2z9KBNRx-vEY4i0s6eab2bH7UX4XKmQIGhBCpKK4cygfZRnHpLwrrZU8XIABYF4s7snDY9voSdKU5lzM9hMh0zfJqFn8Nj9gcTewyS1SgSwcKjl2rbSO"
            />
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-4/5 bg-white py-4 px-6 rounded-lg shadow-xl text-center">
              <p className="text-eco-green font-bold text-lg">
                <span className="mr-2">3.</span> Capacitaciones y Talleres
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-800 mb-2">
            Recuperar y Transformar los Residuos
          </h2>
          <h3 className="text-2xl md:text-3xl font-extrabold text-eco-green mb-10">
            empieza con una decisión
          </h3>
          <p className="text-gray-500 font-semibold mb-12">Estas empresas ya se sumaron</p>
          <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-8 gap-8 items-center opacity-70 grayscale">
            {partnerLogos.map((id, i) => (
              <img
                key={i}
                alt="Partner Logo"
                className="mx-auto"
                src={`https://lh3.googleusercontent.com/aida-public/${id}`}
              />
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
                className="inline-block bg-eco-pink text-white px-8 py-3 rounded-lg font-bold uppercase tracking-widest text-xs hover:opacity-90"
                href="#"
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
      <footer className="bg-eco-forest text-white py-16 px-6 text-center">
        <div className="container mx-auto">
          <div className="mb-8">
            <h2 className="text-4xl font-light tracking-widest mb-4">EcoLINK</h2>
            <div className="flex justify-center gap-4 text-xl opacity-80">
              <span>♻️</span>
              <span>💡</span>
              <span>🍃</span>
            </div>
          </div>
          <div className="flex justify-center gap-6 mb-8">
            <a className="opacity-60 hover:opacity-100 transition-opacity" href="#">𝕏</a>
            <a className="opacity-60 hover:opacity-100 transition-opacity" href="#"></a>
            <a className="opacity-60 hover:opacity-100 transition-opacity" href="#"></a>
            <a className="opacity-60 hover:opacity-100 transition-opacity" href="#"></a>
          </div>
          <p className="text-sm font-light mb-2 opacity-80">somos@ecolink.com.ar</p>
          <p className="text-[10px] uppercase tracking-widest opacity-40">
            © 2020 EcoLINK® | Todos los Derechos Reservados.
          </p>
        </div>
      </footer>
    </body>
  );
}
