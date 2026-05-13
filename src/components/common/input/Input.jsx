import { cn } from '../../../utils/common';

export default function Input({ className, placeholder, type = 'text' }) {
  return (
    <input
      type={type}
      className={cn(
        'xl:rounded-xl placeholder:text-xs xl:p-4 rounded-2xl  border-1  border-azureish-White outline-none placeholder:font-normal placeholder:font-inter placeholder:text-dusty-blue placeholder:capitalize mt-2 p-3 ',
        className
      )}
      placeholder={placeholder}
    />
  );
}
