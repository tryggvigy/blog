export interface Frontmatter {
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
  frontmatter: Frontmatter;
  content: string;
}
