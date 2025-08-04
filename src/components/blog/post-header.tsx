import { Frontmatter } from '@/lib/types';
import { formatDate } from '@/lib/utils';

export function PostHeader({ title, description, date, author }: Frontmatter) {
  return (
    <header className="mb-8">
      <h1 className="text-4xl font-bold text-accent mb-4">{title}</h1>

      <div className="flex items-center text-text-secondary text-sm mb-4">
        <time dateTime={date}>{formatDate(date)}</time>
        <span className="mx-2">•</span>
        <span>by {author}</span>
      </div>

      <p className="text-xl text-text-secondary mb-6">{description}</p>
    </header>
  );
}
