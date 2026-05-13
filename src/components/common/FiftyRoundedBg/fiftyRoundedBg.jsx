import { cn } from '../../../utils/common';
export default function FiftyRoundedBg({ children, className }) {
  return (
    <div
      className={cn(
        'rounded-full p-2 flex items-center w-full',
        className,
        className === 'border'
          ? ' border-1 border-deep-blue group active:bg-deep-blue '
          : ''
      )}
    >
      {children}
    </div>
  );
}
