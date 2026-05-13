import { cn } from '../../../utils/common';
export default function CircleBackground({ className, children, ...props }) {
  return (
    <div
      className={cn(
        'rounded-full w-11 h-11 md:h-15 md:w-15 flex items-center justify-center p-2',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
