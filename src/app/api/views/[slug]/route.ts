import { incrementViews } from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    await incrementViews(slug);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Failed to increment views:', error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
