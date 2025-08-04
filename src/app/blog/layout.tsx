import { ViewTracker } from '@/components/blog/view-tracker';

interface BlogLayoutProps {
  children: React.ReactNode;
}

export default function BlogLayout({ children }: BlogLayoutProps) {
  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <ViewTracker />
      <div className="prose prose-lg max-w-none">{children}</div>
    </article>
  );
}
