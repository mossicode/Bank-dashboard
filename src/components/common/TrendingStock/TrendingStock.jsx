import { cn } from '../../../utils/common.js';
export default function TrendingStock({ trendingStock }) {
  return (
    <div className='w-full'>
      <table className=' w-full text-left bg-white rounded-3xl max-lg:rounded-2xl mx-auto'>
        <thead>
          <tr className='text-dusty-blue font-inter font-medium border-b text-base border-gray-200 max-lg:text-xs text-nowrap'>
            <th className='ps-8 pe-0 lg:pt-3 pb-2 max-lg:pt-4 max-lg:ps-4 max-lg:pe-7 max-sm:pe-6 '>
              SL No
            </th>
            <th className='pt-3 pe-0 pb-2 max-lg:pt-3 max-sm:pe-4 '>Name</th>
            <th className='pt-3 pe-0  pb-2 max-lg:pt-4 max-sm:pe-7 '>Price</th>
            <th className='pt-3 pe-0 max-lg:pe-4 pb-2 max-lg:pt-4 max-sm:pe-1 '>
              Return
            </th>
          </tr>
        </thead>
        <tbody className='text-charcoal-blue font-normal text-base font-inter max-lg:text-xs text-nowrap'>
          {trendingStock.map(item => (
            <tr key={item.id} className=' transition'>
              <td className='ps-4 pb-4 lg:pt-3 max-lg:ps-4 pe-5 max-lg:pb-3.5 max-md:pe-0 max-lg:pt-2 max-sm:pe-2  max-sm:pb-4 '>
                {item.id}.
              </td>
              <td className='pb-4 pt-3 max-lg:pb-3 max-lg:pe-1 max-lg:pt-2 max-sm:pb-4 max-sm:pe-2 capitalize'>
                {item.name}
              </td>
              <td className='pb-4 pt-3 max-lg:pb-2 max-lg:pe-6 max-lg:pt-2 max-md:pe-3 max-sm:pb-4 max-sm:pe-2 '>
                ${item.price}
              </td>
              <td
                className={cn(
                  'pb-5 pt-1 max-lg:pb-2 max-lg:pe-0 max-lg:pt-2 max-sm:pb-4 max-sm:pe-2 ',
                  item.return > 0 ? 'text-green-400' : 'text-red-400'
                )}
              >
                {item.return > 0 ? '+' : '-'}
                {Math.abs(item.return)}%
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
