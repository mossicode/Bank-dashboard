import {
  Bar,
  BarChart,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from 'recharts';

export default function Barchart({
  data,
  children,
  barKeys = [],
  barSize,
  radius,
  xAxisKey,
}) {
  return (
    <ResponsiveContainer width='100%' height='100%'>
      <BarChart data={data} barCategoryGap='10%'>
        <XAxis
          dataKey={xAxisKey}
          tick={{
            className: 'fill-dusty-blue text-sm font-normal',
          }}
          axisLine={false}
          tickLine={false}
          padding={{ left: 0, right: 0 }}
        />
        {/* childern */}
        {children}
        <Tooltip />
        <Legend
          layout='horizontal'
          verticalAlign='top'
          align='right'
          content={({ payload }) => (
            <ul className='flex justify-end gap-4 md:gap-6 m-3 text-dusty-blue text-xs'>
              {payload?.map((entry, index) => (
                <li key={`item-${index}`} className='flex items-center gap-2 '>
                  <span
                    className={'w-3 h-3 rounded-full '}
                    style={{
                      backgroundColor: entry.color,
                    }}
                  ></span>
                  <span>{entry.value}</span>
                </li>
              ))}
            </ul>
          )}
        />
        {barKeys.map(({ key, variant }) => (
          <Bar
            key={key}
            dataKey={key}
            fill={variant}
            barSize={barSize}
            radius={radius}
          ></Bar>
        ))}
      </BarChart>
    </ResponsiveContainer>
  );
}
