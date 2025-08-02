export default function Footer() {
  return (
    <footer className="border-t bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} Tech Blog. Built with Next.js.</p>
        </div>
      </div>
    </footer>
  )
}