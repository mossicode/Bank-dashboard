import { cn } from '../../utils/common';
import ReusableTitleSubTitle from '../common/reusabletTitle/ReusableTitleSubTitle';
function RecentTransaction({ transactions }) {
  return (
    <div className='bg-white shadow-sm p-3  rounded-3xl max-lg:p-2  max-lg:last:pb-2 flex-nowrap max-lg:first:pt-4  max-lg:rounded-5 max-sm:px-4 max-sm:py-5 max-sm:rounded-sm'>
      {transactions.map((item, index) => {
        // Determine the color based on the money value
        const moneyColor =
          parseFloat(item.money) >= 0
            ? 'text-green-400 font-bold'
            : 'text-red-400 font-bold';

        // adding a money sign
        const moneySign = parseFloat(item.money) >= 0 ? '+' : '-';

        return (
          <div
            key={index}
            className='grid grid-cols-4  items-center mb-4 lg:mb-0 lg:mt-1 sm:mt-3 max-lg:mb-3 flex-nowrap '
          >
            <div className='col-span-2 flex min-w-0 items-center pe-0  '>
              <div className=' rounded-full pe-4 max-lg:pe-2  max-sm:pe-3.5 ps-0 '>
                {item.logo}
              </div>
              <ReusableTitleSubTitle
                titleClassName='text-nowrap max-lg:text-11 max-[1150px]:text-1xs max-lg:text-xs  '
                subClassName='text-nowrap max-lg:text-11 max-[1150px]:text-1xs max-lg:text-xs'
                title={item.name}
                subTitle={item.date}
              />
            </div>
            <div className='col-span-1'></div>
            <div
              className={cn(
                ' col-span-1  text-sm text-right max-lg:text-10 ps-0 max-[1150px]:text-1xs max-lg:text-xs',
                moneyColor
              )}
            >
              {`${moneySign}$${Math.abs(item.money)}`}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default RecentTransaction;
