import RedAppleStoreIcon from '../icons/RedAppleStoreIcon';
import SamsungMobileIcon from '../icons/SamsungMobileIcon';
import TeslaMotorsIcon from '../icons/TeslaMotorsIcon';
import Investment from './Investment';
export default {
  title: 'COMPONENTS/investment',
  component: <Investment />,
};
const investmentData = [
  {
    logo: (
      <RedAppleStoreIcon className='text-light-rose bg-light-red w-15 h-15 max-lg:w-11 max-lg:h-11' />
    ),
    name: 'Apple store ',
    describtion: 'E-commerce, Marketplace ',
    envestmentVlaue: '2345',
    returnValue: '16',
  },
  {
    logo: <SamsungMobileIcon />,
    name: 'Samsung mobile',
    describtion: 'E-commerce, Marketplace',
    envestmentVlaue: '2345',
    returnValue: '-4',
  },
  {
    logo: <TeslaMotorsIcon />,
    name: 'Tesla motors',
    describtion: 'Electric vehicles',
    envestmentVlaue: '2345',
    returnValue: '25',
  },
];
export function Default() {
  return (
    <div className='max-w-[635px] p-3 max-lg:max-w-[423px] max-sm:w-full'>
      <Investment investmentData={investmentData} />
    </div>
  );
}
