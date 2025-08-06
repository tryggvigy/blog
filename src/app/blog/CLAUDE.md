This is a directory of `.mdx` files that represent the blog posts.

## Instructions

Start every blog post with this:

```mdx
import { PostHeader } from '@/components/blog/post-header';

export const postMetadata = {
  slug: 'post-slug',
  title: 'Post Title',
  description: 'Post description',
  date: 'Todays date in YYYY-MM-DD format',
  author: 'Tryggvi Gylfason',
  tags: ['tag1', 'tag2', 'tag3'],
  published: true,
};

export const metadata = {
  title: postMetadata.title,
  description: postMetadata.description,
  openGraph: {
    title: postMetadata.title,
    description: postMetadata.description,
    type: 'article',
    publishedTime: postMetadata.date,
    authors: [postMetadata.author],
    tags: postMetadata.tags,
  },
};

<PostHeader {...postMetadata} />
```

Where postMetadata is the frontmatter of the post and satisfies the Frontmatter type.
Fill in the frontmatter with the correct values.

IMPORTANT:

- Print width is 50 characters to make code blocks easier to read on mobile devices.
- NEVER use en dashes, or em dashes
- NEVER use emojis in the blog post headings
- Write in a conversational, personal tone - avoid corporate/marketing language
- Use specific examples and personal experiences when possible
- Avoid overly structured lists unless they serve a clear purpose
- Don't use phrases like "In this post, I'll explore..." or "Let's dive into..."
- Keep sentences varied in length - mix short and long
- Use contractions naturally (don't, can't, won't)
- Avoid buzzwords and jargon unless necessary for the topic
- Write conclusions that feel natural, not summarized
- Use "I" and personal voice rather than third person
- Don't end posts with call-to-action phrases
- I am a senior engineer working at a big tech company with over 10 years of experience. I want to avoid AI slop, and low quality or entry-level tutorial content.
