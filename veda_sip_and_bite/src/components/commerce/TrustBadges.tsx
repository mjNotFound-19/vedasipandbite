const badges = [
  'Small-batch crafted in India',
  'Plastic-conscious packaging',
  'Herbalist-approved blends',
  'FSSAI # 21525083009062'
];

export const TrustBadges = () => (
  <div className="grid gap-4 md:grid-cols-2">
    {badges.map((badge) => (
      <div key={badge} className="rounded-2xl border border-herb/10 bg-cream p-4 text-xs font-semibold uppercase tracking-wide text-herb">
        {badge}
      </div>
    ))}
  </div>
);

