/**
 * Presentaciones de Google Slides publicadas (File → Share → Publish to web).
 * El iframe usa /pubembed: al actualizar la presentación en Drive, el cliente ve el cambio
 * al recargar la página (no forma parte del recorrido principal; solo enlaces directos).
 */

export type SlideResource = {
  title: string;
  /** URL lista para <iframe> (pubembed) */
  embedSrc: string;
};

/** Convierte URL publicada .../pub?... en .../pubembed?... (recomendado para iframe). */
export function toPubEmbed(pubUrl: string): string {
  return pubUrl.replace(/\/pub(\?|$)/, "/pubembed$1");
}

const PRESENTACION_1 =
  "https://docs.google.com/presentation/d/e/2PACX-1vS6cngL-_F52PALFVmI4cKOlBw5ibjs61gxh3nURTXlHP7-C9idvkl6DvARVodBCQMxSbgULq6WeDKG/pub?start=false&loop=false&delayms=3000&slide=id.p";

const ORGANICOS_COMPOSTABLES =
  "https://docs.google.com/presentation/d/e/2PACX-1vQVTgbiw5hJpcb5Qfc8OkV5QjUSUS5jzbRYAC4xafNZwxk_oskwvc7z_aBcXFXVpHmq9_dq19hSURyT/pub?start=false&loop=false&delayms=3000";

export const SLIDE_BY_SLUG: Record<string, SlideResource> = {
  /** Primera presentación (slide inicial id.p) */
  presentacion: {
    title: "Presentación EcoLink",
    embedSrc: toPubEmbed(PRESENTACION_1),
  },
  /** Gestión consciente de orgánicos compostables */
  "organicos-compostables": {
    title: "Gestión consciente de orgánicos compostables",
    embedSrc: toPubEmbed(ORGANICOS_COMPOSTABLES),
  },
};

export const SLIDE_SLUGS = Object.keys(SLIDE_BY_SLUG);
