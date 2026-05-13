import { ChipIcon, ChipWhiteIcon } from '../icons';
import BalanceCard from './BalanceCard';

export default {
  title: 'Components/BalanceCard',
  component: BalanceCard,
  args: {},
};

// Default Variant
export function DefaultVariant() {
  return (
    <BalanceCard
      variant='default'
      balance='$5,756'
      cardHolder='Eddy Cusuma'
      validThru='12/25'
      cardNumber='3778 **** **** 1234'
      chipDefault={<ChipIcon />}
      className='xl:w-96 xl:h-60 bg-white text-charcoal-blue'
      subtitleColor='text-dusty-blue'
      DualCircleBg='bg-silver-white'
    />
  );
}

// Blue => Variant
export function BlueVariant() {
  return (
    <BalanceCard
      variant='blue'
      balance='$4,250'
      cardHolder='Jane Doe'
      validThru='11/24'
      cardNumber='1234 **** **** 9876'
      chipVariant={<ChipWhiteIcon />}
      className='xl:w-96 xl:h-60 bg-gradient-to-bl from-deep-blue to-primary text-white'
      subtitleColor='text-mist-white'
      DualCircleBg='bg-mist-white'
    />
  );
}

// sky variant
export function SkyVariant() {
  return (
    <BalanceCard
      variant='sky'
      balance='$5,200'
      cardHolder='Alex Smith'
      validThru='09/26'
      cardNumber='9999 **** **** 1111'
      chipVariant={<ChipWhiteIcon />}
      className='xl:w-96 xl:h-60 bg-gradient-to-br from-primary to-blueberry text-white'
      subtitleColor='text-mist-white'
      DualCircleBg='bg-mist-white'
    />
  );
}
