import DebitCreditOverview from './DebitCreditOverview';
const debitCreditData = [
  { day: 'Sat', Credit: 234, Debit: 135 },
  { day: 'Sun', Credit: 186, Debit: 106 },
  { day: 'Mon', Credit: 139, Debit: 102 },
  { day: 'Tue', Credit: 123, Debit: 212 },
  { day: 'Wed', Credit: 214, Debit: 150 },
  { day: 'Thu', Credit: 105, Debit: 158 },
  { day: 'Fri', Credit: 216, Debit: 179 },
];

// total Credit & Debit
const totalCredit = debitCreditData.reduce((sum, item) => sum + item.Credit, 0);
const totalDebit = debitCreditData.reduce((sum, item) => sum + item.Debit, 0);

export default {
  title: 'Components/DebitCreditOverview',
  component: DebitCreditOverview,
  args: {},
};

export function Default(args) {
  return (
    <DebitCreditOverview
      variant='debitcredit'
      {...args}
      xAxisKey='day'
      barKeys={[
        { key: 'Debit', variant: '#1814F3' },
        { key: 'Credit', variant: '#FCAA0B' },
      ]}
      barSize={18}
      radius={5}
      totalDebit={`$${totalDebit}`}
      totalCredit={`$${totalCredit} `}
      className='xl:w-730 xl:h-80 md:w-lg  md:h-64 w-full h-60 '
    />
  );
}
Default.args = {
  data: debitCreditData,
};
