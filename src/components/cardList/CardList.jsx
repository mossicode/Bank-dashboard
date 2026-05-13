import { cn } from '../../utils/common.js';
import ReusableTitleSubTitle from '../common/reusabletTitle/ReusableTitleSubTitle.jsx';
import ReusableTitle from '../common/reusabletTitle/ReusableTitle.jsx';
export default function CardList({ className = '', cardListData }) {
  return (
    <div>
      {cardListData.map(item => (
        <div
          key={item.cardNumber}
          className={cn(
            'flex justify-between items-center ps-4 pe-7 py-4 mb-2  bg-white rounded-3xl max-lg:ps-3 max-lg:py-3 max-lg:pe-4 max-lg:rounded-2xl max-sm:ps-2 max-sm:pe-3 max-sm:rounded-xl',
            className
          )}
        >
          <div className='flex justify-center items-center max-sm:pe-2'>
            <div className='pe-4 max-sm:pe-2 '>{item.logo}</div>
            <ReusableTitleSubTitle
              title='Card Type'
              titleClassName='text-nowrap'
              subTitle={item.cardType}
              subClassName='max-lg:text-[11px]'
            />
          </div>
          <div></div>
          <div className='max-sm:pe-1 text-nowrap'>
            <ReusableTitleSubTitle
              title='Bank'
              subTitle={item.bank}
              subClassName='max-lg:text-[11px]'
              titleClassName='text-nowrap'
            />
          </div>
          <div className='max-md:hidden'>
            <ReusableTitleSubTitle
              title='Card number'
              subTitle={item.cardNumber}
              subClassName='max-lg:text-[11px]'
              titleClassName='text-nowrap'
            />
          </div>
          <div className='max-md:hidden'>
            <ReusableTitleSubTitle
              title='namain card'
              subTitle={item.namainCard}
              subClassName='max-lg:text-[11px]'
              titleClassName='text-nowrap'
            />
          </div>
          <div className=' cursor-pointer'>
            <ReusableTitle className='text-deep-blue text-nowrap text-base max-lg:text-[10px] '>
              View Details
            </ReusableTitle>
          </div>
        </div>
      ))}
    </div>
  );
}
