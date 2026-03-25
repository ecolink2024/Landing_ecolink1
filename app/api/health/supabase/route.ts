import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export const dynamic = 'force-dynamic';

function isAuthorized(request: NextRequest) {
  const secret = process.env.SUPABASE_KEEPALIVE_SECRET;
  // Si no hay secreto configurado, dejamos el endpoint público (modo simple para Vercel Cron).
  if (!secret) return true;

  const token =
    request.nextUrl.searchParams.get('token') ||
    request.headers.get('x-keepalive-token') ||
    '';

  return token === secret;
}

export async function GET(request: NextRequest) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ ok: false, error: 'No autorizado.' }, { status: 401 });
  }

  try {
    // Consulta mínima para “despertar” el proyecto.
    const { error } = await supabase.from('news').select('id').limit(1);
    if (error) {
      return NextResponse.json(
        { ok: false, error: error.message },
        { status: 500 },
      );
    }

    return NextResponse.json({ ok: true, ts: new Date().toISOString() });
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Error conectando a Supabase.';
    return NextResponse.json({ ok: false, error: message }, { status: 500 });
  }
}

