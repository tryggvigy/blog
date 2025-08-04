declare module '*.mdx' {
  import type { Frontmatter } from '@/lib/types';

  const Component: React.ComponentType;
  export const postMetadata: Frontmatter;
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
