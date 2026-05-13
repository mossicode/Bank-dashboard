import TransactionChart from './TransactionChart';

const sampleData = [
  { day: 'Sat', Deposit: 240, Withdraw: 480 },
  { day: 'Sun', Deposit: 120, Withdraw: 340 },
  { day: 'Mon', Deposit: 260, Withdraw: 320 },
  { day: 'Tue', Deposit: 360, Withdraw: 470 },
  { day: 'Wed', Deposit: 240, Withdraw: 150 },
  { day: 'Thu', Deposit: 230, Withdraw: 380 },
  { day: 'Fri', Deposit: 330, Withdraw: 390 },
];

export default {
  title: 'Components/TransactionChart',
  component: TransactionChart,
  args: {},
};

export function Default(args) {
  return (
    <TransactionChart
      {...args}
      xAxisKey='day'
      barKeys={[
        { key: 'Withdraw', variant: '#1814F3' },
        { key: 'Deposit', variant: '#16DBCC' },
      ]}
      barSize={10}
      radius={30}
      yAxisDomain={[0, 600]}
      yAxisTicks={7}
      className='xl:w-730  xl:h-80 md:w-lg h-64 w-full  '
    />
  );
}

Default.args = {
  data: sampleData,
};
