import { codeToHtml } from 'shiki';
import { transformerNotationHighlight } from '@shikijs/transformers';

interface CodeBlockProps {
  children: string;
  className?: string;
  lang?: string;
}

export async function CodeBlock({ children, className, lang }: CodeBlockProps) {
  // Extract language from className (e.g., "language-typescript" -> "typescript")
  const language = lang || className?.replace('language-', '') || 'text';

  const html = await codeToHtml(children.trim(), {
    lang: language,
    theme: 'tokyo-night',
    transformers: [transformerNotationHighlight()],
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
