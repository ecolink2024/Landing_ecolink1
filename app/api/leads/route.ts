import { NextRequest, NextResponse } from 'next/server';
import { appendLeadRow, LeadSource } from '@/lib/googleSheets';

function normalizeString(value: FormDataEntryValue | null): string {
  if (typeof value !== 'string') return '';
  return value.trim();
}

export async function POST(request: NextRequest) {
  try {
    const url = new URL(request.url);
    const sourceParam = url.searchParams.get('source') as LeadSource | null;
    const source: LeadSource = sourceParam ?? 'home';

    const formData = await request.formData();

    const nombre = normalizeString(formData.get('nombre'));
    const email = normalizeString(formData.get('email'));
    const telefono = normalizeString(formData.get('telefono'));
    const consulta = normalizeString(formData.get('consulta'));

    if (!nombre && !email && !telefono && !consulta) {
      return NextResponse.json(
        { ok: false, error: 'Formulario vacío' },
        { status: 400 },
      );
    }

    await appendLeadRow({
      nombre,
      email,
      telefono,
      consulta,
      source,
    });

    // Para formularios HTML clásicos, redirigimos a la misma página con ?ok=1
    const referer = request.headers.get('referer');
    if (referer) {
      const redirectUrl = new URL(referer);
      redirectUrl.searchParams.set('ok', '1');
      return NextResponse.redirect(redirectUrl.toString(), { status: 303 });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error al guardar lead en Sheets', error);
    return NextResponse.json(
      { ok: false, error: 'Error interno' },
      { status: 500 },
    );
  }
}

