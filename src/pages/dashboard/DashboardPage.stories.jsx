import {
  CardIcon,
  MoneyTransactionIcon,
  PayPalIcon,
} from '../../components/icons';
import DashboardPage from './DashboardPage';

export default {
  title: 'pages/dashboard',
  component: <DashboardPage />,
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

const transactionChartData = [
  { day: 'Sat', Deposit: 240, Withdraw: 480 },
  { day: 'Sun', Deposit: 120, Withdraw: 340 },
  { day: 'Mon', Deposit: 260, Withdraw: 320 },
  { day: 'Tue', Deposit: 360, Withdraw: 470 },
  { day: 'Wed', Deposit: 240, Withdraw: 150 },
  { day: 'Thu', Deposit: 230, Withdraw: 380 },
  { day: 'Fri', Deposit: 330, Withdraw: 390 },
];
const expenseStaticsData = [
  { name: 'Entertainment', value: 30, color: '#343C6A' },
  { name: 'Investment', value: 20, color: '#fa00FF' },
  { name: 'Others', value: 30, color: '#1814F3' },
  { name: 'Bill Expense', value: 20, color: '#FC7900' },
];
const transferActionCardUser = [
  {
    id: 1,
    src: '../../../public/assets/images/QuickTransfer/1.png',
    titleChild: 'Mostafa',
    subChild: 'CEO',
  },
  {
    id: 2,
    src: '../../../public/assets/images/QuickTransfer/3.png',
    titleChild: 'Zarafshan',
    subChild: 'director',
  },
  {
    id: 3,
    src: '../../../public/assets/images/QuickTransfer/3.png',
    titleChild: 'Masooma',
    subChild: 'designer',
  },
  {
    id: 4,
    src: '../../../public/assets/images/QuickTransfer/1.png',
    titleChild: 'Livia bator',
    subChild: 'CEO',
  },
  {
    id: 5,
    src: '../../../public/assets/images/QuickTransfer/1.png',
    titleChild: 'randy press',
    subChild: 'director',
  },
  {
    id: 6,
    src: '../../../public/assets/images/QuickTransfer/1.png',
    titleChild: 'workman',
    subChild: 'designer',
  },
];
const balanceHistory = [
  { name: 'Jul', uv: 100 },
  { name: 'Aug', uv: 220 },
  { name: 'Sep', uv: 400 },
  { name: 'Oct', uv: 740 },
  { name: 'Nov', uv: 200 },
  { name: 'Dec', uv: 550 },
  { name: 'Jan', uv: 210 },
  { name: '', uv: 600 },
];
export function Default() {
  return (
    <DashboardPage
      transactions={transaction}
      transactionChartData={transactionChartData}
      expenseStaticsData={expenseStaticsData}
      transferActionCardUser={transferActionCardUser}
      balanceHistory={balanceHistory}
    />
  );
}
