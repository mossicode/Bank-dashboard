import CircleBackground from '../common/circleBackground/CircleBackground';
import WhiteContainer from '../common/whiteContainer/WhiteContainer';
import RuleLable from '../common/ruleLable/RuleLable';
import CoinBag from '../icons/CoinBag';
import LoanIcon from '../icons/LoanIcon';
import ExpenseIcon from '../icons/ExpenseIcon';
import { cn } from '../../utils/common';
const titleClassName = 'text-dusty-blue font-normal text-sm md:xs';
const subClassName = 'text-dark-black font-semibold text-base md:sm';
export default function InvestmentCards({ className = '' }) {
  const StatesIcon = [
    {
      icon: <CoinBag className='text-amber' />,
      bg: 'bg-light-amber',
      titleChild: 'Total Invesment Amount ',
      subChild: '$150000',
    },

    {
      icon: <LoanIcon className='text-royal-blue' />,
      bg: 'bg-frosted-blue',
      titleChild: 'Number Of Investment',
      subChild: '$1250',
    },

    {
      icon: <ExpenseIcon className='text-light-rose' />,
      bg: 'bg-soft-cherry',
      titleChild: 'Rate of Return',
      subChild: '+58%',
    },
  ];
  return (
    <div
      className={cn(
        'flex items-center text-nowrap justify-between gap-4 max-sm:flex-col overflow-x-auto whitespace-nowrap hide-scrollbar ',
        className
      )}
    >
      {StatesIcon.map((item, id) => (
        <WhiteContainer key={id} className='flex items-center w-full gap-4   '>
          <CircleBackground className={cn('p-3', item.bg)}>
            {item.icon}
          </CircleBackground>
          <RuleLable
            titleClassName={titleClassName}
            subClassName={subClassName}
            titleChild={item.titleChild}
            subChild={item.subChild}
          ></RuleLable>
        </WhiteContainer>
      ))}
    </div>
  );
}
