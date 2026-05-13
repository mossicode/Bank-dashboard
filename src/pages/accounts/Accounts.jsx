import FinancialStates from '../../components/financialStates/FinancialStates';
import LastTransaction from '../../components/lastTransaction/LastTransaction';
import Title from '../../components/common/titles/Titles';
import BalanceCard from '../../components/credit/BalanceCard';
import DebitCreditOverview from '../../components/debit-credit-overview/DebitCreditOverview';
import { ChipWhiteIcon } from '../../components/icons';
import {
  AppStoreIcon,
  MobileServiceIcon,
  PlayStationIcon,
  SpotifySubscriptionIcon,
  UserIcon,
} from '../../components/icons';
import Titles from '../../components/common/titles/Titles';
import Invoices from '../../components/Invoices/Invoices';

const debitCreditData = [
  { day: 'Sat', Credit: 234, Debit: 135 },
  { day: 'Sun', Credit: 186, Debit: 106 },
  { day: 'Mon', Credit: 139, Debit: 102 },
  { day: 'Tue', Credit: 123, Debit: 212 },
  { day: 'Wed', Credit: 214, Debit: 150 },
  { day: 'Thu', Credit: 105, Debit: 158 },
  { day: 'Fri', Credit: 216, Debit: 179 },
];
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

function Accounts() {
  return (
    <div>
      <div className='px-6 py-3 max-md:px-2  '>
        <div className="'mb-6 r">
          <FinancialStates className='flex ' />
        </div>
        <div className='pt-6 flex justify-between gap-x-7 max-sm:flex-col w-full '>
          <div className='w-full'>
            <Title className='pb-3'>Last Transaction</Title>
            <LastTransaction lastTransactions={lastTransactions} />
          </div>
          <div>
            <div className='flex justify-between mb-3 w-full max-md:mt-4 max-md:mb-1'>
              <Titles>My Card</Titles>
              <Titles className='cursor-pointer'>See All</Titles>
            </div>
            <BalanceCard
              variant='blue'
              balance='$4,250'
              cardHolder='Jane Doe'
              validThru='11/24'
              cardNumber='1234 **** **** 9876'
              chipVariant={<ChipWhiteIcon />}
              className=' max-sm:w-full lg:h-64 lg:w-88  bg-gradient-to-bl from-deep-blue to-primary text-white'
              subtitleColor='text-mist-white'
              DualCircleBg='bg-mist-white'
            />
          </div>
        </div>
      </div>

      <div className='px-6 flex justify-between gap-x-7 max-md:flex-col max-sm:px-2'>
        <div className=' max-md:mb-4 md:w-[70%] w-full'>
          <Titles>Debit & Credit Overview</Titles>
          <DebitCreditOverview
            variant='debitcredit'
            data={debitCreditData}
            xAxisKey='day'
            barKeys={[
              { key: 'Debit', variant: '#1814F3' },
              { key: 'Credit', variant: '#FCAA0B' },
            ]}
            barSize={18}
            radius={5}
            totalDebit={`$${totalDebit}`}
            totalCredit={`$${totalCredit}`}
            className='lg:h-88 w-full h-64'
          />
        </div>
        <div className='md:w-[33%] w-full '>
          <Titles>Invoice Sent</Titles>
          <Invoices Invoicesdata={Invoicesdata} />
        </div>
      </div>
    </div>
  );
}

export default Accounts;
