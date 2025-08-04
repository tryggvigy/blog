import type { BlogPost } from './types';

// Import all posts dynamically - this will need to be updated when adding new posts
export async function getAllPosts(): Promise<BlogPost[]> {
  const posts: BlogPost[] = [];

  try {
    // Import post metadata from each MDX file
    const { postMetadata: post2Meta } = await import(
      '@/app/blog/post2/page.mdx'
    );
    const { postMetadata: nextjsMeta } = await import(
      '@/app/blog/getting-started-with-nextjs/page.mdx'
    );
    const { postMetadata: testMeta } = await import(
      '@/app/blog/test-plugins/page.mdx'
    );

    // Add all posts
    const allPosts = [
      { slug: 'post2', metadata: post2Meta },
      { slug: 'getting-started-with-nextjs', metadata: nextjsMeta },
      { slug: 'test-plugins', metadata: testMeta },
    ];

    // Filter published posts and create BlogPost objects
    allPosts.forEach(({ slug, metadata }) => {
      if (metadata.published !== false) {
        posts.push({
          slug,
          frontmatter: metadata,
          content: '', // We don't need content for listing
          readingTime: '3 min read', // Could calculate this if needed
        });
      }
    });

    // Sort by date
    posts.sort((a, b) => {
      return (
        new Date(b.frontmatter.date).getTime() -
        new Date(a.frontmatter.date).getTime()
      );
    });
  } catch (error) {
    console.error('Error loading posts:', error);
  }

  return posts;
}

export async function getAllTags(): Promise<string[]> {
  const posts = await getAllPosts();
  const tags = new Set<string>();

  posts.forEach((post) => {
    post.frontmatter.tags?.forEach((tag) => tags.add(tag));
  });

  return Array.from(tags).sort();
}

export async function searchPosts(query: string): Promise<BlogPost[]> {
  const posts = await getAllPosts();
  const lowercaseQuery = query.toLowerCase();

  return posts.filter(
    (post) =>
      post.frontmatter.title.toLowerCase().includes(lowercaseQuery) ||
      post.frontmatter.description.toLowerCase().includes(lowercaseQuery) ||
      post.frontmatter.tags.some((tag) =>
        tag.toLowerCase().includes(lowercaseQuery)
      )
  );
}
