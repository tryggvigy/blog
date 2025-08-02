import type { MDXComponents } from 'mdx/types'

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
      <blockquote className="border-l-4 border-blue-500 pl-4 my-4 italic">{children}</blockquote>
    ),
    code: ({ children }) => (
      <code className="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded text-sm">{children}</code>
    ),
    pre: ({ children }) => (
      <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto my-4">{children}</pre>
    ),
    ...components,
  }
}