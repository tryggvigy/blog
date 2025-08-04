import { codeToHtml } from 'shiki';

interface CodeBlockProps {
  children: string;
  className?: string;
}

export async function CodeBlock({ children, className }: CodeBlockProps) {
  // Extract language from className (e.g., "language-typescript" -> "typescript")
  const language = className?.replace('language-', '') || 'text';

  const html = await codeToHtml(children.trim(), {
    lang: language,
    theme: 'github-dark',
  });

  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}

// Sync version for inline code
export function InlineCode({ children }: { children: React.ReactNode }) {
  return (
    <code className="bg-inline-code-bg px-1 py-0.5 rounded text-sm border border-border-subtle">
      {children}
    </code>
  );
}
