import BalanceHistory from './BalanceHistory';

const sampleData = [
  { name: 'Jul', uv: 100 },
  { name: 'Aug', uv: 220 },
  { name: 'Sep', uv: 400 },
  { name: 'Oct', uv: 740 },
  { name: 'Nov', uv: 200 },
  { name: 'Dec', uv: 550 },
  { name: 'Jan', uv: 210 },
  { name: '', uv: 600 },
];

export default {
  title: 'Components/BalanceHistory',
  component: BalanceHistory,
};

export const Default = {
  args: {
    data: sampleData,
  },
};
