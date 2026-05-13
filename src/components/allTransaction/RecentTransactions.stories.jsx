import RecentTransactions from './RecentTransactions';

export default {
  title: 'Components/RecentTransactionss',
  component: RecentTransactions,
};

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

// ✅ Use function declaration to fix func-style error
export function Default() {
  return (
    <div className='w-[1110px] max-lg:w-[731px] max-sm:w-full'>
      <RecentTransactions transactionsData={sampleTransactions} />
    </div>
  );
}
export function Expense() {
  return (
    <RecentTransactions
      transactionsData={sampleTransactions.filter(tx => tx.amount < 0)}
    />
  );
}
export function Income() {
  return (
    <RecentTransactions
      transactionsData={sampleTransactions.filter(tx => tx.amount > 0)}
    />
  );
}
