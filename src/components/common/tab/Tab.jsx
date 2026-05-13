import { cn } from '../../../utils/common';
export default function Tab({ label, active, onClick, className = '' }) {
  return (
    <button
      onClick={onClick}
      className={cn(
        'px-2 py-2 font-medium text-sm border-b-2 transition-colors duration-200 max-sm:text-xs max-sm:flex justify-center',
        active
          ? 'border-blue-500 text-blue-600'
          : 'border-transparent text-gray-500 hover:text-blue-500',
        className
      )}
    >
      {label}
    </button>
  );
}
