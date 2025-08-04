import Link from 'next/link';

export default function Header() {
  return (
    <header className="border-b border-border bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link
            href="/"
            className="text-xl font-bold text-text-primary hover:text-accent transition-colors"
          >
            by Tryggvi
          </Link>

          <nav className="flex space-x-8">
            <Link
              href="/"
              className="text-text-secondary hover:text-text-primary transition-colors"
            >
              Home
            </Link>
            <Link
              href="/blog"
              className="text-text-secondary hover:text-text-primary transition-colors"
            >
              Blog
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
