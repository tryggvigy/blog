import Link from 'next/link'
import { getAllPosts } from '@/lib/mdx'
import PostCard from '@/components/blog/post-card'

export default function Home() {
  const posts = getAllPosts().slice(0, 3)

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Welcome to Tech Blog
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Exploring web development, programming, and technology insights.
        </p>
      </div>

      <section className="mb-12">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-semibold text-gray-900">
            Recent Posts
          </h2>
          <Link
            href="/blog"
            className="text-blue-600 hover:text-blue-700 font-medium"
          >
            View all posts →
          </Link>
        </div>

        {posts.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-600 mb-4">No posts yet. Check back soon!</p>
            <p className="text-sm text-gray-500">
              Posts will appear here once you add MDX files to the content/posts directory.
            </p>
          </div>
        )}
      </section>
    </div>
  )
}
