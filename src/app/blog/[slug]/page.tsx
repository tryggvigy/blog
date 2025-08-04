import { notFound } from 'next/navigation'
import { getAllPosts, getPostBySlug } from '@/lib/mdx'
import { formatDate } from '@/lib/utils'
import { incrementViews } from '@/lib/db'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { useMDXComponents } from '../../../../mdx-components'
import { BlogPost } from '@/lib/types'

interface BlogPostPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return {
    title: `${post.frontmatter.title} | Tech Blog`,
    description: post.frontmatter.description,
    openGraph: {
      title: post.frontmatter.title,
      description: post.frontmatter.description,
      type: 'article',
      publishedTime: post.frontmatter.date,
      authors: [post.frontmatter.author],
      tags: post.frontmatter.tags,
    },
  }
}

function BlogPostPageInner({ post }: { post: BlogPost }) {
  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-text-primary mb-4">
          {post.frontmatter.title}
        </h1>

        <div className="flex items-center text-text-secondary text-sm mb-4">
          <time dateTime={post.frontmatter.date}>
            {formatDate(post.frontmatter.date)}
          </time>
          <span className="mx-2">•</span>
          <span>{post.readingTime}</span>
          <span className="mx-2">•</span>
          <span>by {post.frontmatter.author}</span>
        </div>

        <p className="text-xl text-text-secondary mb-6">
          {post.frontmatter.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {post.frontmatter.tags.map(tag => (
            <span
              key={tag}
              className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-accent-light text-text-primary"
            >
              {tag}
            </span>
          ))}
        </div>
      </header>

      <div className="prose prose-lg max-w-none">
        <MDXRemote source={post.content} components={useMDXComponents({})} />
      </div>
    </article>
  )
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  // Increment view count (but don't await it to avoid blocking the page)
  incrementViews(slug).catch(console.error)

  return <BlogPostPageInner post={post} />
}