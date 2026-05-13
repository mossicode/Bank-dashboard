import { cn } from '../../../utils/common';
export default function ReuesableTitleSubTitle({
  title = '',
  subTitle = '',
  titleClassName = '',
  subClassName = '',
}) {
  return (
    <div>
      <div
        className={cn(
          'text-base text-dark-black font-inter font-medium tracking-0 mb-2 max-lg:mb-1 max-lg:text-xs ',
          titleClassName
        )}
      >
        {title}
      </div>
      <div
        className={cn(
          'text-sm text-dusty-blue font-inter font-normal tracking-0 max-lg:text-xs',
          subClassName
        )}
      >
        {subTitle}
      </div>
    </div>
  );
}
