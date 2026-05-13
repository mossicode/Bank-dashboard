import {
  CartesianGrid,
  Legend,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
export default function Linechart({ data, children }) {
  return (
    <ResponsiveContainer width='100%' height='100%'>
      <LineChart
        data={data}
        margin={{ top: 5, right: 5, bottom: 5 }}
        className='!outline-0 !border-0'
      >
        <CartesianGrid
          strokeDasharray='4 4'
          vertical={false}
          stroke='#DFE5EE'
        />
        <XAxis
          dataKey='year'
          axisLine={false}
          tickLine={false}
          stroke='#718ebf'
          className=' xl:text-sm text-xs stroke-dusty-blue'
        />
        <YAxis
          domain={[0, 40000]}
          axisLine={false}
          tickLine={false}
          stroke='#718ebf'
          className=' xl:text-sm text-xs stroke-dusty-blue'
          tickFormatter={value => `$${value.toLocaleString()}`}
        />
        <Tooltip
          contentStyle={{
            borderRadius: '0.5rem',
            border: 'none',
            padding: '0.5rem',
            fontSize: '10px',
          }}
          labelStyle={{ fontSize: '12px', fontWeight: 'bold' }}
        />
        <Legend />
        {children}
      </LineChart>
    </ResponsiveContainer>
  );
}
