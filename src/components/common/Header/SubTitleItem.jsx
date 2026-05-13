import { cn } from '../../../utils/common.js';
export default function SubtitleItem({ className = '', children }) {
  return (
    <div
      className={cn(
        'text-base text-dusty-blue font-inter font-normal tracking-0 max-lg:text-sm max-md:text-xs capitalize',
        className
      )}
    >
      {children}
    </div>
  );
}
