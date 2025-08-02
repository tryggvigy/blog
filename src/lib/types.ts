export interface PostFrontmatter {
  title: string
  description: string
  date: string
  tags: string[]
  author: string
  image?: string
  published?: boolean
}

export interface BlogPost {
  slug: string
  frontmatter: PostFrontmatter
  content: string
  readingTime: string
}

export interface PostMetadata {
  slug: string
  views: number
  lastViewed: Date
  searchTerms: string[]
}