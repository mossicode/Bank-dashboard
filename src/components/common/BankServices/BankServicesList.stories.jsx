import BankServicesList from './BankServicesList';
import LoanIcon from '../../icons/LoanIcon.jsx';
import CheckingAcounts from '../../icons/CheckingAcounts.jsx';
import SavingsAcounts from '../../icons/SavingsAcounts.jsx';
import AccountIcon from '../../icons/AccountIcon.jsx';
import LifeInsurance from '../../icons/LifeInsurance.jsx';
export default {
  title: 'COMPONENTS/BankServicesList',
  component: BankServicesList,
};
const data = [
  {
    logo: (
      <LoanIcon className='w-15 h-15 p-4 rounded-5  bg-rose-100  text-light-rose lg:text-2.5xl  max-lg:w-11 max-lg:h-11 max-lg:p-3 max-lg:rounded-2xl max-sm:rounded-xl ' />
    ),
    title: 'business loans',
    describtion: 'it is a long established',
    detail1: 'lorem ipsum',
    detail2: 'lorem ipsum',
    detail3: 'lorem ipsum',
  },
  {
    logo: (
      <CheckingAcounts className='w-15 h-15 p-4 rounded-5  text-amber bg-amber-100 lg:text-2.5xl max-lg:w-11 max-lg:h-11 max-lg:p-3 max-lg:rounded-2xl max-sm:rounded-xl' />
    ),
    title: 'checking accounts',
    describtion: 'it is a long established',
    detail1: 'lorem ipsum',
    detail2: 'lorem ipsum',
    detail3: 'lorem ipsum',
  },
  {
    logo: (
      <SavingsAcounts className='w-15 h-15 p-4 rounded-5   text-light-rose lg:text-2.5xl bg-rose-100 max-lg:w-11 max-lg:h-11 max-lg:p-3 max-lg:rounded-2xl max-sm:rounded-xl' />
    ),
    title: 'savings accounts',
    describtion: 'it is a long established',
    detail1: 'lorem ipsum',
    detail2: 'lorem ipsum',
    detail3: 'lorem ipsum',
  },
  {
    logo: (
      <AccountIcon className='w-15 h-15 rounded-5  p-4 text-royal-blue bg-blue-100  lg:text-2.5xl max-lg:w-11 max-lg:h-11 max-lg:p-3 max-lg:rounded-2xl max-sm:rounded-xl' />
    ),
    title: 'debit and credit cards',
    describtion: 'it is a long established',
    detail1: 'lorem ipsum',
    detail2: 'lorem ipsum',
    detail3: 'lorem ipsum',
  },
  {
    logo: (
      <LifeInsurance className='rounded-5 w-15 h-15 p-4 text-aqua-green bg-green-100 lg:text-2.5xl max-lg:w-11 max-lg:h-11 max-lg:p-3 max-lg:rounded-2xl max-sm:rounded-xl' />
    ),
    title: 'Life Insurance',
    describtion: 'it is a long established',
    detail1: 'lorem ipsum',
    detail2: 'lorem ipsum',
    detail3: 'lorem ipsum',
  },
  {
    logo: (
      <LoanIcon className='w-15 h-15 p-4 rounded-5 lg:text-2.5xl lg:text-2.5xl bg-rose-100  text-light-rose max-lg:w-11 max-lg:h-11 max-lg:p-3 max-lg:rounded-2xl max-sm:rounded-xl' />
    ),
    title: 'business loans',
    describtion: 'it is a long established',
    detail1: 'lorem ipsum',
    detail2: 'lorem ipsum',
    detail3: 'lorem ipsum',
  },
];
export function Default() {
  return (
    <div className='p-3'>
      <BankServicesList data={data} />
    </div>
  );
}
