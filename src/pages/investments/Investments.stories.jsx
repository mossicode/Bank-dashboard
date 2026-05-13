import RedAppleStoreIcon from '../../components/icons/RedAppleStoreIcon';
import SamsungMobileIcon from '../../components/icons/SamsungMobileIcon';
import TeslaMotorsIcon from '../../components/icons/TeslaMotorsIcon';
import Investments from './Investments';

export default {
  title: 'Pages/Investments',
  component: Investments,
};

const TotalInvestmentdata = [
  { year: '2016', investment: 7000 },
  { year: '2017', investment: 22000 },
  { year: '2018', investment: 18000 },
  { year: '2019', investment: 39000 },
  { year: '2020', investment: 21000 },
  { year: '2021', investment: 30000 },
];

const RevenueReportData = [
  { year: '2016', investment: 10000 },
  { year: '', investment: 14000 },
  { year: '2017', investment: 21000 },
  { year: '', investment: 3000 },
  { year: '2018', investment: 28000 },
  { year: '', investment: 33000 },
  { year: '2019', investment: 21000 },
  { year: '', investment: 29000 },
  { year: '2020', investment: 24000 },
  { year: '', investment: 25000 },
  { year: '2021', investment: 16000 },
  { year: '', investment: 32000 },
];

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

const trendingStock = [
  { id: '01', name: 'Trivago', price: '520', return: '5' },
  { id: '02', name: 'Canon', price: '480', return: '10' },
  { id: '03', name: 'Uber Food', price: '350', return: '-3' },
  { id: '04', name: 'Nokia', price: '940', return: '2' },
  { id: '05', name: 'Tiktok', price: '670', return: '-12' },
];

export function Default() {
  return (
    <Investments
      TotalInvestmentdata={TotalInvestmentdata}
      RevenueReportData={RevenueReportData}
      investmentData={investmentData}
      trendingStock={trendingStock}
    />
  );
}
