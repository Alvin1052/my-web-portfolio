import { NextResponse } from 'next/server';

import { formScheme } from '@/app/lib/validation/form';
import apiClient from '@/Services/apiClient';

export async function POST(req: Request) {
  const body = await req.json();
  const validation = formScheme.safeParse(body);

  if (!validation.success) {
    return NextResponse.json(
      { error: validation.error.flatten().fieldErrors },
      { status: 400 }
    );
  }

  const { name, email, message } = validation.data;
  try {
    const response = await apiClient.post('/auth/form', {
      name,
      email,
      message,
    }); // '/auth/form' ini diambil berdasarkan Panjangan dari Main Url
    return NextResponse.json(response.data);
  } catch (error: any) {
    const errorMessage =
      error.response?.data?.error || 'validation error in Server-Side';
    return NextResponse.json({ errorMessage }, { status: 400 });
  }
}
