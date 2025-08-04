import { getAllPosts } from '@/lib/mdx';
import PostRow from '@/components/blog/post-row';

export const metadata = {
  title: 'Blog | Tech Blog',
  description:
    'Browse all blog posts about web development, programming, and technology',
};

export default async function BlogPage() {
  const posts = await getAllPosts();

  if (posts.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-text-secondary mb-4">No posts available yet.</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid gap-6 md:grid-cols-2">
        {posts.map((post) => (
          <PostRow key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
