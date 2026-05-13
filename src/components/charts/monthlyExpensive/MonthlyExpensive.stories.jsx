import MonthlyExpenses from './MonthlyExpensive';

export default {
  title: 'Components/Charts/monthlyExpenses',
  component: MonthlyExpenses,
  args: {},
};

const monthlyData = [
  { month: 'Jul', expense: 100 },
  { month: 'Aug', expense: 220 },
  { month: 'Sep', expense: 400 },
  { month: 'Oct', expense: 740 },
  { month: 'Nov', expense: 200 },
];

export function Default() {
  return (
    <MonthlyExpenses
      data={monthlyData}
      barKeys={['expense']}
      xAxisKey='month'
      radius={[8, 8, 0, 0]}
      yAxisDomain={[0, 'dataMax']}
      barGap={10} // optional override
      barCategoryGap='30%' // optional override
    />
  );
}
