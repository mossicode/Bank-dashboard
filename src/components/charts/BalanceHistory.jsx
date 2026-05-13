import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { cn } from '../../utils/common';

function BalanceHistory({ data, className = '' }) {
  return (
    <div
      className={cn(' w-full shadow-2xl pb-4 pt-4 pe-3 rounded-2xl', className)}
    >
      <ResponsiveContainer width='100%' height='100%'>
        <AreaChart data={data}>
          <defs>
            <linearGradient id='balanceGradient' x1='0' y1='0' x2='0' y2='1'>
              <stop offset='5%' stopColor='#8884d8' stopOpacity={0.8} />
              <stop offset='95%' stopColor='#8884d8' stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray='5 5' />
          <XAxis
            dataKey='name'
            className='sm:text-[12px] text-sm font-semibold'
            axisLine={false}
            interval={0}
          />
          <YAxis axisLine={false} />
          <Tooltip />
          <Area
            type='natural'
            dataKey='uv'
            strokeWidth={4}
            stroke='#1814f3'
            fill='url(#balanceGradient)'
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default BalanceHistory;
