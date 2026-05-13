import { cn } from '../../../utils/common';

export default function Titles({ className = '', children }) {
  return (
    <>
      <h2
        className={cn(
          'font-inter text-[22px] font-semibold tracking-0 text-charcoal-blue max-lg:text-[18px] max-md:text-base',
          className
        )}
      >
        {children}
      </h2>
    </>
  );
}
