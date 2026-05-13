import TotalInvestment from '../../components/total-investment/TotalInvestment';
import Titles from '../../components/common/titles/Titles';
import RevenueReport from '../../components/revenueReport/RevenueReport';
import Investment from '../../components/investment/Investment';
import TrendingStock from '../../components/common/TrendingStock/TrendingStock';
import InvestmentCards from '../../components/investmentCard/InvestmentCards';
import RedAppleStoreIcon from '../../components/icons/RedAppleStoreIcon';
import SamsungMobileIcon from '../../components/icons/SamsungMobileIcon';
import TeslaMotorsIcon from '../../components/icons/TeslaMotorsIcon';

function Investments() {
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
  return (
    <div className='p-6 max-sm:p-2'>
      <div className='mb-6 flex-wrap'>
        <InvestmentCards />
      </div>

      <div className='flex justify-between mb-4 max-lg:mb-3 gap-y-3 gap-x-5 max-sm:flex-col items-center'>
        <div className='flex flex-col sm:w-1/2 w-full  '>
          <Titles>Yearly Total Investment</Titles>
          <div className='full mt-2'>
            <TotalInvestment
              TotalInvestmentdata={TotalInvestmentdata}
              className='w-full max-lg:h-58 h-72'
            />
          </div>
        </div>
        <div className='sm:w-1/2 w-full'>
          <Titles>Monthly Revenue</Titles>
          <RevenueReport
            RevenueReportData={RevenueReportData}
            className='w-full h-72 max-lg:h-58 mt-2'
          />
        </div>
      </div>
      <div className='flex justify-between w-full gap-7 max-lg:gap-4 max-sm:flex-col items-center'>
        <div className='w-[60%] min-w-0 max-sm:w-full'>
          <Titles className='w-full'> My Investment </Titles>
          <Investment
            investmentData={investmentData}
            className='full mt-2.5 mb-0'
          />
        </div>
        <div className='max-md:me-8 max-sm:me-0  sm:max-w-[40%] min-w-0 max-sm:w-full w-full '>
          <Titles className='text-nowrap'>Trending Stock</Titles>
          <div className='mt-2'>
            <TrendingStock trendingStock={trendingStock} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Investments;
