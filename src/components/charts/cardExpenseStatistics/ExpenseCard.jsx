import Piechart from '../../common/piechart/Piechart';
import Card from '../../common/card/Card';
import { cn } from '../../../utils/common';

export default function ExpenseCard({
  ExpenseCardData,
  customRadius = 50,
  className = '',
}) {
  return (
    <Card
      className={cn(
        ' xl:pt-0 xl:pb-24 xl:px-12 md:px-10  md:pb-16 pt-0 px-2 pb-16  ',
        className
      )}
    >
      <Piechart data={ExpenseCardData} customRadius={customRadius} />

      {/* custom Legend */}
      <div className='xl:pt-4 grid grid-cols-2 w-full gap-2 p-0 max-md:p-3 max-sm:p-0 items-start justify-start '>
        {ExpenseCardData.map((entry, index) => (
          <div className='flex items-center justify-center gap-1' key={index}>
            <span
              className='xl:size-4 size-2 rounded-full'
              style={{ backgroundColor: entry.color }}
            ></span>
            <span className='xl:text-sm text-xs text-dusty-blue font-medium'>
              {entry.value}
            </span>
          </div>
        ))}
      </div>
    </Card>
  );
}
