import LoansPage from './LoansPage';

export default {
  title: 'pages/loans',
  component: LoansPage,
};
const loans = [
  {
    id: 1,
    loan: '100000',
    left: '40500',
    duration: '8 ',
    rate: '12',
    installment: '2000',
  },
  {
    id: 2,
    loan: '500000',
    left: '250000',
    duration: '36 ',
    rate: '10',
    installment: '8000',
  },
  {
    id: 3,
    loan: '900000',
    left: '40500',
    duration: '12 ',
    rate: '12',
    installment: '5000',
  },
  {
    id: 4,
    loan: '50000',
    left: '40500',
    duration: '25 ',
    rate: '5',
    installment: '2000',
  },
  {
    id: 5,
    loan: '50000',
    left: '40500',
    duration: '5 ',
    rate: '16',
    installment: '10000',
  },
  {
    id: 6,
    loan: '80000',
    left: '25500',
    duration: '14 ',
    rate: '8',
    installment: '2000',
  },
  {
    id: 7,
    loan: '12000',
    left: '5500',
    duration: '9 ',
    rate: '13',
    installment: '500',
  },
  {
    id: 8,
    loan: '160000',
    left: '100800',
    duration: '3 ',
    rate: '12',
    installment: '900',
  },
];
export function Default() {
  return <LoansPage loans={loans} />;
}
