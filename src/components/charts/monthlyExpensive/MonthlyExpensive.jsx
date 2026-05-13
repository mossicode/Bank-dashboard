import { ResponsiveContainer, BarChart, XAxis, YAxis, Bar } from 'recharts';

export default function MonthlyExpenses({
  data = [],
  barKeys = ['expense'], // array of bar keys
  xAxisKey = 'month',
  yAxisDomain, // e.g., [0, 'dataMax']
  yAxisTicks, // e.g., [0, 1000, 2000, ...]
  xAxisFormatter, // function to format x labels
  radius = [8, 8, 0, 0],
  className = '',
}) {
  return (
    <div className={`w-full ${className}`} style={{ height: 300 }}>
      <ResponsiveContainer width='100%' height='100%'>
        <BarChart
          data={data}
          barGap={5} // <--- space between bars in same group
        >
          <XAxis dataKey={xAxisKey} tickFormatter={xAxisFormatter} />
          <YAxis domain={yAxisDomain} ticks={yAxisTicks} />
          {barKeys.map((key, index) => (
            <Bar
              key={key}
              dataKey={key}
              fill={index % 2 === 0 ? '#4CAF50' : '#F44336'} // alternate colors
              radius={radius}
            />
          ))}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
