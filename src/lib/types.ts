export interface PostFrontmatter {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  author: string;
  image?: string;
  published?: boolean;
}

export interface BlogPost {
  slug: string;
  frontmatter: PostFrontmatter;
  content: string;
}

export type ListingBlogPost = Omit<BlogPost, 'content'>;
