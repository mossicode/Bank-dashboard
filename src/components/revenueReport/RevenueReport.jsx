import { Line } from 'recharts';
import Linechart from '../common/linechart/LineChart';
import Card from '../common/card/Card';
import { cn } from '../../utils/common';

export default function RevenueReport({ RevenueReportData, className }) {
  return (
    <Card className={cn('font-inter font-light pt-5 px-5  ', className)}>
      <Linechart data={RevenueReportData}>
        <Line
          type='monotone'
          dataKey='investment'
          className='stroke-aqua-green'
          stroke='#16DBCC'
          strokeWidth={3}
          animationEasing='ease-in'
          legendType='none'
          dot={false}
          name='Revenue'
        />
      </Linechart>
    </Card>
  );
}
