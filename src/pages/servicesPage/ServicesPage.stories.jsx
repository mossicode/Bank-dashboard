import ServicesPage from './ServicesPage';

import LoanIcon from '../../components/icons/LoanIcon.jsx';
import CheckingAcounts from '../../components/icons/CheckingAcounts.jsx';
import SavingsAcounts from '../../components/icons/SavingsAcounts.jsx';
import AccountIcon from '../../components/icons/AccountIcon.jsx';
import LifeInsurance from '../../components/icons/LifeInsurance.jsx';

const data = [
  {
    logo: (
      <LoanIcon className='w-15 h-15 p-4 rounded-5 lg:text-2.5xl md:text-2.5xl bg-rose-100  text-light-rose max-md:w-11 max-md:h-11 max-md:p-3 max-md:rounded-2xl max-sm:rounded-xl ' />
    ),
    title: 'business loans',
    describtion: 'it is a long established',
    detail1: 'lorem ipsum',
    detail2: 'lorem ipsum',
    detail3: 'lorem ipsum',
  },
  {
    logo: (
      <CheckingAcounts className='w-15 h-15 p-4 rounded-5 lg:text-2.5xl md:text-2.5xl text-amber bg-amber-100 max-md:w-11 max-md:h-11 max-md:p-3 max-md:rounded-2xl max-sm:rounded-xl' />
    ),
    title: 'checking accounts',
    describtion: 'it is a long established',
    detail1: 'lorem ipsum',
    detail2: 'lorem ipsum',
    detail3: 'lorem ipsum',
  },
  {
    logo: (
      <SavingsAcounts className='w-15 h-15 p-4 rounded-5 lg:text-2.5xl md:text-2.5xl text-light-rose bg-rose-100 max-md:w-11 max-md:h-11 max-md:p-3 max-md:rounded-2xl max-sm:rounded-xl' />
    ),
    title: 'savings accounts',
    describtion: 'it is a long established',
    detail1: 'lorem ipsum',
    detail2: 'lorem ipsum',
    detail3: 'lorem ipsum',
  },
  {
    logo: (
      <AccountIcon className='w-15 h-15 rounded-5 lg:text-2.5xl md:text-2.5xl p-4 text-royal-blue bg-blue-100 max-md:w-11 max-md:h-11 max-md:p-3 max-md:rounded-2xl max-sm:rounded-xl' />
    ),
    title: 'debit and credit cards',
    describtion: 'it is a long established',
    detail1: 'lorem ipsum',
    detail2: 'lorem ipsum',
    detail3: 'lorem ipsum',
  },
  {
    logo: (
      <LifeInsurance className='rounded-5 lg:text-2.5xl md:text-2.5xl w-15 h-15 p-4 text-aqua-green bg-green-100 max-md:w-11 max-md:h-11 max-md:p-3 max-md:rounded-2xl max-sm:rounded-xl' />
    ),
    title: 'Life Insurance',
    describtion: 'it is a long established',
    detail1: 'lorem ipsum',
    detail2: 'lorem ipsum',
    detail3: 'lorem ipsum',
  },
  {
    logo: (
      <LoanIcon className='w-15 h-15 p-4 rounded-5 lg:text-2.5xl md:text-2.5xl bg-rose-100  text-light-rose max-md:w-11 max-md:h-11 max-md:p-3 max-md:rounded-2xl max-sm:rounded-xl' />
    ),
    title: 'business loans',
    describtion: 'it is a long established',
    detail1: 'lorem ipsum',
    detail2: 'lorem ipsum',
    detail3: 'lorem ipsum',
  },
];

export default {
  title: 'pages/Services',
  component: ServicesPage,
};

export function Default() {
  return <ServicesPage data={data} />;
}
