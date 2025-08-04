import Link from 'next/link';
import { getAllPostsFrontmatter } from '@/lib/mdx';
import { formatDate } from '@/lib/utils';

export const metadata = {
  title: 'Tech Blog',
  description:
    'Browse all blog posts about web development, programming, and technology',
};

export default async function Home() {
  const posts = await getAllPostsFrontmatter();

  if (posts.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-text-secondary mb-4">No posts available yet.</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="space-y-8">
        {posts.map((post) => (
          <article key={post.slug} className="border-b border-border">
            <Link href={`/blog/${post.slug}`} className="block group pb-8">
              <h2 className="text-2xl font-semibold text-text-primary mb-2 group-hover:text-accent group-hover:underline transition-colors">
                {post.title}
              </h2>
              <p className="text-text-secondary mb-3">{post.description}</p>
              <time className="text-sm text-text-muted" dateTime={post.date}>
                {formatDate(post.date)}
              </time>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
