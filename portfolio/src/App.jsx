import { useEffect, useState } from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Section from './components/Section'
import ProjectCard from './components/ProjectCard'
import Footer from './components/Footer'
import projects from './data/projects'

export default function App() {
  // Persist dark mode (though default is dark with black background)
  const [theme, setTheme] = useState('dark')
  useEffect(() => {
    const saved = localStorage.getItem('theme') || 'dark'
    setTheme(saved)
    document.documentElement.classList.toggle('dark', saved === 'dark')
  }, [])

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    document.documentElement.classList.toggle('dark', next === 'dark')
    localStorage.setItem('theme', next)
  }

  return (
    <div className="bg-secondary text-textLight min-h-screen">
      <NavBar onToggleTheme={toggleTheme} theme={theme} />
      <main>
        <Hero />
        <Section id="projects" title="Featured Projects" subtitle="AI/ML • Forecasting • F1 Analytics">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map(p => (
              <ProjectCard key={p.title} {...p} />
            ))}
          </div>
        </Section>

        <Section id="about" title="About Me" subtitle="AI Researcher • F1 Data Scientist • Developer">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="space-y-4 text-gray-300">
              <p>
                I'm Manas Jha — I build intelligent systems and analytical dashboards that turn complex data into high‑impact decisions.
                My focus spans <strong>time‑series forecasting</strong>, <strong>supply‑chain analytics</strong>, and <strong>motorsport (F1) data</strong>.
              </p>
              <p>
                I love productionizing ideas: from forecasting pipelines and Grafana dashboards to race‑weekend predictors.
                Check out the projects below or connect via the links in the header.
              </p>
            </div>
            <div className="bg-cardDark/80 border border-gray-800 rounded-2xl p-6 backdrop-blur shadow-glow">
              <ul className="space-y-3 text-gray-200">
                <li>• 🧠 AI/ML: Transformers, TimesFM, XGBoost</li>
                <li>• 📦 Supply Chain: forecasting shipments, dashboards</li>
                <li>• 🏁 Motorsport: telemetry, race strategy predictions</li>
                <li>• 🛠️ Stack: Python, PyTorch, React, Vite, Tailwind</li>
              </ul>
            </div>
          </div>
        </Section>

        <Section id="contact" title="Contact" subtitle="Open to collaborations & opportunities">
          <div className="bg-cardDark/80 border border-gray-800 rounded-2xl p-6 shadow-glow">
            <p className="text-gray-300">
              Email: <a className="text-primary underline" href="mailto:manas@example.com">manas@example.com</a>
              <br/>
              GitHub: <a className="text-primary underline" href="https://github.com/mjNotFound-19" target="_blank" rel="noreferrer">mjNotFound-19</a>
              <br/>
              LinkedIn: <a className="text-primary underline" href="https://www.linkedin.com" target="_blank" rel="noreferrer">Profile</a>
            </p>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  )
}