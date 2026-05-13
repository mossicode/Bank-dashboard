// InvestmentCard.stories.jsx
import InvestmentCard from './MyInvestment';
// import AppleStoryIcon from '../../../assets/icons/my-investment/AppleStoreIcon';
import AppleStoryIcon from '../../icons/AppStoreIcon';

export default {
  title: 'Components/InvestmentCard',
  component: InvestmentCard,
  argTypes: {
    bgColor: { control: 'color' }, // کنترل رنگ آیکون
    data: {
      control: 'object',
      defaultValue: { name: 'My Investment', money: 432, percent: 57 },
    },
    icon: { control: 'select', options: { AppleStoryIcon } },
  },
};

// const Template = (args) => <InvestmentCard {...args} />;

// export const Default = Template.bind({});
// Default.args = {
//   bgColor: "var(--color-light-rose)",
//   data: { name: "My Investment", money: 432, percent: 57 },
//   icon: AppleStoryIcon,
// };
export function Default() {
  return <InvestmentCard />;
}
