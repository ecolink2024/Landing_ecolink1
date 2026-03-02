import { NextRequest, NextResponse } from 'next/server';
import { isAdminAuthenticated } from '@/lib/auth';
import { supabase } from '@/lib/supabase';
import { newsSchema } from '@/lib/news-schema';

const DEFAULT_PAGE_SIZE = 5;

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const page = Math.max(1, Number(searchParams.get('page') ?? '1') || 1);
  const pageSize = Math.min(50, Math.max(1, Number(searchParams.get('pageSize') ?? DEFAULT_PAGE_SIZE) || DEFAULT_PAGE_SIZE));

  const isAdmin = await isAdminAuthenticated();
  const includeDrafts = searchParams.get('includeDrafts') === '1' && isAdmin;

  const from = (page - 1) * pageSize;
  const to = from + pageSize - 1;

  let query = supabase.from('News').select('*', { count: 'exact' });
  if (!includeDrafts) {
    query = query.eq('isPublished', true);
  }
  const { data: items, error, count } = await query
    .order('createdAt', { ascending: false })
    .range(from, to);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  const total = count ?? 0;
  return NextResponse.json({
    items: items ?? [],
    pagination: {
      page,
      pageSize,
      total,
      totalPages: Math.max(1, Math.ceil(total / pageSize))
    }
  });
}

export async function POST(request: NextRequest) {
  const isAdmin = await isAdminAuthenticated();
  if (!isAdmin) {
    return NextResponse.json({ error: 'No autorizado.' }, { status: 401 });
  }

  const body = await request.json();
  const parsed = newsSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
  }

  const { data: created, error } = await supabase
    .from('News')
    .insert(parsed.data)
    .select()
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  return NextResponse.json(created, { status: 201 });
}
