import { cn } from '../../../utils/common';

export default function Card({ className = '', children }) {
  return (
    <div className={cn('xl:rounded-3xl rounded-2xl bg-white', className)}>
      {children}
    </div>
  );
}
