import { NextRequest, NextResponse } from 'next/server'
import { searchPosts } from '@/lib/db'
import { getAllPosts } from '@/lib/mdx'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const query = searchParams.get('q')
    
    if (!query || query.trim().length === 0) {
      return NextResponse.json(
        { error: 'Search query is required' },
        { status: 400 }
      )
    }

    // Try MongoDB search first
    let matchingSlugs = await searchPosts(query.trim())
    
    // If MongoDB search returns no results or fails, fallback to file-based search
    if (matchingSlugs.length === 0) {
      const allPosts = getAllPosts()
      matchingSlugs = allPosts
        .filter(post => {
          const searchText = `${post.frontmatter.title} ${post.frontmatter.description} ${post.frontmatter.tags.join(' ')} ${post.content}`.toLowerCase()
          return searchText.includes(query.toLowerCase())
        })
        .map(post => post.slug)
    }

    // Get the actual post data for the matching slugs
    const allPosts = getAllPosts()
    const results = allPosts.filter(post => matchingSlugs.includes(post.slug))
    
    return NextResponse.json({
      query,
      results: results.map(post => ({
        slug: post.slug,
        title: post.frontmatter.title,
        description: post.frontmatter.description,
        date: post.frontmatter.date,
        tags: post.frontmatter.tags,
        readingTime: post.readingTime
      }))
    })
  } catch (error) {
    console.error('Error searching posts:', error)
    return NextResponse.json(
      { error: 'Failed to search posts' },
      { status: 500 }
    )
  }
}