/** Fecha de publicación mostrada (columna `published_at` o, si no hay, `created_at`). */
export function formatNewsDateForDisplay(item: {
  published_at?: string | null;
  created_at: string | Date;
}): string {
  if (item.published_at) {
    const parts = item.published_at.split("-").map(Number);
    const y = parts[0];
    const m = parts[1];
    const d = parts[2];
    if (y != null && m != null && d != null) {
      return new Date(y, m - 1, d).toLocaleDateString("es-AR", {
        day: "numeric",
        month: "long",
        year: "numeric",
      });
    }
  }
  return new Date(item.created_at as string | number | Date).toLocaleDateString("es-AR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function isoDateFromCreated(createdAt: string | Date): string {
  const d = new Date(createdAt);
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

export function todayIsoLocal(): string {
  return isoDateFromCreated(new Date());
}
