import HeaderTitleItems from './HeaderTitleItem';

export default {
  title: 'HeaderTitleItem',
  component: HeaderTitleItems,
};

export function Default() {
  return (
    <div className='flex flex-col items-center mt-10'>
      <HeaderTitleItems>appleCola</HeaderTitleItems>
    </div>
  );
}
