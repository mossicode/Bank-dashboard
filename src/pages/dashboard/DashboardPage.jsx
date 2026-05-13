import BalanceCard from '../../components/credit/BalanceCard';
import Titles from '../../components/common/titles/Titles';
import {
  CardIcon,
  ChipIcon,
  ChipWhiteIcon,
  MoneyTransactionIcon,
  PayPalIcon,
} from '../../components/icons';
import RecentTransaction from '../../components/recentTransaction/RecentTransaction';
import TransactionChart from '../../components/transaction-chart/TransactionChart';
import ExpenseStatics from '../../components/charts/Expense-Statistics';
import { TransferActionCard } from '../../components/TransferActionCard/TransferActionCard';
import BalanceHistory from '../../components/charts/BalanceHistory';
import { transactionChartData } from '../../data/dashboard';
import { transferActionCardUser } from '../../data/dashboard';
import { balanceHistory } from '../../data/dashboard';
import { expenseStaticsData } from '../../data/dashboard';
function DashboardPage() {
  const transactions = [
    {
      logo: (
        <CardIcon className='text-amber bg-amber-100 p-3.5 rounded-full w-15 h-15 max-lg:w-10 max-lg:h-10 max-lg:p-3 max-xl:w-12 max-xl:h-12' />
      ),
      name: 'Deposit from My',
      date: '28 january 2024',
      money: 200.0,
    },
    {
      logo: (
        <PayPalIcon className='text-royal-blue bg-blue-100 w-15 h-15 rounded-full p-3.5 max-lg:w-10 max-lg:h-10 max-lg:p-3 max-xl:w-12 max-xl:h-12' />
      ),
      name: 'Depsoit Paypal',
      date: '21 january 2024',
      money: -150.0,
    },
    {
      logo: (
        <MoneyTransactionIcon className='text-aqua-green bg-green-100 w-15 h-15 rounded-full max-lg:w-10 max-lg:h-10 max-xl:w-12 max-xl:h-12' />
      ),
      name: 'Sara',
      date: '25 january 2024',
      money: 300.0,
    },
  ];
  return (
    <div className='p-6 max-md:p-3 flex flex-col gap-4 '>
      <div className='flex items-center justify-evenly gap-7 mb-2 max-md:flex-col'>
        <div className='flex justify-between gap-x-6 md:w-[70%] w-full overflow-x-auto whitespace-nowrap hide-scrollbar'>
          <div className='w-full flex-1'>
            <Titles className='text-xs mb-4 cursor-pointer'>MY Cards</Titles>
            <BalanceCard
              variant='blue'
              balance='$4,250'
              cardHolder='Jane Doe'
              validThru='11/24'
              cardNumber='1234 **** **** 9876'
              chipVariant={<ChipWhiteIcon />}
              className=' bg-gradient-to-bl w-full lg:h-52 from-deep-blue to-primary text-white'
              subtitleColor='text-mist-white'
              DualCircleBg='bg-mist-white'
            />
          </div>
          <div className='w-full max-sm:mt-2 flex-1'>
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
              className=' bg-white w-full lg:h-52 text-charcoal-blue'
              subtitleColor='text-dusty-blue'
              DualCircleBg='bg-silver-white'
            />
          </div>
        </div>
        <div className='md:w-[30%] w-full '>
          <Titles className='mb-2'>Recent Transaction</Titles>
          <RecentTransaction
            className=' w-full lg:h-60'
            transactions={transactions}
          />
        </div>
      </div>
      <div className='flex w-full justify-between gap-x-6 gap-y-0 mb-5 max-md:flex-col '>
        <div className='w-full m-auto '>
          <Titles className='mb-0'>Weekly Activities</Titles>
          <TransactionChart
            xAxisKey='day'
            barKeys={[
              { key: 'Withdraw', variant: '#1814F3' },
              { key: 'Deposit', variant: '#16DBCC' },
            ]}
            data={transactionChartData}
            barSize={10}
            radius={30}
            yAxisDomain={[0, 600]}
            yAxisTicks={7}
            className='h-64 max-lg:h-64 w-full  '
          />
        </div>
        <div className=' max-md:text-center m-auto max-md:mt-4'>
          <Titles className='mb-0'>Expense Statics</Titles>
          <div className='  lg:w-64 max-lg:w-64 max-md:w-70 max-sm:w-62'>
            <ExpenseStatics data={expenseStaticsData} />
          </div>
        </div>
      </div>
      <div className='flex w-full  justify-between gap-y-3 max-md:flex-col mb-5   '>
        <div className='md:w-[35%] '>
          <Titles className='mb-2 grow flex-1'>Quick Transfer</Titles>
          <TransferActionCard users={transferActionCardUser} />
        </div>
        <div className='md:w-[61%] '>
          <Titles className='mb-2'>Balance History</Titles>
          <BalanceHistory
            className='lg:h-56 max-lg:max-h-10 '
            data={balanceHistory}
          />
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;
