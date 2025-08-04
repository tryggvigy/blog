import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center text-text-secondary">
          <span>
            &copy; {new Date().getFullYear()}{' '}
            <Link
              href="https://bsky.app/profile/tryggvigy.bsky.social"
              className="text-accent"
            >
              Tryggvi Gylfason
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
