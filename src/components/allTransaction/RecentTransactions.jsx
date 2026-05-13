import { useState } from 'react';
import ReusableTitle from '../common/reusabletTitle/ReusableTitle';
import ReusableSubTitle from '../common/reusabletTitle/ReusableSubTitle';
import { tabs } from '../../constants';
import { ArrowDownIcon, ArrowUpIcon } from '../icons';

function RecentTransactions({ transactionsData }) {
  const [activeTab, setActiveTab] = useState('all');

  // Filter transactions based on active tab
  const filteredTransactions = transactionsData.filter(tx => {
    if (activeTab === 'income') return tx.amount > 0;
    if (activeTab === 'expense') return tx.amount < 0;
    return true;
  });

  return (
    <div className='mx-auto p-4'>
      {/* Tabs */}
      <div className='flex justify-start border-b border-gray-300 mb-6'>
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`me-4 relative text-nowrap text-center max-sm:text-11 font-medium focus:outline-none pb-3 ${
              activeTab === tab.id
                ? 'text-blue-600 after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-[110%] after:h-[3px] after:bg-blue-600 after:rounded-ss-md after:rounded-se-md'
                : 'text-dusty-blue hover:text-blue-600'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Table */}
      <div className='rounded-3xl bg-white p-6 max-lg:p-5 max-lg:rounded-5 max-sm:rounded-2xl'>
        <table className='table-auto w-full '>
          <thead>
            <tr className='text-dusty-blue'>
              <th className='text-left py-2 max-md:hidden'>
                <ReusableTitle className='text-dusty-blue'>
                  Description
                </ReusableTitle>
              </th>
              <th className='text-left px-2 py-1 text-nowrap max-md:hidden'>
                <ReusableTitle className='text-dusty-blue'>
                  Transaction ID
                </ReusableTitle>
              </th>
              <th className='text-left px-2 py-1 max-md:hidden'>
                <ReusableTitle className='text-dusty-blue'>Type</ReusableTitle>
              </th>
              <th className='text-left px-2 py-1 max-md:hidden'>
                <ReusableTitle className='text-dusty-blue text-nowrap'>
                  Card
                </ReusableTitle>
              </th>
              <th className='text-left px-2 py-1 max-md:hidden text-nowrap'>
                <ReusableTitle className='text-dusty-blue text-nowrap'>
                  Date
                </ReusableTitle>
              </th>
              <th className='text-left px-2 py-1 max-md:hidden'>
                <ReusableTitle className='text-dusty-blue'>
                  Amount
                </ReusableTitle>
              </th>
              <th className='text-left px-2 py-1 max-md:hidden'>
                <ReusableTitle className='text-dusty-blue'>
                  Receipt
                </ReusableTitle>
              </th>
            </tr>
          </thead>

          <tbody>
            {filteredTransactions.map(tx => (
              <tr
                key={tx.id}
                className=' border-t h-16 text-gray-700 border-gray-200 my-4 py-4 '
              >
                <td className='max-sm:hidden  py-1'>
                  <div className='flex items-center'>
                    <span className=' flex items-center justify-center'>
                      {tx.amount > 0 ? (
                        <ArrowUpIcon className='w-7 p-2  h-7 text-dusty-blue border border-dusty-blue rounded-full ' />
                      ) : (
                        <ArrowDownIcon className='w-7 p-2  h-7 text-dusty-blue border border-dusty-blue rounded-full ' />
                      )}
                    </span>
                    <span className='ms-2 text-gray-700 whitespace-nowrap'>
                      <ReusableTitle className=' text-nowrap max-[1150px]:text-1xs max-lg:text-xs '>
                        {tx.description}
                      </ReusableTitle>
                    </span>
                  </div>
                </td>
                <td className='ps-2 py-1  max-sm:hidden'>
                  <ReusableTitle className='text-nowrap max-[1150px]:text-1xs max-lg:text-xs'>
                    #{tx.id}
                  </ReusableTitle>
                </td>
                <td className='ps-2 py-1 capitalize max-sm:hidden'>
                  <ReusableTitle className='text-nowrap max-[1150px]:text-1xs max-lg:text-xs'>
                    {tx.type}
                  </ReusableTitle>
                </td>
                <td className='ps-2 py-1 max-md:hidden'>
                  <ReusableTitle className='text-nowrap max-[1150px]:text-1xs max-lg:text-xs'>
                    {tx.card}
                  </ReusableTitle>
                </td>
                <td className='ps-2 py-1 max-md:hidden text-nowrap'>
                  <ReusableTitle className='text-nowrap max-[1150px]:text-1xs max-lg:text-xs'>
                    {tx.date}
                  </ReusableTitle>
                </td>
                <td
                  className={`ps-2 py-1 max-md:hidden  text-base max-lg:text-xs ${
                    tx.amount < 0 ? 'text-red-400' : 'text-green-400'
                  }`}
                >
                  {tx.amount > 0 ? '+' : '-'}${Math.abs(tx.amount)}
                </td>
                <td className='max-md:hidden'>
                  <button className='rounded-full border max-[1150px]:text-1xs max-lg:text-xs  font-semibold text-sm hover:text-blue-700 hover:border-blue-700 px-4 py-2 capitalize'>
                    download
                  </button>
                </td>

                {/* Mobile View */}
                <td colSpan='7' className='sm:hidden ps-2 py-2'>
                  <div className='flex justify-between items-center'>
                    <div className='flex items-center'>
                      <span className='border-2 border-dusty-blue rounded-full flex items-center justify-center'>
                        {tx.amount > 0 ? (
                          <ArrowUpIcon className='w-8 h-8  p-2 text-dusty-blue' />
                        ) : (
                          <ArrowDownIcon className='w-8  h-8 p-2 text-dusty-blue' />
                        )}
                      </span>
                      <div className='ms-2'>
                        <div className='font-semibold'>
                          <ReusableTitle className='text-nowrap'>
                            {tx.description}
                          </ReusableTitle>
                        </div>
                        <div className=''>
                          <ReusableSubTitle>{tx.date}</ReusableSubTitle>
                        </div>
                      </div>
                    </div>
                    <div
                      className={`text-right text-xs font-semibold ${
                        tx.amount < 0 ? 'text-red-400' : 'text-green-400'
                      }`}
                    >
                      {tx.amount > 0 ? '+' : '-'}${Math.abs(tx.amount)}
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default RecentTransactions;
