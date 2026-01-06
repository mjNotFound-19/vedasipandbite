export const TailwindSanityTest = () => (
  <div className="pointer-events-none fixed bottom-4 right-4 z-100">
    <div className="pointer-events-auto rounded-2xl border border-herb/20 bg-cream/90 px-4 py-3 shadow-soft backdrop-blur">
      <p className="text-xs font-semibold uppercase tracking-wide text-herb-dark">Tailwind sanity test</p>
      <div className="mt-2 flex items-center gap-2 text-sm text-charcoal/80">
        <span className="inline-flex h-2.5 w-2.5 rounded-full bg-herb shadow-outline" />
        <span className="font-medium text-charcoal">Tailwind classes are being applied.</span>
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
        <span className="rounded-full bg-herb/10 px-3 py-1 text-xs font-semibold text-herb-dark">bg-herb/10</span>
        <span className="rounded-full bg-gold px-3 py-1 text-xs font-semibold text-cream shadow-lift">gold pill</span>
        <span className="rounded-full border border-charcoal/20 px-3 py-1 text-xs font-medium text-charcoal">rounded</span>
      </div>
    </div>
  </div>
);
