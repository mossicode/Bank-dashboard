import { cn } from '../../utils/common';
import Card from '../common/card/Card';
export default function BalanceCard({
  variant,
  balance,
  cardHolder,
  validThru,
  cardNumber,
  chipDefault,
  chipVariant,
  className,
  subtitleColor,
  DualCircleBg,
}) {
  return (
    <Card
      className={cn(
        'flex flex-col justify-between w-2xs border-1 border-azureish-White font-inter',
        className
      )}
    >
      <div className='flex justify-between items-center p-4 py-3 leading-full'>
        <div className='flex flex-col mb-1'>
          <p className='xl:text-sm text-xs'>Balance</p>
          <span className=' xl:text-xl text-lg font-semibold'>{balance}</span>
        </div>

        {/* chip icon */}
        <div>{variant === 'default' ? chipDefault : chipVariant}</div>
      </div>

      <div className='xl:text-sm flex justify-between items-start p-4 py-2 text-xs  tracking-0'>
        <div className='flex flex-col p-2 mb-0.5'>
          <p className={cn('font-normal leading-full', subtitleColor)}>
            CARD HOLDER
          </p>
          <span className={`font-semibold`}>{cardHolder}</span>
        </div>

        <div className='flex flex-col p-2 mb-0.5'>
          <p className={cn(`font-normal leading-full`, subtitleColor)}>
            VALID THRU
          </p>
          <span className={`font-semibold`}>{validThru}</span>
        </div>
      </div>

      <div
        className={cn(
          `flex justify-between p-2 lg:p-4
          bg-gradient-to-b from-cloud-white to-transparent-white`,
          variant === 'default' && 'border-t border-azureish-White'
        )}
      >
        <p className='xl:text-2xl text-sm font-semibold'>{cardNumber}</p>
        <div className='relative h-8 w-12 flex items-center justify-center'>
          <span
            className={cn(
              `xl:size-8 left-0 absolute rounded-full size-5  `,
              DualCircleBg
            )}
          />
          <span
            className={cn(
              `xl:size-8  left-2 absolute rounded-full size-5 `,
              DualCircleBg
            )}
          />
        </div>
      </div>
    </Card>
  );
}
