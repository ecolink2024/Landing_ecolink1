/** Archivos en public/Logos (orden estable). */
export const PARTNER_LOGO_FILENAMES = [
  "ANJOR.png",
  "CONSUMAN(1).png",
  "Deep Blue (1).png",
  "Encode.png",
  "Eureka.png",
  "LOGO GOCUOTAS.png",
  "LOGO NAZARETH.png",
  "LOGOS_EDG-01.jpg",
  "LOGOS_EDG-03.jpg",
  "LOGOS_EDG-04.jpg",
  "LOGOS_EDG-05.jpg",
  "LOGOS_EDG-06.jpg",
  "LOGOS_EDG-07.jpg",
  "LOGOS_EDG-08.jpg",
  "LOGOS_EDG-09.jpg",
  "LOGOS_EDG-10.jpg",
  "LOGOS_EDG-12.jpg",
  "LOGOS_EDG-13.jpg",
  "LOGOS_EDG-14.jpg",
  "LOGOS_EDG-16.jpg",
  "LOGOS_EDG-17.jpg",
  "LOGOS_EDG-18.jpg",
  "LOGOS_EDG-19.jpg",
  "LOGOS_EDG-20.jpg",
  "LOGOS_EDG-22.jpg",
  "LOGOS_EDG-23.jpg",
  "LOGOS_EDG-24.jpg",
  "LOGOS_EDG-25.jpg",
  "LOGOS_EDG-26.jpg",
  "LOGOS_EDG-27.jpg",
  "LOGOS_EDG-28.jpg",
  "LOGOS_EDG-29.jpg",
  "LOGOS_EDG-30.jpg",
  "LOGOS_EDG-31.jpg",
  "LOGOS_EDG-32.jpg",
  "LOGOS_EDG-34.jpg",
  "LOGOS_EDG-35.jpg",
  "LOGOS_EDG-37.jpg",
  "LOGOS_EDG-38.jpg",
  "LOGOS_EDG-40.jpg",
  "LOGOS_EDG-41.jpg",
  "LOGOS_EDG-42.jpg",
  "LOGOS_EDG-43.jpg",
  "LOGOS_EDG-44.jpg",
  "LOGOS_EDG-45.jpg",
  "LOGOS_EDG-46.jpg",
  "Logo Banco Julio_.png",
  "Logo Incoa-02 azul.png",
  "Logo Nobis Medical 1.png",
  "Logo-Hello-Negro (1).png",
  "Mesa de trabajo 1.png",
  "PROTECTIA.png",
  "ROGACHEF.png",
  "isologotipo APADIM.ai.png",
  "logo vida rgb y cmyk-08.png",
] as const;

export type PartnerLogoRow = { src: string }[];

/** Tres carruseles: reparto round-robin. */
export const PARTNER_LOGO_ROWS: PartnerLogoRow[] = (() => {
  const rows: PartnerLogoRow[] = [[], [], []];
  PARTNER_LOGO_FILENAMES.forEach((name, idx) => {
    const rowIndex = idx % 3;
    rows[rowIndex].push({
      src: `/Logos/${encodeURIComponent(name)}`,
    });
  });
  return rows;
})();
