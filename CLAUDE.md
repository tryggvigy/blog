# Personal Blog

A minimalist personal blog built with Next.js 15, React Server Components, Tailwind CSS 4, and MDX.

## Tech Stack

- **Next.js 15** with App Router and React 19
- **React Server Components** for optimal performance
- **Tailwind CSS 4** for styling
- **MDX** for content with file-system based routing
- **MongoDB** for analytics and view tracking
- **Shiki** for syntax highlighting
- **TypeScript** for type safety

## Project Structure

```
src/
├── app/
│   ├── blog/          # Blog posts as page.mdx files
│   │   ├── post-name/
│   │   │   └── page.mdx
│   │   ├── layout.tsx
│   │   └── page.tsx   # Blog listing page
│   ├── api/           # API routes
│   │   ├── search/    # Search functionality
│   │   └── views/     # View tracking
│   └── layout.tsx
├── components/
│   ├── blog/          # Blog-specific components
│   └── layout/        # Layout components
└── lib/
    ├── mdx.ts         # MDX utilities and post management
    ├── types.ts       # TypeScript definitions
    └── utils.ts
```

## Adding New Blog Posts

1. Create a new directory under `src/app/blog/`
2. Add a `page.mdx` file with frontmatter:
   ```mdx
   export const postMetadata = {
     title: 'Your Post Title',
     description: 'Post description',
     date: '2024-01-15',
     author: 'Your Name',
     tags: ['tag1', 'tag2'],
     published: true,
   };
   
   # Your Post Title
   
   Your content here...
   ```
3. Update `src/lib/mdx.ts` to import and include the new post

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Format code
npm run format

# Lint code
npm run lint
```

## Key Features

- **File-system routing** for blog posts
- **Server-side search** functionality
- **View tracking** with MongoDB
- **Syntax highlighting** with Shiki
- **Custom MDX components** for rich content
- **Responsive design** with Tailwind CSS
- **SEO optimization** with Next.js metadata API

## MDX Configuration

The blog uses custom MDX components defined in `mdx-components.tsx` for:
- Styled headings with anchor links
- Code blocks with syntax highlighting
- Custom typography and spacing
- Responsive design elements

Posts are automatically discovered and sorted by date, with support for draft posts via the `published` frontmatter field.