import { cn } from '../../../utils/common.js';
import ReusabelTitleSubTitle from '../../common/reusabletTitle/ReusableTitleSubTitle.jsx';
export default function BankServicesList({ className = '', data }) {
  return (
    <div>
      {data.map(item => (
        <div
          key={item.title}
          className=' lg:pe-4 bg-white rounded-3xl   tracking-0 lg:mb-2 mb-2.5 max-lg:rounded-2xl max-sm:rounded-xl'
        >
          <div
            className={cn(
              'flex justify-between items-center ps-4 py-4 lmd:pe-0 lg:pe-4 max-lg:ps-3 max-lg:py-3 max-sm:ps-1.5',
              className
            )}
          >
            <div className='flex items-center'>
              <div className='pe-5 max-lg:pe-2 max-sm:pe-1'>{item.logo}</div>
              <div className='flex flex-col  '>
                <ReusabelTitleSubTitle
                  titleClassName='text-nowrap tracking-0 capitalize '
                  subClassName='text-nowrap  max-sm:text-[11px]'
                  title={item.title}
                  subTitle={item.describtion}
                />
              </div>
            </div>
            <div className='max-sm:hidden'>
              <ReusabelTitleSubTitle
                titleClassName='text-nowrap tracking-0 max-sm:text-xs'
                title={item.detail1}
                subTitle='lorem ipsum'
              />
            </div>
            <div className='max-sm:hidden'>
              <ReusabelTitleSubTitle
                titleClassName='text-nowrap tracking-0 max-sm:text-xs'
                title={item.detail2}
                subTitle='lorem ipsum'
              />
            </div>
            <div className='max-sm:hidden'>
              <ReusabelTitleSubTitle
                titleClassName='text-nowrap tracking-0 max-sm:text-xs'
                title={item.detail3}
                subTitle='lorem ipsum'
              />
            </div>
            <div className='pe-4 max-sm:pe-2'>
              <button className='lg:px-7 md:px-5 md:py-2 md:border rounded-full font-medium font-inter  text-nowrap text-dusty-blue hover:text-royal-blue text-base max-lg:text-[11px] max-sm:text-royal-blue'>
                View Details
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
