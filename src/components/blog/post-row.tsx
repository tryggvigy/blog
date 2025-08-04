import Link from 'next/link';
import type { ListingBlogPost } from '@/lib/types';

interface PostRowProps {
  post: ListingBlogPost;
}

export default function PostRow({ post }: PostRowProps) {
  return (
    <article className="bg-surface rounded-lg border border-border p-6 hover:bg-surface-hover transition-all">
      <Link href={`/blog/${post.slug}`} className="block">
        <h2 className="text-xl font-semibold text-text-primary mb-2 hover:text-accent transition-colors">
          {post.frontmatter.title}
        </h2>
        <p className="text-text-secondary mb-4 line-clamp-3">
          {post.frontmatter.description}
        </p>
        <div className="flex items-center justify-between text-sm text-text-muted">
          <div className="flex flex-wrap gap-2">
            {post.frontmatter.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-accent-light text-text-primary"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </article>
  );
}
