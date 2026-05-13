import ExpenseCard from './ExpenseCard';

const ExpenseCardData = [
  {
    percent: 100,
    value: 'ABM Bank',
    color: '#16DBCC',
  },
  {
    percent: 88,
    value: 'DBL Bank',
    color: '#4C78FF',
  },
  {
    percent: 79,
    value: 'MCP Bank',
    color: '#FFBB38',
  },
  {
    percent: 44,
    value: 'BRC Bank',
    color: '#FF82AC',
  },
];

export default {
  title: 'Charts/ExpenseCard',
  component: ExpenseCard,
};

export function Default(args) {
  return (
    <ExpenseCard
      {...args}
      customRadius={50}
      className={'xl:w-96 md:w-80 h-80  w-72'}
    />
  );
}

Default.args = {
  ExpenseCardData: ExpenseCardData,
};
