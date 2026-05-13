import { cn } from '../../../utils/common';
export default function RuleLable({
  titleClassName,
  subClassName,
  titleChild,
  subChild,
}) {
  return (
    <div className='flex flex-col justify-center items-start hover:cursor-pointer group'>
      <span
        className={cn(
          'font-normal text-1xs group-hover:font-bold',
          titleClassName
        )}
      >
        {titleChild}
      </span>
      <span
        className={cn(
          'font-normal text-xs group-hover:font-bold',
          subClassName
        )}
      >
        {subChild}
      </span>
    </div>
  );
}
