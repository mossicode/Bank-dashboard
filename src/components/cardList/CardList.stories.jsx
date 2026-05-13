import CardIcon from '../icons/CardIcon';
import CardList from './CardList';

export default {
  title: 'COMPONENTS/cardlist',
  component: CardList,
};
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
export function Default() {
  return (
    <div className=' p-3 w-[730px] max-lg:w-full'>
      <CardList cardListData={cardListData} />
    </div>
  );
}
