import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { createAdminSession } from '@/lib/auth';

const ADMIN_EMAIL = 'admin@ecolink.com';
const ADMIN_PASSWORD_HASH = '$2a$10$j0..UL0Rpk0lzinG3R4CMuUyI/KKwQmLtTLyHX5CroX9gXLSzcm/O';

export async function POST(request: NextRequest) {
  const { email, password } = await request.json();

  if (email !== ADMIN_EMAIL) {
    return NextResponse.json({ error: 'Credenciales inválidas.' }, { status: 401 });
  }

  const isValid = await bcrypt.compare(password, ADMIN_PASSWORD_HASH);
  if (!isValid) {
    return NextResponse.json({ error: 'Credenciales inválidas.' }, { status: 401 });
  }

  await createAdminSession(email);
  return NextResponse.json({ ok: true });
}
