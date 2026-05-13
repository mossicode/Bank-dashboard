import ExpenseCard from '../../components/charts/cardExpenseStatistics/ExpenseCard';
import BalanceCard from '../../components/credit/BalanceCard';
import { ChipIcon, ChipWhiteIcon } from '../../components/icons';
import CardList from '../../components/cardList/CardList';
import AddCard from '../../components/add-card/AddCard';
import CardSetting from '../../components/common/CardSetting/CardSetting';
import {
  AppStoreIcon,
  CardIcon,
  ChangePinCodeIcon,
  GoogleIcon,
} from '../../components/icons';

function CreditCards({ customRadius = 40 }) {
  const ExpenseCardData = [
    {
      percent: 100,
      value: 'ABM Bank',
      color: '#16DBCC',
    },
    {
      percent: 88,
      value: 'DBL Bank',
      color: '#4C78FF',
    },
    {
      percent: 79,
      value: 'MCP Bank',
      color: '#FFBB38',
    },
    {
      percent: 44,
      value: 'BRC Bank',
      color: '#FF82AC',
    },
  ];
  const cardListData = [
    {
      logo: (
        <CardIcon className='text-royal-blue bg-blue-50 w-15 h-15 max-lg:w-11 max-lg:h-11 p-3 rounded-5 max-lg:rounded-2xl max-sm:rounded-xl  ' />
      ),
      cardType: 'Secondary',
      bank: 'DBL bank',
      cardNumber: '**** 4600',
      namainCard: 'William',
    },
    {
      logo: (
        <CardIcon className='text-light-rose bg-red-100 w-15 h-15 max-lg:w-11 max-lg:h-11 p-3 rounded-5 max-lg:rounded-2xl max-sm:rounded-xl  ' />
      ),
      cardType: 'Secondary',
      bank: 'BRC bank',
      cardNumber: '**** 4300',
      namainCard: 'Michel',
    },
    {
      logo: (
        <CardIcon className='text-amber bg-amber-100 w-15 h-15 max-lg:w-11 max-lg:h-11 p-3 rounded-5 max-lg:rounded-2xl max-sm:rounded-xl ' />
      ),
      cardType: 'Secondary',
      bank: 'ABM bank',
      cardNumber: '**** 7560',
      namainCard: 'Edward',
    },
  ];
  const CardSettingData = [
    {
      id: 1,
      logo: (
        <CardIcon className='rounded-2xl p-3 max-lg:w-11 max-lg:h-11 w-15 h-15 text-amber bg-amber-100' />
      ),
      title: 'block card',
      describtion: 'instantly block your card',
    },
    {
      id: 2,
      logo: (
        <ChangePinCodeIcon className='rounded-2xl p-3 max-lg:w-11 max-lg:h-11 w-15 h-15 text-royal-blue bg-blue-50' />
      ),
      title: 'change pin code',
      describtion: 'choose another pin code',
    },
    {
      id: 3,
      logo: (
        <GoogleIcon className='rounded-2xl p-3 max-lg:w-11 max-lg:h-11 w-15 h-15 text-light-rose bg-rose-100' />
      ),
      title: 'add to google pay',
      describtion: 'withdraw without any card',
    },
    {
      id: 4,
      logo: (
        <AppStoreIcon className='rounded-2xl max-lg:w-11 max-lg:h-11 w-15 h-15 text-aqua-green bg-green-100' />
      ),
      title: 'add to apple pay',
      describtion: 'withdraw without any card ',
    },
    {
      id: 5,
      logo: (
        <AppStoreIcon className='rounded-2xl max-lg:w-11 max-lg:h-11 w-15 h-15 text-aqua-green bg-green-100' />
      ),
      title: 'add to apple store',
      describtion: 'withdraw without any card',
    },
  ];
  return (
    <div className='p-6 gap-y-5 flex flex-col max-sm:p- max-sm:gap-y-3 '>
      <div className='flex justify-between lg:gap-x-10 gap-x-7 overflow-x-auto whitespace-nowrap hide-scrollbar'>
        <BalanceCard
          variant='sky'
          balance='$5,200'
          cardHolder='Alex Smith'
          validThru='09/26'
          cardNumber='9999 **** **** 1111'
          chipVariant={<ChipWhiteIcon />}
          className='xl:w-96 xl:h-60 w-full bg-gradient-to-br from-primary to-blueberry text-white'
          subtitleColor='text-mist-white'
          DualCircleBg='bg-mist-white'
        />
        <BalanceCard
          variant='blue'
          balance='$4,250'
          cardHolder='Jane Doe'
          validThru='11/24'
          cardNumber='1234 **** **** 9876'
          chipVariant={<ChipWhiteIcon />}
          className='xl:w-96 xl:h-60 w-full bg-gradient-to-bl from-deep-blue to-primary text-white'
          subtitleColor='text-mist-white'
          DualCircleBg='bg-mist-white'
        />
        <BalanceCard
          variant='default'
          balance='$5,756'
          cardHolder='Eddy Cusuma'
          validThru='12/25'
          cardNumber='3778 **** **** 1234'
          chipDefault={<ChipIcon />}
          className='xl:w-96 xl:h-60 w-full bg-white text-charcoal-blue'
          subtitleColor='text-dusty-blue'
          DualCircleBg='bg-silver-white'
        />
      </div>
      <div className='flex justify-between gap-x-10 gap-y-4 max-sm:flex-col'>
        <div>
          <ExpenseCard
            ExpenseCardData={ExpenseCardData}
            customRadius={customRadius}
            className='xl:w-84 lg:w-80 h-72 m-auto  w-58 max-lg:h-58 max-lg:w-58 max-sm:m-auto max-sm:h-68'
          />
        </div>
        <div className='w-full'>
          <CardList cardListData={cardListData} className='' />
        </div>
      </div>
      <div className='flex justify-between items-center gap-y-3 gap-x-7 max-md:flex-col '>
        <div className='md:max-w-[60%] w-full'>
          <AddCard
            className='p-10 lg:h-104'
            context='Credit Card generally means a plastic card issued by Scheduled Commercial Banks assigned to a Cardholder, with a credit limit, that can be used to purchase goods and services on credit or obtain cash advances.'
          />
        </div>
        <div className=' md:w-1/2 w-full  '>
          <CardSetting
            className='first:pt-4 last:pb-4'
            data={CardSettingData}
          />
        </div>
      </div>
    </div>
  );
}

export default CreditCards;
