import { cn } from '../../utils/common';
import ReusableTitleSubTitle from '../common/reusabletTitle/ReusableTitleSubTitle';
export default function Investment({ investmentData, className = '' }) {
  return (
    <div>
      {investmentData.map(item => (
        <div key={item.name}>
          <div
            className={cn(
              'max-md:hidden grid grid-cols-2 items-center rounded-5 gap-x-5  bg-white space-x-4 p-4 mb-4  max-lg:p-3  max-lg:mb-2.5 max-lg:rounded-xl ',
              className
            )}
          >
            <div className='col-span-1 flex items-center space-x-4 me-5  text-nowrap  max-lg:me-3 max-lg:space-x-3'>
              <div>{item.logo}</div>
              <ReusableTitleSubTitle
                title={item.name}
                subTitle={item.describtion}
                subClassName='max-lg:text-[11px]'
              />
            </div>
            <div className='col-span-1 flex items-center justify-between text-nowrap ps-2'>
              <ReusableTitleSubTitle
                title={`$${item.envestmentVlaue}`}
                subTitle='Envestment Value'
                subClassName='max-lg:text-[11px]'
              />
              <div className='flex flex-col text-nowrap text-left pe-9 max-lg:pe-1 max-lg:text-xs'>
                <div
                  className={cn(
                    'text-base max-lg:text-xs',
                    item.returnValue > 0 ? 'text-green-600 ' : ' text-red-500 '
                  )}
                >
                  {item.returnValue > 0 ? '+' : '-'}
                  {Math.abs(item.returnValue)}%
                </div>
                <div className='text-dusty-blue font-inter tracking-0 text-base font-normal max-lg:text-[11px] '>
                  return Value
                </div>
              </div>
            </div>
          </div>
          <div className='md:hidden flex items-center justify-between mb-2.5 px-2 py-3 bg-white rounded-2.5'>
            <div className='flex items-center'>
              <div className={cn('me-2.5')}>{item.logo}</div>
              <div className={cn('flex flex-col  text-xs ', className)}>
                <div className='text-nowrap font-medium text-charcoal-blue font-inter max-lg:text-xs'>
                  {item.name}
                </div>
                <div className='text-nowrap text-dusty-blue font-inter tracking-0 text-sm font-normal max-lg:text-[11px] '>
                  {item.describtion}
                </div>
              </div>
            </div>
            <div className={cn('text-green-500 text-xs', className)}>
              {item.returnValue}%
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
