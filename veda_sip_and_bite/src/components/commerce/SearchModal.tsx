import { useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { products } from '../../data/products';
import { Modal } from '../ui/Modal';
import { Input } from '../ui/Input';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchModal = ({ isOpen, onClose }: SearchModalProps) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const results = useMemo(() => {
    const term = query.trim().toLowerCase();
    if (!term) {
      return [];
    }
    return products.filter((product) => {
      const haystack = [
        product.name,
        product.tagline,
        product.category,
        ...product.benefits
      ]
        .join(' ')
        .toLowerCase();
      return haystack.includes(term);
    });
  }, [query]);

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Search the collection"
      description="Type to discover teas, bites, and rituals."
      initialFocusRef={inputRef}
    >
      <div className="space-y-6">
        <Input
          ref={inputRef}
          label="Search"
          placeholder="Search by name, benefit, or ingredient"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        <div className="space-y-3">
          {query.length === 0 ? (
            <p className="text-sm text-charcoal/60">Start typing to explore the catalog.</p>
          ) : results.length === 0 ? (
            <p className="text-sm text-charcoal/60">No matches found. Try a different term.</p>
          ) : (
            results.map((product) => (
              <Link
                key={product.id}
                to={`/product/${product.id}`}
                onClick={onClose}
                className="flex items-center justify-between rounded-xl border border-herb/10 bg-cream px-4 py-3 text-sm text-charcoal transition duration-250 ease-luxe hover:border-herb/30"
              >
                <span>
                  <span className="font-semibold text-herb">{product.name}</span>
                  <span className="ml-2 text-xs text-charcoal/60">{product.category}</span>
                </span>
                <span className="text-xs text-charcoal/50">View</span>
              </Link>
            ))
          )}
        </div>
      </div>
    </Modal>
  );
};
