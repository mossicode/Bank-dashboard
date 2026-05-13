import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts';
import { RAD } from '../../constants/index.js';

function renderLabel({ cx, cy, midAngle, innerRadius, outerRadius, payload }) {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.6;
  const x = cx + radius * Math.cos(-midAngle * RAD);
  const y = cy + radius * Math.sin(-midAngle * RAD);

  return (
    <text
      x={x}
      y={y}
      textAnchor='middle'
      dominantBaseline='central'
      fill='#fff'
      style={{ fontWeight: 700, fontSize: 12 }}
    >
      <tspan x={x} dy={-12}>
        {payload.value}%
      </tspan>
      <tspan x={x} dy={13} style={{ fontSize: 12 }}>
        {payload.name}
      </tspan>
    </text>
  );
}

export default function Piechart({ data }) {
  return (
    <div className='text-center text-sm mx-auto rounded-3xl bg-white'>
      <div className='w-full aspect-square'>
        <ResponsiveContainer width='100%' height='100%' aspect={1}>
          <PieChart>
            <Pie
              data={data}
              dataKey='value'
              nameKey='name'
              cx='50%'
              cy='50%'
              innerRadius='0'
              outerRadius='80%'
              paddingAngle={3}
              minAngle={3}
              labelLine={false}
              label={renderLabel}
              isAnimationActive
            >
              {data.map((d, i) => (
                <Cell
                  key={`cell-${i}`}
                  fill={d.color}
                  stroke='white'
                  strokeWidth={6}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
