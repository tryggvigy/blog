import type { MDXComponents } from 'mdx/types'
import React from 'react'
import { CodeBlock, InlineCode } from './src/components/blog/code-block'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => <h1 className="text-4xl font-bold mb-6">{children}</h1>,
    h2: ({ children }) => <h2 className="text-3xl font-semibold mb-4 mt-8">{children}</h2>,
    h3: ({ children }) => <h3 className="text-2xl font-medium mb-3 mt-6">{children}</h3>,
    p: ({ children }) => <p className="mb-4 leading-relaxed">{children}</p>,
    ul: ({ children }) => <ul className="mb-4 list-disc list-inside">{children}</ul>,
    ol: ({ children }) => <ol className="mb-4 list-decimal list-inside">{children}</ol>,
    li: ({ children }) => <li className="mb-1">{children}</li>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-accent pl-4 my-4 italic text-text-secondary">{children}</blockquote>
    ),
    code: ({ children, className }: { children: React.ReactNode; className?: string }) => {
      // Check if this is a code block (inside a pre tag) or inline code
      if (className?.startsWith('language-')) {
        return <CodeBlock className={className}>{children as string}</CodeBlock>
      }
      return <InlineCode>{children}</InlineCode>
    },
    pre: ({ children }: { children: React.ReactNode }) => {
      // For code blocks, we let the CodeBlock component handle the styling
      if (React.isValidElement(children) && children.props?.className?.startsWith('language-')) {
        return children
      }
      // Fallback for other pre content
      return (
        <pre className="bg-code-bg text-text-primary p-4 rounded-lg border border-code-border overflow-x-auto my-4">{children}</pre>
      )
    },
    ...components,
  }
}