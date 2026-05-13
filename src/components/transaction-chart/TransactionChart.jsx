import { YAxis, CartesianGrid } from 'recharts';
import Barchart from '../common/barchart/Barchart';
import Card from '../common/card/Card';

export default function TransactionChart({
  className = '',
  yAxisDomain,
  yAxisTicks,
  xAxisFormatter,
  data,
  barKeys = [],
  barSize,
  radius,
  xAxisKey,
}) {
  return (
    <Card className={className}>
      <Barchart
        data={data}
        barKeys={barKeys}
        barSize={barSize}
        radius={radius}
        xAxisKey={xAxisKey}
        yAxisDomain={yAxisDomain}
        yAxisTicks={yAxisTicks}
        xAxisFormatter={xAxisFormatter}
      >
        <CartesianGrid className='stroke-off-white block ' vertical={false} />
        <YAxis
          tick={{
            className: 'fill-dusty-blue text-sm font-normal',
          }}
          axisLine={false}
          tickLine={false}
          {...(Array.isArray(yAxisDomain) ? { domain: yAxisDomain } : {})}
          {...(typeof yAxisTicks === 'number' ? { tickCount: yAxisTicks } : {})}
          {...(xAxisFormatter ? { tickFormatter: xAxisFormatter } : {})}
        />
      </Barchart>
    </Card>
  );
}
