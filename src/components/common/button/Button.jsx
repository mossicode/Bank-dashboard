import { cn } from '../../../utils/common';

export default function Button({
  variant = 'default',
  className = '',
  children,
  ...props
}) {
  const variants = {
    default: 'bg-primary text-white  hover:bg-primary/90',
    secondary: 'bg-charcoal-blue text-white  hover:bg-charcoal-blue/80',
    link: 'text-gray-900 underline-offset-4 hover:underline',
  };
  return (
    <button
      data-slot='button'
      className={cn(
        "xl:text-lg inline-flex items-center px-3 py-1.5 justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-[color,box-shadow] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive cursor-pointer",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
