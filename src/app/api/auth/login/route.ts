import { NextResponse } from 'next/server';

import { loginScheme } from '@/app/lib/validation/auth';
import apiClient from '@/Services/apiClient';

export async function POST(req: Request) {
  const body = await req.json();

  const validation = loginScheme.safeParse(body);

  if (!validation.success) {
    return NextResponse.json(
      { error: validation.error.flatten().fieldErrors },
      { status: 400 }
    );
  }

  const { email, password } = validation.data;

  try {
    const response = await apiClient.post('/auth/login', { email, password });
    return NextResponse.json(response.data);
  } catch (error: any) {
    const errorMessage =
      error.response?.data?.error ||
      'email atau password yang anda masukkan salah aa';
    return NextResponse.json({ error: errorMessage }, { status: 400 });
  }
}
