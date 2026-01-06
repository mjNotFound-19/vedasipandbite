import { ReactNode, useId, useState } from 'react';
import { cn } from '../../utils/cn';

interface TabItem {
  label: string;
  content: ReactNode;
}

interface TabsProps {
  tabs: TabItem[];
  className?: string;
}

export const Tabs = ({ tabs, className }: TabsProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const baseId = useId();

  return (
    <div className={cn('rounded-2xl border border-herb/10 bg-parchment p-6', className)}>
      <div role="tablist" className="flex flex-wrap gap-3">
        {tabs.map((tab, index) => {
          const tabId = `${baseId}-tab-${index}`;
          const panelId = `${baseId}-panel-${index}`;
          const isActive = activeIndex === index;
          return (
            <button
              key={tab.label}
              id={tabId}
              role="tab"
              aria-selected={isActive}
              aria-controls={panelId}
              tabIndex={isActive ? 0 : -1}
              className={cn(
                'rounded-pill px-4 py-2 text-xs font-semibold uppercase tracking-wide transition duration-250 ease-luxe',
                isActive
                  ? 'bg-herb text-cream shadow-soft'
                  : 'border border-herb/15 text-herb hover:bg-cream'
              )}
              type="button"
              onClick={() => setActiveIndex(index)}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
      <div className="mt-6">
        {tabs.map((tab, index) => (
          <div
            key={tab.label}
            id={`${baseId}-panel-${index}`}
            role="tabpanel"
            aria-labelledby={`${baseId}-tab-${index}`}
            hidden={activeIndex !== index}
            className="text-sm text-charcoal/70"
          >
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
};

