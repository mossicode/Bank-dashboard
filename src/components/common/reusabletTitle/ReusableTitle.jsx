import { cn } from '../../../utils/common.js';
export default function ReusableTitle({ className = '', children }) {
  return (
    <div
      className={cn(
        'text-base text-dark-black font-inter font-medium tracking-0 max-lg:text-xs',
        className
      )}
    >
      {children}
    </div>
  );
}
