import {
  AppStoreIcon,
  MobileServiceIcon,
  PlayStationIcon,
  SpotifySubscriptionIcon,
  UserIcon,
} from '../../components/icons';
import Accounts from './Accounts';

export default {
  title: 'pages/accounts',
  component: Accounts,
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

const debitCreditData = [
  { day: 'Sat', Credit: 234, Debit: 135 },
  { day: 'Sun', Credit: 186, Debit: 106 },
  { day: 'Mon', Credit: 139, Debit: 102 },
  { day: 'Tue', Credit: 123, Debit: 212 },
  { day: 'Wed', Credit: 214, Debit: 150 },
  { day: 'Thu', Credit: 105, Debit: 158 },
  { day: 'Fri', Credit: 216, Debit: 179 },
];

const Invoicesdata = [
  {
    id: Date.now(),
    logo: (
      <AppStoreIcon className='bg-light-green text-dark-green rounded-5 max-lg:rounded-2xl w-15 h-15 max-lg:w-11 max-lg:h-11' />
    ),
    name: 'Apple store',
    lastInvoices: '2h ago',
    payment: '450',
  },
  {
    id: Date.now(),
    logo: (
      <UserIcon className='bg-light-amber text-amber p-3 rounded-5 max-lg:rounded-2xl w-15 h-15 max-lg:w-11 max-lg:h-11' />
    ),
    name: 'Micheal',
    lastInvoices: '2 days ago',
    payment: '160',
  },
  {
    id: Date.now(),
    logo: (
      <PlayStationIcon className='text-primary bg-frosted-blue p-1 rounded-5 max-lg:rounded-2xl w-15 h-15 max-lg:w-11 max-lg:h-11' />
    ),
    name: 'PlayStation',
    lastInvoices: '5 days ago',
    payment: '1085',
  },
  {
    id: Date.now(),
    logo: (
      <UserIcon className='text-light-rose bg-soft-cherry p-3 rounded-5 max-lg:rounded-2xl w-15 h-15 max-lg:w-11 max-lg:h-11' />
    ),
    name: 'William',
    lastInvoices: '10 days ago',
    payment: '90',
  },
];
const totalCredit = debitCreditData.reduce((sum, item) => sum + item.Credit, 0);
const totalDebit = debitCreditData.reduce((sum, item) => sum + item.Debit, 0);
// total Credit & Debit
export function Default() {
  return (
    <Accounts
      lastTransactions={lastTransactions}
      totalCredit={totalCredit}
      totalDebit={totalDebit}
      Invoicesdata={Invoicesdata}
    />
  );
}
