import Barchart from '../common/barchart/Barchart';
import Card from '../common/card/Card';
import { Text } from 'recharts';

export default function DebitCreditOverview({
  className,
  data,
  barKeys = [],
  barSize,
  radius,
  xAxisKey,
  totalDebit,
  totalCredit,
}) {
  return (
    <Card className={className}>
      <Barchart
        data={data}
        barKeys={barKeys}
        barSize={barSize}
        radius={radius}
        xAxisKey={xAxisKey}
      >
        <Text
          x={25}
          y={30}
          className={`fill-dusty-blue xl:flex text-xs font-normal hidden `}
        >
          {`${totalDebit} Debited & ${totalCredit} Credited in this Week`}
        </Text>
      </Barchart>
    </Card>
  );
}
