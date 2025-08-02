import { getAllPosts, getAllTags } from '@/lib/mdx'
import PostCard from '@/components/blog/post-card'

export const metadata = {
  title: 'Blog | Tech Blog',
  description: 'Browse all blog posts about web development, programming, and technology',
}

export default function BlogPage() {
  const posts = getAllPosts()
  const tags = getAllTags()

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          All Posts
        </h1>
        <p className="text-gray-600">
          {posts.length} {posts.length === 1 ? 'post' : 'posts'} about web development and technology
        </p>
      </div>

      {tags.length > 0 && (
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Topics</h2>
          <div className="flex flex-wrap gap-2">
            {tags.map(tag => (
              <span
                key={tag}
                className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800 hover:bg-gray-200 transition-colors cursor-pointer"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      )}

      {posts.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-600 mb-4">No posts available yet.</p>
          <p className="text-sm text-gray-500">
            Posts will appear here once you add MDX files to the content/posts directory.
          </p>
        </div>
      )}
    </div>
  )
}