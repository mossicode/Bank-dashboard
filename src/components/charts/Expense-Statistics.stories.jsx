import ExpenseStatistics from './Expense-Statistics';

const sampleData = [
  { name: 'Entertainment', value: 30, color: '#343C6A' },
  { name: 'Investment', value: 20, color: '#fa00FF' },
  { name: 'Others', value: 30, color: '#1814F3' },
  { name: 'Bill Expense', value: 20, color: '#FC7900' },
];

export default {
  title: 'Components/ExpenseStatistics',
  component: ExpenseStatistics,
};

export function Default(args) {
  return (
    <div style={{ width: 320, height: 320 }}>
      <ExpenseStatistics {...args} />
    </div>
  );
}

Default.args = {
  data: sampleData,
};
