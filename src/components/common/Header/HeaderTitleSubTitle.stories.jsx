import HeaderTitleSubTitle from './HeaderTitleSubTitle';

export default {
  title: 'HeaderTitleSubTitle',
  component: HeaderTitleSubTitle,
};
export function Default() {
  return (
    <div className='flex flex-col items-center align-middle h-full pt-10'>
      <HeaderTitleSubTitle subTitle='hi' HeaderTitle='how are you' />
    </div>
  );
}
