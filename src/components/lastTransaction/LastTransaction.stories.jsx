import { MobileServiceIcon, SpotifySubscriptionIcon, UserIcon } from '../icons';
import LastTransaction from './LastTransaction';

export default {
  component: LastTransaction,
  title: 'Components/Common/LastTransaction',
};

const lastTransactions = [
  {
    id: ' 1234****',
    description: 'Spotify subscription',
    transactionCategories: 'Shopping',
    amount: 100,
    date: '2023-10-01',
    logo: (
      <SpotifySubscriptionIcon className='p-4 w-15 h-15 text-aqua-green bg-green-100 rounded-5 max-lg:w-10 max-lg:h-10 max-lg:p-3 max-lg:rounded-2xl  max-sm:w-11 max-sm:h-11 max-sm:rounded-xl' />
    ),
    transactionType: 'pending',
  },
  {
    id: '1223****',
    description: 'Mobile Service',
    transactionCategories: 'service',
    transactionType: 'completed',
    amount: -200,
    date: '2023-10-02',
    logo: (
      <MobileServiceIcon className='p-4 w-15 h-15 text-royal-blue bg-blue-100 rounded-5 max-lg:w-10 max-lg:h-10 max-lg:p-3 max-lg:rounded-2xl  max-sm:w-11 max-sm:h-11 max-sm:rounded-xl' />
    ),
  },
  {
    id: '4321***',
    description: 'Emilly Wilson',
    transactionCategories: 'Transfer',
    amount: 300,
    date: '2023-10-03',
    logo: (
      <UserIcon className='p-4 w-15 h-15 text-light-rose bg-light-red rounded-5 max-lg:w-10 max-lg:h-10 max-lg:p-3 max-lg:rounded-2xl  max-sm:w-11 max-sm:h-11 max-sm:rounded-xl' />
    ),
    transactionType: 'completed',
  },
];

export function Default() {
  return (
    <div className='w-[730px] max-lg:w-[487px] max-sm:w-full p-3'>
      <LastTransaction lastTransactions={lastTransactions} />
    </div>
  );
}
