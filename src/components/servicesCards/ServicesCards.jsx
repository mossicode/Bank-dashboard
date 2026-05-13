import CircleBackground from '../common/circleBackground/CircleBackground';
import WhiteContainer from '../common/whiteContainer/WhiteContainer';
import RuleLable from '../common/ruleLable/RuleLable';
import { cn } from '../../utils/common';
import HeartIcon from '../icons/HeartIcon';
import LockIcon from '../icons/LockIcon';
import LifeInsurance from '../icons/LifeInsurance';

const StatesIcon = [
  {
    icon: <HeartIcon />,
    bg: 'bg-light-blue',
    titleChild: 'Life Insurance',
    subChild: 'Unlimited protection',
  },

  {
    icon: <LockIcon />,
    bg: 'bg-light-amber',
    titleChild: 'Shopping',
    subChild: 'Buy. Think. Grow.',
  },

  {
    icon: <LifeInsurance className='text-aqua-green size-8' />,
    bg: 'bg-light-green',
    titleChild: 'Safety',
    subChild: 'We are your allies',
  },
];
export default function ServicesCards({ className }) {
  return (
    <div
      className={cn(
        'flex md:flex-row items-center justify-between gap-2 overflow-x-auto whitespace-nowrap hide-scrollbar',
        className
      )}
    >
      {StatesIcon.map((item, id) => (
        <WhiteContainer key={id} className='flex items-center gap-4 w-full '>
          <CircleBackground className={cn('p-3', item.bg)}>
            {item.icon}
          </CircleBackground>
          <RuleLable
            subClassName={'text-dusty-blue font-normal text-sm md:xs'}
            titleClassName={'text-dark-black font-semibold text-base md:sm'}
            titleChild={item.titleChild}
            subChild={item.subChild}
          ></RuleLable>
        </WhiteContainer>
      ))}
    </div>
  );
}
