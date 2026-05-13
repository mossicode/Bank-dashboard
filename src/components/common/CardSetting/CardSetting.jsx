import { cn } from '../../../utils/common.js';
import HeadertitleSubTitle from '../Header/HeaderTitleSubTitle.jsx';
export default function CardSetting({ className = '', data }) {
  return (
    <div className='rounded-2xl bg-white max-lg:rounded-5'>
      {data.map(item => (
        <div
          key={item.title}
          className={cn(
            'flex items-center  ps-8 first:pt-8 last:pb-8 pb-5 max-lg:ps-4 max-lg:pb-3.5 max-lg:last:pb-5 max-lg:first:pt-5 max-sm:ps-5 ',
            className
          )}
        >
          <div className='pe-5 max-lg:pe-2.5 max-sm:pe-3'>{item.logo}</div>

          <div>
            <HeadertitleSubTitle
              subClassName='normal-case'
              HeaderTitle={item.title}
              subTitle={item.describtion}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
