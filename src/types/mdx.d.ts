declare module '*.mdx' {
  import type { PostFrontmatter } from '@/lib/types';

  const Component: React.ComponentType;
  export const postMetadata: PostFrontmatter;
  export const metadata: {
    title: string;
    description: string;
    openGraph?: {
      title: string;
      description: string;
      type: string;
      publishedTime: string;
      authors: string[];
      tags: string[];
    };
  };

  export default Component;
}
