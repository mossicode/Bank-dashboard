import CircleBackground from '../common/circleBackground/CircleBackground';
import WhiteContainer from '../common/whiteContainer/WhiteContainer';
import RuleLable from '../common/ruleLable/RuleLable';
import { cn } from '../../utils/common';
import HeartIcon from '../icons/HeartIcon';
import LockIcon from '../icons/LockIcon';
import LifeInsurance from '../icons/LifeInsurance';
export default function LoanCards({ className = '' }) {
  const StatesIcon = [
    {
      icon: <HeartIcon />,
      bg: 'bg-light-blue',
      titleChild: 'Personal Loans',
      subChild: '$50000',
    },

    {
      icon: <LockIcon />,
      bg: 'bg-light-amber',
      titleChild: 'Corporate Loans',
      subChild: '$100000',
    },

    {
      icon: <LifeInsurance className='text-aqua-green size-8' />,
      bg: 'bg-light-green',
      titleChild: 'Business Loans',
      subChild: '$50000',
    },
    {
      icon: <HeartIcon />,
      bg: 'bg-light-blue',
      titleChild: 'Custom Loans',
      subChild: 'Choose Money',
    },
  ];
  return (
    <div
      className={cn(
        'flex md:flex-row items-center justify-between gap-5 overflow-x-auto whitespace-nowrap hide-scrollbar',
        className
      )}
    >
      {StatesIcon.map((item, id) => (
        <WhiteContainer key={id} className='flex items-center gap-3 w-full '>
          <CircleBackground className={cn('p-3', item.bg)}>
            {item.icon}
          </CircleBackground>
          <RuleLable
            subClassName={'text-dark-black font-semibold text-base md:sm'}
            titleClassName={' text-dusty-blue font-normal text-sm md:xs'}
            titleChild={item.titleChild}
            subChild={item.subChild}
          ></RuleLable>
        </WhiteContainer>
      ))}
    </div>
  );
}
