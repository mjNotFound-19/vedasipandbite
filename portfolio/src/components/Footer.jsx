export default function Footer() {
  return (
    <footer className="border-t border-gray-800 py-8 mt-10">
      <div className="max-w-6xl mx-auto px-6 text-sm text-gray-500 flex flex-col sm:flex-row gap-3 sm:items-center justify-between">
        <p>© {new Date().getFullYear()} Manas Jha. All rights reserved.</p>
        <p>
          Built with <a className="text-primary underline" href="https://vitejs.dev/" target="_blank" rel="noreferrer">Vite</a>,{' '}
          <a className="text-primary underline" href="https://react.dev/" target="_blank" rel="noreferrer">React</a> &{' '}
          <a className="text-primary underline" href="https://tailwindcss.com/" target="_blank" rel="noreferrer">Tailwind</a>.
        </p>
      </div>
    </footer>
  )
}