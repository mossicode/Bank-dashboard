import RevenueReport from './RevenueReport';

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

export default {
  title: 'Charts/RevenueReport',
  component: RevenueReport,
};
export function def() {
  return (
    <RevenueReport
      className='h-50 w-full'
      RevenueReportData={RevenueReportData}
    />
  );
}

export function Default(args) {
  return <RevenueReport {...args} />;
}
Default.args = {
  RevenueReportData: RevenueReportData,
  className: 'xl:w-540 xl:h-72  md:w-100 md:h-64 w-full h-56',
};
