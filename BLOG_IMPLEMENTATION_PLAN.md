# Personal Tech Blog Implementation Plan

## Project Overview
Build a cost-effective personal tech blog using Next.js 15, React 19, TypeScript, and file-based MDX content with minimal operational overhead.

## Tech Stack

### Core Stack
- **Framework:** Next.js 15 with App Router
- **React:** React 19 with Server Components  
- **Language:** TypeScript
- **Content:** File-based MDX (Git versioned)
- **Styling:** Tailwind CSS
- **Database:** MongoDB on fly.io (for metadata/comments)
- **Hosting:** fly.io (single instance)
- **Analytics:** Fly.io built-in analytics

### Simple Architecture
- **Content Storage:** MDX files committed to Git repository
- **Metadata:** MongoDB for search indexes, view counts, comments
- **Deployment:** Direct Git-based deployment to fly.io
- **SSL/CDN:** Fly.io native features (included)

## Implementation Phases

### Phase 1: Foundation Setup

#### 1.1 Project Initialization
```bash
npx create-next-app@latest tech-blog --typescript --tailwind --eslint --app
cd tech-blog
npm install react@rc react-dom@rc
npm install mongodb gray-matter reading-time date-fns
```

#### 1.2 Simple Project Structure
```
tech-blog/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   ├── blog/
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx
│   ├── api/
│   │   ├── views/route.ts
│   │   └── search/route.ts
│   └── not-found.tsx
├── components/
│   ├── ui/           # Basic UI components
│   ├── layout/       # Header, Footer
│   └── blog/         # Blog components
├── content/
│   └── posts/        # MDX blog posts (committed to Git)
├── lib/
│   ├── mdx.ts        # MDX processing
│   ├── db.ts         # MongoDB connection
│   ├── utils.ts      # Utilities
│   └── types.ts      # Types
├── public/
│   ├── images/
│   └── robots.txt
└── fly.toml          # Fly.io config
```

#### 1.3 Basic Security
- [ ] Environment variables for MongoDB
- [ ] Basic input validation
- [ ] HTTPS via fly.io (automatic)

### Phase 2: File-based Content System

#### 2.1 MDX Setup
```bash
npm install @next/mdx @mdx-js/loader @mdx-js/react @types/mdx
npm install remark-gfm rehype-highlight rehype-slug
```

#### 2.2 Simple Content Schema
```typescript
interface PostFrontmatter {
  title: string
  description: string
  date: string
  tags: string[]
  author: string
  image?: string
}
```

#### 2.3 MongoDB Integration
- [ ] MongoDB connection setup
- [ ] Post view tracking
- [ ] Simple search index
- [ ] Basic metadata storage

### Phase 3: Core Features

#### 3.1 Essential Components
- [ ] Header with navigation
- [ ] Footer
- [ ] Blog post layout
- [ ] Homepage with recent posts
- [ ] Basic 404 page

#### 3.2 Blog Functionality
- [ ] Article listing (`/blog`)
- [ ] Individual articles (`/blog/[slug]`)
- [ ] Tag filtering
- [ ] Simple search

### Phase 4: Styling

#### 4.1 Tailwind Setup
- [ ] Basic design tokens
- [ ] Dark/light mode toggle
- [ ] Responsive design
- [ ] Typography with @tailwindcss/typography

### Phase 5: Basic SEO & Performance

#### 5.1 SEO Essentials
- [ ] Dynamic page titles and descriptions
- [ ] Open Graph tags
- [ ] Basic sitemap
- [ ] RSS feed

#### 5.2 Performance
- [ ] Image optimization
- [ ] Basic caching headers
- [ ] Bundle optimization

### Phase 6: Deployment

#### 6.1 Fly.io Setup
```bash
flyctl launch
flyctl secrets set MONGODB_URI="your_connection_string"
```

#### 6.2 Configuration
- [ ] `fly.toml` configuration
- [ ] Environment variables
- [ ] Simple deployment workflow

## Content Workflow

### Writing Posts
1. Create new `.mdx` file in `content/posts/`
2. Add frontmatter with title, description, date, tags
3. Write content using MDX
4. Commit to Git and push to deploy

### MongoDB Usage
- **View Counts:** Track post popularity
- **Search Index:** Enable fast content search
- **Comments:** Optional future feature
- **Analytics:** Simple page view tracking

## Key Dependencies

```json
{
  "next": "^15.0.0",
  "react": "^19.0.0", 
  "react-dom": "^19.0.0",
  "typescript": "^5.0.0",
  "@next/mdx": "^15.0.0",
  "@mdx-js/loader": "^3.0.0",
  "@mdx-js/react": "^3.0.0",
  "mongodb": "^6.0.0",
  "gray-matter": "^4.0.0",
  "reading-time": "^1.5.0",
  "date-fns": "^2.30.0",
  "remark-gfm": "^4.0.0",
  "rehype-highlight": "^7.0.0",
  "tailwindcss": "^3.4.0",
  "@tailwindcss/typography": "^0.5.0"
}
```

## Cost Structure

### Fly.io Costs (Estimated)
- **Shared CPU VM:** $1.94/month (256MB RAM)
- **MongoDB:** $5-10/month (small cluster)
- **Total:** ~$7-12/month

### Alternative Free Tier Options
- Use Fly.io free allowance for small apps
- MongoDB Atlas free tier (512MB)
- **Total:** $0/month (within limits)

## Success Goals

- [ ] Fast loading blog (< 3s)
- [ ] Mobile-friendly
- [ ] Easy to write new posts
- [ ] Basic SEO optimization
- [ ] Simple analytics via fly.io
- [ ] Minimal maintenance overhead

## Implementation Timeline

**Week 1-2: Foundation**
1. Next.js setup with TypeScript/Tailwind
2. MDX integration and content structure
3. Basic MongoDB connection

**Week 3: Core Features**
4. Homepage and blog listing
5. Individual post pages
6. Basic styling and navigation

**Week 4: Polish & Deploy**
7. SEO optimization
8. Fly.io deployment
9. Write first blog posts

## Simple Backup Strategy

- **Content:** Git repository (automatic backup)
- **Analytics Data:** MongoDB export script
- **Images:** Committed to Git in public/ folder

---

*A simple, cost-effective personal blog with modern tech stack and minimal operational overhead.*