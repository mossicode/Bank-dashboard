import CardIcon from '../../icons/CardIcon';
import ChangePinCodeIcon from '../../icons/ChangePinCodeIcon';
import GoogleIcon from '../../icons/GoogleIcon';
import AppStoreIcon from '../../icons/AppStoreIcon';
import CardSetting from './CardSetting';

export default {
  title: 'CardSetting',
  component: CardSetting,
};
const data = [
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
export function Default() {
  return (
    <div className='w-[350px] max-md:w-[251px] max-sm:w-full p-2'>
      <CardSetting data={data} />
    </div>
  );
}
