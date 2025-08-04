import type { MDXComponents } from 'mdx/types';
import React from 'react';
import { CodeBlock, InlineCode } from './src/components/blog/code-block';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children, id, ...rest }) => (
      <a href={`#${id}`} className="hover:underline">
        <h1 className="text-4xl font-bold mb-6" id={id} {...rest}>
          {children}
        </h1>
      </a>
    ),
    h2: ({ children, id, ...rest }) => (
      <a href={`#${id}`} className="hover:underline">
        <h2 className="text-3xl font-semibold mb-4 mt-8" id={id} {...rest}>
          {children}
        </h2>
      </a>
    ),
    h3: ({ children, id, ...rest }) => (
      <a href={`#${id}`} className="hover:underline">
        <h3 className="text-2xl font-medium mb-3 mt-6" id={id} {...rest}>
          {children}
        </h3>
      </a>
    ),
    p: ({ children, ...rest }) => (
      <p className="mb-4 leading-relaxed" {...rest}>
        {children}
      </p>
    ),
    ul: ({ children, ...rest }) => (
      <ul className="mb-4 list-disc list-inside" {...rest}>
        {children}
      </ul>
    ),
    ol: ({ children, ...rest }) => (
      <ol className="mb-4 list-decimal list-inside" {...rest}>
        {children}
      </ol>
    ),
    li: ({ children, ...rest }) => (
      <li className="mb-1" {...rest}>
        {children}
      </li>
    ),
    blockquote: ({ children, ...rest }) => (
      <blockquote
        className="border-l-4 border-accent pl-4 my-4 italic text-secondary"
        {...rest}
      >
        {children}
      </blockquote>
    ),
    code: ({
      children,
      className,
    }: {
      children: React.ReactNode;
      className?: string;
    }) => {
      // Check if this is a code block (inside a pre tag) or inline code
      if (className?.startsWith('language-')) {
        return (
          <CodeBlock className={className}>{children as string}</CodeBlock>
        );
      }
      return <InlineCode>{children}</InlineCode>;
    },
    pre: ({ children }: { children: React.ReactNode }) => {
      // For code blocks, we let the CodeBlock component handle the styling
      if (
        React.isValidElement(children) &&
        // @ts-expect-error - children.props is not typed
        children.props?.className?.startsWith('language-')
      ) {
        return children;
      }
      // Fallback for other pre content
      return (
        <pre className="bg-code-bg text-text-primary p-4 rounded-lg border border-code-border overflow-x-auto my-4">
          {children}
        </pre>
      );
    },
    ...components,
  };
}
