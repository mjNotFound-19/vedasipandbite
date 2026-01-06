import { cn } from '../../utils/cn';

interface FiltersProps {
  categories: string[];
  benefits: string[];
  selectedCategory: string;
  selectedBenefit: string;
  caffeineFreeOnly: boolean;
  sort: string;
  onCategoryChange: (value: string) => void;
  onBenefitChange: (value: string) => void;
  onCaffeineChange: (value: boolean) => void;
  onSortChange: (value: string) => void;
  onClear: () => void;
}

interface FilterPillProps {
  label: string;
  active: boolean;
  onClick: () => void;
}

const FilterPill = ({ label, active, onClick }: FilterPillProps) => (
  <button
    type="button"
    onClick={onClick}
    className={cn(
      'snap-start rounded-full border px-3 py-2 text-xs font-semibold uppercase tracking-wide transition duration-200 ease-luxe',
      active
        ? 'border-herb/30 bg-herb text-cream shadow-soft'
        : 'border-herb/15 bg-cream-dark text-herb hover:border-herb/30 hover:bg-cream'
    )}
  >
    {label}
  </button>
);

export const Filters = ({
  categories,
  benefits,
  selectedCategory,
  selectedBenefit,
  caffeineFreeOnly,
  sort,
  onCategoryChange,
  onBenefitChange,
  onCaffeineChange,
  onSortChange,
  onClear
}: FiltersProps) => {
  return (
    <div className="space-y-5 rounded-2xl border border-herb/10 bg-parchment/90 p-6 shadow-soft lg:p-7">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-sage-dark">Filters</p>
          <h3 className="text-lg font-semibold text-herb">Guide your ritual</h3>
        </div>
        <button
          type="button"
          onClick={onClear}
          className="text-xs font-semibold uppercase tracking-wide text-herb underline"
        >
          Reset
        </button>
      </div>

      <div className="space-y-3">
        <p className="text-[11px] font-semibold uppercase tracking-wide text-sage-dark">Category</p>
        <div className="no-scrollbar flex gap-2 overflow-x-auto pb-1 pt-1">
          <FilterPill label="All" active={!selectedCategory} onClick={() => onCategoryChange('')} />
          {categories.map((category) => (
            <FilterPill
              key={category}
              label={category}
              active={selectedCategory === category}
              onClick={() => onCategoryChange(category)}
            />
          ))}
        </div>
      </div>

      <div className="space-y-3">
        <p className="text-[11px] font-semibold uppercase tracking-wide text-sage-dark">Benefits</p>
        <div className="no-scrollbar flex snap-x gap-2 overflow-x-auto pb-1 pt-1">
          <FilterPill label="Any" active={!selectedBenefit} onClick={() => onBenefitChange('')} />
          {benefits.map((benefit) => (
            <FilterPill
              key={benefit}
              label={benefit}
              active={selectedBenefit === benefit}
              onClick={() => onBenefitChange(benefit)}
            />
          ))}
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <label className="inline-flex items-center gap-2 rounded-full border border-herb/15 bg-cream-dark px-3 py-2 text-sm text-charcoal">
          <input
            id="filter-caffeine"
            type="checkbox"
            checked={caffeineFreeOnly}
            onChange={(event) => onCaffeineChange(event.target.checked)}
            className="h-4 w-4 rounded border-herb/40 text-herb focus-visible:ring-gold"
          />
          <span className="text-sm">Caffeine-free only</span>
        </label>
        <div className="flex items-center gap-2">
          <label htmlFor="filter-sort" className="text-xs font-semibold uppercase tracking-wide text-herb">
            Sort
          </label>
          <select
            id="filter-sort"
            value={sort}
            onChange={(event) => onSortChange(event.target.value)}
            className="rounded-full border border-herb/20 bg-cream px-4 py-2 text-sm"
          >
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
          </select>
        </div>
      </div>
    </div>
  );
};

