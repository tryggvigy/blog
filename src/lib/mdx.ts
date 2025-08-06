import type { Frontmatter } from './types';
import { postMetadata as cssLayerOrderMeta } from '@/app/blog/css-layer-order-misconception/page.mdx';
import { postMetadata as post2Meta } from '@/app/blog/post2/page.mdx';
import { postMetadata as designSystemsMeta } from '@/app/blog/thoughts-on-design-systems/page.mdx';
import { postMetadata as marqueeMeta } from '@/app/blog/performant-marquee-component/page.mdx';

const allPosts = [
  marqueeMeta,
  designSystemsMeta,
  post2Meta,
  cssLayerOrderMeta,
] satisfies Array<Frontmatter>;

// Import all posts dynamically - this will need to be updated when adding new posts
export async function getAllPostsFrontmatter(): Promise<Array<Frontmatter>> {
  const posts: Frontmatter[] = [];

  try {
    // Filter published posts
    allPosts.forEach((post) => {
      if (post.published !== false) {
        posts.push(post);
      }
    });

    // Sort by date
    posts.sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
  } catch (error) {
    console.error('Error loading posts:', error);
  }

  return posts;
}

export async function getAllTags(): Promise<string[]> {
  const posts = await getAllPostsFrontmatter();
  const tags = new Set<string>();

  posts.forEach((post) => {
    post.tags?.forEach((tag) => tags.add(tag));
  });

  return Array.from(tags).sort();
}

export async function searchPostsFrontmatter(
  query: string
): Promise<Frontmatter[]> {
  const posts = await getAllPostsFrontmatter();
  const lowercaseQuery = query.toLowerCase();

  return posts.filter(
    (post) =>
      post.title.toLowerCase().includes(lowercaseQuery) ||
      post.description.toLowerCase().includes(lowercaseQuery) ||
      post.tags.some((tag) => tag.toLowerCase().includes(lowercaseQuery))
  );
}
