import TrendingStock from './TrendingStock';

export default {
  title: 'components/TrendingStock',
  component: TrendingStock,
};
const trendingStock = [
  { id: '01', name: 'Trivago', price: '520', return: '5' },
  { id: '02', name: 'Canon', price: '480', return: '10' },
  { id: '03', name: 'Uber Food', price: '350', return: '-3' },
  { id: '04', name: 'Nokia', price: '940', return: '2' },
  { id: '05', name: 'Tiktok', price: '670', return: '-12' },
];
export function Default() {
  return (
    <div className=' lg:w-[445px] max-w-[295px] p-4 max-sm:w-full'>
      <TrendingStock trendingStock={trendingStock} />
    </div>
  );
}
