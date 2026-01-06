import { ReactNode, useId, useState } from 'react';
import { cn } from '../../utils/cn';

interface AccordionItem {
  title: string;
  content: ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
  className?: string;
}

export const Accordion = ({ items, className }: AccordionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const baseId = useId();

  return (
    <div className={cn('divide-y divide-herb/15 rounded-2xl border border-herb/10', className)}>
      {items.map((item, index) => {
        const panelId = `${baseId}-panel-${index}`;
        const triggerId = `${baseId}-trigger-${index}`;
        const isOpen = openIndex === index;

        return (
          <div key={item.title} className="p-5">
            <button
              id={triggerId}
              type="button"
              className="flex w-full items-center justify-between text-left text-base font-semibold text-herb"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => setOpenIndex(isOpen ? null : index)}
            >
              <span>{item.title}</span>
              <span className={cn('text-xl transition', isOpen ? 'rotate-45' : '')}>+</span>
            </button>
            <div
              id={panelId}
              role="region"
              aria-labelledby={triggerId}
              className={cn('mt-3 text-sm text-charcoal/70', isOpen ? 'block' : 'hidden')}
            >
              {item.content}
            </div>
          </div>
        );
      })}
    </div>
  );
};

