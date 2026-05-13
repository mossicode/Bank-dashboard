import { cn } from '../../utils/common.js';
import ReusableTitle from '../common/reusabletTitle/ReusableTitle.jsx';
import ReusableSubTitle from '../common/reusabletTitle/ReusableSubTitle.jsx';
export default function ActiveLoansOverview({ className = '', loans }) {
  const sumLoan = loans.reduce((acc, item) => acc + parseInt(item.loan), 0);
  const sumLeft = loans.reduce((acc, item) => acc + parseInt(item.left), 0);
  const sumInstallment = loans.reduce(
    (acc, item) => acc + parseInt(item.installment),
    0
  );

  return (
    <div className='w-full max-h-[500px]'>
      <div className='hidden md:block'>
        <table
          className={cn(
            'w-full table-fixed bg-white rounded-3xl text-sm max-lg:rounded-5',
            className
          )}
        >
          <thead className=''>
            <tr className='text-left border-b  text-gray-100 font-medium text-nowrap'>
              <th className='pe-0 pt-4 ps-5 py-3 max-lg:py-3 max-sm:py-2.5 font-medium '>
                <ReusableSubTitle className='font-medium text-nowrap '>
                  Sl no
                </ReusableSubTitle>
              </th>
              <th className='ps-0 py-3 max-lg:py-3 max-sm:py-2.5'>
                <ReusableSubTitle className='font-medium text-nowrap '>
                  Loan Money
                </ReusableSubTitle>
              </th>
              <th className='px-2 py-3 max-lg:py-3 max-sm:py-2.5'>
                <ReusableSubTitle className='font-medium text-nowrap '>
                  Left to repay
                </ReusableSubTitle>
              </th>
              <th className='px-4 py-3 max-lg:py-3 max-sm:py-2.5'>
                <ReusableSubTitle className='font-medium text-nowrap '>
                  Duration
                </ReusableSubTitle>
              </th>
              <th className=' py-5 max-lg:py-3 max-sm:py-2.5'>
                <ReusableSubTitle className='font-medium text-nowrap '>
                  Interest rate
                </ReusableSubTitle>
              </th>
              <th className='py-3 max-lg:py-3 max-sm:py-2.5'>
                <ReusableSubTitle className='font-medium text-nowrap '>
                  Installment
                </ReusableSubTitle>
              </th>
              <th className=' py-3 max-lg:py-3 max-sm:py-2.5 text-left '>
                <ReusableSubTitle className='font-medium text-nowrap '>
                  Repay
                </ReusableSubTitle>
              </th>
            </tr>
          </thead>
          <tbody className='odd:bg-amber'>
            {loans.map((loan, index) => (
              <tr
                key={loan.id}
                className='border-b border-gray-50 hover:bg-gray-100 odd:bg-gray-50 rounded-2xl '
              >
                <td className=' ps-5 py-5 max-lg:py-3 max-sm:py-2.5 text-gray-100  '>
                  <ReusableTitle>
                    {index < 8 ? '0' : ''}
                    {index + 1}.
                  </ReusableTitle>
                </td>
                <td className='ps-0 py-5 max-lg:py-3 max-sm:py-2.5 '>
                  <ReusableTitle>{loan.loan}</ReusableTitle>
                </td>
                <td className='px-4 py-3 max-lg:py-3 max-sm:py-2.5 '>
                  <ReusableTitle>{loan.left}</ReusableTitle>
                </td>
                <td className='px-4 py-3 max-lg:py-3 max-sm:py-2.5 text-nowrap'>
                  <ReusableTitle>{loan.duration} Months</ReusableTitle>
                </td>
                <td className=' py-3 max-lg:py-3 max-sm:py-2.5'>
                  <ReusableTitle>{loan.rate}%</ReusableTitle>
                </td>
                <td className=' py-3 max-lg:py-3 max-sm:py-2.5 text-nowrap'>
                  <ReusableTitle>{loan.installment} / month</ReusableTitle>
                </td>
                <td className='py-3 max-lg:py-3 max-sm:py-2.5 '>
                  <button className='border border-blue-600 text-blue-600 rounded-full px-5 py-1 text-sm hover:bg-blue-50 transition'>
                    Repay
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className=' text-red-500 font-medium text-nowrap'>
              <td className='px-1 ps-4 pe-4 py-5 max-lg:py-3 max-sm:py-2.5'>
                Total
              </td>
              <td className='px-1 py-5 max-lg:py-3 max-sm:py-2.5'>{sumLoan}</td>
              <td className='px-4 py-3 max-lg:py-3 max-sm:py-2.5'>{sumLeft}</td>
              <td></td>
              <td></td>
              <td className='px-4 py-3 max-lg:py-3 max-sm:py-2.5 text-nowrap'>
                {sumInstallment} / month
              </td>
              <td></td>
            </tr>
          </tfoot>
        </table>
      </div>

      <div className='block md:hidden'>
        <table className='w-full table-fixed bg-white rounded-xl text-sm'>
          <thead>
            <tr className='text-center font-medium text-nowrap pt-1'>
              <th className='w-1/3 px-2 max-lg:py-3 max-sm:py-3'>
                <ReusableSubTitle>Loan Money</ReusableSubTitle>
              </th>
              <th className='w-1/3 px-2 max-sm:py-3'>
                <ReusableSubTitle>Left to repay</ReusableSubTitle>
              </th>
              <th className='w-1/3 px-2 max-sm:py-3'>
                <ReusableSubTitle>Repay</ReusableSubTitle>
              </th>
            </tr>
          </thead>
          <tbody>
            {loans.map(loan => (
              <tr
                key={loan.id}
                className='border-t border-b border-gray-100 text-center'
              >
                <td className='max-lg:py-3 max-sm:py-2.5 text-xs'>
                  {loan.loan}
                </td>
                <td className='max-sm:py-2.5 text-xs'>{loan.left}</td>
                <td className='max-sm:py-2.5 '>
                  <button className='border border-blue-600 text-blue-600 rounded-full px-3 py-1 text-[11px] transition'>
                    Repay
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className=' text-red-500 font-medium text-center'>
              <td className='px-4 py-3 max-lg:py-2 max-sm:py-3'>
                <div className=' px-2 sm:hidden'>
                  <td className='capitalize '>title</td>
                </div>
                <div>{sumLoan}</div>
              </td>
              <td className='px-2 py-5 max-lg:py-3 max-sm:py-2'>
                <div className='sm:hidden text-white w-full h-3'></div>
                <div>{sumLeft}</div>
              </td>
              <td></td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}
