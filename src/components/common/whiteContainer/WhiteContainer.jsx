import { cn } from '../../../utils/common';
export default function WhiteContainer({ children, className }) {
  return (
    <div
      className={cn(
        'bg-white rounded-3xl max-sm:rounded-xl p-5 max-sm:p-3 text-xs',
        className
      )}
    >
      {children}
    </div>
  );
}
