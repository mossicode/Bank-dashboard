import { GENERAL } from '../../constants';
import { cn } from '../../utils/common';

export default function Logo({ className }) {
  return (
    <div className={cn('flex items-center gap-3 ps-4', className)}>
      <img src='/assets/images/logo.png' className='size-9 max-lg:size-6' />
      <h1 className='font-extrabold text-2xl max-lg:text-xl text-charcoal-blue max-[950px]:hidden max-sm:block'>
        {GENERAL.name}
      </h1>
    </div>
  );
}
