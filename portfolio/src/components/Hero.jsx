import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[88vh] flex items-center justify-center overflow-hidden">
      {/* Background gradient glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[90vw] h-[90vw] rounded-full
                        bg-[radial-gradient(circle_at_center,rgba(0,174,239,0.18),transparent_60%)]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight bg-gradient-to-r from-primary via-white to-primary bg-clip-text text-transparent"
        >
          Building intelligent systems
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-5 text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto"
        >
          AI/ML • Time‑Series Forecasting • F1 Analytics
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-8 flex justify-center gap-3"
        >
          <a href="#projects" className="px-5 py-3 rounded-xl bg-primary text-black font-semibold shadow-glow hover:brightness-110 transition">
            View Projects
          </a>
          <a href="#contact" className="px-5 py-3 rounded-xl border border-gray-800 hover:border-primary">
            Contact
          </a>
        </motion.div>
      </div>
    </section>
  )
}