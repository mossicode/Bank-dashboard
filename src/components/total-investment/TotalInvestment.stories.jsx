import TotalInvestment from './TotalInvestment';

const TotalInvestmentdata = [
  {
    year: '2016',
    investment: 7000,
  },
  {
    year: '2017',
    investment: 22000,
  },
  {
    year: '2018',
    investment: 18000,
  },
  {
    year: '2019',
    investment: 39000,
  },
  {
    year: '2020',
    investment: 21000,
  },
  {
    year: '2021',
    investment: 30000,
  },
];

export default {
  title: 'Charts/TotalInvestment',
  component: TotalInvestment,
};

export function Def() {
  return (
    <TotalInvestment
      TotalInvestmentdata={TotalInvestmentdata}
      className='w-full h-56'
    />
  );
}
export function Default(args) {
  return (
    <TotalInvestment
      {...args}
      className='xl:w-540 xl:h-72  md:w-100 md:h-64  
                 w-full h-56'
    />
  );
}
Default.args = {
  TotalInvestmentdata: TotalInvestmentdata,
  className: 'xl:w-540 xl:h-72  md:w-100 md:h-64 w-full h-56',
};
