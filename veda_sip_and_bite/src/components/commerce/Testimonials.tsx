const testimonials = [
  {
    quote:
      '"The nettle ritual feels like a reset for my body and mind - crisp, earthy, and deeply nourishing."',
    name: 'Aditi R.',
    title: 'Ayurvedic practitioner, Pune'
  },
  {
    quote:
      '"The packaging and calmness of the experience make it feel like a boutique wellness retreat at home."',
    name: 'Nisha K.',
    title: 'Creative director, Mumbai'
  },
  {
    quote:
      '"I love the thoughtful sourcing notes. It feels like a brand that honors the land and the people."',
    name: 'Rohan M.',
    title: 'Holistic chef, Delhi'
  }
];

export const Testimonials = () => (
  <div className="grid gap-6 md:grid-cols-3">
    {testimonials.map((item) => (
      <figure
        key={item.name}
        className="group relative overflow-hidden rounded-2xl border border-herb/10 bg-parchment p-6 shadow-soft transition duration-250 ease-luxe hover:-translate-y-1 hover:shadow-lift"
      >
        <div className="pointer-events-none absolute right-4 top-4 text-gold/40">
          <svg aria-hidden="true" width="26" height="20" viewBox="0 0 32 24" fill="currentColor">
            <path d="M11.5 0C5.2 3.6.5 10.1.5 17.5c0 3.7 2.8 6.5 6.4 6.5 4 0 6.8-2.9 6.8-6.9 0-4.2-2.7-6.9-6.8-6.9-.8 0-1.6.1-2.3.3C5.3 7.1 7.9 3.4 11.5 0Zm16 0C21.2 3.6 16.5 10.1 16.5 17.5c0 3.7 2.8 6.5 6.4 6.5 4 0 6.8-2.9 6.8-6.9 0-4.2-2.7-6.9-6.8-6.9-.8 0-1.6.1-2.3.3C21.3 7.1 23.9 3.4 27.5 0Z" />
          </svg>
        </div>
        <blockquote className="text-sm text-charcoal/75">{item.quote}</blockquote>
        <figcaption className="mt-4 text-xs font-semibold uppercase tracking-wide text-herb">
          {item.name}
          <span className="mt-1 block text-[11px] font-normal text-charcoal/60">{item.title}</span>
        </figcaption>
        <span className="mt-4 inline-flex rounded-pill bg-cream-dark px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-herb">
          Ritual verified
        </span>
      </figure>
    ))}
  </div>
);

