import { NextRequest, NextResponse } from 'next/server';
import { searchPostsFrontmatter } from '@/lib/mdx';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get('q');

    if (!query || query.trim().length === 0) {
      return NextResponse.json(
        { error: 'Search query is required' },
        { status: 400 }
      );
    }

    // Use file-based search
    const results = await searchPostsFrontmatter(query.trim());

    return NextResponse.json({
      query,
      results: results.map((post) => ({
        slug: post.slug,
        title: post.frontmatter.title,
        description: post.frontmatter.description,
        date: post.frontmatter.date,
        tags: post.frontmatter.tags,
      })),
    });
  } catch (error) {
    console.error('Error searching posts:', error);
    return NextResponse.json(
      { error: 'Failed to search posts' },
      { status: 500 }
    );
  }
}
