import {
  AppStoreIcon,
  CardIcon,
  ChangePinCodeIcon,
  GoogleIcon,
} from '../../components/icons';
import CreditCards from './CreditCards';

export default {
  title: 'pages/credit-cards',
  component: CreditCards,
};

const ExpenseCardData = [
  {
    percent: 100,
    value: 'ABM Bank',
    color: '#16DBCC',
  },
  {
    percent: 88,
    value: 'DBL Bank',
    color: '#4C78FF',
  },
  {
    percent: 79,
    value: 'MCP Bank',
    color: '#FFBB38',
  },
  {
    percent: 44,
    value: 'BRC Bank',
    color: '#FF82AC',
  },
];
const cardListData = [
  {
    logo: (
      <CardIcon className='text-royal-blue bg-blue-50 w-15 h-15 max-lg:w-11 max-lg:h-11 p-3 rounded-5 max-lg:rounded-2xl max-sm:rounded-xl  ' />
    ),
    cardType: 'Secondary',
    bank: 'DBL bank',
    cardNumber: '**** 4600',
    namainCard: 'William',
  },
  {
    logo: (
      <CardIcon className='text-light-rose bg-red-100 w-15 h-15 max-lg:w-11 max-lg:h-11 p-3 rounded-5 max-lg:rounded-2xl max-sm:rounded-xl  ' />
    ),
    cardType: 'Secondary',
    bank: 'BRC bank',
    cardNumber: '**** 4300',
    namainCard: 'Michel',
  },
  {
    logo: (
      <CardIcon className='text-amber bg-amber-100 w-15 h-15 max-lg:w-11 max-lg:h-11 p-3 rounded-5 max-lg:rounded-2xl max-sm:rounded-xl ' />
    ),
    cardType: 'Secondary',
    bank: 'ABM bank',
    cardNumber: '**** 7560',
    namainCard: 'Edward',
  },
];
const CardSettingData = [
  {
    id: 1,
    logo: (
      <CardIcon className='rounded-2xl p-3 max-lg:w-11 max-lg:h-11 w-15 h-15 text-amber bg-amber-100' />
    ),
    title: 'block card',
    describtion: 'instantly block your card',
  },
  {
    id: 2,
    logo: (
      <ChangePinCodeIcon className='rounded-2xl p-3 max-lg:w-11 max-lg:h-11 w-15 h-15 text-royal-blue bg-blue-50' />
    ),
    title: 'change pin code',
    describtion: 'choose another pin code',
  },
  {
    id: 3,
    logo: (
      <GoogleIcon className='rounded-2xl p-3 max-lg:w-11 max-lg:h-11 w-15 h-15 text-light-rose bg-rose-100' />
    ),
    title: 'add to google pay',
    describtion: 'withdraw without any card',
  },
  {
    id: 4,
    logo: (
      <AppStoreIcon className='rounded-2xl max-lg:w-11 max-lg:h-11 w-15 h-15 text-aqua-green bg-green-100' />
    ),
    title: 'add to apple pay',
    describtion: 'withdraw without any card ',
  },
  {
    id: 5,
    logo: (
      <AppStoreIcon className='rounded-2xl max-lg:w-11 max-lg:h-11 w-15 h-15 text-aqua-green bg-green-100' />
    ),
    title: 'add to apple store',
    describtion: 'withdraw without any card',
  },
];

export function Default() {
  return (
    <CreditCards
      ExpenseCardData={ExpenseCardData}
      cardListData={cardListData}
      CardSettingData={CardSettingData}
    />
  );
}
