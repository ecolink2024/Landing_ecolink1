import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { createAdminSession } from '@/lib/auth';

export async function POST(request: NextRequest) {
  const { email, password } = await request.json();

  const adminEmail = process.env.ADMIN_EMAIL;
  const adminPasswordHash = process.env.ADMIN_PASSWORD_HASH;

  if (!adminEmail || !adminPasswordHash) {
    return NextResponse.json({ error: 'Falta configurar credenciales de admin.' }, { status: 500 });
  }

  if (email !== adminEmail) {
    return NextResponse.json({ error: 'Credenciales inválidas.' }, { status: 401 });
  }

  const isValid = await bcrypt.compare(password, adminPasswordHash);
  if (!isValid) {
    return NextResponse.json({ error: 'Credenciales inválidas.' }, { status: 401 });
  }

  await createAdminSession(email);
  return NextResponse.json({ ok: true });
}
