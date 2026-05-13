import RuleLable from './RuleLable';

export default {
  title: 'Components/Common/RuleLable',
  component: RuleLable,
  args: {
    titleClassName: 'text-dark-black',
    subClassName: 'text-dusty-blue',
    children: 'The Text',
  },
};

export function Default(args) {
  return <RuleLable {...args} />;
}
