import { PieChart, Pie, ResponsiveContainer, Cell } from 'recharts';
export default function Piechart({ data, customRadius }) {
  return (
    <ResponsiveContainer
      aspect={1}
      width='100%'
      height='100%'
      className={'outlineNone'}
    >
      <PieChart>
        <Pie
          cx='50%'
          cy='45%'
          data={data}
          dataKey='percent'
          label={false}
          nameKey='value'
          innerRadius={customRadius}
          stroke='none'
        >
          {data.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={entry.color}
              outerRadius={entry.customRadius}
              className='!outline-none'
            />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
}
