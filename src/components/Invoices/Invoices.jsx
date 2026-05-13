import { cn } from '../../utils/common';
import ReusableTitleSubTitle from '../common/reusabletTitle/ReusableTitleSubTitle';
export default function Invoices({ Invoicesdata, className = '' }) {
  return (
    <div className=' bg-white rounded-3xl max-lg:rounded-5 max-sm:rounded-2xl'>
      {Invoicesdata.map(item => (
        <div
          key={item.id}
          className='  flex items-center px-6 first:pt-7 last:pb-7 mb-5 max-lg:mb-4 max-lg:px-3 max-lg:first:pt-4 max-lg:last:pb-4'
        >
          <div className={cn('flex-none pe-5 max-lg:pe-4', className)}>
            {item.logo}
          </div>
          <div className='flex-grow flex flex-col'>
            <ReusableTitleSubTitle
              title={item.name}
              subTitle={item.lastInvoices}
            />
          </div>
          <div className='flex-none text-dusty-blue font-normal  max-lg:text-xs'>
            ${item.payment}
          </div>
        </div>
      ))}
    </div>
  );
}
