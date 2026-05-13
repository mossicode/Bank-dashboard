import RecentTransaction from '../../components/recentTransaction/RecentTransaction';
import Titles from '../../components/common/titles/Titles';
import BalanceCard from '../../components/credit/BalanceCard';
import { ChipIcon, ChipWhiteIcon } from '../../components/icons';
import RecentTransactions from '../../components/allTransaction/RecentTransactions';
import Pagination from '../../components/common/pagination/Pagination';
import {
  CardIcon,
  PayPalIcon,
  MoneyTransactionIcon,
} from '../../components/icons';

export default function TransactionPage() {
  const transactions = [
    {
      logo: (
        <CardIcon className='text-amber bg-amber-100 p-3.5 rounded-full w-15 h-15 max-lg:w-10 max-lg:h-10 max-lg:p-3' />
      ),
      name: 'Deposit from My',
      date: '28 january 2024',
      money: 200.0,
    },
    {
      logo: (
        <PayPalIcon className='text-royal-blue bg-blue-100 w-15 h-15 rounded-full p-3.5 max-lg:w-10 max-lg:h-10 max-lg:p-3' />
      ),
      name: 'Depsoit Paypal',
      date: '21 january 2024',
      money: -150.0,
    },
    {
      logo: (
        <MoneyTransactionIcon className='text-aqua-green bg-green-100 w-15 h-15 rounded-full max-lg:w-10 max-lg:h-10 ' />
      ),
      name: 'Sara',
      date: '25 january 2024',
      money: 300.0,
    },
  ];

  const transactionsData = [
    {
      id: 12345678,
      description: 'Salary',
      type: 'shopping',
      card: '5234****',
      amount: 5000,
      date: '28 Jan, 12:30 pm',
    },
    {
      id: 2876543,
      description: 'Groceries',
      type: 'transfer',
      card: '42434****',
      amount: -150,
      date: '28 Jan, 12:30 pm',
    },
    {
      id: 32345678,
      description: 'Book Sale',
      type: 'service',
      card: 'fg34****',
      amount: 200,
      date: '28 Jan, 12:30 pm',
    },
    {
      id: 4987654,
      description: 'Electricity Bill',
      type: 'transfer',
      card: '124****',
      amount: -75,
      date: '28 Jan, 12:30 pm',
    },
  ];
  return (
    <>
      <div className=' px-10 py-5 max-md:px-3 max-md:py-2 flex items-center justify-evenly gap-7 max-md:flex-col'>
        <div className='flex justify-between gap-x-6 md:w-[70%] w-full  overflow-x-auto whitespace-nowrap hide-scrollbar'>
          <div className='w-full'>
            <Titles className='text-xs mb-4 cursor-pointer'>MY Cards</Titles>
            <BalanceCard
              variant='blue'
              balance='$4,250'
              cardHolder='Jane Doe'
              validThru='11/24'
              cardNumber='1234 **** **** 9876'
              chipVariant={<ChipWhiteIcon />}
              className=' bg-gradient-to-bl w-full lg:h-56 from-deep-blue to-primary text-white'
              subtitleColor='text-mist-white'
              DualCircleBg='bg-mist-white'
            />
          </div>
          <div className='w-full max-sm:mt-2'>
            <Titles className='text-base mb-2 cursor-pointer float-end'>
              See All
            </Titles>
            <BalanceCard
              variant='default'
              balance='$5,756'
              cardHolder='Eddy Cusuma'
              validThru='12/25'
              cardNumber='3778 **** **** 1234'
              chipDefault={<ChipIcon />}
              className=' bg-white w-full lg:h-56 text-charcoal-blue'
              subtitleColor='text-dusty-blue'
              DualCircleBg='bg-silver-white'
            />
          </div>
        </div>
        <div className='md:w-[30%] w-full'>
          <Titles className='mb-2'>Recent Transaction</Titles>
          <RecentTransaction transactions={transactions} />
        </div>
      </div>

      {/* this side is responsive */}
      <div className='px-10 max-md:px-0'>
        <Titles className='ps-3 -mb-2 mt-2'>Recent Transactions</Titles>
        <RecentTransactions transactionsData={transactionsData} />
        <div className='text-right  mb-6 -mt-3 '>
          <Pagination hi="d" totalPages={5} currentPage={3} onPageChange='' />
        </div>
      </div>
    </>
  );
}
