import CircleBackground from '../common/circleBackground/CircleBackground';
import WhiteContainer from '../common/whiteContainer/WhiteContainer';
import RuleLable from '../common/ruleLable/RuleLable';
import CoinBag from '../icons/CoinBag';
import LoanIcon from '../icons/LoanIcon';
import ExpenseIcon from '../icons/ExpenseIcon';
import { cn } from '../../utils/common';
import TotalSaving from '../icons/TotalSaving';

const titleClassName = 'text-dusty-blue font-normal text-xs md:xs';
const subClassName = 'text-dark-black font-semibold text-xs md:sm';

const StatesIcon = [
  {
    icon: <CoinBag className='text-amber' />,
    bg: 'bg-light-amber',
    titleChild: 'My Balance ',
    subChild: '$1000',
  },

  {
    icon: <LoanIcon className='text-royal-blue' />,
    bg: 'bg-frosted-blue',
    titleChild: 'Income',
    subChild: '$3000',
  },

  {
    icon: <ExpenseIcon className='text-light-rose' />,
    bg: 'bg-soft-cherry',
    titleChild: 'Expenses',
    subChild: '$2000',
  },
  {
    icon: <TotalSaving />,
    bg: 'bg-green-100',
    titleChild: 'Total Saving ',
    subChild: '$7920',
  },
];
export default function FinancialStates({ className = '' }) {
  return (
    <div
      className={cn(
        'flex items-center justify-between text-nowrap max-sm:flex-wrap  max-sm:gap-x-1 gap-x-5 gap-y-3  overflow-x-auto whitespace-nowrap hide-scrollbar ',
        className
      )}
    >
      {StatesIcon.map((item, id) => (
        <WhiteContainer
          key={id}
          className='flex items-center text-xs text-amber max-sm:w-[48%] w-full  gap-2   '
        >
          <CircleBackground
            className={cn('p-2 max-sm:w-8 max-sm:h-8 ', item.bg)}
          >
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
