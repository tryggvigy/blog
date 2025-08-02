import { NextRequest, NextResponse } from 'next/server'
import { incrementViews, getPostViews } from '@/lib/db'

export async function POST(request: NextRequest) {
  try {
    const { slug } = await request.json()
    
    if (!slug || typeof slug !== 'string') {
      return NextResponse.json(
        { error: 'Invalid slug provided' },
        { status: 400 }
      )
    }

    await incrementViews(slug)
    
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error incrementing views:', error)
    return NextResponse.json(
      { error: 'Failed to increment views' },
      { status: 500 }
    )
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const slug = searchParams.get('slug')
    
    if (!slug) {
      return NextResponse.json(
        { error: 'Slug parameter is required' },
        { status: 400 }
      )
    }

    const views = await getPostViews(slug)
    
    return NextResponse.json({ slug, views })
  } catch (error) {
    console.error('Error getting views:', error)
    return NextResponse.json(
      { error: 'Failed to get views' },
      { status: 500 }
    )
  }
}