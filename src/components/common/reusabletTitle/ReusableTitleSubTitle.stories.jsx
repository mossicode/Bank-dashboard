import ReuesableTitleSubTitle from './ReusableTitleSubTitle';

export default {
  title: 'components/Common/ReusableTitle/ReusableTitleSubtitle',
  component: <ReuesableTitleSubTitle />,
};

export function Default() {
  return (
    <div className=' p-4'>
      <ReuesableTitleSubTitle
        title='reusable Title'
        subTitle='reusable subtitle'
      />
    </div>
  );
}
