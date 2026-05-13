import CircleBackground from './CircleBackground';

export default {
  title: 'Components/Common/CircleBackground',
  component: CircleBackground,
  args: {
    className: 'bg-red-300',
    children: 'icon',
  },
};

export function Default(args) {
  return <CircleBackground {...args} />;
}
