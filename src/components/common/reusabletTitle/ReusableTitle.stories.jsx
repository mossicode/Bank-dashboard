import ReusableTitle from './ReusableTitle';

export default {
  title: 'components/Common/ReusableTitle/ReusableTitle',
  component: <ReusableTitle />,
};

export function Default() {
  return (
    <div className='text-center m-auto pt-4'>
      <ReusableTitle>reusable Title</ReusableTitle>
    </div>
  );
}
