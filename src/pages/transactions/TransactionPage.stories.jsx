import {
  CardIcon,
  PayPalIcon,
  MoneyTransactionIcon,
} from '../../components/icons';
import TransactionPage from './TransactionPage';

export default {
  title: 'pages/TransactionPage',
  component: <TransactionPage />,
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

const sampleTransactions = [
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
export function Default() {
  return (
    <TransactionPage
      transactions={transaction}
      transactionsData={sampleTransactions}
    />
  );
}
