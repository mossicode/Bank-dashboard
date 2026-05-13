import { cn } from '../../../utils/common.js';
export default function HeaderTitleItem({ className = '', children }) {
  return (
    <div
      className={cn(
        'text-base text-dark-black font-inter font-medium tracking-0 max-lg:text-sm max-md:text-xs capitalize',
        className
      )}
    >
      {children}
    </div>
  );
}
