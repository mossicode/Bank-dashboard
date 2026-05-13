import FiftyRoundedBg from './fiftyRoundedBg';

export default {
  title: 'Components/Common/RoundedBg/FiftyRoundedBg',
  component: FiftyRoundedBg,
  args: {
    classnames: 'border-blue-500 w-1/2 font-inter text-md text-center',
    children: 'the text',
  },
};

export function Default(args) {
  return <FiftyRoundedBg {...args} />;
}
