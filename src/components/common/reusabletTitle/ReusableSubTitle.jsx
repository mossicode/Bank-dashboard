import { cn } from '../../../utils/common.js';
export default function ReusableSubTitle({ className = '', children }) {
  return (
    <div
      className={cn(
        'text-sm text-dusty-blue font-inter font-normal tracking-0 max-lg:text-xs',
        className
      )}
    >
      {children}
    </div>
  );
}
