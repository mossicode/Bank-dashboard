import { Line } from 'recharts';
import Card from '../common/card/Card';
import Linechart from '../common/linechart/LineChart';
import { cn } from '../../utils/common';

export default function TotalInvestment({
  TotalInvestmentdata,
  className = '',
}) {
  return (
    <Card className={cn('font-inter font-light pt-5 px-5', className)}>
      <Linechart data={TotalInvestmentdata}>
        <Line
          type='linear'
          dataKey='investment'
          className='stroke-vivid-amber'
          stroke='#EDA10D'
          dot={{ r: 4, strokeWidth: 3 }}
          strokeWidth={3}
          animationEasing='ease-in'
          legendType='none'
        />
      </Linechart>
    </Card>
  );
}
