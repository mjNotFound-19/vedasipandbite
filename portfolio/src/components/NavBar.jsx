import { Github, Linkedin, Mail, Moon, Sun } from 'lucide-react'
import { motion } from 'framer-motion'

export default function NavBar({ onToggleTheme, theme }) {
  return (
    <header className="sticky top-0 z-50 bg-black/70 backdrop-blur border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#top" className="font-extrabold text-xl tracking-tight">
          <span className="text-textLight">Manas</span>
          <span className="text-primary">.ai</span>
        </a>

        <nav className="hidden md:flex items-center gap-6 text-gray-300">
          <a href="#projects" className="hover:text-primary transition">Projects</a>
          <a href="#about" className="hover:text-primary transition">About</a>
          <a href="#contact" className="hover:text-primary transition">Contact</a>
        </nav>

        <div className="flex items-center gap-3">
          <motion.a whileHover={{ scale: 1.1 }} href="mailto:manas@example.com" className="p-2 rounded-lg border border-gray-800 hover:border-primary">
            <Mail size={18} />
          </motion.a>
          <motion.a whileHover={{ scale: 1.1 }} href="https://github.com/mjNotFound-19" target="_blank" rel="noreferrer" className="p-2 rounded-lg border border-gray-800 hover:border-primary">
            <Github size={18} />
          </motion.a>
          <motion.a whileHover={{ scale: 1.1 }} href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="p-2 rounded-lg border border-gray-800 hover:border-primary">
            <Linkedin size={18} />
          </motion.a>

          <button
            onClick={onToggleTheme}
            className="p-2 rounded-lg border border-gray-800 hover:border-primary ml-2"
            aria-label="Toggle theme"
            title="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </div>
    </header>
  )
}