import { cn } from '../../../utils/common';
export default function HeadertitleSubTitle({
  HeaderTitle = '',
  subTitle = '',
  headerClassName = '',
  subClassName = '',
}) {
  return (
    <div>
      <div
        className={cn(
          'text-base text-dark-black font-inter font-medium tracking-0 mb-2 max-lg:text-sm max-md:text-xs max-lg:mb-1.5 max-md:mb-1 capitalize',
          headerClassName
        )}
      >
        {HeaderTitle}
      </div>
      <div
        className={cn(
          'text-base text-dusty-blue font-inter font-normal tracking-0 max-md:text-xs capitalize',
          subClassName
        )}
      >
        {subTitle}
      </div>
    </div>
  );
}
