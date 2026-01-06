import { InputHTMLAttributes, forwardRef, useId } from 'react';
import { cn } from '../../utils/cn';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  hint?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, hint, className, id, ...props }, ref) => {
    const autoId = useId();
    const inputId = id ?? autoId;

    return (
      <div className="flex flex-col gap-2">
        {label ? (
          <label htmlFor={inputId} className="text-sm font-semibold text-herb">
            {label}
          </label>
        ) : null}
        <input
          ref={ref}
          id={inputId}
          className={cn(
            'w-full rounded-xl border border-herb/20 bg-cream px-4 py-3 text-sm text-charcoal shadow-soft placeholder:text-charcoal/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold',
            className
          )}
          {...props}
        />
        {hint ? <p className="text-xs text-charcoal/60">{hint}</p> : null}
      </div>
    );
  }
);

Input.displayName = 'Input';
