import { CardIcon, MoneyTransactionIcon, PayPalIcon } from '../icons';
import RecentTransaction from './RecentTransaction';
export default {
  title: 'Components/Common/RecentTransaction',
  component: RecentTransaction,
};

const transaction = [
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

export function Default() {
  return (
    <div className=' p-3 w-[325px] max-lg:w-[231px] max-sm:w-full'>
      <RecentTransaction transactions={transaction} />
    </div>
  );
}
