import { motion } from 'framer-motion'

export default function ProjectCard({ title, desc, link, tags = [], image }) {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="group block rounded-2xl border border-gray-800 bg-cardDark/70 hover:border-primary hover:shadow-glow transition overflow-hidden"
      whileHover={{ scale: 1.01 }}
    >
      {image && (
        <div className="h-40 w-full bg-black/60 overflow-hidden">
          <img src={image} alt={title} className="h-full w-full object-cover opacity-90 group-hover:opacity-100 transition" />
        </div>
      )}
      <div className="p-6">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-gray-400 mt-2">{desc}</p>
        {tags.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {tags.map(t => (
              <span key={t} className="text-xs px-2 py-1 rounded bg-black/40 border border-gray-800">{t}</span>
            ))}
          </div>
        )}
        <span className="inline-block mt-4 text-primary">View ↗</span>
      </div>
    </motion.a>
  )
}