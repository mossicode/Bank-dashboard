import ReusableSubTitle from './ReusableSubTitle';

export default {
  title: 'components/Common/ReusableTitle/ReusableSubTitle',
  component: <ReusableSubTitle />,
};

export function Default() {
  return (
    <div className='text-center m-auto pt-4'>
      <ReusableSubTitle>reusable SubTitle</ReusableSubTitle>
    </div>
  );
}
