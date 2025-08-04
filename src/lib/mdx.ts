import type { ListingBlogPost } from './types';
import { postMetadata as cssLayerOrderMeta } from '@/app/blog/css-layer-order-misconception/page.mdx';
import { postMetadata as post2Meta } from '@/app/blog/post2/page.mdx';
import { postMetadata as designSystemsMeta } from '@/app/blog/thoughts-on-design-systems/page.mdx';

const allPosts = [
  { metadata: designSystemsMeta },
  { metadata: post2Meta },
  { metadata: cssLayerOrderMeta },
];

// Import all posts dynamically - this will need to be updated when adding new posts
export async function getAllPosts(): Promise<ListingBlogPost[]> {
  const posts: ListingBlogPost[] = [];

  try {
    // Filter published posts and create BlogPost objects
    allPosts.forEach(({ metadata }) => {
      if (metadata.published !== false) {
        posts.push({
          slug: metadata.slug,
          frontmatter: metadata,
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

export async function searchPosts(query: string): Promise<ListingBlogPost[]> {
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
