import SubtitleItem from './SubTitleItem';

export default {
  title: 'SubtitleItem',
  component: SubtitleItem,
};

export function Default() {
  return (
    <div className='flex flex-col  items-center h-full  pt-20'>
      <SubtitleItem>how are you</SubtitleItem>
    </div>
  );
}
